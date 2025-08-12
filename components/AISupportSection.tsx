import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { 
  LifeBuoy, 
  BookOpen, 
  Video, 
  MessageCircle,
  ArrowRight,
  Search,
  Lightbulb,
  Users,
  Clock,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

export default function AISupportSection() {
  const supportFeatures = [
    {
      icon: <LifeBuoy className="text-orange-600" size={32} />,
      title: "AI-Powered Help Desk",
      description: "Intelligent support system that learns from every interaction to provide faster, more accurate solutions.",
      stats: "95% issue resolution rate"
    },
    {
      icon: <BookOpen className="text-red-600" size={32} />,
      title: "Smart Knowledge Base",
      description: "Dynamic documentation that adapts to your usage patterns and suggests relevant articles proactively.",
      stats: "2x faster problem solving"
    },
    {
      icon: <Video className="text-orange-700" size={32} />,
      title: "Interactive Training Hub",
      description: "Personalized learning paths with AI-generated tutorials based on your role and skill gaps.",
      stats: "3x faster onboarding"
    }
  ];

  const supportMetrics = [
    { label: "Average Response Time", value: "< 30 seconds", icon: Clock },
    { label: "First-Call Resolution", value: "89%", icon: CheckCircle },
    { label: "User Satisfaction", value: "4.8/5", icon: TrendingUp },
    { label: "Active Support Articles", value: "2,500+", icon: BookOpen }
  ];

  return (
    <section id="ai-support" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 mb-6">
            <LifeBuoy className="text-orange-600" size={16} />
            <span className="text-sm text-orange-700">Intelligent Support</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Support That Anticipates
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
              Your Every Need
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience next-generation customer support powered by AI that learns from every interaction to deliver personalized, proactive assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {supportFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-4 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-700">{feature.stats}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl mb-6">
                Get Help Before You
                <span className="text-orange-600 block">Even Ask for It</span>
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Our AI support system monitors user behavior patterns and proactively offers assistance when it detects potential issues or learning opportunities.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Search className="text-orange-600" size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">Predictive Search</h4>
                    <p className="text-gray-600">AI suggests solutions before you finish typing your query</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Lightbulb className="text-orange-600" size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">Contextual Tips</h4>
                    <p className="text-gray-600">Smart suggestions appear exactly when and where you need them</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Users className="text-orange-600" size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">Community Insights</h4>
                    <p className="text-gray-600">Learn from solutions that worked for users in similar situations</p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-lg transition-all">
                Explore Support Center
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            <div className="relative">
              {/* Support Dashboard Mockup */}
              <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg">Support Dashboard</h4>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="text-orange-600 mt-0.5" size={16} />
                      <div>
                        <p className="text-sm text-orange-800 mb-1">
                          <strong>Proactive Tip:</strong> Based on your current workflow, here's a shortcut that could save you 5 minutes per task.
                        </p>
                        <Button size="sm" variant="ghost" className="text-orange-600 p-0 h-auto">
                          Show me how
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="text-gray-600" size={16} />
                        <span className="text-sm text-gray-600">Recent Tickets</span>
                      </div>
                      <p className="text-lg">3 resolved</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="text-gray-600" size={16} />
                        <span className="text-sm text-gray-600">Articles Read</span>
                      </div>
                      <p className="text-lg">12 today</p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h5 className="text-sm mb-3">Suggested for You</h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-xs">Advanced Workflow Tips</span>
                        <ArrowRight size={12} className="text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-xs">API Integration Guide</span>
                        <ArrowRight size={12} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportMetrics.map((metric, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <metric.icon className="text-orange-600 mx-auto mb-4" size={32} />
                <div className="text-2xl mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl mb-4">Ready to Experience Intelligent Support?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our beta program and discover how AI-powered support can transform your user experience. Get priority access to our latest features and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-lg transition-all">
              Join Beta Program
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
              Watch Demo Video
              <Video size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}