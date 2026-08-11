import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, MessageSquare } from "lucide-react";

const erpModules = [
  "Sales", "CRM", "Inventory", "Purchase", "HR",
  "Payroll", "Finance", "Projects", "Production", "Analytics"
];

export function Finale() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const orbScale = useTransform(scrollYProgress, [0.2, 0.7], [0.5, 1.2]);
  const r = isMobile ? 110 : 170;

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-slate-950 text-white border-t border-slate-900">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        
        {/* Module Orbit & Central Convergence */}
        <div className="relative h-80 sm:h-96 grid place-items-center mb-12">
          <motion.div
            style={{ scale: orbScale }}
            className="absolute size-64 sm:size-80 rounded-full bg-[image:var(--gradient-accent)] blur-3xl opacity-40 pointer-events-none"
          />

          {erpModules.map((m, i) => {
            const angle = (i / erpModules.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            return (
              <motion.div
                key={m}
                initial={{ opacity: 0, x: x * 1.8, y: y * 1.8 }}
                whileInView={{ opacity: 1, x, y }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="absolute rounded-full border border-slate-700 bg-slate-900/90 backdrop-blur px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold text-slate-200 shadow-lg"
              >
                {m}
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="relative size-24 sm:size-28 rounded-full bg-[image:var(--gradient-accent)] glow-accent grid place-items-center shadow-2xl"
          >
            <span className="font-display font-extrabold text-sm sm:text-base text-accent-foreground">Pisoft ERP</span>
          </motion.div>
        </div>

        {/* Headline & Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-extrabold mb-3">CONVERGENCE</div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-white max-w-4xl mx-auto leading-tight">
            Your Next Chapter <br />
            <span className="text-gradient-accent">Starts With Better Systems.</span>
          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-sans">
            Your business has already done the hard part — it grew. Now give it the systems it needs to grow further. Whether you're looking to streamline your operations with Pisoft ERP or build something completely custom, our team is ready to help.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-8 py-4 text-sm font-extrabold text-accent-foreground glow-accent hover:opacity-95 transition-all shadow-xl"
          >
            <span>Book Your Free ERP Demo</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 px-8 py-4 text-sm font-bold text-white transition-all"
          >
            <MessageSquare className="size-4 text-accent" />
            <span>Talk to Our Team</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
