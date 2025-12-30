import Link from 'next/link'
import { FiSun } from 'react-icons/fi'
import { colors } from '../lib/colors'

export default function Header() {
  const headerStyle: React.CSSProperties = { position: 'fixed', left: 0, right: 0, top: 0, zIndex: 20 }
  const gradientStyle: React.CSSProperties = { background: `linear-gradient(180deg, ${colors.gradientStart} 0%, ${colors.gradientFade} 60%)`, position: 'absolute', left: 0, right: 0, top: 0, height: 96, pointerEvents: 'none', filter: 'blur(12px)', opacity: 0.95, zIndex: 20 }
  const navStyle: React.CSSProperties = { position: 'relative', zIndex: 30, maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 96 }
  const siteNameStyle: React.CSSProperties = { color: colors.text, fontSize: 18, fontWeight: 600, letterSpacing: '0.6px' }
  const listStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 28, fontSize: 14, color: colors.text, listStyle: 'none', margin: 0, padding: 0 }
  const linkStyle: React.CSSProperties = { color: colors.text, textDecoration: 'none' }

  return (
    <header style={headerStyle}>
      <div style={gradientStyle} aria-hidden />

      <nav style={navStyle}>
        <div style={siteNameStyle}>Chetan.</div>

        <ul style={listStyle}>
          <li><Link href="#" style={linkStyle}>Work</Link></li>
          <li><Link href="#" style={linkStyle}>About</Link></li>
          <li><Link href="#" style={linkStyle}>Blog</Link></li>
          <li><Link href="#" style={linkStyle}>Resume</Link></li>
          <li><Link href="#" style={linkStyle}>Contact</Link></li>
          <li style={{opacity: 0.6}}><FiSun size={16} /></li>
        </ul>
      </nav>
    </header>
  )
}
