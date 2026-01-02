import Header from '../../components/Header'
import Projects from '../../components/Projects'
import Footer from '../../components/Footer'
import { colors } from '../../lib/colors'

export const metadata = {
  title: 'Projetos – Witor Linhares',
}

export default function ProjetosPage(){
  const wrapperStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', minHeight: '100vh', background: colors.background, color: colors.text }
  const mainStyle: React.CSSProperties = { flex: 1, paddingTop: 140, paddingBottom: 60 }

  return (
    <div style={wrapperStyle}>
      <Header />

      <main style={mainStyle}>
        <Projects count={3} />
      </main>

      <Footer />
    </div>
  )
}
