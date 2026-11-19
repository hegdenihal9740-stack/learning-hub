// Local Vite has no Lovable asset proxy; use the project's asset-serving origin there.
export function assetUrl(path: string, local = import.meta.env.DEV) {
  return local && path.startsWith('/__l5e/assets-v1/')
    ? `https://id-preview--ab302686-be0d-4f8b-9003-cc398a455d14.lovable.app${path}`
    : path;
}