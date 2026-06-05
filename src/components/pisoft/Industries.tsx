import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Factory, Store, GraduationCap, HeartPulse,
  Truck, Package, HardHat, UtensilsCrossed, ArrowRight,
} from "lucide-react";

const industries = [
  { Icon: Factory, name: "Manufacturing", stat: "+42%", metric: "production efficiency" },
  { Icon: Store, name: "Retail", stat: "+38%", metric: "inventory turnover" },
  { Icon: GraduationCap, name: "Education", stat: "10k+", metric: "students managed" },
  { Icon: HeartPulse, name: "Healthcare", stat: "99.9%", metric: "record accuracy" },
  { Icon: Package, name: "Distribution", stat: "2x", metric: "fulfillment speed" },
  { Icon: Truck, name: "Logistics", stat: "-35%", metric: "operational cost" },
  { Icon: HardHat, name: "Construction", stat: "+60%", metric: "project visibility" },
  { Icon: UtensilsCrossed, name: "Hospitality", stat: "4.8★", metric: "guest experience" },
];

export function Industries() {
  const [active, setActive] = useState(0);

  // Auto-rotate the active industry every 1 second (1000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % industries.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const cur = industries[active];

  return (
    <section id="industries" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Built for <span className="text-gradient-accent">your industry.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_360px] gap-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {industries.map((it, i) => (
              <button
                key={it.name}
                onClick={() => setActive(i)}
                className={`group rounded-2xl border p-5 text-left transition-all
                  ${active === i ? "border-accent bg-surface glow-accent" : "border-border bg-surface/60 hover:border-accent/40"}`}
              >
                <it.Icon className={`size-5 ${active === i ? "text-accent" : "text-primary"}`} />
                <div className="mt-3 text-sm font-medium">{it.name}</div>
              </button>
            ))}
          </div>

          <motion.div
            key={cur.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl border border-border bg-surface p-8 flex flex-col justify-between"
          >
            <div>
              <cur.Icon className="size-7 text-accent" />
              <h3 className="mt-4 text-2xl font-semibold">{cur.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Pisoft adapts module logic, dashboards, and workflows for {cur.name.toLowerCase()} teams.
              </p>
            </div>
            <div className="mt-8 flex items-end justify-between">
              <div>
                <div className="text-5xl font-display font-bold text-gradient-accent">{cur.stat}</div>
                <div className="text-sm text-muted-foreground mt-1">{cur.metric}</div>
              </div>
              <Link
                to="/industries"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-glow transition-colors"
              >
                Learn More <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
