import { motion } from "framer-motion";

export default function AbstractSimple() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-orange-50/20">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="centralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
          </linearGradient>
          
          <filter id="cleanGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background Circles */}
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="#f3f4f6"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        
        <motion.circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Central Hub */}
        <motion.circle
          cx="200"
          cy="200"
          r="40"
          fill="url(#centralGradient)"
          stroke="#6b7280"
          strokeWidth="2"
          filter="url(#cleanGlow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
        />

        {/* Central Icon */}
        <motion.text
          x="200"
          y="210"
          textAnchor="middle"
          fontSize="20"
          fill="#374151"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          🎯
        </motion.text>

        {/* Orbital Elements */}
        {[0, 60, 120, 180, 240, 300].map((angle, index) => {
          const radius = 120;
          const x = 200 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 200 + radius * Math.sin((angle * Math.PI) / 180);
          
          return (
            <motion.g key={angle}>
              <motion.circle
                cx={x}
                cy={y}
                r="8"
                fill="white"
                stroke={index % 2 === 0 ? "#ea580c" : "#3b82f6"}
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 1.2 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              />
              
              {/* Connecting Lines */}
              <motion.line
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="#e5e7eb"
                strokeWidth="1"
                strokeDasharray="2,4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.5 + index * 0.05, duration: 0.5 }}
              />
            </motion.g>
          );
        })}

        {/* Rotating Ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="#f1f5f9"
          strokeWidth="1"
          strokeDasharray="3,6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Labels */}
        <motion.text
          x="200"
          y="70"
          textAnchor="middle"
          fontSize="16"
          fill="#374151"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          Business Orchestration
        </motion.text>

        <motion.text
          x="200"
          y="340"
          textAnchor="middle"
          fontSize="12"
          fill="#6b7280"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          AI • Automation • Integration
        </motion.text>
      </svg>
    </div>
  );
}