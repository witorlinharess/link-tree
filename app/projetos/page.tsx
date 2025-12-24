import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { id: 1, title: 'Projeto 1', description: 'Descrição curta do projeto 1', image: '/projects/projeto-1.png', url: '#' },
  { id: 2, title: 'Projeto 2', description: 'Descrição curta do projeto 2', image: '/projects/project-2.svg', url: '#' },
  { id: 3, title: 'Projeto 3', description: 'Descrição curta do projeto 3', image: '/projects/project-3.svg', url: '#' },
  { id: 4, title: 'Projeto 4', description: 'Descrição curta do projeto 4', image: '/projects/project-4.svg', url: '#' }
]

export default function ProjetosPage(){
  return (
    <main className="page-root projetos-root">
      <div className="projects-container">
        <h1 className="projects-title">Meus Projetos</h1>
        <p className="projects-sub">Clique em visualizar para abrir o projeto (ou substitua os links pelas suas páginas).</p>

        <div className="projects-grid">
          {projects.map(p => (
            <article className="project-card" key={p.id}>
              <div className="project-media">
                <Image src={p.image} alt={p.title} fill sizes="(min-width: 900px) 50vw, 100vw" style={{ objectFit: 'cover' }} />
              </div>

              <div className="project-info">
                <div className="project-info-content">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>

                <div className="project-actions">
                  <Link href={p.url} className="btn" aria-label={`Visualizar ${p.title}`}>Visualizar projeto</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-note">Substitua as imagens em <code>/public/projects/</code> pelos seus projetos.</div>
      </div>
    </main>
  )
}
