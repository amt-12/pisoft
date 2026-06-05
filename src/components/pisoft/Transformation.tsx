import { useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import transformationVideo from "@/assets/i3.mp4";

export function Transformation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isSectionInView = useInView(sectionRef, { amount: 0.2, once: false });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Translate text content from rightmost end (100%) to left (-150%) as the user scrolls down
  const textX = useTransform(scrollYProgress, [0.05, 0.75], ["100%", "-150%"]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isSectionInView) {
      video.play().catch((err) => {
        console.warn("Video play was interrupted or prevented:", err);
      });
    } else {
      video.pause();
    }
  }, [isSectionInView]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-background py-20 md:py-28">
      {/* 1. Text Content (Vertically above the video) */}
      <div className="relative w-full max-w-none mx-auto px-6 overflow-hidden mb-12 md:mb-16">
        <motion.div style={{ x: textX }} className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-none md:whitespace-nowrap leading-[1.15] text-foreground">
            Scattered tools become <span className="text-gradient-primary font-bold">one intelligent ecosystem.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Transform scattered operations into a single source of truth.
          </p>
        </motion.div>
      </div>

      {/* 2. Full-width Background Video (Below the text) */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <video
          ref={videoRef}
          src={transformationVideo}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Smooth gradients to blend with surrounding sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        <div className="absolute inset-0 bg-sky-500/5 mix-blend-color-dodge pointer-events-none" />
      </div>
    </section>
  );
}





