'use client';

import Link from 'next/link'
import { FiSun } from 'react-icons/fi'
import { colors } from '../lib/colors'
import React, { useEffect, useState } from 'react'

export default function Header() {
  // keep header limited to nav height so gradient doesn't overlap hero
  const headerStyle: React.CSSProperties = { position: 'fixed', left: 0, right: 0, top: 0, zIndex: 20, height: 116, background: colors.background, borderBottom: `1px solid ${colors.line}` }
  const navStyle: React.CSSProperties = { position: 'relative', zIndex: 30, maxWidth: 1320, margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 116 }
  const siteNameStyle: React.CSSProperties = { color: colors.text, fontSize: 28, fontWeight: 600, letterSpacing: '0.6px' }
  const listStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 28, fontSize: 14, color: colors.text, listStyle: 'none', margin: 0, padding: 0 }
  const linkStyle: React.CSSProperties = { color: colors.text, textDecoration: 'none' }

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
        <div style={siteNameStyle}>
          <a href="https://witorlinhares.com" style={{ display: 'inline-block' }}>
            <img src="/logo.png" alt="Witor Linhares" style={{ height: 48 }} />
          </a>
        </div>

        <ul className="navList" style={listStyle}>
          <li><Link href="/projetos" style={linkStyle}>Projetos</Link></li>
          <li><Link href="/about" style={linkStyle}>Sobre</Link></li>
          <li><Link href="https://discord.gg/eJFHGnJ6Pn" style={linkStyle}>Discord</Link></li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="menuButton"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
          style={{ display: 'none', background: 'transparent', color: colors.text, border: 'none', fontSize: 18, cursor: 'pointer' }}
        >
          Menu <span className="plusIcon" style={{ marginLeft: 8 }}>+</span>
        </button>

        {/* Overlay */}
        <div className={`menuOverlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden={!menuOpen}></div>

        {/* Slide-in panel */}
        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal={menuOpen}
          className={`menuPanel ${menuOpen ? 'open' : ''}`}
          style={{ background: colors.background, borderLeft: `1px solid ${colors.line}` }}
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
          .menuButton { display: none; align-items: center; }
          .menuButton .plusIcon { font-weight: 300; font-size: 28px; line-height: 1; }

          .menuOverlay { display: none !important; position: fixed; inset: 0; background: rgba(0,0,0,0.32); z-index: 45; opacity: 0; pointer-events: none; transition: opacity .25s ease; }
          .menuOverlay.open { opacity: 1; pointer-events: auto; }

          .menuPanel { display: none !important; position: fixed; right: 0; top: 0; height: 100vh; width: 65vw; max-width: 360px; transform: translateX(100%); transition: transform .32s ease; z-index: 50; flex-direction: column; padding: 32px; box-sizing: border-box; }
          .menuPanel.open { transform: translateX(0); }

          .menuLinks { display: flex; flex-direction: column; gap: 24px; margin-top: 24px; font-size: 20px; }

          .closeButton { align-self: flex-end; background: transparent; border: none; font-size: 28px; cursor: pointer; color: ${colors.text}; padding: 8px 12px; line-height: 1; }

          @media (max-width: 767px) {
            .navList { display: none !important; }
            .menuButton { display: inline-flex !important; gap: 8px; }
            .menuOverlay { display: block !important; }
            .menuPanel { display: flex !important; }
            nav { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </nav>
    </header>
  )
}
