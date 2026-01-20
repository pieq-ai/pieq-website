import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BusinessDashboard() {
  const [activeMetric, setActiveMetric] = useState(0);

  // Dashboard metrics
  const metrics = [
    { 
      label: 'Process Efficiency', 
      value: 94, 
      color: '#ea580c',
      icon: '⚡',
      trend: '+12%'
    },
    { 
      label: 'AI Automation', 
      value: 87, 
      color: '#3b82f6',
      icon: '🤖',
      trend: '+25%'
    },
    { 
      label: 'Cost Reduction', 
      value: 76, 
      color: '#dc2626',
      icon: '💰',
      trend: '+18%'
    },
    { 
      label: 'User Satisfaction', 
      value: 91, 
      color: '#16a34a',
      icon: '😊',
      trend: '+8%'
    }
  ];

  // Business processes for pie chart
  const processes = [
    { name: 'Insurance Claims', value: 35, color: '#ea580c' },
    { name: 'Hospitality Ops', value: 28, color: '#3b82f6' },
    { name: 'Analytics', value: 22, color: '#f97316' },
    { name: 'Automation', value: 15, color: '#1e40af' }
  ];

  // Cycle through active metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [metrics.length]);

  // Calculate pie chart paths
  const generatePieSlice = (startAngle: number, endAngle: number, radius: number) => {
    const centerX = 300;
    const centerY = 160;
    
    const x1 = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
    const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180);
    
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  let currentAngle = -90;
  const processSlices = processes.map((process, index) => {
    const sliceAngle = (process.value / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;
    currentAngle = endAngle;
    
    return {
      ...process,
      path: generatePieSlice(startAngle, endAngle, 70),
      midAngle: startAngle + sliceAngle / 2,
      index
    };
  });

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-accent/10 via-white to-orange-50/30">
      <svg
        viewBox="0 0 600 320"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for modern look */}
          <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          
          <filter id="cardShadow">
            <feDropShadow dx="2" dy="4" stdDeviation="6" floodOpacity="0.1"/>
          </filter>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Dashboard background card */}
        <motion.rect
          x="50"
          y="50"
          width="500"
          height="220"
          rx="16"
          fill="url(#dashboardGradient)"
          stroke="#e2e8f0"
          strokeWidth="2"
          filter="url(#cardShadow)"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Header */}
        <motion.text
          x="300"
          y="80"
          textAnchor="middle"
          fontSize="18"
          fill="#1f2937"
          style={{ fontWeight: '600' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Business Intelligence Dashboard
        </motion.text>

        {/* Pie Chart Section */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Pie chart slices */}
          {processSlices.map((slice, index) => (
            <motion.g key={slice.name}>
              <motion.path
                d={slice.path}
                fill={slice.color}
                stroke="white"
                strokeWidth="3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.8 + index * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05,
                  filter: "url(#glow)"
                }}
                className="cursor-pointer"
              />
              
              {/* Process labels */}
              <motion.text
                x={300 + 85 * Math.cos((slice.midAngle * Math.PI) / 180)}
                y={160 + 85 * Math.sin((slice.midAngle * Math.PI) / 180) + 4}
                textAnchor="middle"
                fontSize="10"
                fill="#374151"
                style={{ fontWeight: '600' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {slice.value}%
              </motion.text>
            </motion.g>
          ))}

          {/* Center circle */}
          <motion.circle
            cx="300"
            cy="160"
            r="25"
            fill="white"
            stroke="#e2e8f0"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          />
          
          <motion.text
            x="300"
            y="166"
            textAnchor="middle"
            fontSize="12"
            fill="#6b7280"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            PieQ AI
          </motion.text>
        </motion.g>

        {/* Metrics Cards */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {metrics.map((metric, index) => {
            const isActive = activeMetric === index;
            const x = 80 + index * 110;
            const y = 240;
            
            return (
              <motion.g
                key={metric.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {/* Metric card background */}
                <motion.rect
                  x={x - 35}
                  y={y - 15}
                  width="70"
                  height="35"
                  rx="6"
                  fill={isActive ? metric.color : "#f8fafc"}
                  stroke={isActive ? metric.color : "#e2e8f0"}
                  strokeWidth="2"
                  filter="url(#cardShadow)"
                  animate={{
                    fill: isActive ? metric.color : "#f8fafc",
                    stroke: isActive ? metric.color : "#e2e8f0",
                    scale: isActive ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Metric icon */}
                <motion.text
                  x={x - 15}
                  y={y - 2}
                  textAnchor="middle"
                  fontSize="12"
                  animate={{ scale: isActive ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {metric.icon}
                </motion.text>
                
                {/* Metric value */}
                <motion.text
                  x={x + 10}
                  y={y - 5}
                  textAnchor="middle"
                  fontSize="14"
                  fill={isActive ? "white" : metric.color}
                  style={{ fontWeight: '700' }}
                  animate={{
                    fill: isActive ? "white" : metric.color,
                    scale: isActive ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {metric.value}%
                </motion.text>
                
                {/* Metric trend */}
                <motion.text
                  x={x + 10}
                  y={y + 6}
                  textAnchor="middle"
                  fontSize="8"
                  fill={isActive ? "white" : "#10b981"}
                  animate={{
                    fill: isActive ? "white" : "#10b981"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {metric.trend}
                </motion.text>
              </motion.g>
            );
          })}
        </motion.g>

        {/* Legend */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {processes.map((process, index) => (
            <motion.g key={process.name}>
              <rect
                x={420 + (index % 2) * 80}
                y={110 + Math.floor(index / 2) * 20}
                width="8"
                height="8"
                fill={process.color}
                rx="2"
              />
              <text
                x={435 + (index % 2) * 80}
                y={118 + Math.floor(index / 2) * 20}
                fontSize="9"
                fill="#6b7280"
              >
                {process.name}
              </text>
            </motion.g>
          ))}
        </motion.g>

        {/* Real-time indicators */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.circle
            cx="520"
            cy="70"
            r="4"
            fill="#10b981"
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <text x="530" y="75" fontSize="10" fill="#6b7280">Live</text>
        </motion.g>

        {/* Bottom status */}
        <motion.text
          x="300"
          y="295"
          textAnchor="middle"
          fontSize="10"
          fill="#9ca3af"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          Powered by PieQ AI • Real-time Business Insights
        </motion.text>
      </svg>
    </div>
  );
}