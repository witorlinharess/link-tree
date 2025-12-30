import Link from 'next/link'
import { FiSun } from 'react-icons/fi'
import { colors } from '../lib/colors'

export default function Header() {
  const headerStyle: React.CSSProperties = { position: 'fixed', left: 0, right: 0, top: 0, zIndex: 20 }
  const gradientStyle: React.CSSProperties = { background: `linear-gradient(180deg, ${colors.gradientStart} 0%, ${colors.gradientFade} 60%)`, position: 'absolute', left: 0, right: 0, top: 0, height: 896, pointerEvents: 'none', opacity: 0.95, }
  const navStyle: React.CSSProperties = { position: 'relative', zIndex: 30, maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 196 }
  const siteNameStyle: React.CSSProperties = { color: colors.text, fontSize: 18, fontWeight: 600, letterSpacing: '0.6px' }
  const listStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 28, fontSize: 14, color: colors.text, listStyle: 'none', margin: 0, padding: 0 }
  const linkStyle: React.CSSProperties = { color: colors.text, textDecoration: 'none' }

  return (
    <header style={headerStyle}>
      <div style={gradientStyle} aria-hidden />

      <nav style={navStyle}>
        <div style={siteNameStyle}>Chetan.</div>

        <ul style={listStyle}>
          <li><Link href="#" style={linkStyle}>Projetos</Link></li>
          <li><Link href="#" style={linkStyle}>Sobre</Link></li>
          <li><Link href="#" style={linkStyle}>Blog</Link></li>
          <li><Link href="#" style={linkStyle}>Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}
