import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AINetworkOrchestration() {
  const [activeNode, setActiveNode] = useState(0);

  // Define business process nodes
  const nodes = [
    { id: 'insurance', label: 'Insurance', x: 150, y: 120, icon: '🛡️', color: '#A6823C' },
    { id: 'hospitality', label: 'Hospitality', x: 450, y: 120, icon: '🏨', color: '#A6823C' },
    { id: 'analytics', label: 'Analytics', x: 300, y: 80, icon: '📊', color: '#A6823C' },
    { id: 'automation', label: 'Automation', x: 200, y: 200, icon: '⚙️', color: '#A6823C' },
    { id: 'ai-core', label: 'FLOW Core', x: 300, y: 160, icon: '🧠', color: '#A6823C' },
    { id: 'reporting', label: 'Reporting', x: 400, y: 200, icon: '📈', color: '#A6823C' },
    { id: 'workflow', label: 'Workflow', x: 300, y: 240, icon: '🔄', color: '#A6823C' }
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
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <svg
        viewBox="0 0 600 320"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A6823C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8C6C2D" stopOpacity="0.8" />
          </linearGradient>
          
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Neural network connections */}
        {connections.map((connection, index) => {
          const fromNode = getNodeById(connection.from);
          const toNode = getNodeById(connection.to);
          if (!fromNode || !toNode) return null;

          const isActive = activeNode === nodes.findIndex(n => n.id === connection.from) || 
                          activeNode === nodes.findIndex(n => n.id === connection.to);

          return (
            <motion.g key={`connection-${index}`}>
              <motion.line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={isActive ? "#A6823C" : "#333"}
                strokeWidth={isActive ? "2" : "1"}
                opacity={isActive ? 0.6 : 0.2}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />

              <motion.circle
                r="2"
                fill="#C5A059"
                initial={{ 
                  cx: fromNode.x,
                  cy: fromNode.y
                }}
                animate={{ 
                  cx: [fromNode.x, toNode.x, fromNode.x],
                  cy: [fromNode.y, toNode.y, fromNode.y]
                }}
                transition={{ 
                  duration: 4,
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
              transition={{ delay: index * 0.1 }}
            >
              {isActive && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="30"
                  fill="none"
                  stroke="#C5A059"
                  strokeWidth="1"
                  opacity="0.4"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isCoreAI ? "24" : "18"}
                fill="#09090b"
                stroke={isActive ? "#C5A059" : "#27272a"}
                strokeWidth="2"
                filter={isActive ? "url(#nodeGlow)" : ""}
              />

              <text
                x={node.x}
                y={node.y + 2}
                textAnchor="middle"
                fontSize={isCoreAI ? "14" : "12"}
                className="pointer-events-none select-none"
              >
                {node.icon}
              </text>

              <text
                x={node.x}
                y={node.y + (isCoreAI ? 40 : 35)}
                textAnchor="middle"
                fontSize="9"
                fill={isActive ? "#C5A059" : "#52525b"}
                className="pointer-events-none select-none font-bold uppercase tracking-tighter"
              >
                {node.label}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
