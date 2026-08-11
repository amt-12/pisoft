import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  Compass,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Smartphone,
  Database,
  Cloud,
  Terminal,
  Target,
  TrendingUp,
  Users,
  Shield
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
    title: "DISCOVERY",
    subtitle: "Understanding Business Goals",
    icon: Search,
    description: "We understand your business, users, processes, challenges, and goals before writing code.",
    focus: ["Stakeholder Interviews", "Workflow Bottleneck Audit", "Operational Problem Mapping"],
    deliverable: "Scope of Work & System Specifications",
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    glowColor: "rgba(59, 130, 246, 0.15)"
  },
  {
    number: "02",
    title: "STRATEGY",
    subtitle: "Architecture & Roadmap",
    icon: Compass,
    description: "We define the product structure, technical approach, workflows, priorities, and roadmap.",
    focus: ["Database Normalization", "System Integration Map", "Migration Timeline Planning"],
    deliverable: "Technical Blueprint & Roadmap",
    gradient: "from-cyan-500/10 via-indigo-500/5 to-transparent",
    glowColor: "rgba(6, 182, 212, 0.15)"
  },
  {
    number: "03",
    title: "DESIGN",
    subtitle: "UI/UX & Interface Systems",
    icon: Palette,
    description: "We turn requirements into intuitive user experiences and scalable product interfaces.",
    focus: ["Figma Wireframes", "Click-Path Optimization", "Design Systems"],
    deliverable: "High-Fidelity Interactive Mockups",
    gradient: "from-indigo-500/10 via-violet-500/5 to-transparent",
    glowColor: "rgba(99, 102, 241, 0.15)"
  },
  {
    number: "04",
    title: "DEVELOPMENT",
    subtitle: "Agile Engineering",
    icon: Code2,
    description: "Our engineering team builds the solution using modern technologies and development practices.",
    focus: ["Modular API Architecture", "Frontend Portal Construction", "Continuous Integration"],
    deliverable: "Staging Sandbox Access",
    gradient: "from-violet-500/10 via-purple-500/5 to-transparent",
    glowColor: "rgba(139, 92, 246, 0.15)"
  },
  {
    number: "05",
    title: "TESTING",
    subtitle: "Quality & Reliability",
    icon: ShieldCheck,
    description: "We validate functionality, usability, performance, security, and reliability.",
    focus: ["Integration & E2E Testing", "Load & Performance Testing", "Security Vulnerability Scan"],
    deliverable: "QA Certification & Test Logs",
    gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    glowColor: "rgba(168, 85, 247, 0.15)"
  },
  {
    number: "06",
    title: "DEPLOYMENT",
    subtitle: "Production Go-Live",
    icon: Rocket,
    description: "We take the product from development into a production-ready environment.",
    focus: ["Legacy Database Migration", "Production Provisioning", "Staged Launch Protocol"],
    deliverable: "Live Production Ecosystem",
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    glowColor: "rgba(236, 72, 153, 0.15)"
  },
  {
    number: "07",
    title: "SUPPORT",
    subtitle: "Continuous Improvement",
    icon: HeartHandshake,
    description: "We continue improving, maintaining, and scaling the solution as your business evolves.",
    focus: ["24/7 Server Monitoring", "Quarterly Roadmap Audits", "Continuous Feature Updates"],
    deliverable: "SLA Support Agreement",
    gradient: "from-rose-500/10 via-orange-500/5 to-transparent",
    glowColor: "rgba(244, 63, 94, 0.15)"
  }
];

const whyPisoftPillars = [
  {
    title: "UNDERSTAND THE BUSINESS",
    desc: "We start with the problem, not the technology.",
    icon: Target
  },
  {
    title: "BUILD FOR SCALE",
    desc: "We create systems that can evolve as your business grows.",
    icon: TrendingUp
  },
  {
    title: "DESIGN FOR PEOPLE",
    desc: "We make complex technology easier for real people to use.",
    icon: Users
  },
  {
    title: "STAY FOR THE JOURNEY",
    desc: "Our relationship doesn't end when the product goes live.",
    icon: Shield
  }
];

export function Process() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const calculateRange = () => {
      if (trackRef.current) {
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth);
      }
    };

    calculateRange();
    const timer = setTimeout(calculateRange, 100);

    window.addEventListener("resize", calculateRange);
    return () => {
      window.removeEventListener("resize", calculateRange);
      clearTimeout(timer);
    };
  }, [isMobile]);

  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -scrollRange]);

  return (
    <>
      {/* SECTION 21 — OUR PROCESS (Horizontal Scroll) */}
      <section ref={sectionRef} id="process" className="relative h-[360vh] bg-background">
        <div className="sticky top-[var(--navbar-height,130px)] h-[calc(100vh-var(--navbar-height,130px))] flex flex-col justify-center overflow-hidden py-12">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-6xl mx-auto px-6 mb-6 shrink-0">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-extrabold">OUR BLUEPRINT</div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-1 font-display">
                Our Process. <span className="text-gradient-accent">Good software starts with understanding.</span>
              </h2>
            </div>
          </div>

          {/* Horizontal Card Conveyor */}
          <div className="relative flex-1 w-full min-h-0 flex items-center overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-8 px-[12vw] w-fit items-center py-6 select-none"
            >
              {/* Intro Card */}
              <div className="w-[320px] md:w-[380px] h-[440px] shrink-0 bg-surface/25 border border-border/50 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group select-none shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-accent font-extrabold">Engineering Precision</span>
                  <h3 className="text-3xl font-extrabold font-display mt-4 leading-tight text-foreground">
                    From Blueprint <span className="text-gradient-primary">To Execution.</span>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                    Good software starts with deep business understanding. We follow a 7-step engineering process to deliver software that scales seamlessly.
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs text-accent font-extrabold">
                  <span>Scroll to explore steps</span>
                  <ArrowRight className="size-4" />
                </div>
              </div>

              {/* 7 Process Steps */}
              {steps.map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <div
                    key={s.number}
                    className="w-[360px] h-[440px] shrink-0 bg-surface/30 border border-border/80 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-accent/40 shadow-md"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="text-5xl font-extrabold font-display text-muted-foreground/20 font-mono">
                        {s.number}
                      </div>
                      <div className="size-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <IconComponent className="size-5.5" />
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-accent font-extrabold font-mono">
                        {s.subtitle}
                      </span>
                      <h4 className="text-2xl font-extrabold font-display mt-1 text-foreground">
                        {s.title}
                      </h4>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mt-2.5">
                        {s.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="space-y-1.5">
                        {s.focus.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                            <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-border/40">
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Deliverable</span>
                        <div className="text-xs font-bold text-foreground mt-0.5 truncate">{s.deliverable}</div>
                      </div>
                    </div>
                  </div>
                );
              })}

            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 22 — WHY PISOFT */}
      <section className="py-24 px-6 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent mb-3">WHY PISOFT</div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-foreground max-w-3xl mx-auto">
            Technology With Business Thinking.
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Successful software isn't just about writing code. It's about understanding the business behind the code. Pisoft combines ERP expertise, product development, design, engineering, and business automation to create technology that works in the real world.
          </p>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {whyPisoftPillars.map((pil) => {
              const Icon = pil.icon;
              return (
                <div key={pil.title} className="p-6 rounded-3xl border border-border/80 bg-surface/60 backdrop-blur-xl shadow-sm hover:border-accent/40 transition-all">
                  <div className="size-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-sm font-extrabold font-display text-foreground uppercase tracking-wide">{pil.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{pil.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
