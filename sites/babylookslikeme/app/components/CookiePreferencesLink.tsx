'use client'

export function CookiePreferencesLink() {
  return (
    <button
      type="button"
      className="footer-link-button"
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('base44:open-cookie-prefs'))
        }
      }}
    >
      Cookie preferences
    </button>
  )
}
