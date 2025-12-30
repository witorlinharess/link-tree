import { colors } from '../lib/colors'

export default function Hero(){
  const sectionStyle: React.CSSProperties = { background: colors.background, minHeight: '100vh', display: 'flex', alignItems: 'flex-start', color: colors.text }
  const innerStyle: React.CSSProperties = { maxWidth: 1320, margin: '0 auto', paddingLeft: 48, paddingRight: 48, paddingTop: 112, paddingBottom: 96 }
  const helloStyle: React.CSSProperties = { fontWeight: 300, fontSize: 'clamp(40px, 9vw, 120px)', lineHeight: 0.9, margin: 0 }
  const titleStyle: React.CSSProperties = { fontWeight: 300, fontSize: 'clamp(40px, 14vw, 160px)', lineHeight: 0.95, marginTop: 12 }
  const linksStyle: React.CSSProperties = { marginTop: 48, display: 'flex', gap: 32, opacity: 0.85, fontSize: 14 }
  const linkStyle: React.CSSProperties = { color: colors.text, textDecoration: 'none' }

  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <h1 style={helloStyle}>Hello <span aria-hidden>👋</span></h1>

        <h2 style={titleStyle}>
          I'm Chetan Verma - curious<br />
          designer and devloper<br />
          based in New Delhi, India.
        </h2>

        <div style={linksStyle}>
          <a href="#" style={linkStyle}>Github</a>
          <a href="#" style={linkStyle}>LinkedIn</a>
          <a href="#" style={linkStyle}>Twitter</a>
          <a href="#" style={linkStyle}>Blog</a>
          <a href="#" style={linkStyle}>Email</a>
        </div>
      </div>
    </section>
  )
}
