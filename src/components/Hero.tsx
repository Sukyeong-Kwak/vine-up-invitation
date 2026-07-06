import { event } from '../data/event'

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__brand">
        <span className="hero__logo">
          <img src="/logo.png" alt="Vine English 로고" />
        </span>
        <span className="hero__wordmark">VINE ENGLISH</span>
      </div>

      <h1 className="hero__title">{event.title}</h1>
      <p className="hero__subtitle">{event.subtitle}</p>

      <div className="hero__cta">
        <a className="hero__mapbtn hero__mapbtn--go" href="#plays">
          연극 보러 가기
        </a>
        <a className="hero__mapbtn" href="#map">
          오시는 길
        </a>
      </div>
    </header>
  )
}
