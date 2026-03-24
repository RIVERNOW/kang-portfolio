import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 18px',
    background: '#0f0f1a', border: '1px solid rgba(0,212,255,0.15)',
    borderRadius: '8px', color: '#e2e8f0', fontSize: '14px',
    fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box',
  }

  const links = [
    { label: 'EMAIL', value: 'kyjkyj1024@gmail.com', href: 'mailto:kyjkyj1024@gmail.com', icon: '✉️' },
    { label: 'GITHUB', value: 'github.com/RIVERNOW', href: 'https://github.com/RIVERNOW', icon: '🐙' },
    { label: t('크몽 (Master 등급)', 'Kmong (Master Grade)'), value: t('700건+ · 만족도 100%', '700+ Projects · 100% Satisfaction'), href: 'https://kmong.com/@개발자강팀장', icon: '🏆' },
    { label: t('숨고', 'Soomgo'), value: 'soomgo.com', href: 'https://soomgo.com', icon: '🔍' },
    { label: 'LinkedIn', value: 'yj-kang', href: 'https://www.linkedin.com/in/yj-kang-5965913b9', icon: '💼' },
    { label: t('네이버 블로그', 'Naver Blog'), value: 'blog.naver.com/kyjkyj1024', href: 'https://m.blog.naver.com/kyjkyj1024', icon: '📝' },
  ]

  return (
    <section id="contact" className="section-pad" style={{ background: '#0d0d18', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'monospace', color: '#00d4ff', fontSize: '13px', letterSpacing: '3px', marginBottom: '12px' }}>
            04. {t('연락', 'CONTACT')}
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, margin: '0 0 16px', color: '#e2e8f0', letterSpacing: '-1px' }}>
            {t('연락하기', 'Get In Touch')}
          </h2>
          <p style={{ color: '#64748b', fontSize: '15px', margin: 0 }}>
            {t('프로젝트 협업, 외주 의뢰, 채용 문의는 언제든지 환영합니다.', 'Open to collaborations, freelance projects, and job opportunities.')}
          </p>
        </div>

        {/* Links grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px', marginBottom: '48px' }}>
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '16px 20px', background: '#13131f',
                border: '1px solid rgba(0,212,255,0.1)', borderRadius: '10px',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'; e.currentTarget.style.background = '#151525' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.1)'; e.currentTarget.style.background = '#13131f' }}
            >
              <span style={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#00d4ff', letterSpacing: '1.5px', marginBottom: '3px' }}>{item.label}</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{ background: '#13131f', border: '1px solid rgba(0,212,255,0.1)', borderRadius: '16px', padding: '40px' }}
        >
          <div className="form-grid" style={{ marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontFamily: 'monospace', color: '#64748b', letterSpacing: '1px', marginBottom: '8px' }}>
                {t('이름', 'NAME')}
              </label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t('홍길동', 'John Doe')} style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.15)')}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontFamily: 'monospace', color: '#64748b', letterSpacing: '1px', marginBottom: '8px' }}>
                EMAIL
              </label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="email@example.com" style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.15)')}
              />
            </div>
          </div>

          <div style={{ marginBottom: '28px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontFamily: 'monospace', color: '#64748b', letterSpacing: '1px', marginBottom: '8px' }}>
              {t('메시지', 'MESSAGE')}
            </label>
            <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t('안녕하세요! 협업 관련 문의드립니다...', "Hi! I'd like to discuss a project...")}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.5)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.15)')}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%', padding: '16px',
              background: sent ? 'rgba(0,255,128,0.15)' : 'linear-gradient(135deg, #00d4ff, #0080ff)',
              border: sent ? '1px solid rgba(0,255,128,0.4)' : 'none',
              borderRadius: '8px', color: sent ? '#00ff80' : '#000',
              fontWeight: 700, fontSize: '14px', letterSpacing: '2px',
              fontFamily: 'monospace', cursor: 'pointer', transition: 'all 0.3s',
              boxShadow: sent ? 'none' : '0 0 30px rgba(0,212,255,0.3)',
            }}
          >
            {sent ? t('✓ 메시지 전송 완료', '✓ MESSAGE SENT') : t('메시지 보내기', 'SEND MESSAGE')}
          </button>
        </form>
      </div>
    </section>
  )
}
