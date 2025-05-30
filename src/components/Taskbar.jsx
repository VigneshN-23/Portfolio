import React from 'react';

function Taskbar({ openWindows }) {
  return (
    <div className="h-10 bg-gradient-to-r from-[#245EDC] to-[#A6CAF0] fixed bottom-0 w-full flex items-center px-2">
      <button className="bg-green-600 text-white px-4 py-1 rounded mr-2">
        Start
      </button>
      <div className="flex gap-2">
        {openWindows.map((window) => (
          <div
            key={window.id}
            className="bg-[#3C81F3] text-white px-4 py-1 rounded"
          >
            {window.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Taskbar