import { event } from '../data/event'
import Countdown from './Countdown'

export default function EventDetails() {
  return (
    <section className="details">
      <p className="details__intro">{event.greeting}</p>

      <div className="details__list">
        <div className="detail detail--datetime">
          <span className="detail__label">일시</span>
          <span className="detail__body">
            <span className="detail__value">{event.date}</span>
            <span className="detail__sub">
              {event.time}
              <Countdown />
            </span>
          </span>
        </div>

        <div className="detail">
          <span className="detail__label">장소</span>
          <span className="detail__body">
            <span className="detail__value">{event.venueName}</span>
            <span className="detail__sub">{event.venueAddress}</span>
          </span>
        </div>
      </div>
    </section>
  )
}
