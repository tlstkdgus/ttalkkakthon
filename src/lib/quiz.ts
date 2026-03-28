export interface QuizQuestion {
  id: string
  prompt: string
  options: string[]
}

export interface QuizResult {
  title: string
  body: string
  scoreLabel: string
}

const bossQuestions: QuizQuestion[] = [
  {
    id: 'b1',
    prompt: '회의 중 “이거 한 번만 정리해줄래?”가 나왔다. 당신의 1초 반응은?',
    options: [
      '네, 가능합니다! (미소)',
      '우선 범위부터 맞춰볼까요?',
      '제가… 지금… 다른 급한 게… (진심)',
    ],
  },
  {
    id: 'b2',
    prompt: '“MZ는 마인드”라는 말을 들었다. 당신은?',
    options: [
      '맞습니다. 마인드가 최고죠.',
      '그럼 연봉도 MZ로 주시나요?',
      '일단 물은 마시겠습니다.',
    ],
  },
  {
    id: 'b3',
    prompt: '점심 메뉴가 취향이 아니다. 가장 업무적인 대응은?',
    options: [
      '감사히 먹겠습니다.',
      '다음엔 간단히 설문 받아볼까요?',
      '저는 공기밥으로 충분합니다 (눈물)',
    ],
  },
  {
    id: 'b4',
    prompt: '슬랙에 “ㅋㅋ”가 올라왔다. 당신은?',
    options: [
      '상황에 맞게 이모지로 호응',
      '너무 많은 ㅋ는 업무 집중을 방해할 수 있어요',
      '저도 ㅋ (안전)',
    ],
  },
  {
    id: 'b5',
    prompt: '금요일 17:59, 추가 요청이 왔다.',
    options: [
      '월요일 오전에 우선순위로 잡겠습니다.',
      '지금 가능한 범위만 말씀드릴게요.',
      '시간이 시간이라… (의미심장한 침묵)',
    ],
  },
]

const secretQuestions: QuizQuestion[] = [
  {
    id: 's1',
    prompt: '“요즘 애들은…”으로 시작하는 문장을 들었다. 당신의 속마음은?',
    options: [
      '저도 애인데요 (속으로만)',
      '데이터 주세요. 감으로는 힘듭니다.',
      '오늘의 주제: 세대 갈등이 아니라 구조 문제',
    ],
  },
  {
    id: 's2',
    prompt: '회의가 2시간째다. 당신의 생존 본능은?',
    options: [
      '핵심만 메모하는 척',
      '카메라 끄고 잠깐 현실 도피',
      '“정리 한 번만”의 의미를 철학적으로 해석',
    ],
  },
  {
    id: 's3',
    prompt: '“내가 다니던 때는~”이 등장했다.',
    options: [
      '그때도 힘들었겠죠… (중재)',
      '그때는 인터넷이 느렸죠 (위험한 농담)',
      '지금은 KPI가 빨라졌습니다 (팩트)',
    ],
  },
  {
    id: 's4',
    prompt: '부장님이 밈을 “틀리게” 쓴다.',
    options: [
      '그냥 웃는다 (평화)',
      '은근슬쩍 올바른 예시를 채팅에 남긴다',
      '오늘은 제가 “학습”하겠습니다 (은어)',
    ],
  },
  {
    id: 's5',
    prompt: '엘리베이터에서 마주쳤다. 남은 층수는 7.',
    options: [
      '날씨 얘기로 버틴다',
      '핸드폰을 연구한다',
      '“오늘도 화이팅”만 남기고 뛰어내린다 (불가)',
    ],
  },
]

function scoreBucket(score: number): 'low' | 'mid' | 'high' {
  if (score <= 3) return 'low'
  if (score <= 7) return 'mid'
  return 'high'
}

export function getQuizQuestions(mode: 'boss' | 'secret'): QuizQuestion[] {
  return mode === 'boss' ? bossQuestions : secretQuestions
}

export function computeMzResult(
  mode: 'boss' | 'secret',
  answers: number[],
): QuizResult {
  const sum = answers.reduce((a, b) => a + b, 0)
  const bucket = scoreBucket(sum)

  if (mode === 'boss') {
    const table: Record<
      'low' | 'mid' | 'high',
      Omit<QuizResult, 'scoreLabel'>
    > = {
      low: {
        title: 'MZ력: 안정형',
        body: '당신은 회의실의 평형추. 무리하지 않는 선택이 곧 장기 프로젝트의 완성입니다.',
      },
      mid: {
        title: 'MZ력: 성장형',
        body: '적당히 밀고, 적당히 빼는 타입. 슬랙 이모지 운용 능력이 핵심 자산입니다.',
      },
      high: {
        title: 'MZ력: 하이퍼',
        body: '에너지가 넘칩니다. 다만 “한 번만” 요청 앞에서 숨 고르기도 잊지 마세요.',
      },
    }
    return {
      ...table[bucket],
      scoreLabel: `선택 점수 합: ${sum} (농담용 지표)`,
    }
  }

  const table: Record<'low' | 'mid' | 'high', Omit<QuizResult, 'scoreLabel'>> =
    {
      low: {
        title: '꼰대 지수: 낮음 (의심)',
        body: '너무 깨끗하면 오히려 무서워요. 혹시… 팀의 은밀한 중재자?',
      },
      mid: {
        title: '꼰대 지수: 보통 (인간)',
        body: '가끔은 밈으로 방어하고, 가끔은 침묵으로 승부하는 현실적인 타입.',
      },
      high: {
        title: '꼰대 지수: 높음 (자각 있음)',
        body: '이미 알고 계시죠? 오늘은 “네 알겠습니다”로 데미지를 최소화하세요.',
      },
    }
  return {
    ...table[bucket],
    scoreLabel: `선택 점수 합: ${sum} (농담용 지표)`,
  }
}
