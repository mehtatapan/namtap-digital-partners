import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "How quickly can you start a project?", a: "Most engagements kick off within 1–2 weeks of our initial consultation, depending on scope and team availability." },
  { q: "Do you work with small businesses?", a: "Absolutely. We tailor solutions to startups, SMBs and enterprise clients alike." },
  { q: "What is your typical pricing model?", a: "Fixed-scope projects, retainers, or hourly consulting starting at $85/hr — whichever fits your needs best." },
  { q: "Will I own the code and assets?", a: "Yes. Everything we build for you is yours, hosted in your accounts with full ownership." },
  { q: "Do you provide ongoing support?", a: "Yes — we offer flexible monthly maintenance and SLA-backed support plans." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-x py-24">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
        <h2 className="mt-2 text-3xl md:text-5xl font-bold">Questions, answered.</h2>
      </Reveal>
      <div className="mt-12 mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card shadow-card">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 p-6 text-left transition-colors hover:bg-subtle"
                aria-expanded={isOpen}
              >
                <span className="font-semibold">{f.q}</span>
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }}>
                  <Plus className="h-5 w-5 text-accent" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}