import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { fortune } from '../lib/copy'
import { pickFortuneLine } from '../lib/hardcodedContent'
import { cn } from '../lib/cn'
import { useEffectiveMode } from '../store/modeStore'

export function Fortune() {
  const mode = useEffectiveMode()
  const isSecret = mode === 'secret'
  const [text, setText] = useState('')

  function onPick() {
    setText(pickFortuneLine(mode))
  }

  return (
    <section className="text-left md:mx-auto md:max-w-3xl lg:max-w-4xl">
      <h1
        className={cn(
          'text-xl font-black md:text-2xl lg:text-3xl',
          isSecret ? 'text-secret-text' : 'text-slate-900',
        )}
      >
        {fortune.title(mode)}
      </h1>
      <p
        className={cn(
          'mt-2 text-sm leading-relaxed md:text-base lg:text-lg',
          isSecret ? 'text-slate-400' : 'text-slate-600',
        )}
      >
        {fortune.sub(mode)}
      </p>

      <button
        type="button"
        onClick={onPick}
        className={cn(
          'mt-6 inline-flex w-full max-w-md items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold shadow-sm transition active:scale-[0.99] md:py-3.5 md:text-base lg:max-w-lg',
          isSecret
            ? 'bg-gradient-to-br from-secret-surface to-secret-bg text-secret-accent ring-1 ring-secret-accent/40'
            : 'bg-gradient-to-br from-boss-accent/90 to-boss-secondary text-slate-900',
        )}
      >
        <Sparkles className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
        {fortune.cta(mode)}
      </button>

      <div
        className={cn(
          'mt-5 min-h-[200px] rounded-2xl p-4 text-sm leading-relaxed whitespace-pre-wrap shadow-inner md:min-h-[220px] md:p-6 md:text-base lg:rounded-3xl',
          isSecret
            ? 'bg-secret-surface text-slate-200 ring-1 ring-white/10'
            : 'bg-white text-slate-800 ring-1 ring-slate-200/80',
        )}
      >
        {text || (
          <span className={isSecret ? 'text-slate-500' : 'text-slate-400'}>
            {isSecret
              ? '버튼을 누르면 미리 적어둔 생존 각이 랜덤으로 뜹니다. (API 비용 0원)'
              : '버튼을 누르면 미리 적어둔 운세가 랜덤으로 뜹니다. (API 비용 0원)'}
          </span>
        )}
      </div>
    </section>
  )
}
