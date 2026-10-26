const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paydens.vercel.app';

export function GET() {
  const content = `# AI Permissions
User-agent: *
Allow: /
Disallow: /studio
Disallow: /account

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/allconditions-health/sitemap.xml
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
