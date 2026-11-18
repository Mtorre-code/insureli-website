import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.insureli.com',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (p) => !p.includes('/thank-you') })],
});
