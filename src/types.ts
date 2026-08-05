export interface Product {
  id: string;
  name: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets' | 'Timepieces' | 'High Jewelry';
  collection: string;
  price: number;
  caratWeight?: string;
  gemstone: string;
  metal: string;
  images: string[];
  description: string;
  details: string[];
  isHighJewelry?: boolean;
  isNewArrival?: boolean;
  isBestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedRingSize?: string;
}

export interface HistoricGem {
  name: string;
  year: number;
  carat: string;
  description: string;
  image: string;
}

export interface Boutique {
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
}
