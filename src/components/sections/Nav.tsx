import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, ArrowRightIcon } from "lucide-react";
import { WHATSAPP_URL, DEMO_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 border-b border-border/60 shadow-md shadow-border/40",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <img src={logo} alt="Umrah Dashboard" className="h-14 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="whatsapp">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              <ArrowRightIcon className="h-4 w-4" />
              Get a Free Demo
            </a>
          </Button>
        </div>

        <button
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="container-x flex flex-col gap-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="whatsapp">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Book a Free Demo
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}