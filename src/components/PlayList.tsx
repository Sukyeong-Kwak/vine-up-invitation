import { plays } from '../data/event'
import PlayCard from './PlayCard'

export default function PlayList() {
  return (
    <section className="plays">
      <div className="section-head">
        <h2 className="section-head__title">오늘의 무대</h2>
        <p className="section-head__sub">순서대로 세 편의 연극을 선보입니다</p>
      </div>
      <div className="plays__list">
        {plays.map((play, i) => (
          <PlayCard key={play.id} play={play} index={i} />
        ))}
      </div>
    </section>
  )
}
