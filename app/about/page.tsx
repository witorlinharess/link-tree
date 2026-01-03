'use client';

import Image from 'next/image'
import { colors } from '../../lib/colors'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ButtonCta from '../../components/ButtonCta'

export default function AboutPage() {
  const wrapperStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', minHeight: '100vh', background: colors.background }
  // match header width/padding so content aligns with logo and links; make main grow so footer sticks to bottom
  const containerStyle: React.CSSProperties = { flex: 1, maxWidth: 1320, margin: '0 auto', padding: '160px 48px 80px' }
  // left column fixed to image width so the image aligns with the logo; right column fills remaining space
  const gridStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: '240px 1fr', gap: 48, alignItems: 'start' }
  const imgWrapperStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }
  const titleStyle: React.CSSProperties = { color: colors.text, fontSize: 'clamp(32px, 6vw, 38px)', fontWeight: 500, margin: '0 0 8px' }
  const sectionStyle: React.CSSProperties = { color: colors.text, fontSize: 'clamp(18px, 3.5vw, 20px)', fontWeight: 300, lineHeight: 1.6 }

  return (
    <div style={wrapperStyle}>
      <Header />

      <main style={containerStyle}>
        <div className="aboutGrid" style={gridStyle}>
          <div className="aboutImage" style={imgWrapperStyle}>
            <Image src="/witor-linhares.webp" alt="Witor Linhares" width={240} height={240} style={{ borderRadius: 12, objectFit: 'cover' }} />
          </div>

          <div>
            <h1 style={titleStyle}>Eu sou Witor Linhares</h1>
           

            <div style={sectionStyle}>
              <p>
                Sou desenvolvedor full stack e trabalho na construção de produtos digitais completos aplicações web e mobile, SaaS, sistemas e dashboards sempre com foco em performance, usabilidade e resultado.
Antes de escrever código, analiso o problema, o contexto e o impacto da solução. A tecnologia entra como meio, não como fim.
Atuo do backend ao frontend, tomando decisões técnicas e estratégicas pensadas para escala, manutenção e experiência do usuário.
              </p>

              <p style={{ marginTop: 20 }}>
                Quer saber mais ou conversar sobre um projeto? Me envie um e-mail.
              </p>
              <div style={{ fontSize: 14,marginBottom: 18 }}>
              <ButtonCta href="mailto:witorlinhares@gmail.com">Me envie um e‑mail</ButtonCta>
            </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 767px) {
            .aboutGrid { grid-template-columns: 1fr !important; gap: 32px !important; }
            .aboutImage { justify-content: flex-start !important; }
            main { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </main>

      <Footer />
    </div>
  )
}
