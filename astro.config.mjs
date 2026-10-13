import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://spellcache.com',
  // Pages Cloudflare sert /legal/ et /legal ; on garde des URL sans slash final.
  trailingSlash: 'never',
  build: {
    format: 'file',
    // Feuilles de style en fichiers externes : la CSP n'autorise aucun style inline.
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      // Scripts en fichiers externes : la CSP n'autorise aucun script inline.
      assetsInlineLimit: 0,
    },
  },
});
