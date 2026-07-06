import { useEffect, useRef, useState } from 'react'
import { event, mapQuery, venueCoord } from '../data/event'
import { mapApps, openMap } from '../lib/mapLinks'

const q = encodeURIComponent(mapQuery)
const googleEmbedUrl = `https://maps.google.com/maps?q=${q}&hl=ko&z=16&output=embed`

// 네이버 Dynamic Map은 클라이언트 ID가 있을 때만 사용 (무료, Naver Cloud Platform 발급)
const naverClientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID as string | undefined

declare global {
  interface Window {
    naver?: any
  }
}

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [naverReady, setNaverReady] = useState(false)

  useEffect(() => {
    if (!naverClientId) return
    const scriptId = 'naver-maps-sdk'
    const init = () => {
      if (!window.naver || !mapRef.current) return
      const center = new window.naver.maps.LatLng(venueCoord.lat, venueCoord.lng)
      const map = new window.naver.maps.Map(mapRef.current, { center, zoom: 16 })
      new window.naver.maps.Marker({ position: center, map })
      setNaverReady(true)
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
      document.head.appendChild(s)
    }
  }, [])

  const useNaverMap = Boolean(naverClientId)

  return (
    <section className="map" id="map">
      <div className="section-head">
        <h2 className="section-head__title">오시는 길</h2>
        <p className="section-head__sub">{event.venueName}</p>
      </div>

      <div className="map__frame">
        {useNaverMap ? (
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
        {useNaverMap && !naverReady && (
          <div className="map__loading">지도를 불러오는 중…</div>
        )}
      </div>

      <p className="map__addr">{event.venueAddress}</p>
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
    </section>
  )
}
