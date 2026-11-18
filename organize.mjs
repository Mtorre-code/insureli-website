// Rebuilds the src/ and public/ folders from files that were uploaded
// loose into the repository root. Runs automatically before each build.
import { existsSync, mkdirSync, copyFileSync, readdirSync } from 'node:fs';

const map = {
  'src/components': ['CarrierMarquee.astro', 'CoverageHub.astro', 'CtaBand.astro', 'Icon.astro', 'PageHero.astro', 'ReviewCarousel.astro', 'TeamGrid.astro'],
  'src/layouts': ['Base.astro'],
  'src/data': ['coverages.ts', 'site.ts'],
  'src/styles': ['global.css'],
  'public/images': ['logo-light.png', 'michael-torre.jpg', 'shield.png'],
  public: ['favicon.png'],
};
const placed = new Set(Object.values(map).flat());
map['src/pages'] = readdirSync('.').filter((f) => f.endsWith('.astro') && !placed.has(f));

for (const [dir, files] of Object.entries(map)) {
  mkdirSync(dir, { recursive: true });
  for (const f of files) {
    if (!existsSync(f)) continue;
    const dest = `${dir}/${f}`;
    if (!existsSync(dest)) copyFileSync(f, dest);
  }
}
console.log('organize: folders ready');
