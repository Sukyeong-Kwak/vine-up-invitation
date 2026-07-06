import { event } from '../data/event'

interface Item {
  label: string
  value: string
  sub?: string
}

export default function EventDetails() {
  const items: Item[] = [
    { label: '일시', value: event.date, sub: event.time },
    {
      label: '장소',
      value: event.venueName,
      sub: event.venueAddress,
    },
  ]

  return (
    <section className="details">
      <p className="details__intro">{event.greeting}</p>
      <div className="details__list">
        {items.map((it) => (
          <div className="detail" key={it.label}>
            <span className="detail__label">{it.label}</span>
            <span className="detail__body">
              <span className="detail__value">{it.value}</span>
              {it.sub && <span className="detail__sub">{it.sub}</span>}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
