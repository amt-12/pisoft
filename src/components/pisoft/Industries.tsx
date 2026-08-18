import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Factory, Store, GraduationCap, HeartPulse,
  Truck, Package, HardHat, UtensilsCrossed, ExternalLink, Globe, Sparkles,
  Lock, CheckCircle2, ShieldCheck, ArrowRight, Monitor, Play
} from "lucide-react";



const industries = [
  {
    Icon: Factory,
    name: "Manufacturing",
    body: "Manage production, inventory, procurement, sales, employees, and business reporting through one connected system.",
    cta: "Explore Manufacturing ERP →"
  },
  {
    Icon: Store,
    name: "Retail",
    body: "Connect products, inventory, sales, customers, purchasing, and business performance across all store channels.",
    cta: "Explore Retail ERP →"
  },
  {
    Icon: GraduationCap,
    name: "Education",
    body: "Manage students, staff, administration, attendance, fees, and institutional operations efficiently.",
    cta: "Explore Education ERP →"
  },
  {
    Icon: HeartPulse,
    name: "Healthcare",
    body: "Connect administrative workflows, staff, operations, appointments, and organizational information safely.",
    cta: "Explore Healthcare Solutions →"
  },
  {
    Icon: Package,
    name: "Distribution",
    body: "Manage products, suppliers, inventory, orders, customers, and sales operations across supply chains.",
    cta: "Explore Distribution ERP →"
  },
  {
    Icon: Truck,
    name: "Logistics",
    body: "Bring operations, fleet, deliveries, driver teams, and business information together into one hub.",
    cta: "Explore Logistics Solutions →"
  },
  {
    Icon: HardHat,
    name: "Construction",
    body: "Connect construction projects, raw materials, site teams, vendors, and operational budget information.",
    cta: "Explore Construction Solutions →"
  },
  {
    Icon: UtensilsCrossed,
    name: "Hospitality",
    body: "Manage property operations, hotel staff, guest relationships, bookings, restaurant orders, and business workflows.",
    cta: "Explore Hospitality Solutions →"
  },
];

const liveWebsites = [
  {
    id: "chandigarhweb",
    title: "Chandigarh Web",
    url: "https://chandigarhweb.com/",
    domain: "chandigarhweb.com",
    category: "Digital Agency & Web Platforms",
    description: "Enterprise web development platform and digital solutions portal engineered for scaling businesses with integrated client portals and analytics.",
    image: "https://www.pisoftinformatics.com/assets/11-DYg5uA75.webp",
    badge: "Web Platform & Client Portal",
    highlights: ["Custom Web Architecture", "SEO & Performance Engine", "Client Lead Management"],
    metric: "High-Speed Architecture"
  },
  {
    id: "elivetoday",
    title: "Elive Today",
    url: "https://elivetoday.com/",
    domain: "elivetoday.com",
    category: "Media & Digital News",
    description: "High-velocity media portal and news content engine designed for real-time traffic handling, live publishing, and ad monetization workflows.",
    image: "https://www.pisoftinformatics.com/assets/Achievers-Bo15VV9y.webp",
    badge: "Media Engine & Content ERP",
    highlights: ["High-Volume Traffic Handling", "Real-Time News Publishing", "Dynamic Ad Management"],
    metric: "Live Traffic Stream"
  },
  {
    id: "majesticcleaning",
    title: "Majestic Cleaning Services",
    url: "https://majesticcleaningservices.ca/",
    domain: "majesticcleaningservices.ca",
    category: "Commercial & Residential Services",
    description: "Service dispatch management system, automated client booking engine, team shift scheduler, and invoicing ERP.",
    image: "https://www.pisoftinformatics.com/assets/7-rI60iPCX.webp",
    badge: "Service ERP & Booking Engine",
    highlights: ["Instant Online Booking Engine", "Service Dispatch & Route Sync", "Automated Billing & Receipts"],
    metric: "100% Automated Dispatch"
  },
  {
    id: "dtpathlab",
    title: "DT Pathlab",
    url: "https://www.dtpathlab.com/",
    domain: "dtpathlab.com",
    category: "Healthcare & Diagnostics",
    description: "Pathology laboratory management system, digital patient diagnostic report generation, and clinic sample tracking integration.",
    image: "https://www.pisoftinformatics.com/assets/Majestic-Bs08zMwn.webp",
    badge: "Pathology ERP & Patient Portal",
    highlights: ["Digital Test Report Delivery", "Patient Portal & Sample Tracking", "Doctor & Lab Workflows"],
    metric: "Instant Digital Reports"
  },
  {
    id: "dtsinsservices",
    title: "DTS Insurance Services",
    url: "https://achieverspoint.org",
    domain: "achieverspoint.org",
    category: "Insurance & Financial Services",
    description: "Policy tracking portal, financial compliance engine, customer lead management, and automated insurance claims portal.",
    image: "https://www.pisoftinformatics.com/assets/8-DDnW5Rag.webp",
    badge: "Financial ERP & Claims Hub",
    highlights: ["Policy & Claims Management", "Client Portal & Quotation Builder", "Regulatory Compliance Engine"],
    metric: "Secure Ledger Sync"
  }
];

export function Industries() {
  const [active, setActive] = useState(0);
  const [activeSiteIndex, setActiveSiteIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate the active industry tab
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % industries.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate the featured website showcase if user is not hovering
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveSiteIndex((prev) => (prev + 1) % liveWebsites.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const cur = industries[active];
  const activeSite = liveWebsites[activeSiteIndex];

  return (
    <section id="industries" className="relative py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-extrabold mb-3">
              INDUSTRIES FOR ERP
            </div>
          </motion.div>

          <div className="flex flex-col gap-2 w-full">
            {/* Line 1: Slides fast from left with bounce, stays left */}
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 18,
                mass: 0.8,
              }}
              className="text-left w-full"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-foreground">
                Built for Different Businesses.
              </h2>
            </motion.div>

            {/* Line 2: Slides fast from right with bounce on scroll, stays right */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 18,
                mass: 0.8,
                delay: 0.15,
              }}
              className="text-right w-full"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display">
                <span className="text-gradient-accent">Flexible Enough to Fit Yours.</span>
              </h2>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Every industry has different processes, challenges, and priorities. Pisoft ERP brings adaptable business workflows and applications together to support organizations across multiple sectors.
          </motion.p>
        </div>

        {/* Interactive Industry Selector Grid */}
        <div className="grid md:grid-cols-[1fr_420px] gap-8 items-center mb-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {industries.map((it, i) => (
              <button
                key={it.name}
                onClick={() => setActive(i)}
                className={`group rounded-2xl border p-5 text-left transition-all ${active === i
                    ? "border-accent bg-surface shadow-lg glow-accent"
                    : "border-border/80 bg-surface/50 hover:border-accent/40"
                  }`}
              >
                <it.Icon className={`size-5 ${active === i ? "text-accent" : "text-primary"}`} />
                <div className="mt-3 text-sm font-bold font-display">{it.name}</div>
              </button>
            ))}
          </div>

          <motion.div
            key={cur.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-border bg-surface p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 size-48 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 text-accent mb-4">
                <cur.Icon className="size-8" />
                <span className="text-xs font-bold uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">ERP INDUSTRY FIT</span>
              </div>
              <h3 className="text-3xl font-extrabold font-display">{cur.name}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {cur.body}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-xs font-extrabold text-accent-foreground glow-accent hover:opacity-95 transition-all shadow-md"
              >
                <span>{cur.cta}</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* CREATIVE SHOWCASE SECTION: LIVE ENTERPRISE IMPLEMENTATIONS */}
        <div className="mt-20 pt-16 border-t border-border/80">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="size-3.5" />
              <span>ENTERPRISE SHOWCASE</span>
            </div>

            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-foreground">
              Live Platforms <span className="text-gradient-primary">Powered by Pisoft.</span>
            </h3>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              We design, build, and deploy specialized ERP ecosystems and digital web platforms tailored around your exact operational model.
            </p>
          </motion.div>

          {/* Interactive Navigation Pills */}
          <div className="flex overflow-x-auto gap-2.5 pb-4 mb-10 scrollbar-none justify-start md:justify-center">
            {liveWebsites.map((site, i) => {
              const isSelected = activeSiteIndex === i;
              return (
                <button
                  key={site.id}
                  onClick={() => setActiveSiteIndex(i)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all whitespace-nowrap flex items-center gap-2 ${isSelected
                      ? "bg-accent text-accent-foreground shadow-lg glow-accent scale-105"
                      : "bg-surface border border-border/80 text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                >
                  <span className="size-2 rounded-full bg-accent animate-pulse" />
                  <span>{site.title}</span>
                </button>
              );
            })}
          </div>

          {/* Featured Spotlight Card (2-Column Interactive Stage) */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="mb-16"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSite.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-8 md:p-12 rounded-3xl border border-border/80 bg-slate-950 text-white relative overflow-hidden shadow-2xl"
              >
                {/* Background lighting */}
                <div className="absolute top-0 right-0 size-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 size-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

                <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">

                  {/* Left Column: Client System Specs */}
                  <div className="lg:col-span-6 flex flex-col gap-5 text-left">

                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-extrabold uppercase tracking-widest">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>LIVE SYSTEM ONLINE</span>
                      </span>
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        {activeSite.category}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-white">
                        {activeSite.title}
                      </h4>
                      <p className="mt-3 text-slate-300 text-xs md:text-sm leading-relaxed">
                        {activeSite.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">
                        ENGINEERED CAPABILITIES:
                      </div>
                      {activeSite.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2.5 text-xs text-slate-200 font-semibold">
                          <CheckCircle2 className="size-4 text-accent shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-4 flex-wrap">
                      <a
                        href={activeSite.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 text-xs font-extrabold text-accent-foreground glow-accent hover:opacity-95 transition-all shadow-xl"
                      >
                        <span>Visit Live Platform</span>
                        <ExternalLink className="size-4" />
                      </a>

                      <div className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full">
                        {activeSite.domain}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: macOS Browser Mockup Frame */}
                  <div className="lg:col-span-6">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden group">

                      {/* macOS Window Titlebar */}
                      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="size-3 rounded-full bg-rose-500/80" />
                          <div className="size-3 rounded-full bg-amber-500/80" />
                          <div className="size-3 rounded-full bg-emerald-500/80" />
                        </div>

                        {/* URL Bar */}
                        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1 text-[11px] text-slate-300 font-mono max-w-xs w-full truncate">
                          <Lock className="size-3 text-emerald-400 shrink-0" />
                          <span className="truncate">{activeSite.url}</span>
                        </div>

                        <div className="size-4 opacity-40">
                          <Globe className="size-4" />
                        </div>
                      </div>

                      {/* Mockup Screen Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                        <img
                          src={activeSite.image}
                          alt={activeSite.title}
                          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />

                        <div className="absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-[10px] text-white font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-accent animate-ping" />
                          <span>{activeSite.badge}</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Grid View of All 5 Live Platforms */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveWebsites.map((site, index) => {
              const isCurrent = activeSiteIndex === index;
              return (
                <motion.div
                  key={site.id}
                  onClick={() => setActiveSiteIndex(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer ${isCurrent
                      ? "border-accent bg-surface shadow-xl ring-1 ring-accent/30 scale-[1.02]"
                      : "border-border/80 bg-surface/50 hover:border-accent/40 hover:bg-surface/90"
                    }`}
                >
                  <div>
                    {/* Thumbnail Image Frame */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border/60 bg-black/20 mb-4">
                      <img
                        src={site.image}
                        alt={site.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[9px] font-extrabold text-accent uppercase">
                        {site.metric}
                      </div>
                    </div>

                    <div className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">
                      {site.category}
                    </div>

                    <h5 className="text-xl font-extrabold font-display text-foreground">
                      {site.title}
                    </h5>

                    <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                      {site.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-glow transition-colors"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="size-3.5" />
                    </a>

                    <span className="text-[10px] font-mono text-muted-foreground">
                      {site.domain}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
