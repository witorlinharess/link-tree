import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaFolderOpen, FaArrowUp, FaArrowRight, FaCheck, FaLink, FaAlignRight, FaAngleUp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Page() {
  return (
    <main className="site-root">
      <Header />

      <div className="site-content">
        <Hero />
      </div>
    </main>
  )
}
