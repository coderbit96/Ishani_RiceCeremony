import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import eventData from '../data/eventData'
import SectionHeading from './SectionHeading'

function Gallery() {
  return (
    <section id="gallery" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading kicker={eventData.copy.galleryKicker} title={eventData.copy.galleryTitle} align="left" />
          <div className="flex gap-3">
            <button className="gallery-prev grid h-12 w-12 place-items-center rounded-full border border-champagne/30 text-rosewood transition hover:bg-rosewood hover:text-white" aria-label="Previous photo"><ArrowLeft size={18} /></button>
            <button className="gallery-next grid h-12 w-12 place-items-center rounded-full border border-champagne/30 text-rosewood transition hover:bg-rosewood hover:text-white" aria-label="Next photo"><ArrowRight size={18} /></button>
          </div>
        </div>

        <Swiper
          className="gallery-swiper mt-12 !overflow-visible !pb-12"
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{ prevEl: '.gallery-prev', nextEl: '.gallery-next' }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3800, disableOnInteraction: false }}
          loop
          spaceBetween={18}
          slidesPerView={1.12}
          breakpoints={{ 640: { slidesPerView: 2.1 }, 1024: { slidesPerView: 3.15, spaceBetween: 24 } }}
        >
          {eventData.galleryImages.map((image, index) => (
            <SwiperSlide key={`${image.caption}-${index}`}>
              <figure className={`group relative overflow-hidden rounded-[1.5rem] bg-blush ${index % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[4/5]'}`}>
                <img src={image.src} alt={image.alt} style={{ objectPosition: image.position }} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-rosewood/65 via-transparent to-transparent opacity-80" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 font-display text-2xl italic text-white">{image.caption}</figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Gallery
