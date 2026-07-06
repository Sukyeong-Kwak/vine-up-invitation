import { event } from '../data/event'
import { Grape, Heart, Sparkle, Star, Flower } from './Doodles'

export default function Hero() {
  return (
    <header className="hero">
      <Grape className="hero__deco hero__deco--grape" />
      <Heart className="hero__deco hero__deco--heart" />
      <Sparkle className="hero__deco hero__deco--spark" />
      <Star className="hero__deco hero__deco--star" />
      <Flower className="hero__deco hero__deco--flower" />
      <Heart className="hero__deco hero__deco--heart2" />
      <Sparkle className="hero__deco hero__deco--spark2" />
      <Star className="hero__deco hero__deco--star2" />
      <Grape className="hero__deco hero__deco--grape2" />

      <div className="hero__brand">
        <span className="hero__logo">
          <img src="/logo.png" alt="Vine English 로고" />
        </span>
        <span className="hero__wordmark">VINE ENGLISH</span>
      </div>

      <h1 className="hero__title">{event.showcase}</h1>
      <p className="hero__lead">{event.title}</p>
      <p className="hero__subtitle">{event.subtitle}</p>

      <div className="hero__cta">
        <a className="hero__mapbtn hero__mapbtn--go" href="#plays">
          연극 소개 보기
        </a>
        <a className="hero__mapbtn" href="#map">
          오시는 길
        </a>
      </div>
    </header>
  )
}
