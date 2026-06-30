import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import eventData from '../data/eventData'
import CountdownToys from './CountdownToys'
import FloralMark from './FloralMark'

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-rosewood px-5 py-20 text-center text-white">
      <div className="alpana-dark absolute inset-0 opacity-[0.06]" />
      <CountdownToys />
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} className="relative mx-auto max-w-3xl">
        <p className="font-display text-2xl italic text-petal">{eventData.blessingsMessage}</p>
        <div className="my-8"><FloralMark light /></div>
        <p className="font-display text-5xl font-semibold">{eventData.babyName}</p>
        <p className="mt-2 font-bengali text-xl text-petal">{eventData.babyNameBengali}র {eventData.eventNameBengali}</p>
        <p className="mt-8 text-sm text-white/65">{eventData.copy.closing}</p>
        <div className="mx-auto my-8 h-px max-w-xs bg-white/15" />
        <p className="flex items-center justify-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/45">
          {eventData.copy.footerNote} <motion.span animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 1.8, repeat: Infinity }}><Heart size={12} className="fill-petal text-petal" /></motion.span>
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
