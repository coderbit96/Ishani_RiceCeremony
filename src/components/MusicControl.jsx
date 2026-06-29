import { useRef, useState } from 'react'
import { Music2, Pause } from 'lucide-react'
import eventData from '../data/eventData'

function MusicControl() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [unavailable, setUnavailable] = useState(false)

  if (!eventData.music.enabled) return null

  const toggleMusic = async () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
      return
    }

    try {
      await audioRef.current.play()
      setPlaying(true)
      setUnavailable(false)
    } catch {
      setPlaying(false)
      setUnavailable(true)
    }
  }

  const label = unavailable
    ? eventData.copy.musicUnavailable
    : playing ? eventData.copy.musicPause : eventData.copy.musicPlay

  return (
    <>
      <audio ref={audioRef} src={eventData.music.src} preload="none" loop onError={() => setUnavailable(true)} />
      <button type="button" onClick={toggleMusic} disabled={unavailable} aria-label={label} title={label} className="fixed bottom-4 left-4 z-40 grid h-12 w-12 place-items-center rounded-full border border-champagne/25 bg-rosewood text-white shadow-gold transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 sm:bottom-6 sm:left-6">
        {playing ? <Pause size={18} fill="currentColor" /> : <Music2 size={19} />}
        {playing && <span className="absolute inset-0 animate-ping rounded-full border border-petal/50" />}
      </button>
    </>
  )
}

export default MusicControl
