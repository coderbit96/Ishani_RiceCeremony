const balloons = [
  { left: '2%', size: '62px', duration: '17s', delay: '-5s', drift: '42px', color: '#e8b8c0', opacity: 0.32 },
  { left: '10%', size: '78px', duration: '23s', delay: '-17s', drift: '-54px', color: '#d7aa68', opacity: 0.24 },
  { left: '19%', size: '56px', duration: '16s', delay: '-11s', drift: '48px', color: '#7b4652', opacity: 0.2 },
  { left: '28%', size: '88px', duration: '26s', delay: '-22s', drift: '-46px', color: '#f0cbd1', opacity: 0.26 },
  { left: '38%', size: '68px', duration: '20s', delay: '-3s', drift: '52px', color: '#c79856', opacity: 0.22 },
  { left: '48%', size: '82px', duration: '24s', delay: '-14s', drift: '-58px', color: '#8a5360', opacity: 0.18 },
  { left: '58%', size: '60px', duration: '18s', delay: '-9s', drift: '44px', color: '#edc0c7', opacity: 0.28 },
  { left: '68%', size: '86px', duration: '27s', delay: '-24s', drift: '-50px', color: '#d7aa68', opacity: 0.22 },
  { left: '77%', size: '72px', duration: '21s', delay: '-7s', drift: '56px', color: '#e8b8c0', opacity: 0.27 },
  { left: '86%', size: '94px', duration: '28s', delay: '-19s', drift: '-62px', color: '#7b4652', opacity: 0.17 },
  { left: '93%', size: '64px', duration: '19s', delay: '-13s', drift: '46px', color: '#c79856', opacity: 0.23 },
  { left: '98%', size: '76px', duration: '25s', delay: '-4s', drift: '-52px', color: '#f0cbd1', opacity: 0.25 },
]

function HeroBalloons() {
  return (
    <div className="hero-balloons pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {balloons.map((balloon, index) => (
        <span
          key={`${balloon.left}-${index}`}
          className="hero-balloon"
          style={{
            '--balloon-left': balloon.left,
            '--balloon-size': balloon.size,
            '--balloon-duration': balloon.duration,
            '--balloon-delay': balloon.delay,
            '--balloon-drift': balloon.drift,
            '--balloon-opacity': balloon.opacity,
            '--balloon-color': balloon.color,
          }}
        />
      ))}
    </div>
  )
}

export default HeroBalloons
