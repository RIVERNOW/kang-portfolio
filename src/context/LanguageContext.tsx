import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

type Lang = 'ko' | 'en'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (ko: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ko',
  setLang: () => {},
  t: (ko) => ko,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    // 1. 저장된 설정 우선
    const saved = localStorage.getItem('portfolio-lang') as Lang | null
    if (saved === 'ko' || saved === 'en') return saved
    // 2. 브라우저 언어 감지 — 한국어가 아니면 영어
    const browserLang = navigator.language || (navigator as any).userLanguage || ''
    return browserLang.toLowerCase().startsWith('ko') ? 'ko' : 'en'
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('portfolio-lang', l)
  }

  const t = (ko: string, en: string) => (lang === 'ko' ? ko : en)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
