// 각 연극에 어울리는 심플 라인 일러스트 (원본 SVG, 캐릭터 직접 묘사 X)
interface Props {
  id: string
}

export default function PlayArt({ id }: Props) {
  const common = {
    viewBox: '0 0 72 72',
    width: '100%',
    height: '100%',
    fill: 'none' as const,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  if (id === 'caillou') {
    // 어린이집 · 가방
    return (
      <svg {...common}>
        <path
          d="M26 24c0-6 4-9 10-9s10 3 10 9"
          stroke="currentColor"
          strokeWidth="3"
        />
        <rect
          x="17"
          y="24"
          width="38"
          height="34"
          rx="12"
          fill="currentColor"
          opacity="0.18"
          stroke="currentColor"
          strokeWidth="3"
        />
        <rect x="28" y="37" width="16" height="21" rx="7" fill="#fff" />
        <path
          d="M28 40h16"
          stroke="currentColor"
          strokeWidth="2.6"
        />
        <circle cx="36" cy="47" r="2.4" fill="currentColor" />
      </svg>
    )
  }

  if (id === 'peppa-bubbles') {
    // 비눗방울 막대
    return (
      <svg {...common}>
        <circle cx="30" cy="28" r="13" stroke="currentColor" strokeWidth="3" />
        <circle cx="49" cy="20" r="6.5" stroke="currentColor" strokeWidth="2.6" />
        <circle cx="51" cy="38" r="4.5" stroke="currentColor" strokeWidth="2.4" />
        <path
          d="M27 40 24 58"
          stroke="currentColor"
          strokeWidth="4"
        />
        <circle cx="25.5" cy="24" r="3" fill="currentColor" opacity="0.6" />
      </svg>
    )
  }

  if (id === 'bluey') {
    // 문어 놀이 · 문어
    return (
      <svg {...common}>
        <path
          d="M22 36c0-9 6-15 14-15s14 6 14 15v3H22v-3Z"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M22 39c-1.5 5-4 7-6.5 8M30 39v9M42 39c1.5 5 4 7 6.5 8M50 39c1.5 4.5 4 6.5 6.5 7.5"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle cx="31" cy="33" r="2.4" fill="currentColor" />
        <circle cx="41" cy="33" r="2.4" fill="currentColor" />
      </svg>
    )
  }

  if (id === 'daniel') {
    // 레스토랑 · 접시와 포크·나이프
    return (
      <svg {...common}>
        <circle
          cx="36"
          cy="36"
          r="14"
          fill="currentColor"
          opacity="0.18"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle cx="36" cy="36" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.6" />
        <path d="M15 18v13M15 31v9M12 18v9a3 3 0 0 0 6 0v-9" stroke="currentColor" strokeWidth="2.6" />
        <path d="M57 18c-3 1-5 4-5 8s2 5 5 5m0-13v36" stroke="currentColor" strokeWidth="2.6" />
      </svg>
    )
  }

  if (id === 'peppa-jelly') {
    // 젤리 컵
    return (
      <svg {...common}>
        <path
          d="M21 29h30l-3.5 22a6 6 0 0 1-6 5.2H30.5a6 6 0 0 1-6-5.2L21 29Z"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="3"
        />
        <ellipse cx="36" cy="29" rx="15" ry="5.5" fill="#fff" stroke="currentColor" strokeWidth="3" />
        <path d="M36 24v-4" stroke="currentColor" strokeWidth="2.6" />
        <circle cx="36" cy="17" r="4" fill="currentColor" />
      </svg>
    )
  }

  return null
}
