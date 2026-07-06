import { useEffect, useRef, useState } from 'react'
import { event, naverPlaceUrl, venueCoord } from '../data/event'
import { mapApps, openMap } from '../lib/mapLinks'
import CopyButton from './CopyButton'

// 구글 폴백도 정확한 좌표로 핀을 찍음 (주소 검색 대신)
const googleEmbedUrl = `https://maps.google.com/maps?q=${venueCoord.lat},${venueCoord.lng}&z=17&hl=ko&output=embed`

// 네이버 Dynamic Map 클라이언트 ID (.env → VITE_NAVER_MAP_CLIENT_ID)
const naverClientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID as string | undefined

declare global {
  interface Window {
    naver?: any
    // 네이버 지도 인증 실패 시 전역으로 호출됨
    navermap_authFailure?: () => void
  }
}

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!naverClientId) return
    const scriptId = 'naver-maps-sdk'

    // 인증 실패(미등록 URL·잘못된 키 등) 시 구글 지도로 폴백
    window.navermap_authFailure = () => setFailed(true)

    const init = () => {
      const naver = window.naver
      if (!naver?.maps || !mapRef.current) return
      // 바인하우스 정확한 좌표로 고정
      const center = new naver.maps.LatLng(venueCoord.lat, venueCoord.lng)
      const map = new naver.maps.Map(mapRef.current, { center, zoom: 17 })

      // 위치 강조용 원
      new naver.maps.Circle({
        map,
        center,
        radius: 32,
        strokeColor: '#e88ba0',
        strokeOpacity: 0.9,
        strokeWeight: 2,
        fillColor: '#e88ba0',
        fillOpacity: 0.14,
      })

      // 상호 라벨이 달린 커스텀 마커
      new naver.maps.Marker({
        position: center,
        map,
        title: event.venueName,
        zIndex: 100,
        icon: {
          content:
            '<div class="nmap-pin"><span class="nmap-pin__label">' +
            event.venueName +
            '</span><span class="nmap-pin__dot"></span></div>',
          anchor: new naver.maps.Point(65, 66),
        },
      })
      setReady(true)
    }

    if (window.naver?.maps) {
      init()
      return
    }
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script')
      s.id = scriptId
      s.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${naverClientId}`
      s.async = true
      s.onload = init
      s.onerror = () => setFailed(true)
      document.head.appendChild(s)
    }
  }, [])

  const useNaver = Boolean(naverClientId) && !failed

  return (
    <section className="map" id="map">
      <div className="section-head">
        <h2 className="section-head__title">오시는 길</h2>
        <p className="section-head__sub">{event.venueName}</p>
      </div>

      <div className="map__frame">
        {useNaver ? (
          <div ref={mapRef} className="map__canvas" aria-label="네이버 지도" />
        ) : (
          <iframe
            title="바인하우스 위치 지도"
            className="map__canvas"
            src={googleEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
        {useNaver && !ready && (
          <div className="map__loading">지도를 불러오는 중…</div>
        )}
      </div>

      <p className="map__addr">
        <span>{event.venueAddress}</span>
        <CopyButton text={event.venueAddress} />
      </p>
      <p className="map__note">{event.venueNote}</p>

      <p className="map__cta">지도 앱으로 길찾기</p>
      <div className="map__apps">
        {mapApps.map((app) => (
          <button
            key={app.id}
            type="button"
            className={`appbtn appbtn--${app.id}`}
            onClick={() => openMap(app)}
          >
            {app.label}
          </button>
        ))}
      </div>

      <a
        className="map__exact"
        href={naverPlaceUrl}
        target="_blank"
        rel="noreferrer"
      >
        정확한 위치를 네이버 지도에서 확인하기 →
      </a>
    </section>
  )
}
