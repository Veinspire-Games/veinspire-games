import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://veinspire-games.com/', // твой домен
  base: '/',                             // для username.github.io всегда '/'
  integrations: [sitemap()],
  scopedStyleStrategy: 'where'
});
