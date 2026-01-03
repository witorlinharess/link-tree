'use client';

import Link from 'next/link'
import { colors } from '../lib/colors'
import React, { useEffect, useState } from 'react'

export default function Header() {
  const headerStyle: React.CSSProperties = { 
    position: 'fixed', 
    left: 0, 
    right: 0, 
    top: 0, 
    zIndex: 20, 
    height: 80, 
    background: colors.background,
    borderBottom: `1px solid ${colors.border}`,
  }
  
  const navStyle: React.CSSProperties = { 
    position: 'relative', 
    zIndex: 30, 
    maxWidth: 1200, 
    margin: '0 auto', 
    padding: '0 48px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    height: 80 
  }
  
  const logoStyle: React.CSSProperties = { 
    color: colors.text, 
    fontSize: 16, 
    fontWeight: 500, 
    letterSpacing: '0.5px',
    textDecoration: 'none',
  }
  
  const listStyle: React.CSSProperties = { 
    display: 'flex', 
    alignItems: 'center', 
    gap: 32, 
    fontSize: 14, 
    color: colors.textSecondary, 
    listStyle: 'none', 
    margin: 0, 
    padding: 0 
  }
  
  const linkStyle: React.CSSProperties = { 
    color: colors.text, 
    textDecoration: 'none',
    letterSpacing: '0.3px',
    transition: 'all 0.2s ease',
    padding: '8px 16px',
    border: `1px solid ${colors.border}`,
    borderRadius: 24,
    fontSize: 14,
  }

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    if (menuOpen) {
      window.addEventListener('keydown', onKey)
      document.addEventListener('click', handleClickOutside)
    }
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [menuOpen])

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest('.menuContainer')) {
      setMenuOpen(false)
    }
  }

  return (
    <>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <Link href="/" style={logoStyle}>
            WITOR LINHARES
          </Link>

          <button
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Menu"
            style={{
              background: 'transparent',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              transition: 'all 0.2s ease',
            }}
            className="menuButton"
          >
            <span style={{ width: 24, height: 2, background: colors.text, borderRadius: 2, transition: 'all 0.3s ease' }} className="bar1"></span>
            <span style={{ width: 24, height: 2, background: colors.text, borderRadius: 2, transition: 'all 0.3s ease' }} className="bar2"></span>
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div 
        className={`sidebarOverlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.4)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
          zIndex: 40,
        }}
      />

      {/* Sidebar */}
      <aside
        className={`sidebar ${menuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: 400,
          height: '100vh',
          background: colors.background,
          borderLeft: `1px solid ${colors.border}`,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          zIndex: 50,
          padding: '100px 48px 48px',
          boxSizing: 'border-box',
        }}
      >
        <div className="menuContainer" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h2 style={{
              fontSize: 14,
              fontWeight: 400,
              color: colors.textSecondary,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              Links úteis
            </h2>
            
            <Link 
              href="/portfolio" 
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '16px 0',
                color: colors.text,
                textDecoration: 'none',
                fontSize: 32,
                fontWeight: 300,
                letterSpacing: '-0.5px',
                transition: 'opacity 0.2s ease',
              }}
              className="sidebarLink"
            >
              Portfólio
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '16px 0',
                color: colors.text,
                textDecoration: 'none',
                fontSize: 32,
                fontWeight: 300,
                letterSpacing: '-0.5px',
                transition: 'opacity 0.2s ease',
              }}
              className="sidebarLink"
            >
              Sobre
            </Link>
            <a 
              href="https://discord.gg/eJFHGnJ6Pn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '16px 0',
                color: colors.text,
                textDecoration: 'none',
                fontSize: 32,
                fontWeight: 300,
                letterSpacing: '-0.5px',
                transition: 'opacity 0.2s ease',
              }}
              className="sidebarLink"
            >
              Discord
            </a>

            <div style={{
              marginTop: 40,
              paddingTop: 40,
              borderTop: `1px solid ${colors.border}`,
            }}>
              <a 
                href="mailto:witorlinhares@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
                className="contactLink"
              >
                <img 
                  src="/witor-linhares.webp" 
                  alt="Witor Linhares" 
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <div style={{
                    fontSize: 16,
                    color: colors.text,
                    fontWeight: 400,
                    letterSpacing: '0.3px',
                  }}>
                    Falar com Witor
                  </div>
                  <div style={{
                    fontSize: 14,
                    color: colors.textSecondary,
                    marginTop: 4,
                  }}>
                    witorlinhares@gmail.com
                  </div>
                </div>
              </a>
            </div>
          </nav>
        </div>
      </aside>

        <style jsx>{`
          .pulse-dot {
            width: 6px;
            height: 6px;
            background: #22c55e;
            border-radius: 50%;
            animation: pulse 2s ease-in-out infinite;
          }

          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
            }
            50% {
              box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
            }
          }

          .menuButton:hover .bar1,
          .menuButton:hover .bar2 {
            background: ${colors.textSecondary};
          }

          .sidebarLink:hover {
            opacity: 0.6;
          }

          .contactLink:hover {
            opacity: 0.7;
          }

          @media (max-width: 767px) {
            nav { padding-left: 20px !important; padding-right: 20px !important; }
            .sidebar { max-width: 100% !important; padding: 100px 20px 48px !important; }
          }
        `}</style>
    </>
  )
}
