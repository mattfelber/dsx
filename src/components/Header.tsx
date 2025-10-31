import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg 
              className="h-8 w-8 mr-3" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
              <path d="M14 6l-6 6 6 6"></path>
            </svg>
            <div>
              <h1 className="text-xl font-bold">DSX Docking Station</h1>
              <p className="text-sm opacity-80">Network Troubleshooting Tool</p>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
              Industrial Scientific
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
