// 지도 앱 딥링크 (티맵 · 네이버지도 · 카카오맵)
// 앱이 설치돼 있으면 앱으로 바로 열고, 없으면 각 앱에 맞는 대체 경로로 이동합니다.
import { event, mapQuery, venueCoord } from '../data/event'

const q = encodeURIComponent(mapQuery)
const name = encodeURIComponent(event.venueName)
const { lat, lng } = venueCoord

const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
const isIOS = /iphone|ipad|ipod/i.test(ua)
const isAndroid = /android/i.test(ua)
const isMobile = isIOS || isAndroid

const appname = () =>
  (typeof location !== 'undefined' && location.hostname) || 'vine.invitation'

// 티맵 스토어 (미설치 시 설치 유도)
const TMAP_STORE = isIOS
  ? 'https://apps.apple.com/kr/app/id431589174'
  : 'https://play.google.com/store/apps/details?id=com.skt.tmap.ku'

export type MapAppId = 'naver' | 'kakao' | 'tmap'

export interface MapApp {
  id: MapAppId
  label: string
  scheme: string
  // 앱 미설치/데스크톱일 때 이동할 곳
  fallback: string
}

export const mapApps: MapApp[] = [
  {
    id: 'naver',
    label: '네이버지도',
    scheme: `nmap://place?lat=${lat}&lng=${lng}&name=${name}&appname=${appname()}`,
    fallback: `https://map.naver.com/p/search/${q}`,
  },
  {
    id: 'kakao',
    label: '카카오맵',
    scheme: `kakaomap://route?ep=${lat},${lng}&by=CAR`,
    fallback: `https://map.kakao.com/?q=${q}`,
  },
  {
    id: 'tmap',
    label: '티맵',
    // iOS·Android 공통으로 동작하는 goalname 형식
    scheme: `tmap://route?goalname=${name}&goalx=${lng}&goaly=${lat}`,
    // 티맵은 웹 지도가 없어 앱 미설치 시 설치 페이지로 이동
    fallback: TMAP_STORE,
  },
]

// 앱 실행을 시도하고, 전환이 없으면 fallback으로 이동
export function openMap(app: MapApp): void {
  // 데스크톱: 앱 스킴이 동작하지 않으므로 바로 대체 경로로
  if (!isMobile) {
    window.open(app.fallback, '_blank', 'noopener,noreferrer')
    return
  }
  const start = Date.now()
  const timer = window.setTimeout(() => {
    // 앱이 열려 화면이 전환됐다면(백그라운드) 이 코드는 실행되지 않음
    if (Date.now() - start < 2000) window.location.href = app.fallback
  }, 1600)
  const onHide = () => {
    if (document.hidden) window.clearTimeout(timer)
  }
  document.addEventListener('visibilitychange', onHide, { once: true })
  window.location.href = app.scheme
}
