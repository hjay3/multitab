import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Activity, Database, Cloud } from 'lucide-react';
import Card from '../components/Card';

const AlphaView = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const modules = [
    { icon: <Zap className="w-6 h-6" />, title: 'Power Systems', metric: '1.21 GW' },
    { icon: <Activity className="w-6 h-6" />, title: 'Neural Network', metric: '98.2%' },
    { icon: <Database className="w-6 h-6" />, title: 'Data Storage', metric: '1.8 PB' },
    { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Sync', metric: '42 ms' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
    >
      {modules.map((module, i) => (
        <Card
          key={i}
          className="cursor-pointer"
          hover={selectedModule !== i}
          onClick={() => setSelectedModule(selectedModule === i ? null : i)}
        >
          <div className="flex items-start justify-between">
            <div className="text-indigo-400">{module.icon}</div>
            <div className="text-2xl font-bold text-indigo-400">{module.metric}</div>
          </div>
          <h3 className="text-xl font-semibold mt-4 mb-2">{module.title}</h3>
          
          <AnimatePresence>
            {selectedModule === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-4">
                  <div className="h-32 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg animate-pulse" />
                  <div className="grid grid-cols-2 gap-4">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="bg-gray-700/50 p-3 rounded-lg">
                        <div className="text-sm text-gray-400">Metric {j + 1}</div>
                        <div className="text-lg font-semibold mt-1">
                          {Math.floor(Math.random() * 100)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      ))}
    </motion.div>
  );
};

export default AlphaView;