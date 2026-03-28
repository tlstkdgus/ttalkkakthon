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
        'block select-none rounded-lg px-1 py-0.5 outline-none transition-colors',
        'focus-visible:ring-2 focus-visible:ring-boss-primary/40',
        mode === 'secret'
          ? 'text-secret-text hover:text-white'
          : 'text-slate-900 hover:text-boss-primary',
      )}
      aria-label={`${brand.name}, 홈으로 이동`}
    >
      <span className="text-lg font-extrabold tracking-tight">{brand.name}</span>
      <span
        className={cn(
          'ml-1.5 align-middle text-[10px] font-medium uppercase tracking-wider',
          mode === 'secret' ? 'text-secret-secondary' : 'text-boss-secondary',
        )}
      >
        beta
      </span>
    </Link>
  )
}
