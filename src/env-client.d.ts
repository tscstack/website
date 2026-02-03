interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_CONVEX_URL: string;
  readonly VITE_POLAR_PRODUCT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
