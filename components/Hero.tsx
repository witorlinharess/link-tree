'use client';

import { colors } from '../lib/colors'

export default function Hero(){
  const sectionStyle: React.CSSProperties = { 
    background: colors.background,
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.text,
    padding: '120px 0 80px',
    position: 'relative'
  }
  
  const innerStyle: React.CSSProperties = { 
    maxWidth: 1200, 
    margin: '0 auto', 
    paddingLeft: 48, 
    paddingRight: 48,
    width: '100%'
  }
  
  const nameStyle: React.CSSProperties = { 
    fontWeight: 400, 
    fontSize: 'clamp(14px, 1.5vw, 16px)', 
    letterSpacing: '0.05em',
    marginBottom: 40,
    color: colors.textSecondary,
    textTransform: 'uppercase'
  }
  
  const titleStyle: React.CSSProperties = { 
    fontWeight: 300, 
    fontSize: 'clamp(40px, 6vw, 72px)', 
    lineHeight: 1.2, 
    letterSpacing: '-0.02em',
    margin: 0,
    color: colors.text
  }
  
  const descStyle: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 300,
    color: colors.textSecondary,
    lineHeight: 1.6,
    letterSpacing: '0.2px',
    maxWidth: 640,
    margin: 0,
    marginTop: 16,
  }

  return (
    <section style={sectionStyle}>
      <div className="heroInner fadeIn" style={innerStyle}>
        <div style={nameStyle}>Witor Linhares</div>
        <h1 style={titleStyle}>
          Full Stack Developer<br />
          focado em performance<br />
          e experiência
        </h1>
        <h2 style={descStyle}>
          Construindo produtos digitais com código limpo e design intencional.
          Especializado em aplicações web modernas e escaláveis.
        </h2>

        <div style={{ display: 'flex', gap: 16, marginTop: 40, alignItems: 'center' }}>
          <a 
            href="#portfolio" 
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: colors.text,
              color: colors.background,
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 400,
              letterSpacing: '0.3px',
              transition: 'opacity 0.2s ease',
            }}
            className="btnPrimary"
          >
            Portfólio
          </a>
          <a 
            href="/about" 
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: 'transparent',
              color: colors.text,
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 400,
              letterSpacing: '0.3px',
              border: `1px solid ${colors.border}`,
              transition: 'opacity 0.2s ease',
            }}
            className="btnSecondary"
          >
            Sobre Mim
          </a>
        </div>

        <style jsx>{`
          .btnPrimary:hover,
          .btnSecondary:hover {
            opacity: 0.7;
          }


          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }

          @media (max-width: 767px) {
            .heroInner { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
