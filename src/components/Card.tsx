import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
 }

 const Card: React.FC<CardProps> = ({ children, className = '', hover = true, onClick }) => {
  return (
  <motion.div
  whileHover={hover ? { scale: 1.02, translateY: -5 } : {}}
  className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 transition-colors hover:border-indigo-500/50 ${className}`}
  onClick={onClick}
  >
  {children}
  </motion.div>
  );
 };

export default Card;
