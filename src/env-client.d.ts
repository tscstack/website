interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_CONVEX_URL: string;
  readonly VITE_POLAR_PRODUCT_ID: string;
  readonly VITE_POSTHOG_KEY: string;
  readonly VITE_POSTHOG_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
