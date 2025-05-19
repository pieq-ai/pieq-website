import React from 'react';
import { Coffee, Utensils, Beer, Home, Store, ShoppingBag } from 'lucide-react';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isPrimary?: boolean;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ 
  icon, 
  title, 
  description,
  isPrimary = false
}) => {
  return (
    <div className={`rounded-xl p-6 transition-all duration-300 ${
      isPrimary 
        ? 'bg-primary-500 text-white shadow-medium transform hover:-translate-y-1' 
        : 'bg-white text-neutral-500 shadow-soft hover:shadow-medium'
    }`}>
      <div className={`h-12 w-12 rounded-lg ${
        isPrimary 
          ? 'bg-white/10 text-white' 
          : 'bg-primary-50 text-primary-500'
      } flex items-center justify-center mb-5`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className={isPrimary ? 'text-white/80' : 'text-neutral-400'}>{description}</p>
    </div>
  );
};

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Full-Service Restaurants",
      description: "Manage complex payroll, tips reporting, and inventory for traditional dining establishments.",
      isPrimary: true
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Cafes & Bakeries",
      description: "Track ingredient costs, manage multiple vendor relationships, and optimize pricing.",
      isPrimary: false
    },
    {
      icon: <Beer className="h-6 w-6" />,
      title: "Bars & Nightclubs",
      description: "Handle specialized inventory tracking, licensing requirements, and late-hour operations.",
      isPrimary: false
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Quick Service",
      description: "Streamline high-volume transaction reporting and franchise accounting requirements.",
      isPrimary: false
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Hotels & Lodging",
      description: "Manage room revenue, food service, and complex department accounting in one place.",
      isPrimary: false
    },
    {
      icon: <Store className="h-6 w-6" />,
      title: "Catering & Events",
      description: "Track project-based profitability, deposits, and vendor management for events.",
      isPrimary: false
    }
  ];

  return (
    <section id="industries" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-500 mb-4">
            Specialized For Food Service & Hospitality
          </h2>
          <p className="text-lg text-neutral-400">
            Our platform is tailored to address the unique accounting challenges in these industries with specialized tools and reports.
          </p>
        </div>

        {/* Industries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              isPrimary={industry.isPrimary}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;