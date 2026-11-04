import { createClient } from 'next-sanity';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// 1. Read environment variables from .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.error('.env.local file not found');
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const getEnv = (key) => {
  const match = envContent.match(new RegExp(`^${key}=["']?([^"'\\r\\n]+)`, 'm'));
  return match ? match[1].trim() : process.env[key];
};

const projectId = getEnv('NEXT_PUBLIC_SANITY_PROJECT_ID') || getEnv('SANITY_STUDIO_PROJECT_ID');
const dataset = getEnv('NEXT_PUBLIC_SANITY_DATASET') || getEnv('SANITY_STUDIO_DATASET') || 'production';
const token = getEnv('SANITY_API_TOKEN');

if (!projectId || !dataset) {
  console.error('Missing projectId or dataset configuration');
  process.exit(1);
}

const backupsDir = path.resolve(process.cwd(), 'backups');
if (!fs.existsSync(backupsDir)) {
  fs.mkdirSync(backupsDir, { recursive: true });
}

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
console.log(`Starting Sanity backup for project: ${projectId}, dataset: ${dataset}...`);

async function run() {
  // A. Export via Sanity CLI (tar.gz with all documents and downloaded assets)
  const tarName = `sanity-backup-${dataset}-${timestamp}.tar.gz`;
  const latestTarName = `sanity-backup-production.tar.gz`;
  const tarPath = path.join(backupsDir, latestTarName);

  console.log(`\n1. Creating full Sanity CLI archive export (including assets)...`);
  try {
    execSync(
      `npx sanity dataset export ${dataset} "${tarPath}" --overwrite`,
      {
        cwd: process.cwd(),
        env: { ...process.env, SANITY_AUTH_TOKEN: token },
        stdio: 'inherit',
      }
    );
    // Also save timestamped copy
    fs.copyFileSync(tarPath, path.join(backupsDir, tarName));
  } catch (err) {
    console.warn(`Warning: Sanity CLI export encountered an issue:`, err.message);
  }

  // B. Export complete JSON via client query (*[])
  console.log(`\n2. Fetching all documents directly via GROQ client...`);
  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2026-10-22',
    token,
    useCdn: false,
  });

  const docs = await client.fetch('*[]');
  const jsonPath = path.join(backupsDir, 'sanity-backup-all-documents.json');
  const timestampJsonPath = path.join(backupsDir, `sanity-backup-all-documents-${timestamp}.json`);
  
  fs.writeFileSync(jsonPath, JSON.stringify(docs, null, 2), 'utf8');
  fs.writeFileSync(timestampJsonPath, JSON.stringify(docs, null, 2), 'utf8');

  // C. Export NDJSON
  const ndjsonPath = path.join(backupsDir, 'sanity-backup-documents.ndjson');
  const ndjsonContent = docs.map((d) => JSON.stringify(d)).join('\n');
  fs.writeFileSync(ndjsonPath, ndjsonContent, 'utf8');

  // Breakdown by type
  const countsByType = {};
  for (const doc of docs) {
    countsByType[doc._type] = (countsByType[doc._type] || 0) + 1;
  }

  console.log('\n=========================================');
  console.log('✅ SANITY BACKUP COMPLETED SUCCESSFULLY');
  console.log('=========================================');
  console.log(`Total documents: ${docs.length}`);
  console.log('Document counts by type:');
  console.table(countsByType);
  console.log('Saved files:');
  console.log(`- ${path.relative(process.cwd(), tarPath)} (Archive with image assets)`);
  console.log(`- ${path.relative(process.cwd(), jsonPath)} (Pretty JSON)`);
  console.log(`- ${path.relative(process.cwd(), ndjsonPath)} (NDJSON)`);
}

run().catch((err) => {
  console.error('Backup failed:', err);
  process.exit(1);
});
