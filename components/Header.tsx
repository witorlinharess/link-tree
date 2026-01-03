'use client';

import Link from 'next/link'
import { colors } from '../lib/colors'
import React, { useEffect, useState } from 'react'

export default function Header() {
  const headerStyle: React.CSSProperties = { 
    position: 'fixed', 
    left: 270, 
    right: 270, 
    top: 20, 
    zIndex: 20, 
    height: 80, 
    background: colors.background, 
    border: `1px solid ${colors.border}`,
    borderRadius: 900,
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

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    if (menuOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link href="/" style={logoStyle}>
            WITOR LINHARES
          </Link>
          
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 12px',
              background: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: 24,
              fontSize: 12,
              color: colors.text,
              letterSpacing: '0.3px',
            }}
            className="badge"
          >
            <span className="pulse-dot"></span>
            Disponível para novos projetos
          </div>
        </div>

        <ul className="navList" style={listStyle}>
          <li><Link href="/projetos" style={linkStyle}>Projetos</Link></li>
          <li><Link href="/about" style={linkStyle}>Sobre</Link></li>
          <li><a href="https://discord.gg/eJFHGnJ6Pn" style={linkStyle}>Discord</a></li>
        </ul>

        <button
          className="menuButton"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
          style={{ display: 'none', background: 'transparent', color: colors.text, border: 'none', fontSize: 14, cursor: 'pointer' }}
        >
          Menu
        </button>

        <div className={`menuOverlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden={!menuOpen}></div>

        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal={menuOpen}
          className={`menuPanel ${menuOpen ? 'open' : ''}`}
          style={{ background: colors.background, borderLeft: `1px solid ${colors.border}` }}
        >
          <button className="closeButton" onClick={() => setMenuOpen(false)} aria-label="Fechar menu">×</button>

          <nav>
            <ul className="menuLinks" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li><Link href="/projetos" onClick={() => setMenuOpen(false)} style={linkStyle}>Projetos</Link></li>
              <li><Link href="/about" onClick={() => setMenuOpen(false)} style={linkStyle}>Sobre</Link></li>
              <li><a href="https://discord.gg/eJFHGnJ6Pn" onClick={() => setMenuOpen(false)} style={linkStyle}>Discord</a></li>
            </ul>
          </nav>
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

          nav :global(a[style*="border"]:hover) {
            background: ${colors.card};
            border-color: ${colors.text};
          }

          .menuButton { display: none; align-items: center; }

          .menuOverlay { display: none !important; position: fixed; inset: 0; background: rgba(0,0,0,0.2); z-index: 45; opacity: 0; pointer-events: none; transition: opacity .25s ease; }
          .menuOverlay.open { opacity: 1; pointer-events: auto; }

          .menuPanel { display: none !important; position: fixed; right: 0; top: 0; height: 100vh; width: 100%; max-width: 400px; transform: translateX(100%); transition: transform .32s ease; z-index: 50; flex-direction: column; padding: 80px 40px 40px; box-sizing: border-box; }
          .menuPanel.open { transform: translateX(0); }

          .menuLinks { display: flex; flex-direction: column; gap: 32px; font-size: 24px; font-weight: 300; letter-spacing: -0.5px; }
          .menuLinks a { color: ${colors.text}; }
          .menuLinks a:hover { opacity: 0.6; }

          .closeButton { position: absolute; top: 20px; right: 40px; background: transparent; border: none; font-size: 32px; cursor: pointer; color: ${colors.text}; padding: 0; line-height: 1; }

          @media (max-width: 767px) {
            .badge { display: none !important; }
            .navList { display: none !important; }
            .menuButton { display: inline-flex !important; }
            .menuOverlay { display: block !important; }
            .menuPanel { display: flex !important; }
            nav { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </nav>
    </header>
  )
}
