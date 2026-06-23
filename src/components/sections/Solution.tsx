import { FadeIn } from "@/components/FadeIn";
import { Users, Building2, Plane, FileText } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Select passengers & route",
    desc: "Choose Adult, Child, Infant counts and your departure city.",
  },
  {
    icon: Building2,
    title: "Pick hotels & nights",
    desc: "Select Makkah and Madinah hotels, room type, and number of nights.",
  },
  {
    icon: Plane,
    title: "Add transport & margin",
    desc: "Add ziarats, transport, and set your profit margin per package.",
  },
  {
    icon: FileText,
    title: "Instant cost breakdown",
    desc: "Ready to invoice or share on WhatsApp — in under 60 seconds.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="bg-secondary/40 py-20 md:py-28">
      <div className="container-x">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            One calculator. Every cost. Instant quote.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From inquiry to invoice in four simple steps.
          </p>
        </FadeIn>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="relative h-full rounded-xl border border-border bg-card p-6 shadow-card-soft">
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-hero-gradient text-sm font-bold text-primary-foreground shadow-md">
                  {i + 1}
                </div>
                <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}