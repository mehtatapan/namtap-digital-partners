import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Cpu } from "lucide-react";
import { CTASection } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Namtap Consultancy Inc." },
      { name: "description", content: "We are a modern IT consultancy committed to helping ambitious businesses grow through technology." },
      { property: "og:title", content: "About Namtap Consultancy Inc." },
      { property: "og:description", content: "Mission, vision and team behind Namtap." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Mission", desc: "Empower growing businesses with reliable, modern technology that creates measurable impact." },
  { icon: Eye, title: "Vision", desc: "A world where every ambitious company has an enterprise-grade digital backbone." },
  { icon: Heart, title: "Core Values", desc: "Craft, transparency, partnership and continuous learning guide every engagement." },
  { icon: Cpu, title: "Modern Stack", desc: "React, Node, Python, AWS, GCP, OpenAI and the best tools for the job." },
];

const tech = ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "GCP", "Docker", "OpenAI", "LangChain", "Tailwind"];

function AboutPage() {
  return (
    <>
      <section className="bg-hero text-white">
        <div className="container-x py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">About Namtap</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold">Engineers, strategists and partners in your growth.</h1>
            <p className="mt-5 text-white/80 text-lg">
              Namtap Consultancy is a modern technology firm helping startups, SMBs and enterprise teams build digital products that perform — beautifully designed, rigorously engineered, and obsessively measured.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-20 grid gap-6 md:grid-cols-2">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-elegant transition">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-hero text-white shadow-elegant">
              <v.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
            <p className="mt-2 text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-subtle py-20">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-bold">Technologies we use</h2>
          <p className="mt-2 text-muted-foreground">A modern stack for modern problems.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {tech.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium shadow-card">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}