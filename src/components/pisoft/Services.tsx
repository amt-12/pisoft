import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Palette, Sparkles, Cloud } from "lucide-react";

const services = [
  { Icon: Code2, title: "Custom Software", body: "Tailored enterprise solutions engineered for your operations." },
  { Icon: Smartphone, title: "Mobile Apps", body: "Native-feel Android and iOS applications that delight." },
  { Icon: Globe, title: "Web Platforms", body: "Modern websites and web apps built to scale." },
  { Icon: Palette, title: "UI / UX Design", body: "Human-centered experiences from research to launch." },
  { Icon: Sparkles, title: "Branding & Graphics", body: "Visual identities that translate strategy into design." },
  { Icon: Cloud, title: "Cloud Solutions", body: "Reliable, scalable infrastructure tuned for performance." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-accent">Beyond ERP</div>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
            Technology solutions <span className="text-gradient-primary">that compound.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Pisoft is also your long-term technology partner — helping you build complete digital ecosystems.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-surface p-6 overflow-hidden hover:border-accent/40 transition"
            >
              <div className="absolute -top-12 -right-12 size-32 rounded-full bg-[image:var(--gradient-primary)] blur-3xl opacity-0 group-hover:opacity-30 transition" />
              <s.Icon className="size-6 text-accent" />
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
