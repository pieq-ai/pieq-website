import { Button } from "./ui/button";
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    console.log(sectionId,'sectionId');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-orange-50/50 via-white to-blue-accent/20 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center min-h-[70vh] flex flex-col justify-center">
          <div className="space-y-12">
            <div className="space-y-8">
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight">
                <span className="text-blue-primary block font-bold text-[48px] p-[0px] px-[0px] py-[20px]">
                  Orchestrate
                </span>
                <span className="block text-gray-900 text-[48px] font-bold">Every Slice of Your Business</span>
                <span className="block text-[#ed2200] font-bold text-[48px]">Enriched by Agentic AI</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Turn complexity into clarity with AI-powered insights, automation, and connected workflows.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16 pt-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-semibold text-[rgba(34,34,34,1)] mb-2 text-[24px]">Complete</div>
                <div className="text-base lg:text-lg text-orange-600">Visibility</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-semibold text-black mb-2 text-[24px]">Break Down</div>
                <div className="text-base lg:text-lg text-orange-600">Silos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-semibold text-black mb-2 text-[24px]">Actionable</div>
                <div className="text-base lg:text-lg text-orange-600">Insights</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-10 py-5 shadow-lg text-white" onClick={() => scrollToSection('contact')}>
                Talk to us
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button size="lg" className="border-2 border-blue-primary text-blue-primary hover:bg-[var(--blue-primary)] hover:text-white text-lg px-10 py-5 transition-all duration-200" onClick={() => scrollToSection('features')}>
                Explore Platform
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}