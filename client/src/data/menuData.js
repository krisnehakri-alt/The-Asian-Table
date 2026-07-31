// Static Menu Dataset for THE ASIAN TABLE - Milestone 2

export const menuCategoriesData = [
  {
    id: 'asian-noodles',
    name: 'Asian Noodles',
    icon: '🍜',
    iconName: 'Soup',
    description: 'Artisanal hand-pulled & wok-tossed noodles in house secret sauces.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'asian-rice',
    name: 'Asian Rice',
    icon: '🍚',
    iconName: 'UtensilsCrossed',
    description: 'Fragrant jasmine & aromatic basmati stir-fried at high heat.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dimsum-momos',
    name: 'Dim Sum & Momos',
    icon: '🥟',
    iconName: 'PackageCheck',
    description: 'Handcrafted translucent dim sum & Himalayan style dumplings.',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'special-asian',
    name: 'Special Asian',
    icon: '⭐',
    iconName: 'Sparkles',
    isSpecial: true,
    badgeText: "Chef's Special",
    description: 'Gourmet signature entrees & classic wok delicacies.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=800'
  }
];

export const menuItemsData = [
  // CATEGORY 1: Asian Noodles (8 dishes)
  {
    id: 'veg-hakka-noodles',
    name: 'Veg Hakka Noodles',
    category: 'Asian Noodles',
    categoryId: 'asian-noodles',
    price: '$18.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    description: 'Thin wheat noodles wok-tossed with julienned bell peppers, cabbage, carrots, and spring onion with light soy.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chicken-hakka-noodles',
    name: 'Chicken Hakka Noodles',
    category: 'Asian Noodles',
    categoryId: 'asian-noodles',
    price: '$22.00',
    isVeg: false,
    isPopular: true,
    isChefRecommended: false,
    description: 'Classic wok-fried noodles tossed with succulent chicken strips, fresh crunchy vegetables, and aromatic spices.',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'egg-hakka-noodles',
    name: 'Egg Hakka Noodles',
    category: 'Asian Noodles',
    categoryId: 'asian-noodles',
    price: '$20.00',
    isVeg: false,
    isPopular: false,
    isChefRecommended: false,
    description: 'Scrambled eggs wok-tossed with thin noodles, crunchy scallions, shredded cabbage, and white pepper.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'garlic-noodles',
    name: 'Garlic Noodles',
    category: 'Asian Noodles',
    categoryId: 'asian-noodles',
    price: '$19.00',
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    description: 'Silky egg noodles infused with slow-roasted garlic oil, butter, aged soy, and toasted sesame.',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'burnt-garlic-noodles',
    name: 'Burnt Garlic Noodles',
    category: 'Asian Noodles',
    categoryId: 'asian-noodles',
    price: '$21.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    description: 'Smoky wok noodles infused with golden charred garlic bits, chili flakes, and scallion infusion.',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'schezwan-noodles',
    name: 'Schezwan Noodles',
    category: 'Asian Noodles',
    categoryId: 'asian-noodles',
    price: '$22.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    description: 'Fiery noodles tossed in vibrant house-made Sichuan pepper chili sauce and garden fresh crisp vegetables.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'singapore-noodles',
    name: 'Singapore Noodles',
    category: 'Asian Noodles',
    categoryId: 'asian-noodles',
    price: '$24.00',
    isVeg: false,
    isPopular: false,
    isChefRecommended: true,
    description: 'Thin vermicelli rice noodles seasoned with aromatic yellow curry powder, tender chicken, shrimp, and bell peppers.',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chilli-garlic-noodles',
    name: 'Chilli Garlic Noodles',
    category: 'Asian Noodles',
    categoryId: 'asian-noodles',
    price: '$23.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    description: 'Bold & spicy wok-tossed noodles with crushed red chillies, garlic paste, bell peppers, and scallions.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800'
  },

  // CATEGORY 2: Asian Rice (8 dishes)
  {
    id: 'veg-fried-rice',
    name: 'Veg Fried Rice',
    category: 'Asian Rice',
    categoryId: 'asian-rice',
    price: '$17.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    description: 'Fragrant Jasmine long-grain rice stir-fried with diced bell peppers, sweet corn, carrots, and spring onions.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chicken-fried-rice',
    name: 'Chicken Fried Rice',
    category: 'Asian Rice',
    categoryId: 'asian-rice',
    price: '$21.00',
    isVeg: false,
    isPopular: true,
    isChefRecommended: false,
    description: 'High-wok flame Jasmine rice tossed with tender marinated chicken cubes, scrambled egg, and scallions.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'egg-fried-rice',
    name: 'Egg Fried Rice',
    category: 'Asian Rice',
    categoryId: 'asian-rice',
    price: '$19.00',
    isVeg: false,
    isPopular: false,
    isChefRecommended: false,
    description: 'Fluffy Jasmine rice tossed with golden egg ribbons, light premium soy sauce, and white pepper seasoning.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'paneer-fried-rice',
    name: 'Paneer Fried Rice',
    category: 'Asian Rice',
    categoryId: 'asian-rice',
    price: '$20.00',
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    description: 'Succulent spiced cottage cheese cubes stir-fried with aromatic rice, sweet corn, and green onions.',
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'schezwan-fried-rice',
    name: 'Schezwan Fried Rice',
    category: 'Asian Rice',
    categoryId: 'asian-rice',
    price: '$21.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    description: 'Spicy rice stir-fried in vibrant red Sichuan chili oil with diced vegetables and crunchy spring onion.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'burnt-garlic-fried-rice',
    name: 'Burnt Garlic Fried Rice',
    category: 'Asian Rice',
    categoryId: 'asian-rice',
    price: '$22.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    description: 'Aromatic fried rice layered with toasted golden garlic crisps, celery, and light ginger soy.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'triple-schezwan-rice',
    name: 'Triple Schezwan Rice',
    category: 'Asian Rice',
    categoryId: 'asian-rice',
    price: '$26.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    description: 'A decadent combination of Schezwan rice, Hakka noodles, and crispy fried noodle nest served with hot spicy gravy.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mixed-fried-rice',
    name: 'Mixed Fried Rice',
    category: 'Asian Rice',
    categoryId: 'asian-rice',
    price: '$25.00',
    isVeg: false,
    isPopular: false,
    isChefRecommended: true,
    description: 'Deluxe royal mix of succulent chicken, tender shrimp, egg, and fresh garden vegetables in rich chef soy.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800'
  },

  // CATEGORY 3: Dim Sum & Momos (8 dishes)
  {
    id: 'veg-steamed-momos',
    name: 'Veg Steamed Momos',
    category: 'Dim Sum & Momos',
    categoryId: 'dimsum-momos',
    price: '$16.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    description: 'Handfolded crystal wrappers filled with finely minced cabbage, mushrooms, ginger, and aromatic coriander.',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'paneer-momos',
    name: 'Paneer Momos',
    category: 'Dim Sum & Momos',
    categoryId: 'dimsum-momos',
    price: '$18.00',
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    description: 'Soft steamed dumplings stuffed with spiced cottage cheese, green chillies, and fresh herbs.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fried-chicken-momos',
    name: 'Fried Chicken Momos',
    category: 'Dim Sum & Momos',
    categoryId: 'dimsum-momos',
    price: '$20.00',
    isVeg: false,
    isPopular: true,
    isChefRecommended: false,
    description: 'Crispy golden fried momos filled with seasoned minced chicken, served with spicy garlic dipping sauce.',
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cheese-corn-momos',
    name: 'Cheese Corn Momos',
    category: 'Dim Sum & Momos',
    categoryId: 'dimsum-momos',
    price: '$19.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    description: 'Melted mozzarella cheese and sweet kernel corn stuffed inside delicate steamed dumpling wrappers.',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kurkure-momos',
    name: 'Kurkure Momos',
    category: 'Dim Sum & Momos',
    categoryId: 'dimsum-momos',
    price: '$21.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    description: 'Ultra-crispy crunch coated momos spiced with peri-peri marinade, served with mint garlic dip.',
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tandoori-momos',
    name: 'Tandoori Momos',
    category: 'Dim Sum & Momos',
    categoryId: 'dimsum-momos',
    price: '$22.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    description: 'Charcoal-charred momos marinated in fiery tandoori yoghurt paste, smoky onions, and capsicum.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'crispy-veg-momos',
    name: 'Crispy Veg Momos',
    category: 'Dim Sum & Momos',
    categoryId: 'dimsum-momos',
    price: '$18.00',
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    description: 'Golden shallow-fried dumplings packed with crunchy lotus root, bamboo shoots, and ginger.',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'schezwan-momos',
    name: 'Schezwan Momos',
    category: 'Dim Sum & Momos',
    categoryId: 'dimsum-momos',
    price: '$21.00',
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    description: 'Steamed momos tossed in a pan of hot spicy Sichuan gravy with garlic cloves and cilantro.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800'
  },

  // CATEGORY 4: Special Asian (10 dishes - Premium Category)
  {
    id: 'veg-manchurian',
    name: 'Veg Manchurian',
    category: 'Special Asian',
    categoryId: 'special-asian',
    price: '$24.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    description: 'Crispy vegetable dumplings glazed in dark soy, cilantro, garlic, ginger, and scallion gravy.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chicken-manchurian',
    name: 'Chicken Manchurian',
    category: 'Special Asian',
    categoryId: 'special-asian',
    price: '$28.00',
    isVeg: false,
    isPopular: true,
    isChefRecommended: true,
    description: 'Tender chicken bites wok-tossed in dark garlic soy sauce, green chillies, and fresh coriander.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chilli-chicken',
    name: 'Chilli Chicken',
    category: 'Special Asian',
    categoryId: 'special-asian',
    price: '$29.00',
    isVeg: false,
    isPopular: true,
    isChefRecommended: false,
    description: 'Boneless chicken cubes flash-fried and tossed with crunchy bell peppers, onions, and spicy green chili glaze.',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dragon-chicken',
    name: 'Dragon Chicken',
    category: 'Special Asian',
    categoryId: 'special-asian',
    price: '$31.00',
    isVeg: false,
    isPopular: true,
    isChefRecommended: true,
    description: 'Crispy chicken strips tossed in fiery red pepper marinade, cashews, dried chillies, and sweet honey glaze.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'paneer-chilli-dry',
    name: 'Paneer Chilli Dry',
    category: 'Special Asian',
    categoryId: 'special-asian',
    price: '$25.00',
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    description: 'Crispy cottage cheese cubes tossed with capsicum, onion petals, and dark soy garlic oil.',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'crispy-honey-chilli-potato',
    name: 'Crispy Honey Chilli Potato',
    category: 'Special Asian',
    categoryId: 'special-asian',
    price: '$22.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    description: 'Double-fried potato batons glazed in sweet organic honey, chilli paste, and toasted white sesame seeds.',
    image: 'https://images.unsplash.com/photo-1518013038508-76151d356917?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kung-pao-chicken',
    name: 'Kung Pao Chicken',
    category: 'Special Asian',
    categoryId: 'special-asian',
    price: '$30.00',
    isVeg: false,
    isPopular: true,
    isChefRecommended: true,
    description: 'Sichuan classic dish with marinated chicken, crunchy roasted peanuts, dried red peppers, and tangy Kung Pao sauce.',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'thai-green-curry',
    name: 'Thai Green Curry',
    category: 'Special Asian',
    categoryId: 'special-asian',
    price: '$29.00',
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    description: 'Aromatic coconut milk broth infused with fresh galangal, lemongrass, Kaffir lime leaves, bamboo shoots, and Thai basil.',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'teriyaki-chicken',
    name: 'Teriyaki Chicken',
    category: 'Special Asian',
    categoryId: 'special-asian',
    price: '$28.00',
    isVeg: false,
    isPopular: false,
    isChefRecommended: false,
    description: 'Char-grilled chicken thigh glazed with house sweet mirin teriyaki glaze, served over steamed bok choy.',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hot-garlic-chicken',
    name: 'Hot Garlic Chicken',
    category: 'Special Asian',
    categoryId: 'special-asian',
    price: '$29.00',
    isVeg: false,
    isPopular: false,
    isChefRecommended: true,
    description: 'Succulent chicken slices sautéed in intense crushed garlic paste, spicy red chilli oil, and scallions.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800'
  }
];

export const chefsRecommendationData = {
  name: "Master Chef's Dragon Royal Feast",
  subtitle: "Sichuan & Cantonese Culinary Heritage",
  badge: "Chef's Special",
  price: "$38.00",
  image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
  story: "Crafted by Master Chef Kenjiro Takahashi, this signature creation features tender chicken medallions marinated in 12 Asian herbs, flash-seared in wok flames with wild Sichuan peppercorns, roasted cashew nuts, and glazed with aged 18-year amber soy. Served on a bed of sizzled scallions for an unforgettable sensory delight."
};
