import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const marqueeItems = [
  "ERP Solution Providers by CIOReview India Magazine — Nov 2017",
  "Trusted by 200+ growing businesses across India & MENA",
  "New: AI-powered insights now live across all Pisoft modules",
  "Featured: Top 10 Manufacturing ERP Platforms of 2025",
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      {/* Top marquee strip */}
      <div className="flex items-stretch text-xs font-medium">
        <a
          href="#news"
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 whitespace-nowrap"
        >
          Read CIOReview E-Magazine
        </a>
        <div className="flex-1 relative overflow-hidden bg-foreground text-background">
          <div className="absolute inset-0 flex items-center">
            <div className="flex whitespace-nowrap animate-marquee">
              {[...marqueeItems, ...marqueeItems].map((t, i) => (
                <span key={i} className="px-8 inline-flex items-center gap-3">
                  <span className="size-1 rounded-full bg-accent" />
                  <span>
                    {t.split(/(CIOReview|Pisoft|AI-powered)/g).map((part, j) =>
                      ["CIOReview", "Pisoft", "AI-powered"].includes(part) ? (
                        <span key={j} className="text-accent font-semibold">{part}</span>
                      ) : (
                        <span key={j}>{part}</span>
                      ),
                    )}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <a
          href="#demo"
          className="hidden md:flex items-center bg-accent text-accent-foreground px-5 py-2 font-semibold tracking-wide whitespace-nowrap hover:opacity-95 transition"
        >
          CLICK TO KNOW MORE
        </a>
      </div>

      {/* Middle band: logo + contact */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2.5">
            <div className="relative size-9 rounded-lg bg-[image:var(--gradient-primary)] grid place-items-center shadow-[var(--shadow-glow-primary)]">
              <span className="text-sm font-bold text-primary-foreground font-display">P</span>
              <span className="absolute -right-1 -bottom-1 size-2.5 rounded-full bg-accent ring-2 ring-background" />
            </div>
            <span className="font-display text-2xl tracking-tight">
              <span className="text-primary font-bold">pisoft</span>
              <span className="text-accent font-bold">ERP</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="size-10 grid place-items-center rounded-full bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] tracking-[0.2em] text-muted-foreground font-semibold">FIND US</div>
                <div className="text-sm font-semibold text-foreground">Phase 8-B, Mohali</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-10 grid place-items-center rounded-full bg-accent/10 text-accent">
                <Phone className="size-5" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] tracking-[0.2em] text-muted-foreground font-semibold">CALL US TODAY</div>
                <a href="tel:+918288029930" className="text-sm font-semibold text-foreground hover:text-primary transition">
                  +91-8288029930
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav strip with angled CTA */}
      <div className="relative bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 flex items-stretch justify-between">
          <nav className="flex items-stretch text-sm font-semibold tracking-wide">
            {[
              { label: "HOME", href: "#" },
              { label: "INDUSTRIES", href: "#industries" },
              { label: "APPLICATIONS", href: "#ecosystem", active: true },
              { label: "PROCESS", href: "#process" },
              { label: "RESULTS", href: "#results" },
              { label: "CONTACT", href: "#demo" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-5 py-4 flex items-center transition-colors ${
                  item.active
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-white/10"
                }`}
                style={
                  item.active
                    ? { clipPath: "polygon(0 0, 100% 0, calc(100% - 14px) 100%, 14px 100%)" }
                    : undefined
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#demo"
            className="relative hidden md:flex items-center bg-accent text-accent-foreground px-8 font-bold tracking-wide text-sm hover:opacity-95 transition"
            style={{ clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            TRY FREE DEMO
          </a>
        </div>
      </div>
    </motion.header>
  );
}
