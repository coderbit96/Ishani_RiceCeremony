import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import eventData from '../data/eventData'
import SectionHeading from './SectionHeading'

function Gallery() {
  return (
    <section id="gallery" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading kicker={eventData.copy.galleryKicker} title={eventData.copy.galleryTitle} align="left" />

        <Swiper
          className="gallery-swiper mt-12 !overflow-hidden !pb-12"
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3800, disableOnInteraction: false }}
          rewind
          spaceBetween={18}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3, spaceBetween: 24 } }}
        >
          {eventData.galleryImages.map((image, index) => (
            <SwiperSlide key={`${image.caption}-${index}`}>
              <motion.figure whileHover={{ y: -8 }} whileTap={{ scale: 0.985 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }} className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-blush shadow-sm hover:shadow-soft">
                <img src={image.src} alt={image.alt} style={{ objectPosition: image.position }} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-rosewood/65 via-transparent to-transparent opacity-80" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 p-6 font-display text-2xl italic text-white transition duration-500 group-hover:translate-y-0">{image.caption}</figcaption>
              </motion.figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Gallery
