'use client';

import { FaLinkedin, FaInstagram, FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa'
import { colors } from '../lib/colors'

export default function Footer(){
  const footerStyle: React.CSSProperties = { 
    background: colors.text, 
    color: colors.background, 
    padding: '80px 0 40px' 
  }
  
  const innerStyle: React.CSSProperties = { 
    maxWidth: 1200, 
    margin: '0 auto', 
    paddingLeft: 48, 
    paddingRight: 48,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  }

  const titleStyle: React.CSSProperties = { 
    fontSize: 14, 
    color: colors.background,
    marginBottom: 24,
    letterSpacing: '0.3px',
    opacity: 0.6,
  }
  
  const iconsRow: React.CSSProperties = { 
    display: 'flex', 
    gap: 16, 
    alignItems: 'center' 
  }

  const iconLink: React.CSSProperties = {
    color: colors.background,
    textDecoration: 'none',
    transition: 'opacity 0.2s ease',
    opacity: 0.8,
  }

  const copyrightStyle: React.CSSProperties = {
    fontSize: 12,
    color: colors.background,
    opacity: 0.4,
    letterSpacing: '0.3px',
  }

  return (
    <footer style={footerStyle} aria-label="Footer">
      <div className="footerInner" style={innerStyle}>
        <div>
          <div style={titleStyle}>Conecte-se</div>
          <div style={iconsRow}>
            <a href="https://www.linkedin.com/witorlinhares" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={iconLink} className="iconLink">
              <FaLinkedin size={20} />
            </a>

            <a href="https://www.instagram.com/witorlinhares" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={iconLink} className="iconLink">
              <FaInstagram size={20} />
            </a>

            <a href="https://github.com/witorlinharess" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={iconLink} className="iconLink">
              <FaGithub size={20} />
            </a>

            <a href="https://discord.gg/eJFHGnJ6Pn" target="_blank" rel="noopener noreferrer" aria-label="Discord" style={iconLink} className="iconLink">
              <FaDiscord size={20} />
            </a>

            <a href="mailto:witorlinhares@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" style={iconLink} className="iconLink">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        <div style={copyrightStyle}>
          © 2024 Witor Linhares
        </div>

        <style jsx>{`
          .iconLink:hover {
            opacity: 1 !important;
          }

          @media (max-width: 767px) {
            .footerInner { flex-direction: column !important; gap: 40px !important; padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </footer>
  )
}