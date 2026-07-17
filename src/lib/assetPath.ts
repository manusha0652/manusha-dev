// Prefixes a root-relative public asset path (e.g. "/projects/x.jpg") with Vite's
// configured base path, so raw string paths resolve correctly under a subpath
// deployment like GitHub Pages (base: "/manusha-dev/") as well as at the domain
// root (base: "/"). Only needed for paths used as runtime strings — assets pulled
// in via `import` are already base-aware.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base.endsWith("/") ? base.slice(0, -1) : base}${path.startsWith("/") ? path : `/${path}`}`;
}
