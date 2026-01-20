import { motion } from 'framer-motion';
import { Globe, Layers, ShieldCheck } from 'lucide-react';
import { FlowOrchestrator } from './FlowOrchestrator';
import diagramImg from "../assets/04b827c73372fc28741e6ffe8804f553fba38970.png";

export default function ActionableIntelligence() {
  return (
    <section id="features" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 relative z-10">
          <div className="flex flex-col items-start text-left lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#A6823C]/10 text-[#A6823C] text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-full border border-[#A6823C]/20"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#A6823C] animate-pulse" />
              Actionable Intelligence
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-light text-zinc-900 leading-[1.05] mb-8 tracking-tighter"
            >
              Turning data <br />
              <span className="font-black italic text-[48px]">into autonomous</span> <br />
              outcomes.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-xl font-normal border-l border-zinc-100 pl-8"
            >
              FLOW orchestrates complex ingestion and predictive modeling, converting real-time data into actionable intelligence for improved operational readiness.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full lg:w-[55%] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#A6823C]/5 to-transparent rounded-[3rem] blur-3xl -z-10" />
            <FlowOrchestrator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
