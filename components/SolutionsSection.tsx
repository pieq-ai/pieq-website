import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Building2, 
  Hotel, 
  CheckCircle,
  ArrowRight,
  DollarSign,
  Users,
  FileText,
  BarChart3,
  Shield,
  Clock
} from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    {
      icon: <Building2 className="text-orange-600" size={48} />,
      title: "Insurance Agency Management",
      subtitle: "Streamline Your Insurance Operations",
      description: "Complete automation solution for insurance agencies with commission reconciliation, payout management, and agent portals.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      features: [
        { icon: <DollarSign size={20} className="text-green-600" />, text: "Commission Reconciliation" },
        { icon: <Users size={20} className="text-blue-600" />, text: "Automated Payout Management" },
        { icon: <Users size={20} className="text-purple-600" />, text: "Agent Self-Service Portal" },
        { icon: <FileText size={20} className="text-orange-600" />, text: "Policy Management" },
        { icon: <Shield size={20} className="text-red-600" />, text: "Claims Processing" },
        { icon: <BarChart3 size={20} className="text-indigo-600" />, text: "Compliance Reporting" }
      ]
    },
    {
      icon: <Hotel className="text-red-600" size={48} />,
      title: "Hospitality Bookkeeping",
      subtitle: "Seamless Financial Management",
      description: "Comprehensive bookkeeping solution designed specifically for hospitality industry professionals and their clients.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      features: [
        { icon: <Users size={20} className="text-blue-600" />, text: "Multi-Client Management" },
        { icon: <CheckCircle size={20} className="text-green-600" />, text: "Automated Reconciliation" },
        { icon: <BarChart3 size={20} className="text-purple-600" />, text: "POS System Integration" },
        { icon: <FileText size={20} className="text-orange-600" />, text: "Financial Reporting" },
        { icon: <DollarSign size={20} className="text-green-600" />, text: "Tax Preparation Support" },
        { icon: <Clock size={20} className="text-indigo-600" />, text: "Real-time Analytics" }
      ]
    }
  ];

  const whiteLabelFeatures = [
    "Custom Branding",
    "Revenue Sharing",
    "Custom Documentation",
    "Scalable Pricing"
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">
            Industry-Specific
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on our powerful BPM platform, these specialized products deliver targeted automation for specific industries with white-label capabilities.
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-xl bg-white">
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    {/* Custom SVG Graphics */}
                    <div className="w-full h-64 lg:h-full bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center overflow-hidden">
                      {index === 0 ? (
                        // Insurance Agency Management
                        <svg viewBox="0 0 400 300" className="w-full h-full">
                          <defs>
                            <linearGradient id={`insuranceGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ea580c" />
                              <stop offset="100%" stopColor="#dc2626" />
                            </linearGradient>
                            <linearGradient id={`insuranceSecondary${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#fed7aa" />
                              <stop offset="100%" stopColor="#fecaca" />
                            </linearGradient>
                          </defs>
                          
                          {/* Office building */}
                          <rect x="50" y="80" width="80" height="120" fill="url(#insuranceGradient0)" opacity="0.8" />
                          <rect x="60" y="90" width="15" height="15" fill="white" opacity="0.8" />
                          <rect x="80" y="90" width="15" height="15" fill="white" opacity="0.8" />
                          <rect x="100" y="90" width="15" height="15" fill="white" opacity="0.8" />
                          <rect x="60" y="110" width="15" height="15" fill="white" opacity="0.8" />
                          <rect x="80" y="110" width="15" height="15" fill="white" opacity="0.8" />
                          <rect x="100" y="110" width="15" height="15" fill="white" opacity="0.8" />
                          <rect x="60" y="130" width="15" height="15" fill="white" opacity="0.8" />
                          <rect x="80" y="130" width="15" height="15" fill="white" opacity="0.8" />
                          <rect x="100" y="130" width="15" height="15" fill="white" opacity="0.8" />
                          
                          {/* Insurance documents */}
                          <rect x="180" y="60" width="60" height="80" rx="4" fill="white" stroke="#ea580c" strokeWidth="2" />
                          <line x1="190" y1="75" x2="230" y2="75" stroke="#ea580c" strokeWidth="2" />
                          <line x1="190" y1="85" x2="220" y2="85" stroke="#ea580c" strokeWidth="1" opacity="0.6" />
                          <line x1="190" y1="95" x2="225" y2="95" stroke="#ea580c" strokeWidth="1" opacity="0.6" />
                          <line x1="190" y1="105" x2="215" y2="105" stroke="#ea580c" strokeWidth="1" opacity="0.6" />
                          <text x="210" y="125" textAnchor="middle" fontSize="10" fill="#ea580c">POLICY</text>
                          
                          {/* Commission calculation */}
                          <rect x="280" y="80" width="80" height="60" rx="8" fill="url(#insuranceSecondary0)" />
                          <text x="320" y="100" textAnchor="middle" fontSize="12" fill="#ea580c">Commission</text>
                          <text x="320" y="115" textAnchor="middle" fontSize="16" fill="#dc2626">$2,450</text>
                          <text x="320" y="130" textAnchor="middle" fontSize="10" fill="#ea580c">Auto-calculated</text>
                          
                          {/* Agent network */}
                          <circle cx="150" cy="220" r="12" fill="#ea580c" />
                          <circle cx="200" cy="200" r="10" fill="#dc2626" opacity="0.8" />
                          <circle cx="250" cy="210" r="10" fill="#dc2626" opacity="0.8" />
                          <circle cx="300" cy="190" r="10" fill="#dc2626" opacity="0.8" />
                          
                          {/* Agent connections */}
                          <line x1="150" y1="220" x2="200" y2="200" stroke="#ea580c" strokeWidth="2" opacity="0.6" />
                          <line x1="150" y1="220" x2="250" y2="210" stroke="#ea580c" strokeWidth="2" opacity="0.6" />
                          <line x1="150" y1="220" x2="300" y2="190" stroke="#ea580c" strokeWidth="2" opacity="0.6" />
                          
                          {/* Agent labels */}
                          <text x="150" y="240" textAnchor="middle" fontSize="8" fill="#ea580c">HQ</text>
                          <text x="200" y="195" textAnchor="middle" fontSize="6" fill="#dc2626">Agent 1</text>
                          <text x="250" y="205" textAnchor="middle" fontSize="6" fill="#dc2626">Agent 2</text>
                          <text x="300" y="185" textAnchor="middle" fontSize="6" fill="#dc2626">Agent 3</text>
                          
                          {/* Data flow arrows */}
                          <path d="M260 70 L270 65 L260 60" stroke="#ea580c" strokeWidth="2" fill="none" />
                          <path d="M160 200 L170 195 L160 190" stroke="#ea580c" strokeWidth="2" fill="none" />
                        </svg>
                      ) : (
                        // Hospitality Bookkeeping
                        <svg viewBox="0 0 400 300" className="w-full h-full">
                          <defs>
                            <linearGradient id={`hospitalityGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#dc2626" />
                              <stop offset="100%" stopColor="#ea580c" />
                            </linearGradient>
                            <linearGradient id={`hospitalitySecondary${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#fecaca" />
                              <stop offset="100%" stopColor="#fed7aa" />
                            </linearGradient>
                          </defs>
                          
                          {/* Restaurant/Hotel building */}
                          <rect x="60" y="100" width="100" height="80" fill="url(#hospitalityGradient1)" opacity="0.8" />
                          <rect x="70" y="120" width="20" height="25" fill="white" opacity="0.8" />
                          <rect x="100" y="120" width="20" height="25" fill="white" opacity="0.8" />
                          <rect x="130" y="120" width="20" height="25" fill="white" opacity="0.8" />
                          <rect x="85" y="155" width="30" height="25" fill="#8b4513" />
                          <text x="110" y="110" textAnchor="middle" fontSize="10" fill="white">RESTAURANT</text>
                          
                          {/* POS Terminal */}
                          <rect x="200" y="80" width="60" height="40" rx="6" fill="white" stroke="#dc2626" strokeWidth="2" />
                          <rect x="210" y="90" width="40" height="20" fill="#dc2626" opacity="0.2" />
                          <text x="230" y="103" textAnchor="middle" fontSize="8" fill="#dc2626">POS System</text>
                          <circle cx="245" cy="105" r="3" fill="#22c55e" />
                          
                          {/* Receipt/Invoice */}
                          <rect x="190" y="140" width="40" height="60" rx="3" fill="white" stroke="#dc2626" strokeWidth="1" />
                          <line x1="195" y1="150" x2="225" y2="150" stroke="#dc2626" strokeWidth="1" />
                          <line x1="195" y1="155" x2="220" y2="155" stroke="#dc2626" strokeWidth="0.5" opacity="0.6" />
                          <line x1="195" y1="160" x2="222" y2="160" stroke="#dc2626" strokeWidth="0.5" opacity="0.6" />
                          <line x1="195" y1="165" x2="218" y2="165" stroke="#dc2626" strokeWidth="0.5" opacity="0.6" />
                          <line x1="195" y1="175" x2="225" y2="175" stroke="#dc2626" strokeWidth="1" />
                          <text x="210" y="190" textAnchor="middle" fontSize="8" fill="#dc2626">$127.50</text>
                          
                          {/* Financial Dashboard */}
                          <rect x="280" y="60" width="80" height="100" rx="8" fill="url(#hospitalitySecondary1)" />
                          <text x="320" y="80" textAnchor="middle" fontSize="10" fill="#dc2626">Daily Summary</text>
                          
                          {/* Revenue chart bars */}
                          <rect x="290" y="130" width="8" height="20" fill="#dc2626" />
                          <rect x="305" y="120" width="8" height="30" fill="#dc2626" />
                          <rect x="320" y="110" width="8" height="40" fill="#dc2626" />
                          <rect x="335" y="125" width="8" height="25" fill="#dc2626" />
                          <rect x="350" y="115" width="8" height="35" fill="#dc2626" />
                          
                          <text x="320" y="95" textAnchor="middle" fontSize="8" fill="#dc2626">Revenue</text>
                          
                          {/* Multi-client indicators */}
                          <circle cx="50" cy="50" r="15" fill="#dc2626" opacity="0.8" />
                          <text x="50" y="55" textAnchor="middle" fontSize="8" fill="white">C1</text>
                          <circle cx="100" cy="40" r="15" fill="#ea580c" opacity="0.8" />
                          <text x="100" y="45" textAnchor="middle" fontSize="8" fill="white">C2</text>
                          <circle cx="150" cy="50" r="15" fill="#dc2626" opacity="0.8" />
                          <text x="150" y="55" textAnchor="middle" fontSize="8" fill="white">C3</text>
                          
                          {/* Data flow connections */}
                          <line x1="230" y1="100" x2="280" y2="80" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
                          <line x1="210" y1="140" x2="280" y2="120" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
                          
                          {/* Automated sync indicator */}
                          <circle cx="250" cy="220" r="20" fill="#22c55e" opacity="0.2" />
                          <circle cx="250" cy="220" r="12" fill="#22c55e" />
                          <text x="250" y="225" textAnchor="middle" fontSize="8" fill="white">SYNC</text>
                          <text x="250" y="250" textAnchor="middle" fontSize="8" fill="#22c55e">Auto-Reconciled</text>
                        </svg>
                      )}
                    </div>
                    
                    <div className="absolute bottom-6 left-6">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        {solution.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <h3 className="text-3xl mb-2 text-gray-900">{solution.title}</h3>
                    <h4 className="text-xl text-orange-600 mb-4">{solution.subtitle}</h4>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{solution.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          {feature.icon}
                          <span className="text-gray-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-fit bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      Learn More
                      <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* White Label Section */}
        <div className="mt-20">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-orange-500 to-red-500 text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl mb-4">White Label Solutions</h3>
              <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
                Both products come with complete white-labeling capabilities, allowing you to deliver these solutions under your own brand to your clients.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {whiteLabelFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 justify-center">
                    <CheckCircle size={20} className="text-orange-200 flex-shrink-0" />
                    <span className="text-orange-100">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="!bg-white text-orange-600 border-white hover:!bg-white hover:text-black hover:border-white">
                Explore White Label Options
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}