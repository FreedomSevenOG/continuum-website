"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function OpusBuildsPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen bg-brand-ink text-brand-salt">
      <div className="max-w-[1400px] mx-auto px-6 py-32 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Side: Content */}
        <div className="flex-1 space-y-16">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-6">
            <div className="text-brand-warmth uppercase tracking-widest text-xs font-medium">Highest-Tier Offering</div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">The Opus Builds</h1>
            <p className="text-xl text-brand-salt/70 font-light">
              Meaning a grand work of art or a masterpiece. This is our bespoke, mastermind-level build out.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="bg-brand-salt text-brand-ink p-10 md:p-12 rounded-3xl space-y-8 shadow-premium">
            <h2 className="text-2xl font-medium">A Sovereign Digital Estate</h2>
            <p className="text-brand-ink/80 font-light leading-relaxed text-lg">
              The Opus Build is not a simple software implementation. It is a true partnership. We work directly with visionary creators to architect their complete operational reality from the ground up based on a masterplan.
            </p>
            <p className="text-brand-ink/80 font-light leading-relaxed text-lg">
              We bypass endless subscriptions and fragmented SaaS apps. Instead, we build a unified, AI-powered system tailored precisely to how your brain works. The result is a system that grants you the ultimate luxury: time and clarity.
            </p>
            
            <div className="pt-8 border-t border-brand-ink/10">
              <h3 className="font-medium mb-4">What's Included:</h3>
              <ul className="space-y-3 font-light text-brand-ink/80">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-warmth"></div> Deep-dive context architecture</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-warmth"></div> Custom AI models & prompt engineering</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-warmth"></div> Bespoke UI/UX dashboard design</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-warmth"></div> End-to-end automation pipelines</li>
              </ul>
            </div>

            <div className="pt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-action hover:bg-brand-action-hover text-brand-salt px-8 py-4 rounded-full transition-all duration-300 shadow-premium hover:shadow-lg text-sm font-medium tracking-wide">
                Apply for an Opus Build
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Sticky Clean Blueprint Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full lg:sticky lg:top-32"
        >
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-premium border border-brand-salt/10">
            <Image 
              src="/images/opus_hero_new.jpg" 
              alt="Clean architectural masterplan blueprint" 
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
