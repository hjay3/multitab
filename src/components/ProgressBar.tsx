import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  label?: string;
  showLabel?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label, showLabel = true }) => {
  return (
    <div className="relative pt-1">
      {showLabel && (
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-indigo-500/20 text-indigo-400">
              {label || 'Progress'}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-indigo-400">
              {progress}%
            </span>
          </div>
        </div>
      )}
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
        />
      </div>
    </div>
  );
};

export default ProgressBar;