"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { colors } from '../lib/colors'
import ButtonCta from './ButtonCta'

type Project = { id: number; title: string; description: string; image: string; url: string }

const PROJECTS: Project[] = [
  { id: 1, title: 'Site Wefronti', description: 'Site desenvolvido para a Wefronti, empresa Brasileira de tecnologia.', image: '/projects/projeto-1.png', url: 'https://wefronti.com' },
  { id: 2, title: 'Projeto Dois', description: 'Desenvolvimento Web', image: '/projects/project-2.svg', url: '#' },
  { id: 3, title: 'Projeto Três', description: 'Design de Interface', image: '/projects/project-3.svg', url: '#' }
]

export default function Projects({ count = 3 }: { count?: number }) {
  const projects = PROJECTS.slice(0, count)

  // Force single column layout; card layout and sizing handled inline below
  const [columns] = useState<number>(1)

  const sectionStyle: React.CSSProperties = { background: colors.background, color: colors.text, padding: '28px 0' }
  // match Hero inner padding so content aligns exactly with Hero
  const containerStyle: React.CSSProperties = { maxWidth: 1320, margin: '0 auto', paddingLeft: 48, paddingRight: 48 }
  // one card per row
  const gridStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr', gap: 28 }

  // Card styles controlled here (no external CSS)
  const cardBaseStyle: React.CSSProperties = {
    borderRadius: 10,
    overflow: 'hidden',
    background: colors.card,
  }

  // image-focused card: image on top, content row below
  const mediaStyle: React.CSSProperties = { position: 'relative', width: '100%', paddingBottom: '56%', minHeight: 220, overflow: 'hidden' }
  const contentRow: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '18px 20px' }
  const titleStyle: React.CSSProperties = { margin: 0, fontSize: 'clamp(26px, 5vw, 20px)', fontWeight: 300, color: colors.text }
  const descStyle: React.CSSProperties = { margin: '6px 0 0', color: 'rgba(245,245,245,0.75)', fontSize: 'clamp(18px, 4vw, 14px)' }

  return (
    <section style={sectionStyle} aria-labelledby="projects-title">
      <div className="projectsContainer" style={containerStyle}>
        <h3 id="projects-title" style={{ fontSize: 'clamp(32px, 8vw, 38px)', fontWeight: 300, margin: '0 0 6px' }}>Meus Projetos</h3>
        <p style={{ color: colors.textSecondary, fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 300, marginBottom: 44 }}>Confira alguns dos meus melhores projetos.</p>

        <div style={gridStyle}>
          {projects.map(p => {
            const cardStyle: React.CSSProperties = {
              ...cardBaseStyle,
            }

            return (
              <article
                key={p.id}
                style={cardStyle}
                tabIndex={0}
                aria-labelledby={`proj-${p.id}-title`}
              >
                <div style={mediaStyle}>
                  <div style={{ position: 'absolute', inset: 0 }}>
                    <Image src={p.image} alt={p.title} fill sizes="(min-width: 900px) 50vw, 100vw" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                </div>

                <div className="projectContent" style={contentRow}>
                  <div style={{ flex: 1 }}>
                    <h3 id={`proj-${p.id}-title`} style={{ ...titleStyle }}>{p.title}</h3>
                    <p style={{ ...descStyle }}>{p.description}</p>
                  </div>

                  <div className="projectButton" style={{ marginLeft: 16 }}>
                    <ButtonCta href={p.url}>Ver projeto</ButtonCta>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <style jsx>{`
          @media (max-width: 767px) {
            .projectContent { flex-direction: column !important; align-items: flex-start !important; }
            .projectButton { margin-left: 0 !important; width: 100%; margin-top: 8px; }
            .projectsContainer { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
