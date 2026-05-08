import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Code2, Search, Bot, Server, Wrench, ShieldCheck,
  Sparkles, Rocket, Users, CheckCircle2, Star,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { CTASection } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { motion } from "framer-motion";

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
  { n: 10, suffix: "+", l: "Years of Experience" },
  { n: 150, suffix: "+", l: "Projects Delivered" },
  { n: 98, suffix: "%", l: "Client Satisfaction" },
  { n: 40, suffix: "+", l: "Technologies Mastered" },
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
      <section className="relative overflow-hidden bg-hero-animated text-white">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          aria-hidden
          className="absolute -top-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-[100px]"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-32 -left-20 h-[24rem] w-[24rem] rounded-full bg-primary/40 blur-[100px]"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="container-x relative py-24 md:py-36">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium"
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" /> Trusted IT partner since 2014
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
            >
              Modern IT Solutions for <span className="text-gradient">Growing Businesses</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl"
            >
              We help businesses build powerful digital experiences through software development, automation, AI solutions, SEO, and modern web technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/contact" className="btn-shine inline-flex items-center gap-2 rounded-md bg-white text-foreground px-6 py-3 text-sm font-semibold hover:opacity-95 shadow-elegant transition">
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md glass px-6 py-3 text-sm font-semibold hover:bg-white/20 transition">
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <Reveal className="container-x -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-border shadow-elegant">
          {stats.map((s) => (
            <div key={s.l} className="bg-card p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* SERVICES */}
      <section className="container-x py-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">What we do</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold">Services that move your business forward</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group card-hover relative h-full rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-hero text-white shadow-elegant icon-pop">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-foreground group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-subtle py-24">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why Namtap</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold">A technology partner you can trust</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We combine senior engineering, design rigor and business strategy to deliver outcomes that compound over time.
            </p>
            <ul className="mt-6 space-y-3">
              {["Senior, in-house engineering team", "Transparent pricing and process", "Modern, future-proof tech stacks", "Long-term partnership mindset"].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" /><span>{i}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="group card-hover rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elegant">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-hero text-white icon-pop">
                      <r.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{r.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our process</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold">From idea to impact, in four steps</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className="card-hover relative h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="text-5xl font-bold text-gradient">{p.n}</div>
                <h3 className="mt-3 text-lg font-semibold">{p.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-subtle py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Client stories</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold">Trusted by ambitious teams</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="card-hover h-full rounded-2xl bg-card border border-border p-7 shadow-card">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed">"{t.quote}"</p>
                  <div className="mt-5 pt-5 border-t border-border">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
