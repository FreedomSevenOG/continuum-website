"use client";

import { motion, Variants } from "framer-motion";
import { Layers, Workflow, Package, Zap } from "lucide-react";
import Image from "next/image";

export default function FrameworkPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const steps = [
    { 
      icon: <Layers className="w-8 h-8" />, 
      title: "Build", 
      desc: "We start by architecting the core tool or SOP tailored specifically to your sovereign workflow. Taking the chaotic inputs of your business and mapping them perfectly." 
    },
    { 
      icon: <Workflow className="w-8 h-8" />, 
      title: "Use", 
      desc: "A system isn't finished until it's tested in reality. We integrate it seamlessly into your daily life to prove its utility and align the pathways." 
    },
    { 
      icon: <Package className="w-8 h-8" />, 
      title: "Package", 
      desc: "We wrap the system in a beautifully documented, aesthetically flawless interface. Transforming raw capability into a structured, luxury product." 
    },
    { 
      icon: <Zap className="w-8 h-8" />, 
      title: "Sell", 
      desc: "Once packaged, you have a perfectly organized 'Turnkey Digital Franchise'. You can offer this system to others as pure, scalable leverage." 
    }
  ];

  return (
    <main className="min-h-screen bg-brand-antique">
      <div className="max-w-[1400px] mx-auto px-6 py-32 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Side: Content & Steps */}
        <div className="flex-1 space-y-16">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-6">
            <div className="text-brand-action uppercase tracking-widest text-xs font-medium">The Methodology</div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">The Continuum Framework</h1>
            <p className="text-xl text-brand-ink/70 font-light max-w-xl">
              From messy chaos to organized structure. Our holistic, start-to-finish sequence architectures perfectly aligned leverage.
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp} 
                className="bg-brand-canvas p-8 md:p-10 rounded-3xl shadow-premium border border-brand-ink/5 flex gap-8 items-start"
              >
                <div className="w-16 h-16 shrink-0 bg-brand-warmth/10 rounded-2xl flex items-center justify-center text-brand-warmth">
                  {step.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-medium">{step.title}</h3>
                  <p className="text-brand-ink/80 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Sticky Infographic */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full lg:sticky lg:top-32"
        >
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-premium border border-brand-ink/5 bg-brand-salt">
            <Image 
              src="/images/framework-lush.png" 
              alt="Infographic showing messy chaotic lines flowing into structured parallel pathways" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </main>
  );
}
