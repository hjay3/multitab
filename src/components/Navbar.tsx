import React from 'react';
import { motion } from 'framer-motion';

 interface NavbarProps {
  tabs: {
  id: string;
  label: string;
  icon: React.ReactNode;
  }[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
 }


 const Navbar: React.FC<NavbarProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-md flex items-center space-x-2 transition-colors
                  ${activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-indigo-500/20 rounded-md"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative">{tab.icon}</span>
                <span className="relative font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
