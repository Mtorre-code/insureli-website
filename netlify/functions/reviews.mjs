// Live Google reviews for insureli.com.
//
// Asks Google Places (New) for the agency's rating, review count and the
// reviews Google shares (up to 5), and returns them newest first. Netlify's
// CDN caches the answer for 12 hours, so Google is called about twice a day.
//
// Needs the GOOGLE_PLACES_API_KEY environment variable in Netlify.
// GOOGLE_PLACE_ID is optional; without it the place is looked up by name.

const QUERY = 'Insure LI Agency Inc, 582 Hicksville Road, Massapequa, NY 11758';
const FIELDS = ['id', 'rating', 'userRatingCount', 'googleMapsUri', 'reviews'];

const json = (body, status, cache) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=900',
      'Netlify-CDN-Cache-Control': cache,
    },
  });

async function fetchPlace(key, placeId) {
  const headers = { 'X-Goog-Api-Key': key };
  if (placeId) {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: { ...headers, 'X-Goog-FieldMask': FIELDS.join(',') },
    });
    if (!res.ok) throw new Error(`Place details failed: ${res.status}`);
    return res.json();
  }
  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json', 'X-Goog-FieldMask': FIELDS.map((f) => `places.${f}`).join(',') },
    body: JSON.stringify({ textQuery: QUERY, maxResultCount: 1 }),
  });
  if (!res.ok) throw new Error(`Place search failed: ${res.status}`);
  const data = await res.json();
  if (!data.places?.length) throw new Error('Place not found');
  return data.places[0];
}

export function shapeReviews(place) {
  const reviews = (place.reviews || [])
    .filter((r) => (r.rating || 0) >= 4 && (r.originalText?.text || r.text?.text))
    .map((r) => ({
      name: r.authorAttribution?.displayName || 'Google user',
      profile: r.authorAttribution?.uri || null,
      rating: r.rating,
      text: (r.originalText?.text || r.text?.text || '').trim(),
      time: r.publishTime || null,
      relative: r.relativePublishTimeDescription || null,
    }))
    .sort((a, b) => (b.time || '').localeCompare(a.time || ''));
  return {
    rating: place.rating ?? null,
    count: place.userRatingCount ?? null,
    url: place.googleMapsUri ?? null,
    reviews,
    fetchedAt: new Date().toISOString(),
  };
}

export default async () => {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return json({ error: 'not_configured' }, 503, 'no-store');
  try {
    const place = await fetchPlace(key, process.env.GOOGLE_PLACE_ID);
    return json(shapeReviews(place), 200, 'public, durable, s-maxage=43200, stale-while-revalidate=86400');
  } catch (err) {
    console.error(err);
    return json({ error: 'unavailable' }, 502, 'public, s-maxage=300');
  }
};

export const config = { path: '/api/reviews' };
