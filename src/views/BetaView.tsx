import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Chart, ArrowUp, ArrowDown, RefreshCw } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';

const BetaView = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const stats = [
    { label: 'Revenue', value: '$12,875', change: '+12%', up: true },
    { label: 'Active Users', value: '1,234', change: '+25%', up: true },
    { label: 'Conversion', value: '3.2%', change: '-2%', up: false },
    { label: 'Growth', value: '15.4%', change: '+5%', up: true },
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRefresh}
          className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-lg flex items-center space-x-2 hover:bg-indigo-500/30 transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i}>
            <div className="flex items-center justify-between">
              <Chart className="w-6 h-6 text-indigo-400" />
              {stat.up ? (
                <Badge variant="success">
                  <div className="flex items-center space-x-1">
                    <ArrowUp className="w-4 h-4" />
                    <span>{stat.change}</span>
                  </div>
                </Badge>
              ) : (
                <Badge variant="error">
                  <div className="flex items-center space-x-1">
                    <ArrowDown className="w-4 h-4" />
                    <span>{stat.change}</span>
                  </div>
                </Badge>
              )}
            </div>
            <h3 className="text-2xl font-bold mt-4">{stat.value}</h3>
            <p className="text-gray-400 mt-1">{stat.label}</p>
            <div className="mt-4">
              <ProgressBar 
                progress={Math.random() * 100} 
                showLabel={false}
              />
            </div>
          </Card>
        ))}
      </div>
      
      <Card>
        <div className="h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-indigo-500/20 rounded-full"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animation: `pulse ${Math.random() * 3 + 2}s infinite`,
                }}
              />
            ))}
          </div>
          <p className="text-xl text-gray-400 relative z-10">Interactive Chart Visualization</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default BetaView;