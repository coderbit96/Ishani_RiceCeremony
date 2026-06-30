export const formatTemplate = (template, values) =>
  Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template,
  )

export const getGuestName = () => {
  if (typeof window === 'undefined') return 'Guest'
  return new URLSearchParams(window.location.search).get('guest')?.trim() || 'Guest'
}
