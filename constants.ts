import { Profile, PricingPlan, Testimonial } from './types';
import { Sparkles, Heart, Coffee, Car, Music, PartyPopper } from 'lucide-react';

export const BOYFRIEND_PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Kabir',
    city: 'Mumbai',
    age: 24,
    vibes: ['Party Buddy', 'Funny', 'Dancer'],
    price: 999,
    imageUrl: 'https://picsum.photos/seed/kabir/400/500',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Vihaan',
    city: 'Bangalore',
    age: 27,
    vibes: ['Listener', 'Techie', 'Calm'],
    price: 499,
    imageUrl: 'https://picsum.photos/seed/vihaan/400/500',
    rating: 4.7,
  },
  {
    id: '3',
    name: 'Aryan',
    city: 'Delhi',
    age: 25,
    vibes: ['Travel Buddy', 'Photographer', 'Protective'],
    price: 799,
    imageUrl: 'https://picsum.photos/seed/aryan/400/500',
    rating: 4.8,
  },
  {
    id: '4',
    name: 'Rohan',
    city: 'Pune',
    age: 26,
    vibes: ['Foodie', 'Good Conversationalist', 'Charming'],
    price: 699,
    imageUrl: 'https://picsum.photos/seed/rohan/400/500',
    rating: 4.6,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Basic',
    price: 499,
    features: ['Coffee dates', 'Casual chat', 'Public meetups'],
  },
  {
    name: 'Premium',
    price: 999,
    features: ['Club/Party partner', 'Dinner dates', 'Photo assistance', 'Verified badge'],
    isPopular: true,
  },
  {
    name: 'VIP',
    price: 1999,
    features: ['Full day travel', 'Elite events', 'Priority booking', 'Luxury experience'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: "Had an amazing time at the club. Kabir was so polite and fun!",
    author: "Priya, Mumbai",
  },
  {
    id: 't2',
    text: "Felt very safe. We just talked for hours. Exactly what I needed.",
    author: "Sneha, Bangalore",
  },
  {
    id: 't3',
    text: "He took great photos of me during our city tour. Very professional.",
    author: "Ananya, Delhi",
  },
];

export const EXPERIENCES = [
  { icon: PartyPopper, label: 'Club Nights' },
  { icon: Car, label: 'City Rides' },
  { icon: Coffee, label: 'Cafe Talks' },
  { icon: Sparkles, label: 'Travel Days' },
  { icon: Heart, label: 'Emotional Support' },
];
