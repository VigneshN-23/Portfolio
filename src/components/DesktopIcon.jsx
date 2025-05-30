import React from 'react';

function DesktopIcon({ icon, title, onClick }) {
  return (
    <div 
      className="flex flex-col items-center w-24 p-2 cursor-pointer text-white hover:bg-blue-400/20 rounded"
      onClick={onClick}
    >
      <div className="text-4xl mb-1">{icon}</div>
      <div className="text-center text-sm desktop-icon-text">{title}</div>
    </div>
  );
}

export default DesktopIcon