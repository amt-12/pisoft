import { motion } from "framer-motion";
import { FileSpreadsheet, MessageCircle, UserCheck, Boxes, Calculator, Contact } from "lucide-react";

const sources = [
  { Icon: FileSpreadsheet, label: "Excel" },
  { Icon: MessageCircle, label: "WhatsApp" },
  { Icon: UserCheck, label: "Attendance" },
  { Icon: Boxes, label: "Inventory" },
  { Icon: Calculator, label: "Accounts" },
  { Icon: Contact, label: "CRM" },
];

export function Transformation() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto"
        >
          Scattered tools become <span className="text-gradient-primary">one intelligent ecosystem.</span>
        </motion.h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Transform scattered operations into a single source of truth.
        </p>

        <div className="relative mt-20 h-[480px] grid place-items-center">
          {/* Center engine */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute z-10 size-40 rounded-full bg-[image:var(--gradient-primary)] glow-primary grid place-items-center"
          >
            <div className="text-center">
              <div className="font-display font-bold text-lg">Pisoft</div>
              <div className="text-xs opacity-80">ERP</div>
            </div>
          </motion.div>

          {/* Orbit rings */}
          {[160, 220].map((r, i) => (
            <div
              key={r}
              className="absolute rounded-full border border-border/60"
              style={{ width: r * 2, height: r * 2 }}
            />
          ))}

          {/* Source nodes with connecting lines */}
          {sources.map((s, i) => {
            const angle = (i / sources.length) * Math.PI * 2 - Math.PI / 2;
            const r = 220;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: x * 1.4, y: y * 1.4 }}
                whileInView={{ opacity: 1, x, y }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.7 }}
                className="absolute"
              >
                <div className="flex items-center gap-2 rounded-xl border border-border bg-surface/90 backdrop-blur px-3 py-2 shadow-[var(--shadow-elevated)]">
                  <s.Icon className="size-4 text-accent" />
                  <span className="text-xs">{s.label}</span>
                </div>
              </motion.div>
            );
          })}

          {/* SVG connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="-300 -240 600 480">
            {sources.map((_, i) => {
              const angle = (i / sources.length) * Math.PI * 2 - Math.PI / 2;
              const r = 200;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <motion.line
                  key={i}
                  x1={0} y1={0} x2={x} y2={y}
                  stroke="url(#flow)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 1 }}
                />
              );
            })}
            <defs>
              <linearGradient id="flow" x1="0" x2="1">
                <stop offset="0%" stopColor="#FF8A24" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#347AB7" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
