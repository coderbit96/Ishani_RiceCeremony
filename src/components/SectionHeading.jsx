import { motion } from 'framer-motion'

function SectionHeading({ kicker, title, light = false, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
      className={`${align === 'left' ? 'text-left' : 'text-center'} max-w-3xl ${align === 'left' ? '' : 'mx-auto'}`}
    >
      <p className={`mb-4 text-[0.68rem] font-bold uppercase tracking-[0.32em] ${light ? 'text-petal' : 'text-champagne'}`}>
        {kicker}
      </p>
      <h2 className={`font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-rosewood'}`}>
        {title}
      </h2>
    </motion.div>
  )
}

export default SectionHeading
