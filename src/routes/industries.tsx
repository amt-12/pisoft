import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Truck,
  Building2,
  Hotel,
  HardHat,
  Briefcase,
  Home,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Check
} from "lucide-react";
import { Finale } from "@/components/pisoft/Finale";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Pisoft — Industry-Specific ERP & Digital Software Solutions" },
      {
        name: "description",
        content: "We don't just sell software — we build software around your industry. Explore tailored digital solutions for Manufacturing, Retail, Education, Healthcare, Logistics, Construction, Real Estate, and Hospitality.",
      },
    ],
  }),
  component: IndustriesPage,
});

const industriesList = [
  {
    id: "manufacturing",
    name: "MANUFACTURING",
    tagline: "From Production Floor to Management Dashboard.",
    icon: Factory,
    description: "Manage production, inventory, procurement, sales, employees, and business reporting through one connected system.",
    erpCta: "Explore Manufacturing ERP →",
    solutions: [
      "Production Management Systems",
      "Inventory Management",
      "Quality Management Software",
      "Dealer & Distributor Platforms",
      "Custom ERP Solutions",
      "Business Dashboards"
    ],
    challenge: "Fragmented shop floor tracking and material waste causing delayed production schedules.",
    pisoftApproach: "Unify Bill of Materials (BOM), work orders, and raw material inventory into real-time MRP workflows.",
    buildType: "ERP + IoT Shop Floor Dashboards + Mobile QC Apps"
  },
  {
    id: "retail",
    name: "RETAIL & E-COMMERCE",
    tagline: "From Product to Purchase.",
    icon: ShoppingCart,
    description: "Connect products, inventory, sales, customers, purchasing, and multi-channel business performance.",
    erpCta: "Explore Retail ERP →",
    solutions: [
      "E-Commerce Platforms",
      "Retail Management Software",
      "POS Systems",
      "Inventory Platforms",
      "Customer Management Systems",
      "Order Management Systems",
      "Mobile Shopping Apps"
    ],
    challenge: "Stockouts in popular lines while slow-moving stock ties up working capital across retail outlets.",
    pisoftApproach: "Centralize multi-store POS and e-commerce orders into automated low-stock reorder triggers.",
    buildType: "Cloud POS + Custom E-Commerce + Mobile Apps"
  },
  {
    id: "education",
    name: "EDUCATION",
    tagline: "Build Better Digital Learning Experiences.",
    icon: GraduationCap,
    description: "Manage students, staff, administration, attendance, fees, and institutional operations effortlessly.",
    erpCta: "Explore Education ERP →",
    solutions: [
      "Education Management Systems",
      "Learning Management Systems",
      "Student Portals",
      "Online Examination Platforms",
      "Attendance Systems",
      "Fee Management Systems",
      "Training Platforms",
      "Education Mobile Apps"
    ],
    challenge: "Manual fee reconciliation, fragmented student records, and disconnected parent communication.",
    pisoftApproach: "Single student lifecycle portal connecting admissions, fees, LMS, biometric attendance, and parent apps.",
    buildType: "Web Campus Portal + Parent/Student Mobile Apps"
  },
  {
    id: "healthcare",
    name: "HEALTHCARE",
    tagline: "Better Technology for Better Operations.",
    icon: HeartPulse,
    description: "Connect administrative workflows, staff, operations, appointments, patient records, and hospital compliance.",
    erpCta: "Explore Healthcare Solutions →",
    solutions: [
      "Hospital Management Systems",
      "Clinic Management Software",
      "Appointment Platforms",
      "Patient Portals",
      "Healthcare Mobile Apps",
      "Doctor & Staff Dashboards"
    ],
    challenge: "Long patient wait times and administrative overload in doctor appointment scheduling & billing.",
    pisoftApproach: "Integrated EHR and clinic management workflow with instant mobile appointment booking and bill settlement.",
    buildType: "Hospital ERP + Patient Telemedicine Apps"
  },
  {
    id: "distribution",
    name: "DISTRIBUTION & WHOLESALE",
    tagline: "Manage the Flow of Products and Business.",
    icon: Building2,
    description: "Manage products, suppliers, inventory, orders, customers, and field sales operations across regional hubs.",
    erpCta: "Explore Distribution ERP →",
    solutions: [
      "Distribution Management Systems",
      "Dealer Management Platforms",
      "Inventory Systems",
      "Order Management",
      "Sales Force Applications",
      "Purchase Management",
      "Business Intelligence Dashboards"
    ],
    challenge: "Field sales teams struggling with offline ordering and delayed stock availability checks.",
    pisoftApproach: "Equip distributors and field agents with real-time stock sync and instant mobile order booking.",
    buildType: "Distribution ERP + Field Rep Mobile Apps"
  },
  {
    id: "logistics",
    name: "LOGISTICS & TRANSPORTATION",
    tagline: "Keep Every Movement Connected.",
    icon: Truck,
    description: "Bring operations, fleet, deliveries, driver teams, and business tracking information together.",
    erpCta: "Explore Logistics Solutions →",
    solutions: [
      "Fleet Management Systems",
      "Transportation Management Software",
      "Delivery Platforms",
      "Driver Applications",
      "Tracking Dashboards",
      "Logistics CRM",
      "Operations Management Systems"
    ],
    challenge: "Unpredictable vehicle maintenance costs and lack of delivery milestone transparency.",
    pisoftApproach: "GPS-integrated fleet dispatch hub with automated maintenance alerts and customer tracking portals.",
    buildType: "TMS Dashboard + Driver Android/iOS Apps"
  },
  {
    id: "construction",
    name: "CONSTRUCTION",
    tagline: "Connect Projects, People & Progress.",
    icon: HardHat,
    description: "Connect construction projects, site progress, raw materials, subcontractor teams, and cost estimation.",
    erpCta: "Explore Construction Solutions →",
    solutions: [
      "Construction Management Software",
      "Project Management Systems",
      "Material Management",
      "Contractor Management",
      "Site Progress Tracking",
      "Estimation & Quotation Systems",
      "Construction Dashboards"
    ],
    challenge: "Budget overruns and site material theft due to delayed manual reporting from remote construction sites.",
    pisoftApproach: "Mobile site logging app linked directly to central project costing and vendor payment approvals.",
    buildType: "Project ERP + Site Manager Mobile Apps"
  },
  {
    id: "hospitality",
    name: "HOSPITALITY",
    tagline: "Technology That Keeps Hospitality Moving.",
    icon: Hotel,
    description: "Manage operations, hotel staff, guest relationships, bookings, restaurant orders, and financial workflows.",
    erpCta: "Explore Hospitality Solutions →",
    solutions: [
      "Hotel Management Systems",
      "Restaurant Management Software",
      "Booking Platforms",
      "Order Management Systems",
      "Customer Applications",
      "Staff Management Systems",
      "Hospitality Dashboards"
    ],
    challenge: "Slow room check-ins, kitchen order delays, and fragmented guest feedback channels.",
    pisoftApproach: "Unified property management platform with contactless check-in, KDS kitchen display, and guest loyalty CRM.",
    buildType: "Property Management System + Guest Mobile App"
  },
  {
    id: "realestate",
    name: "REAL ESTATE",
    tagline: "Turn Property Operations Into Digital Experiences.",
    icon: Home,
    description: "Software for property developers, real estate agencies, brokers, property managers, and commercial venues.",
    erpCta: "Explore Real Estate Solutions →",
    solutions: [
      "Real Estate CRM",
      "Property Listing Platforms",
      "Lead Management Systems",
      "Property Management Software",
      "Sales Dashboards",
      "Customer Portals",
      "Real Estate Mobile Apps"
    ],
    challenge: "Lost property leads due to slow agent response times and manual site visit scheduling.",
    pisoftApproach: "Automated lead routing CRM with interactive property walkthrough portals and payment plan tracking.",
    buildType: "Real Estate CRM + Property Marketplace Portal"
  },
  {
    id: "services",
    name: "PROFESSIONAL SERVICES",
    tagline: "Simplify Complex Business Operations.",
    icon: Briefcase,
    description: "Custom platforms for agencies, consulting companies, service providers, and enterprise service organizations.",
    erpCta: "Explore Service Solutions →",
    solutions: [
      "Business Management Platforms",
      "Client Management Systems",
      "CRM Platforms",
      "Workflow Automation",
      "Reporting Dashboards",
      "Document Management Systems",
      "Custom Enterprise Software"
    ],
    challenge: "Unbilled project hours and scattered client communication across personal emails and chats.",
    pisoftApproach: "Client portal with automated billable hour tracking, task milestones, and centralized contract repository.",
    buildType: "Custom SaaS Portal + Client Workspace"
  }
];

function IndustriesPage() {
  const [activeInd, setActiveInd] = useState(0);
  const [explorerInd, setExplorerInd] = useState(0);

  const current = industriesList[activeInd];
  const explorerCurrent = industriesList[explorerInd];

  return (
    <main className="relative bg-background text-foreground min-h-screen flex flex-col pt-[var(--navbar-height,130px)]">

      {/* Hero Header */}
      <section className="relative bg-slate-950 text-white py-16 md:py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-0 size-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-accent mb-4 font-bold"
          >
            <Link to="/" className="hover:text-white transition">HOME</Link>
            <span>/</span>
            <span className="text-white">INDUSTRIES</span>
          </motion.div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="size-3.5" />
            <span>INDUSTRY-SPECIFIC DIGITAL ECOSYSTEMS</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-display max-w-4xl mx-auto leading-[1.15]">
            We Don't Just Build ERP. <br />
            <span className="text-gradient-accent">We Build Around Your Industry.</span>
          </h1>

          <p className="mt-6 text-slate-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Every industry has its own workflows, customers, challenges, and way of working. Pisoft designs and builds industry-specific digital solutions — from enterprise software and business platforms to websites, mobile applications, dashboards, and custom systems.
          </p>

          <div className="mt-8 text-sm font-extrabold text-accent font-display uppercase tracking-wider">
            Different industries. Different challenges. One technology partner.
          </div>
        </div>
      </section>

      {/* SECTION 12 & 14 — INDUSTRY CATALOG */}
      <section className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
          
          {/* Left Industry Selector Tabs */}
          <div className="flex flex-col gap-2 bg-surface/40 border border-border/60 p-4 rounded-2xl backdrop-blur-md sticky top-[calc(var(--navbar-height)+1.5rem)]">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground px-3 mb-2 uppercase">
              SELECT YOUR SECTOR
            </h2>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-1.5 pb-2 lg:pb-0 scrollbar-none">
              {industriesList.map((ind, i) => {
                const isSelected = activeInd === i;
                const Icon = ind.icon;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveInd(i)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all text-left whitespace-nowrap lg:whitespace-normal w-full ${
                      isSelected
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span className="truncate">{ind.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Main Showcase Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-10"
            >
              {/* Header Card */}
              <div className="p-8 rounded-3xl border border-border bg-surface/60 backdrop-blur-xl shadow-lg relative overflow-hidden">
                <div className="flex items-center gap-3 text-accent text-xs font-extrabold uppercase tracking-wider mb-2">
                  <current.icon className="size-5" />
                  <span>{current.name}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-foreground">
                  {current.tagline}
                </h2>

                <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Solutions We Build Grid */}
              <div>
                <h3 className="text-xl font-extrabold font-display mb-6 uppercase text-foreground">
                  Solutions We Build For {current.name}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {current.solutions.map((sol) => (
                    <div key={sol} className="p-5 rounded-2xl border border-border/80 bg-background/80 hover:border-accent/40 transition-all shadow-sm flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                        <Check className="size-4" />
                      </div>
                      <span className="text-xs font-bold text-foreground font-display">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Banner */}
              <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wider">TAILORED ARCHITECTURE</div>
                  <h4 className="text-2xl font-bold font-display mt-1">Ready to digitalize your {current.name.toLowerCase()} operations?</h4>
                </div>

                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 text-xs font-extrabold text-accent-foreground glow-accent hover:opacity-95 transition-all shadow-lg whitespace-nowrap"
                >
                  <span>{current.erpCta}</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* SECTION 15 — INDUSTRY EXPLORER INTERACTIVE */}
      <section className="bg-slate-950 text-white py-20 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">INTERACTIVE DIAGNOSTIC</div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white max-w-3xl mx-auto">
            Tell Us Your Industry. <span className="text-gradient-accent">We'll Build Around It.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Select your sector below to see how Pisoft analyzes your business challenges and engineers a custom connected solution.
          </p>

          {/* Industry Buttons Carousel */}
          <div className="mt-10 flex overflow-x-auto gap-2 pb-4 scrollbar-none justify-start md:justify-center">
            {industriesList.map((ind, idx) => (
              <button
                key={ind.id}
                onClick={() => setExplorerInd(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                  explorerInd === idx
                    ? "bg-accent text-accent-foreground shadow-lg scale-105"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                <ind.icon className="size-4" />
                <span>{ind.name}</span>
              </button>
            ))}
          </div>

          {/* Diagnostic Flow Card */}
          <div className="mt-12 p-8 md:p-12 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl text-left max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 size-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

            <div className="grid md:grid-cols-4 gap-6 relative z-10 items-center">
              
              {/* Step 1: Industry */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">01. INDUSTRY</div>
                <div className="text-lg font-extrabold font-display text-white">{explorerCurrent.name}</div>
              </div>

              {/* Step 2: Challenge */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest mb-1">02. CHALLENGE</div>
                <div className="text-xs text-slate-300 font-medium leading-relaxed">{explorerCurrent.challenge}</div>
              </div>

              {/* Step 3: Pisoft Approach */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] font-extrabold text-accent uppercase tracking-widest mb-1">03. PISOFT APPROACH</div>
                <div className="text-xs text-slate-300 font-medium leading-relaxed">{explorerCurrent.pisoftApproach}</div>
              </div>

              {/* Step 4: Solution Architecture */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 border border-accent/40">
                <div className="text-[10px] font-extrabold text-white uppercase tracking-widest mb-1">04. CUSTOM SOLUTION</div>
                <div className="text-xs font-bold text-white leading-relaxed">{explorerCurrent.buildType}</div>
              </div>

            </div>

            <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold font-display text-white">We Don't Just Sell Software.</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">We Build Software Around Businesses.</p>
              </div>

              <Link
                to="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-8 py-3.5 text-xs font-extrabold text-accent-foreground glow-accent hover:opacity-95 transition-all shadow-lg"
              >
                <span>Discuss Your Industry Workflow</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      <Finale />
    </main>
  );
}
