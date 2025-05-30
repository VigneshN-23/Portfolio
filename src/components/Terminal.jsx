import React, { useEffect, useRef } from 'react';
import { Terminal as XTerm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import Draggable from 'react-draggable';
import 'xterm/css/xterm.css';

function Terminal({ initialPosition, onClose }) {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);

  const commands = {
    'vignesh -h': () => `
Available commands:
  vignesh resume    - View my professional resume
  vignesh work     - View work experience
  vignesh education - View education background
  vignesh certs    - View certifications
  vignesh socials  - View social media links
  vignesh mood     - How am I feeling today?
  clear           - Clear terminal
`,
    'vignesh resume': () => `
┌────────────────────────────────────────┐
│           Penetration Tester L1        │
└────────────────────────────────────────┘

🔒 Cybersecurity Professional
📍 Location: Available Globally
💼 Experience: 2+ years in Penetration Testing

Skills:
• Network Penetration Testing
• Web Application Security
• Vulnerability Assessment
• Social Engineering
• Security Tool Development
`,
    'vignesh work': () => `
Work Experience:

🔹 Penetration Tester L1 | CyberSec Corp
   2022 - Present
   • Conducted 50+ penetration tests
   • Identified critical vulnerabilities
   • Developed custom security tools

🔹 Security Analyst | SecureNet
   2021 - 2022
   • Performed vulnerability assessments
   • Implemented security controls
   • Led security awareness training
`,
    'vignesh education': () => `
Education:

🎓 B.S. Computer Science
   Cybersecurity Specialization
   University of Technology
   2017 - 2021

🔒 Additional Training:
   • Advanced Penetration Testing
   • Web Application Security
   • Network Defense
`,
    'vignesh certs': () => `
Certifications:

✅ OSCP - Offensive Security Certified Professional
✅ CEH - Certified Ethical Hacker
✅ Security+
✅ GWAPT - GIAC Web Application Penetration Tester
`,
    'vignesh socials': () => `
Connect with me:

📧 Email: pentester@securemail.com
🔗 LinkedIn: linkedin.com/in/pentester
🐙 GitHub: github.com/pentester
`,
    'vignesh mood': () => `
🔥 Ready to hack the planet! 
Just kidding - I'm ethically finding vulnerabilities to make the internet safer!
`,
    'clear': () => '\x1Bc',
  };

  useEffect(() => {
    if (!xtermRef.current && terminalRef.current) {
      xtermRef.current = new XTerm({
        cursorBlink: true,
        fontSize: 14,
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        theme: {
          background: '#1E1E1E',
          foreground: '#F8F8F8',
        },
        rows: 40,
        cols: 100
      });

      const fitAddon = new FitAddon();
      xtermRef.current.loadAddon(fitAddon);
      xtermRef.current.open(terminalRef.current);
      
      // Defer the fit operation to ensure proper dimensions
      setTimeout(() => {
        fitAddon.fit();
      }, 0);

      // Initial welcome message
      xtermRef.current.write('\x1b[1;32mWelcome to Vignesh\'s Portfolio Terminal!\x1b[0m\r\n');
      xtermRef.current.write('Type "vignesh -h" for available commands\r\n\r\n');
      xtermRef.current.write('vignesh@portfolio:~$ ');

      let command = '';
      let commandHistory = [];
      let historyIndex = -1;

      xtermRef.current.onKey(({ key, domEvent }) => {
        const printable = !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;

        if (domEvent.keyCode === 13) { // Enter
          xtermRef.current.write('\r\n');
          if (command.trim()) {
            commandHistory.push(command.trim());
            historyIndex = commandHistory.length;
            const output = commands[command.trim()] 
              ? commands[command.trim()]() 
              : `Command not found: ${command}\r\nType 'vignesh -h' for available commands`;
            xtermRef.current.write(output + '\r\n');
          }
          command = '';
          xtermRef.current.write('vignesh@portfolio:~$ ');
        } else if (domEvent.keyCode === 8) { // Backspace
          if (command.length > 0) {
            command = command.slice(0, -1);
            xtermRef.current.write('\b \b');
          }
        } else if (domEvent.keyCode === 38) { // Up arrow
          if (historyIndex > 0) {
            historyIndex--;
            command = commandHistory[historyIndex];
            xtermRef.current.write('\x1b[2K\r'); // Clear current line
            xtermRef.current.write('vignesh@portfolio:~$ ' + command);
          }
        } else if (domEvent.keyCode === 40) { // Down arrow
          if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            command = commandHistory[historyIndex];
            xtermRef.current.write('\x1b[2K\r'); // Clear current line
            xtermRef.current.write('vignesh@portfolio:~$ ' + command);
          } else if (historyIndex === commandHistory.length - 1) {
            historyIndex = commandHistory.length;
            command = '';
            xtermRef.current.write('\x1b[2K\r'); // Clear current line
            xtermRef.current.write('vignesh@portfolio:~$ ');
          }
        } else if (printable) {
          command += key;
          xtermRef.current.write(key);
        }
      });

      // Handle window resize
      const handleResize = () => {
        fitAddon.fit();
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

    return () => {
      if (xtermRef.current) {
        xtermRef.current.dispose();
      }
    };
  }, []);

  return (
    <Draggable
      defaultPosition={initialPosition}
      handle=".terminal-handle"
    >
      <div className="terminal-window fixed w-screen h-[calc(100vh-30px)]">
        <div className="terminal-handle bg-gray-800 p-2 flex items-center justify-between rounded-t-lg cursor-move">
          <div className="window-controls">
            <button className="window-button close-button" onClick={onClose}></button>
            <button className="window-button minimize-button"></button>
            <button className="window-button maximize-button"></button>
          </div>
          <span className="window-title">Terminal</span>
          <div className="w-[60px]"></div>
        </div>
        <div ref={terminalRef} className="h-[calc(100vh-70px)]" />
      </div>
    </Draggable>
  );
}

export default Terminal;