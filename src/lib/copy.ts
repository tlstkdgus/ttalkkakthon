import type { AppMode } from '../store/modeStore'

export const brand = {
  name: '미정',
  tagline: (mode: AppMode) =>
    mode === 'boss'
      ? '서비스명은 아직 회의 중입니다. (진지)'
      : '이름 없음 = 흔적 없음. 부장님 폴더에도 안 남음.',
  hackathon: '딸깍톤 2026 · 만우절 출품',
}

export const home = {
  heroTitle: (mode: AppMode) =>
    mode === 'boss'
      ? '밈, 이제는 업무 역량입니다.'
      : '밈은 업무…라고 쓰고 생존이라 읽습니다.',
  heroSub: (mode: AppMode) =>
    mode === 'boss'
      ? '부장님 모드: 배우고, 테스트하고, 운세까지. (회의 전 필수 루틴)'
      : '몰래 쓰는 밈 · 꼰대 분석 · 회피 전략. (엘리베이터에서 조용히)',
  cards: (mode: AppMode) =>
    mode === 'boss'
      ? [
          {
            to: '/learn',
            title: '밈 배우기',
            desc: '회의실에서 무해하게 터는 법',
            emoji: '📚',
          },
          {
            to: '/mz',
            title: 'MZ력 테스트',
            desc: 'MZ는 마음가짐입니다 (아마)',
            emoji: '🧪',
          },
          {
            to: '/fortune',
            title: '밈 운세',
            desc: '오늘의 키워드는 긍정입니다',
            emoji: '🔮',
          },
        ]
      : [
          {
            to: '/learn',
            title: '몰래 쓰는 밈',
            desc: '부장님 뒤에서만 펼쳐지는 사전',
            emoji: '🕶️',
          },
          {
            to: '/mz',
            title: '꼰대 유형 분석',
            desc: '당신의 숨은… 꼰기',
            emoji: '🧬',
          },
          {
            to: '/fortune',
            title: '부장님 회피 전략',
            desc: '오늘은 어디로 피할까',
            emoji: '🏃',
          },
        ],
}

export const learn = {
  title: (mode: AppMode) =>
    mode === 'boss' ? '밈 배우기' : '부장님 몰래 쓰는 밈',
  sub: (mode: AppMode) =>
    mode === 'boss'
      ? '미리 적어둔 밈 카드를 랜덤으로 뽑습니다. (과금 없음)'
      : '진짜 쓰면 큰일납니다. 웃으라고 만든 겁니다. (진짜로)',
  cta: (mode: AppMode) =>
    mode === 'boss' ? '밈 카드 뽑기' : '몰래 카드 뽑기',
}

export const mz = {
  title: (mode: AppMode) =>
    mode === 'boss' ? 'MZ력 테스트' : '꼰대 유형 분석',
  sub: (mode: AppMode) =>
    mode === 'boss'
      ? '정답은 없습니다. 분위기만 좋으면 됩니다.'
      : '정답은 없습니다. 분위기가… 아, 이건 좀 위험하네요.',
  cta: '결과 보기',
  retry: '다시 하기',
}

export const fortune = {
  title: (mode: AppMode) =>
    mode === 'boss' ? '밈 운세' : '부장님 회피 전략',
  sub: (mode: AppMode) =>
    mode === 'boss'
      ? '미리 적어둔 운세 카드를 랜덤으로 뽑습니다. (과금 없음)'
      : '오늘은 어디로, 언제, 어떤 핑계로… (가상 시뮬레이션)',
  cta: (mode: AppMode) =>
    mode === 'boss' ? '오늘의 운세 보기' : '오늘의 회피 플랜 보기',
}

export const nav = {
  home: '홈',
  learn: (mode: AppMode) =>
    mode === 'boss' ? '밈' : '몰래',
  mz: (mode: AppMode) =>
    mode === 'boss' ? 'MZ' : '꼰대',
  fortune: (mode: AppMode) =>
    mode === 'boss' ? '운세' : '회피',
}

