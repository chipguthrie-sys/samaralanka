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
  welcome: {
    eyebrow: 'Welcome',
    heading: 'A warm welcome at the gate',
    body: [
      'You will know you have arrived when you see our hand-painted entrance wall, with the Samara Resort name and its graceful bird.',
      'Samara Resort is a family-owned retreat near Yala National Park. A local couple run the property day to day, welcoming every guest personally and cooking home-style meals on request.',
      'Come for the wildlife and the quiet, and feel at home from the moment you walk through the gate.',
    ],
    photo: {
      src: '/images/main-gate/samara.jpeg',
      alt: 'Samara presenting the hand-painted Samara Resort entrance wall',
      caption: 'Samara, welcoming you at the gate',
      position: 'object-[75%_center]',
    },
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
  guide: {
    eyebrow: 'Local Guide',
    heading: 'Curated Experiences',
    intro: 'Our favourite things to do around Tissamaharama, with honest drive times from the property and a tip from us for each.',
    tabs: [
      {
        id: 'beaches-surf',
        label: 'Beaches & Surf',
        items: [
          { icon: 'Umbrella', title: 'Kirinda Beach', text: 'Quiet coastal beach with a seaside temple on the rocks.', distance: '~25 min drive', tip: 'Go in the late afternoon when the light is soft and it is cooler. Currents can be strong, so paddle rather than swim.', transport: true },
          { icon: 'Waves', title: 'Hambantota Beach', text: 'Long, open stretch of sand on the south coast.', distance: '~50 min drive', tip: 'Combine it with a seafood lunch on the way back.', transport: true },
          { icon: 'Waves', title: 'Arugam Bay Surf', text: 'Sri Lanka’s best-known surf destination on the east coast.', distance: '~2.5–3 hr drive', tip: 'A long day trip. Surf season there runs roughly May to September.', transport: true },
        ],
      },
      {
        id: 'culture-wildlife',
        label: 'Culture & Wildlife',
        items: [
          { icon: 'Binoculars', title: 'Yala National Park', text: 'Jeep safaris in search of leopards, elephants and abundant birdlife.', distance: '~30 min drive', tip: 'Early-morning safaris are quieter and best for wildlife. Ask us to help arrange a jeep and driver.', transport: true },
          { icon: 'Landmark', title: 'Kataragama', text: 'Sacred pilgrimage town with its famous temple complex and evening puja.', distance: '~30 min drive', tip: 'Visit around the evening puja, and dress modestly with shoulders and knees covered.', transport: true },
          { icon: 'Bird', title: 'Bundala National Park', text: 'Wetland sanctuary and Ramsar site, rich in migratory birds.', distance: '~45 min drive', tip: 'Quieter than Yala and ideal for birdwatchers. Bring binoculars.', transport: true },
          { icon: 'Waves', title: 'Tissa Wewa', text: 'Ancient reservoir lake, lovely for walks and birdwatching.', distance: 'Nearby', tip: 'Stroll the lakeside at dawn or dusk for birds and changing light.', transport: false },
          { icon: 'Landmark', title: 'Tissamaharama Stupa', text: 'Ancient white stupa in the heart of town.', distance: 'Nearby', tip: 'Best visited in the cooler hours. Remove shoes and cover shoulders and knees.', transport: false },
        ],
      },
      {
        id: 'dining-sundowners',
        label: 'Dining & Sundowners',
        items: [
          { icon: 'ChefHat', title: 'Home-Cooked Meals', text: 'Freshly prepared meals by our local host, cooked on request.', distance: 'At the property', tip: 'Let us know your dietary needs and preferences ahead of time so we can plan the menu.', transport: false },
          { icon: 'UtensilsCrossed', title: 'Local Dining', text: 'Rice and curry, fresh lake fish and cafés in Tissamaharama town.', distance: 'Nearby', tip: 'Ask for the freshwater fish from the lake when it is in season.', transport: true },
          { icon: 'Sunset', title: 'Sunset at Tissa Wewa', text: 'Watch the sun set over the lake and the birds come in to roost.', distance: 'Nearby', tip: 'Arrive about 30 minutes before sunset to find a good spot.', transport: true },
          { icon: 'Sunset', title: 'Sundowners at Kirinda', text: 'Watch the sun sink into the ocean from the coast.', distance: '~25 min drive', tip: 'Plan your return journey before dark. We can help organise a driver.', transport: true },
        ],
      },
    ],
  },
  reviews: [
    {
      name: 'Eleanor & James H.',
      country: 'United Kingdom',
      rating: 5,
      date: 'February 2026',
      quote:
        'Our jeep was waiting at the gate well before dawn, with flasks of tea for the road. We saw a leopard before breakfast, and the hosts had a hot meal ready when we got back.',
    },
    {
      name: 'Marie-Claire D.',
      country: 'France',
      rating: 5,
      date: 'January 2026',
      quote:
        'I spent every evening on my private patio with the birds in the garden. Kingfishers, peacocks and hornbills, and not a sound beyond them. It was the quietest place we stayed in Sri Lanka.',
    },
    {
      name: 'Daniel & Priya K.',
      country: 'Australia',
      rating: 5,
      date: 'March 2026',
      quote:
        'The home-cooked rice and curry was the best we had on the whole trip. Everything was made fresh by our hosts, and they adjusted it to our tastes. It felt like staying with family.',
    },
  ],
  faqs: [
    {
      q: 'How do I arrange a Yala safari jeep?',
      a: 'We arrange a trusted local jeep and driver for you. Message us with your preferred date and whether you want a morning or afternoon safari. Early-morning safaris are the quietest and best for wildlife, and your jeep will collect you from the property.',
    },
    {
      q: 'Can you arrange airport transfers from Colombo or Mattala?',
      a: 'Yes. We can organise a private driver from Colombo (Bandaranaike) Airport or Mattala Rajapaksa Airport. Send us your flight details on WhatsApp and we will confirm the fare and journey time before you arrive.',
    },
    {
      q: 'Do I need to give notice for home-cooked meals?',
      a: 'Meals are cooked fresh on request, so please let us know the day before, or in the morning for dinner. Tell us about any dietary needs or preferences and we will plan the menu around them.',
    },
    {
      q: 'Is there Wi-Fi and backup power?',
      a: 'Wi-Fi is available at the property. Please ask us about backup power arrangements during a power cut when you book, so we can confirm the current setup for your stay.',
    },
  ],
  disclaimer:
    'Samara Resort is an independently operated property. Reservations are made and processed securely through Booking.com. Booking.com is a trademark of Booking.com B.V. and is not affiliated with this website.',
} as const;

export const whatsappUrl = () =>
  `https://wa.me/${property.whatsapp.number}?text=${encodeURIComponent(property.whatsapp.message)}`;

export const transportUrl = (place: string) =>
  `https://wa.me/${property.whatsapp.number}?text=${encodeURIComponent(
    `Hello Samara Resort, could you help arrange transport to ${place} during our stay?`
  )}`;
