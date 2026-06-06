import { motion } from "framer-motion";

const steps = ["Discovery", "Strategy", "Design", "Development", "Testing", "Deployment", "Support"];

export function Process() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            How we <span className="text-gradient-accent">build solutions.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <div className="size-14 rounded-full border border-border bg-surface grid place-items-center font-display font-bold text-accent relative z-10">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 text-sm font-medium">{s}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
