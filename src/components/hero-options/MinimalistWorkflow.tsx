import { motion } from "framer-motion";
import { useState } from "react";

export default function MinimalistWorkflow() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const workflowNodes = [
    { id: 1, label: "Data Input", x: 50, y: 200, icon: "📊" },
    { id: 2, label: "AI Processing", x: 200, y: 120, icon: "🤖" },
    { id: 3, label: "Business Rules", x: 200, y: 280, icon: "⚙️" },
    { id: 4, label: "Decision Engine", x: 350, y: 200, icon: "🎯" },
    { id: 5, label: "Output & Actions", x: 500, y: 200, icon: "✨" }
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 4, to: 5 }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-50/30 to-blue-accent/30">
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
          
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines */}
        {connections.map((conn, index) => {
          const fromNode = workflowNodes.find(n => n.id === conn.from)!;
          const toNode = workflowNodes.find(n => n.id === conn.to)!;
          
          return (
            <motion.line
              key={index}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="#6b7280"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          );
        })}

        {/* Animated Data Flow */}
        {connections.map((conn, index) => {
          const fromNode = workflowNodes.find(n => n.id === conn.from)!;
          const toNode = workflowNodes.find(n => n.id === conn.to)!;
          
          return (
            <motion.circle
              key={`flow-${index}`}
              r="3"
              fill="#ea580c"
              initial={{ 
                cx: fromNode.x,
                cy: fromNode.y,
                opacity: 0
              }}
              animate={{ 
                cx: toNode.x,
                cy: toNode.y,
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5 + 1,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Workflow Nodes */}
        {workflowNodes.map((node, index) => (
          <motion.g
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            style={{ cursor: 'pointer' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={activeNode === node.id ? 25 : 22}
              fill="url(#nodeGradient)"
              stroke={activeNode === node.id ? "#ea580c" : "#6b7280"}
              strokeWidth={activeNode === node.id ? 3 : 2}
              filter="url(#softGlow)"
              className="transition-all duration-300"
            />
            
            <text
              x={node.x}
              y={node.y + 1}
              textAnchor="middle"
              fontSize="14"
              fill="#374151"
            >
              {node.icon}
            </text>
            
            <text
              x={node.x}
              y={node.y + 45}
              textAnchor="middle"
              fontSize="11"
              fill="#6b7280"
              className="pointer-events-none"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Title */}
        <text
          x="300"
          y="50"
          textAnchor="middle"
          fontSize="16"
          fill="#374151"
          className="pointer-events-none"
        >
          AI-Powered Process Orchestration
        </text>
      </svg>
    </div>
  );
}