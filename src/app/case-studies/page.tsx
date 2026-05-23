"use client";

import { motion, Variants } from "framer-motion";

export default function CaseStudiesPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 bg-brand-salt">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
          <div className="text-brand-action uppercase tracking-widest text-xs font-medium">Social Proof</div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">Case Studies</h1>
          <p className="text-xl text-brand-ink/70 font-light max-w-2xl mx-auto">
            Real implementations. Real leverage. See how we helped solopreneurs eliminate chaos and rebuild their digital estates.
          </p>
        </div>

        <div className="bg-brand-canvas p-12 rounded-3xl shadow-premium border border-brand-ink/5 text-center space-y-6">
          <div className="w-16 h-16 bg-brand-warmth/10 text-brand-warmth rounded-full flex items-center justify-center font-serif italic text-2xl mx-auto">
            1
          </div>
          <h2 className="text-2xl font-medium">Founding Client Implementations</h2>
          <p className="text-brand-ink/70 font-light leading-relaxed max-w-xl mx-auto">
            We are currently partnering with 3 visionary solopreneurs to architect their bespoke systems. These deep-dive case studies—highlighting their initial bottlenecks and the subsequent elegant leverage achieved—will be published here shortly.
          </p>
          <div className="pt-4">
            <span className="inline-block border-b border-brand-warmth pb-1 text-brand-warmth text-sm font-medium">
              Check back soon.
            </span>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
