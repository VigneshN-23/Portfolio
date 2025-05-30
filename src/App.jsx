import React, { useState } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import Terminal from './components/Terminal';
import './styles/kali.css';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalInstances, setTerminalInstances] = useState([]);

  const openNewTerminal = () => {
    const newTerminal = {
      id: Date.now(),
      position: { x: 50 + terminalInstances.length * 30, y: 50 + terminalInstances.length * 30 }
    };
    setTerminalInstances([...terminalInstances, newTerminal]);
    setIsTerminalOpen(true);
  };

  const closeTerminal = (id) => {
    setTerminalInstances(terminalInstances.filter(term => term.id !== id));
    if (terminalInstances.length <= 1) {
      setIsTerminalOpen(false);
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-kali-dark text-white">
      <Taskbar />
      <Desktop onOpenTerminal={openNewTerminal} />
      {terminalInstances.map((terminal) => (
        <Terminal
          key={terminal.id}
          initialPosition={terminal.position}
          onClose={() => closeTerminal(terminal.id)}
        />
      ))}
    </div>
  );
}

export default App;