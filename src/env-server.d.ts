declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: "development" | "production";
      readonly CONVEX_DEPLOYMENT: string;
      readonly POLAR_SERVER: "sandbox" | "production";
      readonly POLAR_ACCESS_TOKEN: string;
      readonly POLAR_WEBHOOK_SECRET: string;
      readonly VITE_POLAR_PRODUCT_ID: string;
    }
  }
}

export {};
