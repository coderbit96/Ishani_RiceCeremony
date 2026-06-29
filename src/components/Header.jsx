import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import eventData from '../data/eventData'

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream/90 shadow-sm backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label={`${eventData.babyName}'s invitation home`}>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-champagne/40 bg-white/70 font-display text-xl italic text-rosewood shadow-sm">
            {eventData.babyName.charAt(0)}
          </span>
          <span className="font-display text-xl font-semibold tracking-wide text-rosewood">{eventData.babyName}</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {eventData.navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-rosewood/10 bg-white/70 text-rosewood lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-rosewood/10 bg-cream/95 backdrop-blur-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col px-6 py-5">
              {eventData.navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-rosewood/10 py-4 text-sm font-semibold text-rosewood last:border-0">
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
