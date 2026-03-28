import { NavLink } from 'react-router-dom'
import { BookOpen, FlaskConical, Home, Sparkles } from 'lucide-react'
import { nav } from '../lib/copy'
import { appShellClass } from '../lib/shell'
import { cn } from '../lib/cn'
import { useEffectiveMode } from '../store/modeStore'

const linkBaseExcel =
  'flex flex-1 flex-col items-center justify-center gap-1 rounded-sm py-2.5 text-[10px] font-semibold transition-colors sm:py-3 sm:text-[11px]'

const activeExcel = (isActive: boolean) =>
  cn(
    linkBaseExcel,
    isActive
      ? 'bg-white text-secret-primary shadow-excel ring-1 ring-secret-border'
      : 'text-secret-muted hover:bg-white/80 hover:text-secret-primary',
  )

const linkBaseWin95 =
  'flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-semibold transition-colors sm:py-2.5 md:gap-1 md:py-3 md:text-xs'

const activeWin95 = (isActive: boolean) =>
  cn(
    linkBaseWin95,
    isActive
      ? 'text-boss-primary underline decoration-2 underline-offset-2'
      : 'text-boss-muted hover:text-boss-ink',
  )

export function BottomNav() {
  const mode = useEffectiveMode()
  const isSecret = mode === 'secret'

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40',
        isSecret
          ? 'border-t border-secret-border bg-white/95 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm'
          : 'win95-outset border-t-2 border-t-white bg-boss-surface',
      )}
      aria-label="주요 메뉴"
    >
      <div
        className={cn(
          appShellClass,
          'flex items-stretch gap-1 px-2 pb-[max(0.4rem,env(safe-area-inset-bottom))] pt-2 sm:gap-2 sm:px-3',
        )}
      >
        {isSecret ? (
          <>
            <NavLink to="/" end className={({ isActive }) => activeExcel(isActive)}>
              <Home
                className="h-5 w-5 md:h-6 md:w-6"
                strokeWidth={2.25}
                aria-hidden
              />
              {nav.home}
            </NavLink>
            <NavLink to="/learn" className={({ isActive }) => activeExcel(isActive)}>
              <BookOpen
                className="h-5 w-5 md:h-6 md:w-6"
                strokeWidth={2.25}
                aria-hidden
              />
              {nav.learn(mode)}
            </NavLink>
            <NavLink to="/mz" className={({ isActive }) => activeExcel(isActive)}>
              <FlaskConical
                className="h-5 w-5 md:h-6 md:w-6"
                strokeWidth={2.25}
                aria-hidden
              />
              {nav.mz(mode)}
            </NavLink>
            <NavLink to="/fortune" className={({ isActive }) => activeExcel(isActive)}>
              <Sparkles
                className="h-5 w-5 md:h-6 md:w-6"
                strokeWidth={2.25}
                aria-hidden
              />
              {nav.fortune(mode)}
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/" end className={({ isActive }) => activeWin95(isActive)}>
              <Home className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.25} aria-hidden />
              {nav.home}
            </NavLink>
            <NavLink to="/learn" className={({ isActive }) => activeWin95(isActive)}>
              <BookOpen className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.25} aria-hidden />
              {nav.learn(mode)}
            </NavLink>
            <NavLink to="/mz" className={({ isActive }) => activeWin95(isActive)}>
              <FlaskConical className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.25} aria-hidden />
              {nav.mz(mode)}
            </NavLink>
            <NavLink to="/fortune" className={({ isActive }) => activeWin95(isActive)}>
              <Sparkles className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.25} aria-hidden />
              {nav.fortune(mode)}
            </NavLink>
          </>
        )}
      </div>
    </nav>
  )
}
