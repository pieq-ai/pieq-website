import { motion } from 'framer-motion';
import { Palette, Share2, FileText, TrendingUp, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import whitelabelMockup from '../assets/whitelabel-mockup.png';

export const WhiteLabelSection = () => {
  return (
    <section className="py-24 bg-zinc-900 overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#A6823C 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#A6823C] font-bold uppercase tracking-[0.3em] text-[10px] mb-6"
            >
              Enterprise Partnerships
            </motion.h4>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-light text-white leading-tight mb-8"
            >
              Your Brand. <br />
              <span className="italic text-zinc-500">Our Intelligence.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-12"
            >
              Our products come with complete white-labeling capabilities, allowing you to deliver these solutions under your own brand to your clients.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { icon: Palette, text: "Custom Branding" },
                { icon: Share2, text: "Revenue Sharing" },
                { icon: FileText, text: "Custom Documentation" },
                { icon: TrendingUp, text: "Scalable Pricing" }
              ].map((item, i) => (
                <motion.div 
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A6823C] group-hover:bg-[#A6823C] group-hover:text-white transition-all duration-300">
                    <item.icon size={18} />
                  </div>
                  <span className="text-zinc-300 font-medium tracking-wide text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>


          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Image with Glassmorphism Overlay */}
              <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/5] lg:aspect-square">
                <ImageWithFallback 
                  src={whitelabelMockup}
                  alt="White Label Brand Identity Mockup"
                  className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating UI Element */}
              { <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 md:-left-12 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl max-w-[280px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#A6823C] flex items-center justify-center text-white">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black tracking-widest text-[#A6823C] uppercase">Verification</div>
                    <div className="text-white font-bold text-sm">Enterprise Ready</div>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Deliver high-performance agentic AI solutions under your own ecosystem.
                </p>
              </motion.div> }

              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#A6823C]/20 blur-[120px] rounded-full -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhiteLabelSection;
