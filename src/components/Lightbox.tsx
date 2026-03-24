import { useEffect, useState, useCallback } from 'react'

interface MediaItem {
  type: 'image' | 'video'
  src: string
}

interface LightboxProps {
  items: MediaItem[]
  initialIndex: number
  onClose: () => void
}

export default function Lightbox({ items, initialIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex)

  const prev = useCallback(() => setCurrent((i) => (i - 1 + items.length) % items.length), [items.length])
  const next = useCallback(() => setCurrent((i) => (i + 1) % items.length), [items.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const item = items[current]

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.92)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.92) } to { opacity: 1; transform: scale(1) } }
      `}</style>

      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '20px', right: '24px',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '50%', width: '44px', height: '44px',
          color: '#e2e8f0', fontSize: '20px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s', zIndex: 10,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
      >
        ✕
      </button>

      {/* Counter */}
      {items.length > 1 && (
        <div
          style={{
            position: 'absolute', top: '24px', left: '50%', transform: 'translateX(-50%)',
            fontFamily: 'monospace', fontSize: '13px', color: '#64748b',
            background: 'rgba(0,0,0,0.5)', padding: '4px 14px', borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {current + 1} / {items.length}
        </div>
      )}

      {/* Prev button */}
      {items.length > 1 && (
        <button
          className="lb-nav"
          onClick={(e) => { e.stopPropagation(); prev() }}
          style={{
            position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '50%', width: '52px', height: '52px',
            color: '#e2e8f0', fontSize: '22px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s', zIndex: 10,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,212,255,0.2)'; e.currentTarget.style.borderColor = '#00d4ff' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
        >
          ‹
        </button>
      )}

      {/* Media */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw', maxHeight: '85vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'scaleIn 0.25s ease',
        }}
        key={current}
      >
        {item.type === 'video' ? (
          <video
            src={item.src}
            controls
            autoPlay
            style={{
              maxWidth: '90vw', maxHeight: '82vh',
              borderRadius: '12px',
              boxShadow: '0 0 60px rgba(0,212,255,0.15)',
            }}
          />
        ) : (
          <img
            src={item.src}
            alt=""
            style={{
              maxWidth: '90vw', maxHeight: '82vh',
              objectFit: 'contain', borderRadius: '12px',
              boxShadow: '0 0 60px rgba(0,212,255,0.15)',
            }}
          />
        )}
      </div>

      {/* Next button */}
      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          style={{
            position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '50%', width: '52px', height: '52px',
            color: '#e2e8f0', fontSize: '22px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s', zIndex: 10,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,212,255,0.2)'; e.currentTarget.style.borderColor = '#00d4ff' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
        >
          ›
        </button>
      )}

      {/* Thumbnail strip */}
      {items.length > 1 && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: '10px', alignItems: 'center',
            background: 'rgba(0,0,0,0.6)', padding: '10px 16px', borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.08)',
            maxWidth: '90vw', overflowX: 'auto',
          }}
        >
          {items.map((m, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: '56px', height: '40px', flexShrink: 0,
                borderRadius: '6px', overflow: 'hidden',
                border: i === current ? '2px solid #00d4ff' : '2px solid transparent',
                cursor: 'pointer', padding: 0, background: '#1a1a2e',
                transition: 'all 0.2s',
                opacity: i === current ? 1 : 0.5,
                boxShadow: i === current ? '0 0 10px rgba(0,212,255,0.4)' : 'none',
              }}
            >
              {m.type === 'video' ? (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00d4ff', fontSize: '16px', background: '#0f0f1a' }}>
                  ▶
                </div>
              ) : (
                <img src={m.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
