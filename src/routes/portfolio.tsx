import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TrendingUp, Zap, Search } from "lucide-react";
import { CTASection } from "@/components/site/CTA";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — Namtap Consultancy Inc." },
      { name: "description", content: "Selected work in web development, SEO, automation and software engineering." },
      { property: "og:title", content: "Portfolio — Namtap" },
      { property: "og:description", content: "Real client outcomes and case studies." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { tag: "Web", icon: Zap, title: "Brightside Retail Ecommerce", metric: "+42% revenue", desc: "Full ecommerce rebuild with checkout optimization.", grad: "from-[oklch(0.42_0.16_220)] to-[oklch(0.28_0.10_255)]" },
  { tag: "SEO", icon: Search, title: "ClearCare Local SEO", metric: "+310% organic traffic", desc: "Technical SEO + local content engine.", grad: "from-[oklch(0.55_0.18_230)] to-[oklch(0.35_0.12_245)]" },
  { tag: "Automation", icon: TrendingUp, title: "Northbound Dispatch Automation", metric: "30 hrs saved / week", desc: "Workflow automation across CRM and fleet tools.", grad: "from-[oklch(0.32_0.12_260)] to-[oklch(0.50_0.18_215)]" },
  { tag: "Web", icon: Zap, title: "Atlas Real Estate Platform", metric: "2.1× lead conversion", desc: "Lead capture site with CRM integrations.", grad: "from-[oklch(0.40_0.15_240)] to-[oklch(0.60_0.18_200)]" },
  { tag: "SEO", icon: Search, title: "Maple Diner Group", metric: "Top 3 local rankings", desc: "Multi-location Google Business optimization.", grad: "from-[oklch(0.30_0.10_255)] to-[oklch(0.55_0.16_220)]" },
  { tag: "Automation", icon: TrendingUp, title: "Vertex AI Reporting", metric: "Real-time dashboards", desc: "Automated reporting pipeline for ops team.", grad: "from-[oklch(0.25_0.08_260)] to-[oklch(0.45_0.14_230)]" },
];

const filters = ["All", "Web", "SEO", "Automation"] as const;

function PortfolioPage() {
  const [filter, setFilter] = useState<typeof filters[number]>("All");
  const visible = projects.filter((p) => filter === "All" || p.tag === filter);

  return (
    <>
      <section className="bg-hero text-white">
        <div className="container-x py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Portfolio</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold max-w-3xl">Selected work, measurable outcomes</h1>
          <p className="mt-5 max-w-2xl text-white/80 text-lg">
            A snapshot of recent engagements across web, SEO and automation.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                filter === f ? "bg-foreground text-background border-foreground" : "bg-card border-border hover:bg-subtle"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.grad} overflow-hidden`}>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 50%)" }} />
                <div className="absolute inset-0 grid place-items-center">
                  <p.icon className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-white text-xs font-medium">{p.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <p className="mt-4 text-sm font-bold text-gradient">{p.metric}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}