"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-[calc(100vh-80px)]">
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 px-6 lg:pt-40 lg:pb-32 overflow-hidden flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex-1 space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-warmth/20 text-xs font-medium tracking-wide text-brand-warmth uppercase bg-brand-warmth/5">
            Atelier Continuum
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1]">
            Elegant Leverage <br />
            <span className="font-serif italic text-brand-warmth">for Visionary Creators.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-ink/70 font-light leading-relaxed max-w-lg">
            Where high-end design meets artificial intelligence. We architect beautifully designed, AI-powered frameworks that turn digital chaos into a seamless, turnkey lifestyle.
          </p>
          <div className="pt-4 flex items-center gap-4">
            <Link href="/contact" className="group inline-flex items-center gap-2 bg-brand-action hover:bg-brand-action-hover text-brand-salt px-8 py-4 rounded-full transition-all duration-300 shadow-premium hover:shadow-lg text-sm font-medium tracking-wide">
              Start the Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/tools" className="inline-flex items-center gap-2 text-brand-warmth font-medium hover:text-brand-ink transition-colors px-4 py-4">
              Explore Free Tools
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-premium"
        >
          <Image 
            src="/images/home_hero_new.jpg" 
            alt="Warm minimalist workspace" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 border border-brand-ink/5 rounded-3xl z-10 pointer-events-none" />
        </motion.div>
      </section>

      {/* Free Tools / Lead Gen */}
      <section className="py-24 px-6 bg-brand-antique">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 md:order-1 relative aspect-square rounded-3xl overflow-hidden shadow-premium">
            <Image 
              src="/images/framework-lush.png" 
              alt="Diagram showing messy signal flow transforming into organized structure" 
              fill 
              className="object-cover"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 md:order-2 space-y-8">
            <div className="text-brand-action uppercase tracking-widest text-xs font-medium">Free Assets</div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">
              Systems built for you, ready to deploy.
            </h2>
            <p className="text-brand-ink/70 font-light leading-relaxed text-lg">
              As we build our own AI architecture, we package the highest-leverage tools and offer them to the community. Eliminate bottlenecks and repetitive actions instantly with our turnkey templates.
            </p>
            <Link href="/tools" className="inline-flex items-center gap-2 bg-brand-ink hover:bg-brand-warmth text-brand-salt px-8 py-4 rounded-full transition-all duration-300 shadow-premium text-sm font-medium tracking-wide">
              Access the Library
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Tease */}
      <section className="py-24 px-6 bg-brand-salt">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center space-y-4">
            <div className="text-brand-warmth uppercase tracking-widest text-xs font-medium">Social Proof</div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Solopreneurs transformed.</h2>
            <p className="text-brand-ink/70 font-light">See how we took chaos and engineered elegant leverage.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }} className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div key={item} variants={fadeUp} className="bg-brand-canvas p-8 rounded-3xl shadow-premium border border-brand-ink/5 space-y-6">
                <div className="w-12 h-12 bg-brand-warmth/10 text-brand-warmth rounded-full flex items-center justify-center font-serif italic text-xl">
                  {item}
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Creator Case Study {item}</h3>
                  <p className="text-sm font-light text-brand-ink/70 leading-relaxed">
                    A detailed breakdown of how we mapped their bottlenecks and deployed a sovereign digital estate to win back 15 hours a week.
                  </p>
                </div>
                <Link href={`/case-studies`} className="text-sm font-medium text-brand-action hover:text-brand-ink transition-colors inline-block pt-4 border-t border-brand-ink/10 w-full">
                  Read Case Study &rarr;
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
