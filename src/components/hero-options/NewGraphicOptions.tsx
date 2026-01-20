import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import AINetworkOrchestration from "./AINetworkOrchestration";
import BusinessDashboard from "./BusinessDashboard";
import GeometricFlow from "./GeometricFlow";

export default function NewGraphicOptions() {
  const [currentOption, setCurrentOption] = useState(0);
  
  const graphicOptions = [
    {
      id: 'current',
      name: 'Current: Geometric Flow',
      description: 'Clean process flow with gray theme',
      component: <GeometricFlow />,
      features: ['Process workflow', 'Step-by-step automation', 'Minimalist design'],
      status: 'current'
    },
    {
      id: 'ai-network',
      name: 'AI Neural Network',
      description: 'Dynamic AI-powered business orchestration',
      component: <AINetworkOrchestration />,
      features: ['Interactive AI nodes', 'Real-time connections', 'Orange/blue theme'],
      status: 'new'
    },
    {
      id: 'dashboard',
      name: 'Business Dashboard',
      description: 'Professional metrics and pie chart visualization',
      component: <BusinessDashboard />,
      features: ['Live metrics', 'Interactive pie chart', 'Professional UI'],
      status: 'new'
    }
  ];

  const currentGraphic = graphicOptions[currentOption];

  const nextOption = () => {
    setCurrentOption((prev) => (prev + 1) % graphicOptions.length);
  };

  const prevOption = () => {
    setCurrentOption((prev) => prev === 0 ? graphicOptions.length - 1 : prev - 1);
  };

  const selectOption = (index: number) => {
    setCurrentOption(index);
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-50/20 via-white to-blue-accent/10 rounded-2xl p-6">
      {/* Header */}
      <div className="mb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-2"
        >
          <Sparkles className="text-orange-500" size={20} />
          <h3 className="text-xl text-gray-900">Hero Graphics Options</h3>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-600"
        >
          Choose your preferred hero section graphic design
        </motion.p>
      </div>

      {/* Main Preview Area */}
      <div className="relative mb-6">
        {/* Navigation Buttons */}
        <button
          onClick={prevOption}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>

        <button
          onClick={nextOption}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>

        {/* Graphic Preview */}
        <div className="relative h-64 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentOption}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              {currentGraphic.component}
            </motion.div>
          </AnimatePresence>

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                currentGraphic.status === 'current' 
                  ? 'bg-gray-100 text-gray-700' 
                  : 'bg-orange-100 text-orange-700'
              }`}
            >
              {currentGraphic.status === 'current' ? (
                <CheckCircle size={12} />
              ) : (
                <Sparkles size={12} />
              )}
              {currentGraphic.status === 'current' ? 'Current' : 'New Design'}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Option Info */}
      <motion.div
        key={currentOption}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <h4 className="text-lg text-gray-900 mb-2">{currentGraphic.name}</h4>
        <p className="text-gray-600 text-sm mb-3">{currentGraphic.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {currentGraphic.features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-accent text-blue-primary text-xs rounded-full border border-blue-light/20"
            >
              {feature}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Option Selector Dots */}
      <div className="flex justify-center gap-2 mb-6">
        {graphicOptions.map((_, index) => (
          <button
            key={index}
            onClick={() => selectOption(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentOption === index 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-3">
        {currentGraphic.status === 'current' ? (
          <Button 
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Keep Current Design
          </Button>
        ) : (
          <Button 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            onClick={() => {
              alert(`Great choice! 🎉\n\nThe "${currentGraphic.name}" has been selected for your hero section.\n\nThis design features:\n${currentGraphic.features.map(f => `• ${f}`).join('\n')}\n\nWould you like me to integrate this graphic into your hero section?`);
            }}
          >
            ✨ Use This Design
          </Button>
        )}
        
        <Button 
          variant="outline"
          className="border-orange-300 text-orange-600 hover:bg-orange-50"
          onClick={() => {
            alert("🎨 Custom Design Request\n\nI can create additional graphic options based on your preferences!\n\nWhat specific style, elements, or concepts would you like me to explore for your hero section?");
          }}
        >
          Request Custom Design
        </Button>
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-center text-xs text-gray-500"
      >
        {currentOption + 1} of {graphicOptions.length} options • 
        <span className="text-orange-600"> Orange/Blue Theme Compatible</span>
      </motion.div>
    </div>
  );
}