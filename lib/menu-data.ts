import { cache } from "react";

export type MenuCategory = "All" | "Buckets" | "Wings & Rice" | "Sides & Fries" | "Drinks";

export interface MenuItemOption {
  label: string;
  image: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Exclude<MenuCategory, "All">;
  image: string;
  tags?: string[]; // e.g., "Spicy", "New", "Vegan"
  popular?: boolean;
  sizes?: string[]; // e.g., "Small", "Medium", "Large", "Extra Large"
  options?: MenuItemOption[]; // e.g., Wings vs Tenders selection
}

export const menuCategories: MenuCategory[] = [
  "All",
  "Buckets",
  "Wings & Rice",
  "Sides & Fries",
  "Drinks",
];

const mockMenu: MenuItem[] = [
  // Buckets — filled with crispy fries & topped with chicken
  {
    id: "b1",
    name: "Small Bucket",
    description: "26 oz bucket filled with crispy fries & topped with 6 Wings or 3 Tenders. Choose up to 2 sauces.",
    price: 9.99,
    category: "Buckets",
    image: "/menu/b1-wings.png",
    sizes: ["Small"],
    options: [
      { label: "6 Wings", image: "/menu/b1-wings.png" },
      { label: "3 Tenders", image: "/menu/b1-tenders.png" },
    ],
  },
  {
    id: "b2",
    name: "Medium Bucket",
    description: "32 oz bucket filled with crispy fries & topped with 10 Wings or 5 Tenders. Choose up to 2 sauces.",
    price: 14.99,
    category: "Buckets",
    image: "/menu/b2-wings.png",
    popular: true,
    sizes: ["Medium"],
    options: [
      { label: "10 Wings", image: "/menu/b2-wings.png" },
      { label: "5 Tenders", image: "/menu/b2-tenders.png" },
    ],
  },
  {
    id: "b3",
    name: "Large Bucket",
    description: "48 oz bucket filled with crispy fries & topped with 15 Wings or 8 Tenders. Choose up to 2 sauces.",
    price: 19.99,
    category: "Buckets",
    image: "/menu/b3-wings.png",
    sizes: ["Large"],
    options: [
      { label: "15 Wings", image: "/menu/b3-wings.png" },
      { label: "8 Tenders", image: "/menu/b3-tenders.png" },
    ],
  },

  // Wings & Tenders — Chicken Only (No fries)
  {
    id: "w1",
    name: "6 Wings w/ Rice",
    description: "6 crispy wings tossed in your choice of sauce. No fries.",
    price: 7.99,
    category: "Wings & Rice",
    image: "/menu/w1-wings.png",
    sizes: ["6 pc"],
  },
  {
    id: "w2",
    name: "10 Wings w/ Rice",
    description: "10 crispy wings tossed in your choice of sauce. No fries.",
    price: 11.99,
    category: "Wings & Rice",
    image: "/menu/w2-wings.png",
    popular: true,
    sizes: ["10 pc"],
  },
  {
    id: "w3",
    name: "15 Wings w/ Rice",
    description: "15 crispy wings tossed in your choice of sauce. No fries.",
    price: 16.99,
    category: "Wings & Rice",
    image: "/menu/w3-wings.png",
    sizes: ["15 pc"],
  },
  {
    id: "w4",
    name: "3 Tenders w/ Rice",
    description: "3 crispy chicken tenders tossed in your choice of sauce. No fries.",
    price: 6.99,
    category: "Wings & Rice",
    image: "/menu/w4-tenders.png",
    sizes: ["3 pc"],
  },
  {
    id: "w5",
    name: "5 Tenders w/ Rice",
    description: "5 crispy chicken tenders tossed in your choice of sauce. No fries.",
    price: 10.99,
    category: "Wings & Rice",
    image: "/menu/w5-tenders.png",
    popular: true,
    sizes: ["5 pc"],
  },
  {
    id: "w6",
    name: "8 Tenders w/ Rice",
    description: "8 crispy chicken tenders tossed in your choice of sauce. No fries.",
    price: 15.99,
    category: "Wings & Rice",
    image: "/menu/w6-tenders.png",
    sizes: ["8 pc"],
  },

  // Sides & Fries
  {
    id: "s1",
    name: "Fries-Only Bucket (Small)",
    description: "26 oz bucket of crispy fries. No chicken.",
    price: 5.99,
    category: "Sides & Fries",
    image: "/menu/s1-fries.png",
    sizes: ["Small"],
  },
  {
    id: "s2",
    name: "Fries-Only Bucket (Medium)",
    description: "32 oz bucket of crispy fries. No chicken.",
    price: 7.49,
    category: "Sides & Fries",
    image: "/menu/s2-fries.png",
    sizes: ["Medium"],
  },
  {
    id: "s3",
    name: "Fries-Only Bucket (Large)",
    description: "48 oz bucket of crispy fries. No chicken.",
    price: 9.99,
    category: "Sides & Fries",
    image: "/menu/s3-fries.png",
    sizes: ["Large"],
  },
  {
    id: "s4",
    name: "Loaded Fries (Regular)",
    description: "26 oz fries topped with chopped tenders & your choice of sauce.",
    price: 8.99,
    category: "Sides & Fries",
    image: "",
    popular: true,
    sizes: ["Regular"],
  },
  {
    id: "s5",
    name: "Loaded Fries (Large)",
    description: "32 oz fries topped with chopped tenders & your choice of sauce.",
    price: 11.99,
    category: "Sides & Fries",
    image: "",
    sizes: ["Large"],
  },

  // Drinks
  {
    id: "d1",
    name: "Fountain Soda",
    description: "Choice of Coca-Cola, Sprite, Fanta, or Diet Coke.",
    price: 2.99,
    category: "Drinks",
    image: "",
    sizes: ["Small", "Medium", "Large", "Extra Large"],
  },
  {
    id: "d2",
    name: "Neon Lemonade",
    description: "House-made electric blue raspberry lemonade.",
    price: 3.99,
    category: "Drinks",
    image: "",
    popular: true,
    sizes: ["Small", "Medium", "Large", "Extra Large"],
  },
  {
    id: "d3",
    name: "Water Bottle",
    description: "Crisp, cold spring water.",
    price: 1.99,
    category: "Drinks",
    image: "",
    sizes: ["Small"],
  },
];

/**
 * Mock database call with simulated latency.
 */
export const getMenu = cache(async (): Promise<MenuItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockMenu;
});

/**
 * Fetch a single menu item by ID.
 */
export const getMenuItemById = cache(async (id: string): Promise<MenuItem | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return mockMenu.find((item) => item.id === id);
});
