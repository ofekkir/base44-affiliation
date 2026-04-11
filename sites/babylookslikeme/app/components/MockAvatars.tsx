// Server-rendered SVG avatars for the phone mockups.
// These are stylized illustrations, not real photos.

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
      <circle cx="20" cy="19" r="8" fill="#F4B86A" />
      <circle cx="17" cy="18" r="0.9" fill="#3F2A1A" />
      <circle cx="23" cy="18" r="0.9" fill="#3F2A1A" />
      <path
        d="M17 22 Q20 24 23 22"
        stroke="#3F2A1A"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M12 13 Q14 9 17 11"
        stroke="#D99857"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28 13 Q26 9 23 11"
        stroke="#D99857"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
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
      <path
        d="M20 8c-5 0-8 3-8 7.5 0 2 .5 3.8 1.2 5l-1.2 4 4-1c1.2.7 2.5 1 4 1s2.8-.3 4-1l4 1-1.2-4c.7-1.2 1.2-3 1.2-5 0-4.5-3-7.5-8-7.5Z"
        fill="#E8618C"
      />
      <path
        d="M13 33c0-3.9 3-6.5 7-6.5s7 2.6 7 6.5"
        fill="#E8618C"
      />
      <circle cx="17.5" cy="17" r="0.9" fill="#fff" />
      <circle cx="22.5" cy="17" r="0.9" fill="#fff" />
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
      <path
        d="M12 14c0-4 3.5-6 8-6s8 2 8 6c0 1.5-.3 2.8-.8 4H12.8c-.5-1.2-.8-2.5-.8-4Z"
        fill="#3F5B85"
      />
      <circle cx="20" cy="19" r="5.5" fill="#5B7FB3" />
      <path
        d="M13 33c0-3.9 3-6.5 7-6.5s7 2.6 7 6.5"
        fill="#5B7FB3"
      />
      <circle cx="17.5" cy="19" r="0.9" fill="#fff" />
      <circle cx="22.5" cy="19" r="0.9" fill="#fff" />
      <path
        d="M16 23 Q20 25 24 23"
        stroke="#3F5B85"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
