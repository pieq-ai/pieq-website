import React from 'react';
import Button from '../ui/Button';
import { ChevronRight, PieChart, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-500 mb-6">
              <Sparkles className="h-4 w-4 mr-2" /> 
              <span className="text-sm font-medium">AI-Powered Practice Management</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-500 leading-tight mb-6">
              Streamline Every Slice of Your Business
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-400 mb-8 md:pr-12">
              The intelligent platform built specifically for bookkeepers and accountants serving the restaurant and hospitality industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" onClick={() => window.location='mailto:demo@pieq.ai'}>
                Get a Demo
              </Button>
              
              <Button variant="outline" size="lg">
                Learn More <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center text-sm text-neutral-400">
              <span className="bg-success text-white px-2 py-1 rounded mr-2 text-xs font-medium">NEW</span>
              <span>AI-powered client communication suite now available!</span>
            </div>
          </div>
          
          {/* Right side image */}
          <div className="w-full lg:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary-100 rounded-full opacity-20 blur-3xl"></div>
              
              <div className="relative bg-white rounded-xl shadow-medium p-6 md:p-8">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-primary-500 text-white rounded-full p-3">
                  <PieChart className="h-6 w-6" />
                </div>
                
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Restaurant accountant using PieQ software" 
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mr-3">
                      <span className="font-medium">1</span>
                    </div>
                    <div className="h-1 flex-1 bg-neutral-100 rounded">
                      <div className="h-1 w-3/4 bg-primary-500 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-500 mr-3">
                      <span className="font-medium">2</span>
                    </div>
                    <div className="h-1 flex-1 bg-neutral-100 rounded">
                      <div className="h-1 w-1/2 bg-secondary-500 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 mr-3">
                      <span className="font-medium">3</span>
                    </div>
                    <div className="h-1 flex-1 bg-neutral-100 rounded">
                      <div className="h-1 w-1/4 bg-neutral-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;