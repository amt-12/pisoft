import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Award,
  Newspaper,
  BookOpen,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Zap,
  Mail,
  Send,
} from "lucide-react";
import { Finale } from "@/components/pisoft/Finale";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Pisoft ERP — Company Profile, Awards & Corporate News" },
      {
        name: "description",
        content: "Discover Pisoft's corporate news, awards recognition by CIOReview, company history, ERP training programs, and official contact offices.",
      },
    ],
  }),
  component: NewsPage,
});

// Company content data matching the tabs
const companyData = [
  {
    id: "profile",
    name: "Company Profile",
    displayName: "Company Profile & Philosophy",
    icon: Building2,
    description:
      "Pisoft ERP is a leading enterprise technology company dedicated to consolidating business operations into unified, intelligence-driven ecosystems. Trusted by hundreds of growing organizations, we provide modern ERP suites, custom client modules, and robust business data platforms across India and the MENA region.",
    modules: [
      { title: "Corporate Headquarters", desc: "State-of-the-art product development center in Mohali, India." },
      { title: "Regional Offices", desc: "Expanding operational coverage in MENA and European technology corridors." },
      { title: "Specialist Team", desc: "Over 120 dedicated software engineers, database architects, and industry experts." },
      { title: "Client Retention Rate", desc: "Maintaining an exceptional 98% client retention rate across all verticals." },
    ],
    metrics: [
      { label: "Year Founded", value: "2012" },
      { label: "Client Base", value: "200+ Orgs" },
      { label: "Active Users", value: "45k+" },
    ],
    previewType: "profile",
    dashboardMock: {
      title: "Pisoft At A Glance",
      stats: [
        { label: "Global Offices", val: "3 Locations", color: "text-blue-600" },
        { label: "Support SLA", val: "99.8% Met", color: "text-emerald-600" },
      ],
      listTitle: "Company Milestones",
      list: [
        { desc: "AI Engine Integrated", right: "2026", status: "Active", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "MENA Regional Hub Launch", right: "2024", status: "Success", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "V3 Enterprise Launch", right: "2020", status: "Legacy", badgeColor: "bg-blue-100 text-blue-800" },
      ],
      chartValues: [30, 40, 55, 62, 70, 85, 95],
    },
  },
  {
    id: "awards",
    name: "Awards",
    displayName: "Awards & Recognition",
    icon: Award,
    description:
      "Acknowledging our excellence in software product engineering and enterprise digital enablement. Pisoft ERP has been recognized as a top ERP solution provider by CIOReview India Magazine (Nov 2017) and continues to secure high ratings from software audit reviews.",
    modules: [
      { title: "CIOReview India ERP Award", desc: "Named top ERP Solution Provider for enterprise-wide scalability (Nov 2017)." },
      { title: "Top 10 Manufacturing ERPs", desc: "Featured in the top 10 list of production-specialized enterprise suites." },
      { title: "ISO 27001 Certification", desc: "Validated database architectures enforcing high security and compliance standard." },
      { title: "SaaS Excellence Ribbon", desc: "Rated highly for customer onboarding, database integrity, and custom scripts." },
    ],
    metrics: [
      { label: "CIOReview Nom", value: "Nov 2017" },
      { label: "ISMS Certified", value: "ISO 27001" },
      { label: "User Reviews", value: "4.8 / 5" },
    ],
    previewType: "awards",
    dashboardMock: {
      title: "Award Display",
      stats: [
        { label: "CIOReview Award Date", val: "Nov 2017", color: "text-amber-500 font-semibold" },
        { label: "Category", val: "ERP Provider", color: "text-indigo-600" },
      ],
      listTitle: "Key Recognitions",
      list: [
        { desc: "CIOReview India Magazine Winner", right: "Nov 2017", status: "Gold", badgeColor: "bg-amber-100 text-amber-800" },
        { desc: "Industry Excellence Award", right: "2021", status: "Top 10", badgeColor: "bg-blue-100 text-blue-800" },
        { desc: "Best On-Prem Integration", right: "2023", status: "Silver", badgeColor: "bg-gray-100 text-gray-800" },
      ],
      chartValues: [80, 85, 82, 90, 88, 94, 99],
    },
  },
  {
    id: "news",
    name: "News",
    displayName: "Corporate News & Press Releases",
    icon: Newspaper,
    description:
      "Follow Pisoft ERP's latest press releases, corporate expansions, and updates. We frequently share version release notes, customer success spotlights, and expert takes on the future of business intelligence and cloud databases.",
    modules: [
      { title: "AI Analytics Live Integration", desc: "Pisoft launches fully integrated AI insights and query builders across all standard suites." },
      { title: "CIOReview India Highlight", desc: "Featured article covering Pisoft's journey from custom coding to modern SaaS ecosystems." },
      { title: "Operations Expansion: MENA", desc: "Establishing dedicated regional support offices in Dubai to cover UAE & Saudi markets." },
      { title: "Pisoft Version 4.2 Launch", desc: "Improving invoice automated taxation configurations and visual drag-drop schedulers." },
    ],
    metrics: [
      { label: "Press Releases", value: "18 / yr" },
      { label: "Media Spotlights", value: "6 Major" },
      { label: "News Feed Status", value: "Daily Sync" },
    ],
    previewType: "news",
    dashboardMock: {
      title: "Pisoft Press Feed",
      stats: [
        { label: "Last Press Update", val: "Today", color: "text-emerald-600" },
        { label: "Media Queries", val: "Resolved", color: "text-indigo-600" },
      ],
      listTitle: "Latest Articles",
      list: [
        { desc: "AI insights launch live on modules", right: "May 2026", status: "Read", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "CIOReview: Core ERP Reimagined", right: "Dec 2025", status: "Read", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "Pisoft expands database to MENA", right: "Jul 2025", status: "Archived", badgeColor: "bg-gray-100 text-gray-800" },
      ],
      chartValues: [40, 35, 48, 62, 58, 70, 82],
    },
  },
  {
    id: "training",
    name: "ERP Training",
    displayName: "ERP Training & Onboarding Academy",
    icon: BookOpen,
    description:
      "Maximizing the return on your system integration. Pisoft ERP provides comprehensive user training programs, system administrators' validation courses, weekly masterclasses, and visual onboarding databases to ensure complete organization transitions.",
    modules: [
      { title: "1-on-1 User Training", desc: "Tailored onscreen guidance sessions designed specifically for separate operational roles." },
      { title: "Admin Certification Level", desc: "Official certifications covering database access rules, visual card customization, and script execution." },
      { title: "Video Learning Database", desc: "24/7 access to screen-record guides, module walk-throughs, and configuration manuals." },
      { title: "Weekly Q&A Webinars", desc: "Live support webinars connecting your administrative leads directly with Pisoft core developers." },
    ],
    metrics: [
      { label: "Staff Certified", value: "8,500+" },
      { label: "Course Modules", value: "42 Guides" },
      { label: "Satisfaction Rate", value: "98.7%" },
    ],
    previewType: "training",
    dashboardMock: {
      title: "Training Progress",
      stats: [
        { label: "Active Class Enrolls", val: "140 Users", color: "text-blue-600" },
        { label: "Avg. Cert Pass Rate", val: "94.2%", color: "text-emerald-600" },
      ],
      listTitle: "Training Timelines",
      list: [
        { desc: "Sales/Billing Module Intake", right: "Mon 10:00 AM", status: "Scheduled", badgeColor: "bg-blue-100 text-blue-800" },
        { desc: "Admin Database Ruleset Sync", right: "Wed 02:00 PM", status: "Active", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "HR Payroll Setup Intake", right: "Fri 11:30 AM", status: "Queued", badgeColor: "bg-gray-100 text-gray-800" },
      ],
      chartValues: [60, 68, 65, 75, 70, 84, 91],
    },
  },
  {
    id: "contact",
    name: "Contact Us",
    displayName: "Contact Office & Inquiry",
    icon: MapPin,
    description:
      "Get in touch with Pisoft's team of enterprise architects, product developers, and customer support technicians. Whether you need custom package coding, pricing catalogs, or server integration advice, our staff is available to help.",
    modules: [
      { title: "Headquarters Office", desc: "Pisoft ERP, Phase 8-B, Industrial Area, Sector 74, Mohali, Punjab, India." },
      { title: "Sales Hotline Phone", desc: "+91-8288029930 (Available Mon-Sat, 09:00 AM - 06:00 PM)." },
      { title: "Official Support Mail", desc: "contact@pisoft.in / support@pisoft.in for response within 12 business hours." },
      { title: "Custom Coding Requests", desc: "Submit wireframes, database requirements, and package parameters for custom review." },
    ],
    metrics: [
      { label: "Avg Response", value: "<12 Hours" },
      { label: "Support Channels", value: "4 Active" },
      { label: "Customer Rating", value: "4.8★" },
    ],
    previewType: "contact",
    dashboardMock: {
      title: "Pisoft Support Office",
      stats: [
        { label: "Inquiries Recv.", val: "42 Today", color: "text-indigo-600" },
        { label: "System Uptime Status", val: "99.99%", color: "text-emerald-600" },
      ],
      listTitle: "Office Outlets",
      list: [
        { desc: "Mohali, IN (Headquarters)", right: "+91-8288029930", status: "Open", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "Dubai, UAE (MENA Office)", right: "+971-XXXXXXX", status: "Open", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "Delhi, IN (Support Hub)", right: "+91-98765XXXXX", status: "Closed", badgeColor: "bg-gray-100 text-gray-800" },
      ],
      chartValues: [99, 99, 99, 100, 99, 100, 100],
    },
  },
];

function NewsPage() {
  const [activeTab, setActiveTab] = useState(2); // Default to "News" tab active as per user request
  const currentItem = companyData[activeTab];

  // State for mock contact form
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", msg: "" });
      }, 3000);
    }
  };

  return (
    <main className="relative bg-background text-foreground min-h-screen flex flex-col pt-[var(--navbar-height,130px)]">

      {/* Redesigned Hero Header Section */}
      <section className="relative bg-slate-950 py-16 md:py-24 overflow-hidden border-b border-border">
        {/* Dotted Grid and Radial Glow */}
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-[image:var(--gradient-primary)] blur-3xl opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
          >
            <Link to="/" className="hover:text-accent transition">HOME</Link>
            <span>/</span>
            <span className="text-accent-glow font-semibold">COMPANY</span>
            <span>/</span>
            <span className="text-white/80">{currentItem.name}</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.h1
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase font-display max-w-3xl mx-auto"
            >
              {currentItem.displayName}
            </motion.h1>
          </AnimatePresence>

          <p className="mt-4 text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Stay updated with Pisoft's award-winning team, corporate announcements, and official contact support.
          </p>
        </div>

        {/* Glowing Indicator Line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_12px_var(--accent-glow)]" />
      </section>

      {/* Main Content Grid */}
      <section className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          
          {/* Left Sidebar (Company/News Tabs) */}
          <div className="flex flex-col gap-3 bg-surface/40 border border-border/60 p-4 rounded-2xl backdrop-blur-md sticky top-36">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground px-3 mb-2 uppercase">
              SECTIONS
            </h2>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-2 lg:pb-0 scrollbar-none">
              {companyData.map((tab, i) => {
                const isSelected = activeTab === i;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left text-sm font-semibold whitespace-nowrap transition-all border shrink-0 w-auto lg:w-full
                      ${
                        isSelected
                          ? "bg-accent/10 border-accent text-accent glow-accent"
                          : "bg-surface/50 border-border/80 text-muted-foreground hover:bg-surface/80 hover:text-foreground hover:border-border"
                      }`}
                  >
                    <Icon className={`size-4.5 shrink-0 ${isSelected ? "text-accent" : "text-muted-foreground"}`} />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content Details Area */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid md:grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {/* Left: Text Description & Modules */}
                <div className="flex flex-col justify-between gap-8">
                  <div>
                    {/* Header badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1 text-xs text-muted-foreground mb-4">
                      <span className="size-2 rounded-full bg-accent animate-pulse" />
                      Corporate Information
                    </div>

                    <h3 className="text-3xl font-bold tracking-tight font-display mb-4 text-gradient-primary">
                      Pisoft {currentItem.name}
                    </h3>

                    {/* Description with drop-cap */}
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                      <span className="float-left text-5xl font-extrabold pr-2 pt-1 font-display text-accent leading-[0.8]">
                        {currentItem.description.charAt(0)}
                      </span>
                      {currentItem.description.slice(1)}
                    </p>

                    {/* Dynamic Details list cards */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase mb-3">
                        {currentItem.name === "Contact Us" ? "Official Channels" : "Key Components"}
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {currentItem.modules.map((mod, index) => (
                          <div
                            key={index}
                            className="p-4 rounded-xl border border-border bg-surface/40 hover:bg-surface/60 transition-colors flex gap-3"
                          >
                            <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-semibold text-foreground leading-snug">
                                {mod.title}
                              </div>
                              <div className="text-[12px] text-muted-foreground mt-1 leading-normal">
                                {mod.desc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Summary metrics block */}
                  <div className="border-t border-border pt-6 mt-4">
                    <div className="grid grid-cols-3 gap-4">
                      {currentItem.metrics.map((met, index) => (
                        <div key={index} className="text-left">
                          <div className="text-2xl md:text-3xl font-extrabold text-gradient-accent font-display">
                            {met.value}
                          </div>
                          <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">
                            {met.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Custom Interactive Component based on active tab */}
                <div className="flex flex-col justify-center">
                  
                  {/* Tab 1: Profile Mockup */}
                  {currentItem.previewType === "profile" && (
                    <div className="relative rounded-2xl border border-border bg-surface shadow-[var(--shadow-elevated)] overflow-hidden w-full max-w-md mx-auto aspect-[4/3] flex flex-col">
                      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-background/80 shrink-0 select-none">
                        <span className="size-2 rounded-full bg-rose-400" />
                        <span className="size-2 rounded-full bg-amber-400" />
                        <span className="size-2 rounded-full bg-emerald-400" />
                        <span className="ml-3 text-[10px] text-muted-foreground font-mono">pisoft.app/profile</span>
                      </div>
                      <div className="flex-1 p-5 flex flex-col justify-between bg-gradient-to-b from-surface to-background overflow-hidden">
                        <div className="flex items-center justify-between border-b border-border/60 pb-3 shrink-0">
                          <div className="flex items-center gap-2">
                            <Building2 className="size-4.5 text-accent" />
                            <span className="text-[13px] font-bold tracking-tight text-foreground">{currentItem.dashboardMock.title}</span>
                          </div>
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent/10 text-accent uppercase tracking-wide">
                            Active Corporate
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 my-3 shrink-0">
                          {currentItem.dashboardMock.stats.map((st, index) => (
                            <div key={index} className="p-3 border border-border/50 bg-background/50 rounded-xl">
                              <span className="text-[10px] text-muted-foreground block">{st.label}</span>
                              <span className={`text-base font-extrabold font-display ${st.color} block mt-0.5`}>{st.val}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 min-h-0 flex flex-col justify-between mt-1">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 shrink-0">
                            {currentItem.dashboardMock.listTitle}
                          </div>
                          <div className="space-y-1.5 overflow-y-auto pr-1 flex-1">
                            {currentItem.dashboardMock.list.map((item, idx) => (
                              <div key={idx} className="flex items-center justify-between text-xs px-2.5 py-1.5 bg-background border border-border/40 rounded-lg">
                                <div className="flex flex-col">
                                  <span className="font-semibold text-foreground leading-tight">{item.desc}</span>
                                  <span className="text-[9px] text-muted-foreground mt-0.5">{item.right}</span>
                                </div>
                                <span className={`px-2 py-0.5 rounded text-[9px] font-semibold ${item.badgeColor}`}>{item.status}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Awards & Ribbon Certificate Display */}
                  {currentItem.previewType === "awards" && (
                    <div className="relative rounded-2xl border border-border bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-[var(--shadow-elevated)] p-6 md:p-8 w-full max-w-md mx-auto aspect-[4/3] flex flex-col justify-between overflow-hidden text-center text-white">
                      <div className="absolute -top-12 -left-12 size-36 rounded-full bg-accent/10 blur-2xl pointer-events-none" />
                      <div className="absolute -bottom-12 -right-12 size-36 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
                      
                      <div className="mx-auto size-16 rounded-full bg-accent/10 border border-accent grid place-items-center mb-2">
                        <Award className="size-9 text-accent" />
                      </div>
                      
                      <div>
                        <h4 className="text-xs tracking-[0.2em] font-semibold text-accent uppercase font-sans">
                          CIOREVIEW INDIA ERP AWARD
                        </h4>
                        <div className="w-12 h-[2px] bg-accent mx-auto my-2.5" />
                        <h5 className="font-display font-extrabold text-xl md:text-2xl mt-1 tracking-tight text-white leading-tight">
                          TOP 10 ERP SOLUTION PROVIDERS
                        </h5>
                        <p className="text-[12px] text-slate-400 mt-2 max-w-xs mx-auto leading-relaxed">
                          "Pisoft ERP stands out for custom operational database architectures, automated taxation, and modular flexibility tailored to ambitious teams."
                        </p>
                      </div>

                      <div className="text-[11px] font-semibold text-slate-400 mt-4 tracking-wider uppercase flex items-center justify-center gap-2">
                        <span>AWARDED: NOV 2017</span>
                        <span className="size-1 rounded-full bg-accent" />
                        <span>CIOREVIEW MAGAZINE</span>
                      </div>
                    </div>
                  )}

                  {/* Tab 3: News Feed Articles */}
                  {currentItem.previewType === "news" && (
                    <div className="relative rounded-2xl border border-border bg-surface shadow-[var(--shadow-elevated)] p-5 w-full max-w-md mx-auto aspect-[4/3] flex flex-col">
                      <div className="flex items-center gap-2 border-b border-border/60 pb-3 mb-4 shrink-0">
                        <Newspaper className="size-4.5 text-accent" />
                        <span className="text-[13px] font-bold text-foreground uppercase tracking-wider">LATEST PRESS FEED</span>
                      </div>
                      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                        <div className="p-3 border border-border/50 bg-background/50 rounded-xl hover:border-accent/30 transition-colors">
                          <span className="text-[9px] uppercase tracking-wider text-accent font-bold">RELEASE • MAY 2026</span>
                          <h4 className="text-xs font-bold text-foreground mt-1 leading-snug">AI-Powered Insights Now Live Across All Pisoft ERP Modules</h4>
                          <p className="text-[11px] text-muted-foreground mt-1.5 leading-normal">Integrating natural-language queries directly into sales charts, ledger databases, and inventory tracking boards.</p>
                        </div>
                        <div className="p-3 border border-border/50 bg-background/50 rounded-xl hover:border-accent/30 transition-colors">
                          <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">PRESS • NOV 2025</span>
                          <h4 className="text-xs font-bold text-foreground mt-1 leading-snug">Top 10 Manufacturing ERP Platforms of 2025 Features Pisoft</h4>
                          <p className="text-[11px] text-muted-foreground mt-1.5 leading-normal">CIOReview honors Pisoft's module customization for multi-warehouse tracking and servicing queues.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 4: ERP Training Checklist */}
                  {currentItem.previewType === "training" && (
                    <div className="relative rounded-2xl border border-border bg-surface shadow-[var(--shadow-elevated)] p-5 w-full max-w-md mx-auto aspect-[4/3] flex flex-col justify-between bg-gradient-to-b from-surface to-background">
                      <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-3 shrink-0">
                        <div className="flex items-center gap-2">
                          <BookOpen className="size-4.5 text-accent" />
                          <span className="text-[13px] font-bold text-foreground">Academy Curriculum</span>
                        </div>
                        <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Level 1 Onboarding</span>
                      </div>
                      <div className="space-y-2.5 overflow-y-auto pr-1 flex-1 py-1">
                        {[
                          { title: "Module Onboarding Course", stat: "100%", desc: "On-screen guides for invoicing, HR setups." },
                          { title: "Standard Admin Training", stat: "100%", desc: "Database query configurations & card grids." },
                          { title: "Expert Script Writing", stat: "45%", desc: "Custom business logic scripts integrations." },
                        ].map((item, idx) => (
                          <div key={idx} className="p-3 border border-border/40 bg-background/40 rounded-xl">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-semibold text-foreground">{item.title}</span>
                              <span className="font-bold text-accent">{item.stat}</span>
                            </div>
                            <div className="text-[10px] text-muted-foreground mt-1 leading-snug">{item.desc}</div>
                            {/* Simple Progress Bar */}
                            <div className="w-full h-1 bg-border rounded-full mt-2 overflow-hidden">
                              <div className="h-full bg-accent" style={{ width: item.stat }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 5: Contact Inquiry Form */}
                  {currentItem.previewType === "contact" && (
                    <div className="relative rounded-2xl border border-border bg-surface shadow-[var(--shadow-elevated)] p-5 w-full max-w-md mx-auto aspect-[4/3] flex flex-col justify-between">
                      <div className="flex items-center gap-2 border-b border-border/60 pb-3 shrink-0">
                        <Mail className="size-4.5 text-accent" />
                        <span className="text-[13px] font-bold text-foreground">SEND OFFICE INQUIRY</span>
                      </div>
                      
                      <AnimatePresence mode="wait">
                        {formSubmitted ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex-1 flex flex-col items-center justify-center text-center p-4"
                          >
                            <div className="size-12 rounded-full bg-emerald-100 text-emerald-800 grid place-items-center mb-3">
                              <Send className="size-6 text-emerald-600 animate-pulse" />
                            </div>
                            <h4 className="text-sm font-bold text-foreground">Message Dispatched!</h4>
                            <p className="text-[11px] text-muted-foreground mt-1">We'll get back to your query within 12 business hours.</p>
                          </motion.div>
                        ) : (
                          <motion.form
                            onSubmit={handleFormSubmit}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex-1 flex flex-col gap-2.5 mt-3 justify-center"
                          >
                            <div>
                              <input
                                type="text"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full text-xs px-3 py-2 border border-border bg-background/60 rounded-lg focus:outline-none focus:border-accent transition-colors"
                              />
                            </div>
                            <div>
                              <input
                                type="email"
                                placeholder="Corporate Email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full text-xs px-3 py-2 border border-border bg-background/60 rounded-lg focus:outline-none focus:border-accent transition-colors"
                              />
                            </div>
                            <div>
                              <textarea
                                placeholder="Inquiry Details..."
                                rows={2}
                                value={formData.msg}
                                onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                                className="w-full text-xs px-3 py-2 border border-border bg-background/60 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground py-2 text-xs font-semibold hover:opacity-95 transition-opacity"
                            >
                              SUBMIT INQUIRY
                              <Send className="size-3.5" />
                            </button>
                          </motion.form>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Get Your Free Consultant CTA Section */}
      <section className="bg-slate-900 border-y border-slate-800 py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-accent blur-3xl opacity-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900/90 to-primary/10 border border-slate-800 p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display uppercase">
              GET YOUR FREE CONSULTATION
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              We are a dedicated software architecture and ERP development team that offers design, module customisation, and database build services for your business from initial sketches to final production deployment.
            </p>
          </div>
          <Link
            to="/"
            hash="demo"
            className="group flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-6 py-4.5 text-sm font-semibold tracking-wide shadow-lg hover:opacity-95 transition-opacity shrink-0 w-full md:w-auto"
          >
            CONTACT OUR ARCHITECTS
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
          </Link>
        </div>
      </section>

      
    </main>
  );
}
