export default function Logo({ className = "h-10 w-auto" }: { className?: string; priority?: boolean }) {
  return (
    <svg
      viewBox="0 0 230 56"
      className={className}
      role="img"
      aria-label="TrueNorth Consultancy"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tn-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#818cf8" />
          <stop offset="1" stopColor="#3a3df5" />
        </linearGradient>
      </defs>
      <rect x="2" y="4" width="48" height="48" rx="12" fill="url(#tn-grad)" />
      {/* north-pointing compass arrow */}
      <path d="M26 11 L36 41 L26 34 L16 41 Z" fill="#ffffff" />
      <path d="M26 11 L26 34 L16 41 Z" fill="#ffffff" fillOpacity="0.65" />
      <text
        x="62"
        y="30"
        fontSize="24"
        fontWeight="800"
        fill="var(--text)"
        style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
      >
        TrueNorth
      </text>
      <text
        x="63"
        y="46"
        fontSize="10.5"
        fontWeight="600"
        letterSpacing="3.2"
        fill="#4f5eff"
        style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
      >
        CONSULTANCY
      </text>
    </svg>
  )
}
