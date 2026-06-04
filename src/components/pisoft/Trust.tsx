import { motion } from "framer-motion";

const logos = ["Acme Co", "Northwind", "Globex", "Initech", "Umbrella", "Soylent", "Hooli", "Stark"];
const testimonials = [
  {
    quote: "Pisoft replaced four tools and a dozen spreadsheets. Our month-end close went from 9 days to 2.",
    author: "Priya Menon",
    role: "CFO, Aurora Manufacturing",
  },
  {
    quote: "It feels like product software, not enterprise software. The team actually wants to use it.",
    author: "Arjun Verma",
    role: "COO, Velocity Retail",
  },
  {
    quote: "Industry-specific dashboards meant we were live in 5 weeks, not 6 months.",
    author: "Sara Khan",
    role: "Director, MedLink Healthcare",
  },
];

export function Trust() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8"
        >
          Trusted by ambitious teams
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 opacity-60">
          {logos.map((l) => (
            <span key={l} className="font-display text-lg tracking-wide">{l}</span>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <p className="text-sm leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-sm font-semibold">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
