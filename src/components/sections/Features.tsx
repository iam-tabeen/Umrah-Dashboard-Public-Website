import { FadeIn } from "@/components/FadeIn";
import {
  BarChart3,
  Calculator,
  FileText,
  Send,
  ClipboardList,
  Wallet,
  ShieldCheck,
  Settings2,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    desc: "Live KPIs with revenue and booking trends at a glance.",
  },
  {
    icon: Calculator,
    title: "Package Calculator",
    desc: "Tiered visa pricing, airline rates, and hotel selection in one place.",
  },
  {
    icon: FileText,
    title: "Professional Invoices",
    desc: "Auto invoice numbers, PDF export, and your company branding built in.",
  },
  {
    icon: Send,
    title: "One-Click WhatsApp Sharing",
    desc: "Formatted package messages — no more manual copy-paste.",
  },
  {
    icon: ClipboardList,
    title: "Bookings Management",
    desc: "Search, filter, and track every booking from inquiry to departure.",
  },
  {
    icon: Wallet,
    title: "Accounts & Payments",
    desc: "Client ledger, expense tracking, JazzCash and EasyPaisa support.",
  },
  {
    icon: ShieldCheck,
    title: "Staff & Permissions",
    desc: "Role-based access: Admin, Booking, Accounts, Visa, and Viewer.",
  },
  {
    icon: Settings2,
    title: "Fully Configurable",
    desc: "Your airlines, hotels, rates, and logo — set it up exactly your way.",
  },
  {
    icon: TrendingUp,
    title: "Reports & Profit Tracking",
    desc: "Financial overview and per-package profit reports, always up to date.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container-x">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Everything inside</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            A complete operating system for your agency
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nine modules, one login. Built specifically around how Pakistani
            Umrah agencies actually work.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-hero-gradient text-primary-foreground shadow-md">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}