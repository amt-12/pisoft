import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useInView } from "framer-motion";
import { Sunrise, Sun, CloudSun, Moon, Zap } from "lucide-react";
import dayInLifeVideo from "@/assets/i4.mp4";

const moments = [
  { Icon: Sunrise, time: "Morning", title: "Autopilot Morning", body: "Open the dashboard. Sales performance is already there.", tone: "from-accent/40 to-transparent" },
  { Icon: Sun, time: "Midday", title: "Automated Workflows", body: "Approve leave. Stock alerts trigger. Purchase orders auto-update.", tone: "from-primary/40 to-transparent" },
  { Icon: CloudSun, time: "Afternoon", title: "Real-time Collaboration", body: "Sales team logs customer status. Targets stay visible to everyone.", tone: "from-accent/30 to-transparent" },
  { Icon: Moon, time: "Evening", title: "Peace of Mind", body: "Financial reports generate themselves. You close the laptop on time.", tone: "from-primary/30 to-transparent" },
  { Icon: Zap, time: "Autopilot", title: "Business on Autopilot", body: "Running your business is as simple as scrolling. Pisoft ERP handles the rest.", tone: "from-accent/50 to-transparent" },
];

export function DayInLife() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Play video automatically ONLY ONCE when the section is first reached
  const isSectionInView = useInView(sectionRef, { amount: 0.15, once: true });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate active moment index based on scroll position (5 items, index 0 to 4)
    const idx = Math.min(Math.floor(latest * 5), 4);
    setActiveIndex(idx);
  });

  useEffect(() => {
    if (isSectionInView) {
      const video = videoRef.current;
      if (video) {
        video.play().catch((err) => {
          console.warn("Video play was interrupted or prevented:", err);
        });
      }
    }
  }, [isSectionInView]);

  // Set initial frame when metadata is loaded
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
  }, []);

  // Vertical scroll translation for the left column list
  const timelineY = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "-55%"]);

  return (
    <section ref={sectionRef} className="relative h-[250vh] bg-background">
      <div className="sticky top-[var(--navbar-height,130px)] h-[calc(100vh-var(--navbar-height,130px))] flex flex-col justify-center overflow-hidden py-12">
        <div className="max-w-6xl mx-auto w-full px-6 flex flex-col h-full justify-between py-6">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left shrink-0 mb-8"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-accent">A day in the life</div>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight">
              Your business, <span className="text-gradient-accent">on autopilot.</span>
            </h2>
          </motion.div>

          {/* Side-by-Side Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative flex-1 min-h-0">
            
            {/* Left Column: Interactive Scrolling Content */}
            <div className="relative h-[35vh] md:h-[50vh] lg:h-[55vh] w-full flex items-center justify-center overflow-hidden">
              
              {/* Vertical timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

              {/* Sliding Inner List */}
              <motion.div 
                style={{ y: timelineY }} 
                className="absolute inset-0 pl-12 py-4 flex flex-col gap-16 md:gap-20 pt-8 pb-32"
              >
                {moments.map((m, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <div
                      key={m.time}
                      className={`relative flex flex-col items-start transition-all duration-300 ${
                        isActive ? "opacity-100 scale-100" : "opacity-30 scale-95"
                      }`}
                    >
                      {/* Glow dot node */}
                      <div className={`absolute -left-[43px] top-1.5 size-4 rounded-full bg-background border-2 flex items-center justify-center transition-all duration-300 ${
                        isActive ? "border-accent shadow-[0_0_12px_rgba(234,88,12,0.8)] scale-110" : "border-border"
                      }`}>
                        <div className={`size-1.5 rounded-full transition-all duration-300 ${
                          isActive ? "bg-accent scale-110" : "bg-muted-foreground/30"
                        }`} />
                      </div>

                      <div className="text-xs uppercase tracking-[0.2em] text-accent mb-2 font-semibold">
                        {m.time}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">
                        {m.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
                        {m.body}
                      </p>
                    </div>
                  );
                })}
              </motion.div>

            </div>

            {/* Right Column: Video (Sticky) */}
            <div className="w-full h-[30vh] md:h-[50vh] lg:h-[55vh] flex flex-col justify-center rounded-3xl overflow-hidden border border-border/60 bg-surface/50 backdrop-blur-md shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5 pointer-events-none" />
              <video
                ref={videoRef}
                src={dayInLifeVideo}
                preload="auto"
                muted
                playsInline
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-sky-500/5 pointer-events-none rounded-3xl" />
            </div>

          </div>

          {/* Spacer */}
          <div className="h-4 shrink-0" />
        </div>
      </div>
    </section>
  );
}

