/**
 * Single source of truth for all Samara Resort property content.
 * Replace placeholder values (URLs, phone, images) with real ones.
 */

export const property = {
  name: 'Samara Resort',
  tagline: 'A private villa in Tissamaharama, gateway to Yala',
  subtitle:
    'Two private bedrooms with their own patios, set among gardens alive with wildlife — a peaceful base near Yala National Park and the lakes of Tissamaharama.',
  location: { area: 'Tissamaharama', country: 'Sri Lanka', lat: 6.2833, lng: 81.2889 },
  nightlyRate: { from: 185, currency: 'USD', label: '$185' },
  stats: { guests: 4, bedrooms: 2, bathrooms: 2, rating: 9.4, reviews: 128 },
  bookingUrl: 'https://www.booking.com/hotel/lk/samara-lanka.html', // TODO: replace with real listing
  whatsapp: {
    number: '94771234567', // international format, no "+"
    message: 'Hello Samara Resort, I have a question about staying at your villa.',
  },
  social: {
    instagram: 'https://instagram.com/samaralanka',
    facebook: 'https://facebook.com/samaralanka',
  },
  nav: [
    { label: 'Overview', href: '#overview' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Guide', href: '#guide' },
    { label: 'Location', href: '#location' },
  ],
  overview: {
    heading: 'A peaceful retreat in the wild south-east',
    body: [
      'Samara Resort is a two-bedroom villa set within lush tropical gardens, with a private patio outside each bedroom for enjoying the views and the wildlife that visits the property.',
      'The property is run by a local couple who look after guests personally, and meals are cooked on request.',
    ],
  },
  images: {
    hero: '/images/hero/hero.jpg',
    gallery: [
      { src: '/images/gallery/gallery2.jpg', alt: 'Samara Resort villa' },
      { src: '/images/gallery/gallery3.jpg', alt: 'Samara Resort villa grounds' },
      { src: '/images/gallery/gallery4.jpg', alt: 'Samara Resort living spaces' },
      { src: '/images/gallery/gallery1.jpg', alt: 'Samara Resort villa details' },
      { src: '/images/gallery/gallery5.jpg', alt: 'Samara Resort villa view' },
    ],
  },
  space: {
    eyebrow: 'The Space',
    heading: 'Two private bedrooms, each with its own bathroom and patio',
    intro:
      'Each bedroom has a private bathroom and a walk-out patio, so you can step outside to enjoy the surrounding views and the wildlife on the property.',
  },
  rooms: [
    {
      name: 'Bedroom One',
      features: ['Private bathroom', 'Walk-out patio', 'Views of the surrounding grounds and wildlife'],
      images: [
        { src: '/images/rooms/bedroom1.1.jpg', alt: 'Bedroom One' },
        { src: '/images/rooms/bedroom1.2.jpg', alt: 'Bedroom One, second view' },
        { src: '/images/rooms/bedroom1.3.jpg', alt: 'Bedroom One, third view' },
      ],
    },
    {
      name: 'Bedroom Two',
      features: ['Private bathroom', 'Walk-out patio', 'Views of the surrounding grounds and wildlife'],
      images: [
        { src: '/images/rooms/bedroom2.1.jpg', alt: 'Bedroom Two' },
        { src: '/images/rooms/bedroom2.2.jpg', alt: 'Bedroom Two, second view' },
      ],
    },
  ],
  amenities: [
    { icon: 'Snowflake', title: 'Air Conditioning', text: 'Individually controlled AC in every bedroom.' },
    { icon: 'Wifi', title: 'Fast Wi-Fi', text: 'Fibre broadband throughout the villa and gardens.' },
    { icon: 'BrushCleaning', title: 'Daily Housekeeping', text: 'Daily housekeeping and fresh linen on request.' },
    { icon: 'Plane', title: 'Airport Transfers', text: 'Private pickups arranged on request.' },
    { icon: 'ChefHat', title: 'Home-Cooked Meals', text: 'Freshly prepared meals by our local host, available on request.' },
    { icon: 'CarFront', title: 'Free Parking', text: 'Secure on-site parking for up to three vehicles.' },
  ],
  guide: [
    { icon: 'Binoculars', title: 'Yala National Park', text: 'Jeep safaris in search of leopards, elephants and abundant birdlife.', distance: '~30 min drive' },
    { icon: 'Waves', title: 'Tissa Wewa', text: 'Ancient reservoir lake, lovely for sunset walks and birdwatching.', distance: 'Nearby' },
    { icon: 'Landmark', title: 'Kataragama', text: 'Sacred pilgrimage town with its famous temple complex and evening puja.', distance: '~30 min drive' },
    { icon: 'Bird', title: 'Bundala National Park', text: 'Wetland sanctuary and Ramsar site, rich in migratory birds.', distance: '~45 min drive' },
    { icon: 'Umbrella', title: 'Kirinda Beach', text: 'Quiet coastal beach with a seaside temple on the rocks.', distance: '~25 min drive' },
    { icon: 'UtensilsCrossed', title: 'Local Dining', text: 'Rice and curry, fresh lake fish and cafés in Tissamaharama town.', distance: 'Nearby' },
  ],
  disclaimer:
    'Samara Resort is an independently operated property. Reservations are made and processed securely through Booking.com. Booking.com is a trademark of Booking.com B.V. and is not affiliated with this website.',
} as const;

export const whatsappUrl = () =>
  `https://wa.me/${property.whatsapp.number}?text=${encodeURIComponent(property.whatsapp.message)}`;
