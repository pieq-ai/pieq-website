import { motion } from 'framer-motion';
import { Database, Cpu, ShieldCheck, Target, Activity, Share2 } from 'lucide-react';

export const FlowOrchestrator = () => {
  return (
    <div className="relative w-full py-20 px-8 bg-zinc-50/80 backdrop-blur-sm rounded-[3rem] border border-zinc-100 overflow-hidden shadow-2xl shadow-zinc-200/50">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#A6823C 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
        
        {/* Stage 1: Ingestion */}
        <div className="flex flex-col gap-6 w-full lg:w-1/4">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-[10px] font-black tracking-[0.3em] text-[#A6823C] uppercase">01. Ingestion</div>
            <div className="h-[1px] flex-1 bg-zinc-200" />
          </div>
          {[
            { icon: Database, label: "Multi-Source Data" },
            { icon: ShieldCheck, label: "Secure Extraction" },
            { icon: Activity, label: "Real-time Streams" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:border-[#A6823C]/50 hover:shadow-lg hover:shadow-[#A6823C]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-[#A6823C] group-hover:bg-[#A6823C]/5 transition-all">
                <item.icon size={20} />
              </div>
              <span className="text-sm font-bold text-zinc-600 tracking-tight">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Central Engine: FLOW */}
        <div className="relative flex items-center justify-center w-full lg:w-2/4 py-12">
          {/* Animated Connecting Lines (Desktop) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <svg className="w-full h-full" viewBox="0 0 500 300" fill="none">
               {/* Left to Center */}
               <motion.path 
                d="M 50 80 Q 150 150 250 150" 
                stroke="#E4E4E7" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
               />
               <motion.path 
                d="M 50 150 Q 150 150 250 150" 
                stroke="#E4E4E7" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
               />
               <motion.path 
                d="M 50 220 Q 150 150 250 150" 
                stroke="#E4E4E7" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
               />
               
               {/* Center to Right */}
               <motion.path 
                d="M 250 150 Q 350 150 450 80" 
                stroke="#E4E4E7" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
               />
               <motion.path 
                d="M 250 150 Q 350 150 450 220" 
                stroke="#E4E4E7" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
               />
            </svg>

            {/* Animated Pulses using Divs to avoid SVG prop warnings */}
            {[
              "M 50 80 Q 150 150 250 150",
              "M 50 150 Q 150 150 250 150",
              "M 50 220 Q 150 150 250 150",
              "M 250 150 Q 350 150 450 80",
              "M 250 150 Q 350 150 450 220"
            ].map((path, idx) => (
              <motion.div
                key={idx}
                className="absolute w-2 h-2 rounded-full bg-[#A6823C] blur-[1px]"
                initial={{ offsetDistance: "0%", offsetPath: `path("${path}")` }}
                animate={{ offsetDistance: "100%" }}
                transition={{ 
                  duration: 2.5 + (idx * 0.5), 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: idx * 0.4
                }}
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-20 border border-[#A6823C]/5 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-16 border border-[#A6823C]/10 rounded-full border-dashed"
            />
            
            <div className="relative group">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-48 h-48 rounded-[3rem] bg-white border border-[#A6823C]/20 shadow-2xl shadow-[#A6823C]/10 flex flex-col items-center justify-center p-8 relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white mb-4 shadow-xl relative z-10">
                  <Cpu size={32} className="text-[#A6823C]" />
                </div>
                <div className="text-center relative z-10">
                  <span className="block text-xs font-black tracking-[0.5em] text-black uppercase mb-1">FLOW</span>
                  <span className="block text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Engine Core</span>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A6823C]/0 via-[#A6823C]/5 to-[#A6823C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#A6823C]/5 rounded-full blur-3xl" />
              </motion.div>
              
              {/* Pulse Ring */}
              <motion.div 
                animate={{ scale: [1, 1.5], opacity: [0.2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 border border-[#A6823C] rounded-[3rem]"
              />
            </div>
          </div>
        </div>

        {/* Stage 3: Intelligence Output */}
        <div className="flex flex-col gap-6 w-full lg:w-1/4">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[1px] flex-1 bg-zinc-200" />
            <div className="text-[10px] font-black tracking-[0.3em] text-[#A6823C] uppercase">02. Intelligence</div>
          </div>
          {[
            { icon: Target, label: "Predictive Models" },
            { icon: Share2, label: "Actionable Insights" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:border-[#A6823C]/50 hover:shadow-lg hover:shadow-[#A6823C]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-900 group-hover:text-[#A6823C] group-hover:bg-[#A6823C]/5 transition-all">
                <item.icon size={20} />
              </div>
              <span className="text-sm font-bold text-zinc-800 tracking-tight">{item.label}</span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Floating Particle Decor */}
      <div className="absolute top-10 left-1/4 w-1.5 h-1.5 bg-[#A6823C]/20 rounded-full animate-bounce" />
      <div className="absolute bottom-12 right-1/3 w-3 h-3 bg-[#A6823C]/10 rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-[#A6823C]/30 rounded-full animate-ping" />
    </div>
  );
};

export default FlowOrchestrator;
