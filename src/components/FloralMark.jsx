function FloralMark({ light = false }) {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className={`h-px w-10 ${light ? 'bg-white/30' : 'bg-champagne/40'}`} />
      <svg viewBox="0 0 60 20" className={`h-5 w-14 ${light ? 'text-petal' : 'text-champagne'}`} fill="none">
        <path d="M3 11c12-1 18-5 27-8 9 3 15 7 27 8M30 3v14" stroke="currentColor" strokeWidth="1" />
        <path d="M19 7c2 0 5 2 6 5-3 0-6-1-7-4M41 7c-2 0-5 2-6 5 3 0 6-1 7-4M27 15c2-1 4-1 6 0-1 2-2 3-3 3s-2-1-3-3Z" fill="currentColor" />
      </svg>
      <span className={`h-px w-10 ${light ? 'bg-white/30' : 'bg-champagne/40'}`} />
    </div>
  )
}

export default FloralMark
