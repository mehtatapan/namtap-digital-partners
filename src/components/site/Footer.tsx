import { Link } from "@tanstack/react-router";
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-hero text-white mt-24">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="grid h-9 w-9 place-items-center rounded-lg glass">
              <Zap className="h-5 w-5" />
            </span>
            Namtap Consultancy Inc.
          </div>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            Your modern technology partner for software development, automation, AI, SEO and digital transformation.
          </p>
          <form className="mt-6 flex max-w-sm gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-md glass px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <button type="button" className="rounded-md bg-white text-foreground px-4 py-2 text-sm font-semibold hover:opacity-90">
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">Company</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/industries" className="hover:text-white">Industries</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@namtap.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 010-2024</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Toronto, Canada</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-md glass hover:bg-white/20"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-md glass hover:bg-white/20"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-md glass hover:bg-white/20"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Namtap Consultancy Inc. All rights reserved.</p>
          <p>Crafted with precision in Canada.</p>
        </div>
      </div>
    </footer>
  );
}