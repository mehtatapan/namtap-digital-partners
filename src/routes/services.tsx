import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Search, Bot, Server, Wrench, Check } from "lucide-react";
import { CTASection } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Namtap Consultancy Inc." },
      { name: "description", content: "Website development, SEO, AI & automation, software development and ongoing IT support." },
      { property: "og:title", content: "Services — Namtap Consultancy Inc." },
      { property: "og:description", content: "Premium IT services for modern businesses." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Code2,
    title: "Website Development",
    price: "Solutions starting at $1,500",
    points: ["Business websites", "Ecommerce platforms", "High-converting landing pages", "Responsive design", "Website redesign"],
  },
  {
    icon: Search,
    title: "SEO & Google Presence",
    price: "Monthly plans starting at $750",
    points: ["Local SEO", "Google Business optimization", "Technical SEO audits", "Speed & Core Web Vitals", "Content strategy"],
  },
  {
    icon: Bot,
    title: "AI & Automation Solutions",
    price: "Custom pricing available",
    points: ["AI chatbots & assistants", "Workflow automation", "CRM integrations", "Reporting systems", "Business process automation"],
  },
  {
    icon: Server,
    title: "Software Development & IT Consulting",
    price: "Consulting from $85/hour",
    points: ["Full-stack development", "APIs & integrations", "Cloud architecture", "Internal dashboards", "Database solutions"],
  },
  {
    icon: Wrench,
    title: "Ongoing Maintenance & Support",
    price: "Flexible monthly plans",
    points: ["Website maintenance", "Hosting management", "Technical support", "Security updates", "Performance monitoring"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-animated text-white">
        <div className="container-x py-24 md:py-32 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Services</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">Everything you need to scale</h1>
          <p className="mt-5 max-w-2xl mx-auto text-white/80 text-lg">
            From your first website to AI-powered automation — we deliver complete digital solutions tailored to your goals.
          </p>
        </div>
      </section>

      <section className="container-x py-20 space-y-8">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <div className={`group card-hover grid gap-8 md:grid-cols-5 items-center rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card hover:shadow-elegant ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="md:col-span-2">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-hero text-white shadow-elegant icon-pop">
                <s.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-2xl md:text-3xl font-bold">{s.title}</h2>
              <p className="mt-3 text-sm font-semibold text-accent">{s.price}</p>
              <Link to="/contact" className="btn-shine mt-6 inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="md:col-span-3 grid sm:grid-cols-2 gap-3">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2 rounded-lg bg-subtle p-3 text-sm">
                  <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /><span>{p}</span>
                </li>
              ))}
            </ul>
            </div>
          </Reveal>
        ))}
      </section>

      <CTASection />
    </>
  );
}