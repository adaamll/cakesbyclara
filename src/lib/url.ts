/** Bygger en länk som fungerar även när sajten ligger under en undermapp (GitHub Pages). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  if (path.startsWith('#') || path.startsWith('?')) return `${base}/${path}`;
  return `${base}/${path.replace(/^\//, '')}`;
}

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
