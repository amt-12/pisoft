import { motion } from "framer-motion";
import { Check, Calendar } from "lucide-react";

const benefits = [
  "Live product walkthrough",
  "Industry-specific demo",
  "Expert consultation",
  "Implementation guidance",
];

export function Demo() {
  return (
    <section id="demo" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative max-w-5xl mx-auto rounded-3xl border border-border bg-surface/80 backdrop-blur-xl p-10 md:p-16 shadow-[var(--shadow-elevated)]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Personalized demo</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
              Experience Pisoft ERP <span className="text-gradient-accent">before you decide.</span>
            </h2>
            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm">
                  <span className="size-5 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center">
                    <Check className="size-3 text-primary-foreground" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-background p-6"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-[image:var(--gradient-accent)] grid place-items-center">
                <Calendar className="size-5 text-accent-foreground" />
              </div>
              <div>
                <div className="font-semibold">Schedule your session</div>
                <div className="text-xs text-muted-foreground">30 minutes · Virtual</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
                <button key={d} className={`rounded-lg border px-2 py-3 text-xs transition
                  ${i === 1 ? "border-accent bg-accent/10 text-accent" : "border-border hover:border-accent/40"}`}>
                  <div className="font-semibold">{d}</div>
                  <div className="text-muted-foreground mt-0.5">{12 + i}</div>
                </button>
              ))}
            </div>
            <button className="mt-6 w-full rounded-full bg-[image:var(--gradient-accent)] text-accent-foreground font-semibold py-3 glow-accent hover:opacity-95 transition">
              Schedule My Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
