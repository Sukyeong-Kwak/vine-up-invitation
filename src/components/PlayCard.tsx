import type { Play } from '../data/event'

interface Props {
  play: Play
  index: number
}

export default function PlayCard({ play, index }: Props) {
  return (
    <article className="play" style={{ ['--play-color' as string]: play.color }}>
      <div className="play__no">Play {index + 1}</div>
      <div className="play__emoji">{play.emoji}</div>
      <h3 className="play__title">{play.title}</h3>
      <p className="play__titleKo">{play.titleKo}</p>
      <p className="play__summary">{play.summary}</p>
    </article>
  )
}
