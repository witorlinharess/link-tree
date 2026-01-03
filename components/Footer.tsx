'use client';

import { FaLinkedin, FaInstagram, FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa'
import { SiCloudflare } from 'react-icons/si'
import { colors } from '../lib/colors'

export default function Footer(){
  const footerStyle: React.CSSProperties = { background: colors.footer, color: colors.text, padding: '50px 0' }
  const innerStyle: React.CSSProperties = { maxWidth: 1320, margin: '0 auto', paddingLeft: 48, paddingRight: 48 }
  const topRow: React.CSSProperties = { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24 }

  const leftCol: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 12 }
  const titleStyle: React.CSSProperties = { fontSize: 16, color: colors.textSecondary }
  // stack social icons vertically
  // social icons stacked vertically under the label
  const iconsRow: React.CSSProperties = { display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center' }

  const iconBox = (bg: string | undefined): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    borderRadius: 7,
    background: bg ?? colors.orange,
    color: colors.white,
    textDecoration: 'none',
    transition: 'transform 120ms ease, box-shadow 160ms ease'
  })

  const rightCol: React.CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }
  const verifiedRow: React.CSSProperties = { display: 'flex', gap: 10, alignItems: 'center', color: colors.textSecondary }

  return (
    <footer style={footerStyle} aria-label="Footer">
      <div style={innerStyle}>
        <div className="footerTop" style={topRow}>
          <div style={leftCol}>
            <div style={titleStyle}>Conecte-se comigo</div>
            <div style={iconsRow}>
              <a href="https://www.linkedin.com/witorlinhares" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={iconBox(colors.orange)}>
                <FaLinkedin size={18} />
              </a>

              <a href="https://www.instagram.com/witorlinhares" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={iconBox(colors.orange)}>
                <FaInstagram size={18} />
              </a>

              <a href="https://github.com/witorlinharess" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={iconBox(colors.orange)}>
                <FaGithub size={18} />
              </a>

              <a href="https://discord.gg/eJFHGnJ6Pn" target="_blank" rel="noopener noreferrer" aria-label="Discord" style={iconBox(colors.orange)}>
                <FaDiscord size={18} />
              </a>

              <a href="mailto:witorlinhares@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" style={iconBox(colors.orange)}>
                <FaEnvelope size={18} />
              </a>



            </div>
          </div>

          <div style={rightCol}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', color: colors.textSecondary }}>
                <span>Site protegido por</span>
                <SiCloudflare size={28} style={{ marginLeft: 8, color: colors.white, verticalAlign: 'middle' }} aria-hidden />
              </div>

            </div>

          </div>
        </div>

        <style jsx>{`
          @media (max-width: 767px) {
            .footerTop { flex-direction: column !important; align-items: flex-start !important; gap: 32px !important; }
            footer > div { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </footer>
  )
}