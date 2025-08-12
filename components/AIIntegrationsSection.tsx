import { Card, CardContent } from "./ui/card";
import { 
  Plug, 
  Zap, 
  Network, 
  Brain,
  CheckCircle
} from 'lucide-react';

export default function AIIntegrationsSection() {
  const integrations = [
    {
      icon: <Plug className="text-orange-600" size={32} />,
      title: "Smart Connectors",
      description: "AI learns your integration patterns and suggests optimal connections between your business applications.",
      features: ["Auto-mapping data fields", "Intelligent error handling", "Pattern recognition"]
    },
    {
      icon: <Network className="text-red-600" size={32} />,
      title: "Adaptive APIs",
      description: "Dynamic API management that adjusts to changes in connected services automatically.",
      features: ["Version compatibility", "Real-time sync", "Failure recovery"]
    },
    {
      icon: <Brain className="text-orange-700" size={32} />,
      title: "Intelligent Routing",
      description: "AI-powered decision engine routes data and triggers based on context and business rules.",
      features: ["Context awareness", "Dynamic routing", "Smart prioritization"]
    }
  ];

  return (
    <section id="ai-integrations" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <Zap className="text-orange-600" size={16} />
            <span className="text-sm text-gray-600">AI-Powered Technology</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Intelligent Integrations That
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
              Think for Themselves
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Move beyond simple connections. Our AI-powered integration engine learns, adapts, and optimizes your app ecosystems automatically.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {integrations.map((integration, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {integration.icon}
                </div>
                <h3 className="text-xl mb-4 group-hover:text-orange-600 transition-colors">
                  {integration.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {integration.description}
                </p>
                <div className="space-y-3">
                  {integration.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}