import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type AppMode = 'boss' | 'secret'

export interface ModeState {
  mode: AppMode
  secretUnlocked: boolean
  setMode: (m: AppMode) => void
  unlockSecret: () => void
}

export const useModeStore = create<ModeState>()(
  persist(
    (set) => ({
      mode: 'boss',
      secretUnlocked: false,
      setMode: (m) => set({ mode: m }),
      unlockSecret: () => set({ secretUnlocked: true, mode: 'secret' }),
    }),
    { name: 'ttalkkakthon-mode' },
  ),
)

export function useEffectiveMode(): AppMode {
  const { mode, secretUnlocked } = useModeStore()
  if (!secretUnlocked) return 'boss'
  return mode
}
