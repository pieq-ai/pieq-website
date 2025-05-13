import React from 'react';
import { ClipboardCheck, MessageSquare, LineChart, Database } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ icon, number, title, description, isLast = false }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 relative">
        <div className="h-14 w-14 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-soft z-10 relative">
          {icon}
        </div>
        {!isLast && (
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-100"></div>
        )}
      </div>
      <div className="ml-6 pb-12">
        <div className="inline-block bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
          Step {number}
        </div>
        <h3 className="text-xl font-semibold text-neutral-500 mb-2">{title}</h3>
        <p className="text-neutral-400">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Onboard Your Restaurant Clients",
      description: "Import client data or start fresh. Our system is designed to handle multiple restaurant locations and franchise operations with ease."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Connect Financial Data",
      description: "Integrate with POS systems, payment processors, and banking platforms specific to the restaurant industry for automated data collection."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Streamline Communication",
      description: "Use our AI-powered communication tools to manage client requests, set expectations, and automate routine updates."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Deliver Actionable Insights",
      description: "Generate industry-specific reports and dashboards that help your restaurant clients make data-driven decisions."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-500 mb-6">
              How PieQ Works For Your Accounting Firm
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              Our platform adapts to your workflow while adding powerful tools designed specifically for managing restaurant and hospitality clients.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Step 
                  key={index}
                  icon={step.icon}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
          
          {/* Right side image */}
          <div className="w-full lg:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-100 rounded-full opacity-20 blur-3xl"></div>
              
              <img 
                src="https://images.pexels.com/photos/8867265/pexels-photo-8867265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Accountant working with restaurant client" 
                className="w-full h-auto rounded-xl shadow-medium"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-soft p-4 max-w-xs">
                <div className="flex items-center mb-3">
                  <div className="h-3 w-3 rounded-full bg-success mr-2"></div>
                  <span className="text-sm font-medium text-neutral-500">Client Insights</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-primary-100 rounded-full">
                    <div className="h-2 w-4/5 bg-primary-500 rounded-full"></div>
                  </div>
                  <div className="h-2 w-full bg-secondary-100 rounded-full">
                    <div className="h-2 w-2/3 bg-secondary-500 rounded-full"></div>
                  </div>
                  <div className="h-2 w-5/6 bg-neutral-100 rounded-full">
                    <div className="h-2 w-1/2 bg-neutral-400 rounded-full"></div>
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

export default HowItWorks;