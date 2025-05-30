import React from 'react';
import DesktopIcon from './DesktopIcon';
import Window from './Window';

const folders = [
  { 
    id: 'about', 
    title: 'About Me', 
    icon: '👤', 
    content: `<div class="content-section">
      <div class="content-title">About Me</div>
      <p>Dedicated Level 1 Penetration Tester with a passion for cybersecurity and a proven track record in identifying and exploiting security vulnerabilities to strengthen organizational defenses.</p>
      
      <div class="content-title">Experience</div>
      <ul class="content-list">
        <li>2+ years of hands-on penetration testing experience</li>
        <li>Expertise in vulnerability assessment and analysis</li>
        <li>Strong background in network security</li>
        <li>Proven track record of responsible disclosure</li>
      </ul>
    </div>`
  },
  { 
    id: 'skills', 
    title: 'Skills', 
    icon: '🛠️', 
    content: `<div class="content-section">
      <div class="content-title">Technical Skills</div>
      <ul class="content-list">
        <li>Network Penetration Testing</li>
        <li>Web Application Security Testing</li>
        <li>Vulnerability Assessment</li>
        <li>Social Engineering</li>
        <li>Security Tool Development</li>
        <li>Report Writing</li>
      </ul>

      <div class="content-title">Tools Proficiency</div>
      <ul class="content-list">
        <li>Burp Suite Professional</li>
        <li>Metasploit Framework</li>
        <li>Nmap & Wireshark</li>
        <li>OWASP ZAP</li>
        <li>Kali Linux</li>
      </ul>
    </div>`
  },
  { 
    id: 'projects', 
    title: 'Projects', 
    icon: '📁', 
    content: `<div class="content-section">
      <div class="content-title">Notable Projects</div>

      <div class="content-section">
        <strong>Corporate Network Assessment</strong>
        <ul class="content-list">
          <li>Conducted full-scale penetration test</li>
          <li>Identified 3 critical vulnerabilities</li>
          <li>Provided detailed remediation steps</li>
        </ul>
      </div>

      <div class="content-section">
        <strong>Web Application Security Audit</strong>
        <ul class="content-list">
          <li>Discovered SQL injection vulnerability</li>
          <li>Prevented potential data breach</li>
          <li>Implemented security best practices</li>
        </ul>
      </div>

      <div class="content-section">
        <strong>Social Engineering Campaign</strong>
        <ul class="content-list">
          <li>Developed phishing awareness program</li>
          <li>Reduced click-through rate by 75%</li>
          <li>Trained 200+ employees</li>
        </ul>
      </div>
    </div>`
  },
  { 
    id: 'certifications', 
    title: 'Certifications', 
    icon: '📜', 
    content: `<div class="content-section">
      <div class="content-title">Professional Certifications</div>
      <ul class="content-list">
        <li>Offensive Security Certified Professional (OSCP)</li>
        <li>Certified Ethical Hacker (CEH)</li>
        <li>CompTIA Security+</li>
        <li>GIAC Web Application Penetration Tester (GWAPT)</li>
        <li>Burp Suite Certified Practitioner</li>
      </ul>

      <div class="content-title">Additional Training</div>
      <ul class="content-list">
        <li>Advanced Web Application Security</li>
        <li>Network Defense Essentials</li>
        <li>Mobile Application Security</li>
      </ul>
    </div>`
  },
  { 
    id: 'contact', 
    title: 'Contact', 
    icon: '📧', 
    content: `<div class="content-section">
      <div class="content-title">Contact Information</div>
      <ul class="content-list">
        <li>Email: pentester@securemail.com</li>
        <li>LinkedIn: linkedin.com/in/pentester</li>
        <li>GitHub: github.com/pentester</li>
      </ul>

      <div class="content-title">Available For</div>
      <ul class="content-list">
        <li>Security Consultations</li>
        <li>Penetration Testing Projects</li>
        <li>Security Training</li>
        <li>Speaking Engagements</li>
      </ul>
    </div>`
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
      
      {openWindows.map((window, index) => (
        <Window
          key={window.id}
          title={window.title}
          content={window.content}
          onClose={() => onCloseWindow(window.id)}
          style={{
            top: `${50 + index * 30}px`,
            left: `${50 + index * 30}px`
          }}
        />
      ))}
    </div>
  );
}

export default Desktop;