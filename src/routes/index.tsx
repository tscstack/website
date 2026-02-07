import { createFileRoute, Link } from "@tanstack/react-router";

// import { api } from "convex/_generated/api";
// import { useAction } from "convex/react";
import {
  Check,
  Code2,
  Database,
  Gauge,
  Lock,
  Rocket,
  ScanSearch,
  Sparkles,
  Star,
  Wrench,
  Zap
} from "lucide-react";

import { BuiltWithTSCStack } from "~/components/built-with-tscstack";
import { Button } from "~/components/ui/button";
import { Card, CardDescription, CardHeader } from "~/components/ui/card";
import { seoMeta } from "~/utils/seo";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: ({ match }) => ({
    meta: seoMeta({ title: "default", url: match.fullPath })
  })
});

const features = [
  {
    icon: Code2,
    title: "TanStack Ecosystem"
  },
  {
    icon: Database,
    title: "Convex Integration"
  },
  {
    icon: Lock,
    title: "Clerk Auth"
  },
  {
    icon: Rocket,
    title: "Payment Integration"
  },
  {
    icon: Sparkles,
    title: "SEO optimization"
  },
  {
    icon: ScanSearch,
    title: "Analytics"
  },
  {
    icon: Wrench,
    title: "Utilities"
  },
  {
    icon: Zap,
    title: "Instant Deploy"
  },
  {
    icon: Gauge,
    title: "Performance First"
  }
];

const benefits = [
  "Focus on features, not infrastructure",
  "Production-ready from day one",
  "Regular updates and improvements"
];

function LandingPage() {
  // const generateCheckoutUrl = useAction(api.data.polar.generateCheckoutUrl);

  // const handleCheckout = async () => {
  //   try {
  //     const checkoutUrl = await generateCheckoutUrl();

  //     if (typeof window !== "undefined") {
  //       window.location.href = checkoutUrl;
  //     }
  //   } catch (error) {
  //     console.error("Checkout failed:", error);
  //   }
  // };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <img src="/tscstack-logo.png" className="w-30" alt="TSC Stack" />
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/docs/$">Docs</Link>
            </Button>
            <Button asChild>
              <a href="https://github.com/tscstack/tscstack">
                <Star className="fill-amber-400 border-2 stroke-amber-400" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Free and Open-Source Headless Boilerplate
            {/* <br /> */}
            {/* <span className="text-primary">days, not months</span> */}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            The headless TanStack + Convex + Clerk boilerplate. Everything you
            need to build and launch your next product. <br /> Just add unique
            styling and your business logics
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild>
              <Link to="/docs/$">Read the Docs</Link>
            </Button>
            <Button asChild>
              <a href="https://github.com/tscstack/tscstack">
                <Star className="fill-amber-400 border-2 stroke-amber-400" />
                GitHub
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {benefits.slice(0, 3).map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <Check className="size-4 text-green-500" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to ship
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stop wasting time on boilerplate. Start building your product.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="group">
                <CardHeader className="flex gap-2 items-center">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="size-5 text-primary" />
                  </div>
                  <CardDescription>{feature.title}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <BuiltWithTSCStack />

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://x.com/heysithu"
              target="_blank"
              rel="noopener"
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Twitter
            </a>
            <a
              href="https://discord.gg/j947Ac4kps"
              target="_blank"
              rel="noopener"
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Discord
            </a>
            <Link
              to="/docs/$"
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Docs
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
