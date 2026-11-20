/**
 * Asset URL Resolver for GitHub Pages & Local Environments
 * Ensures relative assets (/certificates, /images, /profile.jpg, /resume.pdf)
 * always resolve with the correct repository subpath (e.g. /priyansh-portfolio/).
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  const cleanPath = path.replace(/^\.?\//, '');

  if (typeof window !== 'undefined') {
    const origin = window.location.origin;
    let pathname = window.location.pathname;

    // Handle index.html or other html files in pathname
    if (pathname.endsWith('.html')) {
      pathname = pathname.substring(0, pathname.lastIndexOf('/') + 1);
    }

    const base = pathname.endsWith('/') ? pathname : `${pathname}/`;
    return `${origin}${base}${cleanPath}`;
  }

  const base = (import.meta as any).env?.BASE_URL || './';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${cleanPath}`;
}
