"use client";

import { motion, Variants } from "framer-motion";
import { Download, Lock } from "lucide-react";
import Image from "next/image";

export default function ToolsPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const tools = [
    {
      title: "Time-Boxed AI Coach (TBAIC)",
      description: "A beautifully designed timer and reflection loop to maintain peak flow state without the anxiety of a ticking clock.",
      status: "available",
    },
    {
      title: "Content Intake Engine",
      description: "A centralized, highly structured raw brain dump system that automatically categorizes ideas using AI.",
      status: "available",
    },
    {
      title: "The Filtering Matrix",
      description: "An automated prioritization tool built on First Principles and the Eisenhower Matrix.",
      status: "upcoming",
    }
  ];

  return (
    <main className="min-h-screen bg-brand-salt">
      <div className="max-w-[1400px] mx-auto px-6 py-32 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Architect's Wall Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full relative aspect-square md:aspect-[3/4] rounded-3xl overflow-hidden shadow-premium border border-brand-ink/5"
        >
          <Image 
            src="/images/tools-lush.png" 
            alt="Architects wall with beautifully organized tools" 
            fill 
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right Side: Tool Library & Text */}
        <div className="flex-1 w-full space-y-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-6">
            <div className="text-brand-action uppercase tracking-widest text-xs font-medium">Assets & Lead Gen</div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">The Tool Library</h1>
            <p className="text-xl text-brand-ink/70 font-light">
              High-leverage, aesthetically pleasing tools engineered to perfectly fit into your digital estate. Every piece has its place.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {tools.map((tool, i) => (
              <motion.div 
                key={i} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                variants={fadeUp} 
                className="bg-brand-canvas p-8 rounded-3xl shadow-premium border border-brand-ink/5 flex flex-col justify-between items-start gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-medium">{tool.title}</h3>
                    {tool.status === "upcoming" && (
                      <span className="px-2 py-0.5 bg-brand-ink/5 text-brand-ink/60 text-[10px] uppercase tracking-wider font-medium rounded-full">In Development</span>
                    )}
                  </div>
                  <p className="text-brand-ink/70 font-light leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                
                <button 
                  disabled={tool.status === "upcoming"}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm ${
                    tool.status === "available" 
                    ? "bg-brand-warmth hover:bg-brand-ink text-brand-salt shadow-premium" 
                    : "bg-brand-ink/5 text-brand-ink/40 cursor-not-allowed"
                  }`}
                >
                  {tool.status === "available" ? (
                    <>Download Asset <Download className="w-4 h-4" /></>
                  ) : (
                    <>Locked <Lock className="w-4 h-4" /></>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
