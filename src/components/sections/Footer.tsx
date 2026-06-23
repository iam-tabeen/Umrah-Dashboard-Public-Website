import { MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_URL, CONTACT_EMAIL } from "@/lib/constants";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <img src={logo} alt="Umrah Dashboard" className="h-14 w-auto" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">

            Umrah Dashboard is a complete CRM built for Pakistani Umrah agencies — build a full package quote, generate a professional invoice, and share it on WhatsApp, all in under 60 seconds.
              </p><p className="mt-3 text-sm text-muted-foreground">
              A product by{" "}
              <span className="font-medium text-foreground underline"><a href="https://axiusdigital.com" target="_blank" rel="noopener noreferrer">Axius Digital</a></span>
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Quick links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-foreground">
                  <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 Umrah Dashboard. All rights reserved.
        </div>
      </div>
    </footer>
  );
}