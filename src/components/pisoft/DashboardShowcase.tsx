import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

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
  
  // Track scroll progress along the sticky travel of the parent section
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end end"] 
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const index = useTransform(scrollYProgress, [0.05, 0.95], [0, dashboards.length - 1]);

  return (
    <section ref={ref} id="dashboard" className="relative h-[250vh] bg-background">
      <div className="sticky top-[var(--navbar-height,130px)] h-[calc(100vh-var(--navbar-height,130px))] flex flex-col justify-center overflow-hidden py-12">
        <div className="max-w-6xl mx-auto w-full px-6 flex flex-col justify-between h-full">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto shrink-0 mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Beautifully <span className="text-gradient-primary">in command.</span>
            </h2>
            <p className="mt-4 text-muted-foreground flex flex-wrap items-center justify-center gap-2">
              <span>Six dashboards. One unified product. Every metric a tap away.</span>
              <Link to="/applications" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-glow transition-colors">
                Explore Applications <ArrowRight className="size-4" />
              </Link>
            </p>
          </motion.div>

          <motion.div
            style={{ rotateX: rotate, transformPerspective: 1200 }}
            className="relative mx-auto max-w-4xl w-full rounded-3xl border border-border bg-surface shadow-[var(--shadow-elevated)] overflow-hidden flex-1 flex flex-col min-h-0"
          >
            {/* Laptop chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-background/60 shrink-0">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-accent/70" />
              <span className="size-2.5 rounded-full bg-primary/70" />
              <span className="ml-3 text-xs text-muted-foreground">pisoft.app/dashboard</span>
            </div>
            
            {/* Stacked dashboards container */}
            <div className="relative flex-1 min-h-0">
              {dashboards.map((d, i) => {
                const opacity = useTransform(index, [i - 0.5, i, i + 0.5], [0, 1, 0]);
                return (
                  <motion.div
                    key={d.name}
                    style={{ opacity }}
                    className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between h-full"
                  >
                    <div>
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
                            <div className="mt-1 text-lg md:text-xl font-bold text-gradient-accent">
                              {(j + 1) * 124 + i * 11}k
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-4">
                      <MockChart i={i} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <div className="h-4 shrink-0" />
        </div>
      </div>
    </section>
  );
}
