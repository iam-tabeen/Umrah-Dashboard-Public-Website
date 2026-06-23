import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Check } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import dashboardImg from "@/assets/dashboard-hero.jpg";
import cornerImg from "@/assets/corner.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-12 md:pb-32 md:pt-20">
      {/* decorative background — behind everything */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        
      </div>

      {/* corner image — above bg, below content */}
      <motion.img
        src={cornerImg}
        alt=""
        className="pointer-events-none absolute left-0 top-0 z-0 h-auto w-auto max-w-[40vw] -translate-x-1/2 -translate-y-1/2 opacity-50 sm:max-w-[30%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      />

      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-card-soft">
            <span className="text-sm leading-none">🇵🇰</span>
            Built for Pakistani Umrah agencies
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Stop Calculating Umrah Packages on{" "}
            <span className="text-gradient">Excel & WhatsApp</span>
          </h1>

          <p className="mt-6 max-w-full text-base text-muted-foreground sm:text-lg lg:max-w-xl">
            A complete CRM built for Pakistani Umrah agencies — build a full
            package quote, generate a professional invoice, and share it on
            WhatsApp, all in under 60 seconds.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {["Free lifetime hosting", "Free Lifetime domain", "No monthly fees"].map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm"
              >
                <Check className="h-3.5 w-3.5 shrink-0" />
                {t}
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Get Started — PKR 14,999 One-Time
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#solution">
                <ArrowRight className="h-4 w-4" />
                See How It Works
              </a>
            </Button>
          </div>

          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-black/20 opacity-20 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border-4 border-gray-300 bg-card ">
            <img
              src={dashboardImg}
              alt="Umrah Dashboard — CRM and package calculator interface"
              width={1280}
              height={896}
              className="h-auto w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}