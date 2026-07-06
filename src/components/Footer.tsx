import { event } from '../data/event'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__dot" />
      <p className="footer__msg">
        우리 아이들의 반짝이는 무대,
        <br />
        오셔서 마음껏 웃어주세요!
      </p>
      <p className="footer__sign">{event.academy}</p>
    </footer>
  )
}
