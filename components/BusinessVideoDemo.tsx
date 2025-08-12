import { useState, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

const professionalImages = [
  {
    id: 1,
    title: "Professional Business Focus",
    imageUrl: "https://images.unsplash.com/photo-1739303987902-eccc301b09fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwbGFwdG9wJTIwb2ZmaWNlJTIwbW9kZXJufGVufDF8fHx8MTc1NDkwODY5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: 4000
  },
  {
    id: 2,
    title: "Data Analytics & Insights",
    imageUrl: "https://images.unsplash.com/photo-1578070581071-d9b52bf80993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljcyUyMGNvbXB1dGVyJTIwc2NyZWVuJTIwb2ZmaWNlfGVufDF8fHx8MTc1NDkwODcwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: 4000
  },
  {
    id: 3,
    title: "Modern Workspace Collaboration",
    imageUrl: "https://images.unsplash.com/photo-1573497701175-00c200fd57f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NTQ5MDg3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: 4000
  },
  {
    id: 4,
    title: "Strategic Business Analysis",
    imageUrl: "https://images.unsplash.com/photo-1661983228573-731da056ea20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjB3b3JraW5nJTIwbGFwdG9wJTIwZGF0YSUyMGFuYWx5c2lzfGVufDF8fHx8MTc1NDkwODcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: 4000
  },
  {
    id: 5,
    title: "Innovation-Driven Environment",
    imageUrl: "https://images.unsplash.com/photo-1732284081090-8880f1e1905b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMG9mZmljZSUyMHNwYWNlJTIwYnVzaW5lc3MlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NDkwODcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: 4000
  },
  {
    id: 6,
    title: "Professional Excellence",
    imageUrl: "https://images.unsplash.com/photo-1523289217630-0dd16184af8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJlc2VudGF0aW9uJTIwb2ZmaWNlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NDkwODcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: 4000
  }
];

export default function BusinessVideoDemo() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const currentImage = professionalImages[currentScene];
  const totalScenes = professionalImages.length;

  // Auto-advance scenes
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (currentImage.duration / 100));
        if (newProgress >= 100) {
          // Move to next scene
          setCurrentScene(prev => (prev + 1) % totalScenes);
          return 0;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, currentScene, currentImage.duration, totalScenes]);

  // Reset progress when scene changes
  useEffect(() => {
    setProgress(0);
  }, [currentScene]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentScene(prev => prev === 0 ? totalScenes - 1 : prev - 1);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentScene(prev => (prev + 1) % totalScenes);
    setProgress(0);
  };

  const handleSceneSelect = (sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl text-gray-900 mb-4">
              Professional Business Excellence
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the modern workplace where innovation meets efficiency. 
              Clean, professional environments driving business transformation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Video Container */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Image Display */}
            <div className="relative aspect-video bg-gray-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScene}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={currentImage.imageUrl}
                    alt={currentImage.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Minimal Scene Indicator */}
              <div className="absolute top-6 left-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1"
                >
                  <span className="text-white text-sm">
                    {currentScene + 1} / {totalScenes}
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Controls */}
            <div className="p-6">
              {/* Progress Bar */}
              <div className="mb-4">
                <Progress 
                  value={progress} 
                  className="h-2 bg-gray-200"
                />
              </div>

              {/* Title */}
              <div className="mb-6 text-center">
                <motion.h3
                  key={currentScene}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl text-gray-900"
                >
                  {currentImage.title}
                </motion.h3>
              </div>

              {/* Control Buttons */}
              <div className="flex justify-center items-center gap-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePrevious}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <SkipBack size={20} />
                </Button>

                <Button
                  onClick={handlePlayPause}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full w-16 h-16"
                >
                  <motion.div
                    key={isPlaying ? 'pause' : 'play'}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {isPlaying ? (
                      <Pause size={24} fill="currentColor" />
                    ) : (
                      <Play size={24} fill="currentColor" />
                    )}
                  </motion.div>
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleNext}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <SkipForward size={20} />
                </Button>
              </div>
            </div>

            {/* Scene Navigation Dots */}
            <div className="px-6 pb-6">
              <div className="flex justify-center gap-2">
                {professionalImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSceneSelect(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentScene === index
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl text-gray-900 mb-4">
              Transform Your Business Environment
            </h2>
            <p className="text-gray-600 mb-8">
              Experience professional excellence with PieQ's AI-powered platform. 
              Join forward-thinking companies shaping the future of business operations.
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                Explore PieQ Platform
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-orange-300 text-orange-600 hover:bg-orange-50"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}