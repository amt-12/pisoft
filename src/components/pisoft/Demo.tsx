import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar as CalendarIcon, Clock, User, Mail, Sparkles, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import bookData from "@/assets/book.json";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const benefits = [
  "Live product walkthrough tailored to your workflows",
  "Industry-specific database & dashboard demo",
  "One-on-one expert architecture consultation",
  "Custom implementation roadmap & pricing guidance",
];

const timeSlots = ["09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"];

export function Demo() {
  const lottieContainer = useRef<HTMLDivElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    if (!lottieContainer.current) return;
    const anim = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: bookData,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !name || !email) return;

    setIsBooked(true);

    setTimeout(() => {
      setIsDialogOpen(false);
      
      // Delay resetting state to prevent visual glitch during dialog exit transition
      setTimeout(() => {
        setIsBooked(false);
        setName("");
        setEmail("");
        setSelectedTime(null);
        setSelectedDate(new Date());
      }, 300);

      // Smooth scroll to next section
      const currentSection = document.getElementById("demo");
      const nextSection = currentSection?.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 2500);
  };

  return (
    <section id="demo" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative max-w-6xl mx-auto rounded-3xl border border-border bg-surface/80 backdrop-blur-xl p-10 md:p-16 shadow-[var(--shadow-elevated)]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Creative copywriting / Story resolution */}
          <div className="flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent bg-accent/10 px-3 py-1.5 rounded-full w-fit mb-6"
            >
              <BookOpen className="size-3.5" />
              The Next Chapter
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-display"
            >
              From operational chaos <span className="text-gradient-accent">to absolute</span> <span className="italic font-serif font-medium text-gradient-primary">control.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl font-medium"
            >
              Every empire starts with a single spreadsheet. But eventually, formulas break, communication gaps widen, and scale becomes impossible. We've read that chapter of chaos.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl"
            >
              Pisoft is the reply. We build unified, real-time operating ecosystems that close the book on manual fire drills, so you can focus on writing your business's next great chapter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <ul className="space-y-3">
                {benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-0.5 size-5 shrink-0 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center">
                      <Check className="size-3 text-primary-foreground animate-pulse" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <Button
                onClick={() => setIsDialogOpen(true)}
                className="rounded-full bg-[image:var(--gradient-accent)] text-accent-foreground font-semibold px-8 py-6 text-base shadow-lg hover:shadow-accent/20 hover:opacity-95 transition-all cursor-pointer"
              >
                <CalendarIcon className="size-5 mr-2" />
                Book Your Live Walkthrough
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Lottie book animation container */}
          <div className="relative flex items-center justify-center min-h-[350px] md:min-h-[450px]">
            {/* Ambient background glow behind lottie */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 blur-3xl rounded-full scale-75 animate-pulse pointer-events-none" />
            
            {/* Glass container for Lottie book animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-full max-w-[420px] aspect-square rounded-3xl border border-white/10 bg-surface/30 backdrop-blur-md p-6 flex items-center justify-center shadow-[var(--shadow-elevated)]"
            >
              <div ref={lottieContainer} className="w-full h-full" />
              <div className="absolute -bottom-4 right-6 bg-slate-950/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[10px] text-white/80 font-bold uppercase tracking-wider select-none flex items-center gap-1.5 shadow-lg">
                Rewrite Your Story
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Date & Time Selection Modal Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[680px] bg-background/95 border border-border backdrop-blur-2xl p-6 md:p-8 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
          <AnimatePresence mode="wait">
            {!isBooked ? (
              <motion.div
                key="booking-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-2xl md:text-3xl font-bold font-display">
                    Schedule Your Walkthrough
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground text-sm">
                    Choose a convenient date and time. We'll set up a personal meeting to walk you through Pisoft.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-12 gap-6 items-start">
                    
                    {/* Left Grid: Calendar Picker */}
                    <div className="md:col-span-7 border border-border bg-surface/50 rounded-2xl p-2 flex justify-center">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        className="rounded-xl border-0"
                      />
                    </div>

                    {/* Right Grid: Form Details & Time Slots */}
                    <div className="md:col-span-5 space-y-4">
                      <div className="space-y-3">
                        <label className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                          Contact Info
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-4.5 w-4.5 text-muted-foreground/60" />
                          <Input
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="pl-10 h-10 border-border bg-surface/40 rounded-xl focus-visible:ring-accent"
                          />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-4.5 w-4.5 text-muted-foreground/60" />
                          <Input
                            type="email"
                            placeholder="work@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="pl-10 h-10 border-border bg-surface/40 rounded-xl focus-visible:ring-accent"
                          />
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <label className="text-xs font-semibold tracking-wider text-muted-foreground uppercase flex items-center gap-1.5">
                          <Clock className="size-3.5" />
                          Select Time
                        </label>
                        <div className="grid grid-cols-2 gap-2 max-h-[150px] overflow-y-auto pr-1">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`py-2 px-1 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer
                                ${selectedTime === slot 
                                  ? "bg-accent border-accent text-accent-foreground shadow-md shadow-accent/15" 
                                  : "border-border hover:border-accent/40 bg-surface/30 hover:bg-surface/60 text-foreground"}`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-border/80">
                    <button
                      type="button"
                      onClick={() => setIsDialogOpen(false)}
                      className="px-5 py-2.5 rounded-full border border-border text-sm font-semibold hover:bg-surface/60 transition cursor-pointer"
                    >
                      Cancel
                    </button>
                    <Button
                      type="submit"
                      disabled={!selectedDate || !selectedTime || !name || !email}
                      className="rounded-full bg-[image:var(--gradient-accent)] text-accent-foreground font-semibold px-6 py-2.5 text-sm shadow-md hover:opacity-95 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Confirm Walkthrough
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center py-12 px-4"
              >
                <div className="size-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] animate-bounce">
                  <Check className="size-10 stroke-[2.5]" />
                </div>
                
                <h3 className="text-3xl font-bold font-display text-foreground">
                  You're Booked!
                </h3>
                <p className="mt-3 text-muted-foreground text-sm max-w-sm">
                  We've reserved a personalized session just for you. A calendar invitation and video link have been sent to <span className="font-semibold text-foreground">{email}</span>.
                </p>

                <div className="mt-8 bg-surface/50 border border-border rounded-2xl p-4 w-full max-w-md flex flex-col items-center gap-2 shadow-sm">
                  <div className="text-xs uppercase tracking-[0.1em] text-accent font-semibold">Appointment Details</div>
                  <div className="font-semibold text-lg flex items-center gap-2">
                    <CalendarIcon className="size-4.5 text-muted-foreground" />
                    {selectedDate?.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="text-sm font-medium text-foreground/85 flex items-center gap-1.5">
                    <Clock className="size-4 text-muted-foreground" />
                    {selectedTime} · 30 mins
                  </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-3">
                  <div className="w-16 h-1 bg-surface rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ left: "-100%" }}
                      animate={{ left: "0%" }}
                      transition={{ duration: 2.2, ease: "linear" }}
                      className="absolute top-0 bottom-0 w-full bg-accent"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground/80 font-medium animate-pulse">
                    Transitioning to client reviews...
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}
