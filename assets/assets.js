// src/assets/assets.js

// -------------------------
// Logos & Banner
// -------------------------
export const assets = {
  lightLogo: "/Images/light_logo.png",
  darkLogo: "/Images/dark_logo.png",
  banner: "/Images/banner.png",
  banner1: "/Images/banner1.png",
  banner2: "/Images/banner2.png",

  // Category Images
  ring: "/Images/ring.png",
  bracelet: "/Images/bracelt.png",  // spelling as per your file
  earring: "/Images/earring.png",
  necklace: "/Images/necklace.png",
  poster : "/Images/poster.png",
};

// -------------------------
// Categories
// -------------------------
export const categories = [
  { id: 1, name: "Rings", image: assets.ring },
  { id: 2, name: "Necklaces", image: assets.necklace },
  { id: 3, name: "Bracelets", image: assets.bracelet },
  { id: 4, name: "Earrings", image: assets.earring },
  { id: 5, name: "Watches", image: assets.earring },
];

// -------------------------
// Top Categories (for homepage)
// -------------------------
export const topCategories = [
  { name: "Rings", image: assets.ring },
  { name: "Necklaces", image: assets.necklace },
  { name: "Earrings", image: assets.earring },
  { name: "Bracelets", image: assets.bracelet },
  { name: "Watches", image: assets.bracelet },
];

// -------------------------
// Dummy Products
// -------------------------// path adjust karo apne project ke hisaab se

 // path adjust karo

export const products = [
  // ------------------ Rings ------------------
  {
    id: 1,
    name: "Diamond Ring",
    price: 500,
    offerPrice: 450,
    image: [assets.ring, assets.ring, assets.ring],
    category: "Rings",
    rating: 4.8,
    stock: 12,
    featured: true,
    description: "Elegant diamond ring perfect for special occasions.",
  },
  {
    id: 2,
    name: "Gold Ring",
    price: 600,
    offerPrice: 550,
    image: [assets.ring],
    category: "Rings",
    rating: 4.5,
    stock: 20,
    featured: false,
    description: "Classic gold ring, timeless design for everyday wear.",
  },
  {
    id: 3,
    name: "Silver Ring",
    price: 400,
    offerPrice: 350,
    image: [assets.ring],
    category: "Rings",
    rating: 4.2,
    stock: 15,
    featured: false,
    description: "Stylish silver ring with smooth finish.",
  },
  {
    id: 4,
    name: "Platinum Ring",
    price: 1200,
    offerPrice: 1100,
    image: [assets.ring],
    category: "Rings",
    rating: 4.9,
    stock: 8,
    featured: true,
    description: "Luxurious platinum ring for special celebrations.",
  },
  {
    id: 5,
    name: "Emerald Ring",
    price: 800,
    offerPrice: 720,
    image: [assets.ring],
    category: "Rings",
    rating: 4.7,
    stock: 10,
    featured: false,
    description: "Vibrant emerald gemstone set in a classy ring.",
  },

  // ------------------ Necklaces ------------------
  {
    id: 6,
    name: "Gold Necklace",
    price: 1200,
    offerPrice: 1100,
    image: [assets.necklace],
    category: "Necklaces",
    rating: 4.9,
    stock: 5,
    featured: true,
    description: "Elegant gold necklace to complement any outfit.",
  },
  {
    id: 7,
    name: "Silver Necklace",
    price: 900,
    offerPrice: 820,
    image: [assets.necklace],
    category: "Necklaces",
    rating: 4.5,
    stock: 14,
    featured: false,
    description: "Classic silver necklace with timeless design.",
  },
  {
    id: 8,
    name: "Pearl Necklace",
    price: 1000,
    offerPrice: 920,
    image: [assets.necklace],
    category: "Necklaces",
    rating: 4.6,
    stock: 7,
    featured: false,
    description: "Beautiful pearl necklace for a graceful look.",
  },
  {
    id: 9,
    name: "Diamond Necklace",
    price: 1500,
    offerPrice: 1350,
    image: [assets.necklace],
    category: "Necklaces",
    rating: 5,
    stock: 3,
    featured: true,
    description: "Dazzling diamond necklace for special occasions.",
  },
  {
    id: 10,
    name: "Ruby Necklace",
    price: 1100,
    offerPrice: 980,
    image: [assets.necklace],
    category: "Necklaces",
    rating: 4.7,
    stock: 6,
    featured: false,
    description: "Rich ruby necklace adding a touch of luxury.",
  },

  // ------------------ Bracelets ------------------
  {
    id: 11,
    name: "Gold Bracelet",
    price: 700,
    offerPrice: 640,
    image: [assets.bracelet],
    category: "Bracelets",
    rating: 4.6,
    stock: 11,
    featured: false,
    description: "Classic gold bracelet for everyday elegance.",
  },
  {
    id: 12,
    name: "Silver Bracelet",
    price: 500,
    offerPrice: 450,
    image: [assets.bracelet],
    category: "Bracelets",
    rating: 4.3,
    stock: 9,
    featured: false,
    description: "Stylish silver bracelet with modern touch.",
  },
  {
    id: 13,
    name: "Diamond Bracelet",
    price: 900,
    offerPrice: 820,
    image: [assets.bracelet],
    category: "Bracelets",
    rating: 4.8,
    stock: 5,
    featured: true,
    description: "Elegant diamond bracelet for special occasions.",
  },
  {
    id: 14,
    name: "Pearl Bracelet",
    price: 650,
    offerPrice: 590,
    image: [assets.bracelet],
    category: "Bracelets",
    rating: 4.5,
    stock: 10,
    featured: false,
    description: "Pearl bracelet giving a graceful appearance.",
  },
  {
    id: 15,
    name: "Platinum Bracelet",
    price: 1200,
    offerPrice: 1100,
    image: [assets.bracelet],
    category: "Bracelets",
    rating: 4.9,
    stock: 4,
    featured: true,
    description: "Luxurious platinum bracelet for celebrations.",
  },

  // ------------------ Earrings ------------------
  {
    id: 16,
    name: "Gold Earrings",
    price: 450,
    offerPrice: 400,
    image: [assets.earring],
    category: "Earrings",
    rating: 4.4,
    stock: 20,
    featured: false,
    description: "Simple and elegant gold earrings.",
  },
  {
    id: 17,
    name: "Silver Earrings",
    price: 350,
    offerPrice: 300,
    image: [assets.earring],
    category: "Earrings",
    rating: 4.2,
    stock: 15,
    featured: false,
    description: "Classic silver earrings for daily wear.",
  },
  {
    id: 18,
    name: "Diamond Earrings",
    price: 800,
    offerPrice: 720,
    image: [assets.earring],
    category: "Earrings",
    rating: 4.9,
    stock: 5,
    featured: true,
    description: "Sparkling diamond earrings for special occasions.",
  },
  {
    id: 19,
    name: "Pearl Earrings",
    price: 400,
    offerPrice: 350,
    image: [assets.earring],
    category: "Earrings",
    rating: 4.5,
    stock: 8,
    featured: false,
    description: "Elegant pearl earrings for a graceful touch.",
  },
  {
    id: 20,
    name: "Ruby Earrings",
    price: 700,
    offerPrice: 630,
    image: [assets.earring],
    category: "Earrings",
    rating: 4.8,
    stock: 6,
    featured: true,
    description: "Rich ruby earrings for a luxurious look.",
  },

  // ------------------ Watches ------------------
  {
    id: 21,
    name: "Luxury Gold Watch",
    price: 2500,
    offerPrice: 2200,
    image: [assets.watch],
    category: "Watches",
    rating: 5,
    stock: 4,
    featured: true,
    description: "Premium gold-plated luxury watch for elite style.",
  },
  {
    id: 22,
    name: "Silver Classic Watch",
    price: 1800,
    offerPrice: 1600,
    image: [assets.watch],
    category: "Watches",
    rating: 4.7,
    stock: 7,
    featured: false,
    description: "Timeless silver watch with modern elegance.",
  },
  {
    id: 23,
    name: "Diamond Watch",
    price: 3000,
    offerPrice: 2700,
    image: [assets.watch],
    category: "Watches",
    rating: 5,
    stock: 3,
    featured: true,
    description: "Diamond-studded luxury watch for grand occasions.",
  },
  {
    id: 24,
    name: "Leather Strap Watch",
    price: 900,
    offerPrice: 800,
    image: [assets.watch],
    category: "Watches",
    rating: 4.4,
    stock: 12,
    featured: false,
    description: "Stylish leather strap watch for everyday wear.",
  },
  {
    id: 25,
    name: "Smart Casual Watch",
    price: 1200,
    offerPrice: 1050,
    image: [assets.watch],
    category: "Watches",
    rating: 4.6,
    stock: 9,
    featured: false,
    description: "Smart casual watch, perfect for both work and parties.",
  },
];



export const faqs = [
    {
      question: "Do you provide certification for gold jewelry?",
      answer:
        "Yes, all our gold jewelry comes with BIS Hallmark certification ensuring purity and authenticity.",
    },
    {
      question: "Can I customize my jewelry design?",
      answer:
        "Absolutely! We offer custom design services where you can create your own jewelry piece with our expert designers.",
    },
    {
      question: "Do you offer silver jewelry as well?",
      answer:
        "Yes, we have an exclusive collection of sterling silver jewelry, perfect for both daily wear and special occasions.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major debit/credit cards, UPI, net banking, and also provide EMI options on selected purchases.",
    },
    {
      question: "Do you provide a buyback or exchange policy?",
      answer:
        "Yes, we offer lifetime buyback and exchange on gold and diamond jewelry as per our policy.",
    },
  ];