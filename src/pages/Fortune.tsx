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
          'font-semibold',
          isSecret
            ? 'text-xl md:text-2xl'
            : 'text-xl font-black md:text-2xl lg:text-3xl',
          isSecret ? 'text-secret-text' : 'text-boss-ink',
        )}
      >
        {fortune.title(mode)}
      </h1>
      <p
        className={cn(
          'mt-2 leading-relaxed',
          isSecret ? 'text-sm md:text-base' : 'text-sm md:text-base lg:text-lg',
          isSecret ? 'text-secret-muted' : 'text-boss-muted',
        )}
      >
        {fortune.sub(mode)}
      </p>

      <button
        type="button"
        onClick={onPick}
        className={cn(
          'mt-6 inline-flex w-full max-w-md items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition active:scale-[0.99] md:max-w-lg md:text-base',
          isSecret
            ? 'rounded-sm border border-[#c6e0b4] bg-gradient-to-b from-[#e2efd9] to-[#c6e0b4] text-[#375623] shadow-excel hover:brightness-95'
            : 'win95-outset rounded-sm text-boss-ink hover:bg-gray-300',
        )}
      >
        <Sparkles className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
        {fortune.cta(mode)}
      </button>

      <div
        className={cn(
          'mt-5 min-h-[200px] p-4 text-sm leading-relaxed whitespace-pre-wrap md:min-h-[220px] md:p-5 md:text-base',
          isSecret
            ? 'rounded-sm border border-secret-border bg-white text-secret-text shadow-excel-inset'
            : 'win95-inset-white rounded-sm text-boss-ink',
        )}
      >
        {text || (
          <span className={isSecret ? 'text-secret-muted' : 'text-boss-muted'}>
            {isSecret
              ? '버튼을 누르면 미리 적어둔 생존 각이 랜덤으로 뜹니다. (API 비용 0원)'
              : '버튼을 누르면 미리 적어둔 운세가 랜덤으로 뜹니다. (API 비용 0원)'}
          </span>
        )}
      </div>
    </section>
  )
}
