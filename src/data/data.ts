export interface Boutique {
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
}

export const BOUTIQUES: Boutique[] = [
  {
    city: 'London',
    name: 'New Bond Street Flagship',
    address: '135 New Bond Street, London W1S 2TG, UK',
    phone: '+44 (0)20 7499 4101',
    hours: 'Mon - Sat: 10:00 - 18:00',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    city: 'New York',
    name: 'Madison Avenue Boutique',
    address: '710 Madison Avenue, New York, NY 10065, USA',
    phone: '+1 212 355 9292',
    hours: 'Mon - Sat: 10:00 - 18:00',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    city: 'Paris',
    name: 'Place Vendôme Salon',
    address: '17 Place Vendôme, 75001 Paris, France',
    phone: '+33 (0)1 42 61 00 00',
    hours: 'Mon - Sat: 10:30 - 19:00',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
  },
  {
    city: 'Tokyo',
    name: 'Ginza Flagship Atelier',
    address: '2-5-2 Ginza, Chuo-ku, Tokyo 104-0061, Japan',
    phone: '+81 (0)3 6228 6050',
    hours: 'Mon - Sun: 11:00 - 19:00',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80'
  }
];

export const HISTORIC_GEMS = [
  {
    year: '2017',
    name: 'The Lesedi La Rona',
    carat: '1,109 ct (Raw) / 302.37 ct (Cut)',
    description: 'The largest highest-color, highest-clarity diamond ever cut in history. Crafted from a 1,109 carat rough diamond.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2019',
    name: 'The Graff Lesedi La Rona',
    carat: '302.37 ct',
    description: 'The principal diamond cut from the rough gem: an emerald cut D-Flawless specimen of historical significance.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2015',
    name: 'The Golden Empress',
    carat: '132.55 ct',
    description: 'An extraordinary Fancy Intense Yellow Cushion Cut diamond radiates warmth like the sun itself.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2010',
    name: 'The Graff Pink',
    carat: '24.78 ct',
    description: 'Acquired by Laurence Graff, re-cut to remove imperfections into a Fancy Intense Pink VVS2 masterpiece.',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Laurence Graff has handled more diamonds of historic significance than any other living jeweler in human history.",
    author: "VOGUE International Jewellery Editor",
    publication: "VOGUE Magazine"
  },
  {
    quote: "To hold a Graff High Jewellery masterpiece is to feel the weight of perfection, artistry, and unmatched rarity.",
    author: "Robb Report Luxury Collectors Guide",
    publication: "Robb Report"
  },
  {
    quote: "Graff sets the international gold standard for diamond cutting, fire, and London atelier handcraftsmanship.",
    author: "Harper's Bazaar Haute Horlogerie",
    publication: "Harper's BAZAAR"
  }
];
