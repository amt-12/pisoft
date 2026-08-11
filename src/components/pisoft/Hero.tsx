import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import heroVideo from "@/assets/i1.mp4";
import { Link } from "@tanstack/react-router";

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
        {/* Light blue overlay */}
        <div className="absolute inset-0 bg-sky-500/15 mix-blend-color-dodge pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-15 z-0 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">


        <h1 className="mt-14 md:mt-20 lg:mt-24 font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2]">
          <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground">Your</span>{" "}
          <motion.span
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 22, delay: 0.3 }}
            className="font-script text-orange-500 text-[1.4em] font-normal tracking-normal inline-block transform -rotate-2"
          >
            business
          </motion.span>{" "}
          <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground">has grown.</span>
          <br />
          <span className="inline-block mt-[-0.2em] md:mt-[-0.25em]">
            <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground">Has your</span>{" "}
            <motion.span
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 22, delay: 1.3 }}
              className="font-script text-gradient-accent text-[1.5em] font-normal tracking-normal inline-block transform -rotate-2"
            >
              System
            </motion.span>
            <motion.span
              animate={{
                rotate: [0, -10, 10, -10, 10, -5, 5, 0],
                x: [0, -4, 4, -4, 4, -2, 2, 0]
              }}
              transition={{
                delay: 1.6,
                duration: 0.5,
                ease: "easeInOut"
              }}
              className="text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground inline-block"
            >
              ?
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed font-sans"
        >
          Your business shouldn't have to depend on spreadsheets, disconnected applications, endless WhatsApp conversations, and manual reporting.
          <strong className="block mt-4 md:mt-5 text-foreground font-semibold">Pisoft ERP brings your people, processes, data, and decisions together into one intelligent business ecosystem built around the way your business actually works.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/demo" className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 text-sm font-bold text-accent-foreground glow-accent hover:opacity-95 transition-all shadow-lg">
            <span>Book a Free ERP Demo</span>
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="#erp" className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/90 backdrop-blur px-7 py-3.5 text-sm font-bold hover:bg-secondary transition-all">
            <span>Explore Pisoft ERP</span>
          </a>
        </motion.div>

        {/* Visual Statement Sub-Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-12 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70"
        >
          One Business. One Connected System.
        </motion.div>
      </div>
    </section>
  );
}

