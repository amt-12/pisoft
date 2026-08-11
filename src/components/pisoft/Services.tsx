import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Code2, Smartphone, Globe, Palette, Sparkles, Cloud, CheckCircle2, ArrowRight, Layers } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import s1Img from "@/assets/s1.png";
import s2Img from "@/assets/s2.png";
import s3Img from "@/assets/s3.png";
import s4Img from "@/assets/s4.png";
import s5Img from "@/assets/s5.png";
import s6Img from "@/assets/s6.png";

const services = [
  {
    id: "custom-software",
    Icon: Code2,
    title: "Custom Software",
    subtitle: "Enterprise Engineering",
    body: "Tailored enterprise solutions engineered for your operations. We design scalable database architectures, automated workflows, and custom client portals.",
    image: s1Img,
    highlights: ["Full-Stack Architecture", "Custom API & Database Sync", "Enterprise Security & SLA"],
    tag: "Core Engineering",
  },
  {
    id: "mobile-apps",
    Icon: Smartphone,
    title: "Mobile Apps",
    subtitle: "iOS & Android Suites",
    body: "Native-feel Android and iOS applications that delight your team and customers with real-time sync, offline mode, and push notifications.",
    image: s2Img,
    highlights: ["Cross-Platform React Native & Flutter", "Real-time Push Notifications", "Offline Data Caching"],
    tag: "Mobile Ecosystem",
  },
  {
    id: "web-platforms",
    Icon: Globe,
    title: "Web Platforms",
    subtitle: "Scalable Web Architecture",
    body: "Modern websites and web apps built to scale. High performance, lightning-fast server side rendering, and SEO optimization out of the box.",
    image: s3Img,
    highlights: ["High-Speed Next.js & Vite Apps", "Custom CMS & Admin Dashboards", "SEO & Speed Optimized"],
    tag: "Web Solutions",
  },
  {
    id: "ui-ux-design",
    Icon: Palette,
    title: "UI / UX Design",
    subtitle: "Human-Centered Design",
    body: "Human-centered experiences from research to launch. Interactive wireframes, user testing, design systems, and pixel-perfect UI execution.",
    image: s4Img,
    highlights: ["Figma Design Systems", "Interactive User Flow Prototypes", "Accessibility & Ergonomics"],
    tag: "Product Design",
  },
  {
    id: "branding-graphics",
    Icon: Sparkles,
    title: "Branding & Graphics",
    subtitle: "Corporate Identity",
    body: "Visual identities that translate strategy into design. Brand guidelines, logo suites, pitch decks, and digital marketing graphics.",
    image: s5Img,
    highlights: ["Visual Identity Systems", "Logo & Graphic Design Guidelines", "Marketing Collateral"],
    tag: "Brand Strategy",
  },
  {
    id: "cloud-solutions",
    Icon: Cloud,
    title: "Cloud Solutions",
    subtitle: "Infrastructure & DevOps",
    body: "Reliable, scalable infrastructure tuned for performance. AWS/GCP cloud migration, CI/CD pipelines, container orchestration, and 24/7 monitoring.",
    image: s6Img,
    highlights: ["AWS & Cloudflare Edge Hosting", "Automated CI/CD Deployment", "24/7 Server Uptime Monitoring"],
    tag: "DevOps & Cloud",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(Math.floor(latest * services.length), services.length - 1);
    setActiveIndex(Math.max(0, idx));
  });

  const handleTabClick = (index: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const targetScroll = scrollTop + (index / services.length) * rect.height;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const currentService = services[activeIndex];

  if (isMobile) {
    return (
      <section id="services" className="relative bg-background py-16 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {/* Header */}
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Beyond ERP</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight font-display">
              Industries <span className="text-gradient-primary">We Cater.</span>
            </h2>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              Pisoft is also your long-term technology partner — helping you build complete digital ecosystems.
            </p>
          </div>

          {/* Mobile Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
            {services.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveIndex(i)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  activeIndex === i
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "bg-surface border border-border text-muted-foreground"
                }`}
              >
                <s.Icon className="size-3.5" />
                <span>{s.title}</span>
              </button>
            ))}
          </div>

          {/* Mobile Active Card */}
          <div className="rounded-2xl border border-border bg-surface/80 p-6 flex flex-col gap-5 shadow-lg">
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-border/60 bg-black/20">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-wider mb-2">
                <currentService.Icon className="size-3.5" />
                <span>{currentService.tag}</span>
              </div>
              <h3 className="text-2xl font-bold font-display">{currentService.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {currentService.body}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-border/40">
              {currentService.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-xs text-foreground font-medium">
                  <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <a
              href="#demo"
              className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] py-3 text-xs font-bold text-accent-foreground glow-accent hover:opacity-95 transition"
            >
              <span>Request Consultation</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="services" className="relative h-[320vh] bg-background">
      {/* Sticky Viewport Frame */}
      <div className="sticky top-[var(--navbar-height,130px)] h-[calc(100vh-var(--navbar-height,130px))] flex flex-col justify-between py-8 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full px-6 flex flex-col h-full justify-between">

          {/* Row 1: Section Header */}
          <div className="shrink-0 mb-4">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Beyond ERP</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-1 font-display">
              Industries <span className="text-gradient-primary">We Cater.</span>
            </h2>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-2xl">
              Pisoft is also your long-term technology partner — helping you build complete digital ecosystems.
            </p>
          </div>

          {/* Row 2: Top Technology Tabs */}
          <div className="shrink-0 mb-6 border-b border-border/60 pb-3">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
              {services.map((s, idx) => {
                const isActive = activeIndex === idx;
                const Icon = s.Icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleTabClick(idx)}
                    className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                      isActive
                        ? "text-accent-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeServiceTab"
                        className="absolute inset-0 rounded-full bg-[image:var(--gradient-accent)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="size-4" />
                      <span>{s.title}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 3: 2-Column Showcase (Left: Content, Right: Image) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center flex-1 min-h-0 relative">

            {/* Left Column: Technology Service Details */}
            <div className="flex flex-col justify-center h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col justify-center gap-5"
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-wider uppercase w-fit">
                    <currentService.Icon className="size-4" />
                    <span>{currentService.tag}</span>
                  </div>

                  <div>
                    <h3 className="text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-foreground">
                      {currentService.title}
                    </h3>
                    <div className="text-sm font-semibold text-accent mt-1">
                      {currentService.subtitle}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-md">
                    {currentService.body}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {currentService.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-3 text-xs md:text-sm text-foreground font-semibold">
                        <div className="size-5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                          <CheckCircle2 className="size-3.5" />
                        </div>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href="#demo"
                      className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-bold text-accent-foreground glow-accent hover:opacity-95 transition-all shadow-lg"
                    >
                      <span>Explore Solutions</span>
                      <ArrowRight className="size-4" />
                    </a>
                    <div className="text-xs text-muted-foreground font-mono">
                      0{activeIndex + 1} / 0{services.length}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Image Display Showcase */}
            <div className="flex items-center justify-center h-full w-full relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-[32vh] md:h-[42vh] lg:h-[48vh] rounded-3xl overflow-hidden border border-border/80 bg-surface/60 backdrop-blur-xl shadow-2xl relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10 pointer-events-none z-10" />
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-sky-900/10 pointer-events-none z-10" />
                  <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none z-20 shadow-[inset_0_0_50px_rgba(255,255,255,0.05)]" />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
