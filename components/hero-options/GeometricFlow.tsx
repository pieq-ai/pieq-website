import { motion } from "framer-motion";

export default function GeometricFlow() {
  const steps = [
    { label: 'Collect', icon: '📥', color: '#6b7280' },
    { label: 'Process', icon: '⚙️', color: '#6b7280' },
    { label: 'Analyze', icon: '🔍', color: '#6b7280' },
    { label: 'Optimize', icon: '📈', color: '#6b7280' },
    { label: 'Execute', icon: '✅', color: '#6b7280' }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 via-orange-50/20 to-blue-accent/20">
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b7280" stopOpacity="0.1" />
            <stop offset="25%" stopColor="#6b7280" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#6b7280" stopOpacity="0.2" />
            <stop offset="75%" stopColor="#6b7280" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#6b7280" stopOpacity="0.1" />
          </linearGradient>
          
          <filter id="subtleGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background Flow Path */}
        <motion.path
          d="M 80 200 Q 180 150 280 180 Q 380 210 480 190 Q 520 185 540 180"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="40"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Connecting Lines */}
        <motion.path
          d="M 80 200 Q 180 150 280 180 Q 380 210 480 190 Q 520 185 540 180"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeDasharray="4,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Process Steps */}
        {steps.map((step, index) => {
          const x = 80 + index * 120;
          const y = index % 2 === 0 ? 200 : 180;
          
          return (
            <motion.g
              key={step.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: index * 0.3 + 1,
                type: "spring",
                stiffness: 200
              }}
            >
              {/* Step Circle */}
              <motion.circle
                cx={x}
                cy={y}
                r="25"
                fill="white"
                stroke={step.color}
                strokeWidth="3"
                filter="url(#subtleGlow)"
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
              />
              
              {/* Step Icon */}
              <text
                x={x}
                y={y + 2}
                textAnchor="middle"
                fontSize="14"
                className="pointer-events-none"
              >
                {step.icon}
              </text>
              
              {/* Step Label */}
              <text
                x={x}
                y={y + 45}
                textAnchor="middle"
                fontSize="12"
                fill="#4b5563"
                className="pointer-events-none"
              >
                {step.label}
              </text>
              
              {/* Step Number */}
              <motion.circle
                cx={x + 18}
                cy={y - 18}
                r="8"
                fill={step.color}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 1.5 }}
              />
              
              <text
                x={x + 18}
                y={y - 15}
                textAnchor="middle"
                fontSize="8"
                fill="white"
                className="pointer-events-none"
              >
                {index + 1}
              </text>
            </motion.g>
          );
        })}

        {/* Flowing Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            r="3"
            fill="#6b7280"
            opacity="0.7"
            initial={{ 
              cx: 80,
              cy: 200
            }}
            animate={{ 
              cx: [80, 200, 320, 440, 540],
              cy: [200, 150, 180, 210, 180],
              opacity: [0, 1, 1, 1, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5 + 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Title */}
        <motion.text
          x="300"
          y="100"
          textAnchor="middle"
          fontSize="18"
          fill="#4b5563"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          Intelligent Process Automation
        </motion.text>

        {/* Subtitle */}
        <motion.text
          x="300"
          y="320"
          textAnchor="middle"
          fontSize="14"
          fill="#6b7280"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          Streamlined • Automated • Optimized
        </motion.text>
      </svg>
    </div>
  );
}