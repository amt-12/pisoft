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

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Pisoft ERP — Industry Solutions & Operational Control" },
      {
        name: "description",
        content: "Discover how Pisoft ERP customizes workflow logic, module integrations, and analytics dashboards for Finance, Education, Healthcare, Travel, Logistics, and Service sectors.",
      },
    ],
  }),
  component: IndustriesPage,
});

// Industries data matching the tabs
const industriesData = [
  {
    id: "finance",
    name: "FINANCE",
    displayName: "Financial Operations",
    icon: BarChart3,
    description:
      "Redesigning financial management for scaling organizations. Pisoft ERP's financial suite enables instant ledger consolidation, automated multi-entity taxation, real-time cash flow forecasting, and secure invoice collections in one unified workspace.",
    modules: [
      { title: "Ledger Consolidation", desc: "Real-time sync across multiple banks and legal entities with automatic reconciliation." },
      { title: "Invoicing & Billing", desc: "Branded, automated invoicing with multi-currency support and localized taxation compliance." },
      { title: "Auditable Reports", desc: "Standard tax reports, profit & loss, balance sheets, and audit logs compiled with one click." },
      { title: "Payment Collection", desc: "Integrated gateways with automatic payment reminders, card support, and instant bank receipts." },
    ],
    metrics: [
      { label: "Accounts Settled", value: "99.9%" },
      { label: "Processing Speed", value: "3x Faster" },
      { label: "Active Ledgers", value: "1,200+" },
    ],
    dashboardMock: {
      title: "Finance Console",
      stats: [
        { label: "Q2 Net Profit", val: "$240.5k", color: "text-emerald-600" },
        { label: "Invoice Aging", val: "4.2 Days", color: "text-amber-500" },
      ],
      listTitle: "Recent Invoices",
      list: [
        { desc: "Acme Corp Ltd", right: "$12,450.00", status: "Paid", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "Global Technologies", right: "$4,800.00", status: "Pending", badgeColor: "bg-amber-100 text-amber-800" },
        { desc: "Initech Software", right: "$9,120.00", status: "Paid", badgeColor: "bg-emerald-100 text-emerald-800" },
      ],
      chartValues: [30, 45, 35, 60, 50, 75, 82],
    },
  },
  {
    id: "education",
    name: "EDUCATION",
    displayName: "Education & Academy",
    icon: School,
    description:
      "Connecting classrooms, administration, and finances. Pisoft's school ERP suite manages the entire student lifecycle from enrollment and class schedules to fee collections, performance grading, and parent communications.",
    modules: [
      { title: "Student Records", desc: "Comprehensive profiles containing academic records, health logs, attendance history, and parent contacts." },
      { title: "Fee & Payment Hub", desc: "Automated billing for term fees, transport, and extra-curriculars with flexible payment plans." },
      { title: "Timetable Scheduler", desc: "Algorithmic scheduling of classes, teacher rotations, and room availability to prevent conflicts." },
      { title: "Parent-Teacher Portal", desc: "Instant announcements, progress reports, student logs, and messaging channels." },
    ],
    metrics: [
      { label: "Students Managed", value: "14.2k+" },
      { label: "Fee Collection", value: "96.5%" },
      { label: "Attendance Rate", value: "94.8%" },
    ],
    dashboardMock: {
      title: "Academy Hub",
      stats: [
        { label: "Total Students", val: "14,230", color: "text-blue-600" },
        { label: "Class Rooms", val: "42 Active", color: "text-indigo-600" },
      ],
      listTitle: "Today's Schedule",
      list: [
        { desc: "Advanced Calculus (Room 4)", right: "09:00 AM", status: "Lecture", badgeColor: "bg-purple-100 text-purple-800" },
        { desc: "Chemistry Lab (Lab 2)", right: "11:30 AM", status: "Lab", badgeColor: "bg-teal-100 text-teal-800" },
        { desc: "Faculty Sync (Room 1B)", right: "02:00 PM", status: "Staff", badgeColor: "bg-gray-100 text-gray-800" },
      ],
      chartValues: [60, 65, 70, 72, 68, 85, 94],
    },
  },
  {
    id: "travel",
    name: "TOURS AND TRAVEL",
    displayName: "Tours & Travel Operators",
    icon: Plane,
    description:
      "Smooth travel planning from booking to boarding. Pisoft's travel platform provides agents and operators with visual booking calendars, customized client itineraries, automated invoice generation, and unified vendor payouts.",
    modules: [
      { title: "Itinerary Builder", desc: "Generate and email drag-and-drop, branded PDF travel itineraries with flight, hotel, and activity details." },
      { title: "Booking Calendar", desc: "Visual scheduling of tours, seat assignments, and reservation statuses in one calendar view." },
      { title: "Vendor Payouts", desc: "Automated calculation of commissions, agent fees, hotel bookings, and airline payments." },
      { title: "Passenger Manifests", desc: "One-click generation of flight/bus manifests and passenger detail lists." },
    ],
    metrics: [
      { label: "Active Trips", value: "450 / mo" },
      { label: "Booking Conv.", value: "8.2%" },
      { label: "Vendor Connect", value: "85 Partners" },
    ],
    dashboardMock: {
      title: "Voyage Dashboard",
      stats: [
        { label: "Active Bookings", val: "450 Passengers", color: "text-sky-600" },
        { label: "Payouts Cleared", val: "94.2%", color: "text-emerald-600" },
      ],
      listTitle: "Upcoming Tours",
      list: [
        { desc: "Paris Getaway (12 Pax)", right: "Jun 10", status: "Confirmed", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "Alpine Skiing (4 Pax)", right: "Jun 14", status: "Pending", badgeColor: "bg-amber-100 text-amber-800" },
        { desc: "Tokyo Discovery (8 Pax)", right: "Jun 18", status: "Confirmed", badgeColor: "bg-emerald-100 text-emerald-800" },
      ],
      chartValues: [40, 35, 50, 48, 65, 78, 85],
    },
  },
  {
    id: "automobile",
    name: "AUTOMOBILE INDUSTRY",
    displayName: "Automobile & Dealerships",
    icon: Car,
    description:
      "Maximizing efficiency from showroom to service bay. Pisoft handles dealership inventories, spare parts stocking, vehicle service queues, mechanic work logs, and detailed digital vehicle records.",
    modules: [
      { title: "Inventory Tracking", desc: "Real-time spare parts stock monitoring with automated low-stock reorder thresholds." },
      { title: "Service Queue Manager", desc: "Visual drag-and-drop timeline of vehicle repairs, bay assignments, and status updates." },
      { title: "Dealer Sales CRM", desc: "Manage car models, test drive schedules, buyer logs, financing options, and registration paperwork." },
      { title: "Mechanic Work Logs", desc: "Log labor hours, parts used, vehicle diagnostic details, and quality checklists." },
    ],
    metrics: [
      { label: "Dealer Locations", value: "18 Outlets" },
      { label: "Turnaround Time", value: "-25% Lower" },
      { label: "Parts Cataloged", value: "12,000+" },
    ],
    dashboardMock: {
      title: "AutoConsole",
      stats: [
        { label: "Service Queue", val: "8 Cars", color: "text-indigo-600" },
        { label: "Parts Reorder Level", val: "12 Items", color: "text-rose-600" },
      ],
      listTitle: "Service Bays",
      list: [
        { desc: "Civic - Oil & Filters", right: "Bay 1", status: "In Progress", badgeColor: "bg-blue-100 text-blue-800" },
        { desc: "Mustang - Brakes Fix", right: "Bay 2", status: "Queued", badgeColor: "bg-gray-100 text-gray-800" },
        { desc: "Model 3 - Tire Rotation", right: "Bay 3", status: "Completed", badgeColor: "bg-emerald-100 text-emerald-800" },
      ],
      chartValues: [20, 25, 45, 30, 55, 60, 68],
    },
  },
  {
    id: "healthcare",
    name: "MEDICAL AND HEALTHCARE",
    displayName: "Medical & Healthcare Clinics",
    icon: HeartPulse,
    description:
      "Secure, compliant operations for modern medical centers. Pisoft manages electronic health records (EMR), doctor schedules, patient check-ins, clinical prescriptions, and integrated medical insurance billing.",
    modules: [
      { title: "Electronic Records (EMR)", desc: "Fully encrypted, HIPAA-compliant patient files documenting history, labs, and vitals." },
      { title: "Doctor Scheduler", desc: "Dynamic doctor shifts planner with online appointment booking and patient text reminders." },
      { title: "Insurance Integrations", desc: "Automatic eligibility checks, claim formatting, code lookups, and co-pay calculations." },
      { title: "Pharmacy Inventory", desc: "Barcode tracking of medication stock levels, expiration alerts, and prescription logs." },
    ],
    metrics: [
      { label: "Record Accuracy", value: "99.99%" },
      { label: "Claims Approved", value: "94.2%" },
      { label: "Consults / Month", value: "5,800+" },
    ],
    dashboardMock: {
      title: "ClinicOS Dashboard",
      stats: [
        { label: "Today's Patient Visits", val: "82 Checkins", color: "text-teal-600" },
        { label: "Admitted Wards", val: "14 Occupied", color: "text-cyan-600" },
      ],
      listTitle: "Doctor Schedules",
      list: [
        { desc: "Dr. Smith (Cardiology)", right: "Shift A", status: "Active", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "Dr. Patel (Pediatrics)", right: "Shift B", status: "On Call", badgeColor: "bg-amber-100 text-amber-800" },
        { desc: "Dr. Evans (Orthopedics)", right: "Shift C", status: "Away", badgeColor: "bg-gray-100 text-gray-800" },
      ],
      chartValues: [35, 42, 58, 62, 55, 73, 80],
    },
  },
  {
    id: "service",
    name: "SERVICE INDUSTRY",
    displayName: "Service-Based Businesses",
    icon: Building2,
    description:
      "Designed for modern client-facing companies to handle end-to-end customer relationships. Pisoft ERP manages customer relationship details, custom service package configurations, resource schedules, client bookings, and streamlined taxation invoicing.",
    modules: [
      { title: "Customer Relations (CRM)", desc: "Manage client database, contact info, personal follow-ups, and complete history." },
      { title: "Service & Package Creator", desc: "Build service tiers, custom subscriptions, hourly pricing, and promotional packages." },
      { title: "Smart Appointment Booking", desc: "An integrated appointment scheduling engine with automatic calendar bookings and customer alerts." },
      { title: "Billing & Taxation Suite", desc: "Automated invoice generator computing hourly services, discounts, taxes, and instant PDF exports." },
    ],
    metrics: [
      { label: "Customer Rating", value: "4.8★" },
      { label: "Billing Accuracy", value: "100%" },
      { label: "Active Subscriptions", value: "850+" },
    ],
    dashboardMock: {
      title: "ServiceDesk ERP",
      stats: [
        { label: "Daily Appointments", val: "34 Scheduled", color: "text-indigo-600" },
        { label: "Packages Live", val: "18 Tiers", color: "text-violet-600" },
      ],
      listTitle: "Today's Bookings",
      list: [
        { desc: "Sarah Jenkins - Consultation", right: "10:00 AM", status: "Confirmed", badgeColor: "bg-emerald-100 text-emerald-800" },
        { desc: "Mike Ross - System Tuning", right: "01:30 PM", status: "Assigned", badgeColor: "bg-blue-100 text-blue-800" },
        { desc: "Emma Watson - Audit Intake", right: "04:00 PM", status: "Pending", badgeColor: "bg-amber-100 text-amber-800" },
      ],
      chartValues: [25, 40, 38, 55, 60, 72, 79],
    },
  },
];

function IndustriesPage() {
  const [activeTab, setActiveTab] = useState(5); // Default to "Service Industry"
  const currentIndustry = industriesData[activeTab];

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
            <span className="text-accent-glow font-semibold">INDUSTRIES</span>
            <span>/</span>
            <span className="text-white/80">{currentIndustry.displayName}</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndustry.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-display"
            >
              {currentIndustry.name}
            </motion.h1>
          </AnimatePresence>

          <p className="mt-4 text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Tailoring ERP business logic, scheduling boards, and database tables to your operations.
          </p>
        </div>

        {/* Clean replacement of outdated hazard strip: Glowing accent indicator line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_12px_var(--accent-glow)]" />
      </section>

      {/* Main Content Grid */}
      <section className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          
          {/* Left Sidebar (Industries Tabs) */}
          <div className="flex flex-col gap-3 bg-surface/40 border border-border/60 p-4 rounded-2xl backdrop-blur-md sticky top-36">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground px-3 mb-2 uppercase">
              SELECT SECTOR
            </h2>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-2 lg:pb-0 scrollbar-none">
              {industriesData.map((ind, i) => {
                const isSelected = activeTab === i;
                const Icon = ind.icon;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left text-sm font-semibold whitespace-nowrap transition-all border shrink-0 w-auto lg:w-full
                      ${
                        isSelected
                          ? "bg-accent/10 border-accent text-accent glow-accent"
                          : "bg-surface/50 border-border/80 text-muted-foreground hover:bg-surface/80 hover:text-foreground hover:border-border"
                      }`}
                  >
                    <Icon className={`size-4.5 shrink-0 ${isSelected ? "text-accent" : "text-muted-foreground"}`} />
                    <span>{ind.displayName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content Details Area */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndustry.id}
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
                      Sector Optimized ERP
                    </div>

                    <h3 className="text-3xl font-bold tracking-tight font-display mb-4 text-gradient-primary">
                      Pisoft for {currentIndustry.displayName}
                    </h3>

                    {/* Redesigned Description featuring drop-cap */}
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                      <span className="float-left text-5xl font-extrabold pr-2 pt-1 font-display text-accent leading-[0.8]">
                        {currentIndustry.description.charAt(0)}
                      </span>
                      {currentIndustry.description.slice(1)}
                    </p>

                    {/* Dynamic Modules list cards */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase mb-3">
                        Included Features
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {currentIndustry.modules.map((mod, index) => (
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

                  {/* Operational Metrics summary */}
                  <div className="border-t border-border pt-6 mt-4">
                    <div className="grid grid-cols-3 gap-4">
                      {currentIndustry.metrics.map((met, index) => (
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

                {/* Right: Simulated Interactive Mockup Dashboard (Redesigns electrical cabling image) */}
                <div className="flex flex-col justify-center">
                  <div className="relative rounded-2xl border border-border bg-surface shadow-[var(--shadow-elevated)] overflow-hidden w-full max-w-md mx-auto aspect-[4/3] flex flex-col">
                    {/* Simulated OS Browser Window Chrome */}
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-background/80 shrink-0 select-none">
                      <span className="size-2 rounded-full bg-rose-400" />
                      <span className="size-2 rounded-full bg-amber-400" />
                      <span className="size-2 rounded-full bg-emerald-400" />
                      <span className="ml-3 text-[10px] text-muted-foreground font-mono">
                        pisoft.erp/{currentIndustry.id}-module
                      </span>
                    </div>

                    {/* Inside Mock Dashboard Content */}
                    <div className="flex-1 p-5 flex flex-col justify-between bg-gradient-to-b from-surface to-background overflow-hidden">
                      {/* Dashboard Header */}
                      <div className="flex items-center justify-between border-b border-border/60 pb-3 shrink-0">
                        <div className="flex items-center gap-2">
                          <currentIndustry.icon className="size-4.5 text-accent" />
                          <span className="text-[13px] font-bold tracking-tight text-foreground">
                            {currentIndustry.dashboardMock.title}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent/10 text-accent uppercase tracking-wide">
                          <Zap className="size-2.5 animate-pulse text-accent" />
                          Live Sync
                        </span>
                      </div>

                      {/* Mock Core Stats Block */}
                      <div className="grid grid-cols-2 gap-3 my-3 shrink-0">
                        {currentIndustry.dashboardMock.stats.map((st, index) => (
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
                          <span>Real-time Utilization</span>
                          <span className="flex items-center gap-1 text-accent">
                            <TrendingUp className="size-3" /> Optimal
                          </span>
                        </div>
                        {/* Interactive SVG Chart Line */}
                        <div className="h-9 relative w-full mt-2">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id={`grad-${currentIndustry.id}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="oklch(0.72 0.18 55)" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="oklch(0.72 0.18 55)" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path
                              d={`M 0 ${30 - currentIndustry.dashboardMock.chartValues[0] / 3} 
                                  L 15 ${30 - currentIndustry.dashboardMock.chartValues[1] / 3} 
                                  L 33 ${30 - currentIndustry.dashboardMock.chartValues[2] / 3} 
                                  L 50 ${30 - currentIndustry.dashboardMock.chartValues[3] / 3} 
                                  L 66 ${30 - currentIndustry.dashboardMock.chartValues[4] / 3} 
                                  L 83 ${30 - currentIndustry.dashboardMock.chartValues[5] / 3} 
                                  L 100 ${30 - currentIndustry.dashboardMock.chartValues[6] / 3}`}
                              fill="none"
                              stroke="var(--color-accent)"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d={`M 0 30 
                                  L 0 ${30 - currentIndustry.dashboardMock.chartValues[0] / 3} 
                                  L 15 ${30 - currentIndustry.dashboardMock.chartValues[1] / 3} 
                                  L 33 ${30 - currentIndustry.dashboardMock.chartValues[2] / 3} 
                                  L 50 ${30 - currentIndustry.dashboardMock.chartValues[3] / 3} 
                                  L 66 ${30 - currentIndustry.dashboardMock.chartValues[4] / 3} 
                                  L 83 ${30 - currentIndustry.dashboardMock.chartValues[5] / 3} 
                                  L 100 ${30 - currentIndustry.dashboardMock.chartValues[6] / 3} 
                                  L 100 30 Z`}
                              fill={`url(#grad-${currentIndustry.id})`}
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Mock Records Table/List */}
                      <div className="flex-1 min-h-0 flex flex-col justify-between mt-3">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 shrink-0">
                          {currentIndustry.dashboardMock.listTitle}
                        </div>
                        <div className="space-y-1.5 overflow-y-auto pr-1 flex-1">
                          {currentIndustry.dashboardMock.list.map((item, idx) => (
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

      {/* Redesigned "Get Your Free Consultant" CTA Footer Banner */}
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
