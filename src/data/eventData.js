import frontPortrait from '../assets/ishani-front.jpeg'
import aboutPortrait from '../assets/ishani-about.jpeg'
import motherEmbrace from '../assets/gallery-mother-embrace.jpeg'
import fatherClose from '../assets/gallery-father-close.jpeg'
import motherGaze from '../assets/gallery-mother-gaze.jpeg'
import fatherSunset from '../assets/gallery-father-sunset.jpeg'

// This is the only file you need to edit to personalize the invitation.
const eventData = {
  babyName: 'Ishani',
  babyNameBengali: 'ঈশানী',
  babyFullNameBengali: 'ঈশানী নাথ',
  eventName: 'শুভ অন্নপ্রাশন',
  eventNameBengali: 'অন্নপ্রাশন',
  eventDate: '2026-08-30T11:00:00+05:30',
  eventTime: '11:00 AM – 5:00 PM',
  venueName: 'Community Hall',
  venueShortName: 'Community Hall, Purba Putiary',
  venueAddress: 'F8GW+MM4, Gangapuri, Shree Pally, Purba Putiary, Kolkata, West Bengal 700093',
  googleMapLink: 'https://maps.app.goo.gl/trHYK7HhVdYd4o2q9?g_st=aw',
  googleMapEmbedLink:
    'https://www.google.com/maps?q=F8GW%2BMM4%20Community%20Hall%2C%20Gangapuri%2C%20Shree%20Pally%2C%20Purba%20Putiary%2C%20Kolkata%2C%20West%20Bengal%20700093&output=embed',
  fatherName: 'Sayan Nath',
  motherName: 'Monalisa Nath',
  grandMotherName: 'Kalpana Nath',
  familyName: 'Nath Family',
  invitationMessage:
    'With immense joy and blessings, we invite you and your family to grace the শুভ অন্নপ্রাশন ceremony of our beloved daughter. Your presence and blessings will make this celebration more memorable.',
  aboutBaby: {
    kicker: 'Our tiniest blessing',
    title: 'A little story of love named Ishani',
    image: aboutPortrait,
    imageAlt: 'A close portrait of Ishani smiling softly',
    imagePosition: '64% 45%',
    message:
      'With love, joy and blessings, we are celebrating the শুভ অন্নপ্রাশন of our little princess. Your presence will make this day more special.',
    parentsLabel: 'Proud parents',
  },
  blessingsMessage:
    'May every grain bring her wisdom, every flavour bring her joy, and every shared meal keep her surrounded by love.',
  heroImage: frontPortrait,
  galleryImages: [
    { src: motherEmbrace, alt: 'Ishani resting in her mother’s loving embrace', caption: 'A mother’s warm embrace', position: '50% 50%' },
    { src: fatherClose, alt: 'Ishani looking up at her father', caption: 'Safe in Papa’s hands', position: '50% 50%' },
    { src: motherGaze, alt: 'Ishani sharing a tender moment with her mother', caption: 'A bond beyond words', position: '50% 50%' },
    { src: fatherSunset, alt: 'Ishani playing with her father at sunset', caption: 'Golden moments with Papa', position: '50% 50%' },
  ],
  music: {
    enabled: true,
    src: '/music/ishani-melody.wav',
  },
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About Ishani', href: '#about' },
    { label: 'Our invitation', href: '#invitation' },
    { label: 'Guest Details', href: '#celebration' },
    { label: 'Memories', href: '#gallery' },
  ],
  copy: {
    heroCeremonyLine: 'To the শুভ অন্নপ্রাশন of',
    dearGuest: 'Dear Guest, You Are Invited',
    personalizedGreeting: 'Dear {guest}, You Are Invited',
    heroImageAlt: 'Ishani smiling for her শুভ অন্নপ্রাশন celebration',
    princessBadge: 'Our Princess',
    daughterOf: 'Beloved daughter of',
    scroll: 'Discover our invitation',
    viewLocation: 'View Location',
    invitationKicker: 'A tiny spoonful. A lifetime of blessings.',
    invitationTitle: 'Her first feast of life',
    countdownKicker: 'Counting down the happy little moments',
    countdownTitle: 'Until Ishani’s special day',
    countdownLabels: ['Days', 'Hours', 'Minutes', 'Seconds'],
    eventCompleteMessage: 'Thank you for joining our special celebration.',
    scheduleKicker: 'Everything you need to know',
    scheduleTitle: 'Guest details at a glance',
    galleryKicker: 'A few frames from our hearts',
    galleryTitle: 'Meet our little princess',
    venueLabel: 'Venue',
    closing: 'We cannot wait to celebrate with you.',
    withLove: 'With love',
    locationKicker: 'Find your way to the celebration',
    locationTitle: 'We will be waiting for you here',
    openMapsButton: 'Open in Google Maps',
    blessingsKicker: 'A wish from our hearts',
    blessingsTitle: 'Bless our little princess',
    musicPlay: 'Play background music',
    musicPause: 'Pause background music',
    musicUnavailable: 'Music is unavailable',
    footerNote: 'Made with endless love for our little princess',
  },
  seo: {
    title: 'শুভ অন্নপ্রাশন Invitation of Baby Ishani',
    description: 'You are invited to the শুভ অন্নপ্রাশন celebration of Baby Ishani. Join us with your blessings.',
    shareImage: '/social-preview.jpg',
  },
}

export default eventData
