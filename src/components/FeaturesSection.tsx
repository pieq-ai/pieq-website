import { Card, CardContent } from "./ui/card";
import { 
  Brain, 
  Zap,
  Paintbrush,
  BarChart3,
  ArrowRight,
  MessageCircle,
  Cpu
} from 'lucide-react';
import { Button } from "./ui/button";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="text-blue-primary" size={32} />,
      title: "AI-Powered Intelligence",
      description: "Built-in AI capabilities that learn from your processes and suggest optimizations to boost productivity.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
    },
    {
      icon: <Cpu className="text-orange-600" size={32} />,
      title: "Smart Workflow",
      description: "AI-driven workflow intelligence that adapts and optimizes processes automatically for maximum efficiency.",
      image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=400&h=250&fit=crop"
    },
    {
      icon: <Zap className="text-amber-600" size={32} />,
      title: "Real-time Automation",
      description: "Instant process execution with real-time monitoring and alerts for critical workflows.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      icon: <Paintbrush className="text-red-700" size={32} />,
      title: "White Label Ready",
      description: "Complete customization capabilities to match your brand and deliver solutions to your clients.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop"
    },
    {
      icon: <BarChart3 className="text-orange-500" size={32} />,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards and reporting to track performance and identify bottlenecks.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      icon: <MessageCircle className="text-orange-700" size={32} />,
      title: "Conversational AI Hub",
      description: "Natural language interface to interact with your processes, get insights, and trigger workflows through chat.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">
            Powerful Platform,
            <span className="bg-gradient-to-r from-orange-600 via-blue-primary to-red-600 bg-clip-text text-transparent block">
              Endless Possibilities
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive BPM platform provides everything you need to automate, optimize, and scale your business processes with enterprise-grade reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  {/* Custom SVG Graphics */}
                  <div className="w-full h-full bg-gradient-to-br from-orange-50 via-blue-accent to-red-50 flex items-center justify-center">
                    {index === 0 && (
                      // AI-Powered Intelligence
                      <svg viewBox="0 0 200 120" className="w-full h-full">
                        <defs>
                          <linearGradient id={`aiGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ea580c" />
                            <stop offset="100%" stopColor="#dc2626" />
                          </linearGradient>
                        </defs>
                        {/* Neural network nodes */}
                        <circle cx="100" cy="60" r="12" fill="url(#aiGradient0)" />
                        <circle cx="60" cy="30" r="8" fill="#ea580c" opacity="0.8" />
                        <circle cx="140" cy="30" r="8" fill="#ea580c" opacity="0.8" />
                        <circle cx="40" cy="60" r="6" fill="#ea580c" opacity="0.6" />
                        <circle cx="160" cy="60" r="6" fill="#ea580c" opacity="0.6" />
                        <circle cx="60" cy="90" r="8" fill="#ea580c" opacity="0.8" />
                        <circle cx="140" cy="90" r="8" fill="#ea580c" opacity="0.8" />
                        {/* Connections */}
                        <line x1="100" y1="60" x2="60" y2="30" stroke="#ea580c" strokeWidth="2" opacity="0.7" />
                        <line x1="100" y1="60" x2="140" y2="30" stroke="#ea580c" strokeWidth="2" opacity="0.7" />
                        <line x1="100" y1="60" x2="40" y2="60" stroke="#ea580c" strokeWidth="2" opacity="0.7" />
                        <line x1="100" y1="60" x2="160" y2="60" stroke="#ea580c" strokeWidth="2" opacity="0.7" />
                        <line x1="100" y1="60" x2="60" y2="90" stroke="#ea580c" strokeWidth="2" opacity="0.7" />
                        <line x1="100" y1="60" x2="140" y2="90" stroke="#ea580c" strokeWidth="2" opacity="0.7" />
                        {/* Pulsing effect */}
                        <circle cx="100" cy="60" r="20" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.3">
                          <animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                      </svg>
                    )}
                    
                    {index === 1 && (
                      // Smart Workflow
                      <svg viewBox="0 0 200 120" className="w-full h-full">
                        <defs>
                          <linearGradient id={`smartWorkflowGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ea580c" />
                            <stop offset="100%" stopColor="#dc2626" />
                          </linearGradient>
                        </defs>
                        {/* Smart workflow brain */}
                        <circle cx="100" cy="60" r="25" fill="url(#smartWorkflowGradient1)" opacity="0.8" />
                        {/* Workflow connections */}
                        <circle cx="60" cy="40" r="8" fill="#ea580c" />
                        <circle cx="140" cy="40" r="8" fill="#ea580c" />
                        <circle cx="60" cy="80" r="8" fill="#ea580c" />
                        <circle cx="140" cy="80" r="8" fill="#ea580c" />
                        {/* Smart connections */}
                        <path d="M75 45 Q100 30 125 45" stroke="#ea580c" strokeWidth="2" fill="none" />
                        <path d="M75 75 Q100 90 125 75" stroke="#ea580c" strokeWidth="2" fill="none" />
                        <line x1="75" y1="60" x2="85" y2="60" stroke="#ea580c" strokeWidth="2" />
                        <line x1="115" y1="60" x2="125" y2="60" stroke="#ea580c" strokeWidth="2" />
                        {/* AI indicators */}
                        <circle cx="90" cy="50" r="3" fill="#f59e0b">
                          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="110" cy="70" r="3" fill="#f59e0b">
                          <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
                        </circle>
                        {/* Pulse effect */}
                        <circle cx="100" cy="60" r="30" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.3">
                          <animate attributeName="r" values="30;35;30" dur="3s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
                        </circle>
                      </svg>
                    )}
                    

                    
                    {index === 2 && (
                      // Real-time Automation
                      <svg viewBox="0 0 200 120" className="w-full h-full">
                        <defs>
                          <linearGradient id={`automationGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#ea580c" />
                          </linearGradient>
                        </defs>
                        {/* Lightning bolt */}
                        <path d="M90 25 L110 25 L95 55 L115 55 L85 95 L105 65 L85 65 Z" 
                              fill="url(#automationGradient2)" />
                        {/* Speed lines */}
                        <line x1="120" y1="30" x2="140" y2="30" stroke="#ea580c" strokeWidth="2" opacity="0.6" />
                        <line x1="125" y1="40" x2="150" y2="40" stroke="#ea580c" strokeWidth="2" opacity="0.6" />
                        <line x1="120" y1="50" x2="145" y2="50" stroke="#ea580c" strokeWidth="2" opacity="0.6" />
                        <line x1="50" y1="70" x2="70" y2="70" stroke="#ea580c" strokeWidth="2" opacity="0.6" />
                        <line x1="45" y1="80" x2="70" y2="80" stroke="#ea580c" strokeWidth="2" opacity="0.6" />
                        <line x1="50" y1="90" x2="75" y2="90" stroke="#ea580c" strokeWidth="2" opacity="0.6" />
                        {/* Pulse effect */}
                        <circle cx="100" cy="60" r="8" fill="#ea580c" opacity="0.3">
                          <animate attributeName="r" values="8;15;8" dur="1.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                      </svg>
                    )}
                    
                    {index === 3 && (
                      // White Label Ready
                      <svg viewBox="0 0 200 120" className="w-full h-full">
                        <defs>
                          <linearGradient id={`brandGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#dc2626" />
                            <stop offset="100%" stopColor="#b91c1c" />
                          </linearGradient>
                        </defs>
                        {/* Palette shape */}
                        <ellipse cx="100" cy="60" rx="50" ry="30" fill="url(#brandGradient3)" opacity="0.8" />
                        {/* Color swatches */}
                        <circle cx="80" cy="50" r="6" fill="#ea580c" />
                        <circle cx="100" cy="45" r="6" fill="#dc2626" />
                        <circle cx="120" cy="50" r="6" fill="#f59e0b" />
                        <circle cx="85" cy="70" r="6" fill="#b45309" />
                        <circle cx="115" cy="70" r="6" fill="#991b1b" />
                        {/* Brush */}
                        <rect x="140" y="35" width="3" height="25" fill="#8b5cf6" transform="rotate(30 141.5 47.5)" />
                        <ellipse cx="142" cy="32" rx="2" ry="4" fill="#374151" transform="rotate(30 142 32)" />
                        {/* Brand elements */}
                        <rect x="60" y="75" width="80" height="8" rx="2" fill="white" opacity="0.8" />
                        <rect x="70" y="88" width="60" height="5" rx="1" fill="white" opacity="0.6" />
                      </svg>
                    )}
                    
                    {index === 4 && (
                      // Advanced Analytics
                      <svg viewBox="0 0 200 120" className="w-full h-full">
                        <defs>
                          <linearGradient id={`analyticsGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ea580c" />
                            <stop offset="100%" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        {/* Chart bars */}
                        <rect x="40" y="70" width="12" height="20" fill="url(#analyticsGradient4)" />
                        <rect x="60" y="55" width="12" height="35" fill="#ea580c" />
                        <rect x="80" y="45" width="12" height="45" fill="url(#analyticsGradient4)" />
                        <rect x="100" y="35" width="12" height="55" fill="#ea580c" />
                        <rect x="120" y="50" width="12" height="40" fill="url(#analyticsGradient4)" />
                        <rect x="140" y="60" width="12" height="30" fill="#ea580c" />
                        {/* Trend line */}
                        <polyline points="46,75 66,60 86,50 106,40 126,55 146,65" 
                                  fill="none" stroke="#dc2626" strokeWidth="2" opacity="0.8" />
                        {/* Data points */}
                        <circle cx="46" cy="75" r="2" fill="#dc2626" />
                        <circle cx="66" cy="60" r="2" fill="#dc2626" />
                        <circle cx="86" cy="50" r="2" fill="#dc2626" />
                        <circle cx="106" cy="40" r="2" fill="#dc2626" />
                        <circle cx="126" cy="55" r="2" fill="#dc2626" />
                        <circle cx="146" cy="65" r="2" fill="#dc2626" />
                        {/* Axis lines */}
                        <line x1="35" y1="95" x2="165" y2="95" stroke="#6b7280" strokeWidth="1" />
                        <line x1="35" y1="95" x2="35" y2="25" stroke="#6b7280" strokeWidth="1" />
                      </svg>
                    )}
                    

                    

                    
                    {index === 5 && (
                      // Conversational AI Hub
                      <svg viewBox="0 0 200 120" className="w-full h-full">
                        <defs>
                          <linearGradient id={`conversationalGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ea580c" />
                            <stop offset="100%" stopColor="#b45309" />
                          </linearGradient>
                        </defs>
                        {/* Chat bubbles */}
                        <path d="M50 40 Q50 30 60 30 L90 30 Q100 30 100 40 L100 50 Q100 60 90 60 L70 60 L60 70 L60 60 Q50 60 50 50 Z" 
                              fill="url(#conversationalGradient5)" />
                        <path d="M120 50 Q120 40 130 40 L160 40 Q170 40 170 50 L170 60 Q170 70 160 70 L140 70 L130 80 L130 70 Q120 70 120 60 Z" 
                              fill="#ea580c" opacity="0.8" />
                        {/* AI brain in center */}
                        <circle cx="100" cy="75" r="12" fill="url(#conversationalGradient5)" />
                        {/* Neural connections */}
                        <circle cx="85" cy="68" r="3" fill="#ea580c" opacity="0.6" />
                        <circle cx="115" cy="68" r="3" fill="#ea580c" opacity="0.6" />
                        <circle cx="85" cy="82" r="3" fill="#ea580c" opacity="0.6" />
                        <circle cx="115" cy="82" r="3" fill="#ea580c" opacity="0.6" />
                        <line x1="100" y1="75" x2="85" y2="68" stroke="#ea580c" strokeWidth="1" opacity="0.6" />
                        <line x1="100" y1="75" x2="115" y2="68" stroke="#ea580c" strokeWidth="1" opacity="0.6" />
                        <line x1="100" y1="75" x2="85" y2="82" stroke="#ea580c" strokeWidth="1" opacity="0.6" />
                        <line x1="100" y1="75" x2="115" y2="82" stroke="#ea580c" strokeWidth="1" opacity="0.6" />
                        {/* Conversation flow */}
                        <path d="M75 50 Q100 60 100 65" stroke="#ea580c" strokeWidth="2" fill="none" opacity="0.7" />
                        <path d="M145 60 Q115 65 110 70" stroke="#ea580c" strokeWidth="2" fill="none" opacity="0.7" />
                        {/* Typing indicator */}
                        <circle cx="75" cy="45" r="2" fill="#f59e0b">
                          <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="80" cy="45" r="2" fill="#f59e0b">
                          <animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="85" cy="45" r="2" fill="#f59e0b">
                          <animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.4s" repeatCount="indefinite" />
                        </circle>
                      </svg>
                    )}
                    

                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl mb-3 group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto group-hover:text-orange-600" onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Explore Platform Features
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}