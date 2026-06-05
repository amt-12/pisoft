import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  Send,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { Finale } from "@/components/pisoft/Finale";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Pisoft ERP — Office Location & Customer Inquiry" },
      {
        name: "description",
        content: "Get in touch with Pisoft ERP developers and advisors. Visit our Mohali head office at Pannu Towers, call us, or send an online message.",
      },
    ],
  }),
  component: ContactPage,
});

export function ContactPage() {
  // Form submission states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
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
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="relative bg-background text-foreground min-h-screen flex flex-col pt-[140px]">

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
            <span className="text-white/80 font-semibold uppercase tracking-wider">CONTACT US</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-display"
          >
            CONTACT OUR OFFICE
          </motion.h1>

          <p className="mt-4 text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Have questions about server deployments or customized module scripts? Reach out to our engineers.
          </p>
        </div>

        {/* Glowing Indicator Line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_12px_var(--accent-glow)]" />
      </section>

      {/* Main Form & Map Grid */}
      <section className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 md:py-24">
        
        {/* Breadcrumb matching the top left breadcrumb in the user's uploaded image */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-8 uppercase tracking-widest font-semibold">
          <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-foreground">CONTACT US</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Column: Send Us A Message Form */}
          <div className="flex flex-col justify-between p-6 md:p-8 border border-border/80 bg-surface/40 rounded-2xl backdrop-blur-md">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gradient-primary uppercase font-display mb-2">
                SEND US A MESSAGE
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-orange-500 rounded mb-8" />

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center"
                  >
                    <div className="mx-auto size-16 rounded-full bg-emerald-100 text-emerald-800 grid place-items-center mb-4">
                      <CheckCircle2 className="size-9 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Message Transmitted!</h3>
                    <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto">
                      Thank you for contacting Pisoft ERP. Our system architects will review your parameters and respond within 12 business hours.
                    </p>
                    <button
                      onClick={resetForm}
                      className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent text-accent-foreground px-5 py-2.5 text-xs font-semibold hover:opacity-90 transition-opacity"
                    >
                      SEND ANOTHER MESSAGE
                      <Send className="size-3.5" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1">
                          YOUR NAME
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full text-sm px-4 py-3.5 border border-border bg-background/60 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                          placeholder="e.g. John Doe"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full text-sm px-4 py-3.5 border border-border bg-background/60 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                          placeholder="name@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1">
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full text-sm px-4 py-3.5 border border-border bg-background/60 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                          placeholder="+91-XXXXX-XXXXX"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1">
                          SUBJECT
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full text-sm px-4 py-3.5 border border-border bg-background/60 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                          placeholder="e.g. Custom ERP Integration"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1">
                        MESSAGE
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full text-sm px-4 py-3.5 border border-border bg-background/60 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-muted-foreground/50"
                        placeholder="Write your operational questions or project requirements here..."
                      />
                    </div>

                    {/* Styled Red Button matching user's image request but elevated with Pisoft's sleek aesthetic */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/20 hover:opacity-95 hover:shadow-red-600/30 transition-all border border-red-500/30 w-full sm:w-auto active:scale-98"
                    >
                      {isSubmitting ? (
                        <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>SEND NOW</span>
                          <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Embedded Google Map & Contact Details Card */}
          <div className="flex flex-col gap-6 h-full">
            {/* Embedded Google Maps centered at Pannu Towers Mohali */}
            <div className="flex-1 rounded-2xl overflow-hidden border border-border/80 relative shadow-[var(--shadow-elevated)] min-h-[350px] bg-surface/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4727409279585!2d76.70295807632612!3d30.705096187010463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef20ffffffff%3A0x1bb190bbd45e5fb0!2sPannu%20Towers!5e0!3m2!1sen!2sin!4v1717585000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[350px] grayscale-[20%] opacity-90 hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Floating Address Overlay Box matching the map popup in the image */}
              <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-md border border-border p-4 rounded-xl shadow-lg max-w-[280px] hidden sm:block">
                <div className="flex items-start gap-2.5">
                  <Building2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-foreground leading-tight">Pannu Towers</h4>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">Office Space for Lease & IT Hub</p>
                    <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                      C-86, Phase 7, Industrial Area, Sector 74, Mohali, Punjab 160055
                    </p>
                    <div className="flex items-center gap-2 mt-2 pt-1.5 border-t border-border">
                      <span className="text-[10px] text-accent font-semibold flex items-center gap-0.5">4.7★ (28 reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Channels details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border bg-surface/30 flex gap-3.5 items-center">
                <div className="size-10 grid place-items-center rounded-full bg-accent/10 text-accent shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <div className="text-[9px] font-bold tracking-[0.1em] text-muted-foreground uppercase leading-none">CALL SALES TEAM</div>
                  <a href="tel:+918288029930" className="text-xs font-bold text-foreground hover:text-primary transition mt-1 block">
                    +91-8288029930
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-border bg-surface/30 flex gap-3.5 items-center">
                <div className="size-10 grid place-items-center rounded-full bg-primary/10 text-primary shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <div className="text-[9px] font-bold tracking-[0.1em] text-muted-foreground uppercase leading-none">SUPPORT MAIL</div>
                  <a href="mailto:contact@pisoft.in" className="text-xs font-bold text-foreground hover:text-primary transition mt-1 block">
                    contact@pisoft.in
                  </a>
                </div>
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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-6 py-4.5 text-sm font-semibold tracking-wide shadow-lg hover:opacity-95 transition-opacity shrink-0 w-full md:w-auto"
          >
            BACK TO CONTACT FORM
            <ArrowRight className="size-4 group-hover:-translate-y-0.5 transition" />
          </button>
        </div>
      </section>


    </main>
  );
}
