import { event } from '../data/event'

// 행사 날짜에 손그림 동그라미가 쳐진 달력 일러스트
export default function Calendar() {
  const { year, month, day } = event.eventDate
  const firstWeekday = new Date(year, month - 1, 1).getDay()
  const daysInMonth = new Date(year, month, 0).getDate()

  const cells: (number | null)[] = []
  for (let i = 0; i < firstWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const weekdays = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <div className="cal" aria-label={`${month}월 ${day}일 행사`}>
      <div className="cal__top">
        <span className="cal__ring" />
        <span className="cal__ring" />
      </div>
      <div className="cal__month">{year}. {String(month).padStart(2, '0')}</div>
      <div className="cal__grid cal__grid--head">
        {weekdays.map((w, i) => (
          <span
            key={w}
            className={`cal__wd${i === 0 ? ' cal__wd--sun' : ''}${
              i === 6 ? ' cal__wd--sat' : ''
            }`}
          >
            {w}
          </span>
        ))}
      </div>
      <div className="cal__grid">
        {cells.map((d, i) => (
          <span
            key={i}
            className={`cal__day${d === day ? ' cal__day--event' : ''}${
              d && i % 7 === 0 ? ' cal__day--sun' : ''
            }${d && i % 7 === 6 ? ' cal__day--sat' : ''}`}
          >
            {d ?? ''}
            {d === day && (
              <svg className="cal__circle" viewBox="0 0 44 40" aria-hidden="true">
                <path
                  d="M30 6C20 2 9 6 6 15c-3 8 3 18 15 19 11 1 20-5 21-14 1-7-4-13-12-15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
