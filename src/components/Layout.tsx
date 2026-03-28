import { BottomNav } from './BottomNav'
import { BrandTitle } from './BrandTitle'
import { AnimatedOutlet } from './AnimatedOutlet'
import { brand } from '../lib/copy'
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
      <div className="mx-auto flex min-h-[100dvh] max-w-md flex-col px-4 pb-24 pt-4">
        <header className="mb-6">
          <BrandTitle />
          <p
            className={cn(
              'mt-1 max-w-[min(100%,280px)] text-xs leading-snug',
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
            'mt-8 text-center text-[10px] leading-relaxed',
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
