import { event } from '../data/event'

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__badge">
        <img src="/vine.svg" alt="" className="hero__leaf" />
        <span>{event.academy}</span>
      </div>
      <h1 className="hero__title">{event.title}</h1>
      <p className="hero__subtitle">{event.subtitle}</p>
      <div className="hero__ribbon">🎭 English Play Showcase 🎭</div>
    </header>
  )
}
