import React, { useState } from 'react';
import { TroubleshootingStep } from '../types';

interface TroubleshootingSummaryProps {
  steps: TroubleshootingStep[];
  onReset: () => void;
}

const TroubleshootingSummary: React.FC<TroubleshootingSummaryProps> = ({ steps, onReset }) => {
  const [copied, setCopied] = useState(false);
  
  const generateSummary = (): string => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    
    let summary = `DSX Docking Station Network Troubleshooting Summary (${date} ${time})\n\n`;
    
    steps.forEach((step, index) => {
      summary += `${index + 1}. ${step.question}\n`;
      summary += `   → ${step.selectedOption}\n`;
      if (step.actionTaken) {
        summary += `   → Action: ${step.actionTaken}\n`;
      }
      summary += '\n';
    });
    
    // Add final recommendation
    const lastStep = steps[steps.length - 1];
    if (lastStep) {
      const lastOption = lastStep.selectedOption;
      
      if (lastOption.includes('repair') || lastOption.includes('replacement')) {
        summary += 'RECOMMENDATION: Hardware issue detected. Send device for repair or replacement.\n';
      } else if (lastOption.includes('escalate') || lastOption.includes('SE')) {
        summary += 'RECOMMENDATION: Escalate to SE team at inetse@indsci.com with this troubleshooting summary.\n';
      } else if (lastOption.includes('working') || lastOption.includes('No further action')) {
        summary += 'RECOMMENDATION: Network connection is working correctly. No further action needed.\n';
      }
    }
    
    // Add summary table
    summary += '\nSUMMARY TABLE:\n';
    summary += '-----------------------------------------------------------\n';
    summary += 'Dock IP Address | Meaning | Action (Undock monitor first)\n';
    summary += '-----------------------------------------------------------\n';
    summary += '0.0.0.0 | No connection / bad cable / bad port / hardware fault | Check cable + port, reboot → Replace/repair if persists.\n';
    summary += '169.254.x.x | Link detected but no DHCP | Verify router/switch, reboot → Escalate if persists.\n';
    summary += 'Valid IP (e.g. 192.168.x.x) | Network OK but no server connection | Undock & Reboot. If the issue persists, escalate to SE.\n';
    
    return summary;
  };
  
  const handleCopy = () => {
    const summary = generateSummary();
    navigator.clipboard.writeText(summary)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };
  
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-primary">DSX Troubleshooter</h1>
        <button 
          onClick={onReset}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          Start New Troubleshooting
        </button>
      </div>
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md mb-6">
        <h2 className="text-xl font-bold text-green-700 mb-2">Troubleshooting Complete</h2>
        <p className="text-green-600">
          You have completed the troubleshooting process. Here is a summary of the steps taken.
        </p>
      </div>
      
      <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
        <h3 className="text-lg font-semibold mb-4">Troubleshooting Summary</h3>
        
        <div className="space-y-4 mb-6">
          {steps.map((step, index) => (
            <div key={index} className="border-b border-gray-200 pb-3">
              <div className="font-medium">{index + 1}. {step.question}</div>
              <div className="text-gray-700 ml-4">→ {step.selectedOption}</div>
              {step.actionTaken && (
                <div className="text-gray-600 ml-4 italic">→ Action: {step.actionTaken}</div>
              )}
            </div>
          ))}
        </div>
        
        {/* Summary Table */}
        <div className="mt-6 mb-6">
          <h3 className="text-lg font-semibold mb-2">Summary Table</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Dock IP Address</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Meaning</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Action (Undock monitor first)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">0.0.0.0</td>
                  <td className="border border-gray-300 px-4 py-2">No connection / bad cable / bad port / hardware fault</td>
                  <td className="border border-gray-300 px-4 py-2">Check cable + port, reboot → Replace/repair if persists.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">169.254.x.x</td>
                  <td className="border border-gray-300 px-4 py-2">Link detected but no DHCP</td>
                  <td className="border border-gray-300 px-4 py-2">Verify router/switch, reboot → Escalate if persists.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Valid IP (e.g. 192.168.x.x)</td>
                  <td className="border border-gray-300 px-4 py-2">Network OK but no server connection</td>
                  <td className="border border-gray-300 px-4 py-2">Undock & Reboot. If the issue persists, escalate to SE.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={handleCopy}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
            {copied ? 'Copied!' : 'Copy Summary'}
          </button>
          
          <button
            onClick={onReset}
            className="border border-gray-300 hover:bg-gray-100 py-2 px-4 rounded-md transition-colors flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z" />
            </svg>
            Back to Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default TroubleshootingSummary;
