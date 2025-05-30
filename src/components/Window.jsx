import React from 'react';
import Draggable from 'react-draggable';

function Window({ title, content, onClose }) {
  return (
    <Draggable handle=".window-header">
      <div className="absolute w-96 bg-[#ECE9D8] shadow-xl rounded-t-lg">
        <div className="window-header bg-gradient-to-r from-[#0A246A] to-[#A6CAF0] p-2 flex justify-between items-center rounded-t-lg cursor-move">
          <span className="text-white">{title}</span>
          <button
            onClick={onClose}
            className="bg-[#C7C5B3] hover:bg-red-500 text-black hover:text-white px-2 rounded"
          >
            ✕
          </button>
        </div>
        <div className="p-4 text-black">
          {content}
        </div>
      </div>
    </Draggable>
  );
}

export default Window