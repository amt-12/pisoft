import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import teamImage from "@/assets/team_collaboration.png";

export function ConsultantBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-primary/15 border-y border-slate-900 z-10 mb-12">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 size-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch min-h-[160px] relative">
        
        {/* Left image segment with slanted cut on desktop */}
        <div 
          className="relative w-full md:w-[38%] lg:w-[33%] shrink-0 h-48 md:h-auto overflow-hidden md:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]"
        >
          <img
            src={teamImage}
            alt="Pisoft Team Collaborating"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Brand Accent/Orange Tint Overlay matching the site's gold/coral accent */}
          <div className="absolute inset-0 bg-accent/25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/60" />
        </div>

        {/* Right content segment containing text and CTA button */}
        <div className="flex-grow flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-6 py-8 md:py-6 md:pl-8 md:pr-12 lg:pr-16">
          <div className="max-w-xl text-white">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 border border-accent/25 px-3 py-0.5 text-[10px] text-accent font-bold uppercase tracking-wider mb-2">
              Corporate Consultation
            </span>
            <h2 className="font-display text-lg md:text-xl lg:text-2xl font-extrabold tracking-wider uppercase">
              GET YOUR FREE CONSULTANT
            </h2>
            <p className="mt-2 text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
              We are a company that offers design and build services for you from initial sketches to the final construction.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white px-5 py-2.5 text-xs md:text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-slate-950 transition-all duration-300 active:scale-95 shrink-0"
          >
            <span>CONTACT US</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
