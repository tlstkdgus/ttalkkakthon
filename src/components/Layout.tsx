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
          ? 'excel-bg font-excel text-secret-text'
          : 'bg-boss-bg font-sans text-boss-ink',
      )}
    >
      <div
        className={cn(
          appShellClass,
          'flex min-h-[100dvh] flex-col pt-2 pb-12 sm:pt-3 md:pt-4',
        )}
      >
        {isSecret ? (
          <div className="excel-panel flex flex-1 flex-col overflow-hidden">
            <header className="excel-ribbon shrink-0 px-3 py-2.5 text-white sm:px-4 sm:py-3">
              <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold sm:gap-2 sm:text-[11px]">
                <span className="rounded-t border border-white/20 border-b-0 bg-white/10 px-2 py-1">
                  파일
                </span>
                <span className="rounded-t bg-white px-2 py-1 text-secret-primary">
                  홈
                </span>
                <span className="rounded-t px-2 py-1 text-white/85 hover:bg-white/10">
                  삽입
                </span>
                <span className="rounded-t px-2 py-1 text-white/85 hover:bg-white/10">
                  수식
                </span>
                <span className="rounded-t px-2 py-1 text-white/85 hover:bg-white/10">
                  데이터
                </span>
              </div>
              <div className="mt-2 flex items-baseline justify-between gap-2">
                <div>
                  <span className="text-[10px] font-medium text-white/70 sm:text-xs">
                    미정.xlsx · 속마음 시트
                  </span>
                  <div className="mt-0.5">
                    <BrandTitle />
                  </div>
                </div>
                <span
                  className="shrink-0 rounded border border-white/25 bg-white/10 px-1.5 py-0.5 text-[9px] text-white/90"
                  aria-hidden
                >
                  자동 저장 켜짐
                </span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-white/85 sm:text-xs">
                {brand.tagline(mode)}
              </p>
            </header>

            <div
              className="flex shrink-0 items-center gap-2 border-b border-secret-border bg-[#faf9f8] px-2 py-1.5 text-[10px] text-secret-muted sm:px-3 sm:text-[11px]"
              role="presentation"
            >
              <span className="inline-flex min-w-[2.25rem] items-center justify-center rounded border border-secret-border bg-white px-1 py-0.5 font-mono text-secret-text">
                A1
              </span>
              <span className="font-mono text-secret-muted">fx</span>
              <span className="min-w-0 flex-1 truncate rounded border border-transparent bg-white px-2 py-0.5 text-secret-text ring-1 ring-secret-border">
                =속마음(진실, &quot;MZ&quot;, TRUE)
              </span>
            </div>

            <div className="flex min-h-0 flex-1 flex-col gap-0 overflow-auto bg-white">
              <main className="min-h-0 flex-1 p-3 sm:p-4">
                <AnimatedOutlet />
              </main>
              <footer className="shrink-0 border-t border-secret-border bg-[#faf9f8] px-3 py-2 text-center text-[10px] leading-relaxed text-secret-muted sm:text-[11px]">
                <p>{brand.hackathon}</p>
              </footer>
            </div>
          </div>
        ) : (
          <div className="win95-window flex flex-1 flex-col overflow-hidden">
            <header
              className="flex shrink-0 items-center justify-between px-2 py-1 sm:px-3"
              style={{
                background:
                  'linear-gradient(to bottom, #1166e8 0%, #3d8cf5 40%, #1166e8 60%, #0a50c8 100%)',
              }}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-sm" aria-hidden>🖥️</span>
                <span className="text-xs font-bold text-white drop-shadow sm:text-sm">
                  미정.exe — 부장님용
                </span>
              </div>
              <div className="flex items-center gap-0.5">
                {['–', '□', '✕'].map((s, i) => (
                  <span
                    key={i}
                    className="flex h-[18px] w-[18px] items-center justify-center text-[10px] font-bold text-black leading-none sm:h-5 sm:w-5 sm:text-xs"
                    style={{
                      background: i === 2 ? '#e81123' : '#c0c0c0',
                      border: '2px solid',
                      borderColor: '#fff #404040 #404040 #fff',
                      color: i === 2 ? '#fff' : '#000',
                    }}
                    aria-hidden
                  >
                    {s}
                  </span>
                ))}
              </div>
            </header>
            <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto bg-boss-surface p-2 sm:p-3 md:gap-3 md:p-4">
              <div className="win95-inset-white shrink-0 p-3 sm:p-4">
                <BrandTitle />
                <p className="mt-1 max-w-full text-xs leading-snug text-boss-muted sm:text-sm md:max-w-2xl md:text-base">
                  {brand.tagline(mode)}
                </p>
              </div>
              <main className="win95-inset-white min-h-0 flex-1 overflow-auto p-3 sm:p-4">
                <AnimatedOutlet />
              </main>
              <footer className="shrink-0 text-center text-[10px] leading-relaxed text-boss-muted sm:text-xs md:mt-2">
                <p>{brand.hackathon}</p>
              </footer>
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
