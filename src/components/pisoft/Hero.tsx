import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import heroVideo from "@/assets/i1.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background py-20 lg:py-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Frosted glass overlay to ensure content contrast */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-15 z-0 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground mb-6"
        >
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          ERP, reimagined for growing Businesses
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2]"
        >
          <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground">Your</span> <span className="font-script text-orange-500 text-[1.4em] font-normal tracking-normal inline-block transform -rotate-2">business</span> <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground">has grown.</span>
          <br />
          <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground">Has your</span> <span className="font-script text-gradient-accent text-[1.5em] font-normal tracking-normal inline-block transform -rotate-2">System</span>?
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground"
        >
          Spreadsheets, WhatsApp groups, scattered tools — Pisoft converges the chaos into one
          intelligent business ecosystem.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#demo" className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-accent-foreground glow-accent hover:opacity-95 transition">
            Book Demo <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
          </a>
          <a href="#ecosystem" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium hover:bg-secondary transition">
            <Play className="size-4" /> Watch Product Tour
          </a>
        </motion.div>
      </div>
    </section>
  );
}

