import { useEffect, useRef } from 'react'

const petals = [
  { left: '4%', size: '9px', delay: '-4s', duration: '19s', drift: '52px', rotation: '310deg', opacity: 0.25, color: '#e7b5bd' },
  { left: '14%', size: '12px', delay: '-13s', duration: '24s', drift: '-42px', rotation: '390deg', opacity: 0.2, color: '#c79856' },
  { left: '27%', size: '8px', delay: '-8s', duration: '21s', drift: '36px', rotation: '280deg', opacity: 0.22, color: '#f1cbd1' },
  { left: '39%', size: '11px', delay: '-18s', duration: '27s', drift: '-58px', rotation: '420deg', opacity: 0.18, color: '#d6a25e' },
  { left: '51%', size: '7px', delay: '-2s', duration: '18s', drift: '44px', rotation: '330deg', opacity: 0.25, color: '#edbec6' },
  { left: '62%', size: '13px', delay: '-15s', duration: '26s', drift: '-48px', rotation: '450deg', opacity: 0.18, color: '#c79856' },
  { left: '72%', size: '9px', delay: '-10s', duration: '22s', drift: '62px', rotation: '360deg', opacity: 0.23, color: '#e8b7bf' },
  { left: '81%', size: '11px', delay: '-21s', duration: '29s', drift: '-38px', rotation: '400deg', opacity: 0.18, color: '#d2a05d' },
  { left: '90%', size: '8px', delay: '-6s', duration: '20s', drift: '45px', rotation: '300deg', opacity: 0.24, color: '#f0c6cd' },
  { left: '96%', size: '10px', delay: '-16s', duration: '25s', drift: '-55px', rotation: '370deg', opacity: 0.2, color: '#c79856' },
]

function AmbientPetals() {
  const fieldRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let animationFrame
    const moveGlow = (event) => {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = window.requestAnimationFrame(() => {
        fieldRef.current?.style.setProperty('--pointer-x', `${event.clientX}px`)
        fieldRef.current?.style.setProperty('--pointer-y', `${event.clientY}px`)
      })
    }

    window.addEventListener('pointermove', moveGlow, { passive: true })
    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('pointermove', moveGlow)
    }
  }, [])

  return (
    <div ref={fieldRef} className="ambient-petals pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      <div className="ambient-glow ambient-glow-pointer" />
      <div className="ambient-glow ambient-glow-rose" />
      <div className="ambient-glow ambient-glow-gold" />
      {petals.map((petal, index) => (
        <span
          key={`${petal.left}-${index}`}
          className="ambient-petal"
          style={{
            '--petal-left': petal.left,
            '--petal-size': petal.size,
            '--petal-delay': petal.delay,
            '--petal-duration': petal.duration,
            '--petal-drift': petal.drift,
            '--petal-rotation': petal.rotation,
            '--petal-opacity': petal.opacity,
            color: petal.color,
          }}
        />
      ))}
    </div>
  )
}

export default AmbientPetals
