import { colors } from '../lib/colors'

export default function Hero(){
  const sectionStyle: React.CSSProperties = { background: colors.background, minHeight: '100vh', display: 'flex', alignItems: 'flex-start', color: colors.text }
  const innerStyle: React.CSSProperties = { maxWidth: 1320, margin: '0 auto', paddingLeft: 48, paddingRight: 48, paddingTop: 112, paddingBottom: 96 }
  const titleStyle: React.CSSProperties = { fontWeight: 300, fontSize: 'clamp(40px, 14vw, 100px)', lineHeight: 1, marginTop: 140}

  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>

        <h1 style={titleStyle}>
          Olá, me chamo Witor, sou programador full stack. Veja meus projetos abaixo:
        </h1>

      </div>
    </section>
  )
}
