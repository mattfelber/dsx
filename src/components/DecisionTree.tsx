import React, { useState } from 'react';
import { DecisionNode, TroubleshootingStep } from '../types';
import { decisionTree } from '../data/decisionTree';

interface DecisionTreeProps {
  onComplete: (steps: TroubleshootingStep[]) => void;
}

const DecisionTree: React.FC<DecisionTreeProps> = ({ onComplete }) => {
  const [currentNodeId, setCurrentNodeId] = useState<string>('start');
  const [steps, setSteps] = useState<TroubleshootingStep[]>([]);
  
  const handleRestart = () => {
    setCurrentNodeId('start');
    setSteps([]);
  };
  
  const currentNode = decisionTree[currentNodeId];
  
  const handleOptionSelect = (optionIndex: number) => {
    const selectedOption = currentNode.options[optionIndex];
    
    // Record this step
    const newStep: TroubleshootingStep = {
      nodeId: currentNode.id,
      question: currentNode.question,
      selectedOption: selectedOption.text,
      actionTaken: selectedOption.actionTaken
    };
    
    const updatedSteps = [...steps, newStep];
    setSteps(updatedSteps);
    
    // Move to the next node or complete
    if (selectedOption.nextNodeId) {
      setCurrentNodeId(selectedOption.nextNodeId);
    } else {
      // We've reached an end node
      onComplete(updatedSteps);
    }
  };
  
  const getIconClass = (icon?: string) => {
    switch (icon) {
      case 'check':
        return 'text-green-500';
      case 'x':
        return 'text-red-500';
      case 'arrow-up':
        return 'text-blue-500';
      default:
        return '';
    }
  };
  
  const renderIcon = (icon?: string) => {
    if (!icon) return null;
    
    const iconClass = getIconClass(icon);
    
    switch (icon) {
      case 'check':
        return <span className={`inline-block mr-2 ${iconClass}`}>✓</span>;
      case 'x':
        return <span className={`inline-block mr-2 ${iconClass}`}>✗</span>;
      case 'arrow-up':
        return <span className={`inline-block mr-2 ${iconClass}`}>⬆️</span>;
      default:
        return null;
    }
  };
  
  const getNodeTypeClass = (type?: string) => {
    switch (type) {
      case 'start':
        return 'bg-blue-100 border-blue-300';
      case 'step':
        return 'bg-gray-100 border-gray-300';
      case 'action':
        return 'bg-yellow-100 border-yellow-300';
      case 'end':
        return 'bg-green-100 border-green-300';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-end items-center mb-4">
        {currentNodeId !== 'start' && (
          <button 
            onClick={handleRestart}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            Restart
          </button>
        )}
      </div>
      <div className={`p-4 rounded-lg shadow-md mb-6 border-l-4 ${getNodeTypeClass(currentNode.type)}`}>
        <h2 className="text-xl font-bold mb-4">{currentNode.question}</h2>
        <div className="space-y-3">
          {currentNode.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              className="w-full text-left p-3 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center transition-colors"
            >
              {renderIcon(option.icon)}
              <span>{option.text}</span>
            </button>
          ))}
        </div>
      </div>
      
      {steps.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Troubleshooting Path:</h3>
          <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
            <ol className="list-decimal pl-5 space-y-2">
              {steps.map((step, index) => (
                <li key={index} className="text-sm">
                  <span className="font-medium">{step.question}</span>
                  <span className="text-gray-600"> → {step.selectedOption}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default DecisionTree;
