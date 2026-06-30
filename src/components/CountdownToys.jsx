const toys = [
  { icon: '🧸', left: '2%', size: '44px', duration: '15s', delay: '-4s', drift: '34px', rotation: '330deg', opacity: 0.72 },
  { icon: '🐰', left: '95%', size: '42px', duration: '18s', delay: '-12s', drift: '-38px', rotation: '-280deg', opacity: 0.7 },
  { icon: '🐼', left: '8%', size: '40px', duration: '16s', delay: '-9s', drift: '-30px', rotation: '300deg', opacity: 0.68 },
  { icon: '🚂', left: '90%', size: '41px', duration: '21s', delay: '-17s', drift: '42px', rotation: '-360deg', opacity: 0.68 },
  { icon: '🐻', left: '14%', size: '45px', duration: '19s', delay: '-14s', drift: '40px', rotation: '350deg', opacity: 0.7 },
  { icon: '🦄', left: '84%', size: '48px', duration: '22s', delay: '-6s', drift: '-36px', rotation: '-380deg', opacity: 0.68 },
  { icon: '🚗', left: '20%', size: '38px', duration: '14s', delay: '-19s', drift: '-44px', rotation: '320deg', opacity: 0.62 },
  { icon: '🐘', left: '78%', size: '46px', duration: '20s', delay: '-11s', drift: '38px', rotation: '-300deg', opacity: 0.66 },
  { icon: '🪁', left: '5%', size: '48px', duration: '24s', delay: '-21s', drift: '46px', rotation: '390deg', opacity: 0.64 },
  { icon: '🧩', left: '93%', size: '37px', duration: '17s', delay: '-8s', drift: '-42px', rotation: '-420deg', opacity: 0.58 },
  { icon: '🪀', left: '11%', size: '35px', duration: '15s', delay: '-2s', drift: '-34px', rotation: '460deg', opacity: 0.62 },
  { icon: '🐥', left: '87%', size: '39px', duration: '18s', delay: '-15s', drift: '40px', rotation: '-340deg', opacity: 0.66 },
  { icon: '🚀', left: '17%', size: '43px', duration: '23s', delay: '-10s', drift: '44px', rotation: '360deg', opacity: 0.56 },
  { icon: '⚽', left: '81%', size: '36px', duration: '16s', delay: '-5s', drift: '-38px', rotation: '-480deg', opacity: 0.58 },
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
