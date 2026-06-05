import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  ArrowRight,
  CheckCircle2,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import { Finale } from "@/components/pisoft/Finale";
import demoLaptopImage from "@/assets/pi.png";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Try Pisoft ERP Software Free Demo" },
      {
        name: "description",
        content: "Request a free demo session of Pisoft ERP software. Fill out our operational request form to sync with our system integration leads.",
      },
    ],
  }),
  component: DemoPage,
});

export function DemoPage() {
  // Form submission states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    orgName: "",
    role: "",
    queries: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.mobile &&
      formData.location &&
      formData.orgName
    ) {
      setIsSubmitting(true);
      // Simulate network request
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
      }, 1500);
    }
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      location: "",
      orgName: "",
      role: "",
      queries: "",
    });
  };

  return (
    <main className="relative bg-background text-foreground min-h-screen flex flex-col pt-[140px]">

      {/* Redesigned Hero Header Section */}
      <section className="relative bg-slate-950 py-12 md:py-16 overflow-hidden border-b border-border">
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
            <span className="text-white/80 font-semibold uppercase tracking-wider">FREE DEMO</span>
          </motion.div>

          {/* Title styled with user requested color highlights but in a modern header */}
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-display leading-tight max-w-4xl mx-auto">
            TRY <span className="text-primary font-bold lowercase">pisoft</span>
            <span className="text-accent font-bold">ERP</span> SOFTWARE{" "}
            <span className="text-gradient-accent">FREE DEMO</span>
          </h1>

          <p className="mt-3 text-xs md:text-sm text-slate-400 max-w-xl mx-auto">
            Experience complete visual and database operational control over your spreadsheets and workflows.
          </p>
        </div>

        {/* Glowing Indicator Line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_12px_var(--accent-glow)]" />
      </section>

      {/* Main Form & Showcase Grid */}
      <section className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 md:py-20">
        
        {/* Top left breadcrumb trailing matching user's image layout */}
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-8 uppercase tracking-widest font-semibold">
          <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-foreground">FREE DEMO</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Form Card */}
          <div className="p-6 md:p-8 border border-border/80 bg-surface/40 rounded-2xl backdrop-blur-md relative">
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center"
                >
                  <div className="mx-auto size-16 rounded-full bg-emerald-100 text-emerald-800 grid place-items-center mb-4">
                    <CheckCircle2 className="size-9 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-display uppercase">
                    Demo Request Logged!
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 max-w-xs mx-auto leading-relaxed">
                    Our database integration lead will contact you shortly on your provided email address to coordinate your live Pisoft ERP session.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent text-accent-foreground px-6 py-3 text-xs font-semibold hover:opacity-90 transition-all shadow-md"
                  >
                    SUBMIT ANOTHER REQUEST
                    <Send className="size-3.5" />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleFormSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1 flex items-center gap-1">
                        <User className="size-3 text-accent" /> Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs px-3.5 py-3 border border-border bg-background/60 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/35"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1 flex items-center gap-1">
                        <Mail className="size-3 text-accent" /> Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs px-3.5 py-3 border border-border bg-background/60 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/35"
                        placeholder="corp@mail.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1 flex items-center gap-1">
                        <Phone className="size-3 text-accent" /> Your Mobile No
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full text-xs px-3.5 py-3 border border-border bg-background/60 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/35"
                        placeholder="+91-XXXXX-XXXXX"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1 flex items-center gap-1">
                        <MapPin className="size-3 text-accent" /> Location
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full text-xs px-3.5 py-3 border border-border bg-background/60 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/35"
                        placeholder="e.g. Mohali, India"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1 flex items-center gap-1">
                        <Building2 className="size-3 text-accent" /> Name of Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.orgName}
                        onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                        className="w-full text-xs px-3.5 py-3 border border-border bg-background/60 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/35"
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1 flex items-center gap-1">
                        <Briefcase className="size-3 text-accent" /> Your Role in Organization
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full text-xs px-3.5 py-3 border border-border bg-background/60 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/35"
                        placeholder="e.g. Operations Manager"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1 flex items-center gap-1">
                      <HelpCircle className="size-3 text-accent" /> Specific Queries
                    </label>
                    <textarea
                      rows={3}
                      value={formData.queries}
                      onChange={(e) => setFormData({ ...formData, queries: e.target.value })}
                      className="w-full text-xs px-3.5 py-3 border border-border bg-background/60 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-muted-foreground/35"
                      placeholder="List any customization modules or features you wish to explore..."
                    />
                  </div>

                  {/* Red Button matching user's request from the image but styled beautifully */}
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-8 py-3.5 text-xs font-bold text-white shadow-lg shadow-red-500/25 hover:opacity-95 hover:shadow-red-500/35 transition-all border border-red-400/25 w-full sm:w-auto active:scale-98"
                  >
                    <span>SUBMIT REQUEST</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Laptop Showcase Image using pi.png as requested */}
          <div className="flex flex-col justify-center">
            <div className="relative rounded-3xl border border-border bg-surface p-3.5 shadow-[var(--shadow-elevated)] overflow-hidden w-full max-w-lg mx-auto aspect-[4/3] flex items-center justify-center">
              <img
                src={demoLaptopImage}
                alt="Pisoft ERP Demo Interface Mockup"
                className="w-full h-full object-cover rounded-2xl border border-border/40 shadow-inner"
              />
              {/* Subtle glassmorphic tag */}
              <div className="absolute bottom-6 right-6 bg-slate-950/80 backdrop-blur border border-white/10 px-3.5 py-1.5 rounded-xl text-[10px] text-white/80 font-bold uppercase tracking-wider select-none">
                Interactive Workspace
              </div>
            </div>
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
            to="/contact"
            className="group flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-6 py-4.5 text-sm font-semibold tracking-wide shadow-lg hover:opacity-95 transition-opacity shrink-0 w-full md:w-auto"
          >
            CONTACT OFFICE DIRECTLY
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
          </Link>
        </div>
      </section>


    </main>
  );
}
