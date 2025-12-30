import Link from 'next/link'
import { colors } from '../lib/colors'

type Props = {
  href?: string
  children?: React.ReactNode
}

export default function ButtonCta({ href = '#', children = 'Saiba mais' }: Props) {
  const style: React.CSSProperties = {
    background: colors.white,
    color: colors.background,
    padding: '12px 48px',
    borderRadius: 5,
    textDecoration: 'none',
    fontWeight: 600,
    display: 'inline-block',
    transition: 'transform 120ms ease, background 120ms ease',
  }

  return (
    <Link href={href} className="button-cta" style={style} aria-label={typeof children === 'string' ? children : 'Call to action'}>
      {children}
    </Link>
  )
}
