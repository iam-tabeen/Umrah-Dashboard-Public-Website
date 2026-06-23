import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const includes = [
  "Full CRM + Package Calculator",
  "Unlimited bookings & invoices",
  "Free lifetime domain ( _______.netlify.app )",
  "Free lifetime hosting (Netlify)",
  "Staff accounts with role permissions",
  "WhatsApp package sharing",
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-secondary/40 py-20 md:py-28">
      <div className="container-x">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Pay once. Own it forever.
          </h2>
          <p className="mt-4 text-muted-foreground">
            No subscriptions, no per-user fees, no surprise bills next month.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-12 max-w-lg">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-8 shadow-elegant md:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold-gradient opacity-25 blur-3xl"
              aria-hidden
            />
            <div className="flex items-center justify-between gap-3">
              <Badge className="border-0 bg-accent text-accent-foreground">One-Time Payment</Badge>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Lifetime license
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight md:text-6xl">PKR 14,999</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              No subscriptions. No monthly fees. Pay once, own it forever.
            </p>

            <ul className="mt-8 space-y-3">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="hero" size="xl" className="mt-8 w-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Get Started Today
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Setup & onboarding included. Be live within 48 hours.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}