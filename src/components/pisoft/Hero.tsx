import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FileSpreadsheet, Mail, Boxes, Users, Receipt, Contact, Play, ArrowRight } from "lucide-react";

const scattered = [
  { Icon: FileSpreadsheet, label: "Excel", x: "-38%", y: "-30%", d: 0 },
  { Icon: Mail, label: "Email", x: "32%", y: "-36%", d: 0.1 },
  { Icon: Boxes, label: "Inventory", x: "-44%", y: "20%", d: 0.2 },
  { Icon: Users, label: "Attendance", x: "40%", y: "22%", d: 0.3 },
  { Icon: Receipt, label: "Invoices", x: "-22%", y: "38%", d: 0.4 },
  { Icon: Contact, label: "Customers", x: "26%", y: "-12%", d: 0.5 },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const converge = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const sphereScale = useTransform(scrollYProgress, [0.3, 0.7], [0.4, 1.2]);
  const sphereOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  return (
    <section ref={ref} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        {/* Scattered floating elements */}
        <div className="absolute inset-0 grid place-items-center">
          {scattered.map(({ Icon, label, x, y, d }, i) => {
            const tx = useTransform(scrollYProgress, [0, 0.55], [x, "0%"]);
            const ty = useTransform(scrollYProgress, [0, 0.55], [y, "0%"]);
            const op = useTransform(scrollYProgress, [0.45, 0.6], [1, 0]);
            return (
              <motion.div
                key={i}
                style={{ x: tx, y: ty, opacity: op }}
                className="absolute"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4 + d * 2, repeat: Infinity, delay: d }}
                  className="flex items-center gap-2 rounded-xl border border-border bg-surface/80 backdrop-blur px-3 py-2 shadow-[var(--shadow-elevated)]"
                >
                  <Icon className="size-4 text-primary" />
                  <span className="text-xs text-muted-foreground">{label}</span>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Glowing sphere */}
          <motion.div
            style={{ scale: sphereScale, opacity: sphereOpacity }}
            className="absolute size-64 rounded-full bg-[image:var(--gradient-primary)] blur-2xl"
          />
          <motion.div
            style={{ scale: sphereScale, opacity: sphereOpacity }}
            className="absolute size-40 rounded-full bg-[image:var(--gradient-primary)] glow-primary"
          />
          <motion.div
            style={{ opacity: sphereOpacity }}
            className="absolute text-center"
          >
            <div className="font-display text-3xl md:text-5xl font-bold tracking-tight">Pisoft ERP</div>
            <div className="mt-3 text-sm md:text-base text-muted-foreground">One Platform. Complete Business Control.</div>
          </motion.div>
        </div>

        {/* Headline */}
        <motion.div
          style={{ y: titleY, opacity: converge }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pointer-events-none"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground mb-6"
          >
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            Enterprise Resource Planning, reimagined
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl"
          >
            Your business has grown.
            <br />
            <span className="text-gradient-accent">Has your system?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground"
          >
            Scroll to watch chaos converge into clarity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 pointer-events-auto"
          >
            <a href="#demo" className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-accent-foreground glow-accent hover:opacity-95 transition">
              Book Demo <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a href="#ecosystem" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-surface transition">
              <Play className="size-4" /> Watch Product Tour
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
