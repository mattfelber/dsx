import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DecisionTree from './components/DecisionTree';
import TroubleshootingSummary from './components/TroubleshootingSummary';
import { TroubleshootingStep } from './types';

function App() {
  const [troubleshootingComplete, setTroubleshootingComplete] = useState(false);
  const [steps, setSteps] = useState<TroubleshootingStep[]>([]);

  const handleComplete = (completedSteps: TroubleshootingStep[]) => {
    setSteps(completedSteps);
    setTroubleshootingComplete(true);
  };

  const handleReset = () => {
    setSteps([]);
    setTroubleshootingComplete(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-2xl font-bold text-center mb-2">DSX Docking Station</h1>
          <h2 className="text-xl text-gray-600 text-center mb-6">Network Troubleshooting Flow</h2>
          
          {!troubleshootingComplete ? (
            <DecisionTree onComplete={handleComplete} />
          ) : (
            <TroubleshootingSummary steps={steps} onReset={handleReset} />
          )}
        </div>
      </main>
      
      <footer className="bg-gray-100 py-4 border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Industrial Scientific. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
