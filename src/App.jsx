import React, { useState } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import './styles/windows-xp.css';

function App() {
  const [openWindows, setOpenWindows] = useState([]);

  const handleOpenFolder = (folder) => {
    if (!openWindows.find(w => w.id === folder.id)) {
      setOpenWindows([...openWindows, folder]);
    }
  };

  const handleCloseWindow = (folderId) => {
    setOpenWindows(openWindows.filter(w => w.id !== folderId));
  };

  return (
    <div className="h-screen overflow-hidden bg-[#245EDC] relative">
      <Desktop onOpenFolder={handleOpenFolder} openWindows={openWindows} onCloseWindow={handleCloseWindow} />
      <Taskbar openWindows={openWindows} />
    </div>
  );
}

export default App