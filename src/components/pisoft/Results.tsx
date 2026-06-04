import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 2, ease: "easeOut" });
    const unsub = mv.on("change", (v) => setDisplay(Math.round(v).toLocaleString()));
    return () => { controls.stop(); unsub(); };
  }, [inView, to, mv]);
  return <span ref={ref}>{display}{suffix}</span>;
}

const stats = [
  { value: 50, suffix: "+", label: "Businesses digitized" },
  { value: 100000, suffix: "+", label: "Transactions processed" },
  { value: 99.9, suffix: "%", label: "System reliability", float: true },
  { value: 24, suffix: "/7", label: "Support availability" },
];

export function Results() {
  return (
    <section id="results" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Real numbers. <span className="text-gradient-primary">Real results.</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-surface p-8 text-center">
              <div className="text-5xl md:text-6xl font-display font-bold text-gradient-accent">
                {s.float ? "99.9" : <Counter to={s.value} />}{s.suffix}
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
