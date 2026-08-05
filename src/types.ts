export interface Product {
  id: string;
  name: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets' | 'High Jewelry' | 'Timepieces';
  collection: 'Laurence Graff' | 'Butterfly' | 'Wild Flower' | 'Tilda\'s Bow' | 'Spiral' | 'Threads' | 'Masterpiece';
  price: number;
  caratWeight?: string;
  gemstone: 'White Diamond' | 'Yellow Diamond' | 'Emerald' | 'Ruby' | 'Sapphire' | 'Pink Diamond';
  metal: 'Platinum' | '18k Yellow Gold' | '18k White Gold' | '18k Rose Gold';
  images: string[];
  description: string;
  details: string[];
  isNewArrival?: boolean;
  isBestseller?: boolean;
  isHighJewelry?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  ringSize?: string;
  engravingText?: string;
  metalChoice?: string;
}

export interface CustomRingConfig {
  carat: number; // 0.5 to 10.0
  cut: 'Round Brilliant' | 'Emerald' | 'Oval' | 'Pear' | 'Princess' | 'Cushion';
  metal: 'Platinum' | '18k Yellow Gold' | '18k White Gold' | '18k Rose Gold';
  clarity: 'FL' | 'VVS1' | 'VVS2' | 'VS1' | 'VS2';
  color: 'D' | 'E' | 'F' | 'Fancy Yellow' | 'Fancy Intense Pink';
  ringSize: string;
}

export interface BoutiqueAppointment {
  boutique: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  specialRequests?: string;
}

export interface GiftQuizAnswers {
  recipient: 'For Her' | 'For Him' | 'Bridal & Couples' | 'Self Luxury';
  occasion: 'Anniversary' | 'Engagement' | 'Red Carpet / Gala' | 'Birthday Milestone';
  budget: '$10k - $25k' | '$25k - $75k' | '$75k - $200k' | '$200k+ High Jewelry';
}
