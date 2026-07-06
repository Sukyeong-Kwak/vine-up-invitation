import type { Play } from '../data/event'

interface Props {
  play: Play
  index: number
}

export default function PlayCard({ play, index }: Props) {
  return (
    <article className="play" style={{ ['--play-color' as string]: play.color }}>
      <span className="play__art">
        <img
          className="play__img"
          src={`/characters/${play.id}.png`}
          alt={play.title}
          loading="lazy"
        />
      </span>
      <div className="play__body">
        <span className="play__no">Play {index + 1}</span>
        <h3 className="play__title">{play.title}</h3>
        <p className="play__titleKo">{play.titleKo}</p>
        <p className="play__summary">{play.summary}</p>
      </div>
    </article>
  )
}
