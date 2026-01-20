import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dashboard1 from "../assets/1b14404a46a61dcf8448ff60458f26202823f8c2.png";
import dashboard2 from "../assets/03f96de82b2dcb0e29a988ebe890ff1444a73938.png";
import dashboard3 from "../assets/079bbee345ad0b81589ec054760733fd82b8393e.png";

const images = [dashboard1, dashboard2, dashboard3];

export function LaptopCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto" style={{ perspective: '1000px' }}>
      {/* Laptop Frame */}
      <div className="relative z-10 mx-auto w-[90%] sm:w-full">
        {/* Screen/Bezel */}
        <div className="relative bg-zinc-800 rounded-t-2xl p-2 sm:p-4 border-t border-x border-zinc-700 shadow-2xl">
          <div className="relative aspect-[16/10] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
            {/* Camera dot */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-700 z-20" />
            
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.22, 1, 0.36, 1],
                  opacity: { duration: 0.8 }
                }}
                className="w-full h-full object-cover"
                alt={`Dashboard view ${currentIndex + 1}`}
              />
            </AnimatePresence>

            {/* Screen Reflection Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-30 z-10" />
          </div>
        </div>

        {/* Laptop Base */}
        <div className="relative h-4 sm:h-6 bg-zinc-700 rounded-b-xl border-b border-zinc-600 shadow-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-zinc-800 rounded-b-md" />
        </div>
        
        {/* Shadow underneath */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[110%] h-12 bg-[#C5A059]/10 blur-3xl rounded-full -z-10" />
      </div>

      {/* Floating UI Elements for depth */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-12 -right-8 z-20 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-4 rounded-xl hidden lg:block"
      >
        <div className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest mb-2">System Status</div>
        <div className="flex gap-1 h-1 w-24 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div 
            animate={{ width: ["20%", "80%", "40%"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-full bg-[#C5A059]" 
          />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-8 z-20 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-4 rounded-xl hidden lg:block"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Agentic Intelligence</div>
            <div className="text-xs text-white font-medium">Active & Optimizing</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
