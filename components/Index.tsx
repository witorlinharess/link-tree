import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import { colors } from '../lib/colors'

export default function Index() {
  const pageStyle: React.CSSProperties = { minHeight: '70vh', background: colors.background, color: colors.text }
  const mainStyle: React.CSSProperties = { paddingTop: 120 } // leave space for fixed header

  return (
    <div style={pageStyle}>
      <Header />

      <main style={mainStyle}>
        <Hero />
        {/* short footer below the hero */}
        <Footer />
      </main>
    </div>
  )
}
