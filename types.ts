export interface Profile {
  id: string;
  name: string;
  city: string;
  age: number;
  vibes: string[];
  price: number;
  imageUrl: string;
  rating: number;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}
