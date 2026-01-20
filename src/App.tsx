import { Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ActionableIntelligence from './components/ActionableIntelligence';
import FeaturesSection from './components/FeaturesSection';
import SolutionsSection from './components/SolutionsSection';
import WhiteLabelSection from './components/WhiteLabelSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#A6823C] selection:text-black overflow-x-hidden">
      <Header />
      
      <main className="relative">
        <HeroSection />

        <ActionableIntelligence />
        
        <FeaturesSection />

        <SolutionsSection />

        <WhiteLabelSection />

        <ContactForm />

        {/* Final CTA */}
        <section className="py-20 bg-[#A6823C]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tighter mb-6">
              Ready to transfer your business <br />with FLOW?
            </h2>
            <p className="text-black/80 text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              Our experts are ready to help you transform your business processes. <br className="hidden md:block" />
              Choose the option that works best for you.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
              <div className="text-center md:text-left space-y-2">
                <p className="text-black/60 text-[10px] font-bold uppercase tracking-[0.2em]">Email Us</p>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@pieq.ai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click', {
                        event_category: 'CTA',
                        event_label: 'Email Click - sales@pieq.ai'
                      });
                    }
                  }}
                  className="text-xl font-bold text-black hover:opacity-70 transition-opacity block"
                >
                  sales@pieq.ai
                </a>
              </div>

              <div className="text-center md:text-right space-y-2">
                <p className="text-black/60 text-[10px] font-bold uppercase tracking-[0.2em]">Support</p>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=support@pieq.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click', {
                        event_category: 'CTA',
                        event_label: 'Email Click - support@pieq.ai'
                      });
                    }
                  }}
                  className="text-xl font-bold text-black hover:opacity-70 transition-opacity block"
                >
                  support@pieq.ai
                </a>
                <p className="text-black/70 text-xs font-medium">Get technical assistance and support</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
