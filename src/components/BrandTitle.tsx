import { useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { brand } from '../lib/copy'
import { cn } from '../lib/cn'
import { useEffectiveMode, useModeStore } from '../store/modeStore'

const LONG_MS = 1500

export function BrandTitle() {
  const mode = useEffectiveMode()
  const secretUnlocked = useModeStore((s) => s.secretUnlocked)
  const unlockSecret = useModeStore((s) => s.unlockSecret)
  const setMode = useModeStore((s) => s.setMode)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isExcelSecret = mode === 'secret'

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const onPressStart = useCallback(() => {
    clearTimer()
    timerRef.current = setTimeout(() => {
      if (mode === 'secret') {
        setMode('boss')
      } else if (!secretUnlocked) {
        unlockSecret()
      } else {
        setMode('secret')
      }
    }, LONG_MS)
  }, [clearTimer, mode, secretUnlocked, setMode, unlockSecret])

  const onPressEnd = useCallback(() => {
    clearTimer()
  }, [clearTimer])

  return (
    <Link
      to="/"
      onPointerDown={onPressStart}
      onPointerUp={onPressEnd}
      onPointerLeave={onPressEnd}
      onPointerCancel={onPressEnd}
      className={cn(
        'block max-w-full select-none truncate rounded px-0.5 py-0.5 outline-none transition-colors',
        isExcelSecret
          ? 'focus-visible:ring-2 focus-visible:ring-white/70'
          : 'focus-visible:ring-2 focus-visible:ring-white/70',
        isExcelSecret
          ? 'text-white hover:text-white/90'
          : 'text-boss-ink hover:text-boss-primary',
      )}
      aria-label={`${brand.name}, 홈으로 이동`}
    >
      <span
        className={cn(
          'font-semibold tracking-tight',
          isExcelSecret
            ? 'text-lg sm:text-xl md:text-2xl'
            : 'text-lg md:text-xl lg:text-2xl',
        )}
      >
        {brand.name}
      </span>
      <span
        className={cn(
          'ml-1.5 align-middle text-[10px] font-medium',
          isExcelSecret
            ? 'rounded-sm border border-white/30 bg-white/15 px-1.5 py-0.5 text-white/95'
            : 'rounded-sm bg-boss-window px-1.5 py-0.5 text-boss-muted ring-1 ring-boss-border md:text-xs',
        )}
      >
        beta
      </span>
    </Link>
  )
}
