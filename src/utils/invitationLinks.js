import eventData from '../data/eventData'

export const formatTemplate = (template, values) =>
  Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template,
  )

export const getGuestName = () => {
  if (typeof window === 'undefined') return 'Guest'
  return new URLSearchParams(window.location.search).get('guest')?.trim() || 'Guest'
}

const toGoogleDate = (date) =>
  new Date(date).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

export const createGoogleCalendarLink = () => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: eventData.calendar.title,
    dates: `${toGoogleDate(eventData.eventDate)}/${toGoogleDate(eventData.eventEndDate)}`,
    details: eventData.calendar.description,
    location: `${eventData.venueName}, ${eventData.venueAddress}`,
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
