import { useState } from 'react'
import { Wand2 } from 'lucide-react'
import { learn } from '../lib/copy'
import { type ContentCard, pickLearnCard } from '../lib/hardcodedContent'
import { cn } from '../lib/cn'
import { useEffectiveMode } from '../store/modeStore'

export function Learn() {
  const mode = useEffectiveMode()
  const isSecret = mode === 'secret'
  const [card, setCard] = useState<ContentCard | null>(null)

  function onPick() {
    setCard(pickLearnCard(mode))
  }

  return (
    <section className="text-left md:mx-auto md:max-w-3xl lg:max-w-4xl">
      <h1
        className={cn(
          isSecret
            ? 'font-semibold text-xl md:text-2xl'
            : 'text-2xl md:text-3xl lg:text-4xl',
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
          'mt-6 inline-flex w-full max-w-[500px] items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition active:scale-[0.99] md:text-base',
          isSecret
            ? 'rounded-sm border border-[#c6e0b4] bg-gradient-to-b from-[#e2efd9] to-[#c6e0b4] text-[#375623] shadow-excel hover:brightness-95'
            : 'win95-outset rounded-sm text-boss-ink hover:bg-gray-300',
        )}
      >
        <Wand2 className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
        {learn.cta(mode)}
      </button>

      {/* 결과 카드 */}
      <div
        className={cn(
          'mt-5 w-full max-w-[500px] overflow-hidden',
          isSecret
            ? 'rounded-sm border border-secret-border bg-white shadow-excel'
            : 'win95-inset-white rounded-sm',
        )}
      >
        {card ? (
          <>
            {/* 밈 이미지 */}
            <div
              className={cn(
                'flex h-[280px] items-center justify-center overflow-hidden bg-white',
                isSecret ? 'border-b border-secret-border' : 'border-b-2 border-b-[#404040] border-r-2 border-r-[#404040]',
              )}
            >
              <img
                key={card.image}
                src={card.image}
                alt="밈 이미지"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            {/* 텍스트 설명 */}
            <div className="p-4 text-sm leading-relaxed whitespace-pre-wrap md:p-5 md:text-base">
              <span className={isSecret ? 'text-secret-text' : 'text-boss-ink'}>
                {card.text}
              </span>
            </div>
          </>
        ) : (
          <div className="min-h-[160px] p-4 md:min-h-[180px] md:p-5">
            <span className={cn('text-sm', isSecret ? 'text-secret-muted' : 'text-boss-muted')}>
              {isSecret
                ? '버튼을 누르면 밈 이미지와 카드가 랜덤으로 뜹니다.'
                : '버튼을 누르면 밈 이미지와 카드가 랜덤으로 뜹니다.'}
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
