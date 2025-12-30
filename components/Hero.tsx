import { colors } from '../lib/colors'

export default function Hero(){
  const sectionStyle: React.CSSProperties = { background: colors.background, minHeight: '100vh', display: 'flex', alignItems: 'flex-start', color: colors.text }
  const innerStyle: React.CSSProperties = { maxWidth: 1320, margin: '0 auto', paddingLeft: 48, paddingRight: 48 }
  const subtitleStyle: React.CSSProperties = { fontWeight: 300, fontSize: 24, color: colors.textSecondary }
  const titleStyle: React.CSSProperties = { fontWeight: 300, fontSize: 'clamp(40px, 14vw, 80px)', lineHeight: 1.06, marginTop: 120,

    // gradient text using theme colors (45°) and improved rendering
    backgroundImage: `linear-gradient(115deg, ${colors.gradientStart} 0%, ${colors.gradientFinish} 100%)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '150% 150%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    // keep unprefixed fallback (some engines may ignore it for text clipping)
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block',
    textShadow: '0 1px 0 rgba(255,255,255,0.06)',
    WebkitFontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility'
  }

  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>

        <h1 style={titleStyle}>
          Desenvolvedor full stack focado em performance, resultado e experiência do usuário.
        </h1>
        <h2 style={subtitleStyle}>Código é só o meio. O foco é a solução.</h2>

      </div>
    </section>
  )
}
