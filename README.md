# Vine English 영어 발표회 초대장

Vine English 학원의 부모님 대상 **영어 발표회 초대장** 웹페이지입니다.
아이들의 영어 연극 3편(Caillou at Daycare, Peppa Pig – Bubbles, Peppa Pig – Jelly)에
부모님을 초대하는 내용과, 행사 장소(바인하우스) 지도를 담고 있습니다.

- **스택**: Vite + React + TypeScript
- **배포**: Vercel

## 개발

```bash
npm install
npm run dev      # 로컬 개발 서버
npm run build    # 타입체크 + 프로덕션 빌드 (dist/)
npm run preview  # 빌드 결과 미리보기
```

## 내용 수정

행사 정보(날짜·시간·장소)와 연극 목록은 모두 아래 한 파일에서 관리합니다.

```
src/data/event.ts
```

## 지도 (API 키 불필요)

- 표시용 지도는 **키가 필요 없는 구글 지도 임베드**입니다.
- 정확한 위치·길찾기는 앱 연결 버튼으로 처리합니다:
  - **네이버지도**: 확인된 장소 링크(`naver.me`)로 앱/웹에 정확히 연결
  - **카카오맵 · 티맵**: 좌표 대신 주소·상호 검색으로 앱 실행(미설치 시 웹/스토어 폴백)
- 장소를 바꾸려면 `src/data/event.ts` 의 `naverPlaceUrl`, `mapEmbedQuery`,
  `mapSearchQuery`, `venueAddress` 값만 수정하세요.

## Vercel 배포

1. 이 저장소를 GitHub에 push
2. Vercel → New Project → 저장소 선택
3. Framework Preset: **Vite** (자동 인식), 그대로 Deploy
4. (선택) Settings → Environment Variables 에 `VITE_NAVER_MAP_CLIENT_ID` 추가
```
