import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { LaptopCarousel } from './LaptopCarousel';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative flex items-center bg-white overflow-hidden py-20 lg:py-32">
      {/* Background visual elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#A6823C]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 border border-zinc-200 rounded-full bg-white shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#A6823C]" />
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.3em]">
                Powering the Age of Agentic AI
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-light text-zinc-900 leading-tight">
              Orchestrate <br />
              <span className="font-semibold text-[#A6823C]">Every Slice</span>
              <br />
              <span className="text-zinc-400">of Your Business</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 max-w-xl leading-relaxed">
              Powered by <span className="text-zinc-900 font-bold">FLOW</span>—our proprietary agentic AI platform that turns complex, real-time data into autonomous outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 max-w-2xl">
              {[
                { top: "Complete", bottom: "Visibility" },
                { top: "Break Down", bottom: "Silos" },
                { top: "Actionable", bottom: "Insights" }
              ].map((item, i) => (
                <div key={item.top} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A6823C] mt-1.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] leading-tight">{item.top}</span>
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] leading-tight">{item.bottom}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex pt-4">
              <Button 
                size="lg" 
                className="bg-black hover:bg-zinc-900 text-white font-bold h-14 px-8 rounded-none transition-all uppercase tracking-widest text-xs shadow-lg shadow-black/10"
                onClick={() => scrollToSection('features')}
              >
                Explore Capability
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-20"
          >
            <div className="scale-90 lg:scale-100 origin-center lg:origin-right transform-gpu">
              <LaptopCarousel />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
