import { motion } from "framer-motion";

const days = [
  { day: "Day 1", title: "Everything feels manageable", body: "Spreadsheets work. WhatsApp groups handle updates. The team moves fast." },
  { day: "Day 30", title: "Confusion begins", body: "Sales grow. Data multiplies. Orders pile up. Small cracks appear." },
  { day: "Day 90", title: "Cracks widen", body: "Inventory mismatches. Missed payments. Reports delayed. Overtime becomes routine." },
  { day: "Day 180", title: "Growth stalls", body: "You spend more time managing information than growing the business." },
];

export function ChaosStory() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl"
        >
          A story <span className="text-gradient-accent">every growing business</span> knows too well.
        </motion.h2>

        <div className="mt-20 relative">
          <div className="absolute left-6 md:left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
          {days.map((d, i) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className={`relative grid md:grid-cols-2 gap-8 mb-16 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
            >
              <div className={`pl-16 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="text-xs uppercase tracking-[0.2em] text-accent mb-2">{d.day}</div>
                <h3 className="text-2xl md:text-3xl font-semibold">{d.title}</h3>
                <p className="mt-3 text-muted-foreground">{d.body}</p>
              </div>
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-2 size-3 rounded-full bg-accent glow-accent" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-2xl md:text-4xl font-display font-semibold text-gradient">
            Does this sound familiar?
          </p>
          <div className="mt-10 mx-auto h-px w-40 bg-[image:var(--gradient-primary)] glow-primary" />
        </motion.div>
      </div>
    </section>
  );
}
