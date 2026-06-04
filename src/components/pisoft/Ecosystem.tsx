import { motion } from "framer-motion";
import { useState } from "react";
import {
  ShoppingCart, Boxes, Users, Wallet, Contact, PieChart,
  PackageSearch, BriefcaseBusiness, FileBarChart, Activity,
} from "lucide-react";

const modules = [
  { Icon: ShoppingCart, name: "Sales", preview: "Revenue insights & pipeline" },
  { Icon: Boxes, name: "Inventory", preview: "Real-time stock updates" },
  { Icon: Users, name: "HR", preview: "Employee management" },
  { Icon: Wallet, name: "Payroll", preview: "Automated salary runs" },
  { Icon: Contact, name: "CRM", preview: "Customer relationships" },
  { Icon: PieChart, name: "Finance", preview: "Ledgers & cashflow" },
  { Icon: PackageSearch, name: "Purchase", preview: "Vendor & PO workflows" },
  { Icon: BriefcaseBusiness, name: "Projects", preview: "Tasks & milestones" },
  { Icon: FileBarChart, name: "Reports", preview: "Custom reporting" },
  { Icon: Activity, name: "Analytics", preview: "Intelligence dashboards" },
];

export function Ecosystem() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="ecosystem" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          The <span className="text-gradient-primary">Pisoft Universe</span>
        </motion.h2>
        <p className="mt-4 text-muted-foreground">Hover any module to explore its world.</p>

        <div className="relative mt-24 mx-auto h-[560px] w-full max-w-[640px]">
          {/* Center */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative">
              <div className="absolute inset-0 size-36 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-[image:var(--gradient-primary)] blur-2xl opacity-70" />
              <div className="relative size-32 rounded-full bg-[image:var(--gradient-primary)] glow-primary grid place-items-center animate-pulse-glow">
                <div>
                  <div className="font-display font-bold text-lg">Pisoft</div>
                  <div className="text-xs opacity-80">ERP Core</div>
                </div>
              </div>
            </div>
          </div>

          {[180, 260].map((r) => (
            <div
              key={r}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/40"
              style={{ width: r * 2, height: r * 2 }}
            />
          ))}

          {modules.map((m, i) => {
            const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2;
            const r = 260;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            const isActive = active === i;
            return (
              <motion.button
                key={m.name}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
              >
                <div className={`flex flex-col items-center gap-2 rounded-2xl border bg-surface/90 backdrop-blur px-4 py-3 transition-all
                  ${isActive ? "border-accent scale-110 glow-accent" : "border-border hover:border-accent/60"}`}>
                  <m.Icon className={`size-5 ${isActive ? "text-accent" : "text-primary"}`} />
                  <span className="text-xs font-medium">{m.name}</span>
                </div>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap rounded-lg bg-background border border-border px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {m.preview}
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
