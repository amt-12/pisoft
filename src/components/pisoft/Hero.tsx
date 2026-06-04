import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, ArrowRight } from "lucide-react";
import chaosImg from "@/assets/chaos-illustration.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const illoScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);
  const illoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const illoRotate = useTransform(scrollYProgress, [0, 0.6], [0, -8]);
  const sphereScale = useTransform(scrollYProgress, [0.4, 0.8], [0.4, 1.2]);
  const sphereOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  return (
    <section ref={ref} className="relative h-[180vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <div className="relative h-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center pt-20">
          {/* Left: text */}
          <div className="relative z-10 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground mb-6"
            >
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              ERP, reimagined for growing businesses
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              Your business has grown.
              <br />
              <span className="text-gradient-accent">Has your system?</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 max-w-md mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground"
            >
              Spreadsheets, WhatsApp groups, scattered tools — Pisoft converges the chaos into one
              intelligent business ecosystem.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a href="#demo" className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-accent-foreground glow-accent hover:opacity-95 transition">
                Book Demo <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
              </a>
              <a href="#ecosystem" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium hover:bg-secondary transition">
                <Play className="size-4" /> Watch Product Tour
              </a>
            </motion.div>
          </div>

          {/* Right: chaos illustration → converges into Pisoft orb */}
          <div className="relative h-[420px] lg:h-[560px] grid place-items-center">
            <motion.img
              src={chaosImg}
              alt="Disconnected tools and spreadsheets tangled together"
              width={1024}
              height={1024}
              style={{ scale: illoScale, opacity: illoOpacity, rotate: illoRotate }}
              className="absolute inset-0 w-full h-full object-contain"
            />

            {/* Converged orb */}
            <motion.div
              style={{ scale: sphereScale, opacity: sphereOpacity }}
              className="absolute size-72 rounded-full bg-[image:var(--gradient-primary)] blur-3xl"
            />
            <motion.div
              style={{ scale: sphereScale, opacity: sphereOpacity }}
              className="relative size-44 rounded-full bg-[image:var(--gradient-primary)] glow-primary grid place-items-center text-primary-foreground"
            >
              <div className="text-center">
                <div className="font-display text-2xl font-bold">Pisoft ERP</div>
                <div className="text-xs opacity-80 mt-1">One Platform</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
