import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  School,
  Plane,
  Car,
  HeartPulse,
  Building2,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Finale } from "@/components/pisoft/Finale";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Pisoft ERP — Specialized Applications & System Suites" },
      {
        name: "description",
        content: "Explore Pisoft's suite of management ERP systems: FSME, ESME, TTSME, ASME, MHSME, and SPSME, engineered to optimize financial services, schools, travel, automotive, clinics, and services.",
      },
    ],
  }),
  component: ApplicationsPage,
});

// Applications system data matching the tabs
const applicationsData = [
  {
    id: "fsme",
    name: "FSME",
    displayName: "Financial Services Management ERP (FSME)",
    icon: BarChart3,
    description:
      "Pisoft's Financial Services Management ERP (FSME) is built to coordinate high-velocity transactions, financial audits, client portfolio risk management, and automatic compliance logging for scaling financial brokerages and payment institutions.",
    modules: [
      { title: "Portfolio Tracking", desc: "Consolidate client asset balances, margin profiles, and trade ledgers instantly." },
      { title: "Compliance Engine", desc: "Automated tax calculations, KYC verification stages, and AML detection rules." },
      { title: "Transaction Hub", desc: "Secure processing of wire transfers, instant card checkouts, and batch payments." },
      { title: "Auditor Console", desc: "Generate audit-ready ledger journals and multi-entity taxation logs automatically." },
    ],
    metrics: [
      { label: "Accounts Settled", value: "99.98%" },
      { label: "Ledger Sync", value: "1.2s Sync" },
      { label: "API Transactions", value: "12M+ / mo" },
    ],
    dashboardMock: {
      title: "FSME Analytics Console",
      stats: [
        { label: "Active Portfolios", val: "1,240 Admin", color: "text-blue-600" },
        { label: "Settlement Status", val: "100% Cleared", color: "text-emerald-600" },
      ],
      listTitle: "Recent Financial Transacts",
      list: [
        { desc: "Apex Capital (Batch Trade)", right: "$42,500.00", status: "Cleared", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "Vertex Inv (Margin Call)", right: "$5,400.00", status: "Resolved", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "Nova Holdings (Wire Transfer)", right: "$12,300.00", status: "Pending", badgeColor: "bg-amber-100 text-amber-800" },
      ],
      chartValues: [40, 50, 48, 70, 65, 80, 92],
    },
  },
  {
    id: "esme",
    name: "ESME",
    displayName: "Education System Management ERP (ESME)",
    icon: School,
    description:
      "Pisoft's Education System Management ERP (ESME) consolidates academic databases, scheduling algorithms, online fee invoicing, student progress reports, and teacher workloads into a unified digital workspace.",
    modules: [
      { title: "Enrollment Hub", desc: "Manage applicant registration, class seat allocation, and document validation stages." },
      { title: "Fee Collections", desc: "Auto-generate recurring term invoices, exam fees, and bus transit billings." },
      { title: "Intelligent Timetables", desc: "Dynamic classroom scheduling engines designed to eliminate schedule conflicts." },
      { title: "Student Portals", desc: "Online portals for assignments, progress grading, class attendance tracking, and announcements." },
    ],
    metrics: [
      { label: "Active Pupils", value: "14,230" },
      { label: "Invoicing Accuracy", value: "100%" },
      { label: "Attendance Logging", value: "99.8%" },
    ],
    dashboardMock: {
      title: "ESME Academic Hub",
      stats: [
        { label: "Classes Active", val: "48 Rooms", color: "text-indigo-600" },
        { label: "Term Fee Recv.", val: "96.4%", color: "text-emerald-600" },
      ],
      listTitle: "Upcoming Examinations",
      list: [
        { desc: "Advanced Algebra (Hall A)", right: "Jun 12, 09:00 AM", status: "Scheduled", badgeColor: "bg-blue-100 text-blue-800" },
        { desc: "Organic Chemistry (Lab 3)", right: "Jun 15, 11:30 AM", status: "Ready", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "World History (Room 42)", right: "Jun 18, 02:00 PM", status: "Draft", badgeColor: "bg-gray-100 text-gray-800" },
      ],
      chartValues: [50, 55, 60, 58, 70, 75, 82],
    },
  },
  {
    id: "ttsme",
    name: "TTSME",
    displayName: "Tours & Travel System Management ERP (TTSME)",
    icon: Plane,
    description:
      "Pisoft's Tours & Travel System Management ERP (TTSME) simplifies itinerary generation, tour agent quotas, live booking states, transport schedules, and multi-vendor payout agreements in a single hub.",
    modules: [
      { title: "Itinerary Generator", desc: "Branded itinerary creation tool compiling flight, hotel, tour guide, and activity logs." },
      { title: "Live Calendar Engine", desc: "Grid mapping showing vehicle seat bookings, flight occupancy, and tour reservations." },
      { title: "Payouts Auditor", desc: "Automated commission splits and payout schedules for local suppliers and tour guides." },
      { title: "Manifests Exporter", desc: "Rapid export of flight, rail, and hotel room manifests for operations coordination." },
    ],
    metrics: [
      { label: "Travel Bookings", value: "8,500 / mo" },
      { label: "Voucher Dispatch", value: "Instant" },
      { label: "Connected Vendors", value: "240 Partners" },
    ],
    dashboardMock: {
      title: "TTSME Booking Center",
      stats: [
        { label: "Active Tours", val: "450 Bookings", color: "text-sky-600" },
        { label: "Payout Queue", val: "0 Pending", color: "text-emerald-600" },
      ],
      listTitle: "Vendor Dispatches",
      list: [
        { desc: "Marriott Paris (12 Pax)", right: "Hotel Vouchered", status: "Dispatched", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "Swiss Alps Tour (4 Pax)", right: "Guide Assigned", status: "Active", badgeColor: "bg-blue-100 text-blue-800" },
        { desc: "Haneda Express (8 Pax)", right: "Transfer Booked", status: "Confirmed", badgeColor: "bg-emerald-100 text-emerald-800" },
      ],
      chartValues: [30, 42, 35, 60, 55, 78, 85],
    },
  },
  {
    id: "asme",
    name: "ASME",
    displayName: "Automotive System Management ERP (ASME)",
    icon: Car,
    description:
      "Pisoft's Automotive System Management ERP (ASME) streamlines vehicle sales cycles, spare parts warehouses, repair queue tracking, mechanic schedules, and customer test drive pipelines.",
    modules: [
      { title: "Spare Parts Catalog", desc: "Multi-warehouse stock tracking, vendor list coordination, and automatic parts reordering." },
      { title: "Repair Bay Queue", desc: "Drag-and-drop job card tracker showing repair tasks, mechanic logs, and vehicle delivery times." },
      { title: "Dealership Sales CRM", desc: "Manage auto inventory, model configurations, finance deals, and vehicle registrations." },
      { title: "Quality Checklists", desc: "Custom digital safety checks, vehicle diagnostic logs, and test drive logs." },
    ],
    metrics: [
      { label: "Inventory items", value: "12,000+" },
      { label: "Service Turnaround", value: "-45 Mins" },
      { label: "Dealer Branches", value: "24 Synced" },
    ],
    dashboardMock: {
      title: "ASME Workshop Console",
      stats: [
        { label: "Repair Bays Active", val: "14 / 18 Bays", color: "text-indigo-600" },
        { label: "Low Stock Parts", val: "3 Items", color: "text-rose-600" },
      ],
      listTitle: "Job Cards Queue",
      list: [
        { desc: "Honda Accord (Service)", right: "Job Card 42", status: "Diagnosing", badgeColor: "bg-amber-100 text-amber-800" },
        { desc: "Toyota RAV4 (Brakes)", right: "Job Card 45", status: "Approved", badgeColor: "bg-blue-100 text-blue-800" },
        { desc: "BMW X5 (Detailing)", right: "Job Card 47", status: "Finished", badgeColor: "bg-emerald-100 text-emerald-800" },
      ],
      chartValues: [25, 30, 48, 42, 60, 65, 74],
    },
  },
  {
    id: "mhsme",
    name: "MHSME",
    displayName: "Medical & Healthcare System Management ERP (MHSME)",
    icon: HeartPulse,
    description:
      "Pisoft's Medical & Healthcare System Management ERP (MHSME) provides clinical operations with secure EMR files, doctor shift scheduling grids, outpatient logs, and automated insurance claims processing.",
    modules: [
      { title: "Patient EMR Records", desc: "Encryption-secured patient database keeping diagnostic reports, history, and vitals." },
      { title: "Doctor Rotations", desc: "Shift planners coordinating on-call doctor availability, ward checkups, and consultations." },
      { title: "Insurance Claim Formatter", desc: "Automated ICD-10 encoding, co-pay invoice calculations, and online claim submissions." },
      { title: "Pharmacy Stock Manager", desc: "Expiration alerts, prescription sync, and digital stock logs for in-house medicine." },
    ],
    metrics: [
      { label: "Patient Files", value: "42,000+" },
      { label: "Claims Acceptance", value: "97.4%" },
      { label: "Clinic Checkins", value: "240 / day" },
    ],
    dashboardMock: {
      title: "MHSME Medical Dashboard",
      stats: [
        { label: "Doctors On Duty", val: "12 Staff", color: "text-teal-600" },
        { label: "Emergency Status", val: "Normal", color: "text-cyan-600" },
      ],
      listTitle: "Patient Check-Ins",
      list: [
        { desc: "Arthur Pendragon (General)", right: "Vitals Logged", status: "In Consult", badgeColor: "bg-amber-100 text-amber-800" },
        { desc: "Guinevere Smith (Lab 1)", right: "Samples Collected", status: "Testing", badgeColor: "bg-blue-100 text-blue-800" },
        { desc: "Merlin Ambrosius (Pharm)", right: "Prescr. Ready", status: "Completed", badgeColor: "bg-emerald-100 text-emerald-800" },
      ],
      chartValues: [45, 52, 60, 58, 68, 79, 88],
    },
  },
  {
    id: "spsme",
    name: "SPSME",
    displayName: "Service Provider's System Management ERP (SPSME)",
    icon: Building2,
    description:
      "Pisoft's Service Provider's System Management ERP (SPSME) powers client-facing teams to design and build custom service catalogs, allocate project staff, manage client bookings, and generate itemized billing.",
    modules: [
      { title: "Client CRM Database", desc: "Secure storage of client profiles, service package preferences, and interaction histories." },
      { title: "Service Tier Catalog", desc: "Easily configure tier bundles, seasonal subscriptions, and flexible hourly pricing models." },
      { title: "Appointment Engine", desc: "Dynamic scheduling calendars with automated text/email confirmations and reminders." },
      { title: "Invoicing & Taxes", desc: "Rapid calculations for hourly work logs, package credits, local taxes, and instant PDF invoice downloads." },
    ],
    metrics: [
      { label: "Support Rating", value: "4.9★" },
      { label: "Billing Settled", value: "99.9%" },
      { label: "Service Hours", value: "15.8k+" },
    ],
    dashboardMock: {
      title: "SPSME Operations Suite",
      stats: [
        { label: "Pending Queries", val: "0 Tickets", color: "text-violet-600" },
        { label: "Team Allocation", val: "94.2%", color: "text-indigo-600" },
      ],
      listTitle: "Active Service Tickets",
      list: [
        { desc: "Alpha Logistics (ERP Tuning)", right: "Team A assigned", status: "Running", badgeColor: "bg-blue-100 text-blue-800" },
        { desc: "Beta Retail (Audit Intake)", right: "Docs validated", status: "Completed", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "Delta Consult (Custom Dev)", right: "Specs defined", status: "Planning", badgeColor: "bg-purple-100 text-purple-800" },
      ],
      chartValues: [30, 45, 42, 65, 70, 82, 91],
    },
  },
];

function ApplicationsPage() {
  const [activeTab, setActiveTab] = useState(0); // Default to FSME
  const currentApp = applicationsData[activeTab];

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
            <span className="text-accent-glow font-semibold">APPLICATIONS</span>
            <span>/</span>
            <span className="text-white/80">{currentApp.name}</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.h1
              key={currentApp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase font-display max-w-4xl mx-auto leading-tight"
            >
              {currentApp.displayName}
            </motion.h1>
          </AnimatePresence>

          <p className="mt-4 text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Explore the specialized modular architectures designed for sector enterprise control.
          </p>
        </div>

        {/* Glowing Indicator Line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_12px_var(--accent-glow)]" />
      </section>

      {/* Main Content Grid */}
      <section className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
          
          {/* Left Sidebar (Applications Tabs) */}
          <div className="flex flex-col gap-3 bg-surface/40 border border-border/60 p-4 rounded-2xl backdrop-blur-md sticky top-36">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground px-3 mb-2 uppercase">
              ERP SYSTEM SUITES
            </h2>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-2 lg:pb-0 scrollbar-none">
              {applicationsData.map((app, i) => {
                const isSelected = activeTab === i;
                const Icon = app.icon;
                return (
                  <button
                    key={app.id}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left text-sm font-semibold whitespace-nowrap transition-all border shrink-0 w-auto lg:w-full
                      ${
                        isSelected
                          ? "bg-accent/10 border-accent text-accent glow-accent"
                          : "bg-surface/50 border-border/80 text-muted-foreground hover:bg-surface/80 hover:text-foreground hover:border-border"
                      }`}
                  >
                    <Icon className={`size-4.5 shrink-0 ${isSelected ? "text-accent" : "text-muted-foreground"}`} />
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-xs font-bold uppercase text-muted-foreground/60">{app.name} Suite</span>
                      <span className="mt-0.5 text-xs lg:text-[13px]">{app.name} SYSTEM</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content Details Area */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentApp.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid md:grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {/* Left: Text Description & Features */}
                <div className="flex flex-col justify-between gap-8">
                  <div>
                    {/* Header badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1 text-xs text-muted-foreground mb-4">
                      <span className="size-2 rounded-full bg-accent animate-pulse" />
                      App-Specific Core Module
                    </div>

                    <h3 className="text-3xl font-bold tracking-tight font-display mb-4 text-gradient-primary">
                      {currentApp.name} System Infrastructure
                    </h3>

                    {/* Description with drop-cap */}
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                      <span className="float-left text-5xl font-extrabold pr-2 pt-1 font-display text-accent leading-[0.8]">
                        {currentApp.description.charAt(0)}
                      </span>
                      {currentApp.description.slice(1)}
                    </p>

                    {/* Dynamic Modules list cards */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase mb-3">
                        Core Functional Modules
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {currentApp.modules.map((mod, index) => (
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

                  {/* System statistics summary */}
                  <div className="border-t border-border pt-6 mt-4">
                    <div className="grid grid-cols-3 gap-4">
                      {currentApp.metrics.map((met, index) => (
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

                {/* Right: Simulated Interactive Mockup Dashboard */}
                <div className="flex flex-col justify-center">
                  <div className="relative rounded-2xl border border-border bg-surface shadow-[var(--shadow-elevated)] overflow-hidden w-full max-w-md mx-auto aspect-[4/3] flex flex-col">
                    {/* Simulated OS Browser Window Chrome */}
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-background/80 shrink-0 select-none">
                      <span className="size-2 rounded-full bg-rose-400" />
                      <span className="size-2 rounded-full bg-amber-400" />
                      <span className="size-2 rounded-full bg-emerald-400" />
                      <span className="ml-3 text-[10px] text-muted-foreground font-mono">
                        pisoft.erp/{currentApp.id}-system
                      </span>
                    </div>

                    {/* Inside Mock Dashboard Content */}
                    <div className="flex-1 p-5 flex flex-col justify-between bg-gradient-to-b from-surface to-background overflow-hidden">
                      {/* Dashboard Header */}
                      <div className="flex items-center justify-between border-b border-border/60 pb-3 shrink-0">
                        <div className="flex items-center gap-2">
                          <currentApp.icon className="size-4.5 text-accent" />
                          <span className="text-[13px] font-bold tracking-tight text-foreground">
                            {currentApp.dashboardMock.title}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent/10 text-accent uppercase tracking-wide">
                          <Zap className="size-2.5 animate-pulse text-accent" />
                          App Live
                        </span>
                      </div>

                      {/* Mock Core Stats Block */}
                      <div className="grid grid-cols-2 gap-3 my-3 shrink-0">
                        {currentApp.dashboardMock.stats.map((st, index) => (
                          <div key={index} className="p-3 border border-border/50 bg-background/50 rounded-xl">
                            <span className="text-[10px] text-muted-foreground block">{st.label}</span>
                            <span className={`text-base font-extrabold font-display ${st.color} block mt-0.5`}>
                              {st.val}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Dynamic Mock Chart representation */}
                      <div className="relative h-20 border border-border/40 bg-surface/50 rounded-xl p-3 flex flex-col justify-between overflow-hidden shrink-0">
                        <div className="flex items-center justify-between text-[10px] text-muted-foreground uppercase font-semibold">
                          <span>Operational Flow Rate</span>
                          <span className="flex items-center gap-1 text-accent">
                            <TrendingUp className="size-3" /> Stabilized
                          </span>
                        </div>
                        {/* Interactive SVG Chart Line */}
                        <div className="h-9 relative w-full mt-2">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id={`grad-${currentApp.id}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="oklch(0.72 0.18 55)" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="oklch(0.72 0.18 55)" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path
                              d={`M 0 ${30 - currentApp.dashboardMock.chartValues[0] / 3} 
                                  L 15 ${30 - currentApp.dashboardMock.chartValues[1] / 3} 
                                  L 33 ${30 - currentApp.dashboardMock.chartValues[2] / 3} 
                                  L 50 ${30 - currentApp.dashboardMock.chartValues[3] / 3} 
                                  L 66 ${30 - currentApp.dashboardMock.chartValues[4] / 3} 
                                  L 83 ${30 - currentApp.dashboardMock.chartValues[5] / 3} 
                                  L 100 ${30 - currentApp.dashboardMock.chartValues[6] / 3}`}
                              fill="none"
                              stroke="var(--color-accent)"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d={`M 0 30 
                                  L 0 ${30 - currentApp.dashboardMock.chartValues[0] / 3} 
                                  L 15 ${30 - currentApp.dashboardMock.chartValues[1] / 3} 
                                  L 33 ${30 - currentApp.dashboardMock.chartValues[2] / 3} 
                                  L 50 ${30 - currentApp.dashboardMock.chartValues[3] / 3} 
                                  L 66 ${30 - currentApp.dashboardMock.chartValues[4] / 3} 
                                  L 83 ${30 - currentApp.dashboardMock.chartValues[5] / 3} 
                                  L 100 ${30 - currentApp.dashboardMock.chartValues[6] / 3} 
                                  L 100 30 Z`}
                              fill={`url(#grad-${currentApp.id})`}
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Mock Records Table/List */}
                      <div className="flex-1 min-h-0 flex flex-col justify-between mt-3">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 shrink-0">
                          {currentApp.dashboardMock.listTitle}
                        </div>
                        <div className="space-y-1.5 overflow-y-auto pr-1 flex-1">
                          {currentApp.dashboardMock.list.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between text-xs px-2.5 py-1.5 bg-background border border-border/40 rounded-lg"
                            >
                              <div className="flex flex-col">
                                <span className="font-semibold text-foreground leading-tight">{item.desc}</span>
                                <span className="text-[9px] text-muted-foreground mt-0.5">{item.right}</span>
                              </div>
                              <span className={`px-2 py-0.5 rounded text-[9px] font-semibold ${item.badgeColor}`}>
                                {item.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>



    </main>
  );
}
