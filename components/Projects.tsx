"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { colors } from '../lib/colors'

type Project = { id: number; title: string; description: string; image: string; url: string }

const PROJECTS: Project[] = [
  { id: 1, title: 'Teste do Projeto Um', description: 'Design de sites', image: '/projects/projeto-1.png', url: '#' },
  { id: 2, title: 'Projeto Dois', description: 'Desenvolvimento Web', image: '/projects/project-2.svg', url: '#' },
  { id: 3, title: 'Projeto Três', description: 'Design de Interface', image: '/projects/project-3.svg', url: '#' },
  { id: 4, title: 'Projeto Quatro', description: 'Branding', image: '/projects/project-4.svg', url: '#' },
  { id: 5, title: 'Projeto Cinco', description: 'Desenvolvimento Web', image: '/projects/project-2.svg', url: '#' },
  { id: 6, title: 'Projeto Seis', description: 'Design de sites', image: '/projects/project-3.svg', url: '#' }
]

export default function Projects({ count = 6 }: { count?: number }) {
  const projects = PROJECTS.slice(0, count)

  const [columns, setColumns] = useState<number>(2)

  useEffect(() => {
    const onResize = () => setColumns(window.innerWidth < 720 ? 1 : 2)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const sectionStyle: React.CSSProperties = { background: colors.background, color: colors.text, padding: '48px 16px' }
  const containerStyle: React.CSSProperties = { maxWidth: 1320, margin: '0 auto' }
  const gridStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 28 }
  const cardStyle: React.CSSProperties = { borderRadius: 12, overflow: 'hidden', background: colors.gray, border: '1px solid rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column' }
  const mediaStyle: React.CSSProperties = { position: 'relative', width: '100%', paddingBottom: '100%', flex: '0 0 auto' }
  const infoStyle: React.CSSProperties = { padding: 16, display: 'flex', alignItems: 'center' }
  const titleStyle: React.CSSProperties = { margin: 0, fontSize: 20 }
  const descStyle: React.CSSProperties = { margin: '6px 0 0', color: 'rgba(245,245,245,0.55)', fontSize: 14 }

  return (
    <section style={sectionStyle} aria-labelledby="projects-title">
      <div style={containerStyle}>
        <h2 id="projects-title" style={{ fontSize: 28, margin: '10px 0 6px' }}>Meus Projetos</h2>
        <p style={{ color: 'rgba(245,245,245,0.85)', marginBottom: 18 }}>Confira alguns dos meus melhores projetos.</p>

        <div style={gridStyle}>
          {projects.map(p => (
            <article key={p.id} style={cardStyle}>
              <div style={mediaStyle}>
                <Image src={p.image} alt={p.title} fill sizes="(min-width: 900px) 50vw, 100vw" style={{ objectFit: 'cover' }} />
              </div>

              <div style={infoStyle}>
                <div>
                  <h3 style={titleStyle}>{p.title}</h3>
                  <p style={descStyle}>{p.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
