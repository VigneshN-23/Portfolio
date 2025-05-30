import React from 'react';
import Draggable from 'react-draggable';

function Window({ title, content, onClose }) {
  return (
    <Draggable handle=".window-header" bounds="parent">
      <div className="absolute w-96 bg-[#ECE9D8] shadow-xl rounded-t-lg window">
        <div className="window-header bg-gradient-to-r from-[#0A246A] to-[#A6CAF0] p-2 flex justify-between items-center rounded-t-lg cursor-move">
          <div className="flex items-center gap-2">
            <span className="text-xl">📁</span>
            <span className="text-white font-semibold">{title}</span>
          </div>
          <div className="flex gap-1">
            <button className="window-button bg-[#C7C5B3]">_</button>
            <button className="window-button bg-[#C7C5B3]">□</button>
            <button
              onClick={onClose}
              className="window-button close-button bg-[#C7C5B3]"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="window-content">
          <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br>') }} />
        </div>
      </div>
    </Draggable>
  );
}

export default Window;