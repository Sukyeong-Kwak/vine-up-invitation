import { event, mapEmbedQuery, naverPlaceUrl } from '../data/event'
import { mapApps, openMap } from '../lib/mapLinks'

const q = encodeURIComponent(mapEmbedQuery)
const googleEmbedUrl = `https://maps.google.com/maps?q=${q}&hl=ko&z=16&output=embed`

export default function MapSection() {
  return (
    <section className="map" id="map">
      <div className="section-head">
        <h2 className="section-head__title">오시는 길</h2>
        <p className="section-head__sub">{event.venueName}</p>
      </div>

      <div className="map__frame">
        <iframe
          title="바인하우스 위치 지도"
          className="map__canvas"
          src={googleEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="map__addr">{event.venueAddress}</p>
      <p className="map__note">{event.venueNote}</p>

      <p className="map__cta">지도 앱으로 열기</p>
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
