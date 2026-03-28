import { useMemo, useState } from 'react'
import { ChevronRight, RotateCcw } from 'lucide-react'
import { mz } from '../lib/copy'
import {
  computeMzResult,
  getQuizQuestions,
  type QuizQuestion,
} from '../lib/quiz'
import { pickResultImage } from '../lib/hardcodedContent'
import { cn } from '../lib/cn'
import type { AppMode } from '../store/modeStore'
import { useEffectiveMode } from '../store/modeStore'

function MzQuizSession({ mode }: { mode: AppMode }) {
  const isSecret = mode === 'secret'
  const questions = useMemo(() => getQuizQuestions(mode), [mode])

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  const q: QuizQuestion | undefined = questions[step]
  const done = answers.length === questions.length && questions.length > 0

  const result = useMemo(() => {
    if (!done) return null
    const r = computeMzResult(mode, answers)
    const ctx = r.bucket === 'low' ? 'quiz_good' : r.bucket === 'mid' ? 'quiz_mid' : 'quiz_bad'
    return { ...r, image: pickResultImage(mode, ctx) }
  }, [answers, done, mode])

  function pick(optionIndex: number) {
    if (!q) return
    const next = [...answers, optionIndex]
    setAnswers(next)
    if (step + 1 >= questions.length) {
      return
    }
    setStep((s) => s + 1)
  }

  function reset() {
    setStep(0)
    setAnswers([])
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
        {mz.title(mode)}
      </h1>
      <p
        className={cn(
          'mt-2 leading-relaxed',
          isSecret ? 'text-sm md:text-base' : 'text-sm md:text-base lg:text-lg',
          isSecret ? 'text-secret-muted' : 'text-boss-muted',
        )}
      >
        {mz.sub(mode)}
      </p>

      {!done && q && (
        <div
          className={cn(
            'mt-6 p-4 md:p-5',
            isSecret
              ? 'rounded-sm border border-secret-border bg-white shadow-excel'
              : 'win95-inset-white rounded-sm',
          )}
        >
          <p
            className={cn(
              'text-[11px] font-semibold md:text-xs',
              isSecret ? 'text-secret-primary' : 'text-boss-primary',
            )}
          >
            Q{step + 1} / {questions.length}
          </p>
          <p
            className={cn(
              'mt-2 text-sm font-medium leading-snug md:text-base',
              isSecret ? 'text-secret-text' : 'text-boss-ink',
            )}
          >
            {q.prompt}
          </p>
          <div className="mt-4 space-y-2 md:space-y-3">
            {q.options.map((opt, i) => (
              <button
                key={opt}
                type="button"
                onClick={() => pick(i)}
                className={cn(
                  'flex w-full items-center justify-between px-3 py-3 text-left text-sm font-medium transition active:scale-[0.99] md:px-4 md:py-3.5 md:text-base',
                  isSecret
                    ? 'rounded-sm border border-secret-border bg-[#faf9f8] text-secret-text hover:border-secret-primary hover:bg-white'
                    : 'win95-outset rounded-sm text-boss-ink hover:bg-gray-300',
                )}
              >
                <span className="pr-2">{opt}</span>
                <ChevronRight
                  className="h-4 w-4 shrink-0 opacity-60 md:h-5 md:w-5"
                  aria-hidden
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {done && result && (
        <div
          className={cn(
            'mt-6 overflow-hidden',
            isSecret
              ? 'rounded-sm border border-secret-border bg-white shadow-excel'
              : 'win95-inset-white rounded-sm',
          )}
        >
          {/* 결과 밈 이미지 */}
          <div
            className={cn(
              'flex items-center justify-center overflow-hidden bg-black/5',
              isSecret ? 'border-b border-secret-border' : 'border-b-2 border-b-[#404040]',
            )}
            style={{ maxHeight: '220px' }}
          >
            <img
              src={result.image}
              alt="결과 밈"
              className="max-h-[220px] w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="p-4 md:p-5">
            <p
              className={cn(
                'text-xs font-semibold md:text-sm',
                isSecret ? 'text-secret-primary' : 'text-boss-primary',
              )}
            >
              {result.scoreLabel}
            </p>
            <p
              className={cn(
                'mt-2 text-lg font-semibold md:text-xl',
                isSecret ? 'text-secret-text' : 'text-boss-ink',
              )}
            >
              {result.title}
            </p>
            <p
              className={cn(
                'mt-2 text-sm leading-relaxed md:text-base',
                isSecret ? 'text-secret-muted' : 'text-boss-muted',
              )}
            >
              {result.body}
            </p>
            <button
              type="button"
              onClick={reset}
              className={cn(
                'mt-5 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold md:px-5 md:py-2.5 md:text-sm',
                isSecret
                  ? 'rounded-sm border border-secret-border bg-white text-secret-primary shadow-excel hover:bg-[#faf9f8]'
                  : 'win95-outset rounded-sm text-boss-ink hover:bg-gray-300',
              )}
            >
              <RotateCcw className="h-4 w-4" aria-hidden />
              {mz.retry}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export function MzTest() {
  const mode = useEffectiveMode()
  return <MzQuizSession key={mode} mode={mode} />
}
