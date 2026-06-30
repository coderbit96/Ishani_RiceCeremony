import { MapPin } from 'lucide-react'
import eventData from '../data/eventData'

function FloatingActions() {
  const actions = [
    { href: eventData.googleMapLink, label: eventData.copy.openMapsButton, icon: MapPin, external: true },
  ]

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-row gap-2 rounded-full border border-white bg-white p-2 shadow-[0_0_0_6px_rgba(255,255,255,0.22),0_12px_35px_rgba(111,62,73,0.28)] backdrop-blur-xl sm:bottom-6 sm:right-6 sm:flex-col" aria-label="Quick contact actions">
      {actions.map(({ href, label, icon: Icon, external }) => (
        <a key={label} href={href} aria-label={label} title={label} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="group relative grid h-11 w-11 place-items-center rounded-full bg-white text-rosewood shadow-[0_0_22px_rgba(255,255,255,0.95)] ring-1 ring-champagne/20 transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,255,255,1)] sm:h-12 sm:w-12">
          <Icon size={18} strokeWidth={1.7} />
          <span className="pointer-events-none absolute right-14 hidden whitespace-nowrap rounded-full bg-rosewood px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">{label}</span>
        </a>
      ))}
    </div>
  )
}

export default FloatingActions
