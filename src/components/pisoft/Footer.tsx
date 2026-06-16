import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Check,
  Copy,
  Clock,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  ExternalLink,
  X
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [indiaTime, setIndiaTime] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Time tracker for Mohali, India (Asia/Kolkata)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      try {
        const formatter = new Intl.DateTimeFormat("en-US", options);
        setIndiaTime(formatter.format(new Date()));
      } catch (e) {
        // Fallback if timezone formatting fails
        const d = new Date();
        setIndiaTime(d.toLocaleTimeString());
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll to top button visibility check
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      "Plot No. C-86(Second Floor), Phase 7, Industrial Area, Mohali, Punjab, India"
    );
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+918288029930");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1200);
  };

  return (
    <footer className="relative bg-slate-950 text-slate-200 border-t border-slate-900 pt-20 pb-8 overflow-hidden z-20">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      {/* Dynamic blurred orbs */}
      <div className="absolute top-1/4 left-1/10 size-80 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/10 size-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-900">
          
          {/* Column 1: About Pisoft (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2.5 w-fit">
              <div className="relative size-9 rounded-lg bg-[image:var(--gradient-primary)] grid place-items-center shadow-[var(--shadow-glow-primary)]">
                <span className="text-sm font-bold text-primary-foreground font-display">P</span>
                <span className="absolute -right-1 -bottom-1 size-2.5 rounded-full bg-accent ring-2 ring-slate-950" />
              </div>
              <span className="font-display text-2xl tracking-tight">
                <span className="text-white font-bold">pisoft</span>
                <span className="text-accent font-bold">ERP</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              We, Pisoft Informatics Pvt. Ltd, are a rapidly growing Mohali (Punjab) based IT company, providing enterprise ERP Solutions, Software development, and business automation platforms.
            </p>

            <button
              onClick={() => setIsAboutOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-glow transition-colors group w-fit"
            >
              <span>Read More</span>
              <ChevronRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Social media icons with interactive hover colors */}
            <div className="flex items-center gap-3.5 mt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="size-9 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-primary/20 hover:border-primary hover:text-white transition-all flex items-center justify-center group shadow-md"
                aria-label="LinkedIn"
              >
                <svg className="size-4.5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="size-9 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-sky-500/20 hover:border-sky-500 hover:text-white transition-all flex items-center justify-center group shadow-md"
                aria-label="Twitter"
              >
                <svg className="size-4.5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="size-9 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-blue-600/20 hover:border-blue-600 hover:text-white transition-all flex items-center justify-center group shadow-md"
                aria-label="Facebook"
              >
                <svg className="size-4.5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://pisoft.in"
                target="_blank"
                rel="noreferrer"
                className="size-9 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-accent/20 hover:border-accent hover:text-accent-glow transition-all flex items-center justify-center group shadow-md"
                aria-label="Website"
              >
                <svg className="size-4.5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Important Links (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Important Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", onClick: () => setIsAboutOpen(true) },
                { label: "Contact Us", to: "/contact" },
                { label: "Our Industries", to: "/industries" },
              ].map((link, idx) => (
                <li key={idx}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="text-sm text-slate-400 hover:text-white transition-colors relative py-0.5 group w-fit flex items-center"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent group-hover:w-full group-hover:left-0 transition-all duration-300" />
                    </button>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-white transition-colors relative py-0.5 group w-fit flex items-center"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent group-hover:w-full group-hover:left-0 transition-all duration-300" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "ERP Training", to: "/news" },
                { label: "Request Demo", to: "/demo" },
                { label: "Product Features", to: "/applications" },
                { label: "Watch Product Tour", to: "/", hash: "dashboard" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    hash={link.hash}
                    className="text-sm text-slate-400 hover:text-white transition-colors relative py-0.5 group w-fit flex items-center"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Live Clock (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
      STAY CONNECTED
              </h3>
              <p className="text-xs text-slate-400">
                Subscribe to our tech newsletter for custom scripts and ERP updates.
              </p>
            </div>

            {/* Subscription form */}
            <form onSubmit={handleSubscribe} className="relative w-full">
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-xs px-4 py-3.5 pr-28 rounded-xl border border-slate-800 bg-slate-900/40 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting || isSubscribed}
                className="absolute right-1.5 top-1.5 bottom-1.5 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 px-4 text-[10px] font-bold text-white shadow-md hover:opacity-95 active:scale-98 transition flex items-center justify-center gap-1 min-w-[80px]"
              >
                {isSubmitting ? (
                  <div className="size-3.5 border border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSubscribed ? (
                  <Check className="size-3.5" />
                ) : (
                  <>
                    <span>SUBMIT</span>
                    <ArrowRight className="size-3" />
                  </>
                )}
              </button>
            </form>

            <AnimatePresence>
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-500"
                >
                  <ShieldCheck className="size-4" />
                  <span>Subscription confirmed! Thank you.</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Live Clock / Tech Hub Widget */}
            <div className="p-3.5 rounded-xl border border-slate-900 bg-slate-950/80 flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2.5">
                <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <div className="leading-none">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">HQ STATUS</div>
                  <div className="text-xs font-bold text-slate-300 mt-1">OPERATIONAL</div>
                </div>
              </div>
              
              <div className="h-6 w-px bg-slate-900" />

              <div className="flex items-center gap-2">
                <Clock className="size-4 text-slate-500" />
                <div className="leading-none text-right">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">MOHALI, IN</div>
                  <div className="text-xs font-bold text-slate-300 font-mono mt-1">
                    {indiaTime || "Loading..."}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Lower footer grid: Contact details / copy items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-b border-slate-900 text-sm">
          
          {/* Address Details */}
          <div className="flex gap-3.5 items-start p-4 rounded-xl border border-slate-900/50 bg-slate-950/40 hover:bg-slate-900/10 hover:border-slate-800 transition duration-300">
            <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MapPin className="size-4.5" />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Office Location</div>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Plot No. C-86(Second Floor), Phase 7, Industrial Area, Mohali, Punjab, India
              </p>
              <button
                onClick={handleCopyAddress}
                className="mt-2 text-[10px] font-semibold text-slate-500 hover:text-white flex items-center gap-1.5 transition"
              >
                {copiedAddress ? (
                  <>
                    <Check className="size-3 text-emerald-500" />
                    <span className="text-emerald-500 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone Details */}
          <div className="flex gap-3.5 items-start p-4 rounded-xl border border-slate-900/50 bg-slate-950/40 hover:bg-slate-900/10 hover:border-slate-800 transition duration-300">
            <div className="size-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <Phone className="size-4.5" />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Call Direct</div>
              <a
                href="tel:+918288029930"
                className="text-xs font-bold text-slate-200 mt-1.5 block hover:text-accent transition"
              >
                +91-8288029930
              </a>
              <button
                onClick={handleCopyPhone}
                className="mt-2 text-[10px] font-semibold text-slate-500 hover:text-white flex items-center gap-1.5 transition"
              >
                {copiedPhone ? (
                  <>
                    <Check className="size-3 text-emerald-500" />
                    <span className="text-emerald-500 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Email Support details */}
          <div className="flex gap-3.5 items-start p-4 rounded-xl border border-slate-900/50 bg-slate-950/40 hover:bg-slate-900/10 hover:border-slate-800 transition duration-300">
            <div className="size-9 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <Mail className="size-4.5" />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Inquiries & Support</div>
              <a
                href="mailto:contact@pisoft.in"
                className="text-xs font-bold text-slate-200 mt-1.5 block hover:text-emerald-500 transition"
              >
                contact@pisoft.in
              </a>
              <div className="text-[10px] text-slate-500 mt-2 flex items-center gap-1">
                <Clock className="size-3" />
                <span>Response in 12hrs</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-slate-500">
          <div className="text-center sm:text-left leading-relaxed">
            <p>© Copyright 2017 - {new Date().getFullYear()} PisoftERP, All Rights Reserved.</p>
            <p className="mt-0.5">Designed by Pisoft Informatics Pvt. Ltd.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://pisoft.in" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition flex items-center gap-1">
              <span>Primary Website</span>
              <ExternalLink className="size-3" />
            </a>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition">Office Map</Link>
          </div>
        </div>

      </div>

      {/* Floating back-to-top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={handleScrollTop}
            className="fixed bottom-6 right-6 size-12 rounded-full bg-slate-900/90 backdrop-blur border border-slate-800 text-white shadow-xl hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95 transition-all flex items-center justify-center z-50 group hover:shadow-[var(--shadow-glow-accent)]"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="size-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* About Us Modal Dialog */}
      <AnimatePresence>
        {isAboutOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAboutOpen(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl text-slate-100 overflow-hidden"
            >
              {/* Dotted grid for modal accent */}
              <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
              <div className="absolute top-0 right-0 size-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-[image:var(--gradient-primary)] grid place-items-center">
                      <span className="text-xs font-bold text-primary-foreground font-display">P</span>
                    </div>
                    <h2 className="font-display text-lg font-bold text-white uppercase tracking-tight">About Pisoft Informatics</h2>
                  </div>
                  <button
                    onClick={() => setIsAboutOpen(false)}
                    className="p-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition text-slate-400 hover:text-white"
                    aria-label="Close modal"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-sans">
                  <p>
                    Founded in Mohali, Punjab, <strong className="text-white font-semibold">Pisoft Informatics Pvt. Ltd.</strong> has established itself as a rapidly growing, premier IT company providing high-performance ERP Solutions, database integration systems, and bespoke software development pipelines.
                  </p>
                  <p>
                    Our core platform, <span className="text-accent font-semibold font-display">PisoftERP</span>, is designed to dissolve operational friction. We unify inventory tracking, multi-channel customer relations (CRM), dynamic payroll processing, HR compliance, double-entry financial accounting, and analytics into one seamless, real-time source of truth.
                  </p>
                  <p>
                    Recognized by prestigious publications, including being named among the leading <em className="text-slate-200">ERP Solution Providers by CIOReview India Magazine</em>, we serve hundreds of ambitious, expanding businesses across India, the Middle East, and North Africa (MENA).
                  </p>
                  <p>
                    By merging modular database engines with intuitive web interfaces, Pisoft remains dedicated to crafting the scalable infrastructure required by modern businesses building what comes next.
                  </p>
                </div>

                {/* Footer Action */}
                <div className="flex justify-end pt-6 border-t border-slate-800 mt-6 gap-3">
                  <button
                    onClick={() => setIsAboutOpen(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-800 hover:bg-slate-800 transition text-xs font-bold text-slate-400 hover:text-white"
                  >
                    CLOSE DETAILS
                  </button>
                  <Link
                    to="/contact"
                    onClick={() => setIsAboutOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:opacity-95 transition text-xs font-bold text-white shadow-md flex items-center gap-1"
                  >
                    <span>CONTACT OUR OFFICE</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </footer>
  );
}
