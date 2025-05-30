import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

function Taskbar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="taskbar h-[30px] fixed top-0 w-full flex items-center justify-between px-4 text-sm">
      <div className="flex items-center gap-4">
        <button className="hover:bg-gray-700 px-3 py-1 rounded">Applications</button>
      </div>
      
      <div className="flex items-center gap-4">
        <span>🌐 Connected</span>
        <span>🔋 {batteryLevel}%</span>
        <span>{format(currentTime, 'EEE MMM d HH:mm:ss')}</span>
      </div>
    </div>
  );
}

export default Taskbar;