// Loads live Google reviews from the site's /api/reviews function.
// Returns null when the service isn't set up or Google is unavailable,
// so pages keep showing the saved reviews.

export type LiveReview = {
  name: string;
  profile: string | null;
  rating: number;
  text: string;
  time: string | null;
  relative: string | null;
};
export type LiveData = { rating: number | null; count: number | null; url: string | null; reviews: LiveReview[] };

const NEW_DAYS = 60;
let pending: Promise<LiveData | null> | null = null;

export function loadLiveReviews(): Promise<LiveData | null> {
  pending ??= fetch('/api/reviews')
    .then((r) => (r.ok ? r.json() : null))
    .then((d) => (d && Array.isArray(d.reviews) ? (d as LiveData) : null))
    .catch(() => null);
  return pending;
}

export const reviewKey = (name: string, text: string) => `${name.split(' ')[0]}|${text.slice(0, 40)}`.toLowerCase();

export const isNew = (r: LiveReview) => !!r.time && Date.now() - Date.parse(r.time) < NEW_DAYS * 86400000;

export const reviewDate = (r: LiveReview) =>
  r.time ? new Date(r.time).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : r.relative || '';
