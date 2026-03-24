import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import Lightbox from './Lightbox'

interface MediaItem { type: 'image' | 'video'; src: string }

interface BiText { ko: string; en: string }

interface Project {
  id: number
  title: string
  subtitle: BiText
  description: BiText
  highlights: BiText[]
  tags: string[]
  images?: string[]
  video?: string
  link?: string
  github?: string
  featured?: boolean
  category: string
  period?: string
  role?: BiText
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Instagram SMM Panel',
    subtitle: {
      ko: 'SNS 마케팅 서비스 풀스택 플랫폼',
      en: 'Full-Stack Social Media Marketing Panel',
    },
    period: '2025 ~ Present',
    role: {
      ko: '기획 · 설계 · 풀스택 개발 · 운영 (1인)',
      en: 'Sole developer — architecture, full-stack, ops',
    },
    description: {
      ko: '인스타그램 팔로워·좋아요·조회수 등 SNS 마케팅 서비스를 판매하는 완성형 SMM 패널입니다. 회원가입부터 주문 처리, 잔액 관리, 관리자 대시보드까지 모든 기능을 1인으로 설계하고 개발했습니다.',
      en: 'A full-featured SMM (Social Media Marketing) panel for selling Instagram followers, likes, views, and more. Designed and built entirely solo — from auth and order flow to balance management and admin dashboard.',
    },
    highlights: [
      { ko: 'SMMKings API 실시간 연동 — 주문 후 몇 분 내 작업 자동 시작', en: 'SMMKings API integration — orders auto-processed within minutes' },
      { ko: '선불 충전 시스템 — 계좌이체 입금 요청 → 관리자 수동 승인 → 잔액 반영', en: 'Prepaid wallet system — bank transfer request → admin approval → balance top-up' },
      { ko: 'Resend API 이메일 알림 — 입금 요청·완료 시 자동 발송', en: 'Resend API email notifications — auto-sent on deposit request & approval' },
      { ko: 'Supabase RLS 기반 데이터 보안 설계', en: 'Supabase Row Level Security for data isolation per user' },
      { ko: '주문 내역 본인만 조회 가능한 인증 중심 접근 제어', en: 'Auth-first design — users can only view their own order history' },
      { ko: '관리자 전용 /admin 대시보드 — 충전 승인, 주문 현황 모니터링', en: 'Admin-only /admin dashboard — approve charges, monitor order status' },
      { ko: '2,000만+ 완료 작업 · 9만+ 진행 회원 운영 중', en: '20M+ completed tasks · 90K+ active members in operation' },
    ],
    tags: ['Next.js', 'Supabase', 'TypeScript', 'PostgreSQL', 'Vercel', 'Resend', 'SMMKings API'],
    images: ['/images/smm1.png', '/images/smm2.png', '/images/smm3.png', '/images/smm4.png', '/images/smm5.png'],
    link: 'https://nextralopithecus.vercel.app/',
    github: 'https://github.com/RIVERNOW/SMM',
    featured: true,
    category: 'Web',
  },
  {
    id: 2,
    title: 'Space Craft',
    subtitle: {
      ko: '우주 슈팅 모바일 게임 — Google Play & App Store 출시',
      en: 'Space Shooting Mobile Game — Live on Google Play & App Store',
    },
    period: '2023',
    role: {
      ko: '기획 · 아트 · 개발 · 출시 (1인)',
      en: 'Solo developer — design, art, dev, publishing',
    },
    description: {
      ko: 'Unity + C++로 단독 개발하여 Google Play와 App Store에 직접 출시한 우주 슈팅 모바일 게임입니다. 게임 루프 설계, 적 AI 패턴, 터치 조작 시스템, 점수 저장까지 전 과정을 혼자 구현했습니다.',
      en: 'A space shooting mobile game built solo with Unity and C++, published personally to both Google Play and the App Store. Every system — game loop, enemy AI, touch controls, and score persistence — was implemented independently.',
    },
    highlights: [
      { ko: 'Google Play · App Store 동시 출시 (개인 퍼블리싱)', en: 'Dual release on Google Play & App Store (self-published)' },
      { ko: '터치 기반 슈팅 조작 — 터치 위치 추적 및 발사 시스템', en: 'Touch-based shooting — finger tracking & firing system' },
      { ko: '적 AI 패턴 설계 — 웨이브별 적 유형·이동 궤도 로직', en: 'Enemy AI patterns — per-wave types, movement trajectories' },
      { ko: '보스 등장 이벤트 및 단계별 난이도 상승 시스템', en: 'Boss encounter events with progressive difficulty scaling' },
      { ko: 'PlayerPrefs 기반 최고 점수(BEST) 영구 저장', en: 'Persistent best score via PlayerPrefs' },
      { ko: '우주 배경 파티클 이펙트 및 폭발 애니메이션 직접 제작', en: 'Custom space particle effects & explosion animations' },
    ],
    tags: ['Unity', 'C#', 'C++', 'Mobile', 'Google Play', 'App Store', 'Android', 'iOS'],
    video: '/videos/spacecraft.mp4',
    images: ['/images/spacecraft1.jpg', '/images/spacecraft2.jpg'],
    featured: true,
    category: 'Game',
  },
  {
    id: 3,
    title: 'Web Frontend (Freelance)',
    subtitle: {
      ko: '클라이언트 의뢰 웹사이트 — 프리랜서 납품',
      en: 'Client-commissioned Website — Freelance Delivery',
    },
    period: '2023 ~ 2024',
    role: {
      ko: '프론트엔드 개발 (외주)',
      en: 'Frontend developer (freelance)',
    },
    description: {
      ko: '크몽·숨고를 통해 의뢰받은 웹사이트 프론트엔드 제작 프로젝트입니다. 프레임워크 없이 순수 HTML·CSS·JavaScript만으로 구현하여 가볍고 빠른 퍼포먼스와 클라이언트 맞춤 UI를 제공했습니다.',
      en: 'Freelance frontend projects commissioned via Kmong & Soomgo. Built with pure HTML, CSS, and JavaScript — no frameworks — delivering lightweight, fast-loading pages tailored to each client.',
    },
    highlights: [
      { ko: '순수 HTML/CSS/JS — 별도 프레임워크 없이 가벼운 구현', en: 'Vanilla HTML/CSS/JS — no frameworks, minimal overhead' },
      { ko: '클라이언트 요구사항 기반 반응형 레이아웃 설계', en: 'Responsive layouts designed to client specifications' },
      { ko: 'CSS 애니메이션 및 인터랙티브 UI 요소 직접 구현', en: 'Custom CSS animations and interactive UI components' },
      { ko: '크로스 브라우저 호환성 확인 및 최적화', en: 'Cross-browser compatibility testing & optimization' },
      { ko: '납품 후 수정 요청 즉각 반영 — 높은 클라이언트 만족도', en: 'Rapid post-delivery revisions — high client satisfaction' },
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Freelance'],
    video: '/videos/web1.mp4',
    category: 'Web',
  },
  {
    id: 4,
    title: 'SNS Marketing Automation',
    subtitle: {
      ko: 'Instagram · Naver Blog · Facebook 자동화 프로그램',
      en: 'Instagram · Naver Blog · Facebook Automation Suite',
    },
    period: '2022 ~ 2023',
    role: {
      ko: '기획 · 개발 · 납품 (프리랜서)',
      en: 'Design, development & delivery (freelance)',
    },
    description: {
      ko: 'Python + Selenium으로 개발한 SNS 플랫폼 자동화 프로그램 시리즈입니다. 인스타그램 팔로워 대량 크롤링, 네이버 블로그 자동 댓글, 페이스북 자동 댓글 등 마케터의 반복 업무를 완전 자동화합니다.',
      en: 'A suite of SNS automation tools built with Python & Selenium. Automates repetitive marketing tasks including bulk Instagram follower scraping, Naver blog auto-commenting, and Facebook comment automation.',
    },
    highlights: [
      { ko: '인스타그램 팔로워 목록 전체 스크롤 크롤링 → openpyxl 엑셀 자동 저장', en: 'Full follower list scraping with infinite scroll → auto-saved to Excel via openpyxl' },
      { ko: 'BeautifulSoup HTML 파싱으로 프로필 데이터 정밀 추출', en: 'Precise profile data extraction via BeautifulSoup HTML parsing' },
      { ko: '네이버 블로그 다중 계정 자동 로그인 → 지정 블로그 댓글 자동 작성', en: 'Multi-account Naver login → auto-comment on specified blogs' },
      { ko: 'pyperclip 클립보드 방식으로 네이버 봇 탐지 우회', en: 'Clipboard-based input via pyperclip to bypass bot detection' },
      { ko: '페이스북 로그인 자동화 + 게시물 댓글 반복 작성', en: 'Facebook login automation + repeated post commenting' },
      { ko: '랜덤 딜레이 적용으로 자연스러운 사용 패턴 시뮬레이션', en: 'Randomized delays to simulate natural human usage patterns' },
    ],
    tags: ['Python', 'Selenium', 'BeautifulSoup', 'openpyxl', 'pyperclip', 'Automation'],
    images: ['/images/auto1.png', '/images/auto2.png'],
    category: 'Automation',
  },
  {
    id: 5,
    title: 'E-Commerce Automation Suite',
    subtitle: {
      ko: 'Auction · G마켓 · 스마트스토어 · 타오바오 자동화',
      en: 'Auction · Gmarket · SmartStore · Taobao Automation',
    },
    period: '2022 ~ 2024',
    role: {
      ko: '기획 · 개발 · 납품 (프리랜서)',
      en: 'Design, development & delivery (freelance)',
    },
    description: {
      ko: '국내외 주요 이커머스 플랫폼의 상품 관리를 완전 자동화한 프로그램 시리즈입니다. 셀러가 매일 수작업으로 반복하던 상품 등록·수정·크롤링 업무를 엑셀 한 장으로 처리합니다.',
      en: 'A suite of tools automating product management across major Korean and Chinese e-commerce platforms. Bulk-upload, edit, and scrape products from a single Excel file — replacing hours of manual seller work.',
    },
    highlights: [
      { ko: '옥션 상품 자동 대량 등록 — 엑셀 데이터 읽어 상품 정보·이미지 자동 입력', en: 'Auction bulk product listing — reads Excel, auto-fills product info & images' },
      { ko: 'G마켓 상품 전체 크롤링 → 타오바오 소싱 URL 자동 매핑 후 엑셀 저장', en: 'Gmarket full crawl → Taobao sourcing URL auto-mapping → exported to Excel' },
      { ko: '스마트스토어 상품 정보 일괄 수정 자동화 (RegMan v1.2)', en: 'SmartStore bulk product edit automation (RegMan v1.2)' },
      { ko: '스마트스토어 주문 데이터 크롤링 → 엑셀 자동 정리', en: 'SmartStore order data scraping → auto-organized to Excel' },
      { ko: '셀러그램 연동 상품 관리 자동화 — GUI 파일 선택 지원', en: 'Sellergram-integrated product management with GUI file picker' },
      { ko: '작업 완료 REPORT 자동 생성 — 시간·결과 로그 기록', en: 'Auto-generated completion REPORT with timestamped result logs' },
    ],
    tags: ['Python', 'Selenium', 'openpyxl', 'BeautifulSoup', 'tkinter', 'requests'],
    images: ['/images/auto3.png', '/images/auto4.png'],
    category: 'Automation',
  },
  {
    id: 6,
    title: 'Data Collection & Monitoring',
    subtitle: {
      ko: '당근마켓 · 대출나라 키워드 감지 · OCR 인식',
      en: 'Carrot Market · Loan Keyword Monitor · OCR',
    },
    period: '2022 ~ 2023',
    role: {
      ko: '기획 · 개발 · 납품 (프리랜서)',
      en: 'Design, development & delivery (freelance)',
    },
    description: {
      ko: '특정 플랫폼을 실시간으로 모니터링하다가 조건에 맞는 데이터가 감지되면 즉시 알림을 발송하는 자동화 프로그램입니다. 당근마켓 신규 매물 알림, 대출 키워드 SMS 발송, OCR 텍스트 추출을 포함합니다.',
      en: 'Real-time platform monitoring tools that fire instant alerts when conditions are met. Covers new listing alerts on Carrot Market, loan keyword detection with SMS, and OCR text extraction from images.',
    },
    highlights: [
      { ko: '당근마켓 키워드 기반 신규 게시물 실시간 감지 → 이메일 즉시 발송', en: 'Keyword-based new listing detection on Carrot Market → instant email alert' },
      { ko: '끌올 포함/미포함 필터 + 게시 시간 기준 필터링 로직', en: 'Bump-post toggle filter + time-based post filtering logic' },
      { ko: '대출나라 키워드 모니터링 — 지정 주기마다 새 게시물 탐색', en: 'Loan platform keyword monitoring — scans for new posts on a set interval' },
      { ko: 'Twilio REST API 연동으로 조건 충족 시 SMS 자동 발송', en: 'Twilio REST API integration — auto-SMS on condition match' },
      { ko: 'OpenCV + pytesseract OCR — 이미지에서 텍스트·숫자 자동 추출', en: 'OpenCV + pytesseract OCR — auto-extract text and numbers from images' },
      { ko: 'colorama 컬러 콘솔로 진행 상태 시각화', en: 'colorama colored console output for real-time status visualization' },
    ],
    tags: ['Python', 'Selenium', 'Twilio', 'OpenCV', 'pytesseract', 'smtplib', 'BeautifulSoup'],
    category: 'Automation',
  },
  {
    id: 7,
    title: 'Game & UI Automation',
    subtitle: {
      ko: 'PyAutoGUI + OpenCV 화면 인식 기반 자동 조작',
      en: 'Screen-recognition Automation via PyAutoGUI + OpenCV',
    },
    period: '2022 ~ 2023',
    role: {
      ko: '기획 · 개발 · 납품 (프리랜서)',
      en: 'Design, development & delivery (freelance)',
    },
    description: {
      ko: 'PyAutoGUI와 OpenCV 이미지 매칭을 결합하여 화면에서 특정 UI 요소를 자동 인식하고 클릭·입력하는 데스크탑 자동화 프로그램입니다. 게임 반복 작업부터 업무용 UI 자동 입력까지 다양하게 활용했습니다.',
      en: 'Desktop automation combining PyAutoGUI and OpenCV image matching to detect and interact with specific on-screen UI elements. Used for game macro automation and business UI input workflows.',
    },
    highlights: [
      { ko: 'PyAutoGUI locateOnScreen으로 화면 이미지 패턴 실시간 감지', en: 'Real-time on-screen image pattern detection via PyAutoGUI locateOnScreen' },
      { ko: '4분할 멀티 화면 영역에서 동시 자동 조작 처리', en: 'Simultaneous automation across 4 screen quadrants' },
      { ko: 'pydirectinput 게임 전용 입력 시뮬레이션 (Win32 DirectInput)', en: 'Game-specific input simulation via pydirectinput (Win32 DirectInput)' },
      { ko: 'win32api/win32con 로우레벨 키보드·마우스 이벤트 제어', en: 'Low-level keyboard & mouse event control via win32api/win32con' },
      { ko: 'confidence 파라미터 조정으로 오인식률 최소화', en: 'Tuned confidence threshold to minimize false-positive detections' },
      { ko: '랜덤 인터벌 딜레이로 봇 탐지 방지 패턴 구현', en: 'Randomized interval delays to avoid bot detection patterns' },
    ],
    tags: ['Python', 'PyAutoGUI', 'OpenCV', 'pydirectinput', 'win32api', 'pyperclip'],
    category: 'Automation',
  },
]

const categories = {
  keys: ['All', 'Web', 'Game', 'Automation'] as const,
  labels: { ko: { All: '전체', Web: '웹', Game: '게임', Automation: '자동화' }, en: { All: 'All', Web: 'Web', Game: 'Game', Automation: 'Automation' } },
}

function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useLang()
  const [expanded, setExpanded] = useState(false)
  const [lightbox, setLightbox] = useState<{ items: MediaItem[]; index: number } | null>(null)

  const colorMap: Record<string, string> = { Web: '#00d4ff', Game: '#f59e0b', Automation: '#a78bfa' }
  const color = colorMap[project.category] ?? '#00d4ff'

  const subtitle = project.subtitle[lang]
  const description = project.description[lang]
  const role = project.role?.[lang]
  const highlights = project.highlights.map((h) => h[lang])

  // 모든 미디어를 하나의 배열로
  const allMedia: MediaItem[] = [
    ...(project.video ? [{ type: 'video' as const, src: project.video }] : []),
    ...(project.images?.map((src) => ({ type: 'image' as const, src })) ?? []),
  ]
  const hasMedia = allMedia.length > 0

  const openLightbox = (index: number) => {
    if (hasMedia) setLightbox({ items: allMedia, index })
  }

  // 카드 미리보기용 — 첫 번째가 영상이면 영상, 아니면 이미지 슬라이더
  const [previewIndex, setPreviewIndex] = useState(0)
  const previewImages = project.images ?? []

  return (
    <>
      {lightbox && (
        <Lightbox
          items={lightbox.items}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

    <div
      style={{
        background: '#13131f', border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '16px', overflow: 'hidden', display: 'flex',
        flexDirection: 'column', transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}44`
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = `0 20px 40px ${color}18`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Media */}
      <div
        onClick={() => openLightbox(0)}
        style={{
          width: '100%', aspectRatio: '16/9',
          background: 'linear-gradient(135deg, #0f1020, #1a1a2e)',
          position: 'relative', overflow: 'hidden', flexShrink: 0,
          cursor: hasMedia ? 'zoom-in' : 'default',
        }}
      >
        {project.video ? (
          <video src={project.video} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
        ) : previewImages.length > 0 ? (
          <img src={previewImages[previewIndex]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontSize: '40px', color: `${color}22` }}>
            &lt;/&gt;
          </div>
        )}

        {/* Hover overlay */}
        {hasMedia && (
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'rgba(0,0,0,0)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.35)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0)' }}
          >
            <div
              style={{
                opacity: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                color: '#fff', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '2px',
                transition: 'opacity 0.2s',
              }}
              className="media-hover-label"
            >
              <span style={{ fontSize: '28px' }}>🔍</span>
              {t('클릭하여 크게 보기', 'Click to enlarge')}
            </div>
          </div>
        )}

        {/* Image dots (if multiple images and no video) */}
        {!project.video && previewImages.length > 1 && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px', zIndex: 2 }}
          >
            {previewImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setPreviewIndex(i) }}
                style={{
                  width: i === previewIndex ? '20px' : '6px', height: '6px', borderRadius: '3px',
                  background: i === previewIndex ? '#00d4ff' : 'rgba(255,255,255,0.4)',
                  border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        )}

        {/* Media count badge */}
        {allMedia.length > 1 && (
          <div
            style={{
              position: 'absolute', bottom: '10px', right: '10px',
              background: 'rgba(0,0,0,0.6)', borderRadius: '6px',
              padding: '3px 8px', fontSize: '11px', color: '#94a3b8',
              fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '4px',
            }}
          >
            📁 {allMedia.length}
          </div>
        )}

        <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{ padding: '3px 10px', background: `${color}22`, border: `1px solid ${color}55`, borderRadius: '100px', fontSize: '11px', color, fontFamily: 'monospace', letterSpacing: '1px' }}>
            {project.category}
          </span>
          {project.featured && (
            <span style={{ padding: '3px 10px', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.4)', borderRadius: '100px', fontSize: '11px', color: '#f59e0b', fontFamily: 'monospace', letterSpacing: '1px' }}>
              FEATURED
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '4px' }}>
          {project.period && <span style={{ fontSize: '11px', color, fontFamily: 'monospace', letterSpacing: '1px' }}>{project.period}</span>}
          {role && <span style={{ fontSize: '11px', color: '#475569', fontFamily: 'monospace' }}>{role}</span>}
        </div>

        <h3 style={{ margin: '0 0 4px', fontSize: '19px', fontWeight: 700, color: '#e2e8f0' }}>{project.title}</h3>
        <p style={{ margin: '0 0 12px', fontSize: '12px', color, fontFamily: 'monospace', letterSpacing: '0.5px' }}>{subtitle}</p>
        <p style={{ margin: '0 0 16px', color: '#64748b', fontSize: '13px', lineHeight: 1.75 }}>{description}</p>

        <ul style={{ margin: '0 0 8px', padding: 0, listStyle: 'none', flex: 1 }}>
          {(expanded ? highlights : highlights.slice(0, 4)).map((h, i) => (
            <li key={i} style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.65, paddingLeft: '14px', position: 'relative', marginBottom: '5px' }}>
              <span style={{ position: 'absolute', left: 0, color }}>▸</span>
              {h}
            </li>
          ))}
        </ul>

        {highlights.length > 4 && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{ background: 'none', border: 'none', color, fontSize: '12px', fontFamily: 'monospace', cursor: 'pointer', padding: '0 0 12px', textAlign: 'left', letterSpacing: '1px' }}
          >
            {expanded ? t('▲ 접기', '▲ Show less') : t(`▼ ${highlights.length - 4}개 더 보기`, `▼ ${highlights.length - 4} more`)}
          </button>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ padding: '3px 9px', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '4px', fontSize: '11px', color: '#a78bfa', fontFamily: 'monospace' }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              style={{ padding: '8px 18px', background: `${color}18`, border: `1px solid ${color}44`, borderRadius: '6px', color, textDecoration: 'none', fontSize: '12px', fontFamily: 'monospace', letterSpacing: '1px', transition: 'all 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = `${color}30`)}
              onMouseLeave={(e) => (e.currentTarget.style.background = `${color}18`)}
            >
              LIVE →
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ padding: '8px 18px', background: 'transparent', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '6px', color: '#94a3b8', textDecoration: 'none', fontSize: '12px', fontFamily: 'monospace', letterSpacing: '1px', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.5)'; e.currentTarget.style.color = '#e2e8f0' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.2)'; e.currentTarget.style.color = '#94a3b8' }}
            >
              GITHUB
            </a>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default function Projects() {
  const { lang, t } = useLang()
  const [activeCategory, setActiveCategory] = useState<'All' | 'Web' | 'Game' | 'Automation'>('All')

  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)
  const counts = { All: projects.length, Web: projects.filter(p => p.category === 'Web').length, Game: projects.filter(p => p.category === 'Game').length, Automation: projects.filter(p => p.category === 'Automation').length }

  return (
    <section id="projects" className="section-pad" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'monospace', color: '#00d4ff', fontSize: '13px', letterSpacing: '3px', marginBottom: '12px' }}>
          03. {t('포트폴리오', 'PORTFOLIO')}
        </p>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, margin: '0 0 16px', color: '#e2e8f0', letterSpacing: '-1px' }}>
          Projects
        </h2>
        <p style={{ color: '#64748b', fontSize: '15px', margin: '0 0 40px' }}>
          {t('웹 · 게임 · 자동화 — 직접 설계하고 납품·배포한 프로젝트들', 'Web · Game · Automation — projects I designed, delivered, and shipped')}
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {categories.keys.map((cat) => {
            const isActive = activeCategory === cat
            const label = categories.labels[lang][cat]
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px',
                  background: isActive ? 'rgba(0,212,255,0.15)' : 'transparent',
                  border: isActive ? '1px solid rgba(0,212,255,0.5)' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '100px',
                  color: isActive ? '#00d4ff' : '#64748b',
                  fontSize: '13px', fontFamily: 'monospace', cursor: 'pointer', letterSpacing: '1px', transition: 'all 0.2s',
                }}
              >
                {label}
                <span style={{ marginLeft: '8px', padding: '1px 7px', background: isActive ? 'rgba(0,212,255,0.2)' : 'rgba(255,255,255,0.06)', borderRadius: '100px', fontSize: '11px' }}>
                  {counts[cat]}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
        {filtered.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>

      <div className="stats-grid" style={{ marginTop: '80px', padding: '40px', background: '#13131f', border: '1px solid rgba(0,212,255,0.08)', borderRadius: '16px', textAlign: 'center' }}>
        {[
          { ko: '프리랜서 납품', en: 'Freelance Deliveries', value: '700+' },
          { ko: 'Python 자동화 툴', en: 'Automation Tools', value: '50+' },
          { ko: '출시 앱', en: 'Published Apps', value: '3+' },
          { ko: '클라이언트 만족도', en: 'Client Satisfaction', value: '100%' },
        ].map((s) => (
          <div key={s.en}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#00d4ff', fontFamily: 'monospace', marginBottom: '6px' }} className="glow-sm">
              {s.value}
            </div>
            <div style={{ fontSize: '12px', color: '#475569', letterSpacing: '1.5px', fontFamily: 'monospace' }}>
              {t(s.ko, s.en)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
