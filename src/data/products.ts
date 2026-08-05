import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'graff-001',
    name: 'Laurence Graff Signature Oval Diamond Ring',
    category: 'Rings',
    collection: 'Laurence Graff',
    price: 68500,
    caratWeight: '3.50 ct',
    gemstone: 'White Diamond',
    metal: 'Platinum',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'An exemplary oval cut D-Flawless diamond set in a minimalist platinum mounting designed to magnify fire and brilliance.',
    details: ['GIA Certified D-Flawless', 'Handcrafted in London Atelier', 'Signature Laurence Graff Micro-Pavé Band'],
    isBestseller: true,
    isNewArrival: true
  },
  {
    id: 'graff-002',
    name: 'The Golden Empress Fancy Yellow Diamond Necklace',
    category: 'High Jewelry',
    collection: 'Masterpiece',
    price: 340000,
    caratWeight: '22.45 ct',
    gemstone: 'Yellow Diamond',
    metal: '18k Yellow Gold',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Featuring a rare Fancy Intense Yellow Cushion Cut diamond suspended from a cascading waterfall of white marquise diamonds.',
    details: ['Fancy Intense Yellow Diamond', 'Total Weight: 48.20 carats total', 'Museum-Grade High Jewellery Masterpiece'],
    isHighJewelry: true,
    isBestseller: true
  },
  {
    id: 'graff-003',
    name: 'Butterfly Silhouette Diamond Earrings',
    category: 'Earrings',
    collection: 'Butterfly',
    price: 24500,
    caratWeight: '2.80 ct',
    gemstone: 'White Diamond',
    metal: '18k White Gold',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Delicate openwork wings rendered in pavé diamonds encapsulate the ephemeral freedom of the Graff Butterfly motif.',
    details: ['Signature Pavé Diamond Setting', '18k White Gold Architecture', 'Understated Everyday Elegance'],
    isBestseller: true
  },
  {
    id: 'graff-004',
    name: 'Wild Flower Ruby & Diamond Cluster Bracelet',
    category: 'Bracelets',
    collection: 'Wild Flower',
    price: 92000,
    caratWeight: '12.10 ct',
    gemstone: 'Ruby',
    metal: 'Platinum',
    images: [
      'https://images.unsplash.com/photo-1611591475167-27e1f40d1653?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Intense pigeon-blood Burmese rubies framed by a bouquet of pear-shape white diamonds inspired by English botanical blooms.',
    details: ['Burmese Unheated Rubies', 'Articulated Platinum Links', 'Concealed Diamond Clasp'],
    isHighJewelry: true,
    isNewArrival: true
  },
  {
    id: 'graff-005',
    name: 'Tilda\'s Bow Diamond Choker Necklace',
    category: 'Necklaces',
    collection: 'Tilda\'s Bow',
    price: 185000,
    caratWeight: '18.90 ct',
    gemstone: 'White Diamond',
    metal: 'Platinum',
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Silken ribbons of radiant baguette and round diamonds tied into a voluptuous bow, evoking effortless haute couture grace.',
    details: ['Seamless Invisible Ribbon Setting', 'Articulated Fluid Fit', '18.90ct D-F VVS Diamonds'],
    isHighJewelry: true
  },
  {
    id: 'graff-006',
    name: 'Spiral Diamond Pavé Ring in 18k Rose Gold',
    category: 'Rings',
    collection: 'Spiral',
    price: 18200,
    caratWeight: '1.45 ct',
    gemstone: 'White Diamond',
    metal: '18k Rose Gold',
    images: [
      'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'An endless swirl of brilliant diamonds sweeping around the finger in a tactile, sculptural rose gold spiral.',
    details: ['Modern Ergonomic Profile', 'Full Pavé Diamond Band', 'Warm Rose Gold Polish']
  },
  {
    id: 'graff-007',
    name: 'Threads Emerald & Diamond Drop Earrings',
    category: 'Earrings',
    collection: 'Threads',
    price: 145000,
    caratWeight: '15.30 ct',
    gemstone: 'Emerald',
    metal: 'Platinum',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Intersecting graphic threads of geometric diamonds supporting vivid Colombian emerald drops of sublime clarity.',
    details: ['Vivid Green Colombian Emeralds', 'Asymmetric Architectural Frame', 'High Jewellery Creation'],
    isHighJewelry: true,
    isNewArrival: true
  },
  {
    id: 'graff-008',
    name: 'Laurence Graff Signature Automatic Watch',
    category: 'Timepieces',
    collection: 'Laurence Graff',
    price: 78000,
    caratWeight: '4.20 ct',
    gemstone: 'White Diamond',
    metal: '18k White Gold',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Swiss-made high horology timepiece adorned with diamond-faceted bezel and mother-of-pearl guilloché dial.',
    details: ['Swiss Automatic Movement', '40mm Diamond Faceted Case', 'Alligator Leather Strap'],
    isBestseller: true
  }
];
