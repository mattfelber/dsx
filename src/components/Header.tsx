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
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M6 8h.01" />
              <path d="M10 8h.01" />
              <path d="M14 8h.01" />
              <path d="M18 8h.01" />
              <path d="M8 12h.01" />
              <path d="M12 12h.01" />
              <path d="M16 12h.01" />
              <path d="M7 16h10" />
            </svg>
            <div>
              <h1 className="text-xl font-bold">DSX Troubleshooter</h1>
              <p className="text-sm opacity-80">Docking Station Network Tool</p>
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
