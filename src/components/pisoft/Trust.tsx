import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, CheckCircle2, Award, Users, Briefcase } from "lucide-react";

const metrics = [
  { value: "200+", label: "Businesses Served" },
  { value: "350+", label: "Projects Delivered" },
  { value: "10,000+", label: "ERP Users" },
  { value: "10+", label: "Industries Supported" },
  { value: "9+", label: "Years of Experience" },
];

const testimonials = [
  {
    quote: "Pisoft ERP brought all our manufacturing, inventory, and accounts into one connected view. We stopped managing spreadsheets and started growing our operations.",
    author: "Rajesh Sharma",
    role: "Managing Director, Precision Engineering",
  },
  {
    quote: "The Pisoft team built a custom mobile and web platform specifically around our distribution model. Their business understanding was evident from day one.",
    author: "Anil Verma",
    role: "VP Operations, Apex Logistics & Wholesale",
  },
  {
    quote: "Industry-specific dashboards allowed our healthcare organization to go live seamlessly. Pisoft's support is top-notch.",
    author: "Dr. Sunita Kapoor",
    role: "Operations Lead, Lifecare Healthcare",
  },
];

export function Trust() {
  return (
    <section className="relative py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION 23 — COMPANY / MEET PISOFT */}
        <div className="mb-24 p-8 md:p-14 rounded-3xl border border-border/80 bg-surface/60 backdrop-blur-xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 size-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-extrabold mb-3">COMPANY</div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-foreground">
              Meet Pisoft.
            </h2>
            <h3 className="mt-3 text-lg font-bold text-accent font-display">
              Pisoft Informatics Pvt. Ltd. is a Mohali-based technology company focused on enterprise ERP solutions, software development, digital products, and business automation.
            </h3>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              We build technology that helps organizations streamline operations, connect information, improve productivity, and create better digital experiences. From our own ERP platform to custom software, websites, mobile applications, dashboards, and digital solutions, we work with businesses to turn ideas and operational challenges into scalable technology.
            </p>

            <div className="mt-8">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3 text-xs font-extrabold text-accent-foreground glow-accent hover:opacity-95 transition-all shadow-md"
              >
                <span>Learn More About Pisoft</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION 24 — TRUST / SOCIAL PROOF */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-extrabold mb-3">PROOF & ACCREDITATION</div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-foreground">
            Built for Businesses. <br />
            <span className="text-gradient-accent">Trusted for Technology.</span>
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
          {metrics.map((m) => (
            <div key={m.label} className="p-6 rounded-2xl border border-border/80 bg-surface/50 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-extrabold font-display text-gradient-accent">{m.value}</div>
              <div className="text-xs font-bold text-muted-foreground mt-2 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-border/80 bg-surface/60 backdrop-blur-md p-8 flex flex-col justify-between shadow-md"
            >
              <p className="text-sm text-foreground leading-relaxed italic">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-border/60">
                <div className="text-sm font-extrabold font-display text-foreground">{t.author}</div>
                <div className="text-xs text-accent font-semibold">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
