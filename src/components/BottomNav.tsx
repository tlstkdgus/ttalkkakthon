import { NavLink } from 'react-router-dom'
import { BookOpen, FlaskConical, Home, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { nav } from '../lib/copy'
import { appShellClass } from '../lib/shell'
import { cn } from '../lib/cn'
import { useEffectiveMode } from '../store/modeStore'

const pages = [
  { to: '/', end: true, Icon: Home, labelKey: 'home' as const },
  { to: '/learn', end: false, Icon: BookOpen, labelKey: 'learn' as const },
  { to: '/mz', end: false, Icon: FlaskConical, labelKey: 'mz' as const },
  { to: '/fortune', end: false, Icon: Sparkles, labelKey: 'fortune' as const },
]

function Clock() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
  )
  useEffect(() => {
    const t = setInterval(() => {
      setTime(new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }))
    }, 15_000)
    return () => clearInterval(t)
  }, [])
  return <>{time}</>
}

export function BottomNav() {
  const mode = useEffectiveMode()
  const isSecret = mode === 'secret'

  /* ─── Excel 모드: 시트 탭 ─── */
  if (isSecret) {
    return (
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-secret-border bg-[#f0eeec]"
        aria-label="주요 메뉴"
      >
        <div className={cn(appShellClass, 'flex items-end gap-px px-3 pt-1')}>
          {pages.map(({ to, end, Icon, labelKey }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-1.5 rounded-t border border-b-0 px-3 py-1.5 text-[11px] font-medium transition-colors sm:text-xs',
                  isActive
                    ? 'relative z-10 -mb-px border-secret-border bg-white text-secret-primary'
                    : 'border-transparent bg-[#e1dfdd] text-secret-muted hover:bg-[#edeae8] hover:text-secret-text',
                )
              }
            >
              <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2.25} aria-hidden />
              {labelKey === 'home'
                ? nav.home
                : labelKey === 'learn'
                  ? nav.learn(mode)
                  : labelKey === 'mz'
                    ? nav.mz(mode)
                    : nav.fortune(mode)}
            </NavLink>
          ))}
          {/* 플러스 버튼 장식 */}
          <button
            className="mb-0.5 ml-1 flex h-6 w-6 items-center justify-center rounded text-secret-muted hover:bg-secret-border hover:text-secret-text"
            tabIndex={-1}
            aria-hidden
          >
            <span className="text-sm leading-none">+</span>
          </button>
        </div>
        {/* 탭 하단 구분선 */}
        <div className="border-t border-secret-border bg-white pb-[max(0.25rem,env(safe-area-inset-bottom))]" />
      </nav>
    )
  }

  /* ─── Win95/XP 모드: 태스크바 ─── */
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#c0c0c0] win95-outset"
      style={{ height: '40px' }}
      aria-label="주요 메뉴"
    >
      <div
        className={cn(appShellClass, 'flex h-full items-center gap-1 px-1')}
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {/* 시작 버튼 */}
        <button
          className="flex h-[30px] shrink-0 items-center gap-1.5 rounded-none px-2.5 text-xs font-bold text-white"
          style={{
            background: 'linear-gradient(to bottom, #5ba85a 0%, #3a7a39 45%, #2e6b2d 55%, #4a8f49 100%)',
            border: '2px solid',
            borderColor: '#fff #404040 #404040 #fff',
            boxShadow: '1px 1px 0 rgba(0,0,0,0.3)',
          }}
          tabIndex={-1}
          aria-hidden
        >
          🪟 <span className="hidden sm:inline">시작</span>
        </button>

        {/* 구분선 */}
        <div className="mx-0.5 h-[24px] w-[2px] shrink-0" style={{ borderLeft: '1px solid #808080', borderRight: '1px solid #fff' }} />

        {/* 앱 탭들 */}
        <div className="flex min-w-0 flex-1 items-center gap-1">
          {pages.map(({ to, end, Icon, labelKey }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  'flex h-[30px] min-w-0 flex-1 items-center gap-1.5 overflow-hidden px-2 text-[10px] font-semibold text-boss-ink sm:text-xs',
                  isActive
                    ? 'win95-inset bg-[#d4d0c8]'
                    : 'win95-outset bg-[#c0c0c0] hover:bg-[#d4d0c8]',
                )
              }
            >
              <Icon className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              <span className="truncate">
                {labelKey === 'home'
                  ? nav.home
                  : labelKey === 'learn'
                    ? nav.learn(mode)
                    : labelKey === 'mz'
                      ? nav.mz(mode)
                      : nav.fortune(mode)}
              </span>
            </NavLink>
          ))}
        </div>

        {/* 구분선 */}
        <div className="mx-0.5 h-[24px] w-[2px] shrink-0" style={{ borderLeft: '1px solid #808080', borderRight: '1px solid #fff' }} />

        {/* 시계 */}
        <div
          className="flex h-[30px] shrink-0 items-center px-2 font-mono text-[10px] text-boss-ink sm:text-xs"
          style={{ border: '1px solid #808080', background: '#c0c0c0' }}
        >
          <Clock />
        </div>
      </div>
    </nav>
  )
}
