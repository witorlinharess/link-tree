'use client';

import { colors } from '../lib/colors'
import ButtonCta from './ButtonCta'

export default function Hero(){
  // reduce vertical footprint so Projects sits closer to Hero
  const sectionStyle: React.CSSProperties = { background: colors.background, minHeight: '72vh', display: 'flex', alignItems: 'flex-start', color: colors.text, borderBottom: `1px solid ${colors.line}`, paddingBottom: 40 }
  const innerStyle: React.CSSProperties = { maxWidth: 1320, margin: '0 auto', paddingLeft: 48, paddingRight: 48 }
  const subtitleStyle: React.CSSProperties = { fontWeight: 300, fontSize: 'clamp(26px, 3.5vw, 22px)', color: colors.textSecondary }
  const titleStyle: React.CSSProperties = { fontWeight: 300, fontSize: 'clamp(45px, 8vw, 80px)', lineHeight: 1.1, marginTop: 60,

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
      <div className="heroInner" style={innerStyle}>

        <h1 style={titleStyle}>
          Desenvolvedor full stack focado em performance, resultado e experiência do usuário.
        </h1>
        <div className="heroBottom" style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 20, width: '100%' }}>
          <h2 style={{ ...subtitleStyle, margin: 0 }}>Código é só o meio. O foco é a solução.</h2>

          {/* horizontal divider that fills space between h2 and the button */}
          <div className="heroDivider" aria-hidden style={{ flex: 1, height: 1, background: colors.gray, opacity: 0.9 }} />

          <div className="heroButtons" style={{ display: 'flex', gap: 12 }}>
            <ButtonCta href="#" external={true}>Iniciar um projeto</ButtonCta>
            <ButtonCta href="/projetos" variant="ghost">Portfólio</ButtonCta>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 767px) {
            .heroBottom { flex-direction: column; align-items: flex-start !important; gap: 20px !important; }
            .heroDivider { display: none !important; }
            .heroButtons { width: 100%; flex-direction: column; }
            .heroInner { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>

      </div>
    </section>
  )
}
