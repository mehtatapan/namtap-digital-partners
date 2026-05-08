import { createFileRoute } from "@tanstack/react-router";
import { Store, Utensils, Fuel, Stethoscope, Home, Truck, Briefcase, Rocket, Building2 } from "lucide-react";
import { CTASection } from "@/components/site/CTA";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Namtap Consultancy Inc." },
      { name: "description", content: "We serve retail, restaurants, healthcare, logistics, real estate, startups and more." },
      { property: "og:title", content: "Industries We Serve — Namtap" },
      { property: "og:description", content: "Tailored technology for every industry." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Building2, title: "Small Businesses", desc: "Bring your operation online with modern tools and automation." },
  { icon: Store, title: "Retail Stores", desc: "Ecommerce, POS integrations and customer engagement systems." },
  { icon: Utensils, title: "Restaurants", desc: "Online ordering, reservations and loyalty programs that scale." },
  { icon: Fuel, title: "Gas Stations & Convenience", desc: "Inventory, loyalty and back-office automation." },
  { icon: Stethoscope, title: "Healthcare Clinics", desc: "Patient portals, scheduling and HIPAA-aware integrations." },
  { icon: Home, title: "Real Estate", desc: "Lead capture, listing automation and CRM workflows." },
  { icon: Truck, title: "Logistics & Trucking", desc: "Dispatch dashboards, tracking and fleet automation." },
  { icon: Briefcase, title: "Professional Services", desc: "Client portals, billing and document automation." },
  { icon: Rocket, title: "Startups", desc: "MVPs, scalable architecture and growth engineering." },
];

function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-animated text-white">
        <div className="container-x py-24 md:py-32 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Industries</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">Built for your industry</h1>
          <p className="mt-5 max-w-2xl mx-auto text-white/80 text-lg">
            We bring deep cross-industry expertise to deliver solutions that fit how your business actually operates.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((i) => (
          <div key={i.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-hero text-white shadow-elegant">
              <i.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
          </div>
        ))}
      </section>

      <CTASection />
    </>
  );
}