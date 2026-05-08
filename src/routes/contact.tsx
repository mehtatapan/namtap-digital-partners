import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Twitter, Github } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Namtap Consultancy Inc." },
      { name: "description", content: "Book a free consultation. Let's build something great together." },
      { property: "og:title", content: "Contact Namtap" },
      { property: "og:description", content: "Get in touch for a free consultation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="bg-hero text-white">
        <div className="container-x py-24 md:py-32 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">Let's build what's next</h1>
          <p className="mt-5 max-w-2xl mx-auto text-white/80 text-lg">
            Tell us about your project and we'll get back within one business day.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant">
          {submitted ? (
            <div className="text-center py-12">
              <div className="mx-auto h-14 w-14 grid place-items-center rounded-full bg-hero text-white">
                <Send className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-2xl font-bold">Thanks — message received.</h2>
              <p className="mt-2 text-muted-foreground">We'll be in touch within one business day.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-5"
            >
              <h2 className="text-2xl font-bold">Book a free consultation</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name"><input required maxLength={100} className="input" placeholder="Your name" /></Field>
                <Field label="Email"><input required type="email" maxLength={255} className="input" placeholder="you@company.com" /></Field>
                <Field label="Phone"><input type="tel" maxLength={30} className="input" placeholder="+1 (555) 000-0000" /></Field>
                <Field label="Company"><input maxLength={100} className="input" placeholder="Company name" /></Field>
                <Field label="Service of interest">
                  <select className="input" required>
                    <option value="">Select a service</option>
                    <option>Website Development</option>
                    <option>SEO & Google Presence</option>
                    <option>AI & Automation</option>
                    <option>Software Development</option>
                    <option>Maintenance & Support</option>
                  </select>
                </Field>
                <Field label="Project budget">
                  <select className="input" required>
                    <option value="">Select a range</option>
                    <option>$1,500 – $3,000</option>
                    <option>$3,000 – $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </Field>
              </div>
              <Field label="Project details">
                <textarea required rows={5} maxLength={1000} className="input" placeholder="Tell us about your goals, timeline and current setup..." />
              </Field>
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-6 py-3 text-sm font-semibold hover:opacity-90 shadow-card">
                Send message <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        <aside className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl bg-hero text-white p-7 shadow-elegant">
            <h3 className="text-lg font-semibold">Contact details</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4" /><span>hello@namtap.com</span></li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4" /><span>+1 (555) 010-2024</span></li>
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5" /><span>Toronto, ON, Canada</span></li>
              <li className="flex items-start gap-3"><Clock className="h-4 w-4 mt-0.5" /><span>Mon – Fri · 9:00 AM – 6:00 PM EST</span></li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-md glass hover:bg-white/20"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-md glass hover:bg-white/20"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-md glass hover:bg-white/20"><Github className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-card aspect-square bg-subtle">
            <iframe
              title="Map"
              loading="lazy"
              className="w-full h-full border-0"
              src="https://maps.google.com/maps?q=Toronto%2C%20Canada&t=&z=11&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </aside>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          transition: box-shadow 0.15s, border-color 0.15s;
        }
        .input:focus { outline: none; border-color: var(--color-ring); box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-ring) 25%, transparent); }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{label}</span>
      {children}
    </label>
  );
}