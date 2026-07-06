import { event } from '../data/event'

interface Item {
  icon: string
  label: string
  value: string
  sub?: string
}

export default function EventDetails() {
  const items: Item[] = [
    { icon: '📅', label: '날짜', value: event.date },
    { icon: '⏰', label: '시간', value: event.time },
    {
      icon: '📍',
      label: '장소',
      value: event.venueName,
      sub: event.venueAddress,
    },
  ]

  return (
    <section className="details">
      <p className="details__intro">
        아이들이 그동안 열심히 준비한 영어 연극 무대를 선보입니다.
        <br />
        따뜻한 응원과 함께 소중한 순간을 함께해 주세요.
      </p>
      <div className="details__grid">
        {items.map((it) => (
          <div className="detail" key={it.label}>
            <span className="detail__icon">{it.icon}</span>
            <span className="detail__label">{it.label}</span>
            <span className="detail__value">{it.value}</span>
            {it.sub && <span className="detail__sub">{it.sub}</span>}
          </div>
        ))}
      </div>
    </section>
  )
}
