import { useMemo, useState } from 'react'
import { ChevronRight, RotateCcw } from 'lucide-react'
import { mz } from '../lib/copy'
import {
  computeMzResult,
  getQuizQuestions,
  type QuizQuestion,
} from '../lib/quiz'
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
    return computeMzResult(mode, answers)
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
          'text-xl font-black md:text-2xl lg:text-3xl',
          isSecret ? 'text-secret-text' : 'text-slate-900',
        )}
      >
        {mz.title(mode)}
      </h1>
      <p
        className={cn(
          'mt-2 text-sm leading-relaxed md:text-base lg:text-lg',
          isSecret ? 'text-slate-400' : 'text-slate-600',
        )}
      >
        {mz.sub(mode)}
      </p>

      {!done && q && (
        <div
          className={cn(
            'mt-6 rounded-2xl p-4 shadow-card md:p-6 lg:rounded-3xl',
            isSecret
              ? 'bg-secret-surface ring-1 ring-white/10'
              : 'bg-white ring-1 ring-slate-200/80',
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
          <p className="mt-2 text-sm font-semibold leading-snug md:text-base">
            {q.prompt}
          </p>
          <div className="mt-4 space-y-2 md:space-y-3">
            {q.options.map((opt, i) => (
              <button
                key={opt}
                type="button"
                onClick={() => pick(i)}
                className={cn(
                  'flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium transition active:scale-[0.99] md:px-4 md:py-3.5 md:text-base',
                  isSecret
                    ? 'bg-slate-900/40 text-slate-100 hover:bg-slate-900/60'
                    : 'bg-slate-50 text-slate-900 hover:bg-slate-100',
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
            'mt-6 rounded-2xl p-4 shadow-card md:p-6 lg:rounded-3xl',
            isSecret
              ? 'bg-gradient-to-br from-secret-surface to-slate-950 ring-1 ring-white/10'
              : 'bg-gradient-to-br from-white to-slate-50 ring-1 ring-slate-200/80',
          )}
        >
          <p
            className={cn(
              'text-xs font-semibold md:text-sm',
              isSecret ? 'text-secret-secondary' : 'text-boss-secondary',
            )}
          >
            {result.scoreLabel}
          </p>
          <p className="mt-2 text-lg font-black md:text-xl">{result.title}</p>
          <p
            className={cn(
              'mt-2 text-sm leading-relaxed md:text-base',
              isSecret ? 'text-slate-300' : 'text-slate-700',
            )}
          >
            {result.body}
          </p>
          <button
            type="button"
            onClick={reset}
            className={cn(
              'mt-5 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold md:px-4 md:py-2.5 md:text-sm',
              isSecret
                ? 'bg-white/5 text-secret-accent ring-1 ring-white/10 hover:bg-white/10'
                : 'bg-boss-primary/10 text-boss-primary ring-1 ring-boss-primary/20 hover:bg-boss-primary/15',
            )}
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            {mz.retry}
          </button>
        </div>
      )}
    </section>
  )
}

export function MzTest() {
  const mode = useEffectiveMode()
  return <MzQuizSession key={mode} mode={mode} />
}
