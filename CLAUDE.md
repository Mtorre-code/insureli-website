# Insure LI Agency website

Public website for Insure LI Agency Inc. (Massapequa, NY), live at https://insureli.com.

## How it's built and hosted
- **Astro** static site. `npm run build` outputs to `dist/`.
- **GitHub:** `Mtorre-code/insureli-website`. Pushing to `main` publishes the site automatically.
- **Netlify:** project `insureli-website` (free, credit-based plan with 300 credits a month). Each production deploy costs about 15 credits, so **batch changes into as few pushes as possible**. Add `[skip netlify]` to a commit message for changes that don't affect the site, like docs.
- **Domain:** registered at GoDaddy, with DNS at GoDaddy. `A @ → 75.2.60.5` and `CNAME www → insureli-website.netlify.app`. Never change the MX, TXT, SRV or Microsoft 365 CNAME records, because they run the agency's email.

## Where things live
- Agency details, team, reviews and carriers: `src/data/site.ts`
- Coverage pages (one entry per product, rendered by `src/pages/[slug].astro`): `src/data/coverages.ts`
- Shared header, footer and SEO: `src/layouts/Base.astro`
- Styles and animations: `src/styles/global.css`
- Logo: `public/images/logo.svg` (vector, from the brand kit)
- Carrier logos: `public/carriers/`

## Forms
- The quote, service and contact forms use **Netlify Forms** (`data-netlify="true"`).
- Netlify emails every submission to **customerservice@insureli.com**. Change the recipients in Netlify → Forms → Form notifications.

## Reviews
- Saved reviews live in `src/data/site.ts` (`reviews`).
- Live Google reviews come from `netlify/functions/reviews.mjs` at `/api/reviews`. It uses Google Places (New) with a Google key in the `GOOGLE_PLACES_API_KEY` or `API_KEY` Netlify environment variable (each is tried), and `GOOGLE_PLACE_ID` is optional. Netlify's CDN caches the result for 12 hours, and Google shares at most 5 reviews.
- Pages fetch the live reviews in the browser (`src/scripts/live-reviews.ts`). They show newest first, with a "New" badge for reviews under 60 days old. If the service is down, the saved reviews still show.
- Coverage pages show reviews matching the page's topic first (the `topics` map in `src/pages/[slug].astro`).

## Content rules
- No invented statistics or claims. Mark facts that aren't confirmed as placeholders and ask the owner.
- States served: NY, NJ, CT, PA and FL. There's no 24/7 after-hours line.
- Respect `prefers-reduced-motion` for all animations, and check pages at phone width.
