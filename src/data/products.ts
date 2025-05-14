import { Product, Category } from '../types/types';

export const categories: Category[] = [
  {
    id: 1,
    name: 'Fruits & Vegetables',
    description: 'Fresh and organic produce straight from local farms',
    image: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg',
    featured: true,
  },
  {
    id: 2,
    name: 'Dairy & Eggs',
    description: 'High-quality milk, cheese, yogurt, and farm-fresh eggs',
    image: 'https://images.pexels.com/photos/6745743/pexels-photo-6745743.jpeg',
    featured: true,
  },
  {
    id: 3,
    name: 'Meat & Seafood',
    description: 'Freshly cut meat and sustainably sourced seafood',
    image: 'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg',
    featured: true,
  },
  {
    id: 4,
    name: 'Bakery',
    description: 'Artisan breads, cakes, and pastries baked daily',
    image: 'https://images.pexels.com/photos/1660213/pexels-photo-1660213.jpeg',
    featured: false,
  },
  {
    id: 5,
    name: 'Pantry Essentials',
    description: 'Everyday staples including rice, pulses, and spices',
    image: 'https://images.pexels.com/photos/4198007/pexels-photo-4198007.jpeg',
    featured: false,
  },
  {
    id: 6,
    name: 'Beverages',
    description: 'Juices, soft drinks, tea, and coffee to keep you refreshed',
    image: 'https://images.pexels.com/photos/5946673/pexels-photo-5946673.jpeg',
    featured: false,
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Fresh Organic Apples',
    description: 'Crisp, sweet, and 100% organic apples sourced from local farms.',
    price: 3.99,
    category: 'Fruits & Vegetables',
    image: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg',
    rating: 4.8,
    reviews: 124,
    stock: 100,
    featured: true,
  },
  {
    id: 2,
    name: 'Farm Fresh Eggs',
    description: 'A dozen cage-free brown eggs, rich in protein and omega-3.',
    price: 2.99,
    category: 'Dairy & Eggs',
    image: 'https://images.pexels.com/photos/6745743/pexels-photo-6745743.jpeg',
    rating: 4.7,
    reviews: 89,
    stock: 200,
    featured: true,
  },
  {
    id: 3,
    name: 'Organic Whole Milk',
    description: 'Creamy and fresh organic milk, perfect for your daily needs.',
    price: 1.89,
    category: 'Dairy & Eggs',
    image: 'https://images.pexels.com/photos/6745743/pexels-photo-6745743.jpeg',
    rating: 4.9,
    reviews: 56,
    stock: 150,
    featured: true,
  },
  {
    id: 4,
    name: 'Fresh Chicken Breast',
    description: 'Lean and tender chicken breast, antibiotic-free and freshly cut.',
    price: 6.49,
    category: 'Meat & Seafood',
    image: 'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg',
    rating: 4.6,
    reviews: 42,
    stock: 60,
  },
  {
    id: 5,
    name: 'Atlantic Salmon Fillet',
    description: 'Premium quality salmon fillet, rich in omega-3 and flavor.',
    price: 12.99,
    category: 'Meat & Seafood',
    image: 'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg',
    rating: 4.8,
    reviews: 29,
    stock: 40,
    new: true,
  },
  {
    id: 6,
    name: 'Whole Wheat Bread',
    description: 'Soft, fresh-baked whole wheat bread with no preservatives.',
    price: 2.49,
    category: 'Bakery',
    image: 'https://images.pexels.com/photos/1660213/pexels-photo-1660213.jpeg',
    rating: 4.5,
    reviews: 78,
    stock: 80,
  },
  {
    id: 7,
    name: 'Long Grain Basmati Rice',
    description: 'Aromatic and fluffy long grain rice, ideal for daily meals.',
    price: 10.99,
    category: 'Pantry Essentials',
    image: 'https://images.pexels.com/photos/4198007/pexels-photo-4198007.jpeg',
    rating: 4.9,
    reviews: 18,
    stock: 90,
    featured: true,
  },
  {
    id: 8,
    name: 'Mixed Spices Pack',
    description: 'A curated pack of 10 essential Indian spices for every kitchen.',
    price: 7.99,
    category: 'Pantry Essentials',
    image: 'https://images.pexels.com/photos/4198007/pexels-photo-4198007.jpeg',
    rating: 4.7,
    reviews: 65,
    stock: 120,
  },
  {
    id: 9,
    name: 'Fresh Orange Juice',
    description: 'Cold-pressed juice made from 100% real oranges with no sugar added.',
    price: 3.49,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/5946673/pexels-photo-5946673.jpeg',
    rating: 4.8,
    reviews: 37,
    stock: 75,
  },
  {
    id: 10,
    name: 'Green Tea Bags (50 pcs)',
    description: 'Refreshing green tea packed with antioxidants and a smooth finish.',
    price: 4.99,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/5946673/pexels-photo-5946673.jpeg',
    rating: 4.9,
    reviews: 104,
    stock: 100,
    sale: true,
  },
  {
    id: 11,
    name: 'Classic White Bread Loaf',
    description: 'Soft and fluffy white bread, perfect for sandwiches and toast.',
    price: 1.99,
    category: 'Bakery',
    image: 'https://images.pexels.com/photos/1660213/pexels-photo-1660213.jpeg',
    rating: 4.6,
    reviews: 48,
    stock: 95,
  },
  {
    id: 12,
    name: 'Organic Baby Spinach',
    description: 'Fresh and tender spinach leaves, great for salads and cooking.',
    price: 2.29,
    category: 'Fruits & Vegetables',
    image: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg',
    rating: 4.7,
    reviews: 52,
    stock: 110,
    new: true,
  },
  {
    id: 13,
    name: 'Greek Yogurt',
    description: 'Thick and creamy yogurt packed with probiotics for gut health.',
    price: 1.59,
    category: 'Dairy & Eggs',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg',
    rating: 4.8,
    reviews: 72,
    stock: 150,
  },
  {
    id: 14,
    name: 'Brown Basmati Rice',
    description: 'Nutty flavor, long grains, and a healthy source of fiber.',
    price: 11.49,
    category: 'Pantry Essentials',
    image: 'https://images.pexels.com/photos/4198007/pexels-photo-4198007.jpeg',
    rating: 4.6,
    reviews: 22,
    stock: 80,
  },
  {
    id: 15,
    name: 'Avocado Pack (2 pcs)',
    description: 'Ripe and creamy avocados perfect for toast or guacamole.',
    price: 2.99,
    category: 'Fruits & Vegetables',
    image: 'https://images.pexels.com/photos/5732857/pexels-photo-5732857.jpeg',
    rating: 4.7,
    reviews: 67,
    stock: 70,
  },
  {
    id: 16,
    name: 'Almond Butter',
    description: 'Natural almond butter with no added sugar or preservatives.',
    price: 6.99,
    category: 'Pantry Essentials',
    image: 'https://images.pexels.com/photos/5946611/pexels-photo-5946611.jpeg',
    rating: 4.9,
    reviews: 39,
    stock: 60,
    featured: true,
  },
  {
    id: 17,
    name: 'Organic Carrots (1 lb)',
    description: 'Crunchy and sweet organic carrots, perfect for snacking and cooking.',
    price: 1.49,
    category: 'Fruits & Vegetables',
    image: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg',
    rating: 4.6,
    reviews: 33,
    stock: 120,
  },
  {
    id: 18,
    name: 'Raw Honey (250ml)',
    description: 'Unprocessed, raw honey straight from the hive.',
    price: 5.49,
    category: 'Pantry Essentials',
    image: 'https://images.pexels.com/photos/5946625/pexels-photo-5946625.jpeg',
    rating: 4.9,
    reviews: 80,
    stock: 50,
    featured: true,
  },
  {
    id: 19,
    name: 'Ground Coffee (250g)',
    description: 'Premium ground coffee with a rich and smooth flavor.',
    price: 4.79,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg',
    rating: 4.7,
    reviews: 95,
    stock: 85,
  },
  {
    id: 20,
    name: 'Extra Virgin Olive Oil (500ml)',
    description: 'Cold-pressed olive oil with a robust and fruity flavor.',
    price: 7.99,
    category: 'Pantry Essentials',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg',
    rating: 4.8,
    reviews: 63,
    stock: 45,
  },
  {
    id: 21,
    name: 'Broccoli Crown',
    description: 'Fresh and nutrient-rich broccoli crowns for steaming or stir fry.',
    price: 1.99,
    category: 'Fruits & Vegetables',
    image: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg',
    rating: 4.5,
    reviews: 41,
    stock: 100,
  },
  {
    id: 22,
    name: 'Cheddar Cheese Block',
    description: 'Aged cheddar cheese with bold and sharp flavor.',
    price: 3.49,
    category: 'Dairy & Eggs',
    image: 'https://images.pexels.com/photos/65040/pexels-photo-65040.jpeg',
    rating: 4.8,
    reviews: 59,
    stock: 60,
  },
  {
    id: 23,
    name: 'Coconut Water (500ml)',
    description: 'Refreshing coconut water with natural electrolytes.',
    price: 2.49,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/5946673/pexels-photo-5946673.jpeg',
    rating: 4.6,
    reviews: 76,
    stock: 70,
  },
  {
    id: 24,
    name: 'Gluten-Free Pasta',
    description: 'Pasta made with rice flour for a gluten-free diet.',
    price: 3.99,
    category: 'Pantry Essentials',
    image: 'https://images.pexels.com/photos/4198007/pexels-photo-4198007.jpeg',
    rating: 4.5,
    reviews: 48,
    stock: 85,
  },
  {
    id: 25,
    name: 'Banana Bunch (1 kg)',
    description: 'Sweet and ripe bananas rich in potassium.',
    price: 1.29,
    category: 'Fruits & Vegetables',
    image: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg',
    rating: 4.9,
    reviews: 108,
    stock: 130,
    sale: true,
  },
  {
    id: 26,
    name: 'Beef Mince (500g)',
    description: 'Freshly ground beef ideal for burgers, tacos, or meatballs.',
    price: 5.99,
    category: 'Meat & Seafood',
    image: 'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg',
    rating: 4.7,
    reviews: 36,
    stock: 45,
  },
  {
    id: 27,
    name: 'Blueberry Pack (200g)',
    description: 'Juicy and sweet blueberries full of antioxidants.',
    price: 3.79,
    category: 'Fruits & Vegetables',
    image: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg',
    rating: 4.8,
    reviews: 67,
    stock: 70,
  },
  {
    id: 28,
    name: 'Sourdough Bread Loaf',
    description: 'Artisan sourdough bread with a crisp crust and tangy flavor.',
    price: 3.99,
    category: 'Bakery',
    image: 'https://images.pexels.com/photos/1660213/pexels-photo-1660213.jpeg',
    rating: 4.9,
    reviews: 81,
    stock: 90,
    featured: true,
  },
  {
    id: 29,
    name: 'Tofu (400g)',
    description: 'High-protein, plant-based tofu great for stir-frying or grilling.',
    price: 2.69,
    category: 'Meat & Seafood',
    image: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg',
    rating: 4.6,
    reviews: 55,
    stock: 65,
  },
  {
    id: 30,
    name: 'Sweet Potatoes (1 kg)',
    description: 'Naturally sweet and packed with nutrients and fiber.',
    price: 2.59,
    category: 'Fruits & Vegetables',
    image: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg',
    rating: 4.7,
    reviews: 42,
    stock: 75,
  },
  {
    id: 31,
    name: 'Sparkling Water (6 Pack)',
    description: 'Zero-calorie carbonated water with natural minerals.',
    price: 5.49,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/5946673/pexels-photo-5946673.jpeg',
    rating: 4.5,
    reviews: 33,
    stock: 90,
  },
  {
    id: 32,
    name: 'Organic Zucchini (500g)',
    description: 'Mild and versatile vegetable perfect for grilling or sautéeing.',
    price: 2.39,
    category: 'Fruits & Vegetables',
    image: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg',
    rating: 4.6,
    reviews: 47,
    stock: 100,
  },
  {
    id: 33,
    name: 'Whole Almonds (250g)',
    description: 'Crunchy, unsalted almonds rich in healthy fats.',
    price: 4.89,
    category: 'Pantry Essentials',
    image: 'https://images.pexels.com/photos/4198007/pexels-photo-4198007.jpeg',
    rating: 4.9,
    reviews: 61,
    stock: 55,
    featured: true,
  },
  {
    id: 34,
    name: 'Lentils (1 kg)',
    description: 'Nutritious and protein-rich lentils for soups and stews.',
    price: 3.59,
    category: 'Pantry Essentials',
    image: 'https://images.pexels.com/photos/4198007/pexels-photo-4198007.jpeg',
    rating: 4.8,
    reviews: 29,
    stock: 70,
  },
  {
    id: 35,
    name: 'Strawberry Jam (300g)',
    description: 'Homestyle strawberry jam made from real fruit.',
    price: 3.29,
    category: 'Pantry Essentials',
    image: 'https://images.pexels.com/photos/5946625/pexels-photo-5946625.jpeg',
    rating: 4.7,
    reviews: 38,
    stock: 60,
  },
  {
    id: 36,
    name: 'Organic Brown Eggs (12 pcs)',
    description: 'Naturally raised chickens produce these rich, flavorful eggs.',
    price: 3.79,
    category: 'Dairy & Eggs',
    image: 'https://images.pexels.com/photos/6745743/pexels-photo-6745743.jpeg',
    rating: 4.9,
    reviews: 77,
    stock: 100,
  },
  {
    id: 37,
    name: 'Cold Brew Coffee (1L)',
    description: 'Smooth and energizing cold brew made with premium beans.',
    price: 5.29,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg',
    rating: 4.8,
    reviews: 54,
    stock: 75,
    new: true,
  },
  {
    id: 38,
    name: 'Pumpkin Seeds (200g)',
    description: 'Crunchy and nutritious seeds perfect for snacks or salads.',
    price: 2.99,
    category: 'Pantry Essentials',
    image: 'https://images.pexels.com/photos/4198007/pexels-photo-4198007.jpeg',
    rating: 4.6,
    reviews: 31,
    stock: 70,
  },
  {
    id: 39,
    name: 'Ginger Root (200g)',
    description: 'Aromatic and spicy fresh ginger, great for cooking and tea.',
    price: 1.89,
    category: 'Fruits & Vegetables',
    image: 'https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg',
    rating: 4.7,
    reviews: 43,
    stock: 80,
  },
  {
    id: 40,
    name: 'Chocolate Chip Cookies',
    description: 'Freshly baked cookies with gooey chocolate chips.',
    price: 3.49,
    category: 'Bakery',
    image: 'https://images.pexels.com/photos/1660213/pexels-photo-1660213.jpeg',
    rating: 4.9,
    reviews: 92,
    stock: 60,
    sale: true,
  }

];


export const getFeaturedProducts = (): Product[] => 
  products.filter(product => product.featured);

export const getNewArrivals = (): Product[] => 
  products.filter(product => product.new);

export const getSaleItems = (): Product[] => 
  products.filter(product => product.sale);

export const getProductsByCategory = (category: string): Product[] => 
  products.filter(product => product.category.toLowerCase() === category.toLowerCase());

export const getFeaturedCategories = (): Category[] => 
  categories.filter(category => category.featured);

export const getProductById = (id: number): Product | undefined => 
  products.find(product => product.id === id);

export const getBestSellingProducts = (limit = 6): Product[] => {
  return [...products]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    product => 
      product.name.toLowerCase().includes(lowercaseQuery) || 
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterProducts = (
  categoryFilter?: string,
  minPrice?: number,
  maxPrice?: number,
  minRating?: number
): Product[] => {
  return products.filter(product => {
    if (categoryFilter && product.category !== categoryFilter) {
      return false;
    }
    
    if (minPrice !== undefined && product.price < minPrice) {
      return false;
    }
    if (maxPrice !== undefined && product.price > maxPrice) {
      return false;
    }
    
    if (minRating !== undefined && product.rating < minRating) {
      return false;
    }
    
    return true;
  });
};