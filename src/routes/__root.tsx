import { TanStackDevtools } from "@tanstack/react-devtools";
import { formDevtoolsPlugin } from "@tanstack/react-form-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { ConvexQueryClient } from "@convex-dev/react-query";
import { ConvexProvider } from "convex/react";
import { RootProvider as FumaRootProvider } from "fumadocs-ui/provider/tanstack";

import { PostHogProvider } from "~/components/analytics/posthog-provider";
import { ErrorComponent } from "~/components/error-component";
import { NotFoundComponent } from "~/components/not-found-component";
import { ThemeProvider } from "~/components/theme-provider";
import { Toaster } from "~/components/ui/sonner";
import { seoMeta } from "~/utils/seo";

import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: seoMeta({ title: "default", url: "/" }),
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-96x96.png",
        sizes: "96x96"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-192x192.png",
        sizes: "192x192"
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg"
      },
      {
        rel: "shortcut icon",
        href: "/favicon.ico"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      }
    ]
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFoundComponent,
  errorComponent: (e) => <ErrorComponent message={e.error.message} />
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const convexQueryClient = new ConvexQueryClient(
    import.meta.env.VITE_CONVEX_URL
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <FumaRootProvider search={{ enabled: true }}>
          <PostHogProvider>
            <ConvexProvider client={convexQueryClient.convexClient}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Toaster position="top-center" />
                {children}
              </ThemeProvider>
            </ConvexProvider>
          </PostHogProvider>
        </FumaRootProvider>

        <TanStackDevtools
          config={{
            position: "bottom-right"
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />
            },
            {
              name: "Tanstack Query",
              render: <ReactQueryDevtoolsPanel />
            },
            formDevtoolsPlugin()
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
