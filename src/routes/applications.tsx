import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  ShoppingCart,
  Users,
  Box,
  Layers,
  Building2,
  FileText,
  Cpu,
  Briefcase,
  PieChart,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Check
} from "lucide-react";
import { Finale } from "@/components/pisoft/Finale";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Pisoft ERP Applications — Everything Your Business Needs Connected" },
      {
        name: "description",
        content: "Explore Pisoft ERP's integrated application ecosystem: Sales, CRM, Inventory, Purchase, Finance, HR, Payroll, Production, Projects, and Real-Time Analytics.",
      },
    ],
  }),
  component: ApplicationsPage,
});

const applicationsData = [
  {
    id: "sales",
    name: "SALES MANAGEMENT",
    displayName: "Connected Sales Management",
    icon: ShoppingCart,
    description: "Manage enquiries, quotations, orders, sales activities, targets, and performance from one centralized system.",
    highlight: "Sales shouldn't be a collection of spreadsheets. It should be a connected process.",
    cta: "Explore Sales →",
    modules: [
      { title: "Enquiry & Quote Manager", desc: "Convert incoming enquiries into branded quotations with multi-item pricing tiers." },
      { title: "Order Pipeline Sync", desc: "Seamless transfer from confirmed sales order directly into inventory & billing." },
      { title: "Target & Performance Logs", desc: "Track sales rep activity, monthly revenue targets, and commission structures." },
      { title: "Automated Follow-ups", desc: "Trigger automatic email and SMS reminders for pending client proposals." },
    ],
    metrics: [
      { label: "Order Conversion", value: "+35% Faster" },
      { label: "Quote Accuracy", value: "99.9%" },
      { label: "Pipeline Control", value: "100% Real-time" },
    ],
  },
  {
    id: "crm",
    name: "CRM",
    displayName: "Customer Relationship Management",
    icon: Users,
    description: "Track leads, customers, follow-ups, communication, opportunities, and relationships throughout the customer journey.",
    highlight: "Know your customers. Understand your pipeline. Never lose an opportunity.",
    cta: "Explore CRM →",
    modules: [
      { title: "Lead Lifecycle Tracking", desc: "Capture leads from web forms, WhatsApp, and calls into one structured pipeline." },
      { title: "360° Customer Profile", desc: "Complete view of communication history, past purchases, open tickets, and contracts." },
      { title: "Opportunity Forecasting", desc: "Predict monthly revenue based on weighted deal stages and win probabilities." },
      { title: "Activity Reminders", desc: "Automated task assignments and reminders for sales representatives." },
    ],
    metrics: [
      { label: "Lead Retention", value: "4x Higher" },
      { label: "Response Time", value: "< 15 Mins" },
      { label: "Deal Closure", value: "+28% Boost" },
    ],
  },
  {
    id: "inventory",
    name: "INVENTORY MANAGEMENT",
    displayName: "Inventory & Stock Control",
    icon: Layers,
    description: "Monitor stock levels, movements, availability, transfers, adjustments, and inventory performance.",
    highlight: "Know what you have, where it is, and what needs attention.",
    cta: "Explore Inventory →",
    modules: [
      { title: "Multi-Warehouse Tracking", desc: "Real-time visibility across central warehouses, regional depots, and transit stock." },
      { title: "Barcode & Batch Serial Numbers", desc: "Track batch expiration dates, lot numbers, and serials with barcode scanning." },
      { title: "Low-Stock Reorder Triggers", desc: "Automatic purchase requisition alerts when items hit min reorder levels." },
      { title: "Stock Valuation Reports", desc: "FIFO, LIFO, and weighted average stock valuation calculated automatically." },
    ],
    metrics: [
      { label: "Stock Accuracy", value: "99.8%" },
      { label: "Wastage Reduction", value: "-45% Lower" },
      { label: "Reorder Speed", value: "Instant Sync" },
    ],
  },
  {
    id: "purchase",
    name: "PURCHASE MANAGEMENT",
    displayName: "Procurement & Supplier Control",
    icon: Box,
    description: "Manage suppliers, purchase requests, purchase orders, procurement workflows, and purchasing information.",
    highlight: "Bring procurement into the same connected business system.",
    cta: "Explore Purchase →",
    modules: [
      { title: "Supplier Quotations (RFQ)", desc: "Send RFQs to multiple vendors and compare quotes side by side." },
      { title: "Purchase Requisition Approval", desc: "Multi-level approval workflows based on order value thresholds." },
      { title: "Goods Received Notes (GRN)", desc: "Match incoming physical shipments against purchase orders and vendor bills." },
      { title: "Vendor Rating Scorecards", desc: "Track supplier delivery speeds, product quality, and price compliance." },
    ],
    metrics: [
      { label: "Procurement Cycle", value: "-40% Time" },
      { label: "Vendor Compliance", value: "98.5%" },
      { label: "PO Match Rate", value: "100% Exact" },
    ],
  },
  {
    id: "finance",
    name: "ACCOUNTS & FINANCE",
    displayName: "Financial Operations & Ledger",
    icon: BarChart3,
    description: "Bring financial operations into the same ecosystem with structured financial information, transactions, and reporting.",
    highlight: "Turn financial data into business visibility.",
    cta: "Explore Finance →",
    modules: [
      { title: "General Ledger & Chart of Accounts", desc: "Multi-currency general ledger with configurable account trees." },
      { title: "Accounts Receivable & Payable", desc: "Track outstanding client bills and vendor payables with aging alerts." },
      { title: "Bank Reconciliation", desc: "Import electronic bank statements for 1-click ledger reconciliation." },
      { title: "Automated Tax & P&L Reports", desc: "Compile balance sheets, profit/loss, and GST/VAT tax filings instantly." },
    ],
    metrics: [
      { label: "Audit Readiness", value: "Instant" },
      { label: "Tax Compliance", value: "100% Automated" },
      { label: "Cashflow Control", value: "Real-time" },
    ],
  },
  {
    id: "hr",
    name: "HR MANAGEMENT",
    displayName: "Human Resource Operations",
    icon: Building2,
    description: "Manage employees, departments, roles, attendance, leave, organizational information, and HR workflows.",
    highlight: "Your people. Your processes. One place.",
    cta: "Explore HR →",
    modules: [
      { title: "Employee Lifecycle Directory", desc: "Centralized employee profiles, onboarding documents, and role assignments." },
      { title: "Biometric & Mobile Attendance", desc: "Seamless integration with facial recognition, biometric hardware, or GPS check-in." },
      { title: "Leave Approval Workflows", desc: "Configurable leave quotas, policy rules, and multi-tier manager approvals." },
      { title: "Performance Appraisals", desc: "Structured KPI reviews, goal tracking, and appraisal feedback forms." },
    ],
    metrics: [
      { label: "HR Admin Time", value: "-60% Saved" },
      { label: "Attendance Accuracy", value: "100% Verified" },
      { label: "Employee Portal", value: "Self-Service" },
    ],
  },
  {
    id: "payroll",
    name: "PAYROLL",
    displayName: "Automated Payroll Engine",
    icon: FileText,
    description: "Simplify salary processing, payroll management, employee compensation, and related records.",
    highlight: "Make payroll easier to manage and easier to understand.",
    cta: "Explore Payroll →",
    modules: [
      { title: "1-Click Monthly Salary Processing", desc: "Calculate gross pay, overtime, bonuses, and deductions automatically." },
      { title: "Tax & Statutory Deductions", desc: "Auto-apply PF, ESI, TDS, and statutory deduction rules per region." },
      { title: "Automated Payslip Generation", desc: "Deliver digital payslips straight to employee email or portal." },
      { title: "Bank Batch Transfers", desc: "Generate formatted bank salary transfer files for all major banks." },
    ],
    metrics: [
      { label: "Payroll Processing", value: "Minutes, Not Days" },
      { label: "Deduction Accuracy", value: "100% Exact" },
      { label: "Payslip Delivery", value: "Instant Digital" },
    ],
  },
  {
    id: "production",
    name: "PRODUCTION",
    displayName: "Production & Shop Floor Control",
    icon: Cpu,
    description: "Connect production planning, materials, processes, and operational tracking.",
    highlight: "Bring production and business management together.",
    cta: "Explore Production →",
    modules: [
      { title: "Bill of Materials (BOM)", desc: "Define multi-level raw material recipes, scrap percentages, and labor costs." },
      { title: "Work Order Scheduling", desc: "Schedule shop floor jobs, machine allocations, and shift assignments." },
      { title: "Quality Checkpoints (QC)", desc: "Enforce raw material and finished goods quality inspection logs." },
      { title: "WIP Inventory Tracking", desc: "Monitor work-in-progress stock as items move through manufacturing stages." },
    ],
    metrics: [
      { label: "Shop Floor Visibility", value: "100% Live" },
      { label: "Material Waste", value: "-35% Reduced" },
      { label: "Job On-Time Rate", value: "96.4%" },
    ],
  },
  {
    id: "projects",
    name: "PROJECT MANAGEMENT",
    displayName: "Project & Task Management",
    icon: Briefcase,
    description: "Plan projects, assign responsibilities, monitor progress, and keep teams aligned.",
    highlight: "From planning to completion, keep every project moving.",
    cta: "Explore Projects →",
    modules: [
      { title: "Gantt Chart & Milestone Planner", desc: "Visual timeline view of project phases, dependencies, and deadlines." },
      { title: "Task Assignment & Time Logs", desc: "Assign tasks, log billable hours, and track team workloads." },
      { title: "Project Costing & Profitability", desc: "Compare estimated budgets against real-time material & labor expenses." },
      { title: "Client Progress Sharing", desc: "Provide external client viewports for milestone approvals." },
    ],
    metrics: [
      { label: "Project Delivery", value: "On Schedule" },
      { label: "Budget Variance", value: "< 2% Margin" },
      { label: "Team Alignment", value: "Unified Portal" },
    ],
  },
  {
    id: "analytics",
    name: "REPORTS & ANALYTICS",
    displayName: "Real-Time Reports & Dashboards",
    icon: PieChart,
    description: "Transform operational data into meaningful dashboards and actionable business insights.",
    highlight: "Stop waiting for reports. Start seeing the business in real time.",
    cta: "Explore Analytics →",
    modules: [
      { title: "Executive Business Dashboard", desc: "Single-screen overview of revenue, cashflow, pending orders, and inventory." },
      { title: "Custom Report Builder", desc: "Drag-and-drop report creator to filter, group, and export operational data." },
      { title: "Scheduled Email Digests", desc: "Automate daily, weekly, or monthly executive summary PDFs to leadership." },
      { title: "Role-Based Data Access", desc: "Ensure departmental managers only view relevant operational metrics." },
    ],
    metrics: [
      { label: "Report Generation", value: "Instant Live" },
      { label: "Executive Insights", value: "24/7 Access" },
      { label: "Data Export Formats", value: "PDF / Excel / CSV" },
    ],
  },
];

const erpFeaturesList = [
  "Sales Management", "Customer Management", "Lead Management", "CRM",
  "Inventory Management", "Purchase Management", "Supplier Management", "Accounts & Finance",
  "HR Management", "Employee Management", "Attendance", "Leave Management",
  "Payroll", "Production Management", "Project Management", "Task Management",
  "Reports & Analytics", "Business Dashboards", "Notifications", "Workflow Management",
  "Document Management", "Data Management", "Role-Based Access", "Administrative Controls", "Multi-Department Management"
];

function ApplicationsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const currentApp = applicationsData[activeTab];

  return (
    <main className="relative bg-background text-foreground min-h-screen flex flex-col pt-[var(--navbar-height,130px)]">

      {/* Hero Header Section */}
      <section className="relative bg-slate-950 text-white py-16 md:py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-[image:var(--gradient-primary)] blur-3xl opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-accent mb-4 font-bold"
          >
            <Link to="/" className="hover:text-white transition">HOME</Link>
            <span>/</span>
            <span className="text-white">ERP APPLICATIONS</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-display max-w-4xl mx-auto leading-[1.15]">
            Everything Your Business Needs. <br />
            <span className="text-gradient-accent">Connected in One Place.</span>
          </h1>

          <p className="mt-6 text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Pisoft ERP brings essential business functions together through an integrated application ecosystem designed around real operational workflows.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
          
          {/* Left Sidebar (Applications Tabs) */}
          <div className="flex flex-col gap-2 bg-surface/40 border border-border/60 p-4 rounded-2xl backdrop-blur-md sticky top-[calc(var(--navbar-height)+1.5rem)]">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground px-3 mb-2 uppercase">
              ERP APPLICATION ECOSYSTEM
            </h2>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-1.5 pb-2 lg:pb-0 scrollbar-none">
              {applicationsData.map((app, i) => {
                const isSelected = activeTab === i;
                const Icon = app.icon;
                return (
                  <button
                    key={app.id}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all text-left whitespace-nowrap lg:whitespace-normal w-full ${
                      isSelected
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span className="truncate">{app.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Main Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentApp.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-10"
            >
              {/* Application Header Card */}
              <div className="p-8 rounded-3xl border border-border bg-surface/60 backdrop-blur-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 size-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-3 text-accent text-xs font-extrabold uppercase tracking-wider mb-3">
                  <currentApp.icon className="size-5" />
                  <span>{currentApp.name}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight">
                  {currentApp.displayName}
                </h2>

                <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                  {currentApp.description}
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-accent/10 border border-accent/20">
                  <p className="text-sm font-bold text-accent font-display">
                    "{currentApp.highlight}"
                  </p>
                </div>
              </div>

              {/* Modules Grid */}
              <div>
                <h3 className="text-xl font-bold font-display mb-6">Key Application Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {currentApp.modules.map((m) => (
                    <div key={m.title} className="p-6 rounded-2xl border border-border/80 bg-background/80 hover:border-accent/40 transition-all shadow-sm">
                      <div className="flex items-center gap-2 font-bold text-sm text-foreground font-display mb-2">
                        <CheckCircle2 className="size-4 text-accent shrink-0" />
                        <span>{m.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics & CTA */}
              <div className="p-6 md:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="grid grid-cols-3 gap-6 w-full md:w-auto">
                  {currentApp.metrics.map((met) => (
                    <div key={met.label} className="text-center md:text-left">
                      <div className="text-xl font-extrabold font-display text-accent">{met.value}</div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1">{met.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 text-xs font-extrabold text-accent-foreground glow-accent hover:opacity-95 transition-all shadow-lg whitespace-nowrap"
                >
                  <span>Book Free ERP Demo</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* SECTION 09 — ERP FEATURES MATRIX */}
      <section className="bg-slate-950 text-white py-20 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">ERP FEATURES</div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white max-w-3xl mx-auto">
            Built Around Your Business.
          </h2>
          <p className="mt-4 text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Every business operates differently. Pisoft ERP brings together a broad set of capabilities that can be configured around your operational requirements.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 text-left">
            {erpFeaturesList.map((feat) => (
              <div key={feat} className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center gap-2 text-xs font-semibold text-slate-200">
                <Check className="size-3.5 text-accent shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 md:p-12 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-md max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-extrabold font-display tracking-tight text-white leading-tight">
              Your Business Doesn't Have to Adapt to Your Software.
              <br />
              <span className="text-gradient-accent">Your Software Should Adapt to Your Business.</span>
            </h3>
            <div className="mt-8 flex justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-8 py-4 text-sm font-bold text-accent-foreground glow-accent hover:opacity-95 transition-all shadow-xl"
              >
                <span>Request Customization Walkthrough</span>
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
