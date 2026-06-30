import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import eventData from '../data/eventData'

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = eventData.navigation
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) setActiveHref(`#${visibleSection.target.id}`)
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0.05, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-500 ${scrolled ? 'bg-rosewood shadow-gold' : 'bg-rosewood shadow-sm'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="group flex items-center" aria-label={`${eventData.babyFullNameBengali}-র আমন্ত্রণের হোম`}>
          <span className="font-display text-xl font-semibold tracking-wide text-white">{eventData.babyFullNameBengali}</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {eventData.navigation.map((item) => (
            <a key={item.href} href={item.href} aria-current={activeHref === item.href ? 'page' : undefined} className={`relative py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${activeHref === item.href ? 'text-petal' : 'text-white/75 hover:text-white'}`}>
              {item.label}
              {activeHref === item.href && <motion.span layoutId="active-nav" className="absolute inset-x-0 -bottom-0.5 h-px bg-champagne" />}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white lg:hidden"
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
            className="overflow-hidden border-t border-white/10 bg-rosewood/95 backdrop-blur-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col px-6 py-5">
              {eventData.navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={activeHref === item.href ? 'page' : undefined} className={`border-b border-white/10 py-4 text-sm font-semibold last:border-0 ${activeHref === item.href ? 'text-petal' : 'text-white/85'}`}>
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
