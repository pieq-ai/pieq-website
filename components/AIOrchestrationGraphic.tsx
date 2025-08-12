export default function AIOrchestrationGraphic() {
  return (
    <svg 
      viewBox="0 0 400 300" 
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Modern gradients */}
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
        <filter id="modernShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.1"/>
        </filter>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Central AI Orchestra Node */}
      <circle cx="200" cy="150" r="40" fill="url(#nodeGradient)" 
              stroke="url(#aiGradient)" strokeWidth="3" filter="url(#modernShadow)" />
      
      {/* AI Brain Symbol */}
      <g transform="translate(200,150)">
        {/* Neural network pattern */}
        <circle cx="0" cy="0" r="20" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6">
          <animate attributeName="r" values="20;25;20" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.6;0.3;0.6" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="0" cy="0" r="12" fill="url(#aiGradient)" opacity="0.8" />
        
        {/* Neural connections */}
        <g opacity="0.7">
          <line x1="-8" y1="-8" x2="8" y2="8" stroke="#ea580c" strokeWidth="1.5" />
          <line x1="8" y1="-8" x2="-8" y2="8" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="-8" cy="-8" r="2" fill="#ea580c" />
          <circle cx="8" cy="-8" r="2" fill="#3b82f6" />
          <circle cx="8" cy="8" r="2" fill="#ea580c" />
          <circle cx="-8" cy="8" r="2" fill="#3b82f6" />
        </g>
        
        {/* AI Text */}
        <text y="6" textAnchor="middle" fontSize="8" fill="white" fontWeight="600">AI</text>
      </g>
      
      {/* Process Nodes - Modern Grid Layout */}
      
      {/* Top Row */}
      <g transform="translate(100,80)">
        <rect x="-25" y="-15" width="50" height="30" rx="15" fill="url(#nodeGradient)" 
              stroke="#3b82f6" strokeWidth="2" filter="url(#modernShadow)" />
        <text textAnchor="middle" y="2" fontSize="9" fill="#3b82f6" fontWeight="500">Data</text>
        <text textAnchor="middle" y="12" fontSize="7" fill="#6b7280">Input</text>
      </g>
      
      <g transform="translate(300,80)">
        <rect x="-25" y="-15" width="50" height="30" rx="15" fill="url(#nodeGradient)" 
              stroke="#ea580c" strokeWidth="2" filter="url(#modernShadow)" />
        <text textAnchor="middle" y="2" fontSize="9" fill="#ea580c" fontWeight="500">Analytics</text>
        <text textAnchor="middle" y="12" fontSize="7" fill="#6b7280">Insights</text>
      </g>
      
      {/* Middle Row */}
      <g transform="translate(60,150)">
        <rect x="-30" y="-15" width="60" height="30" rx="15" fill="url(#nodeGradient)" 
              stroke="#10b981" strokeWidth="2" filter="url(#modernShadow)" />
        <text textAnchor="middle" y="2" fontSize="9" fill="#10b981" fontWeight="500">Workflow</text>
        <text textAnchor="middle" y="12" fontSize="7" fill="#6b7280">Automation</text>
      </g>
      
      <g transform="translate(340,150)">
        <rect x="-30" y="-15" width="60" height="30" rx="15" fill="url(#nodeGradient)" 
              stroke="#8b5cf6" strokeWidth="2" filter="url(#modernShadow)" />
        <text textAnchor="middle" y="2" fontSize="9" fill="#8b5cf6" fontWeight="500">Integration</text>
        <text textAnchor="middle" y="12" fontSize="7" fill="#6b7280">Systems</text>
      </g>
      
      {/* Bottom Row */}
      <g transform="translate(100,220)">
        <rect x="-25" y="-15" width="50" height="30" rx="15" fill="url(#nodeGradient)" 
              stroke="#f59e0b" strokeWidth="2" filter="url(#modernShadow)" />
        <text textAnchor="middle" y="2" fontSize="9" fill="#f59e0b" fontWeight="500">Process</text>
        <text textAnchor="middle" y="12" fontSize="7" fill="#6b7280">Flow</text>
      </g>
      
      <g transform="translate(300,220)">
        <rect x="-25" y="-15" width="50" height="30" rx="15" fill="url(#nodeGradient)" 
              stroke="#ec4899" strokeWidth="2" filter="url(#modernShadow)" />
        <text textAnchor="middle" y="2" fontSize="9" fill="#ec4899" fontWeight="500">Monitor</text>
        <text textAnchor="middle" y="12" fontSize="7" fill="#6b7280">Control</text>
      </g>
      
      {/* Animated Connection Lines */}
      <g opacity="0.7">
        {/* Top connections */}
        <path d="M 125 95 Q 162 122 175 140" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M 275 95 Q 238 122 225 140" stroke="#ea580c" strokeWidth="2" fill="none" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        </path>
        
        {/* Side connections */}
        <path d="M 90 150 Q 120 150 160 150" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" begin="1s" repeatCount="indefinite"/>
        </path>
        <path d="M 310 150 Q 280 150 240 150" stroke="#8b5cf6" strokeWidth="2" fill="none" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" begin="1.5s" repeatCount="indefinite"/>
        </path>
        
        {/* Bottom connections */}
        <path d="M 125 205 Q 162 178 175 160" stroke="#f59e0b" strokeWidth="2" fill="none" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" begin="2s" repeatCount="indefinite"/>
        </path>
        <path d="M 275 205 Q 238 178 225 160" stroke="#ec4899" strokeWidth="2" fill="none" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" begin="2.5s" repeatCount="indefinite"/>
        </path>
      </g>
      
      {/* Orbital Elements - Subtle Animation */}
      <g opacity="0.4">
        <circle cx="200" cy="150" r="80" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2,8">
          <animateTransform attributeName="transform" type="rotate" values="0 200 150;360 200 150" dur="20s" repeatCount="indefinite"/>
        </circle>
        <circle cx="280" cy="150" r="4" fill="#3b82f6">
          <animateTransform attributeName="transform" type="rotate" values="0 200 150;360 200 150" dur="20s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      {/* Performance Indicators */}
      <g transform="translate(350,40)">
        <rect x="-20" y="-10" width="40" height="20" rx="10" fill="white" stroke="#10b981" strokeWidth="1" filter="url(#modernShadow)" />
        <text textAnchor="middle" y="-2" fontSize="6" fill="#10b981" fontWeight="600">99.9%</text>
        <text textAnchor="middle" y="6" fontSize="5" fill="#6b7280">Uptime</text>
      </g>
      
      <g transform="translate(50,40)">
        <rect x="-20" y="-10" width="40" height="20" rx="10" fill="white" stroke="#ea580c" strokeWidth="1" filter="url(#modernShadow)" />
        <text textAnchor="middle" y="-2" fontSize="6" fill="#ea580c" fontWeight="600">+67%</text>
        <text textAnchor="middle" y="6" fontSize="5" fill="#6b7280">Efficiency</text>
      </g>
      
      {/* Subtle background elements */}
      <g opacity="0.1">
        <circle cx="50" cy="250" r="20" fill="#3b82f6" />
        <circle cx="350" cy="260" r="15" fill="#ea580c" />
      </g>
    </svg>
  );
}