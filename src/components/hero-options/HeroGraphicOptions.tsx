import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import MinimalistWorkflow from "./MinimalistWorkflow";
import NetworkTopology from "./NetworkTopology";
import DashboardMockup from "./DashboardMockup";
import GeometricFlow from "./GeometricFlow";
import AbstractSimple from "./AbstractSimple";

const graphicOptions = [
  {
    id: 'minimalist-workflow',
    title: 'Minimalist Workflow',
    description: 'Clean process flow with subtle animations and professional color scheme',
    component: MinimalistWorkflow,
    characteristics: ['Professional', 'Clean', 'Process-focused', 'Subtle colors']
  },
  {
    id: 'network-topology',
    title: 'Network Topology',
    description: 'AI-centered network showing business connections and data flow',
    component: NetworkTopology,
    characteristics: ['Technical', 'Network-focused', 'AI-centric', 'Interactive']
  },
  {
    id: 'dashboard-mockup',
    title: 'Dashboard Preview',
    description: 'Realistic dashboard interface showing business analytics and metrics',
    component: DashboardMockup,
    characteristics: ['Realistic', 'Dashboard-style', 'Data-focused', 'Familiar UI']
  },
  {
    id: 'geometric-flow',
    title: 'Geometric Process Flow',
    description: 'Step-by-step process visualization with geometric shapes and flow',
    component: GeometricFlow,
    characteristics: ['Sequential', 'Clear steps', 'Modern design', 'Process clarity']
  },
  {
    id: 'abstract-simple',
    title: 'Abstract Simple',
    description: 'Minimalist abstract representation with clean lines and subtle colors',
    component: AbstractSimple,
    characteristics: ['Minimal', 'Abstract', 'Elegant', 'Timeless']
  }
];

export default function HeroGraphicOptions() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl text-gray-800 mb-4">Hero Graphic Options for PieQ</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are 5 different graphic options for your hero section, each with a more professional and less colorful approach than the current pie chart.
          </p>
        </div>

        {/* Preview Mode Toggle */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={() => setPreviewMode(!previewMode)}
            variant={previewMode ? "default" : "outline"}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            {previewMode ? 'Show Grid View' : 'Preview Selected'}
          </Button>
        </div>

        {previewMode && selectedOption ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <div className="h-96 lg:h-[28rem] xl:h-[32rem]">
              {(() => {
                const option = graphicOptions.find(opt => opt.id === selectedOption);
                if (!option) return null;
                const Component = option.component;
                return <Component />;
              })()}
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xl text-gray-800">
                {graphicOptions.find(opt => opt.id === selectedOption)?.title}
              </h3>
            </div>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {graphicOptions.map((option, index) => {
              const Component = option.component;
              
              return (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedOption === option.id 
                        ? 'ring-2 ring-orange-500 shadow-lg' 
                        : 'hover:ring-1 hover:ring-gray-300'
                    }`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 mb-4 bg-gray-50 rounded-lg overflow-hidden">
                        <Component />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm text-gray-600">Characteristics:</div>
                        <div className="flex flex-wrap gap-1">
                          {option.characteristics.map((char) => (
                            <span
                              key={char}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}

        {selectedOption && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <div className="bg-white rounded-lg p-6 shadow-md max-w-md mx-auto">
              <h3 className="text-lg text-gray-800 mb-2">Selected Option</h3>
              <p className="text-orange-600 mb-4">
                {graphicOptions.find(opt => opt.id === selectedOption)?.title}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Ready to implement this graphic in your hero section! 
                Just let me know and I'll replace the current pie chart.
              </p>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => setPreviewMode(true)}
              >
                Preview Full Size
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}