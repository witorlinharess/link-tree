'use client';

import React, { useEffect, useState } from "react";
// keep motion import in case we want hover/animate later
import { cn } from '../../../../lib/utils' ;

export interface BoxesProps {
  className?: string;
}

export const Boxes = ({ className, ...rest }: BoxesProps) => {
  // sizing for boxes
  const BOX_W = 48
  const BOX_H = 24
  const GAP = 10

  const [grid, setGrid] = useState({ rows: 6, cols: 20 })

  useEffect(() => {
    function compute() {
      const w = window.innerWidth
      const h = window.innerHeight
      // Increase multiplier to cover skewed/rotated area completely
      const extra = 2.2
      const cols = Math.min(120, Math.ceil((w * extra) / (BOX_W + GAP)))
      const rows = Math.min(50, Math.ceil((h * extra) / (BOX_H + GAP)))
      setGrid({ rows, cols })
    }

    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  // border colors for outlines (subtle)
  const colors = [
    'rgba(66, 66, 66, 0.38)', // accent outline
    'rgba(159, 159, 159, 0.06)',  // faint white outline
  ]

  const { rows, cols } = grid

  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }} className={cn('')} {...rest}>
      {/* full-cover grid, transformed */}
      <div style={{ position: 'absolute', left: '-50%', top: '-50%', width: '180%', height: '180%', transform: 'skewX(-48deg) skewY(12deg) scale(1)', transformOrigin: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, ${BOX_W}px)`, gap: GAP, padding: 0 }}>
          {Array.from({ length: rows }).map((_, r) => (
            <React.Fragment key={r}>
              {Array.from({ length: cols }).map((_, c) => (
                <div key={`${r}-${c}`} style={{ width: BOX_W, height: BOX_H, borderRadius: 6, background: 'transparent', border: `1px solid ${colors[(r + c) % colors.length]}`, boxSizing: 'border-box' }} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
