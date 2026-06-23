import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -bottom-32 left-1/2 -z-10 h-72 w-[120%] -translate-x-1/2 rounded-[50%] bg-accent/30 blur-3xl" aria-hidden />

      <FadeIn className="container-x text-center text-foreground">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
          Ready to run your agency like a pro?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Get set up this week. One payment, lifetime ownership, real support.
        </p>
        <div className="mt-9 flex justify-center">
          <Button asChild variant="gold" size="xl">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Book Your Free Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}