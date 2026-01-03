'use client';

import Link from 'next/link'
import { colors } from '../lib/colors'

type Props = {
  href?: string
  children?: React.ReactNode
  variant?: 'primary' | 'ghost'
  external?: boolean
}

export default function ButtonCta({ href = '#', children = 'Saiba mais', variant = 'primary', external = false }: Props) {
  const base: React.CSSProperties = {
    padding: '16px 32px',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: 16,
    display: 'inline-block',
    transition: 'transform 120ms ease, background 120ms ease',
    cursor: 'pointer'
  }

  const primaryStyle: React.CSSProperties = {
    ...base,
    background: colors.orange,
    color: colors.white,
  }

  const ghostStyle: React.CSSProperties = {
    ...base,
    background: colors.card,
    color: colors.white,
    border: `1px solid ${colors.gray}`
  }

  const style = variant === 'ghost' ? ghostStyle : primaryStyle

  return (
    <>
      <Link href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="button-cta" style={style} aria-label={typeof children === 'string' ? children : 'Call to action'}>
        {children}
      </Link>
      <style jsx>{`
        @media (max-width: 767px) {
          .button-cta { width: 100%; text-align: center; }
        }
      `}</style>
    </>
  )
}
