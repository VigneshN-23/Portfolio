import React from 'react';
import Draggable from 'react-draggable';

function Window({ title, content, onClose }) {
  return (
    <Draggable handle=".window-header">
      <div className="absolute w-96 bg-[#ECE9D8] shadow-xl rounded-t-lg window">
        <div className="window-header bg-gradient-to-r from-[#0A246A] to-[#A6CAF0] p-2 flex justify-between items-center rounded-t-lg cursor-move">
          <div className="flex items-center gap-2">
            <span className="text-xl">📂</span>
            <span className="text-white font-semibold">{title}</span>
          </div>
          <div className="flex gap-1">
            <button className="bg-[#C7C5B3] hover:bg-[#E5E3D3] px-2 rounded text-black">_</button>
            <button className="bg-[#C7C5B3] hover:bg-[#E5E3D3] px-2 rounded text-black">□</button>
            <button
              onClick={onClose}
              className="bg-[#C7C5B3] hover:bg-red-500 text-black hover:text-white px-2 rounded"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="window-content whitespace-pre-wrap">
          {content}
        </div>
      </div>
    </Draggable>
  );
}

export default Window