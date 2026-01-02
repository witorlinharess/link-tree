import Image from 'next/image'
import { colors } from '../../lib/colors'

export const metadata = {
  title: 'Sobre | Witor Linhares',
  description: 'Saiba mais sobre Witor Linhares.'
}

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ButtonCta from '../../components/ButtonCta'

export default function AboutPage() {
  const wrapperStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', minHeight: '100vh', background: colors.background }
  // match header width/padding so content aligns with logo and links; make main grow so footer sticks to bottom
  const containerStyle: React.CSSProperties = { flex: 1, maxWidth: 1280, margin: '0 auto', padding: '160px 32px 80px' }
  // left column fixed to image width so the image aligns with the logo; right column fills remaining space
  const gridStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: '320px 1fr', gap: 48, alignItems: 'start' }
  const imgWrapperStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }
  const titleStyle: React.CSSProperties = { color: colors.text, fontSize: 38, fontWeight: 300, margin: '0 0 8px' }
  const sectionStyle: React.CSSProperties = { color: colors.text, fontSize: 20, fontWeight: 300, lineHeight: 1.6 }

  return (
    <div style={wrapperStyle}>
      <Header />

      <main style={containerStyle}>
        <div style={gridStyle}>
          <div style={imgWrapperStyle}>
            <Image src="/witor-linhares.webp" alt="Witor Linhares" width={320} height={320} style={{ borderRadius: 12, objectFit: 'cover' }} />
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
      </main>

      <Footer />
    </div>
  )
}
