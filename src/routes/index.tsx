import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { BuiltForPakistan } from "@/components/sections/BuiltForPakistan";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Umrah Dashboard — CRM & Package Management for Pakistani Umrah Agencies" },
      {
        name: "description",
        content:
          "Umrah CRM software Pakistan. Build package quotes, generate professional invoices, and share on WhatsApp in under 60 seconds. One-time PKR 14,999.",
      },
      { name: "keywords", content: "Umrah CRM software Pakistan, Umrah package management system, Umrah travel agency software, Umrah package calculator" },
      { property: "og:title", content: "Umrah Dashboard — CRM for Pakistani Umrah Agencies" },
      {
        property: "og:description",
        content:
          "Build full package quotes, generate professional invoices, and share on WhatsApp in under 60 seconds. PKR 14,999 one-time.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Umrah Dashboard — CRM for Pakistani Umrah Agencies" },
      { name: "twitter:description", content: "Build package quotes & share on WhatsApp in 60 seconds. PKR 14,999 one-time." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <BuiltForPakistan />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
