import React from 'react';
import DesktopIcon from './DesktopIcon';
import Window from './Window';

const folders = [
  { 
    id: 'about', 
    title: 'About Me', 
    icon: '🧑‍💻', 
    content: `About Me

I am a dedicated Level 1 Penetration Tester with a passion for identifying and exploiting security vulnerabilities to help organizations strengthen their defenses.

Experience:
• 2+ years of hands-on penetration testing
• Expertise in vulnerability assessment and analysis
• Strong background in network security
• Proven track record of responsible disclosure`
  },
  { 
    id: 'skills', 
    title: 'Skills', 
    icon: '🛠️', 
    content: `Technical Skills

• Network Penetration Testing
• Web Application Security Testing
• Vulnerability Assessment
• Social Engineering
• Security Tool Development
• Report Writing
• OWASP Top 10
• Burp Suite
• Metasploit
• Nmap
• Wireshark`
  },
  { 
    id: 'projects', 
    title: 'Projects', 
    icon: '📁', 
    content: `Notable Projects

1. Corporate Network Assessment
• Conducted full-scale penetration test
• Identified 3 critical vulnerabilities
• Provided detailed remediation steps

2. Web Application Security Audit
• Discovered SQL injection vulnerability
• Prevented potential data breach
• Implemented security best practices

3. Social Engineering Campaign
• Developed phishing awareness program
• Reduced click-through rate by 75%
• Trained 200+ employees`
  },
  { 
    id: 'certifications', 
    title: 'Certifications', 
    icon: '📜', 
    content: `Professional Certifications

• Offensive Security Certified Professional (OSCP)
• Certified Ethical Hacker (CEH)
• CompTIA Security+
• GIAC Web Application Penetration Tester (GWAPT)
• Burp Suite Certified Practitioner`
  },
  { 
    id: 'contact', 
    title: 'Contact', 
    icon: '📧', 
    content: `Contact Information

Email: pentester@securemail.com
LinkedIn: linkedin.com/in/pentester
GitHub: github.com/pentester

Available for:
• Security Consultations
• Penetration Testing Projects
• Security Training
• Speaking Engagements`
  }
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