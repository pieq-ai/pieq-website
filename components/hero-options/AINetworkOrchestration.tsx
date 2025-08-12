import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AINetworkOrchestration() {
  const [activeNode, setActiveNode] = useState(0);

  // Define business process nodes
  const nodes = [
    { id: 'insurance', label: 'Insurance', x: 150, y: 120, icon: '🛡️', color: '#ea580c' },
    { id: 'hospitality', label: 'Hospitality', x: 450, y: 120, icon: '🏨', color: '#3b82f6' },
    { id: 'analytics', label: 'Analytics', x: 300, y: 80, icon: '📊', color: '#f97316' },
    { id: 'automation', label: 'Automation', x: 200, y: 200, icon: '⚙️', color: '#1e40af' },
    { id: 'ai-core', label: 'AI Core', x: 300, y: 160, icon: '🧠', color: '#dc2626' },
    { id: 'reporting', label: 'Reporting', x: 400, y: 200, icon: '📈', color: '#ea580c' },
    { id: 'workflow', label: 'Workflow', x: 300, y: 240, icon: '🔄', color: '#3b82f6' }
  ];

  // Define connections between nodes
  const connections = [
    { from: 'ai-core', to: 'insurance', strength: 0.9 },
    { from: 'ai-core', to: 'hospitality', strength: 0.85 },
    { from: 'ai-core', to: 'analytics', strength: 0.95 },
    { from: 'ai-core', to: 'automation', strength: 0.9 },
    { from: 'ai-core', to: 'reporting', strength: 0.8 },
    { from: 'ai-core', to: 'workflow', strength: 0.88 },
    { from: 'analytics', to: 'insurance', strength: 0.7 },
    { from: 'analytics', to: 'hospitality', strength: 0.7 },
    { from: 'automation', to: 'workflow', strength: 0.85 },
    { from: 'reporting', to: 'workflow', strength: 0.75 }
  ];

  // Cycle through active nodes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [nodes.length]);

  const getNodeById = (id: string) => nodes.find(node => node.id === id);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-50/30 via-blue-accent/20 to-orange-50/40">
      <svg
        viewBox="0 0 600 320"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for connections */}
          <linearGradient id="connectionGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
          </linearGradient>
          
          <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.4" />
          </linearGradient>

          {/* Glow filters */}
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="activeGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background pattern */}
        <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="#ea580c" opacity="0.1" />
        </pattern>
        <rect width="600" height="320" fill="url(#gridPattern)" />

        {/* Neural network connections */}
        {connections.map((connection, index) => {
          const fromNode = getNodeById(connection.from);
          const toNode = getNodeById(connection.to);
          if (!fromNode || !toNode) return null;

          const isActive = activeNode === nodes.findIndex(n => n.id === connection.from) || 
                          activeNode === nodes.findIndex(n => n.id === connection.to);

          return (
            <motion.g key={`connection-${index}`}>
              {/* Connection line */}
              <motion.line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={isActive ? "url(#connectionGradient1)" : "url(#connectionGradient2)"}
                strokeWidth={isActive ? "3" : "2"}
                opacity={isActive ? 0.9 : 0.4}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />

              {/* Data flow animation */}
              <motion.circle
                r="4"
                fill={isActive ? "#ea580c" : "#3b82f6"}
                opacity={isActive ? 0.8 : 0.3}
                initial={{ 
                  cx: fromNode.x,
                  cy: fromNode.y
                }}
                animate={{ 
                  cx: [fromNode.x, toNode.x, fromNode.x],
                  cy: [fromNode.y, toNode.y, fromNode.y]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          );
        })}

        {/* Process nodes */}
        {nodes.map((node, index) => {
          const isActive = activeNode === index;
          const isCoreAI = node.id === 'ai-core';
          
          return (
            <motion.g
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: index * 0.2,
                type: "spring",
                stiffness: 200
              }}
            >
              {/* Node pulse ring for active state */}
              {isActive && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="35"
                  fill="none"
                  stroke={node.color}
                  strokeWidth="2"
                  opacity="0.6"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 0, 0.6]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}

              {/* Main node circle */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isCoreAI ? "28" : "22"}
                fill="white"
                stroke={node.color}
                strokeWidth={isActive ? "4" : "3"}
                filter={isActive ? "url(#activeGlow)" : "url(#nodeGlow)"}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
                animate={{
                  scale: isActive ? 1.1 : 1,
                  strokeWidth: isActive ? 4 : 3
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Node icon */}
              <text
                x={node.x}
                y={node.y + 2}
                textAnchor="middle"
                fontSize={isCoreAI ? "18" : "16"}
                className="pointer-events-none select-none"
              >
                {node.icon}
              </text>

              {/* Node label */}
              <text
                x={node.x}
                y={node.y + (isCoreAI ? 45 : 40)}
                textAnchor="middle"
                fontSize="11"
                fill={isActive ? node.color : "#6b7280"}
                className="pointer-events-none select-none"
                style={{ fontWeight: isActive ? '600' : '500' }}
              >
                {node.label}
              </text>

              {/* Core AI special indicator */}
              {isCoreAI && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="35"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              )}
            </motion.g>
          );
        })}

        {/* Title */}
        <motion.text
          x="300"
          y="40"
          textAnchor="middle"
          fontSize="20"
          fill="#1f2937"
          style={{ fontWeight: '600' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          AI-Powered Business Orchestration
        </motion.text>

        {/* Subtitle */}
        <motion.text
          x="300"
          y="300"
          textAnchor="middle"
          fontSize="12"
          fill="#6b7280"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Real-time • Intelligent • Adaptive
        </motion.text>

        {/* Data flow indicators */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <rect x="20" y="20" width="80" height="20" rx="10" fill="#ea580c" fillOpacity="0.1" stroke="#ea580c" strokeWidth="1"/>
          <text x="60" y="32" textAnchor="middle" fontSize="10" fill="#ea580c">Data Flow</text>
        </motion.g>
      </svg>
    </div>
  );
}