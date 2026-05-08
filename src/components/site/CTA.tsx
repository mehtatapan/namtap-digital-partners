import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="container-x my-24">
      <div className="relative overflow-hidden rounded-3xl bg-hero p-10 md:p-16 text-white shadow-elegant">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to modernize your business?</h2>
          <p className="mt-4 text-white/80 text-lg">
            Book a free consultation and let's map out a digital strategy that delivers measurable results.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-white text-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 shadow-card">
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md glass px-6 py-3 text-sm font-semibold hover:bg-white/20">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}