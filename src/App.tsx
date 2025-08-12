import { useState } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import SolutionsSection from "../components/SolutionsSection";
import ProjectsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Button } from "../components/ui/button";

export default function App() {
  const [showReadout, setShowReadout] = useState(false);

  const companyReadout = {
    tagline: "Orchestrate Every Slice of Your Business with Agentic AI",
    
    overview: "PieQ is an innovative AI-powered business process management (BPM) platform that orchestrates every aspect of your business operations. As a newly launched company, we're transforming how businesses automate and optimize their processes through cutting-edge artificial intelligence and industry-specific solutions.",
    
    mission: "To revolutionize business operations through intelligent automation, enabling companies to eliminate inefficiencies, boost productivity, and scale confidently with AI-powered process orchestration.",
    
    coreCapabilities: [
      "🤖 Agentic AI: Self-learning AI that adapts and evolves with your business processes",
      "🎯 Industry Solutions: Specialized automation for Insurance and Hospitality sectors", 
      "🔒 Enterprise Security: Bank-grade security with end-to-end encryption and compliance",
      "⚡ Real-Time Processing: Instant automation with live monitoring and intelligent alerts",
      "🏷️ White Label Platform: Complete customization for partners and resellers",
      "📊 Smart Analytics: AI-driven insights with predictive performance tracking",
      "💬 Conversational Interface: Natural language interaction for process management",
      "🔗 Intelligent Integrations: Seamless connectivity with existing business systems"
    ],
    
    currentStatus: "Active beta development with 18 months of intensive R&D, featuring 2,400+ engineering hours and strategic partnerships with forward-thinking organizations validating our platform capabilities.",
    
    vision: "To become the definitive AI-powered BPM platform that makes complex business process management as intuitive as having a conversation - empowering organizations to achieve operational excellence through intelligent automation.",
    
    platform: "Built on modern React architecture with advanced AI capabilities, real-time processing engines, enterprise-grade security, and scalable cloud infrastructure optimized for global deployment and white-label distribution.",

    differentiators: [
      "🧠 First truly conversational BPM platform with natural language processing",
      "🎛️ Industry-first agentic AI that learns and improves business processes autonomously", 
      "🚀 Rapid deployment in days, not months, with intelligent onboarding",
      "🔄 Self-optimizing workflows that continuously improve performance",
      "🌐 Built for scale with white-label capabilities from day one"
    ]
  };



  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SolutionsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        {/* Read Out Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => setShowReadout(true)}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-2xl rounded-full p-4 group relative"
              size="lg"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-2"
              >
                <ExternalLink size={20} />
                <span className="hidden sm:inline">Read Out</span>
              </motion.div>
              
              {/* Animated sparkles */}
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles size={12} className="text-yellow-300" />
              </motion.div>
              
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-orange-400"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Read Out Modal */}
      <Dialog open={showReadout} onOpenChange={setShowReadout}>
        <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-white shadow-2xl border-0">
          <DialogHeader className="pb-6 border-b border-gray-200">
            <DialogTitle className="text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent flex items-center gap-3 font-bold">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={28} className="text-orange-500" />
              </motion.div>
              PieQ Company Read Out
            </DialogTitle>
            <p className="text-gray-600 mt-2">Complete company overview and platform details</p>
          </DialogHeader>
          
          <div className="space-y-8 text-gray-700 py-4">
            {/* Company Tagline - Featured prominently */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
              className="bg-gradient-to-br from-orange-50 via-blue-accent to-orange-50 p-6 rounded-xl border-l-4 border-orange-500 shadow-sm"
            >
              <h3 className="text-sm text-blue-primary mb-2 uppercase tracking-wide">✨ Company Tagline</h3>
              <motion.p 
                className="text-xl bg-gradient-to-r from-orange-600 via-blue-primary to-red-600 bg-clip-text text-transparent leading-relaxed italic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                "{companyReadout.tagline}"
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-3 flex items-center gap-2">🏢 Company Overview</h3>
              <p className="leading-relaxed text-gray-700">{companyReadout.overview}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h3 className="text-lg text-blue-primary mb-3">🎯 Mission Statement</h3>
              <p className="leading-relaxed">{companyReadout.mission}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <h3 className="text-lg text-orange-600 mb-3">⚡ Core Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {companyReadout.coreCapabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + index * 0.08 }}
                    className="text-sm p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors border border-orange-100"
                  >
                    {capability}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <h3 className="text-lg text-blue-primary mb-3">🚀 Current Status</h3>
              <p className="leading-relaxed">{companyReadout.currentStatus}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
            >
              <h3 className="text-lg text-orange-600 mb-3">🔮 Vision</h3>
              <p className="leading-relaxed">{companyReadout.vision}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
            >
              <h3 className="text-lg text-blue-primary mb-3">⚙️ Platform Technology</h3>
              <p className="leading-relaxed mb-4">{companyReadout.platform}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
            >
              <h3 className="text-lg text-orange-600 mb-3">🏆 Key Differentiators</h3>
              <div className="space-y-2">
                {companyReadout.differentiators.map((differentiator, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.95 + index * 0.1 }}
                    className="text-sm p-3 bg-blue-accent rounded-lg border border-blue-light/20"
                  >
                    {differentiator}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-xl text-white text-center"
            >
              <h3 className="text-lg mb-2">🚀 Ready to Transform Your Business?</h3>
              <p className="text-orange-100 mb-4">
                Experience the future of business process management with PieQ's AI-powered platform
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button 
                  variant="outline" 
                  className="bg-white text-orange-600 border-white hover:bg-orange-50"
                  onClick={() => {
                    setShowReadout(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Talk to Us
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white text-orange-600 border-white hover:bg-orange-50"
                  onClick={() => {
                    setShowReadout(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Platform
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-end pt-6 border-t border-gray-200">
            <Button 
              onClick={() => setShowReadout(false)}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-2"
            >
              Close Read Out
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}