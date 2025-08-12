import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { 
  MessageSquare, 
  Bot, 
  Sparkles, 
  Users,
  ArrowRight,
  Mic,
  FileText,
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function AIChatSection() {
  const chatFeatures = [
    {
      icon: <Bot className="text-orange-600" size={32} />,
      title: "Intelligent Process Assistant",
      description: "AI-powered chatbot that guides users through complex workflows and answers process-related questions in real-time."
    },
    {
      icon: <Sparkles className="text-red-600" size={32} />,
      title: "Context-Aware Responses",
      description: "Advanced NLP understands user intent and provides relevant, actionable guidance based on current workflow context."
    },
    {
      icon: <Users className="text-orange-700" size={32} />,
      title: "Multi-User Collaboration",
      description: "Enable team conversations, handoffs, and collaborative problem-solving directly within your processes."
    }
  ];

  const conversationExample = [
    {
      type: "user",
      message: "I need help with the insurance claim approval process",
      time: "2:30 PM"
    },
    {
      type: "ai",
      message: "I can help you with that! I see you're working on claim #CLM-2024-1847. What specific step do you need assistance with?",
      time: "2:30 PM",
      actions: ["Review Documents", "Check Policy", "Contact Adjuster"]
    },
    {
      type: "user", 
      message: "The medical documentation seems incomplete",
      time: "2:31 PM"
    },
    {
      type: "ai",
      message: "I've identified 3 missing documents for this claim type. I can automatically request these from the healthcare provider or guide you through manual submission. Which would you prefer?",
      time: "2:31 PM",
      actions: ["Auto-Request", "Manual Guide", "Review Requirements"]
    }
  ];

  return (
    <section id="ai-chat" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <MessageSquare className="text-orange-600" size={16} />
            <span className="text-sm text-gray-600">Conversational AI</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Your AI Assistant for
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
              Every Process Step
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower your team with intelligent conversational AI that provides instant guidance, automates routine tasks, and enhances user experience across all workflows.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {chatFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-4 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-3xl mb-6">
              Instant Help,
              <span className="text-orange-600 block">Intelligent Guidance</span>
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Our conversational AI integrates seamlessly into your workflows, providing contextual assistance that understands your business processes and user needs.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>24/7 availability</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Multi-language support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Voice & text interface</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Process-specific knowledge</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Escalation to human agents</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Learning from interactions</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Mic className="text-orange-600" size={16} />
                  <span className="text-sm text-gray-600">Voice Commands</span>
                </div>
                <p className="text-xs text-gray-500">Natural language processing</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="text-orange-600" size={16} />
                  <span className="text-sm text-gray-600">Document Analysis</span>
                </div>
                <p className="text-xs text-gray-500">Instant document insights</p>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-lg transition-all">
              Try AI Assistant
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                  <Bot className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-lg">PieQ Assistant</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Online</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 h-80 overflow-y-auto">
                {conversationExample.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${message.type === 'user' ? 'order-1' : 'order-2'}`}>
                      <div className={`px-4 py-3 rounded-2xl ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <p className="text-sm">{message.message}</p>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock size={12} className="text-gray-400" />
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                      {message.actions && (
                        <div className="flex gap-2 mt-3">
                          {message.actions.map((action, idx) => (
                            <Button key={idx} variant="outline" size="sm" className="text-xs">
                              {action}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MessageSquare className="text-gray-400" size={16} />
                  <span className="text-sm text-gray-500 flex-1">Type your message...</span>
                  <Button size="sm" className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}