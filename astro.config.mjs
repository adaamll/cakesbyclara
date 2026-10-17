// @ts-check
import { defineConfig } from 'astro/config';

// SITE och BASE sätts av GitHub Actions vid publicering på GitHub Pages
// (t.ex. https://användare.github.io/cakes-by-clara). Lokalt behövs inget.
const base = process.env.BASE || '/';

export default defineConfig({
  site: process.env.SITE || 'https://cakesbyclara.se',
  base,
  // Sortimentet är ersatt av galleriet (målet måste innehålla base på GitHub Pages)
  redirects: { '/sortiment': `${base.replace(/\/$/, '')}/galleri/` },
});
