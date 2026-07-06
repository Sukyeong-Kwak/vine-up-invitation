// 발표회 및 장소 정보 — 이 파일만 수정하면 초대장 내용이 바뀝니다.

export interface Play {
  id: string
  title: string
  titleKo: string
  summary: string
  color: string
}

export const event = {
  academy: 'Vine English',
  title: '영어 발표회에 초대합니다',
  subtitle: '아이들이 준비한 세 편의 영어 연극',
  // 인사말
  greeting:
    '한 학기 동안 아이들이 조금씩 익혀 온 영어를 작은 무대로 준비했습니다. 아직 서툴지만 스스로 대사를 외우고 무대에 서는 그 모습을, 부모님께 꼭 보여드리고 싶습니다. 잠시 시간을 내어 아이의 무대를 함께 지켜봐 주세요.',
  // 날짜/시간
  date: '2026년 7월 11일 토요일',
  time: '오전 11시',
  // 장소
  venueName: '바인하우스',
  venueAddress: '경기도 용인시 기흥구 신정로 123-1 H동',
  venueNote: '카페 공간에서 편안하게 관람하실 수 있습니다.',
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
    summary:
      '첫 등원날의 까이유. 낯선 곳에서 새 친구와 선생님을 만나 마음을 여는 이야기예요.',
    color: '#c79a5b',
  },
  {
    id: 'peppa-bubbles',
    title: 'Peppa Pig — Bubbles',
    titleKo: '페파 피그 · 비눗방울',
    summary:
      '페파가 동생 조지에게 비눗방울 부는 법을 알려주는, 남매의 다정한 하루예요.',
    color: '#7fa3b3',
  },
  {
    id: 'peppa-jelly',
    title: 'Peppa Pig — Jelly',
    titleKo: '페파 피그 · 젤리',
    summary:
      '아빠와 함께 주방에서 젤리를 만들며 벌어지는 페파네 가족의 유쾌한 소동이에요.',
    color: '#cf8a7d',
  },
]
