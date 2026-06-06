import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useInView } from "framer-motion";
import chaosVideo from "@/assets/i2.mp4";
import { useIsMobile } from "@/hooks/use-mobile";

const days = [
  { day: "Day 1", title: "Everything feels manageable", body: "Spreadsheets work. WhatsApp groups handle updates. The team moves fast." },
  { day: "Day 30", title: "Confusion begins", body: "Sales grow. Data multiplies. Orders pile up. Small cracks appear." },
  { day: "Day 60", title: "Information gap", body: "Different departments use different sheets. Decisions take longer. Discrepancies start appearing." },
  { day: "Day 90", title: "Cracks widen", body: "Inventory mismatches. Missed payments. Reports delayed. Overtime becomes routine." },
  { day: "Day 120", title: "Burnt out team", body: "Customer support is overwhelmed. Manual error corrections waste hours. Morale begins to slip." },
  { day: "Day 180", title: "Growth stalls", body: "You spend more time managing information than growing the business. Scale is impossible." },
];

export function ChaosStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isSectionInView = useInView(sectionRef, { amount: 0.1 });
  const [isTimelineCollapsed, setIsTimelineCollapsed] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Play video when the section comes into view, pause when it goes out of view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isSectionInView || isMobile) {
      video.play().catch((err) => {
        console.warn("Video play was interrupted or prevented:", err);
      });
    } else {
      video.pause();
    }
  }, [isSectionInView, isMobile]);

  // Smooth scroll translation for the timeline list
  const timelineY = useTransform(scrollYProgress, [0.05, 0.65], ["0%", "-70%"]);

  // Listen to scroll progress to trigger state-based transitions
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // When the user scrolls past 0.70, collapse the timeline and show the CTA
    if (latest >= 0.70) {
      setIsTimelineCollapsed(true);
      setShowCTA(true);
    } else {
      setIsTimelineCollapsed(false);
      setShowCTA(false);
    }
  });

  if (isMobile) {
    return (
      <section ref={sectionRef} className="relative bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-10">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight leading-tight text-foreground font-display">
              A story <span className="text-gradient-accent">every growing</span> <span className="text-gradient-accent">business</span> knows too well.
            </h2>
          </div>

          {/* Video Container */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-border/60 bg-surface/50 backdrop-blur-md shadow-lg relative">
            <video
              ref={videoRef}
              src={chaosVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-sky-500/10 pointer-events-none" />
          </div>

          {/* Timeline list */}
          <div className="relative pl-6 py-2 overflow-hidden flex flex-col justify-start">
            {/* Vertical timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

            <div className="flex flex-col gap-10 pt-2">
              {days.map((d) => (
                <div key={d.day} className="relative flex flex-col items-start">
                  {/* Glow dot timeline node */}
                  <div className="absolute -left-[31px] top-1.5 size-3.5 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-[0_0_10px_rgba(234,88,12,0.5)]">
                    <div className="size-1 rounded-full bg-accent" />
                  </div>

                  <div className="text-xs uppercase tracking-[0.2em] text-accent mb-1 font-semibold">
                    {d.day}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">
                    {d.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="rounded-2xl border border-border bg-surface/80 p-8 text-center shadow-md">
            <h3 className="text-2xl font-bold font-display tracking-tight leading-tight">
              Does this <span className="text-gradient-accent">sound familiar</span>?
            </h3>
            <p className="mt-3 text-muted-foreground text-xs leading-relaxed max-w-sm mx-auto">
              You don't have to stay stuck in firefighting mode. Pisoft unifies your spreadsheets, chats, and tools into a single source of truth.
            </p>
            <div className="mt-6 flex justify-center">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-accent-foreground glow-accent hover:opacity-95 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[280vh] bg-background">
      <div className="sticky top-[var(--navbar-height,130px)] h-[calc(100vh-var(--navbar-height,130px))] flex flex-col justify-center overflow-hidden py-12">
        <div className="max-w-6xl mx-auto w-full px-6 flex flex-col h-full justify-between py-6">
          
          {/* Section Header */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mb-8 md:mb-12 text-center md:text-left shrink-0 flex flex-col items-center md:items-start gap-1 md:gap-2"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -150 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { type: "spring", stiffness: 150, damping: 14 }
                }
              }}
              className="block"
            >
              A story <span className="text-gradient-accent">every growing</span>
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -150 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { type: "spring", stiffness: 150, damping: 14, delay: 0.15 }
                }
              }}
              className="block"
            >
              <span className="text-gradient-accent">business</span> knows too well.
            </motion.span>
          </motion.h2>

          {/* Side-by-Side Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center relative flex-1 min-h-0">
            
            {/* Left Column: Video Wrapper */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
              className="w-full h-[30vh] md:h-[50vh] lg:h-[55vh] flex flex-col justify-center rounded-2xl overflow-hidden border border-border/60 bg-surface/50 backdrop-blur-md shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10 pointer-events-none" />
              <video
                ref={videoRef}
                src={chaosVideo}
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Light blue overlay */}
              <div className="absolute inset-0 bg-sky-500/10 pointer-events-none rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none shadow-[inset_0_0_45px_rgba(255,255,255,0.04)]" />
            </motion.div>

            {/* Right Column: Interactive Area */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
              className="relative h-[35vh] md:h-[50vh] lg:h-[55vh] w-full flex items-center justify-center"
            >
              
              {/* Container 1: Timeline (collapses horizontally based on state) */}
              <motion.div
                animate={{
                  scaleX: isTimelineCollapsed ? 0 : 1,
                  opacity: isTimelineCollapsed ? 0 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ originX: 0 }}
                className="absolute inset-0 pl-6 md:pl-12 py-2 overflow-hidden flex flex-col justify-start pointer-events-auto"
              >
                {/* Vertical timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

                {/* Sliding Inner List */}
                <motion.div 
                  style={{ y: timelineY }} 
                  className="flex flex-col gap-12 md:gap-16 pt-2 pb-24"
                >
                  {days.map((d, i) => (
                    <div
                      key={d.day}
                      className="relative flex flex-col items-start"
                    >
                      {/* Glow dot timeline node */}
                      <div className="absolute -left-[31px] md:-left-[55px] top-1.5 size-3.5 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-[0_0_10px_rgba(234,88,12,0.5)]">
                        <div className="size-1 rounded-full bg-accent animate-pulse" />
                      </div>

                      <div className="text-xs uppercase tracking-[0.2em] text-accent mb-2 font-semibold">
                        {d.day}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2">
                        {d.title}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-md">
                        {d.body}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Container 2: "Does this sound familiar?" CTA (fades in based on state) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{
                  opacity: showCTA ? 1 : 0,
                  scale: showCTA ? 1 : 0.95,
                  y: showCTA ? 0 : 15,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left pointer-events-auto"
                style={{ pointerEvents: showCTA ? "auto" : "none" }}
              >
                <h3 className="text-3xl md:text-5xl font-bold font-display tracking-tight leading-tight">
                  Does this <span className="text-gradient-accent">sound familiar</span>?
                </h3>
                <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-md">
                  You don't have to stay stuck in firefighting mode. Pisoft unifies your spreadsheets, chats, and tools into a single source of truth.
                </p>
                <div className="mt-8 flex gap-4">
                  <a href="#demo" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-accent-foreground glow-accent hover:opacity-95 transition">
                    Get Started
                  </a>
                </div>
              </motion.div>

            </motion.div>

          </div>

          {/* Bottom spacing/indicator to balance the layout */}
          <div className="h-6 md:h-10 shrink-0" />
        </div>
      </div>
    </section>
  );
}
