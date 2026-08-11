import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import logoErp from "@/assets/logoerp.png";

const marqueeItems = [
  "ERP Solution Providers by CIOReview India Magazine — Nov 2017",
  "Trusted by 200+ growing businesses across India & MENA",
  "New: AI-powered insights now live across all Pisoft modules",
  "Featured: Top 10 Manufacturing ERP Platforms of 2025",
];

const navItems = [
  { label: "HOME", href: "#" },
  { label: "INDUSTRIES", href: "#industries" },
  { label: "APPLICATIONS", href: "#ecosystem" },
  { label: "PROCESS", href: "#process" },
  { label: "RESULTS", href: "#results" },
  { label: "CONTACT", href: "#demo" },
];

export function Nav() {
  const [isVisible, setIsVisible] = useState(true);
  const [showMarquee, setShowMarquee] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide top marquee strip when scrolled past 50px
      if (currentScrollY > 50) {
        setShowMarquee(false);
      } else {
        setShowMarquee(true);
      }

      // Hide Navbar when scrolling down, show when scrolling up
      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = isVisible || isOpen ? headerRef.current.offsetHeight : 0;
        document.documentElement.style.setProperty("--navbar-height", `${height}px`);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [showMarquee, isVisible, isOpen]);

  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: "HOME", to: "/", active: currentPath === "/" && !location.hash },
    { label: "ERP", to: "/#erp", active: location.hash === "#erp" },
    { label: "INDUSTRIES", to: "/industries", active: currentPath === "/industries" },
    { label: "SOLUTIONS", to: "/applications", active: currentPath === "/applications" },
    { label: "SERVICES", to: "/#services", active: location.hash === "#services" },
    { label: "ABOUT", to: "/news", active: currentPath === "/news" },
    { label: "CONTACT", to: "/contact", active: currentPath === "/contact" },
  ];

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: 0 }}
      animate={{ y: isVisible || isOpen ? "0%" : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      {/* Top marquee strip */}
      <motion.div
        initial={false}
        animate={{
          height: showMarquee ? "auto" : 0,
          opacity: showMarquee ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden flex items-stretch text-xs font-medium"
      >
        <Link
          to="/demo"
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 whitespace-nowrap font-bold tracking-wide"
        >
          ERP DEMO AVAILABLE — BOOK TODAY
        </Link>
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
        <Link
          to="/demo"
          className="hidden md:flex items-center bg-accent text-accent-foreground px-5 py-2 font-semibold tracking-wide whitespace-nowrap hover:opacity-95 transition"
        >
          BOOK FREE DEMO
        </Link>
      </motion.div>

      {/* Middle band: logo + mobile hamburger + contact */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-18 flex items-center justify-between gap-6 py-1">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logoErp}
              alt="Pisoft ERP"
              className="h-14 md:h-18 lg:h-20 w-auto object-contain rounded-md transition-transform hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="size-9 grid place-items-center rounded-full bg-primary/10 text-primary">
                <MapPin className="size-4.5" />
              </div>
              <div className="leading-tight">
                <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-semibold">FIND US</div>
                <div className="text-xs font-semibold text-foreground">Phase 8-B, Mohali</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-9 grid place-items-center rounded-full bg-accent/10 text-accent">
                <Phone className="size-4.5" />
              </div>
              <div className="leading-tight">
                <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-semibold">CALL US TODAY</div>
                <a href="tel:+918288029930" className="text-xs font-semibold text-foreground hover:text-primary transition">
                  +91-8288029930
                </a>
              </div>
            </div>
          </div>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/80 transition-colors text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Bottom nav strip with angled CTA — desktop only */}
      <div className="hidden lg:block relative bg-primary text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 flex items-stretch justify-between">
          <nav className="flex items-stretch text-xs font-bold tracking-wide">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                className={`relative px-5 py-2.5 flex items-center transition-colors ${
                  item.active
                    ? "bg-accent text-accent-foreground font-extrabold"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                style={
                  item.active
                    ? { clipPath: "polygon(0 0, 100% 0, calc(100% - 14px) 100%, 14px 100%)" }
                    : undefined
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/demo"
            className="relative hidden md:flex items-center bg-accent text-accent-foreground px-8 font-bold tracking-wide text-sm hover:opacity-95 transition"
            style={{ clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            TRY FREE DEMO
          </Link>
        </div>
      </div>

      {/* Mobile navigation drawer overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            />
            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-background border-l border-border z-50 p-6 flex flex-col justify-between shadow-[var(--shadow-elevated)] lg:hidden"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                    <img
                      src={logoErp}
                      alt="Pisoft ERP"
                      className="h-11 w-auto object-contain rounded-md"
                    />
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-muted/80 transition-colors text-foreground focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      hash={item.hash}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold tracking-wide py-2 transition-colors ${
                        item.active
                          ? "text-accent"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Contact Information & Action */}
              <div className="pt-6 border-t border-border flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="size-9 grid place-items-center rounded-full bg-primary/10 text-primary shrink-0">
                    <MapPin className="size-4.5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-semibold">FIND US</div>
                    <div className="text-xs font-semibold text-foreground">Phase 8-B, Mohali</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-9 grid place-items-center rounded-full bg-accent/10 text-accent shrink-0">
                    <Phone className="size-4.5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-semibold">CALL US TODAY</div>
                    <a href="tel:+918288029930" className="text-xs font-semibold text-foreground hover:text-primary transition">
                      +91-8288029930
                    </a>
                  </div>
                </div>
                <Link
                  to="/demo"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center rounded-full bg-[image:var(--gradient-accent)] py-3 text-xs font-bold text-accent-foreground glow-accent hover:opacity-95 transition"
                >
                  TRY FREE DEMO
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
