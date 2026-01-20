import { motion } from "framer-motion";
import { useState } from "react";

export default function NetworkTopology() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const centerNodes = [
    { id: 'ai', x: 300, y: 200, label: 'AI Core', color: '#3b82f6' },
  ];

  const outerNodes = [
    { id: 'insurance', x: 150, y: 120, label: 'Insurance', color: '#ea580c' },
    { id: 'hospitality', x: 450, y: 120, label: 'Hospitality', color: '#ea580c' },
    { id: 'analytics', x: 380, y: 280, label: 'Analytics', color: '#6b7280' },
    { id: 'automation', x: 220, y: 280, label: 'Automation', color: '#6b7280' },
    { id: 'integration', x: 300, y: 80, label: 'Integrations', color: '#6b7280' },
    { id: 'workflow', x: 300, y: 320, label: 'Workflows', color: '#6b7280' }
  ];

  const allNodes = [...centerNodes, ...outerNodes];

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-accent/20">
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="aiGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
          </radialGradient>
          
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background grid pattern */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Connections from center to outer nodes */}
        {outerNodes.map((node, index) => (
          <motion.line
            key={`connection-${node.id}`}
            x1={centerNodes[0].x}
            y1={centerNodes[0].y}
            x2={node.x}
            y2={node.y}
            stroke={hoveredNode === node.id ? "#ea580c" : "#d1d5db"}
            strokeWidth={hoveredNode === node.id ? 3 : 2}
            opacity={hoveredNode === node.id ? 0.8 : 0.4}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="transition-all duration-300"
          />
        ))}

        {/* Data pulse animations */}
        {outerNodes.map((node, index) => (
          <motion.circle
            key={`pulse-${node.id}`}
            r="2"
            fill="#ea580c"
            initial={{ 
              cx: centerNodes[0].x,
              cy: centerNodes[0].y,
              opacity: 0
            }}
            animate={{ 
              cx: [centerNodes[0].x, node.x, centerNodes[0].x],
              cy: [centerNodes[0].y, node.y, centerNodes[0].y],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5 + 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Outer nodes */}
        {outerNodes.map((node, index) => (
          <motion.g
            key={node.id}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            style={{ cursor: 'pointer' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
          >
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={hoveredNode === node.id ? 18 : 15}
              fill="white"
              stroke={node.color}
              strokeWidth={hoveredNode === node.id ? 3 : 2}
              filter="url(#nodeGlow)"
              className="transition-all duration-300"
            />
            
            <text
              x={node.x}
              y={node.y + 30}
              textAnchor="middle"
              fontSize="10"
              fill="#6b7280"
              className="pointer-events-none"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Center AI node */}
        <motion.g
          onMouseEnter={() => setHoveredNode('ai')}
          onMouseLeave={() => setHoveredNode(null)}
          style={{ cursor: 'pointer' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
        >
          <motion.circle
            cx={centerNodes[0].x}
            cy={centerNodes[0].y}
            r={hoveredNode === 'ai' ? 35 : 30}
            fill="url(#aiGradient)"
            stroke="#3b82f6"
            strokeWidth={hoveredNode === 'ai' ? 4 : 3}
            filter="url(#nodeGlow)"
            className="transition-all duration-300"
          />
          
          <text
            x={centerNodes[0].x}
            y={centerNodes[0].y + 2}
            textAnchor="middle"
            fontSize="12"
            fill="#3b82f6"
            className="pointer-events-none"
          >
            🤖
          </text>
          
          <text
            x={centerNodes[0].x}
            y={centerNodes[0].y + 50}
            textAnchor="middle"
            fontSize="12"
            fill="#374151"
            className="pointer-events-none"
          >
            AI Orchestrator
          </text>
        </motion.g>

        {/* Rotating orbital ring */}
        <motion.circle
          cx={centerNodes[0].x}
          cy={centerNodes[0].y}
          r="80"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="3,6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}