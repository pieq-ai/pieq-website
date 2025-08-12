import { motion } from "framer-motion";
import { useState } from "react";

export default function BusinessOrchestrationPie() {
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);

  const businessSlices = [
    { 
      name: "Data Analytics", 
      percentage: 25, 
      color: "#3b82f6", 
      icon: "📊",
      description: "Real-time insights & reporting"
    },
    { 
      name: "Process Automation", 
      percentage: 30, 
      color: "#ea580c", 
      icon: "⚙️",
      description: "Streamlined workflows"
    },
    { 
      name: "AI Integration", 
      percentage: 20, 
      color: "#10b981", 
      icon: "🤖",
      description: "Intelligent decision making"
    },
    { 
      name: "Security & Compliance", 
      percentage: 15, 
      color: "#8b5cf6", 
      icon: "🔒",
      description: "Enterprise-grade protection"
    },
    { 
      name: "User Experience", 
      percentage: 10, 
      color: "#f59e0b", 
      icon: "✨",
      description: "Intuitive interfaces"
    }
  ];

  const createPieSlice = (slice: typeof businessSlices[0], index: number, startAngle: number, endAngle: number) => {
    const centerX = 200;
    const centerY = 200;
    const radius = hoveredSlice === index ? 140 : 130;
    const innerRadius = 60;

    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);

    const x3 = centerX + innerRadius * Math.cos(endAngleRad);
    const y3 = centerY + innerRadius * Math.sin(endAngleRad);
    const x4 = centerX + innerRadius * Math.cos(startAngleRad);
    const y4 = centerY + innerRadius * Math.sin(startAngleRad);

    const largeArc = endAngle - startAngle > 180 ? 1 : 0;

    const pathData = `
      M ${x4} ${y4}
      L ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
      L ${x3} ${y3}
      A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4}
      Z
    `;

    const labelAngle = (startAngle + endAngle) / 2;
    const labelRadius = (radius + innerRadius) / 2;
    const labelX = centerX + labelRadius * Math.cos((labelAngle * Math.PI) / 180);
    const labelY = centerY + labelRadius * Math.sin((labelAngle * Math.PI) / 180);

    return (
      <g key={index}>
        <motion.path
          d={pathData}
          fill={slice.color}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer"
          onHoverStart={() => setHoveredSlice(index)}
          onHoverEnd={() => setHoveredSlice(null)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: hoveredSlice === index ? 1 : 0.85,
            scale: hoveredSlice === index ? 1.05 : 1
          }}
          transition={{ 
            duration: 0.3,
            delay: index * 0.1
          }}
          style={{
            filter: hoveredSlice === index ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))' : 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))'
          }}
        />
        
        {/* Slice Label */}
        <motion.text
          x={labelX}
          y={labelY}
          textAnchor="middle"
          fill="white"
          fontSize="18"
          fontWeight="600"
          className="pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {slice.icon}
        </motion.text>
      </g>
    );
  };

  const renderConnections = () => {
    return (
      <g>
        {/* AI Orchestration Lines */}
        {businessSlices.map((_, index) => {
          const angle = (index * 72 - 90) * Math.PI / 180;
          const startX = 200 + 65 * Math.cos(angle);
          const startY = 200 + 65 * Math.sin(angle);
          const endX = 200 + 120 * Math.cos(angle);
          const endY = 200 + 120 * Math.sin(angle);

          return (
            <motion.line
              key={index}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke="#3b82f6"
              strokeWidth="2"
              opacity={0.6}
              strokeDasharray="4,2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 1,
                delay: index * 0.2 + 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
            />
          );
        })}
      </g>
    );
  };

  let currentAngle = -90; // Start from top

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for modern look */}
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </radialGradient>
          
          <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          
          <filter id="modernGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background Circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1"
          strokeDasharray="3,6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Pie Slices */}
        {businessSlices.map((slice, index) => {
          const sliceAngle = (slice.percentage / 100) * 360;
          const endAngle = currentAngle + sliceAngle;
          const pieSlice = createPieSlice(slice, index, currentAngle, endAngle);
          currentAngle = endAngle;
          return pieSlice;
        })}

        {/* Connection Lines */}
        {renderConnections()}

        {/* Central AI Hub */}
        <motion.circle
          cx="200"
          cy="200"
          r="50"
          fill="url(#centerGradient)"
          stroke="url(#aiGradient)"
          strokeWidth="4"
          filter="url(#modernGlow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        />

        {/* AI Brain Animation */}
        <motion.g transform="translate(200, 200)">
          <motion.circle
            r="30"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            opacity="0.4"
            initial={{ scale: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: 2
            }}
          />
          
          <motion.text
            textAnchor="middle"
            y="3"
            fontSize="20"
            fontWeight="700"
            fill="#3b82f6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            AI
          </motion.text>
          
          <motion.text
            textAnchor="middle"
            y="18"
            fontSize="12"
            fill="#6b7280"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            Orchestra
          </motion.text>
        </motion.g>

        {/* Floating Data Particles */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * Math.PI / 180;
          const radius = 180 + (i % 2) * 25;
          const x = 200 + radius * Math.cos(angle);
          const y = 200 + radius * Math.sin(angle);
          
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill={businessSlices[i % businessSlices.length].color}
              opacity="0.6"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3 + 3,
                repeatDelay: 1
              }}
            />
          );
        })}
      </svg>

      {/* Hover Information Panel */}
      {hoveredSlice !== null && (
        <motion.div
          className="absolute top-4 right-4 bg-white rounded-lg shadow-xl p-4 max-w-xs"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: businessSlices[hoveredSlice].color }}
            />
            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                {businessSlices[hoveredSlice].name}
              </h4>
              <p className="text-xs text-gray-600">
                {businessSlices[hoveredSlice].description}
              </p>
              <p className="text-lg font-bold mt-1" style={{ color: businessSlices[hoveredSlice].color }}>
                {businessSlices[hoveredSlice].percentage}%
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}