import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, PartyPopper } from 'lucide-react'
import { home } from '../lib/copy'
import { cn } from '../lib/cn'
import { useEffectiveMode } from '../store/modeStore'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

export function Home() {
  const mode = useEffectiveMode()
  const isSecret = mode === 'secret'
  const cards = home.cards(mode)

  return (
    <div>
      <div className="mb-8 text-left">
        <div
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold shadow-sm ring-1',
            isSecret
              ? 'bg-secret-surface/80 text-secret-primary ring-white/10'
              : 'bg-white/70 text-boss-primary ring-boss-primary/15',
          )}
        >
          <PartyPopper className="h-4 w-4" aria-hidden />
          만우절 주의: 진지한 척합니다
        </div>
        <h1
          className={cn(
            'mt-4 text-2xl font-black leading-snug tracking-tight',
            isSecret ? 'text-secret-text' : 'text-slate-900',
          )}
        >
          {home.heroTitle(mode)}
        </h1>
        <p
          className={cn(
            'mt-2 text-sm leading-relaxed',
            isSecret ? 'text-slate-400' : 'text-slate-600',
          )}
        >
          {home.heroSub(mode)}
        </p>
      </div>

      <motion.ul
        className="space-y-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {cards.map((c) => (
          <motion.li key={c.to} variants={item}>
            <Link
              to={c.to}
              className={cn(
                'flex items-center justify-between rounded-2xl px-4 py-4 shadow-card transition-transform active:scale-[0.99]',
                isSecret
                  ? 'bg-secret-surface text-secret-text ring-1 ring-white/10 shadow-glow-secret'
                  : 'bg-white text-slate-900 ring-1 ring-slate-200/80 shadow-glow',
              )}
            >
              <div className="flex items-start gap-3 text-left">
                <span className="text-2xl" aria-hidden>
                  {c.emoji}
                </span>
                <div>
                  <p className="text-base font-bold">{c.title}</p>
                  <p
                    className={cn(
                      'mt-0.5 text-xs',
                      isSecret ? 'text-slate-400' : 'text-slate-500',
                    )}
                  >
                    {c.desc}
                  </p>
                </div>
              </div>
              <ArrowRight
                className={cn(
                  'h-5 w-5 shrink-0',
                  isSecret ? 'text-secret-accent' : 'text-boss-primary',
                )}
                aria-hidden
              />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
