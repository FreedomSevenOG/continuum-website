"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center py-32 px-6">
      {/* Full Bleed Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/about-lush.png" 
          alt="Lush, vibrant, minimalist modern architectural space" 
          fill 
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-ink/20 backdrop-blur-[2px]" />
      </div>

      {/* Glassmorphism Content Blocks */}
      <div className="relative z-10 w-full max-w-4xl space-y-8">
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-brand-salt/80 backdrop-blur-xl p-12 rounded-3xl shadow-premium border border-brand-salt/40 text-center space-y-4">
          <div className="text-brand-warmth uppercase tracking-widest text-xs font-medium">Our Ethos</div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-brand-ink">The Philosophy</h1>
          <p className="text-2xl text-brand-ink/80 font-normal mt-4">
            You aren&apos;t just building apps—you are building digital estates.
          </p>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="bg-brand-salt/80 backdrop-blur-xl p-12 rounded-3xl shadow-premium border border-brand-salt/40 space-y-6 text-lg text-brand-ink/80 font-light leading-relaxed">
          <p>
            We believe that the tools you use should feel like an extension of your mind, not a barrier to it. The industry has adopted a hyper-technical "cyborg" look—neon greens on harsh black backgrounds. We reject this.
          </p>
          <p>
            <strong>Organic Modernism</strong> is our aesthetic. We pull inspiration from lush mother nature, Dieter Rams, and high-end real estate architecture. When you open your dashboard, it shouldn't feel like a hacker terminal. It should feel like walking into a beautifully designed, minimalist modern home where everything just works.
          </p>
          <p>
            Our ultimate goal is to give you <em>Elegant Leverage</em>. You are a visionary creator; your digital systems should look and feel as premium as the work you put out into the world.
          </p>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }} className="bg-brand-ink/80 backdrop-blur-xl text-brand-salt rounded-3xl shadow-premium p-8 flex flex-col items-center justify-center space-y-4 border border-brand-ink/40">
           <div className="text-sm tracking-widest uppercase font-medium text-brand-action">Aesthetic AI</div>
           <p className="text-center text-brand-salt/70 max-w-lg font-light">
             Tactile, warm, and grounded. A soft Canyon Sand canvas, lush Olive Leaf accents, and deep Raisin Black ink.
           </p>
        </motion.div>
      </div>
    </main>
  );
}
