import { plays } from '../data/event'
import PlayCard from './PlayCard'

export default function PlayList() {
  return (
    <section className="plays" id="plays">
      <div className="section-head">
        <h2 className="section-head__title">아이들의 무대</h2>
        <p className="section-head__sub">다섯 편의 짧은 영어 연극이 펼쳐져요</p>
      </div>
      <div className="plays__list">
        {plays.map((play, i) => (
          <PlayCard key={play.id} play={play} index={i} />
        ))}
      </div>
    </section>
  )
}
