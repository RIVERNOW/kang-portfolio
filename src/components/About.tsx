import { useLang } from '../context/LanguageContext'

const kmongStats = [
  { ko: '누적 판매', en: 'Total Sales', value: '504건' },
  { ko: '누적 매출', en: 'Total Revenue', value: '29.2M원' },
  { ko: '만족도', en: 'Satisfaction', value: '5.0 / 5' },
  { ko: '메세지 응답률', en: 'Response Rate', value: '97%' },
  { ko: '주문성공률', en: 'Order Success', value: '100%' },
  { ko: '작업일 준수율', en: 'On-Time Rate', value: '100%' },
]

export default function About() {
  const { lang, t } = useLang()

  const stats = [
    { label: t('자동화 툴', 'Automation Tools'), value: '50+' },
    { label: t('기술 스택', 'Tech Stacks'), value: '12+' },
    { label: t('출시 앱', 'Published Apps'), value: '3+' },
    { label: t('플랫폼', 'Platforms'), value: 'Web·Mobile·Game' },
  ]

  return (
    <section
      id="about"
      className="section-pad"
      style={{ maxWidth: '1100px', margin: '0 auto' }}
    >
      <div style={{ marginBottom: '64px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'monospace', color: '#00d4ff', fontSize: '13px', letterSpacing: '3px', marginBottom: '12px' }}>
          01. {t('소개', 'ABOUT ME')}
        </p>
        <h2
          style={{
            fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700,
            margin: 0, color: '#e2e8f0', letterSpacing: '-1px',
          }}
        >
          {t('Who I Am', 'Who I Am')}
        </h2>
      </div>

      <div className="about-grid">
        {/* Text */}
        <div>
          <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.9, marginBottom: '24px' }}>
            {lang === 'ko'
              ? <>안녕하세요! 저는 <span style={{ color: '#00d4ff' }}>이제</span>입니다. 웹, 모바일, 게임, 자동화까지 다양한 분야에서 직접 개발하고 배포해온 개발자입니다.</>
              : <>Hi! I'm <span style={{ color: '#00d4ff' }}>YIJE KANG</span>, a developer who builds and ships products across web, mobile, game, and automation.</>
            }
          </p>
          <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.9, marginBottom: '24px' }}>
            {t(
              'Python + Selenium으로 50개 이상의 자동화 툴을 개발했고, Unity로 제작한 모바일 게임을 Google Play와 App Store에 직접 출시했습니다. React/Next.js 풀스택 웹 서비스도 운영 중입니다.',
              "I've built 50+ automation tools with Python & Selenium, shipped a mobile game to Google Play and the App Store with Unity, and run full-stack web services with React/Next.js."
            )}
          </p>
          <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.9 }}>
            {t(
              '크몽·숨고에서 700건 이상의 프리랜서 외주를 납품하며 만족도 100%, Master 등급을 달성했습니다. 실용적이고 완성도 높은 결과물을 만드는 것을 중요하게 생각합니다.',
              "On Korean freelance platforms (Kmong & Soomgo), I've delivered 700+ projects with a 100% satisfaction rate and achieved Master grade. I believe in shipping practical, polished products."
            )}
          </p>

          <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                padding: '12px 28px',
                background: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '8px', color: '#00d4ff', textDecoration: 'none',
                fontSize: '14px', fontFamily: 'monospace', letterSpacing: '1px', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 212, 255, 0.2)'
                e.currentTarget.style.borderColor = '#00d4ff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)'
              }}
            >
              {t('연락하기', 'GET IN TOUCH')}
            </a>
          </div>

          {/* Kmong Credentials */}
          <div
            style={{
              marginTop: '48px',
              padding: '28px 32px',
              background: 'linear-gradient(135deg, #13131f 0%, #0f0f1e 100%)',
              border: '1px solid rgba(255,180,0,0.25)',
              borderRadius: '14px',
              boxShadow: '0 0 30px rgba(255,180,0,0.05)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '20px' }}>🏆</span>
              <div>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#f59e0b', letterSpacing: '2px' }}>
                  KMONG
                </span>
                <span
                  style={{
                    marginLeft: '10px',
                    padding: '2px 10px',
                    background: 'rgba(255,180,0,0.12)',
                    border: '1px solid rgba(255,180,0,0.35)',
                    borderRadius: '100px',
                    fontSize: '11px', fontWeight: 700,
                    color: '#f59e0b', fontFamily: 'monospace', letterSpacing: '1.5px',
                  }}
                >
                  MASTER
                </span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {kmongStats.map((s) => (
                <div
                  key={s.en}
                  style={{
                    textAlign: 'center', padding: '12px 8px',
                    background: 'rgba(255,180,0,0.04)', borderRadius: '8px',
                    border: '1px solid rgba(255,180,0,0.1)',
                  }}
                >
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#fbbf24', fontFamily: 'monospace', marginBottom: '4px' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '10px', color: '#78716c', letterSpacing: '1px', fontFamily: 'monospace' }}>
                    {t(s.ko, s.en)}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '14px', textAlign: 'right' }}>
              <a
                href="https://kmong.com/@개발자강팀장"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '11px', color: '#78716c', fontFamily: 'monospace', textDecoration: 'none', letterSpacing: '1px' }}
              >
                {t('크몽 프로필 보기 →', 'View Kmong Profile →')}
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card-hover glow-border"
              style={{
                padding: '32px 24px',
                background: '#13131f',
                border: '1px solid rgba(0, 212, 255, 0.1)',
                borderRadius: '12px', textAlign: 'center',
              }}
            >
              <div
                className="glow"
                style={{
                  fontSize: stat.value.length > 5 ? '22px' : '38px',
                  fontWeight: 800, color: '#00d4ff', fontFamily: 'monospace',
                  lineHeight: 1, marginBottom: '8px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', color: '#64748b', letterSpacing: '1.5px', fontFamily: 'monospace' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
