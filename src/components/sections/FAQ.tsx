import { FadeIn } from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "💰 Product & Pricing",
    q: "Do I need to pay monthly?",
    a: "No. Umrah Dashboard is a one-time payment of PKR 14,999. There are no subscriptions and no recurring fees, ever. Hosting and your sub-domain are included for life.",
  },
  {
    category: "💰 Product & Pricing",
    q: "How do you offer a lifetime free domain and lifetime free hosting?",
    a: "We use Netlify's Free Hosting tier, which includes a free sub-domain (e.g., yourname.netlify.app). This setup is 100% free for life and fully supported as long as Netlify maintains its free tier.",
  },
  {
    category: "🛠️ Customization & Capabilities",
    q: "Can I add my own hotels, airlines, and rates?",
    a: "Yes. Everything is configurable from the Settings module — your preferred airlines, hotel inventory in Makkah and Madinah, tiered visa rates, transport costs, and your company logo.",
  },
  {
    category: "🛠️ Customization & Capabilities",
    q: "Can I use my own domain?",
    a: "Yes, absolutely! You can connect your own custom domain yourself, or you can securely share access with us and our team will handle the setup and configuration for you.",
  },
  {
    category: "🛠️ Customization & Capabilities",
    q: "Can you add more features according to our needs?",
    a: "Yes, absolutely. We can develop and integrate custom features tailored specifically to the unique workflow and requirements of your Umrah agency.",
  },
  {
    category: "🛠️ Customization & Capabilities",
    q: "How many staff accounts can I create?",
    a: "Unlimited. You can assign role-based permissions for Admin, Booking, Accounts, Visa, and Viewer roles so each team member only sees what they need.",
  },
  {
    category: "🚀 Accessibility & Performance",
    q: "Can I access it from my phone?",
    a: "Absolutely. Umrah Dashboard is fully responsive and works smoothly on phones, tablets, and desktops. You can build quotes and share invoices on WhatsApp from anywhere.",
  },
  {
    category: "🚀 Accessibility & Performance",
    q: "How fast is this CRM?",
    a: "Our free hosting tier is incredibly fast, utilizing global Content Delivery Networks (CDNs) to ensure your site loads near-instantly. While final speeds can depend on your local internet connection, it is built to be highly optimized. If your business scales and you require dedicated resources, we can easily migrate you to a premium Hostinger VPS (KVM 1) plan. (Note: Premium hosting plan fees are the responsibility of the client).",
  },
  {
    category: "🔒 Data & Security",
    q: "Where will my data be stored, and will it be private?",
    a: "Your data is securely stored using Supabase, a leading enterprise-grade database platform. Access is securely tied directly to your verified Google account, ensuring your information remains 100% private and accessible only to you.",
  },
  {
    category: "🔒 Data & Security",
    q: "How much data will my free Supabase database hold?",
    a: "The Supabase free plan provides 500MB of database storage. For an Umrah agency, this can comfortably store roughly 50,000 to 80,000 booking records. This is more than enough to handle a single agency's operations for several years.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-x max-w-3xl">
        <FadeIn className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Questions, answered</h2>
          <p className="mt-4 text-muted-foreground">
            Still unsure? Message us on WhatsApp and we'll walk you through a live demo.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 space-y-6">
          {Array.from(new Set(faqs.map((f) => f.category))).map((category) => (
            <div key={category}>
              <p className="mb-3 text-sm font-semibold text-muted-foreground">{category}</p>
              <Accordion type="single" collapsible className="rounded-xl border border-border bg-card px-6 shadow-card-soft">
                {faqs.filter((f) => f.category === category).map((f) => (
                  <AccordionItem key={f.q} value={f.q} className="border-b border-border last:border-b-0">
                    <AccordionTrigger className="text-left text-base font-medium">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}