import { event } from '../data/event'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__dot" />
      <p className="footer__msg">
        아이들의 첫 무대에서 뵙기를 기다리겠습니다.
      </p>
      <p className="footer__sign">{event.academy}</p>
    </footer>
  )
}
