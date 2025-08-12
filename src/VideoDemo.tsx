import { useState } from "react";
import { ArrowLeft, CheckCircle, Users, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import BusinessVideoDemo from "../components/BusinessVideoDemo";

export default function VideoDemo() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleEmbedConfirmation = () => {
    setShowConfirmation(true);
    // Here you would normally integrate the video into the hero section
    console.log("User confirmed - ready to embed into hero section");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-accent">
      {/* Header with back navigation */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Main Site
            </Button>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-xl text-gray-900">Video Demo Preview</h1>
          </motion.div>

          {!showConfirmation && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <Button
                onClick={handleEmbedConfirmation}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                <CheckCircle size={18} className="mr-2" />
                Approve for Hero Section
              </Button>
            </motion.div>
          )}
        </div>

        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4"
          >
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-green-600" />
              <div>
                <h3 className="text-green-800">Video Approved!</h3>
                <p className="text-green-700 text-sm">
                  Ready to integrate this dynamic business video into your hero section. 
                  The video will enhance credibility and showcase real transformation stories.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <Users className="text-orange-500 mb-3" size={24} />
            <h3 className="text-lg text-gray-900 mb-2">Real Business People</h3>
            <p className="text-gray-600 text-sm">
              Authentic testimonials from executives across different departments and industries
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <TrendingUp className="text-blue-primary mb-3" size={24} />
            <h3 className="text-lg text-gray-900 mb-2">Measurable Results</h3>
            <p className="text-gray-600 text-sm">
              Real metrics and KPIs showing PieQ's transformative impact on business operations
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <Award className="text-green-600 mb-3" size={24} />
            <h3 className="text-lg text-gray-900 mb-2">Industry Credibility</h3>
            <p className="text-gray-600 text-sm">
              Professional scenarios from insurance, hospitality, and enterprise operations
            </p>
          </div>
        </motion.div>
      </div>

      {/* Main Video Component */}
      <BusinessVideoDemo />

      {/* Technical Details */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
        >
          <h2 className="text-2xl text-gray-900 mb-6">Video Features & Integration</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg text-orange-600 mb-4">Dynamic Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Interactive video player with play/pause controls
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Scene navigation for different departments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Real-time metrics and KPI displays
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Smooth transitions and professional styling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Mobile-responsive design
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg text-blue-primary mb-4">Business Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Builds immediate credibility and trust
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Shows real transformation across industries
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Demonstrates measurable ROI and results
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Engages visitors with interactive content
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Differentiates from static testimonials
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-blue-accent rounded-lg border border-orange-200/50">
            <h4 className="text-lg text-gray-900 mb-3">Hero Section Integration</h4>
            <p className="text-gray-700 mb-4">
              This video can replace or complement the current geometric flow graphic in your hero section, 
              providing a more engaging and credible demonstration of PieQ's business value.
            </p>
            <div className="flex gap-4 flex-wrap">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                Enhanced Credibility
              </span>
              <span className="bg-blue-light text-blue-primary px-3 py-1 rounded-full text-sm">
                Interactive Experience
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Proven Results
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}