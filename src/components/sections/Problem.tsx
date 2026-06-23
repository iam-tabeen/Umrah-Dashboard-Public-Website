import { FadeIn } from "@/components/FadeIn";
import { AlertTriangle, Clock, MessageSquareX, FileQuestion } from "lucide-react";
import { motion } from "framer-motion";
import cornerImg from "@/assets/corner.png";

const items = [
  {
    icon: AlertTriangle,
    title: "Inconsistent pricing",
    desc: "Different staff quote different prices for the same package.",
  },
  {
    icon: Clock,
    title: "Hours wasted in Excel",
    desc: "Manually calculating visa, hotel, and ticket costs for every lead.",
  },
  {
    icon: MessageSquareX,
    title: "Unprofessional quotes",
    desc: "Packages sent as plain WhatsApp text — no branding, no structure.",
  },
  {
    icon: FileQuestion,
    title: "No central record",
    desc: "Bookings, payments, and profit scattered across notebooks and chats.",
  },
];

export function Problem() {
  return (
    <section className="relative py-20 md:py-28">
      {/* corner decoration — right side, 50% off screen */}
      <motion.img
        src={cornerImg}
        alt=""
        className="pointer-events-none absolute right-0 top-0 z-20 h-auto w-auto max-w-[40vw] translate-x-1/2 -translate-y-1/2 opacity-40 sm:max-w-[28%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      />

      <div className="container-x relative z-10">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">The problem</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Sound familiar?</h2>
          <p className="mt-4 text-muted-foreground">
            Most Pakistani Umrah agencies still run on spreadsheets and group chats.
            Here's what that actually costs you.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}