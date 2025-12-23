import Image from 'next/image'
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaFolderOpen, FaArrowUp, FaArrowRight, FaCheck, FaLink, FaAlignRight, FaAngleUp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Page() {
  return (
    <main className="page-root">
      <div className="card">
        <div className="profile">
          <div className="avatar-wrap">
            <div className="avatar-ring">
              <Image src="/witor-linhares.webp" width={140} height={140} alt="Witor Linhares" className="avatar" priority />
            </div>
          </div>

          <h1 className="name">Witor Linhares | Dev Full Stack</h1>
          <p className="subtitle">Links úteis que irão lhe ajudar:</p>

          <div className="socials">
            <a className="social" href="https://www.linkedin.com/in/witorlinhares" aria-label="LinkedIn"><FaLinkedin size={16} /></a>
            <a className="social" href="https://github.com/witorlinharess" aria-label="GitHub"><FaGithub size={16} /></a>
            <a className="social" href="https://www.instagram.com/witorlinhares" aria-label="Instagram"><FaInstagram size={16} /></a>
            <a className="social" href="mailto:witorlinhares@gmail.com" aria-label="Email"><HiOutlineMail size={16} /></a>
          </div>
        </div>

        <div className="links-panel">
          <a className="link-card" href="https://wefronti.com" target="_blank" rel="noopener noreferrer">
            <div className="left-icon"><span className="inner-icon"><FaAngleUp /></span></div>
            <div className="link-text">Orçamento | Conheça a Wefronti</div>
          </a>

          <a className="link-card" href="https://witorlinhares.com/projetos" target="_blank" rel="noopener noreferrer">
            <div className="left-icon"><span className="inner-icon"><FaFolderOpen /></span></div>
            <div className="link-text">Veja meus projetos</div>
          </a>

          <a className="link-card" href="#">
            <div className="left-icon"><span className="inner-icon"><FaDiscord /></span></div>
            <div className="link-text">Servidor no Discord</div>
          </a>
        </div>
      </div>
    </main>
  )
}
