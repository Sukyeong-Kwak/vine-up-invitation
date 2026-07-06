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
  scriptTitle: 'English Play Day',
  title: '아이들의 영어 연극에\n초대합니다!',
  subtitle: '작은 배우들이 준비한 다섯 편의 무대',
  // 인사말
  greeting:
    '몇 주 동안 아이들이 대사를 외우고, 웃고 떠들며 무대를 준비했어요. 이제 부모님 앞에서 “나 이만큼 할 수 있어요!” 하고 뽐낼 시간이랍니다. 조금 서툴러도, 목소리가 커도, 그 모습 하나하나가 아이들의 자랑거리예요. 오셔서 마음껏 웃어주시고 박수쳐 주세요!',
  // 날짜/시간
  date: '2026년 7월 11일 토요일',
  time: '오전 11시',
  eventDate: { year: 2026, month: 7, day: 11 },
  // 장소
  venueName: '바인하우스',
  venueAddress: '경기도 용인시 기흥구 신정로 123-1 H동',
  venueNote: '카페 공간에서 편안하게 관람하실 수 있습니다.',
} as const

// 네이버 지도 장소 링크 (사용자가 확인한 정확한 위치)
// 모바일에서 누르면 네이버 지도 앱으로, PC에서는 웹으로 정확히 열립니다.
export const naverPlaceUrl = 'https://naver.me/xAARFN33'

// 구글 지도 임베드용 주소 검색어 (상호명 제외 — 지오코딩 정확도 ↑)
export const mapEmbedQuery = '경기 용인시 기흥구 신정로 123-1'

// 카카오맵 · 티맵 앱 검색용 (상호명 포함)
export const mapSearchQuery = '용인 신정로 바인하우스'

// 바인하우스 정확한 좌표 (네이버 Dynamic Map 마커용)
export const venueCoord = { lat: 37.281623227476345, lng: 127.10037517627539 }

export const plays: Play[] = [
  {
    id: 'caillou',
    title: 'Caillou at Daycare',
    titleKo: '까이유의 어린이집',
    summary:
      '첫 등원날의 까이유. 낯선 곳에서 새 친구와 선생님을 만나 마음을 여는 이야기예요.',
    color: '#f39aac',
  },
  {
    id: 'peppa-bubbles',
    title: 'Peppa Pig — Bubbles',
    titleKo: '페파 피그 · 비눗방울',
    summary:
      '페파가 동생 조지에게 비눗방울 부는 법을 알려주는, 남매의 다정한 하루예요.',
    color: '#7fc3dd',
  },
  {
    id: 'peppa-jelly',
    title: 'Peppa Pig — Jelly',
    titleKo: '페파 피그 · 젤리',
    summary:
      '아빠와 함께 주방에서 젤리를 만들며 벌어지는 페파네 가족의 유쾌한 소동이에요.',
    color: '#b092dc',
  },
  {
    id: 'bluey',
    title: 'Bluey — How to Play Octopus',
    titleKo: '블루이 · 문어 놀이',
    summary:
      '블루이와 클로이가 문어가 된 아빠의 보물을 훔치는 “문어 놀이”를 하며 깔깔대는 이야기예요.',
    color: '#90d1af',
  },
  {
    id: 'daniel',
    title: 'Daniel Tiger — A Night Out at the Restaurant',
    titleKo: '대니얼 타이거 · 레스토랑에서의 저녁',
    summary:
      '대니얼 타이거 가족이 상상 레스토랑에서 저녁을 먹으며 예절과 즐거움을 배우는 이야기예요.',
    color: '#ecc85f',
  },
]
