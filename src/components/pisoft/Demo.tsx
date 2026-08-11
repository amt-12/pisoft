import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar as CalendarIcon, Clock, User, Mail, Sparkles, BookOpen, Building, Phone, Users, Layers, MessageSquare, ArrowRight } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const demoIncludes = [
  { title: "Live Product Walkthrough", desc: "Explore the platform with our engineering team." },
  { title: "Industry-Specific Demonstration", desc: "See relevant applications and workflows for your business." },
  { title: "Business Process Discussion", desc: "Tell us how your business works and where you're facing challenges." },
  { title: "Implementation Guidance", desc: "Understand how Pisoft can fit into your existing operations." },
  { title: "Pricing & Roadmap", desc: "Discuss implementation requirements, timelines, and next steps." },
];

export function Demo() {
  const lottieContainer = useRef<HTMLDivElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Form State matching Section 26
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [employees, setEmployees] = useState("");
  const [currentSoftware, setCurrentSoftware] = useState("");
  const [goals, setGoals] = useState("");
  
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitted(true);

    setTimeout(() => {
      setIsDialogOpen(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setIndustry("");
        setEmployees("");
        setCurrentSoftware("");
        setGoals("");
      }, 300);
    }, 3000);
  };

  return (
    <section id="demo" className="relative py-28 px-6 overflow-hidden bg-background">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      
      <div className="relative max-w-6xl mx-auto rounded-3xl border border-border/80 bg-surface/80 backdrop-blur-xl p-8 md:p-14 shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy & Includes */}
          <div className="flex flex-col justify-center text-left">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-extrabold mb-3">ERP DEMO WALKTHROUGH</div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight font-display text-foreground">
              Don't Just Read About ERP. <br />
              <span className="text-gradient-accent">Experience It.</span>
            </h2>

            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              Every business has different workflows. That's why we don't believe in a one-size-fits-all presentation. Book a personalized walkthrough and see how Pisoft ERP can fit your business.
            </p>

            <div className="mt-8">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground mb-4 font-display">YOUR DEMO INCLUDES:</h3>
              <div className="space-y-3.5">
                {demoIncludes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="size-3.5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Button
                onClick={() => setIsDialogOpen(true)}
                className="rounded-full bg-[image:var(--gradient-accent)] text-accent-foreground font-extrabold px-8 py-6 text-sm shadow-xl hover:opacity-95 transition-all cursor-pointer glow-accent"
              >
                <span>Book Your Free ERP Demo</span>
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Column: Lottie Graphic */}
          <div className="relative flex items-center justify-center min-h-[320px] md:min-h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 blur-3xl rounded-full pointer-events-none" />
            
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl border border-border/80 bg-surface/50 backdrop-blur-md p-6 flex items-center justify-center shadow-xl">
              <div ref={lottieContainer} className="w-full h-full" />
              <div className="absolute -bottom-4 right-6 bg-slate-950/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[10px] text-white font-extrabold uppercase tracking-wider select-none flex items-center gap-1.5 shadow-lg">
                Personalized Walkthrough
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 26 — DEMO FORM DIALOG */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[650px] max-h-[90vh] overflow-y-auto bg-background/95 border border-border backdrop-blur-2xl p-6 md:p-8 rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="demo-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-2xl md:text-3xl font-extrabold font-display">
                    Let's Talk About Your Business.
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground text-xs md:text-sm">
                    Tell us a little about your business and we'll show you how Pisoft ERP can fit your requirements.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div>
                      <label className="text-xs font-bold text-foreground mb-1 block">Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Your Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="pl-9 h-10 border-border bg-surface/50 rounded-xl text-xs"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="text-xs font-bold text-foreground mb-1 block">Company Name</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Your Company Name"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="pl-9 h-10 border-border bg-surface/50 rounded-xl text-xs"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="text-xs font-bold text-foreground mb-1 block">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="pl-9 h-10 border-border bg-surface/50 rounded-xl text-xs"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="text-xs font-bold text-foreground mb-1 block">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="pl-9 h-10 border-border bg-surface/50 rounded-xl text-xs"
                        />
                      </div>
                    </div>

                    {/* Industry */}
                    <div>
                      <label className="text-xs font-bold text-foreground mb-1 block">Industry</label>
                      <div className="relative">
                        <Layers className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="e.g. Manufacturing, Retail"
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          className="pl-9 h-10 border-border bg-surface/50 rounded-xl text-xs"
                        />
                      </div>
                    </div>

                    {/* Number of Employees */}
                    <div>
                      <label className="text-xs font-bold text-foreground mb-1 block">Number of Employees</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="e.g. 10–50, 50–200"
                          value={employees}
                          onChange={(e) => setEmployees(e.target.value)}
                          className="pl-9 h-10 border-border bg-surface/50 rounded-xl text-xs"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Current Software */}
                  <div>
                    <label className="text-xs font-bold text-foreground mb-1 block">Current Software / ERP</label>
                    <Input
                      placeholder="e.g. Tally, Excel, Custom Tool, None"
                      value={currentSoftware}
                      onChange={(e) => setCurrentSoftware(e.target.value)}
                      className="h-10 border-border bg-surface/50 rounded-xl text-xs"
                    />
                  </div>

                  {/* Improvement Goals */}
                  <div>
                    <label className="text-xs font-bold text-foreground mb-1 block">What would you like to improve?</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="e.g. Inventory accuracy, sales tracking, payroll automation..."
                        value={goals}
                        onChange={(e) => setGoals(e.target.value)}
                        className="pl-9 h-10 border-border bg-surface/50 rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <div className="pt-3 flex flex-col gap-2">
                    <Button
                      type="submit"
                      disabled={!name || !email || !phone}
                      className="w-full rounded-full bg-[image:var(--gradient-accent)] text-accent-foreground font-extrabold py-3 text-sm shadow-md hover:opacity-95 transition cursor-pointer"
                    >
                      Request My Demo
                    </Button>
                    <p className="text-[11px] text-center text-muted-foreground font-medium">
                      No commitment. Just a conversation about your requirements.
                    </p>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="demo-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center py-10 px-4"
              >
                <div className="size-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-4 shadow-lg">
                  <Check className="size-8 stroke-[3]" />
                </div>
                
                <h3 className="text-2xl font-bold font-display text-foreground">
                  Demo Request Received!
                </h3>
                <p className="mt-2 text-muted-foreground text-xs max-w-sm">
                  Thank you, <span className="font-bold text-foreground">{name}</span>. Our ERP specialist will reach out to you shortly at <span className="font-bold text-foreground">{phone}</span> to schedule your walkthrough.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}
