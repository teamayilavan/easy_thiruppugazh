import { writeFileSync, statSync } from 'fs'; // 1. Import statSync
import { globby } from 'globby';
import { SitemapStream, streamToPromise } from 'sitemap';

async function generate() {
  const siteUrl = 'https://chinnathiruppugazh.ayilavan.org'; // Replace with your domain

  // Get all the page routes
  const pages = await globby([
    'build/**/*.html',   // Include all HTML files
    '!build/**/404.html' // Exclude the 404 page
  ]);

  const stream = new SitemapStream({ hostname: siteUrl });

  // Transform the file paths into URLs and write them to the stream
  pages.forEach(page => {
    const path = page.replace('build', '').replace('index.html', '').replace('.html', '');

    // 2. Get the file stats to find the last modification time
    const stats = statSync(page);
    const lastmod = stats.mtime; // This is a Date object

    // 3. Add the lastmod property to the stream entry
    stream.write({
      url: path,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: lastmod // The sitemap library handles date formatting
    });
  });

  stream.end();

  // Convert the stream to XML string
  const sitemapXml = (await streamToPromise(stream)).toString();

  // Write the sitemap to the build output
  writeFileSync('build/sitemap.xml', sitemapXml);

  console.log('Sitemap generated successfully!');
}

generate();