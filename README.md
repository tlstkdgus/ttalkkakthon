# 딸깍톤 (Ttalkkakthon)

만우절 기념 MZ 밈 & 운세 웹 앱. 딸깍톤 2026 출품작.

## 주요 기능

### 두 가지 테마 모드
- **부장님 모드** — Windows 95/XP 데스크톱 테마. 회의실에서 당당하게.
- **속마음 모드** — Microsoft Excel 테마. 부장님 옆에서 몰래.
  - 브랜드 타이틀을 1.5초 길게 누르면 모드 전환

### 페이지
- **홈** — 밈 이미지 썸네일 카드로 각 기능 바로가기
- **밈 배우기 / 몰래 쓰는 밈** — 버튼을 누를 때마다 밈 이미지 + 설명 카드 랜덤 뽑기
- **MZ력 테스트 / 꼰대 유형 분석** — 퀴즈 풀고 점수에 따라 결과 + 밈 이미지 출력
- **밈 운세 / 부장님 회피 전략** — 오늘의 운세 또는 회피 플랜 랜덤 뽑기

### 기술 특징
- API 호출 없음 — 모든 콘텐츠 하드코딩, 즉시 로딩
- 밈 이미지 시맨틱 태그 분류 — 컨텍스트(홈/학습/운세/퀴즈 결과)에 맞는 이미지 자동 선택
- 퀴즈 버킷 시스템 — 점수 구간(low/mid/high)별 다른 결과 + 이미지

## 기술 스택

| 구분 | 라이브러리 |
|------|------------|
| Frontend | React 19, TypeScript |
| 빌드 | Vite 8 |
| 스타일 | Tailwind CSS 3 |
| 애니메이션 | Framer Motion 12 |
| 상태 관리 | Zustand 5 |
| 라우팅 | React Router DOM 7 |

## 개발 환경

```bash
npm install
npm run dev
```

## 최근 커밋 현황

<!-- COMMIT_LOG_START -->
| 커밋 | 메시지 | 작성자 | 날짜 |
|------|--------|--------|------|
| ab391c0 | Merge pull request #3 from tlstkdgus/copilot/apply-font-to-inner-mind-theme | sanghyeon shin | 2026-04-02 |
| ab8a858 | Merge branch 'main' into copilot/apply-font-to-inner-mind-theme | sanghyeon shin | 2026-04-02 |
| afcce27 | docs: update README with latest commits [skip ci] | github-actions[bot] | 2026-03-28 |
| a0989a2 | 수정 | tlstkdgus | 2026-03-28 |
| 72b0903 | Apply RFjunwooo font from noonnu.cc/font_page/1431 to 속마음 theme | copilot-swe-agent[bot] | 2026-03-28 |
| 05a9039 | Initial plan | copilot-swe-agent[bot] | 2026-03-28 |
| 1f3f01b | docs: update README with latest commits [skip ci] | github-actions[bot] | 2026-03-28 |
| abdfa16 | 2차 수정 | tlstkdgus | 2026-03-28 |
| c001ec4 | docs: update README with latest commits [skip ci] | github-actions[bot] | 2026-03-28 |
| 9811d4f | Merge branch 'main' of https://github.com/tlstkdgus/ttalkkakthon | tlstkdgus | 2026-03-28 |
<!-- COMMIT_LOG_END -->
