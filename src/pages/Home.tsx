import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, PartyPopper } from 'lucide-react'
import { home } from '../lib/copy'
import { cn } from '../lib/cn'
import { useEffectiveMode } from '../store/modeStore'
import { pickMemeImages } from '../lib/memes'

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
  const thumbs = useMemo(() => pickMemeImages(mode, cards.length, 'home'), [mode, cards.length])

  return (
    <div>
      <div className="mb-6 text-left sm:mb-8">
        <div
          className={cn(
            'inline-flex items-center gap-2 sm:gap-2.5',
            isSecret
              ? 'rounded border border-secret-border bg-white px-3 py-1.5 text-[11px] font-semibold text-secret-primary shadow-excel sm:text-xs'
              : 'rounded-sm bg-boss-window px-3 py-1 text-[11px] font-semibold text-boss-ink ring-1 ring-boss-border sm:px-4 sm:py-1.5 sm:text-xs',
          )}
        >
          <PartyPopper className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          만우절 주의: 진지한 척합니다
        </div>
        <h1
          className={cn(
            'mt-4 leading-snug tracking-tight',
            isSecret
              ? 'font-semibold text-xl sm:text-2xl md:text-3xl'
              : 'text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-tight',
            isSecret ? 'text-secret-text' : 'text-boss-ink',
          )}
        >
          {home.heroTitle(mode)}
        </h1>
        <p
          className={cn(
            'mt-2 max-w-3xl leading-relaxed',
            isSecret
              ? 'text-xs sm:text-sm md:text-base'
              : 'text-sm sm:text-base md:text-lg',
            isSecret ? 'text-secret-muted' : 'text-boss-muted',
          )}
        >
          {home.heroSub(mode)}
        </p>
      </div>

      <motion.ul
        className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-4 lg:gap-5 xl:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {cards.map((c, i) => (
          <motion.li key={c.to} variants={item}>
            <Link
              to={c.to}
              className={cn(
                'flex flex-col overflow-hidden transition-all active:scale-[0.99]',
                isSecret
                  ? 'rounded-sm border border-secret-border bg-white text-secret-text shadow-excel hover:border-secret-primary/40 hover:shadow-md'
                  : 'text-boss-ink hover:shadow-[4px_4px_0_rgba(0,0,0,0.35)]',
              )}
            >
              {/* 썸네일 이미지 */}
              <div className={cn(
                'aspect-square w-full overflow-hidden bg-white',
                isSecret ? 'border-b border-secret-border' : '',
              )}>
                <img
                  src={thumbs[i]}
                  alt=""
                  className="h-full w-full object-contain"
                  loading="lazy"
                  aria-hidden
                />
              </div>
              {/* 카드 하단 */}
              <div className="flex items-center justify-between px-4 py-3 md:px-5 md:py-4">
                <div className="flex items-start gap-3 text-left">
                  <span className="text-2xl md:text-3xl" aria-hidden>
                    {c.emoji}
                  </span>
                  <div>
                    <p className="font-semibold text-base md:text-lg">{c.title}</p>
                    <p className={cn('mt-0.5 text-xs md:text-sm', isSecret ? 'text-secret-muted' : 'text-boss-muted')}>
                      {c.desc}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  className={cn('h-5 w-5 shrink-0 md:h-6 md:w-6', isSecret ? 'text-secret-primary' : 'text-boss-primary')}
                  aria-hidden
                />
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
