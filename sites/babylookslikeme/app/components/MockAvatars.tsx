// Server-rendered SVG avatars for the phone mockups.
// Sticker-style illustrations: soft pastel background, a hint of a face,
// and one decorative element per avatar. Not meant to look like real photos.

export function AvatarBaby() {
  return (
    <svg
      className="mock-avatar mock-avatar--baby"
      width="36"
      height="36"
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="20" fill="#FFE8D6" />
      {/* tiny dot eyes */}
      <circle cx="16.5" cy="19" r="0.9" fill="#5B3A1F" />
      <circle cx="23.5" cy="19" r="0.9" fill="#5B3A1F" />
      {/* soft smile */}
      <path
        d="M17 23 Q20 25 23 23"
        stroke="#5B3A1F"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />
      {/* little heart decoration */}
      <path
        d="M20 32c-2.2-1.6-4-2.9-4-4.6 0-1 .8-1.8 1.8-1.8.8 0 1.5.4 2.2 1.2.7-.8 1.4-1.2 2.2-1.2 1 0 1.8.8 1.8 1.8 0 1.7-1.8 3-4 4.6Z"
        fill="#E8618C"
      />
    </svg>
  )
}

export function AvatarMom() {
  return (
    <svg
      className="mock-avatar mock-avatar--mom"
      width="32"
      height="32"
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="20" fill="#FDE1E9" />
      {/* tiny dot eyes */}
      <circle cx="16.5" cy="19" r="0.9" fill="#7A2E49" />
      <circle cx="23.5" cy="19" r="0.9" fill="#7A2E49" />
      {/* soft smile */}
      <path
        d="M17 23 Q20 25 23 23"
        stroke="#7A2E49"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />
      {/* ponytail silhouette behind head, to the side */}
      <path
        d="M28 14c2.5 1.5 3.8 4.5 3 7.5-.8 3-2.8 4.5-5 5 .7-2 .8-4 0-6 1-2 1.2-4.5 2-6.5Z"
        fill="#E8618C"
      />
    </svg>
  )
}

export function AvatarDad() {
  return (
    <svg
      className="mock-avatar mock-avatar--dad"
      width="32"
      height="32"
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="20" fill="#DCE8F6" />
      {/* tiny dot eyes */}
      <circle cx="16.5" cy="18" r="0.9" fill="#2F4466" />
      <circle cx="23.5" cy="18" r="0.9" fill="#2F4466" />
      {/* soft smile */}
      <path
        d="M17 22 Q20 24 23 22"
        stroke="#2F4466"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />
      {/* simple beard outline along the jaw */}
      <path
        d="M13.5 22c.5 4 3.2 7 6.5 7s6-3 6.5-7c-1.8 1.2-4 1.8-6.5 1.8s-4.7-.6-6.5-1.8Z"
        fill="none"
        stroke="#5B7FB3"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}
