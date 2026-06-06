import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState(0);
  
  // Track scroll progress along the sticky travel of the parent section
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end end"] 
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const index = useTransform(scrollYProgress, [0.05, 0.95], [0, dashboards.length - 1]);

  const opacity0 = useTransform(index, [-0.5, 0, 0.5], [0, 1, 0]);
  const opacity1 = useTransform(index, [0.5, 1, 1.5], [0, 1, 0]);
  const opacity2 = useTransform(index, [1.5, 2, 2.5], [0, 1, 0]);
  const opacity3 = useTransform(index, [2.5, 3, 3.5], [0, 1, 0]);
  const opacity4 = useTransform(index, [3.5, 4, 4.5], [0, 1, 0]);
  const opacity5 = useTransform(index, [4.5, 5, 5.5], [0, 1, 0]);
  const opacities = [opacity0, opacity1, opacity2, opacity3, opacity4, opacity5];

  if (isMobile) {
    const activeD = dashboards[activeTab];
    return (
      <section ref={ref} id="dashboard" className="relative bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">
          
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground font-display">
              Beautifully <span className="text-gradient-primary">in command.</span>
            </h2>
            <p className="mt-3 text-muted-foreground text-xs leading-relaxed max-w-sm mx-auto flex flex-col items-center gap-2">
              <span>Six dashboards. One unified product. Every metric a tap away.</span>
              <Link to="/applications" className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-glow transition-colors">
                Explore Applications <ArrowRight className="size-3.5" />
              </Link>
            </p>
          </div>

          {/* Dashboard select buttons (scrollable list) */}
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none shrink-0 px-1">
            {dashboards.map((d, i) => (
              <button
                key={d.name}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all whitespace-nowrap ${
                  activeTab === i
                    ? "bg-primary border-primary text-primary-foreground shadow-sm"
                    : "bg-surface border-border text-muted-foreground hover:border-primary/40"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>

          {/* Active Dashboard Card Mockup */}
          <div className="relative w-full rounded-2xl border border-border bg-surface shadow-md overflow-hidden flex flex-col min-h-[380px]">
            {/* Laptop Chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-background/60 shrink-0">
              <span className="size-2 rounded-full bg-destructive/70" />
              <span className="size-2 rounded-full bg-accent/70" />
              <span className="size-2 rounded-full bg-primary/70" />
              <span className="ml-3 text-[10px] text-muted-foreground">pisoft.app/dashboard</span>
            </div>

            {/* Dashboard content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Dashboard {activeTab + 1}</div>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">{activeD.name}</h3>
                  </div>
                  <div className={`px-2.5 py-0.5 rounded-full text-[10px] bg-gradient-to-r ${activeD.color} text-background font-semibold`}>
                    Live
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3">
                  {["Total", "Active", "Growth"].map((k, j) => (
                    <div key={k} className="rounded-xl border border-border bg-background/40 p-3 flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">{k}</div>
                      <div className="text-base font-bold text-gradient-accent">
                        {(j + 1) * 124 + activeTab * 11}k
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <MockChart i={activeTab} />
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }

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
                const opacity = opacities[i];
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
