import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, AlertCircle } from 'lucide-react';
import Card from '../components/Card';

const GammaView = () => {
  const [inputValue, setInputValue] = useState('');
  const [showLightning, setShowLightning] = useState(false);
  const [history, setHistory] = useState(['System initialized', 'Parameters configured', 'Ready for input']);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLightning(true);
      setTimeout(() => setShowLightning(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setIsProcessing(true);
    setHistory(prev => [...prev, `> ${inputValue}`]);
    
    setTimeout(() => {
      setHistory(prev => [...prev, `Processing: "${inputValue}"`]);
      setInputValue('');
      setIsProcessing(false);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      <Card className="overflow-hidden">
        <div className="flex items-center space-x-2 mb-4">
          <Terminal className="w-5 h-5 text-indigo-400" />
          <h2 className="text-xl font-semibold">Command Terminal</h2>
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <div className="relative z-10">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isProcessing}
              className="w-full bg-gray-900/50 border-2 border-indigo-500/50 rounded-xl px-6 py-4 text-xl focus:outline-none focus:border-indigo-400 transition-colors pr-12"
              placeholder="Enter your command..."
            />
            <button
              type="submit"
              disabled={isProcessing}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 hover:text-indigo-300 transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          <AnimatePresence>
            {showLightning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2) 100%)',
                  boxShadow: '0 0 30px rgba(99,102,241,0.5)',
                }}
              />
            )}
          </AnimatePresence>
        </form>
      </Card>
      
      <Card>
        <div className="flex items-center space-x-2 mb-4">
          <AlertCircle className="w-5 h-5 text-indigo-400" />
          <h3 className="text-xl font-semibold">Command History</h3>
        </div>

        <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
          {history.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center space-x-3 text-gray-400"
            >
              <span className="text-indigo-400 font-mono">❯</span>
              <span className="font-mono">{text}</span>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default GammaView;