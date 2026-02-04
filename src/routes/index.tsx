import { useState } from "react";

import { createFileRoute, Link } from "@tanstack/react-router";

import { api } from "convex/_generated/api";
import { useAction } from "convex/react";
import {
  ArrowRight,
  Check,
  Code2,
  Database,
  Gauge,
  Lock,
  Rocket,
  ScanSearch,
  Sparkles,
  Wrench,
  Zap
} from "lucide-react";

import { BuiltWithIndieShip } from "~/components/built-with-indie-ship";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "~/components/ui/card";
import { Spinner } from "~/components/ui/spinner";
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

const pricingPlan = {
  name: "IndieShip",
  originalPrice: "$120",
  price: "$20",
  description: "Early bird pricing. Lifetime access.",
  features: [
    "Full source code access",
    "Lifetime updates",
    "Convex integration",
    "Auth with Clerk",
    "Payment integration",
    "SEO optimization",
    "Analytics",
    "Utilities",
    "Discord community",
    "Priority support"
  ],
  cta: "Get IndieShip"
};

const faqs = [
  {
    question: "What's included in the boilerplate?",
    answer:
      "Everything you need to ship: TanStack Ecosystem setup, Convex integration, Clerk authentication, payment integration, shadcn/ui components, SEO optimization, analytics, and useful utilities. Just clone and start building."
  },
  {
    question: "Why headless, not complete?",
    answer:
      "We believe in giving you the freedom to build your own design system. Headless gives you full control over your UI while providing the best-in-class integrations for your business need."
  },
  {
    question: "How often is it updated?",
    answer:
      "We update dependencies weekly and add new features monthly. You'll get lifetime access to all updates."
  },
  {
    question: "Is IndieShip only for indie hackers?",
    answer:
      "No! IndieShip is for anyone building a web application. Whether you're a solo founder, a small team, or a large organization, IndieShip provides the foundation you need."
  },
  {
    question: "Is IndieShip better than other boilerplates?",
    answer:
      "We don't want to compare our headless approach with other boilerplates. Other boilerplates you see are mostly the complete ones and ours is the headless one with freedom to build your own design system."
  },
  {
    question: "Do I need to know TanStack, Convex, Clerk, or anything else?",
    answer:
      "This headless boilerplate is designed to be production-ready grade. Some setups might be overwhelming for you, but we provide comprehensive documentation and examples."
  },
  {
    question: "What if I get stuck?",
    answer:
      "Just send an email at sithuknt@gmail.com or join our Discord community."
  },
  {
    question: "Can I get refund?",
    answer:
      "Unfortunately, we don't offer refunds. Once you purchase, you own it forever."
  }
];

function LandingPage() {
  const [isNavLoading, setIsNavLoading] = useState(false);
  const [isHeroLoading, setIsHeroLoading] = useState(false);
  const [isPricingLoading, setIsPricingLoading] = useState(false);
  const [isCtaLoading, setIsCtaLoading] = useState(false);
  const generateCheckoutUrl = useAction(api.data.polar.generateCheckoutUrl);

  const isCheckoutLoading =
    isNavLoading || isHeroLoading || isPricingLoading || isCtaLoading;

  const handleCheckout = async (setLoading: (loading: boolean) => void) => {
    setLoading(true);
    try {
      const checkoutUrl = await generateCheckoutUrl();

      if (typeof window !== "undefined") {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Checkout failed:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <img src="/indieship-logo.png" className="w-30" alt="IndieShip" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/docs/$">Docs</Link>
            </Button>
            <Button
              size="lg"
              className="gap-2"
              onClick={() => handleCheckout(setIsNavLoading)}
              disabled={isCheckoutLoading}
            >
              {isNavLoading ? <Spinner /> : <Sparkles />} Get IndieShip
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium mb-8">
            <span className="flex size-2 rounded-full bg-green-500 animate-pulse" />
            Get early pricing with discount
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Ultimate Headless SaaS Boilerplate
            {/* <br /> */}
            {/* <span className="text-primary">days, not months</span> */}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            The headless TanStack + Convex + Clerk boilerplate. Everything you
            need to build and launch your next product. <br /> Just add unique
            styling and your business logics
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => handleCheckout(setIsHeroLoading)}
              disabled={isCheckoutLoading}
            >
              {isHeroLoading ? <Spinner /> : <Sparkles />} Get IndieShip
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

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, one-time pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pay once, own forever. No subscriptions, no surprises.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <Card className="border-primary shadow-lg">
              <CardHeader>
                <CardTitle className="mb-4">{pricingPlan.name}</CardTitle>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold">
                    {pricingPlan.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    {pricingPlan.originalPrice}
                  </span>
                </div>
                <CardDescription>{pricingPlan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pricingPlan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="size-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-6"
                  onClick={() => handleCheckout(setIsPricingLoading)}
                  disabled={isCheckoutLoading}
                >
                  {isPricingLoading ? <Spinner /> : <Sparkles />}{" "}
                  {pricingPlan.cta}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="border-t bg-muted/30 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <Rocket className="mx-auto size-12 mb-6 opacity-90" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to ship your SaaS?
              </h2>
              {/* <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
                Join hundreds of founders who shipped faster with IndieShip.
                Your boilerplate is waiting.
              </p> */}
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                onClick={() => handleCheckout(setIsCtaLoading)}
                disabled={isCheckoutLoading}
              >
                Get IndieShip Now
                {isCtaLoading ? <Spinner /> : <ArrowRight className="size-4" />}
              </Button>
              {/* <p className="mt-4 text-sm text-primary-foreground/60">
                14-day money-back guarantee. No questions asked.
              </p> */}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <BuiltWithIndieShip />

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://x.com/itsithu"
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
            <a
              href="/docs"
              target="_blank"
              rel="noopener"
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Docs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
