// Static Restaurant Data for THE ASIAN TABLE

import heroBg from '../assets/hero_bg.png';
import restaurantWelcome from '../assets/restaurant_welcome.png';
import foodRecipes from '../assets/food_recipes.png';
import foodDining from '../assets/food_dining.png';
import foodIngredients from '../assets/food_ingredients.png';
import foodFamily from '../assets/food_family.png';
import logo from '../assets/logo.png';

export const images = {
  heroBg,
  restaurantWelcome,
  foodRecipes,
  foodDining,
  foodIngredients,
  foodFamily,
  logo,
  chefProfile: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1000',
  ctaBg: heroBg,
  branch1: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
  branch2: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000',
  branch3: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1000',
  avatar1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
  avatar2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
  avatar3: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300'
};

export const whyChooseUsData = [
  {
    id: 'ingredients',
    title: 'Premium Ingredients',
    description: 'We source rare spices, organic heritage vegetables, and sushi-grade seafood delivered fresh daily from top regional suppliers.',
    icon: 'Sparkles'
  },
  {
    id: 'chefs',
    title: 'Expert Chefs',
    description: 'Our culinary masters possess over two decades of experience crafting authentic Asian culinary techniques passed down generations.',
    icon: 'Award'
  },
  {
    id: 'hospitality',
    title: 'Warm Hospitality',
    description: 'Immerse yourself in our tranquil, refined atmosphere backed by attentive and discreet luxury service tailored to every guest.',
    icon: 'HeartHandshake'
  }
];

export const featuredHighlightsData = [
  {
    id: 'recipes',
    title: 'Authentic Recipes',
    subtitle: 'Heritage Flavours',
    description: 'Handcrafted dim sum, charcoal-roasted duck, and secret family broths simmered for 18 hours.',
    image: foodRecipes
  },
  {
    id: 'dining',
    title: 'Elegant Dining',
    subtitle: 'Sophisticated Atmosphere',
    description: 'Sophisticated dark wood architecture, warm amber glow, and intimate table settings designed for memorable moments.',
    image: foodDining
  },
  {
    id: 'freshness',
    title: 'Fresh Ingredients',
    subtitle: 'Peak Quality Selection',
    description: 'Zero compromises on quality. Wild-caught seafood, artisanal soy infusions, and hand-picked herbs.',
    image: foodIngredients
  },
  {
    id: 'family',
    title: 'Family Friendly',
    subtitle: 'Celebration & Connection',
    description: 'Generous sharing banquets and private dining alcoves ideal for family gatherings and celebrations.',
    image: foodFamily
  }
];

export const signatureDishesData = [
  {
    id: 'peking-duck',
    name: 'Imperial Peking Duck',
    category: 'Chef Specials',
    price: '$68.00',
    tags: ["Chef's Signature", 'Sharing'],
    description: 'Crispy honey-glazed skin served with handmade scallion pancakes, cucumber strips, and 25-year aged plum hoisin.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'truffle-xiaolongbao',
    name: 'Black Truffle Xiao Long Bao',
    category: 'Dim Sum',
    price: '$32.00',
    tags: ['Handcrafted', 'Popular'],
    description: 'Steamed soup dumplings filled with Kurobuta pork loin and infused with aromatic Italian black truffle broth.',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wagyu-robata',
    name: 'A5 Miyazaki Wagyu Skewers',
    category: 'Robata & Grill',
    price: '$54.00',
    tags: ['A5 Certified', 'Gluten Free'],
    description: 'Charcoal-grilled over Japanese Binchotan with tare glaze, smoked sea salt, and fresh wasabi root.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'singapore-lobster',
    name: 'Wok-Tossed Chili Lobster',
    category: 'Wok Mastery',
    price: '$72.00',
    tags: ['Wild Caught', 'Spicy'],
    description: 'Whole Canadian lobster seared with fragrant shallots, bird’s eye chili, and tangy tomato egg gravy served with golden mantou.',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'matcha-souffle',
    name: 'Artisanal Uji Matcha Soufflé',
    category: 'Desserts & Tea',
    price: '$22.00',
    tags: ['Organic', 'Signature'],
    description: 'Warm ceremonial grade Uji matcha soufflé served with black sesame gelato and gold leaf garnish.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hamachi-crudo',
    name: 'Yellowtail Hamachi Crudo',
    category: 'Chef Specials',
    price: '$29.00',
    tags: ['Fresh Sashimi', 'Raw'],
    description: 'Sliced Pacific yellowtail with yuzu ponzu sauce, pickled jalapeño coins, and micro cilantro.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800'
  }
];

export const accoladesData = [
  { title: 'Michelin Guide Selection', year: '2026', subtitle: 'Recognized for Culinary Distinction' },
  { title: 'Gourmet Traveler Award', year: '2025', subtitle: 'Best Asian Fine Dining Venue' },
  { title: 'Wine Spectator Excellence', year: '2025', subtitle: 'Award of High Distinction' },
  { title: 'World Culinary Awards', year: '2026', subtitle: 'Top 10 Asian Restaurant Concept' }
];

export const customerReviewsData = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Food & Wine Critic',
    avatar: images.avatar1,
    rating: 5,
    review: 'THE ASIAN TABLE redefines Asian luxury dining. The Peking duck was melt-in-the-mouth perfection, and the ambiance is second to none.'
  },
  {
    id: 2,
    name: 'Marcus Sterling',
    role: 'Regular Guest',
    avatar: images.avatar2,
    rating: 5,
    review: 'An absolute masterpiece of culinary art. The attention to detail in every dish and the warmth of the staff keep our family coming back.'
  },
  {
    id: 3,
    name: 'Sophia Chen',
    role: 'Event Host',
    avatar: images.avatar3,
    rating: 5,
    review: 'Hosted our anniversary dinner here. From the dim sum starter to the matcha soufflé, everything was exquisite. Truly top tier!'
  }
];

export const branchData = [
  {
    id: 'downtown',
    name: 'Central Downtown Flagship',
    address: '88 Gold Coast Boulevard, Suite 400, Financial District',
    phone: '+1 (800) 555-0199',
    reservationPhone: '+1 (800) 555-0191',
    openingHours: 'Mon - Sun: 11:30 AM - 11:00 PM',
    reservationTiming: 'Lunch: 11:30 AM - 3:00 PM | Dinner: 5:00 PM - 11:00 PM',
    description: 'Our premier flagship venue located in the heart of downtown, featuring high ceilings, private dining suites, and a cocktail lounge.',
    image: images.branch1
  },
  {
    id: 'waterfront',
    name: 'Harbor Waterfront Branch',
    address: '204 Marina Promenade, Pier 9, Waterfront Plaza',
    phone: '+1 (800) 555-0288',
    reservationPhone: '+1 (800) 555-0282',
    openingHours: 'Mon - Sun: 12:00 PM - 11:30 PM',
    reservationTiming: 'Lunch: 12:00 PM - 3:30 PM | Dinner: 5:30 PM - 11:30 PM',
    description: 'Breathtaking ocean views combined with live wok action and fresh seafood specialties prepared by top teppanyaki masters.',
    image: images.branch2
  },
  {
    id: 'eastgarden',
    name: 'East Garden Sanctuary',
    address: '15 Lotus Avenue, Zen Garden District',
    phone: '+1 (800) 555-0377',
    reservationPhone: '+1 (800) 555-0373',
    openingHours: 'Tue - Sun: 12:00 PM - 10:30 PM (Mon Closed)',
    reservationTiming: 'Lunch: 12:00 PM - 3:00 PM | Dinner: 5:00 PM - 10:30 PM',
    description: 'A serene sanctuary surrounded by bamboo groves and tranquil koi ponds, offering an intimate dining experience.',
    image: images.branch3
  }
];

export const chefData = {
  name: 'Master Chef Kenjiro Takahashi',
  title: 'Executive Culinary Director',
  shortIntro: 'Blending centuries-old Asian culinary traditions with contemporary fine-dining techniques.',
  bio: 'Chef Kenjiro Takahashi brings over 25 years of culinary expertise, having trained in Kyoto, Hong Kong, and Tokyo before founding THE ASIAN TABLE. His signature philosophy revolves around honoring the natural flavor of every ingredient while elevating visual plating into fine art.',
  image: images.chefProfile
};

export const storyData = {
  story: 'Founded with a passion for bringing authentic East Asian flavours under one luxury roof, THE ASIAN TABLE began as a culinary dream to fuse traditional recipes with contemporary elegance.',
  mission: 'To deliver unforgettable dining experiences by honoring centuries-old Asian recipes with uncompromised quality, artisanal ingredients, and heartwarming service.',
  vision: 'To be recognized globally as the gold standard of authentic luxury Asian cuisine.',
  values: [
    { title: 'Authenticity', text: 'Preserving genuine recipes and traditional cooking methods.' },
    { title: 'Excellence', text: 'Relentless pursuit of perfection in flavor, presentation, and service.' },
    { title: 'Harmony', text: 'Crafting balanced flavors and serene dining atmospheres.' },
    { title: 'Sustainability', text: 'Ethically sourcing fresh local seafood and organic produce.' }
  ]
};
