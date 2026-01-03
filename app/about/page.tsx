'use client';

import Image from 'next/image'
import { colors } from '../../lib/colors'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AboutPage() {
  const wrapperStyle: React.CSSProperties = { 
    display: 'flex', 
    flexDirection: 'column', 
    minHeight: '100vh', 
    background: colors.background 
  }
  
  const containerStyle: React.CSSProperties = { 
    flex: 1, 
    maxWidth: 1200, 
    margin: '0 auto', 
    padding: '160px 48px 120px' 
  }
  
  const gridStyle: React.CSSProperties = { 
    display: 'grid', 
    gridTemplateColumns: '280px 1fr', 
    gap: 80, 
    alignItems: 'start' 
  }
  
  const imgWrapperStyle: React.CSSProperties = { 
    display: 'flex', 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start' 
  }
  
  const titleStyle: React.CSSProperties = { 
    color: colors.text, 
    fontSize: 48, 
    fontWeight: 300, 
    margin: '0 0 32px',
    letterSpacing: '-1px',
    lineHeight: 1.2,
  }
  
  const textStyle: React.CSSProperties = { 
    color: colors.textSecondary, 
    fontSize: 16, 
    fontWeight: 300, 
    lineHeight: 1.7,
    letterSpacing: '0.2px',
  }
  
  const emailLinkStyle: React.CSSProperties = {
    display: 'inline-block',
    marginTop: 40,
    color: colors.text,
    textDecoration: 'none',
    fontSize: 16,
    letterSpacing: '0.3px',
    borderBottom: `1px solid ${colors.text}`,
    paddingBottom: 2,
    transition: 'opacity 0.2s ease',
  }

  return (
    <div style={wrapperStyle}>
      <Header />

      <main style={containerStyle}>
        <div className="aboutGrid" style={gridStyle}>
          <div className="aboutImage" style={imgWrapperStyle}>
            <Image 
              src="/witor-linhares.webp" 
              alt="Witor Linhares" 
              width={280} 
              height={280} 
              style={{ objectFit: 'cover' }} 
            />
          </div>

          <div>
            <h1 style={titleStyle}>
              Desenvolvedor full stack focado em soluções que funcionam
            </h1>
           
            <div style={textStyle}>
              <p style={{ margin: '0 0 24px' }}>
                Construo produtos digitais completos — aplicações web e mobile, SaaS, 
                sistemas e dashboards — sempre com foco em performance, usabilidade e resultado.
              </p>

              <p style={{ margin: '0 0 24px' }}>
                Antes de escrever código, analiso o problema, o contexto e o impacto da solução. 
                A tecnologia entra como meio, não como fim.
              </p>

              <p style={{ margin: 0 }}>
                Atuo do backend ao frontend, tomando decisões técnicas e estratégicas 
                pensadas para escala, manutenção e experiência do usuário.
              </p>

              <a 
                href="mailto:witorlinhares@gmail.com" 
                style={emailLinkStyle}
                className="emailLink"
              >
                witorlinhares@gmail.com
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
          .emailLink:hover {
            opacity: 0.6;
          }

          @media (max-width: 767px) {
            .aboutGrid { grid-template-columns: 1fr !important; gap: 40px !important; }
            .aboutImage { justify-content: flex-start !important; }
            main { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </main>

      <Footer />
    </div>
  )
}
