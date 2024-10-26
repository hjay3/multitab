import React, { useState } from 'react';
import { Activity, Zap, Brain, Compass, Database, Flask } from 'lucide-react';
import Navbar from './components/Navbar';
import AlphaView from './views/AlphaView';
import BetaView from './views/BetaView';
import GammaView from './views/GammaView';
import DeltaView from './views/DeltaView';
import EpsilonView from './views/EpsilonView';

const tabs = [
  { id: 'alpha', label: 'Alpha', icon: <Brain className="w-5 h-5" /> },
  { id: 'beta', label: 'Beta', icon: <Flask className="w-5 h-5" /> },
  { id: 'gamma', label: 'Gamma', icon: <Zap className="w-5 h-5" /> },
  { id: 'delta', label: 'Delta', icon: <Activity className="w-5 h-5" /> },
  { id: 'epsilon', label: 'Epsilon', icon: <Database className="w-5 h-5" /> },
];

function App() {
  const [activeTab, setActiveTab] = useState('alpha');

  const renderContent = () => {
    switch (activeTab) {
      case 'alpha':
        return <AlphaView />;
      case 'beta':
        return <BetaView />;
      case 'gamma':
        return <GammaView />;
      case 'delta':
        return <DeltaView />;
      case 'epsilon':
        return <EpsilonView />;
      default:
        return <AlphaView />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;