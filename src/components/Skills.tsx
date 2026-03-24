import { useLang } from '../context/LanguageContext'

const skillGroups = [
  {
    category: { ko: '프론트엔드', en: 'Frontend' },
    icon: '🖥',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML / CSS', level: 90 },
    ],
  },
  {
    category: { ko: '모바일', en: 'Mobile' },
    icon: '📱',
    skills: [{ name: 'React Native', level: 85 }],
  },
  {
    category: { ko: '백엔드', en: 'Backend' },
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 88 },
      { name: 'C++', level: 70 },
    ],
  },
  {
    category: { ko: '게임 개발', en: 'Game Dev' },
    icon: '🎮',
    skills: [{ name: 'Unity', level: 78 }],
  },
  {
    category: { ko: '클라우드', en: 'Cloud & DevOps' },
    icon: '☁️',
    skills: [{ name: 'AWS', level: 75 }],
  },
  {
    category: { ko: '자동화 & 툴', en: 'Automation & Tools' },
    icon: '🛠',
    skills: [
      { name: 'Selenium', level: 92 },
      { name: 'Excel / VBA', level: 80 },
    ],
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '14px', color: '#cbd5e1', fontFamily: 'monospace' }}>{name}</span>
        <span style={{ fontSize: '12px', color: '#00d4ff', fontFamily: 'monospace' }}>{level}%</span>
      </div>
      <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%', width: `${level}%`,
            background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
            borderRadius: '2px', boxShadow: '0 0 8px rgba(0, 212, 255, 0.5)',
            transition: 'width 1s ease',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useLang()

  return (
    <section
      id="skills"
      className="section-pad"
      style={{ background: '#0d0d18', position: 'relative' }}
    >
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'monospace', color: '#00d4ff', fontSize: '13px', letterSpacing: '3px', marginBottom: '12px' }}>
            02. {t('기술', 'SKILLS')}
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, margin: 0, color: '#e2e8f0', letterSpacing: '-1px' }}>
            Tech Stack
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {skillGroups.map((group) => (
            <div
              key={group.category.en}
              style={{
                padding: '28px', background: '#13131f',
                border: '1px solid rgba(0, 212, 255, 0.1)',
                borderRadius: '12px', transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)'
                e.currentTarget.style.background = '#15151f'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.1)'
                e.currentTarget.style.background = '#13131f'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <span style={{ fontSize: '20px' }}>{group.icon}</span>
                <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#00d4ff', letterSpacing: '2px', fontWeight: 600 }}>
                  {t(group.category.ko, group.category.en)}
                </span>
              </div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '12px', color: '#334155', letterSpacing: '3px', marginBottom: '24px' }}>
            {t('전체 기술', 'ALL TECHNOLOGIES')}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {['React', 'React Native', 'Unity', 'AWS', 'C++', 'CSS', 'HTML', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Selenium', 'Excel'].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '6px 16px',
                  background: 'rgba(0, 212, 255, 0.06)',
                  border: '1px solid rgba(0, 212, 255, 0.15)',
                  borderRadius: '6px', fontSize: '13px', color: '#94a3b8',
                  fontFamily: 'monospace', transition: 'all 0.2s', cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 212, 255, 0.12)'
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.4)'
                  e.currentTarget.style.color = '#00d4ff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 212, 255, 0.06)'
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.15)'
                  e.currentTarget.style.color = '#94a3b8'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
