import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useIsMobile } from "@/hooks/use-mobile";

const modules = ["Sales", "HR", "Inventory", "Payroll", "CRM", "Accounts"];

export function Finale() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const orbScale = useTransform(scrollYProgress, [0.3, 0.8], [0.5, 1.3]);
  const r = isMobile ? 95 : 140;

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="relative h-72 sm:h-80 grid place-items-center mb-12">
          <motion.div
            style={{ scale: orbScale }}
            className="absolute size-48 sm:size-64 rounded-full bg-[image:var(--gradient-primary)] blur-3xl opacity-60"
          />
          {modules.map((m, i) => {
            const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            return (
              <motion.div
                key={m}
                initial={{ opacity: 0, x: x * 2, y: y * 2 }}
                whileInView={{ opacity: 1, x, y }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="absolute rounded-full border border-border bg-surface/80 backdrop-blur px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs"
              >
                {m}
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="relative size-20 sm:size-24 rounded-full bg-[image:var(--gradient-primary)] glow-primary grid place-items-center"
          >
            <span className="font-display font-bold text-xs sm:text-sm">Pisoft</span>
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          One Platform.<br />One Team.<br />
          <span className="text-gradient-accent">One Source of Truth.</span>
        </motion.h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Empowering businesses through intelligent technology.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            to="/demo"
            className="inline-flex items-center rounded-full bg-[image:var(--gradient-accent)] px-8 py-4 text-base font-semibold text-accent-foreground glow-accent hover:opacity-95 transition"
          >
            Book Your Demo Today
          </Link>
        </motion.div>
      </div>

      <footer className="relative mt-32 pt-10 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pisoft. Crafted for the businesses building what comes next.
      </footer>
    </section>
  );
}
