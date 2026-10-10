/**
 * Single source of truth for all Samara Lanka property content.
 * Replace placeholder values (URLs, phone, images) with real ones.
 */

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

export const property = {
  name: 'Samara Lanka',
  tagline: 'A private tropical villa on Sri Lanka’s southern coast',
  subtitle:
    'Palm-fringed gardens, a private pool and the Indian Ocean a short stroll away — slow, considered luxury in the heart of the island.',
  location: { area: 'Southern Coast', country: 'Sri Lanka', lat: 5.9496, lng: 80.5469 },
  nightlyRate: { from: 185, currency: 'USD', label: '$185' },
  stats: { guests: 8, bedrooms: 4, bathrooms: 4, rating: 9.4, reviews: 128 },
  bookingUrl: 'https://www.booking.com/hotel/lk/samara-lanka.html', // TODO: replace with real listing
  whatsapp: {
    number: '94771234567', // international format, no "+"
    message: 'Hello Samara Lanka, I have a question about staying at your villa.',
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
    heading: 'A home by the sea, run like a boutique hotel',
    body: [
      'Samara Lanka is a four-bedroom villa set within lush tropical gardens, designed around open-air living: shaded verandas, a long saltwater-style pool and breezy interiors in warm timber and linen.',
      'A dedicated housekeeper and cook look after every detail, from fresh king coconuts on arrival to Sri Lankan breakfasts made to order.',
    ],
  },
  images: {
    hero: unsplash('1582719478250-c89cae4dc85b', 2400),
    gallery: [
      { src: unsplash('1520250497591-112f2f40a3f4', 1600), alt: 'Villa pool surrounded by palm trees' },
      { src: unsplash('1540541338287-41700207dee6', 900), alt: 'Open-air tropical living area' },
      { src: unsplash('1571896349842-33c89424de2d', 900), alt: 'Terrace overlooking the garden' },
      { src: unsplash('1544644181-1484b3fdfc62', 900), alt: 'Poolside lounge at dusk' },
      { src: unsplash('1512917774080-9991f1c4c750', 900), alt: 'Villa exterior in the tropical garden' },
    ],
  },
  rooms: [
    {
      name: 'Master Suite',
      beds: '1 King bed',
      ensuite: 'En-suite with rain shower & freestanding bath',
      note: 'Private veranda, garden view',
      image: unsplash('1566073771259-6a8506099945', 900),
    },
    {
      name: 'Garden Room',
      beds: '1 King bed',
      ensuite: 'En-suite with open-air rain shower',
      note: 'Opens directly to the pool',
      image: unsplash('1602002418082-a4443e081dd1', 900),
    },
    {
      name: 'Twin Room',
      beds: '2 Single beds',
      ensuite: 'En-suite with walk-in shower',
      note: 'Ideal for friends or children',
      image: unsplash('1590523277543-a94d2e4eb00b', 900),
    },
    {
      name: 'Courtyard Room',
      beds: '1 Queen bed',
      ensuite: 'En-suite with walk-in shower',
      note: 'Quiet, shaded courtyard outlook',
      image: unsplash('1573843981267-be1999ff37cd', 900),
    },
  ],
  amenities: [
    { icon: 'Waves', title: 'Private Pool', text: 'Spacious pool with sun loungers and shaded daybeds.' },
    { icon: 'Snowflake', title: 'Air Conditioning', text: 'Individually controlled AC in every bedroom.' },
    { icon: 'Wifi', title: 'Fast Wi-Fi', text: 'Fibre broadband throughout the villa and gardens.' },
    { icon: 'BrushCleaning', title: 'Daily Housekeeping', text: 'Daily housekeeping and fresh linen on request.' },
    { icon: 'Plane', title: 'Airport Transfers', text: 'Private pickup from Colombo (CMB) arranged on request.' },
    { icon: 'ChefHat', title: 'Private Chef', text: 'Home-cooked Sri Lankan and Western meals, groceries sourced fresh.' },
    { icon: 'CarFront', title: 'Free Parking', text: 'Secure on-site parking for up to three vehicles.' },
    { icon: 'Utensils', title: 'Full Kitchen', text: 'Fully equipped kitchen and outdoor dining pavilion.' },
  ],
  guide: [
    { icon: 'Umbrella', title: 'Beaches', text: 'Golden-sand bays and calm swimming coves.', distance: '5 min walk' },
    { icon: 'Waves', title: 'Surf Spots', text: 'Beginner-friendly breaks with local surf schools.', distance: '10 min drive' },
    { icon: 'UtensilsCrossed', title: 'Dining', text: 'Seafood shacks, cafés and sunset restaurants on the shore.', distance: '3 min drive' },
    { icon: 'Fish', title: 'Whale Watching', text: 'Blue whale and dolphin boat trips from the nearby harbour.', distance: '20 min drive' },
    { icon: 'Landmark', title: 'Galle Fort', text: 'UNESCO-listed colonial fort with boutiques and ramparts.', distance: '45 min drive' },
    { icon: 'TreePalm', title: 'Day Trips', text: 'Tea estates, turtle hatcheries and Yala safari excursions.', distance: '1–2 hr drive' },
  ],
  disclaimer:
    'Samara Lanka is an independently operated property. Reservations are made and processed securely through Booking.com. Booking.com is a trademark of Booking.com B.V. and is not affiliated with this website.',
} as const;

export const whatsappUrl = () =>
  `https://wa.me/${property.whatsapp.number}?text=${encodeURIComponent(property.whatsapp.message)}`;
