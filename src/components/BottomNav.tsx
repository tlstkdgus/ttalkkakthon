import { NavLink } from 'react-router-dom'
import { BookOpen, FlaskConical, Home, Sparkles } from 'lucide-react'
import { nav } from '../lib/copy'
import { appShellClass } from '../lib/shell'
import { cn } from '../lib/cn'
import { useEffectiveMode } from '../store/modeStore'

const linkBase =
  'flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-semibold transition-colors sm:py-2.5 md:gap-1 md:py-3 md:text-xs'

export function BottomNav() {
  const mode = useEffectiveMode()
  const isSecret = mode === 'secret'

  const active = (isActive: boolean) =>
    cn(
      linkBase,
      isActive
        ? isSecret
          ? 'text-secret-accent'
          : 'text-boss-primary'
        : isSecret
          ? 'text-slate-500 hover:text-slate-300'
          : 'text-slate-500 hover:text-slate-800',
    )

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-md',
        isSecret
          ? 'border-white/10 bg-secret-bg/90'
          : 'border-slate-200/80 bg-boss-bg/90',
      )}
      aria-label="주요 메뉴"
    >
      <div
        className={cn(
          appShellClass,
          'flex pb-[max(0.35rem,env(safe-area-inset-bottom))]',
        )}
      >
        <NavLink to="/" end className={({ isActive }) => active(isActive)}>
          <Home
            className="h-5 w-5 md:h-6 md:w-6"
            strokeWidth={2.25}
            aria-hidden
          />
          {nav.home}
        </NavLink>
        <NavLink to="/learn" className={({ isActive }) => active(isActive)}>
          <BookOpen
            className="h-5 w-5 md:h-6 md:w-6"
            strokeWidth={2.25}
            aria-hidden
          />
          {nav.learn(mode)}
        </NavLink>
        <NavLink to="/mz" className={({ isActive }) => active(isActive)}>
          <FlaskConical
            className="h-5 w-5 md:h-6 md:w-6"
            strokeWidth={2.25}
            aria-hidden
          />
          {nav.mz(mode)}
        </NavLink>
        <NavLink to="/fortune" className={({ isActive }) => active(isActive)}>
          <Sparkles
            className="h-5 w-5 md:h-6 md:w-6"
            strokeWidth={2.25}
            aria-hidden
          />
          {nav.fortune(mode)}
        </NavLink>
      </div>
    </nav>
  )
}
