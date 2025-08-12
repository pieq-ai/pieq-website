import { CheckCircle } from 'lucide-react';

export default function FloatingUIElements() {
  return (
    <>
      {/* AI Orchestrating - Top Left */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 border border-blue-primary/20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-primary rounded-full animate-pulse"></div>
          <div>
            <div className="text-xs text-gray-600">AI Orchestrating</div>
            <div className="text-sm text-blue-primary">Live</div>
          </div>
        </div>
      </div>
      
      {/* Process Efficiency - Bottom Right */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 border border-orange-500/20">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-50 rounded-lg flex items-center justify-center">
            <CheckCircle size={12} className="text-orange-600" />
          </div>
          <div>
            <div className="text-xs text-gray-600">Process Efficiency</div>
            <div className="text-sm text-orange-600">+67%</div>
          </div>
        </div>
      </div>
    </>
  );
}