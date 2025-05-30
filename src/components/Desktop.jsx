import React from 'react';

function Desktop({ onOpenTerminal }) {
  return (
    <div className="h-[calc(100vh-30px)] p-4">
      <div 
        className="desktop-icon"
        onClick={onOpenTerminal}
      >
        <span className="text-3xl">🖥️</span>
        <span className="desktop-icon-text">Terminal</span>
      </div>
    </div>
  );
}

export default Desktop;