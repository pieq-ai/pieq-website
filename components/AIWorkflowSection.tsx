import { Button } from "./ui/button";
import { 
  Workflow, 
  ArrowRight,
  PlayCircle,
  Settings
} from 'lucide-react';

export default function AIWorkflowSection() {


  const workflowSteps = [
    {
      step: "01",
      title: "Design Visually",
      description: "Create workflows with our intuitive drag-and-drop builder"
    },
    {
      step: "02", 
      title: "AI Enhancement",
      description: "Our AI suggests optimizations and automation opportunities"
    },
    {
      step: "03",
      title: "Deploy & Monitor",
      description: "Launch workflows with real-time monitoring and analytics"
    },
    {
      step: "04",
      title: "Continuous Learning",
      description: "AI learns from execution patterns and suggests improvements"
    }
  ];

  return (
    <section id="ai-workflow" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 mb-6">
            <Workflow className="text-orange-600" size={16} />
            <span className="text-sm text-orange-700">Smart Automation</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Workflows That Learn,
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
              Adapt & Improve
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business processes with AI-powered workflows that become smarter over time, automatically optimizing for peak performance.
          </p>
        </div>



        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl mb-6">
              From Idea to Execution
              <span className="text-orange-600 block">in Minutes, Not Months</span>
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Our AI-powered workflow builder transforms complex business processes into elegant automated solutions. No coding required, unlimited possibilities.
            </p>
            
            <div className="space-y-6">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-lg transition-all mr-4">
                Try Workflow Builder
                <PlayCircle size={16} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                View Examples
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
              {/* Workflow Visualization */}
              <svg viewBox="0 0 300 400" className="w-full h-auto">
                <defs>
                  <linearGradient id="workflowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ea580c" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>

                {/* Workflow Steps */}
                <rect x="100" y="50" width="100" height="40" rx="8" fill="url(#workflowGradient)" />
                <text x="150" y="75" textAnchor="middle" fontSize="12" fill="white">Start Process</text>

                {/* Decision Diamond */}
                <path d="M150 120 L180 150 L150 180 L120 150 Z" fill="#f59e0b" />
                <text x="150" y="155" textAnchor="middle" fontSize="10" fill="white">AI Check</text>

                {/* Parallel Processes */}
                <rect x="50" y="220" width="80" height="35" rx="6" fill="#10b981" />
                <text x="90" y="242" textAnchor="middle" fontSize="10" fill="white">Process A</text>

                <rect x="170" y="220" width="80" height="35" rx="6" fill="#8b5cf6" />
                <text x="210" y="242" textAnchor="middle" fontSize="10" fill="white">Process B</text>

                {/* Final Step */}
                <rect x="100" y="300" width="100" height="40" rx="8" fill="url(#workflowGradient)" />
                <text x="150" y="325" textAnchor="middle" fontSize="12" fill="white">Complete</text>

                {/* Flow Arrows */}
                <path d="M150 95 L150 115" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M135 165 L105 205" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M165 165 L195 205" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M90 260 L135 285" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M210 260 L165 285" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Arrow Marker */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ea580c" />
                  </marker>
                </defs>

                {/* AI Enhancement Indicators */}
                <circle cx="250" cy="150" r="3" fill="#ea580c">
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="240" r="3" fill="#ea580c">
                  <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="320" r="3" fill="#ea580c">
                  <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl lg:text-3xl mb-4">
                Ready to Transform Your Processes?
              </h3>
              <p className="text-orange-100 text-lg">
                Join beta partners already seeing 40% efficiency gains with AI-powered workflow automation. Start your journey to intelligent process management today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <Button variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                Start Free Trial
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
                <Settings size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}