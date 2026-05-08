import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Code2, Search, Bot, Server, Wrench, ShieldCheck,
  Sparkles, Rocket, Users, CheckCircle2, Star,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { CTASection } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Namtap Consultancy Inc. — Modern IT Solutions for Growing Businesses" },
      { name: "description", content: "Software development, automation, AI, SEO and digital transformation for ambitious businesses." },
      { property: "og:title", content: "Namtap Consultancy Inc." },
      { property: "og:description", content: "Modern IT solutions for growing businesses." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Code2, title: "Website Development", desc: "Premium business websites, ecommerce and landing pages built to convert." },
  { icon: Search, title: "SEO & Google Presence", desc: "Local SEO, technical optimization and Google Business growth." },
  { icon: Bot, title: "AI & Automation", desc: "Chatbots, workflow automation and intelligent integrations." },
  { icon: Server, title: "Software Development", desc: "Full-stack apps, APIs, dashboards and cloud-native solutions." },
  { icon: Wrench, title: "Maintenance & Support", desc: "Hosting, security and ongoing technical support plans." },
  { icon: ShieldCheck, title: "IT Consulting", desc: "Strategic guidance for digital transformation and modernization." },
];

const stats = [
  { v: "10+", l: "Years of Experience" },
  { v: "150+", l: "Projects Delivered" },
  { v: "98%", l: "Client Satisfaction" },
  { v: "40+", l: "Technologies Mastered" },
];

const reasons = [
  { icon: Sparkles, title: "Premium Craftsmanship", desc: "Every line of code, every pixel — engineered for performance and longevity." },
  { icon: Rocket, title: "Speed to Value", desc: "Modern stacks, agile delivery and measurable outcomes from week one." },
  { icon: Users, title: "True Partnership", desc: "We integrate with your team and treat your goals as our own." },
];

const process = [
  { n: "01", t: "Discover", d: "We learn your business, audience and goals." },
  { n: "02", t: "Design", d: "Strategy, architecture and UX blueprints." },
  { n: "03", t: "Build", d: "Engineering with weekly progress demos." },
  { n: "04", t: "Launch & Grow", d: "Deploy, optimize, support and scale." },
];

const testimonials = [
  { name: "Sarah Lin", role: "CEO, Brightside Retail", quote: "Namtap rebuilt our ecommerce platform — sales jumped 42% in three months." },
  { name: "Marcus Patel", role: "Founder, Northbound Logistics", quote: "Their automation work removed 30+ hours of manual work per week. Game changer." },
  { name: "Elena Cruz", role: "Director, ClearCare Clinics", quote: "A truly professional team. Every milestone delivered on time, beautifully done." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="container-x relative py-24 md:py-36">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" /> Trusted IT partner since 2014
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Modern IT Solutions for <span className="text-gradient">Growing Businesses</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              We help businesses build powerful digital experiences through software development, automation, AI solutions, SEO, and modern web technologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-white text-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 shadow-elegant">
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md glass px-6 py-3 text-sm font-semibold hover:bg-white/20">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-x -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-border shadow-elegant">
          {stats.map((s) => (
            <div key={s.l} className="bg-card p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">What we do</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold">Services that move your business forward</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-hero text-white shadow-elegant">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-foreground group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-subtle py-24">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why Namtap</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold">A technology partner you can trust</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We combine senior engineering, design rigor and business strategy to deliver outcomes that compound over time.
            </p>
            <ul className="mt-6 space-y-3">
              {["Senior, in-house engineering team", "Transparent pricing and process", "Modern, future-proof tech stacks", "Long-term partnership mindset"].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elegant transition">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-hero text-white">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{r.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our process</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold">From idea to impact, in four steps</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.n} className="relative rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="text-5xl font-bold text-gradient">{p.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{p.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-subtle py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Client stories</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold">Trusted by ambitious teams</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-card border border-border p-7 shadow-card">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
