import { event } from '../data/event'
import { Heart, Star, Sparkle } from './Doodles'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__deco" aria-hidden="true">
        <Star className="fdc fdc--1" />
        <Heart className="fdc fdc--2" />
        <Sparkle className="fdc fdc--3" />
      </div>
      <p className="footer__msg">
        우리 아이들의 반짝이는 무대,
        <br />
        오셔서 마음껏 웃어주세요!
      </p>
      <p className="footer__sign">{event.academy}</p>
    </footer>
  )
}
