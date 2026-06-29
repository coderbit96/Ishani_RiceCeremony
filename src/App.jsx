import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import AboutBaby from './components/AboutBaby'
import Invitation from './components/Invitation'
import EventDetails from './components/EventDetails'
import Celebration from './components/Celebration'
import Gallery from './components/Gallery'
import LocationSection from './components/LocationSection'
import BlessingsSection from './components/BlessingsSection'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import MusicControl from './components/MusicControl'
import eventData from './data/eventData'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })

  useEffect(() => {
    document.title = eventData.seo.title
    const tags = {
      'meta[name="description"]': eventData.seo.description,
      'meta[property="og:title"]': eventData.seo.title,
      'meta[property="og:description"]': eventData.seo.description,
      'meta[property="og:image"]': new URL(eventData.seo.shareImage, window.location.origin).href,
      'meta[property="og:url"]': window.location.href,
    }

    Object.entries(tags).forEach(([selector, content]) => {
      document.querySelector(selector)?.setAttribute('content', content)
    })
  }, [])

  return (
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-champagne" style={{ scaleX }} />
      <Header />
      <main>
        <Hero />
        <Countdown />
        <AboutBaby />
        <Invitation />
        <EventDetails />
        <Celebration />
        <Gallery />
        <LocationSection />
        <BlessingsSection />
      </main>
      <Footer />
      <MusicControl />
      <FloatingActions />
    </>
  )
}

export default App
