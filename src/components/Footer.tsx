import { event } from '../data/event'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__msg">
        아이들의 빛나는 무대에서 만나요. 많은 관심과 사랑 부탁드립니다. 💚
      </p>
      <p className="footer__sign">{event.academy}</p>
    </footer>
  )
}
