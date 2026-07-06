// 손그림 느낌의 장식 요소 (리본·반짝이·물결)

export function Bow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M32 20C21 7 7 9 8.5 18C10 27 25 26 32 20Z" />
      <path d="M32 20C43 7 57 9 55.5 18C54 27 39 26 32 20Z" />
      <path d="M30 22.5C26 30 24.5 34 22.5 38" />
      <path d="M34 22.5C38 30 39.5 34 41.5 38" />
      <circle cx="32" cy="20" r="3.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12Z" />
    </svg>
  )
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2 7C6 1 10 1 14 7S22 13 26 7 34 1 42 6" />
    </svg>
  )
}

export function Grape({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 30" fill="none" aria-hidden="true">
      <path
        d="M12 8V4"
        stroke="#8aa06a"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 5c2-3 5-3 6-2-3 0-4 2-4 3"
        fill="#a7c07e"
      />
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

// 다섯 편의 연극을 상징하는 풍선 다발
export function Balloons({ className }: { className?: string }) {
  const balloons = [
    { cx: 26, cy: 30, c: '#7d5aa6' },
    { cx: 52, cy: 22, c: '#a98fda' },
    { cx: 78, cy: 26, c: '#d98aab' },
    { cx: 40, cy: 46, c: '#8f9fd6' },
    { cx: 66, cy: 46, c: '#b57b9e' },
  ]
  const knotY = 74
  return (
    <svg className={className} viewBox="0 0 104 120" fill="none" aria-hidden="true">
      {balloons.map((b, i) => (
        <path
          key={`s${i}`}
          d={`M${b.cx} ${b.cy + 17} Q ${b.cx} ${(b.cy + knotY) / 2} 52 ${knotY}`}
          stroke="#ccbfac"
          strokeWidth="1"
        />
      ))}
      {balloons.map((b, i) => (
        <g key={`b${i}`}>
          <ellipse cx={b.cx} cy={b.cy} rx="13" ry="16" fill={b.c} />
          <path
            d={`M${b.cx - 2.5} ${b.cy + 15.5} h5 l-2.5 3 z`}
            fill={b.c}
          />
          <ellipse
            cx={b.cx - 4}
            cy={b.cy - 5}
            rx="3"
            ry="4.5"
            fill="#ffffff"
            opacity="0.4"
          />
        </g>
      ))}
      <path
        d={`M52 ${knotY} c -5 8 5 12 -2 20 c -4 5 3 9 -1 15`}
        stroke="#d98aab"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

// 가로 물결(스캘럽) 구분선
export function Scallop({ className }: { className?: string }) {
  return <div className={`scallop ${className ?? ''}`} aria-hidden="true" />
}
