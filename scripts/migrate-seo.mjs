import { createClient } from 'next-sanity';
import fs from 'fs';
import path from 'path';

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

if (!projectId || !dataset || !token) {
  console.error('Missing projectId, dataset, or token configuration');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-10-22',
  token,
  useCdn: false,
});

// 2. Read backup file
const backupPath = path.resolve(process.cwd(), 'backups/sanity-backup-all-documents.json');
if (!fs.existsSync(backupPath)) {
  console.error('Backup file not found at:', backupPath);
  process.exit(1);
}

const allBackupDocs = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
const metaDocs = allBackupDocs.filter((d) => d._type === 'meta');

console.log(`Found ${metaDocs.length} metadata documents in backup.`);

const BASE_URL = 'https://paydens.vercel.app';

function transformMetadataToSeoFields(oldSeo) {
  if (!oldSeo) return null;

  const canon = oldSeo.canonurl
    ? (oldSeo.canonurl.startsWith('http')
        ? oldSeo.canonurl
        : `${BASE_URL}${oldSeo.canonurl.startsWith('/') ? oldSeo.canonurl : '/' + oldSeo.canonurl}`)
    : undefined;

  return {
    _type: 'meta-object',
    page: oldSeo.page,
    ...(typeof oldSeo.priority === 'number' ? { priority: oldSeo.priority } : {}),
    seo: {
      _type: 'seoFields',
      title: oldSeo.title || '',
      description: oldSeo.description || '',
      keywords: Array.isArray(oldSeo.keywords) ? oldSeo.keywords : [],
      ...(canon ? { canonicalUrl: canon } : {}),
      robots: {
        _type: 'robots',
        noIndex: Boolean(oldSeo.noindex),
        noFollow: Boolean(oldSeo.nofollow),
        noTranslate: false,
        noImageIndex: false,
      },
      openGraph: {
        title: oldSeo.ogTitle || oldSeo.title || '',
        description: oldSeo.ogDescription || oldSeo.description || '',
        ...(oldSeo.ogUrl || canon ? { url: oldSeo.ogUrl || canon } : {}),
        type: oldSeo.ogType || 'website',
        imageType: 'upload',
        ...(oldSeo.ogImage ? { image: oldSeo.ogImage } : {}),
      },
      twitter: {
        card: oldSeo.twitterCard || 'summary_large_image',
        title: oldSeo.twitterTitle || oldSeo.ogTitle || oldSeo.title || '',
        description: oldSeo.twitterDescription || oldSeo.ogDescription || oldSeo.description || '',
        imageType: 'upload',
        ...(oldSeo.twitterImage ? { image: oldSeo.twitterImage } : oldSeo.ogImage ? { image: oldSeo.ogImage } : {}),
        ...(oldSeo.twitterSite ? { site: oldSeo.twitterSite } : {}),
      },
      ...(oldSeo.ogImage ? { metaImage: oldSeo.ogImage } : {}),
    },
  };
}

async function migrate() {
  console.log('\n--- Starting SEO Migration ---');
  let successCount = 0;

  for (const doc of metaDocs) {
    const pageName = doc.seo?.page || doc._id;
    console.log(`\nMigrating: [${pageName}] (ID: ${doc._id})`);

    const newSeo = transformMetadataToSeoFields(doc.seo);
    if (!newSeo) {
      console.warn(`Skipping ${doc._id} because doc.seo is empty.`);
      continue;
    }

    try {
      // Overwrite the entire `seo` object on the published document
      await client
        .patch(doc._id)
        .set({ seo: newSeo })
        .commit();

      console.log(`✅ Successfully updated published doc: ${doc._id}`);

      // Check if there is also an active draft document and update it as well
      const draftId = `drafts.${doc._id}`;
      const draftExists = await client.getDocument(draftId).catch(() => null);
      if (draftExists) {
        await client
          .patch(draftId)
          .set({ seo: newSeo })
          .commit();
        console.log(`   (Also updated corresponding draft: ${draftId})`);
      }

      successCount++;
    } catch (err) {
      console.error(`❌ Failed to update doc ${doc._id}:`, err.message);
    }
  }

  console.log(`\n==============================================`);
  console.log(`Migration completed: ${successCount}/${metaDocs.length} updated successfully.`);
  console.log(`==============================================\n`);
}

migrate().catch((err) => {
  console.error('Fatal migration error:', err);
  process.exit(1);
});
