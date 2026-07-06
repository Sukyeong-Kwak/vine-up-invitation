// 장식 아이콘 (첫 화면·일시·푸터에서 사용)

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12Z" />
    </svg>
  )
}

export function Grape({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 30" fill="none" aria-hidden="true">
      <path d="M12 8V4" stroke="#8aa06a" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 5c2-3 5-3 6-2-3 0-4 2-4 3" fill="#a7c07e" />
      <g fill="currentColor">
        <circle cx="12" cy="11" r="3.1" />
        <circle cx="8.2" cy="14" r="3.1" />
        <circle cx="15.8" cy="14" r="3.1" />
        <circle cx="10.1" cy="18" r="3.1" />
        <circle cx="13.9" cy="18" r="3.1" />
        <circle cx="12" cy="22.2" r="3.1" />
      </g>
    </svg>
  )
}

export function Heart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 22" fill="currentColor" aria-hidden="true">
      <path d="M12 20.5C1.5 13.5 4 4.5 9.3 5.2c1.6.2 2.4 1.2 2.7 2 .3-.8 1.1-1.8 2.7-2C22 4.5 22.5 13.5 12 20.5Z" />
    </svg>
  )
}

export function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.7 6.4 6.9.5-5.3 4.5 1.7 6.7L12 17.3 6 20.9l1.7-6.7-5.3-4.5 6.9-.5z" />
    </svg>
  )
}

export function Flower({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <g fill="currentColor">
        <circle cx="12" cy="6.5" r="4" />
        <circle cx="18" cy="10.5" r="4" />
        <circle cx="15.6" cy="17.2" r="4" />
        <circle cx="8.4" cy="17.2" r="4" />
        <circle cx="6" cy="10.5" r="4" />
      </g>
      <circle cx="12" cy="12" r="2.8" fill="#fffdf9" />
    </svg>
  )
}
