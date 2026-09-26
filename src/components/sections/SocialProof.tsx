import { FadeIn } from "@/components/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    agency: "Fast Travels",
    location: "Lahore",
    quote:
      "We used to spend 20–30 minutes on every package in Excel. Now our team builds a full quote and sends it on WhatsApp in under a minute. Clients notice the difference immediately.",
    initials: "FT",
  },
  {
    agency: "Ehsan Bhutta Travels",
    location: "Faisalabad",
    quote:
      "The branded invoices alone were worth it. No more messy screenshots — every quote looks professional, and our booking staff can create packages without calling accounts every time.",
    initials: "EB",
  },
  {
    agency: "Travel Me",
    location: "Karachi",
    quote:
      "Staff permissions and one-click WhatsApp sharing changed how we operate. Booking, accounts, and visa teams each see what they need — nothing gets lost in group chats anymore.",
    initials: "TM",
  },
];

export function SocialProof() {
  return (
    <section id="social-proof" className="border-y border-border bg-secondary/30 py-16 md:py-20">
      <div className="container-x">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Social Proof</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            Trusted by agencies across Pakistan
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <FadeIn key={item.agency} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card-soft">
                <Quote className="h-5 w-5 text-primary/60" aria-hidden />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary"
                    aria-hidden
                  >
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.agency}</p>
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                  </div>
                </footer>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
