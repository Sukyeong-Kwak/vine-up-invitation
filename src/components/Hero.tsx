import { event } from '../data/event'

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__label">
        <img src="/vine.svg" alt="" className="hero__leaf" />
        <span>{event.academy}</span>
      </div>
      <p className="hero__eyebrow">부모님을 위한 초대장</p>
      <h1 className="hero__title">{event.title}</h1>
      <p className="hero__subtitle">{event.subtitle}</p>
      <div className="hero__cta">
        <span className="hero__ribbon">English Play Day</span>
        <a className="hero__mapbtn" href="#map">
          지도 보기
        </a>
      </div>
    </header>
  )
}
