import { motion } from "framer-motion";

export default function DashboardMockup() {
  const metrics = [
    { label: 'Process Efficiency', value: 94, color: '#ea580c' },
    { label: 'AI Automation', value: 87, color: '#3b82f6' },
    { label: 'Data Integration', value: 91, color: '#6b7280' }
  ];

  const chartData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 72 },
    { month: 'Mar', value: 68 },
    { month: 'Apr', value: 85 },
    { month: 'May', value: 92 },
    { month: 'Jun', value: 88 }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4 border border-gray-200">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <div className="text-xs text-gray-500">PieQ Dashboard</div>
        </div>

        {/* Title */}
        <motion.h3 
          className="text-lg text-gray-800 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Business Process Analytics
        </motion.h3>

        {/* Metrics Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="bg-gray-50 rounded-lg p-3 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <motion.div 
                className="text-lg mb-1"
                style={{ color: metric.color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {metric.value}%
              </motion.div>
              <div className="text-xs text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Simple Bar Chart */}
        <div className="mb-4">
          <div className="text-sm text-gray-700 mb-3">Process Performance Trend</div>
          <div className="flex items-end justify-between h-24 gap-2">
            {chartData.map((item, index) => (
              <div key={item.month} className="flex flex-col items-center flex-1">
                <motion.div
                  className="bg-gradient-to-t from-orange-500 to-blue-primary rounded-t-sm w-full"
                  initial={{ height: 0 }}
                  animate={{ height: `${item.value}%` }}
                  transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
                />
                <div className="text-xs text-gray-500 mt-1">{item.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center gap-1">
            <motion.div 
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-gray-600">AI Active</span>
          </div>
          <div className="flex items-center gap-1">
            <motion.div 
              className="w-2 h-2 bg-blue-primary rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <span className="text-gray-600">Workflows Running</span>
          </div>
          <div className="flex items-center gap-1">
            <motion.div 
              className="w-2 h-2 bg-orange-500 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <span className="text-gray-600">Data Synced</span>
          </div>
        </div>
      </div>
    </div>
  );
}