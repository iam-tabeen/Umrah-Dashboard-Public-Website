import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpenIcon, Check, X, ZoomIn } from "lucide-react";
import { WHATSAPP_URL, DEMO_URL, HERO_VIDEO_SRC, HERO_GIF_SRC } from "@/lib/constants";
import dashboardImg from "@/assets/Dashboard.jpg";
import cornerImg from "@/assets/corner.png";
import { motion, AnimatePresence } from "framer-motion";

function HeroMedia({ onEnlarge }: { onEnlarge: () => void }) {
  return (
    <button
      onClick={onEnlarge}
      className="group relative w-full overflow-hidden rounded-2xl border-4 border-gray-300 bg-card focus:outline-none"
      aria-label="View full demo"
    >
      <div className="relative w-full">
        {HERO_VIDEO_SRC ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={dashboardImg}
            className="h-auto w-full object-contain"
            aria-label="Umrah Dashboard product demo"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        ) : HERO_GIF_SRC ? (
          <img
            src={HERO_GIF_SRC}
            alt="Umrah Dashboard — CRM and package calculator demo"
            className="h-auto w-full object-contain"
          />
        ) : (
          <img
            src={dashboardImg}
            alt="Umrah Dashboard — CRM and package calculator interface"
            width={1280}
            height={896}
            className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20 cursor-pointer">
        <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
          <ZoomIn className="h-4 w-4" />
          Click to enlarge
        </div>
      </div>
    </button>
  );
}

export function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const lightboxSrc = HERO_GIF_SRC || dashboardImg;

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-12 md:pb-32 md:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10" />

      <motion.img
        src={cornerImg}
        alt=""
        className="pointer-events-none absolute left-0 top-0 z-0 h-auto w-auto max-w-[40vw] -translate-x-1/2 -translate-y-1/2 opacity-50 sm:max-w-[30%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      />

      <div className="container-x relative z-10 grid max-w-[1280px] items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0 lg:max-w-[34rem]"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-card-soft">
            <span className="text-sm leading-none">🇵🇰</span>
            Built for Pakistani Umrah agencies
          </div>

          <h1 className="mt-6 max-w-2xl text-balance text-3xl font-bold leading-[1.12] sm:text-4xl md:text-5xl lg:max-w-none lg:text-[2.65rem] xl:text-6xl">
            Stop Calculating Umrah Packages on{" "}
            <span className="text-gradient">Excel & WhatsApp</span>
          </h1>

          <p className="mt-6 max-w-full text-base text-muted-foreground sm:text-lg lg:max-w-xl">
            A complete CRM built for Pakistani Umrah agencies — build a full
            package quote, generate a professional invoice, and share it on
            WhatsApp, all in under 60 seconds.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {["Free lifetime hosting", "Free starter domain", "No monthly fees"].map((t, i) => (
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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                Get Free Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="xl" className="w-full border border-border sm:w-auto">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Buy Now — PKR 14,999
              </a>
            </Button>
            <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
              <a href="#solution">
                <BookOpenIcon className="h-4 w-4" />
                See How It Works
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full min-w-0 lg:max-w-none"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-black/20 opacity-20 blur-2xl sm:-inset-5" />
          <HeroMedia onEnlarge={() => setLightboxOpen(true)} />
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            {HERO_VIDEO_SRC ? (
              <motion.video
                src={HERO_VIDEO_SRC}
                autoPlay
                loop
                muted
                playsInline
                controls
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="max-h-[90vh] w-full max-w-6xl rounded-xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.img
                src={lightboxSrc}
                alt="Umrah Dashboard — full view"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="max-h-[90vh] w-full max-w-6xl rounded-xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
