import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'info' | 'error';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'info' }) => {
  const variants = {
    success: 'bg-green-500/20 text-green-400',
    warning: 'bg-yellow-500/20 text-yellow-400',
    info: 'bg-indigo-500/20 text-indigo-400',
    error: 'bg-red-500/20 text-red-400',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;