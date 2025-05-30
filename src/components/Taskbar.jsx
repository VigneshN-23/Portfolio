import React from 'react';

function Taskbar({ openWindows }) {
  return (
    <div className="h-10 bg-gradient-to-r from-[#245EDC] to-[#A6CAF0] fixed bottom-0 w-full flex items-center px-2 border-t border-[#0A246A]">
      <button className="start-button text-white px-4 py-1 rounded mr-2 flex items-center gap-2">
        <span className="text-xl">🪟</span>
        <span className="font-semibold">Start</span>
      </button>
      <div className="flex gap-2">
        {openWindows.map((window) => (
          <div
            key={window.id}
            className="taskbar-item text-white px-4 py-1 rounded flex items-center gap-2"
          >
            <span className="text-xl">📂</span>
            <span>{window.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Taskbar