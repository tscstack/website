import { PostHogProvider as RealPostHogProvider } from "posthog-js/react";

export const PostHogProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

  if (VITE_BASE_URL.includes("localhost")) {
    return children;
  }

  const apiKey = import.meta.env.VITE_POSTHOG_KEY;
  const apiHost = import.meta.env.VITE_POSTHOG_HOST;

  return (
    <RealPostHogProvider apiKey={apiKey} options={{ api_host: apiHost }}>
      {children}
    </RealPostHogProvider>
  );
};
