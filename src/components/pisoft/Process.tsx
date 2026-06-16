import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { 
  Search, 
  Compass, 
  Palette, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  HeartHandshake, 
  ArrowRight, 
  Check 
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  focus: string[];
  deliverable: string;
  gradient: string;
  glowColor: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Deep Dive & Scoping",
    icon: Search,
    description: "We audit your existing operational workflows, map legacy spreadsheets, and interview stakeholders to identify bottlenecks.",
    focus: ["Stakeholder Interviews", "Workflow Bottleneck Audit", "Legacy Data Mapping"],
    deliverable: "Scope of Work & System Specification",
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    glowColor: "rgba(59, 130, 246, 0.15)"
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Architecture & Planning",
    icon: Compass,
    description: "We lay down the technical architecture, design the database schema, plan integrations, and design a custom migration roadmap.",
    focus: ["Database Normalization", "System Integration Map", "Migration Timeline Planning"],
    deliverable: "Technical Blueprint & Roadmap",
    gradient: "from-cyan-500/10 via-indigo-500/5 to-transparent",
    glowColor: "rgba(6, 182, 212, 0.15)"
  },
  {
    number: "03",
    title: "Design",
    subtitle: "UI/UX & Prototyping",
    icon: Palette,
    description: "We create interactive Figma prototypes, planning out every click to ensure optimal speed and task completion times.",
    focus: ["Figma Wireframes", "Click-Path Optimization", "User Persona Mapping"],
    deliverable: "High-Fidelity Interactive Mockups",
    gradient: "from-indigo-500/10 via-violet-500/5 to-transparent",
    glowColor: "rgba(99, 102, 241, 0.15)"
  },
  {
    number: "04",
    title: "Development",
    subtitle: "Agile Engineering",
    icon: Code2,
    description: "Our engineers build the application in sprints, deploying clean, modern, and highly modular code to a testing environment.",
    focus: ["Modular API Architecture", "Frontend Portal Construction", "Continuous Integration"],
    deliverable: "Staging Sandbox Access",
    gradient: "from-violet-500/10 via-purple-500/5 to-transparent",
    glowColor: "rgba(139, 92, 246, 0.15)"
  },
  {
    number: "05",
    title: "Testing",
    subtitle: "Quality & Security Audits",
    icon: ShieldCheck,
    description: "We run comprehensive automated test suites and carry out strict security audits to ensure the system is bulletproof.",
    focus: ["Integration & E2E Testing", "Load & Performance Testing", "Security Vulnerability Scan"],
    deliverable: "QA Certification & Test Logs",
    gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    glowColor: "rgba(168, 85, 247, 0.15)"
  },
  {
    number: "06",
    title: "Deployment",
    subtitle: "Rollout & Go-Live",
    icon: Rocket,
    description: "We migrate data with zero downtime and execute a staged rollout to ensure a smooth transition for your daily operations.",
    focus: ["Legacy Database Migration", "Production Provisioning", "Staged Launch Protocol"],
    deliverable: "Live Production ERP Ecosystem",
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    glowColor: "rgba(236, 72, 153, 0.15)"
  },
  {
    number: "07",
    title: "Support",
    subtitle: "Optimization & Evolution",
    icon: HeartHandshake,
    description: "We provide ongoing SLA support, active performance monitoring, and continuous updates as your business processes expand.",
    focus: ["24/7 Server Monitoring", "Quarterly Roadmap Audits", "Continuous Feature Updates"],
    deliverable: "SLA Support Agreement",
    gradient: "from-rose-500/10 via-orange-500/5 to-transparent",
    glowColor: "rgba(244, 63, 94, 0.15)"
  }
];

export function Process() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Monitor scroll for the sticky section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Calculate the total horizontal range to scroll
  useEffect(() => {
    const calculateRange = () => {
      if (trackRef.current) {
        // We scroll until the end of the track is visible in the viewport
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth);
      }
    };

    calculateRange();
    // Allow a small delay for components to fully render
    const timer = setTimeout(calculateRange, 100);

    window.addEventListener("resize", calculateRange);
    return () => {
      window.removeEventListener("resize", calculateRange);
      clearTimeout(timer);
    };
  }, [isMobile]);

  // Translate scroll range
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  // Track scroll position to update the header step progress tracker
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // There are 9 items in total: 1 Intro card, 7 step cards, 1 Outro card.
    // Intro occupies [0, 0.12]
    // Steps occupy [0.12, 0.88]
    // Outro occupies [0.88, 1.0]
    if (latest < 0.12) {
      setActiveIndex(-1);
    } else if (latest > 0.88) {
      setActiveIndex(7);
    } else {
      const stepIdx = Math.floor((latest - 0.12) / 0.76 * 7);
      setActiveIndex(Math.min(Math.max(stepIdx, 0), 6));
    }
  });

  // If Mobile, render a vertical scroll reveal timeline
  if (isMobile) {
    return (
      <section className="relative bg-background  px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Our Blueprint</div>
            <h2 className="text-3xl font-bold tracking-tight mt-2 font-display">
              How we <span className="text-gradient-accent">build solutions.</span>
            </h2>
          </div>

          {/* Vertical Timeline Wrapper */}
          <div className="relative pl-6 md:pl-8">
            {/* Timeline Line */}
            <div className="absolute left-1.5 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-primary to-border" />

            <div className="space-y-12">
              {steps.map((s, i) => {
                const IconComponent = s.icon;
                return (
                  <motion.div
                    key={s.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative flex flex-col items-start bg-surface/30 border border-border/60 rounded-2xl p-6 backdrop-blur-sm shadow-sm"
                  >
                    {/* Glowing Node on Timeline Line */}
                    <div className="absolute -left-[30px] top-6 size-4 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-[0_0_8px_rgba(234,88,12,0.4)]">
                      <div className="size-1.5 rounded-full bg-accent" />
                    </div>

                    {/* Step badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="size-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <IconComponent className="size-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold tracking-wider text-accent font-mono uppercase">Step {s.number}</span>
                        <h3 className="text-lg font-bold font-display text-foreground">{s.title}</h3>
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-accent/90 mb-2">{s.subtitle}</div>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4">{s.description}</p>

                    {/* Focus Points */}
                    <div className="space-y-2 mb-4 w-full">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Key Focus</div>
                      <div className="grid grid-cols-1 gap-1.5">
                        {s.focus.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Check className="size-3.5 text-accent shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverable */}
                    <div className="pt-3 border-t border-border/40 w-full">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Deliverable</span>
                      <div className="text-xs font-semibold text-foreground mt-0.5">{s.deliverable}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Outro CTA */}
            <div className="mt-16 text-center">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3.5 text-xs font-semibold text-accent-foreground glow-accent hover:opacity-95 transition"
              >
                Schedule a Free Demo
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop Horizontal Pin-and-Scroll
  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-background">
      {/* Sticky viewport frame */}
      <div className="sticky top-[var(--navbar-height,130px)] h-[calc(100vh-var(--navbar-height,130px))] flex flex-col justify-center overflow-hidden py-12">
        
        {/* Row 1: Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-6xl mx-auto px-6 mb-6 shrink-0">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Our Blueprint</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-1 font-display">
              How we <span className="text-gradient-accent">build solutions.</span>
            </h2>
          </div>
          <div className="text-right text-xs text-muted-foreground/50 mt-2 md:mt-0 font-medium font-mono hidden md:block select-none animate-pulse">
            [ Scroll Down to Navigate ]
          </div>
        </div>

        {/* Row 2: Dynamic Process Progress Tracker */}
        <div className="hidden lg:flex items-center justify-between max-w-4xl mx-auto w-full px-6 mb-12 shrink-0">
          {steps.map((s, idx) => {
            const isActive = activeIndex === idx;
            const isCompleted = activeIndex > idx;
            return (
              <div key={s.number} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center gap-1.5 relative">
                  <div className={`size-8 rounded-full border flex items-center justify-center text-[11px] font-bold transition-all duration-300 font-mono ${
                    isActive 
                      ? "bg-accent border-accent text-accent-foreground shadow-[0_0_12px_rgba(234,88,12,0.4)] scale-110" 
                      : isCompleted
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-surface border-border text-muted-foreground"
                  }`}>
                    {s.number}
                  </div>
                  <span className={`text-[9px] font-bold tracking-wider uppercase transition-colors duration-300 absolute -bottom-5 whitespace-nowrap ${
                    isActive ? "text-accent" : "text-muted-foreground/50"
                  }`}>
                    {s.title}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex-1 h-[2px] mx-2 bg-border relative overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: isCompleted ? "100%" : isActive ? "50%" : "0%" }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Row 3: Horizontal Card Conveyor */}
        <div className="relative flex-1 w-full min-h-0 flex items-center overflow-hidden">
          <motion.div 
            ref={trackRef}
            style={{ x }} 
            className="flex gap-8 px-[12vw] w-fit items-center py-6 select-none"
          >
            {/* 1. Intro Card */}
            <div className="w-[320px] md:w-[380px] h-[440px] shrink-0 bg-surface/25 border border-border/50 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group select-none shadow-[var(--shadow-elevated)]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Engineered for growth</span>
                <h3 className="text-3xl font-bold font-display mt-4 leading-tight text-foreground">
                  A discipline of <span className="text-gradient-primary">precision.</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  We don't believe in templates or quick fixes. We follow a meticulous, engineer-first implementation strategy to shift operations from chaotic manual sheets to a single, integrated source of truth.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs text-accent font-semibold">
                <span>Start scrolling to explore</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                >
                  <ArrowRight className="size-4" />
                </motion.div>
              </div>
            </div>

            {/* 2. Step Cards */}
            {steps.map((s, idx) => {
              const IconComponent = s.icon;
              const isActive = activeIndex === idx;
              return (
                <div
                  key={s.number}
                  className={`w-[360px] h-[440px] shrink-0 bg-surface/30 border border-border/80 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:bg-surface/50 shadow-sm ${
                    isActive ? "ring-1 ring-accent/20 shadow-md border-accent/20" : ""
                  }`}
                >
                  {/* Subtle hover gradient glow */}
                  <div 
                    className="absolute -right-20 -top-20 size-40 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none bg-gradient-to-br"
                    style={{ backgroundImage: `radial-gradient(circle, ${s.glowColor} 0%, transparent 70%)` }}
                  />

                  {/* Header: Number & Icon */}
                  <div className="flex items-center justify-between w-full">
                    <div className="text-5xl font-extrabold font-display text-muted-foreground/15 group-hover:text-accent/15 transition-colors duration-300 font-mono">
                      {s.number}
                    </div>
                    <div className="size-12 rounded-2xl bg-accent/5 border border-border group-hover:border-accent/20 group-hover:bg-accent/10 flex items-center justify-center text-muted-foreground group-hover:text-accent transition-all duration-300 shadow-sm">
                      <IconComponent className="size-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-4">
                    <div className="text-[10px] font-bold tracking-wider text-accent font-mono uppercase">{s.subtitle}</div>
                    <h4 className="text-xl font-bold font-display text-foreground mt-1 group-hover:text-gradient-accent transition-all duration-300">
                      {s.title}
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mt-3">
                      {s.description}
                    </p>
                  </div>

                  {/* Focus points & Deliverable */}
                  <div className="mt-auto">
                    <div className="space-y-1.5 mb-4">
                      {s.focus.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check className="size-3.5 text-accent shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3.5 border-t border-border/40">
                      <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Key Deliverable</span>
                      <div className="text-xs font-semibold text-foreground mt-0.5 truncate">{s.deliverable}</div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* 3. Outro CTA Card */}
            <div className="w-[320px] md:w-[380px] h-[440px] shrink-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent border border-border rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group shadow-[var(--shadow-elevated)]">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold font-mono">Next Steps</span>
                <h3 className="text-3xl font-bold font-display mt-4 leading-tight text-foreground">
                  Ready to co-create <span className="text-gradient-accent">your engine?</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  Let's audit your processes and design a roadmap customized to your company's operational blueprint. Free of charge, no strings attached.
                </p>
              </div>

              <div className="mt-auto">
                <a 
                  href="#demo" 
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3.5 text-sm font-semibold text-accent-foreground glow-accent hover:opacity-95 transition-all"
                >
                  Schedule a Demo
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Spacer */}
        <div className="h-6 shrink-0" />
      </div>
    </section>
  );
}
