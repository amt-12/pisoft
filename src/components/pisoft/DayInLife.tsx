import { motion } from "framer-motion";
import { Sunrise, Sun, CloudSun, Moon } from "lucide-react";

const moments = [
  { Icon: Sunrise, time: "Morning", body: "Open the dashboard. Sales performance is already there.", tone: "from-accent/40 to-transparent" },
  { Icon: Sun, time: "Midday", body: "Approve leave. Stock alerts trigger. Purchase orders auto-update.", tone: "from-primary/40 to-transparent" },
  { Icon: CloudSun, time: "Afternoon", body: "Sales team logs customer status. Targets stay visible to everyone.", tone: "from-accent/30 to-transparent" },
  { Icon: Moon, time: "Evening", body: "Financial reports generate themselves. You close the laptop on time.", tone: "from-primary/30 to-transparent" },
];

export function DayInLife() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-accent">A day in the life</div>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
            Your business, <span className="text-gradient-accent">on autopilot.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moments.map((m, i) => (
            <motion.div
              key={m.time}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-surface overflow-hidden p-6 hover:border-accent/40 transition"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${m.tone} opacity-50`} />
              <div className="relative">
                <m.Icon className="size-6 text-accent" />
                <div className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">{m.time}</div>
                <p className="mt-2 text-base font-medium leading-snug">{m.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
