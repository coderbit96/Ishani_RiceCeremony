const animals = [
  { icon: '🐘', left: '2%', size: '68px', duration: '18s', delay: '-3s', drift: '52px', rotation: '22deg', opacity: 0.42 },
  { icon: '🐰', left: '9%', size: '54px', duration: '15s', delay: '-11s', drift: '-44px', rotation: '-18deg', opacity: 0.38 },
  { icon: '🦒', left: '16%', size: '70px', duration: '21s', delay: '-7s', drift: '38px', rotation: '15deg', opacity: 0.36 },
  { icon: '🐼', left: '23%', size: '60px', duration: '17s', delay: '-14s', drift: '-48px', rotation: '-20deg', opacity: 0.4 },
  { icon: '🦁', left: '30%', size: '64px', duration: '20s', delay: '-5s', drift: '46px', rotation: '24deg', opacity: 0.37 },
  { icon: '🐻', left: '37%', size: '62px', duration: '16s', delay: '-9s', drift: '-40px', rotation: '-16deg', opacity: 0.4 },
  { icon: '🐨', left: '44%', size: '58px', duration: '19s', delay: '-16s', drift: '42px', rotation: '18deg', opacity: 0.38 },
  { icon: '🐯', left: '51%', size: '64px', duration: '22s', delay: '-12s', drift: '-52px', rotation: '-24deg', opacity: 0.39 },
  { icon: '🦊', left: '58%', size: '56px', duration: '17s', delay: '-6s', drift: '44px', rotation: '20deg', opacity: 0.41 },
  { icon: '🐵', left: '65%', size: '60px', duration: '20s', delay: '-18s', drift: '-38px', rotation: '-18deg', opacity: 0.39 },
  { icon: '🦓', left: '72%', size: '66px', duration: '19s', delay: '-2s', drift: '48px', rotation: '20deg', opacity: 0.37 },
  { icon: '🦛', left: '79%', size: '68px', duration: '23s', delay: '-15s', drift: '-45px', rotation: '-22deg', opacity: 0.38 },
  { icon: '🐸', left: '85%', size: '52px', duration: '16s', delay: '-8s', drift: '40px', rotation: '25deg', opacity: 0.42 },
  { icon: '🐶', left: '90%', size: '58px', duration: '18s', delay: '-13s', drift: '-42px', rotation: '-18deg', opacity: 0.41 },
  { icon: '🐱', left: '95%', size: '55px', duration: '17s', delay: '-4s', drift: '36px', rotation: '18deg', opacity: 0.4 },
  { icon: '🦄', left: '98%', size: '65px', duration: '22s', delay: '-19s', drift: '-54px', rotation: '-24deg', opacity: 0.38 },
]

function AnimalRain() {
  return (
    <div className="animal-rain pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {animals.map((animal, index) => (
        <span
          key={`${animal.icon}-${index}`}
          className="animal-rain-item"
          style={{
            '--animal-left': animal.left,
            '--animal-size': animal.size,
            '--animal-duration': animal.duration,
            '--animal-delay': animal.delay,
            '--animal-drift': animal.drift,
            '--animal-rotation': animal.rotation,
            '--animal-opacity': animal.opacity,
          }}
        >
          {animal.icon}
        </span>
      ))}
    </div>
  )
}

export default AnimalRain
