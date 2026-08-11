import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import p1Img from "@/assets/p1.png";
import p2Img from "@/assets/p2.png";
import p3Img from "@/assets/p3.png";
import p4Img from "@/assets/p4.png";
import p5Img from "@/assets/p5.png";

const dashboards = [
  {
    name: "01 — SECURE AUTHENTICATION",
    title: "Protected Enterprise Login",
    desc: "Role-based access control, secure multi-factor login, and encrypted session management.",
    color: "from-[#347AB7] to-[#FF8A24]",
    image: p1Img
  },
  {
    name: "02 — INTERACTIVE DASHBOARD",
    title: "Real-Time Centralized Analytics",
    desc: "Comprehensive business control center with live performance metrics and operational insights.",
    color: "from-[#FF8A24] to-[#347AB7]",
    image: p2Img
  },
  {
    name: "03 — CLIENT MANAGEMENT",
    title: "Unified Client & CRM Operations",
    desc: "Seamlessly manage client accounts, communication histories, directories, and engagements.",
    color: "from-[#347AB7] to-[#72c2ff]",
    image: p3Img
  },
  {
    name: "04 — TASK MANAGEMENT",
    title: "Streamlined Task Delegation",
    desc: "Assign, monitor, and execute operational tasks with real-time status and deadline tracking.",
    color: "from-[#FF8A24] to-[#ffb86b]",
    image: p4Img
  },
  {
    name: "05 — HOTEL MANAGEMENT",
    title: "Hospitality & Reservation Engine",
    desc: "End-to-end hotel operations, room enquiry processing, reservation tracking, and guest management.",
    color: "from-[#347AB7] to-[#FF8A24]",
    image: p5Img
  },
];

export function DashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState(0);

  // Track scroll progress along the sticky travel of the parent section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [4, -4]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const calculatedIndex = Math.min(
      dashboards.length - 1,
      Math.floor(latest * dashboards.length)
    );
    if (calculatedIndex !== activeTab) {
      setActiveTab(calculatedIndex);
    }
  });

  const activeD = dashboards[activeTab];

  if (isMobile) {
    return (
      <section ref={ref} id="dashboard" className="relative bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">

          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground font-display">
              Beautifully <span className="text-gradient-primary">in command.</span>
            </h2>
            <p className="mt-3 text-muted-foreground text-xs leading-relaxed max-w-sm mx-auto flex flex-col items-center gap-2">
              <span>Five dashboards. One unified product. Every metric a tap away.</span>
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
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all whitespace-nowrap ${activeTab === i
                  ? "bg-primary border-primary text-primary-foreground shadow-sm"
                  : "bg-surface border-border text-muted-foreground hover:border-primary/40"
                  }`}
              >
                {d.name}
              </button>
            ))}
          </div>

          {/* Active Dashboard Card Mockup */}
          <div className="relative w-full rounded-2xl border border-border bg-surface shadow-md overflow-hidden flex flex-col">
            {/* Laptop Chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-background/60 shrink-0">
              <span className="size-2 rounded-full bg-destructive/70" />
              <span className="size-2 rounded-full bg-accent/70" />
              <span className="size-2 rounded-full bg-primary/70" />
              <a
                href="https://project.pisofterp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-[10px] text-muted-foreground hover:text-accent hover:underline transition-colors cursor-pointer truncate"
              >
                https://project.pisofterp.com
              </a>
            </div>

            {/* Full Dashboard Image (Edge to Edge) */}
            <div className="w-full flex items-center justify-center bg-background overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={activeD.image}
                  alt={activeD.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="w-full h-auto object-cover object-top"
                />
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="dashboard" className="relative h-[250vh] bg-background">
      <div className="sticky top-[var(--navbar-height,130px)] h-[calc(100vh-var(--navbar-height,130px))] flex flex-col justify-center overflow-hidden py-6">
        <div className="max-w-6xl mx-auto w-full px-6 flex flex-col justify-between h-full">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto shrink-0 mb-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Beautifully <span className="text-gradient-primary">in command.</span>
            </h2>
            <p className="mt-3 text-muted-foreground text-sm flex flex-wrap items-center justify-center gap-2">
              <span>Five dashboards. One unified product. Every metric a tap away.</span>
              <Link to="/applications" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-glow transition-colors">
                Explore Applications <ArrowRight className="size-4" />
              </Link>
            </p>

            {/* Interactive Tab Selectors in Desktop View */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {dashboards.map((d, i) => (
                <button
                  key={d.name}
                  onClick={() => setActiveTab(i)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${activeTab === i
                    ? "bg-primary border-primary text-primary-foreground shadow-sm"
                    : "bg-surface/80 border-border text-muted-foreground hover:border-primary/40"
                    }`}
                >
                  {d.name}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ rotateX: rotate, transformPerspective: 1200 }}
            className="relative mx-auto max-w-5xl w-full rounded-2xl md:rounded-3xl border border-border bg-surface shadow-[var(--shadow-elevated)] overflow-hidden flex-1 flex flex-col min-h-0"
          >
            {/* Laptop chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-background/60 shrink-0">
              <span className="size-2 rounded-full bg-destructive/70" />
              <span className="size-2 rounded-full bg-accent/70" />
              <span className="size-2 rounded-full bg-primary/70" />
              <a
                href="https://project.pisofterp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-[10px] text-muted-foreground hover:text-accent hover:underline transition-colors cursor-pointer truncate"
              >
                https://project.pisofterp.com
              </a>
            </div>

            {/* Crisp Full Width Edge-to-Edge Active Dashboard Image */}
            <div className="relative flex-1 min-h-0 bg-background flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={activeD.image}
                  alt={activeD.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="w-full h-full object-cover object-top"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="h-2 shrink-0" />
        </div>
      </div>
    </section>
  );
}
