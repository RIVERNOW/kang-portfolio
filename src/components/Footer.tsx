import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer style={{ padding: '40px 24px', borderTop: '1px solid rgba(0,212,255,0.08)', textAlign: 'center' }}>
      <p style={{ fontFamily: 'monospace', fontSize: '13px', color: '#334155', margin: 0 }}>
        <span style={{ color: '#00d4ff' }}>&lt;</span>
        {' '}{t('React + TypeScript로 제작', 'Built with React + TypeScript')}{' '}
        <span style={{ color: '#00d4ff' }}>/&gt;</span>
        {' '}·{' '}
        <span style={{ color: '#475569' }}>© 2026 {t('이제', 'YIJE KANG')}</span>
      </p>
    </footer>
  )
}
