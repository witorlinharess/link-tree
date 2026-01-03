"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { colors } from '../lib/colors'

type Project = { id: number; title: string; description: string; image: string; url: string }

const PROJECTS: Project[] = [
  { id: 1, title: 'Site Wefronti', description: 'Site desenvolvido para a Wefronti, empresa Brasileira de tecnologia.', image: '/projects/projeto-wefronti.png', url: 'https://wefronti.com' },
  // { id: 2, title: 'Projeto Dois', description: 'Desenvolvimento Web', image: '/projects/project-2.svg', url: '#' },
  // { id: 3, title: 'Projeto Três', description: 'Design de Interface', image: '/projects/project-3.svg', url: '#' },
  // { id: 4, title: 'Projeto Quatro', description: 'Aplicativo Mobile', image: '/projects/project-2.svg', url: '#' },
]

export default function Projects({ count = 4 }: { count?: number }) {
  const projects = PROJECTS.slice(0, count)

  const sectionStyle: React.CSSProperties = { 
    background: colors.background, 
    color: colors.text, 
    padding: '120px 0' 
  }
  
  const containerStyle: React.CSSProperties = { 
    maxWidth: 1200, 
    margin: '0 auto', 
    paddingLeft: 48, 
    paddingRight: 48 
  }
  
  const gridStyle: React.CSSProperties = { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: 64,
    rowGap: 96,
  }

  const cardBaseStyle: React.CSSProperties = {
    transition: 'opacity 0.2s ease',
    cursor: 'pointer'
  }

  const mediaStyle: React.CSSProperties = { 
    position: 'relative', 
    width: '100%', 
    paddingBottom: '125%', // 4:5 aspect ratio for vertical images
    overflow: 'hidden',
    background: colors.card,
    marginBottom: 24,
  }
  
  const titleStyle: React.CSSProperties = { 
    margin: 0, 
    fontSize: 24, 
    fontWeight: 300, 
    color: colors.text, 
    marginBottom: 8,
    letterSpacing: '-0.5px',
  }
  
  const descStyle: React.CSSProperties = { 
    margin: 0, 
    color: colors.textSecondary, 
    fontSize: 14, 
    lineHeight: 1.6,
    letterSpacing: '0.2px',
  }

  return (
    <section style={sectionStyle} aria-labelledby="projects-title">
      <div className="projectsContainer" style={containerStyle}>
        <h2 id="projects-title" style={{ fontSize: 14, fontWeight: 400, margin: '0 0 80px', color: colors.textSecondary, letterSpacing: '1px', textTransform: 'uppercase' }}>
          Projetos Selecionados
        </h2>

        <div className="projectsGrid" style={gridStyle}>
          {projects.map(p => {
            return (
              <Link
                key={p.id}
                href={p.url}
                target={p.url.startsWith('https') ? '_blank' : undefined}
                rel={p.url.startsWith('https') ? 'noopener noreferrer' : undefined}
                style={{ textDecoration: 'none' }}
              >
                <article
                  className="projectCard"
                  style={cardBaseStyle}
                  aria-labelledby={`proj-${p.id}-title`}
                >
                  <div style={mediaStyle}>
                    <Image 
                      src={p.image} 
                      alt={p.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw" 
                      style={{ objectFit: 'cover', objectPosition: 'top center' }}
                      quality={95}
                    />
                  </div>

                  <h3 id={`proj-${p.id}-title`} style={titleStyle}>{p.title}</h3>
                  <p style={descStyle}>{p.description}</p>
                </article>
              </Link>
            )
          })}
        </div>

        <style jsx>{`
          .projectCard:hover {
            opacity: 0.7;
          }

          @media (max-width: 767px) {
            .projectsGrid { grid-template-columns: 1fr !important; gap: 48px !important; row-gap: 64px !important; }
            .projectsContainer { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
