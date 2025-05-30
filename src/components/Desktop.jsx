import React from 'react';
import DesktopIcon from './DesktopIcon';
import Window from './Window';

const folders = [
  { id: 'about', title: 'About Me', icon: '🧑‍💻', content: 'Experienced L1 Penetration Tester with expertise in vulnerability assessment and security analysis.' },
  { id: 'skills', title: 'Skills', icon: '🛠️', content: 'Network Penetration Testing, Web Application Security, Social Engineering, Vulnerability Assessment' },
  { id: 'projects', title: 'Projects', icon: '📁', content: 'Various security audit projects and penetration testing reports' },
  { id: 'certifications', title: 'Certifications', icon: '📜', content: 'CEH, Security+, OSCP' },
  { id: 'contact', title: 'Contact', icon: '📧', content: 'Email: your.email@example.com\nLinkedIn: your-linkedin' }
];

function Desktop({ onOpenFolder, openWindows, onCloseWindow }) {
  return (
    <div className="h-[calc(100vh-40px)] p-4">
      <div className="grid grid-cols-6 gap-4">
        {folders.map((folder) => (
          <DesktopIcon
            key={folder.id}
            title={folder.title}
            icon={folder.icon}
            onClick={() => onOpenFolder(folder)}
          />
        ))}
      </div>
      
      {openWindows.map((window) => (
        <Window
          key={window.id}
          title={window.title}
          content={window.content}
          onClose={() => onCloseWindow(window.id)}
        />
      ))}
    </div>
  );
}

export default Desktop