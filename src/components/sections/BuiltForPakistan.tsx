import { FadeIn } from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Coins, MapPin, CreditCard, Users2 } from "lucide-react";

const items = [
  {
    icon: Coins,
    title: "Auto SAR → PKR conversion",
    desc: "Quote in Riyals or Rupees — the system converts at your set rate, automatically.",
  },
  {
    icon: MapPin,
    title: "Pre-loaded Pakistani cities",
    desc: "Karachi, Lahore, Islamabad, Peshawar, Multan and more — ready out of the box.",
  },
  {
    icon: CreditCard,
    title: "Local payment methods",
    desc: "JazzCash, EasyPaisa, bank transfer, and cash — track them all in one ledger.",
  },
  {
    icon: Users2,
    title: "Tiered visa pricing",
    desc: "Price visas exactly how Pakistani agencies do it — 1, 2, 3, 4, and 5+ PAX brackets.",
  },
];

export function BuiltForPakistan() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-x relative z-10 text-foreground">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <Badge className="border-0 bg-accent text-accent-foreground">🇵🇰 Built for Pakistan</Badge>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Designed around how Pakistani agencies really work
          </h2>
          <p className="mt-4 text-muted-foreground">
            Not a generic CRM with a Pakistan sticker — every feature reflects local pricing, payments, and workflow.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-white/20 bg-white/[0.08] p-6 backdrop-blur-sm transition-all hover:border-accent/60 hover:bg-white/[0.14]">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}