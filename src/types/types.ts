export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  stock: number;
  featured?: boolean;
  new?: boolean;
  sale?: boolean;
  colors?: string[];
  sizes?: string[];
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CustomOrder {
  productName: string;
  description: string;
  estimatedPrice: number;
  quantity: number;
  referenceImage?: string;
  name: string;
  email: string;
  phone: string;
}