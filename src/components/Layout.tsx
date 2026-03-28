import { BottomNav } from './BottomNav'
import { BrandTitle } from './BrandTitle'
import { AnimatedOutlet } from './AnimatedOutlet'
import { brand } from '../lib/copy'
import { appShellClass } from '../lib/shell'
import { cn } from '../lib/cn'
import { useEffectiveMode } from '../store/modeStore'

export function Layout() {
  const mode = useEffectiveMode()
  const isSecret = mode === 'secret'

  return (
    <div
      className={cn(
        'min-h-[100dvh] transition-colors duration-300',
        isSecret
          ? 'bg-secret-bg text-secret-text'
          : 'bg-boss-bg text-slate-900',
      )}
    >
      <div
        className={cn(
          appShellClass,
          'flex min-h-[100dvh] flex-col px-4 pb-24 pt-4 sm:px-6 sm:pb-28 md:pt-6 lg:px-8 lg:pb-32',
        )}
      >
        <header className="mb-6 md:mb-8">
          <BrandTitle />
          <p
            className={cn(
              'mt-1 max-w-full text-xs leading-snug sm:text-sm md:max-w-2xl md:text-base',
              isSecret ? 'text-slate-400' : 'text-slate-500',
            )}
          >
            {brand.tagline(mode)}
          </p>
        </header>

        <main className="flex-1">
          <AnimatedOutlet />
        </main>

        <footer
          className={cn(
            'mt-8 text-center text-[10px] leading-relaxed sm:text-xs md:mt-10',
            isSecret ? 'text-slate-500' : 'text-slate-400',
          )}
        >
          <p>{brand.hackathon}</p>
        </footer>
      </div>

      <BottomNav />
    </div>
  )
}
