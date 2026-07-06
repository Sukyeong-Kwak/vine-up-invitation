import { plays } from '../data/event'
import PlayCard from './PlayCard'

export default function PlayList() {
  return (
    <section className="plays">
      <div className="section-head">
        <h2 className="section-head__title">오늘의 무대</h2>
        <p className="section-head__sub">세 편의 영어 연극이 준비되어 있어요</p>
      </div>
      <div className="plays__grid">
        {plays.map((play, i) => (
          <PlayCard key={play.id} play={play} index={i} />
        ))}
      </div>
    </section>
  )
}
