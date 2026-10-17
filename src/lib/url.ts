/** Bygger en länk som fungerar även när sajten ligger under en undermapp (GitHub Pages). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  if (path.startsWith('#') || path.startsWith('?')) return `${base}/${path}`;
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Egna bilder anges som "images/fil.webp" (ligger i public/), annars ett Unsplash-id. */
export const img = (id: string, w = 1200) =>
  id.startsWith('images/')
    ? url(id)
    : `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
