import { useState } from 'react'
import { Wand2 } from 'lucide-react'
import { learn } from '../lib/copy'
import { pickLearnLine } from '../lib/hardcodedContent'
import { cn } from '../lib/cn'
import { useEffectiveMode } from '../store/modeStore'

export function Learn() {
  const mode = useEffectiveMode()
  const isSecret = mode === 'secret'
  const [text, setText] = useState('')

  function onPick() {
    setText(pickLearnLine(mode))
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
        {learn.title(mode)}
      </h1>
      <p
        className={cn(
          'mt-2 leading-relaxed',
          isSecret ? 'text-sm md:text-base' : 'text-sm md:text-base lg:text-lg',
          isSecret ? 'text-secret-muted' : 'text-boss-muted',
        )}
      >
        {learn.sub(mode)}
      </p>

      <button
        type="button"
        onClick={onPick}
        className={cn(
          'mt-6 inline-flex w-full max-w-md items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition active:scale-[0.99] md:max-w-lg md:text-base',
          isSecret
            ? 'rounded-sm border border-transparent bg-secret-primary text-white shadow-excel hover:bg-[#185c37]'
            : 'win95-outset rounded-sm text-boss-ink hover:bg-gray-300',
        )}
      >
        <Wand2 className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
        {learn.cta(mode)}
      </button>

      <div
        className={cn(
          'mt-5 min-h-[160px] p-4 text-sm leading-relaxed whitespace-pre-wrap md:min-h-[180px] md:p-5 md:text-base',
          isSecret
            ? 'rounded-sm border border-secret-border bg-white text-secret-text shadow-excel-inset'
            : 'win95-inset-white rounded-sm text-boss-ink',
        )}
      >
        {text || (
          <span className={isSecret ? 'text-secret-muted' : 'text-boss-muted'}>
            {isSecret
              ? '버튼을 누르면 미리 적어둔 카드가 랜덤으로 뜹니다. (API 비용 0원)'
              : '버튼을 누르면 미리 적어둔 밈 카드가 랜덤으로 뜹니다. (API 비용 0원)'}
          </span>
        )}
      </div>
    </section>
  )
}
