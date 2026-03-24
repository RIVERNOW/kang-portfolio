import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: t('홈', 'Home'), href: '#hero' },
    { label: t('소개', 'About'), href: '#about' },
    { label: t('기술', 'Skills'), href: '#skills' },
    { label: t('프로젝트', 'Projects'), href: '#projects' },
    { label: t('연락', 'Contact'), href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 10, 15, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 212, 255, 0.1)' : '1px solid transparent',
      }}
    >
      {/* Left: Lang toggle + Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Language toggle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(0,212,255,0.06)',
            border: '1px solid rgba(0,212,255,0.15)',
            borderRadius: '100px',
            padding: '3px',
            gap: '2px',
          }}
        >
          {(['ko', 'en'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                padding: '4px 12px',
                borderRadius: '100px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                fontFamily: 'monospace',
                fontWeight: 600,
                letterSpacing: '1px',
                transition: 'all 0.2s',
                background: lang === l ? '#00d4ff' : 'transparent',
                color: lang === l ? '#000' : '#64748b',
              }}
            >
              {l === 'ko' ? '한국어' : 'EN'}
            </button>
          ))}
        </div>

        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: 'monospace',
            fontSize: '18px',
            fontWeight: 700,
            color: '#00d4ff',
            textDecoration: 'none',
            letterSpacing: '2px',
          }}
        >
          &lt;DEV /&gt;
        </a>
      </div>

      {/* Desktop nav */}
      <ul
        className="hidden-mobile"
        style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}
      >
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              style={{
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '14px',
                fontFamily: 'monospace',
                letterSpacing: '1px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="show-mobile"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#00d4ff',
          fontSize: '20px',
          display: 'none',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            background: 'rgba(10, 10, 15, 0.97)',
            borderBottom: '1px solid rgba(0, 212, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '16px',
                fontFamily: 'monospace',
                letterSpacing: '1px',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
