const toys = [
  { icon: '🧸', left: '2%', size: '62px', duration: '15s', delay: '-4s', drift: '44px', rotation: '330deg', opacity: 0.88 },
  { icon: '🐰', left: '97%', size: '58px', duration: '18s', delay: '-12s', drift: '-48px', rotation: '-280deg', opacity: 0.86 },
  { icon: '🐼', left: '8%', size: '56px', duration: '16s', delay: '-9s', drift: '-40px', rotation: '300deg', opacity: 0.84 },
  { icon: '🚂', left: '92%', size: '58px', duration: '21s', delay: '-17s', drift: '52px', rotation: '-360deg', opacity: 0.84 },
  { icon: '🐻', left: '14%', size: '64px', duration: '19s', delay: '-14s', drift: '50px', rotation: '350deg', opacity: 0.86 },
  { icon: '🦄', left: '86%', size: '66px', duration: '22s', delay: '-6s', drift: '-46px', rotation: '-380deg', opacity: 0.84 },
  { icon: '🚗', left: '20%', size: '54px', duration: '14s', delay: '-19s', drift: '-54px', rotation: '320deg', opacity: 0.8 },
  { icon: '🐘', left: '80%', size: '66px', duration: '20s', delay: '-11s', drift: '48px', rotation: '-300deg', opacity: 0.84 },
  { icon: '🪁', left: '5%', size: '64px', duration: '24s', delay: '-21s', drift: '56px', rotation: '390deg', opacity: 0.82 },
  { icon: '🧩', left: '95%', size: '52px', duration: '17s', delay: '-8s', drift: '-52px', rotation: '-420deg', opacity: 0.78 },
  { icon: '🪀', left: '27%', size: '50px', duration: '15s', delay: '-2s', drift: '-44px', rotation: '460deg', opacity: 0.8 },
  { icon: '🐥', left: '73%', size: '55px', duration: '18s', delay: '-15s', drift: '50px', rotation: '-340deg', opacity: 0.84 },
  { icon: '🚀', left: '33%', size: '60px', duration: '23s', delay: '-10s', drift: '54px', rotation: '360deg', opacity: 0.78 },
  { icon: '⚽', left: '67%', size: '52px', duration: '16s', delay: '-5s', drift: '-48px', rotation: '-480deg', opacity: 0.8 },
  { icon: '🦁', left: '39%', size: '62px', duration: '20s', delay: '-18s', drift: '48px', rotation: '320deg', opacity: 0.82 },
  { icon: '🎈', left: '61%', size: '58px', duration: '17s', delay: '-7s', drift: '-44px', rotation: '-300deg', opacity: 0.82 },
  { icon: '🐨', left: '45%', size: '59px', duration: '22s', delay: '-13s', drift: '52px', rotation: '350deg', opacity: 0.82 },
  { icon: '🛴', left: '55%', size: '56px', duration: '19s', delay: '-3s', drift: '-50px', rotation: '-390deg', opacity: 0.8 },
  { icon: '🐯', left: '24%', size: '61px', duration: '21s', delay: '-16s', drift: '46px', rotation: '330deg', opacity: 0.82 },
  { icon: '🎠', left: '76%', size: '64px', duration: '24s', delay: '-9s', drift: '-54px', rotation: '-360deg', opacity: 0.8 },
]

function CountdownToys() {
  return (
    <div className="countdown-toys pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {toys.map((toy, index) => (
        <span
          key={`${toy.icon}-${index}`}
          className="countdown-toy"
          style={{
            '--toy-left': toy.left,
            '--toy-size': toy.size,
            '--toy-duration': toy.duration,
            '--toy-delay': toy.delay,
            '--toy-drift': toy.drift,
            '--toy-rotation': toy.rotation,
            '--toy-opacity': toy.opacity,
          }}
        >
          {toy.icon}
        </span>
      ))}
    </div>
  )
}

export default CountdownToys
