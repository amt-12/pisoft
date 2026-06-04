import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const dashboards = [
  { name: "Sales Analytics", color: "from-[#347AB7] to-[#FF8A24]" },
  { name: "Inventory Tracking", color: "from-[#FF8A24] to-[#347AB7]" },
  { name: "Employee Management", color: "from-[#347AB7] to-[#72c2ff]" },
  { name: "Payroll", color: "from-[#FF8A24] to-[#ffb86b]" },
  { name: "CRM", color: "from-[#347AB7] to-[#FF8A24]" },
  { name: "Financial Reports", color: "from-[#72c2ff] to-[#347AB7]" },
];

function MockChart({ i }: { i: number }) {
  return (
    <div className="grid grid-cols-12 gap-1.5 items-end h-32 mt-4">
      {Array.from({ length: 12 }).map((_, k) => (
        <div
          key={k}
          className="rounded-t bg-[image:var(--gradient-accent)] opacity-80"
          style={{ height: `${30 + Math.sin(k + i) * 35 + Math.random() * 30}%` }}
        />
      ))}
    </div>
  );
}

export function DashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const index = useTransform(scrollYProgress, [0.1, 0.9], [0, dashboards.length - 1]);

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Beautifully <span className="text-gradient-primary">in command.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six dashboards. One unified product. Every metric a tap away.
          </p>
        </motion.div>

        <motion.div
          style={{ rotateX: rotate, transformPerspective: 1200 }}
          className="relative mx-auto max-w-4xl rounded-3xl border border-border bg-surface shadow-[var(--shadow-elevated)] overflow-hidden"
        >
          {/* Laptop chrome */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-background/60">
            <span className="size-2.5 rounded-full bg-destructive/70" />
            <span className="size-2.5 rounded-full bg-accent/70" />
            <span className="size-2.5 rounded-full bg-primary/70" />
            <span className="ml-3 text-xs text-muted-foreground">pisoft.app/dashboard</span>
          </div>
          {/* Stacked dashboards */}
          <div className="relative p-6 md:p-10 min-h-[420px]">
            {dashboards.map((d, i) => {
              const opacity = useTransform(index, [i - 0.5, i, i + 0.5], [0, 1, 0]);
              return (
                <motion.div
                  key={d.name}
                  style={{ opacity }}
                  className="absolute inset-0 p-6 md:p-10"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">Dashboard {i + 1}</div>
                      <h3 className="mt-1 text-2xl md:text-3xl font-semibold">{d.name}</h3>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${d.color} text-background font-semibold`}>
                      Live
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {["Total", "Active", "Growth"].map((k, j) => (
                      <div key={k} className="rounded-xl border border-border bg-background/40 p-4">
                        <div className="text-xs text-muted-foreground">{k}</div>
                        <div className="mt-1 text-xl font-bold text-gradient-accent">{(j + 1) * 124 + i * 11}k</div>
                      </div>
                    ))}
                  </div>
                  <MockChart i={i} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
