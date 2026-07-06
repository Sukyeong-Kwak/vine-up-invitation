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

## 지도

- 기본은 **키가 필요 없는 구글 지도 임베드**로 위치를 표시하고,
  하단에 **네이버 지도 길찾기 / 카카오맵 보기** 버튼을 제공합니다.
- **실제 네이버 지도(Dynamic Map)** 를 임베드하려면 무료 클라이언트 ID를 발급받아
  `.env` 에 넣으세요. (`.env.example` 참고)

  ```
  VITE_NAVER_MAP_CLIENT_ID=발급받은_ID
  ```

  발급: Naver Cloud Platform → AI·NAVER API → Maps.
  ID가 있으면 자동으로 네이버 지도가, 없으면 구글 지도가 표시됩니다.
  마커 좌표는 `src/data/event.ts` 의 `venueCoord` 에서 조정합니다.

## Vercel 배포

1. 이 저장소를 GitHub에 push
2. Vercel → New Project → 저장소 선택
3. Framework Preset: **Vite** (자동 인식), 그대로 Deploy
4. (선택) Settings → Environment Variables 에 `VITE_NAVER_MAP_CLIENT_ID` 추가
```
