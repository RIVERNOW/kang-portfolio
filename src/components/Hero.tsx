import { useEffect, useState } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const { lang, t } = useLang()

  const roles = lang === 'ko'
    ? ['풀스택 개발자', 'Python 자동화 엔지니어', '유니티 게임 개발자', 'React / React Native 개발자', 'AWS 클라우드 엔지니어']
    : ['Full Stack Developer', 'Python Automation Engineer', 'Unity Game Developer', 'React / React Native Dev', 'AWS Cloud Engineer']

  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // 언어 변경 시 타이핑 리셋
  useEffect(() => {
    setRoleIndex(0)
    setDisplayed('')
    setTyping(true)
  }, [lang])

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex, roles])

  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 24px 0',
      }}
    >
      {/* Radial glows */}
      <div
        style={{
          position: 'absolute', top: '30%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', top: '60%', right: '10%',
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Available badge */}
        <div
          className="animate-fade-in-up"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px',
            background: 'rgba(0, 212, 255, 0.08)',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            borderRadius: '100px', marginBottom: '32px',
            fontSize: '13px', color: '#00d4ff', fontFamily: 'monospace',
          }}
        >
          <span
            style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#00d4ff', boxShadow: '0 0 8px #00d4ff',
              display: 'inline-block', animation: 'blink 1.5s ease-in-out infinite',
            }}
          />
          {t('작업 가능 · 외주 문의 환영', 'Available for work · Open to freelance')}
        </div>

        {/* Name */}
        <h1
          className="animate-fade-in-up delay-100"
          style={{
            fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800,
            margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-2px',
            color: '#e2e8f0', opacity: 0,
          }}
        >
          {t('안녕하세요, 저는 ', "Hi, I'm ")}{' '}
          <span className="glow" style={{ color: '#00d4ff' }}>
            {t('이제', 'YIJE KANG')}
          </span>
          {t('입니다', '')}
        </h1>

        {/* Typing role */}
        <div
          className="animate-fade-in-up delay-200"
          style={{
            fontSize: 'clamp(18px, 3vw, 28px)', fontFamily: 'monospace',
            color: '#7c3aed', marginBottom: '24px', minHeight: '40px', opacity: 0,
          }}
        >
          <span style={{ color: '#94a3b8' }}>// </span>
          {displayed}
          <span className="animate-blink" style={{ color: '#00d4ff' }}>|</span>
        </div>

        {/* Description */}
        <p
          className="animate-fade-in-up delay-300"
          style={{
            fontSize: '16px', color: '#64748b', maxWidth: '560px',
            margin: '0 auto 28px', lineHeight: 1.8, opacity: 0,
          }}
        >
          {t(
            '웹, 모바일, 게임, 자동화까지 — 아이디어를 코드로 구현합니다.',
            'Web, Mobile, Game, Automation — I turn ideas into working products.'
          )}
          <br />
          {t(
            '50+ 자동화 툴 개발 · Google Play & App Store 앱 출시',
            '50+ automation tools built · Apps live on Google Play & App Store'
          )}
        </p>

        {/* Freelance credentials */}
        <div
          className="animate-fade-in-up delay-300"
          style={{
            display: 'flex', gap: '12px', justifyContent: 'center',
            flexWrap: 'wrap', marginBottom: '40px', opacity: 0,
          }}
        >
          {[
            { icon: '🏆', ko: '크몽 Master 등급', en: 'Kmong Master Grade' },
            { icon: '✅', ko: '700건+ 프리랜서 납품', en: '700+ Freelance Deliveries' },
            { icon: '⭐', ko: '만족도 100%', en: '100% Satisfaction Rate' },
          ].map((badge) => (
            <div
              key={badge.ko}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '7px 16px',
                background: 'rgba(124,58,237,0.1)',
                border: '1px solid rgba(124,58,237,0.25)',
                borderRadius: '100px', fontSize: '13px', color: '#c4b5fd', fontFamily: 'monospace',
              }}
            >
              <span>{badge.icon}</span>
              {t(badge.ko, badge.en)}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className="animate-fade-in-up delay-400"
          style={{
            display: 'flex', gap: '16px', justifyContent: 'center',
            flexWrap: 'wrap', opacity: 0,
          }}
        >
          <a
            href="#projects"
            style={{
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #00d4ff, #0080ff)',
              border: 'none', borderRadius: '8px', color: '#000',
              fontWeight: 700, fontSize: '14px', textDecoration: 'none',
              letterSpacing: '1px', transition: 'all 0.3s ease',
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 212, 255, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.3)'
            }}
          >
            {t('프로젝트 보기', 'VIEW PROJECTS')}
          </a>
          <a
            href="#contact"
            style={{
              padding: '14px 32px', background: 'transparent',
              border: '1px solid rgba(0, 212, 255, 0.4)', borderRadius: '8px',
              color: '#00d4ff', fontWeight: 600, fontSize: '14px',
              textDecoration: 'none', letterSpacing: '1px', transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)'
              e.currentTarget.style.borderColor = '#00d4ff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.4)'
            }}
          >
            {t('연락하기', 'CONTACT ME')}
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-in-up delay-500"
          style={{
            marginTop: '80px', display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '8px', opacity: 0,
          }}
        >
          <span style={{ fontSize: '12px', color: '#334155', letterSpacing: '2px', fontFamily: 'monospace' }}>
            SCROLL
          </span>
          <div
            className="animate-float"
            style={{
              width: '20px', height: '32px',
              border: '2px solid rgba(0, 212, 255, 0.3)',
              borderRadius: '10px', display: 'flex', justifyContent: 'center', paddingTop: '4px',
            }}
          >
            <div
              style={{
                width: '4px', height: '8px', background: '#00d4ff',
                borderRadius: '2px', animation: 'float 1.5s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
