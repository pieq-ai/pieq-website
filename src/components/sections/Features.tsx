import React from 'react';
import { MessageSquare, PieChart, Calendar, Users, Clock, BarChart3, Brain, Shield } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
      <div className="h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-500 mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-500 mb-3">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Smart Client Communication",
      description: "AI-powered client messaging with automatic categorization and follow-up reminders."
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Restaurant-Specific Reports",
      description: "Tailored financial reports with industry benchmarks and performance metrics."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Automated Scheduling",
      description: "Calendar integration with smart scheduling for client meetings and deadlines."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Seamless task delegation and progress tracking across your entire firm."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Tracking",
      description: "Robust time tracking with client billing integration and analysis."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Financial Insights",
      description: "Real-time data visualization for restaurant metrics and performance."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Assistance",
      description: "Smart automation for routine tasks and intelligent recommendations."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Document Management",
      description: "End-to-end encrypted storage and sharing of client documents."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-500 mb-4">
            Powerful Features for Restaurant Accounting
          </h2>
          <p className="text-lg text-neutral-400">
            Our platform combines powerful tools with industry-specific features to help you manage restaurant clients more efficiently.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;