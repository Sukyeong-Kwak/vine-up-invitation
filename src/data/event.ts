// 발표회 및 장소 정보 — 이 파일만 수정하면 초대장 내용이 바뀝니다.

export interface Play {
  id: string
  title: string
  titleKo: string
  emoji: string
  summary: string
  color: string
}

export const event = {
  academy: 'Vine English',
  title: '영어 발표회 초대장',
  subtitle: '아이들의 영어 연극에 부모님을 초대합니다',
  // 날짜/시간
  date: '2026년 7월 11일 (토)',
  time: '오전 11:00 시작',
  // 장소
  venueName: '바인하우스 (Bine House)',
  venueAddress: '경기도 용인시 기흥구 신정로 123-1 H동',
  venueNote: '아늑한 카페에서 편안하게 아이들의 무대를 감상하세요.',
} as const

// 지도 검색어 (네이버/구글 지도 링크에 사용)
export const mapQuery = '경기도 용인시 기흥구 신정로 123-1 바인하우스'

// 네이버 Dynamic Map(JS API) 마커용 좌표.
// 네이버 클라이언트 ID(VITE_NAVER_MAP_CLIENT_ID)를 설정하면 실제 네이버 지도가 표시됩니다.
// 아래 좌표는 신정로 인근 근사값이니 정확한 위치로 수정해서 쓰세요.
export const venueCoord = { lat: 37.2701, lng: 127.1523 }

export const plays: Play[] = [
  {
    id: 'caillou',
    title: 'Caillou at Daycare',
    titleKo: '까이유의 어린이집',
    emoji: '🎒',
    summary:
      '첫 등원날, 긴장한 까이유가 새 친구들과 선생님을 만나며 어린이집의 즐거움을 발견하는 이야기.',
    color: '#f2cc8f',
  },
  {
    id: 'peppa-bubbles',
    title: 'Peppa Pig – Bubbles',
    titleKo: '페파 피그 – 비눗방울',
    emoji: '🫧',
    summary:
      '페파가 동생 조지에게 비눗방울 부는 법을 알려주며 함께 웃음 짓는 사랑스러운 이야기.',
    color: '#a8dadc',
  },
  {
    id: 'peppa-jelly',
    title: 'Peppa Pig – Jelly',
    titleKo: '페파 피그 – 젤리',
    emoji: '🍮',
    summary:
      '페파와 조지가 대디피그와 함께 주방에서 젤리를 만들며 벌어지는 유쾌한 소동.',
    color: '#e29578',
  },
]
