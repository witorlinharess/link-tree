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
    fontSize: 18, 
    fontWeight: 300, 
    lineHeight: 1.7,
    letterSpacing: '0.2px',
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
              Desenvolvedor Full Stack<br />orientado a resultados
            </h1>
           
            <div style={textStyle}>
              <p style={{ margin: '0 0 24px' }}>
                Sou desenvolvedor full stack focado em criar soluções digitais orientadas a resultado.
                Atuo no desenvolvimento de aplicações web e mobile, SaaS e sistemas sob medida, sempre partindo do problema antes da tecnologia.
              </p>

              <p style={{ margin: '0 0 24px' }}>
                Cada decisão técnica é tomada para reduzir risco, garantir performance e sustentar o crescimento do produto no longo prazo.
              </p>

              <p style={{ margin: 0 }}>
                Vamos conversar e avaliar a melhor solução para o seu cenário.
              </p>

              <a 
                href="mailto:witorlinhares@gmail.com" 
                style={{
                  display: 'inline-block',
                  marginTop: 40,
                  padding: '12px 32px',
                  background: colors.text,
                  color: colors.background,
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: '0.3px',
                  transition: 'opacity 0.2s ease',
                }}
                className="btnContact"
              >
                Iniciar conversa
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
          .btnContact:hover {
            opacity: 0.7;
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
