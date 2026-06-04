import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="size-7 rounded-md bg-[image:var(--gradient-primary)] grid place-items-center">
            <span className="text-xs font-bold text-primary-foreground">P</span>
          </div>
          <span className="font-display font-semibold tracking-tight">Pisoft</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#ecosystem" className="hover:text-foreground transition">Product</a>
          <a href="#industries" className="hover:text-foreground transition">Industries</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#results" className="hover:text-foreground transition">Results</a>
        </nav>
        <a
          href="#demo"
          className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-[image:var(--gradient-accent)] text-accent-foreground hover:opacity-90 transition"
        >
          Book Demo
        </a>
      </div>
    </motion.header>
  );
}
