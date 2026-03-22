import { useState, useEffect } from 'react'
import './ScrollToTop.css'

export default function ScrollToTop({ sentinelId }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById(sentinelId)
    if (!sentinel) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only show when sentinel has scrolled above the viewport (not below)
        if (!entry.isIntersecting) {
          setVisible(entry.boundingClientRect.top < 0)
        } else {
          setVisible(false)
        }
      },
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [sentinelId])

  return (
    <button
      className={`scroll-to-top${visible ? ' scroll-to-top--visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}
