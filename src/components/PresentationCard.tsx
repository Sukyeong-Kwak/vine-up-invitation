export default function PresentationCard() {
  return (
    <article className="play play--presentation">
      <span className="play__art play__art--photo">
        <img
          className="play__img play__img--photo"
          src="/presentation.png"
          alt="개인발표"
          loading="lazy"
        />
      </span>
      <div className="play__body">
        <span className="play__no">Presentation</span>
        <h3 className="play__title">Science / Book Report</h3>
        <p className="play__titleKo">개인 발표</p>
        <p className="play__summary">
          모든 친구들이 영어 책 낭송, 독후감, 과학 시간에 배운 것을 멋지게 발표합니다.
        </p>
      </div>
    </article>
  )
}
