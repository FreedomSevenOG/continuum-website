"use client";

import { motion, Variants } from "framer-motion";

export default function ContactPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">Start the Conversation</h1>
          <p className="text-lg text-brand-ink/70 font-light">
            Stop living in the code. Let us build the architecture that gives you your time back.
          </p>
        </div>

        <form className="bg-brand-antique p-8 rounded-3xl shadow-premium border border-brand-ink/5 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-ink/80 block">Name</label>
            <input 
              type="text" 
              className="w-full bg-brand-canvas border border-brand-ink/10 rounded-xl px-4 py-3 outline-none focus:border-brand-action focus:ring-1 focus:ring-brand-action transition-all"
              placeholder="Your name"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-ink/80 block">Email</label>
            <input 
              type="email" 
              className="w-full bg-brand-canvas border border-brand-ink/10 rounded-xl px-4 py-3 outline-none focus:border-brand-action focus:ring-1 focus:ring-brand-action transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-ink/80 block">What are you looking to build?</label>
            <textarea 
              rows={4}
              className="w-full bg-brand-canvas border border-brand-ink/10 rounded-xl px-4 py-3 outline-none focus:border-brand-action focus:ring-1 focus:ring-brand-action transition-all resize-none"
              placeholder="Tell us about your digital estate..."
            />
          </div>

          <button type="submit" className="w-full bg-brand-ink hover:bg-brand-action text-brand-salt py-4 rounded-xl transition-colors duration-300 shadow-premium text-sm font-medium tracking-wide">
            Request Consultation
          </button>
        </form>
      </motion.div>
    </main>
  );
}
