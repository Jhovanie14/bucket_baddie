import { cache } from "react";

export type MenuCategory = "All" | "Buckets" | "Wings & Rice" | "Tenders & Rice" | "Sides & Fries" | "Drinks";

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
  "Tenders & Rice",
  "Sides & Fries",
  "Drinks",
];

const mockMenu: MenuItem[] = [
  // Buckets — filled with crispy fries & topped with chicken
  {
    id: "b1-wings",
    name: "Small Bucket (Wings)",
    description: "26 oz bucket filled with crispy fries or rice & topped with 5 Wings. Choose up to 2 sauces +0.50.",
    price: 9.99,
    category: "Buckets",
    image: "/menu/b1-wings.png",
    sizes: ["Small"],
    options: [
      { label: "w/ Fries", image: "/menu/b1-wings.png" },
      { label: "w/ Rice", image: "/menu/w1-wings.png" },
    ],
  },
  {
    id: "b2-wings",
    name: "Medium Bucket (Wings)",
    description: "32 oz bucket filled with crispy fries or rice & topped with 8 Wings. Choose up to 2 sauces +$0.50.",
    price: 14.99,
    category: "Buckets",
    image: "/menu/b2-wings.png",
    popular: true,
    sizes: ["Medium"],
    options: [
      { label: "w/ Fries", image: "/menu/b2-wings.png" },
      { label: "w/ Rice", image: "/menu/w2-wings.png" },
    ],
  },
  {
    id: "b3-wings",
    name: "Large Bucket (Wings)",
    description: "48 oz bucket filled with crispy fries or rice & topped with 12 Wings. Choose up to 2 sauces +$0.50.",
    price: 19.99,
    category: "Buckets",
    image: "/menu/b3-wings.png",
    sizes: ["Large"],
    options: [
      { label: "w/ Fries", image: "/menu/b3-wings.png" },
      { label: "w/ Rice", image: "/menu/w3-wings.png" },
    ],
  },
  {
    id: "b1-tenders",
    name: "Small Bucket (Tenders)",
    description: "26 oz bucket filled with crispy fries or rice & topped with 2 Tenders. Choose up to 2 sauces +$0.50.",
    price: 9.99,
    category: "Buckets",
    image: "/menu/b1-tenders.png",
    sizes: ["Small"],
    options: [
      { label: "w/ Fries", image: "/menu/b1-tenders.png" },
      { label: "w/ Rice", image: "/menu/w4-tenders.png" },
    ],
  },
  {
    id: "b2-tenders",
    name: "Medium Bucket (Tenders)",
    description: "32 oz bucket filled with crispy fries or rice & topped with 5 Tenders. Choose up to 2 sauces +$0.50.",
    price: 14.99,
    category: "Buckets",
    image: "/menu/b2-tenders.png",
    sizes: ["Medium"],
    options: [
      { label: "w/ Fries", image: "/menu/b2-tenders.png" },
      { label: "w/ Rice", image: "/menu/w5-tenders.png" },
    ],
  },
  {
    id: "b3-tenders",
    name: "Large Bucket (Tenders)",
    description: "48 oz bucket filled with crispy fries or rice & topped with 5 Tenders. Choose up to 2 sauces +$0.50.",
    price: 19.99,
    category: "Buckets",
    image: "/menu/b3-tenders.png",
    sizes: ["Large"],
    options: [
      { label: "w/ Fries", image: "/menu/b3-tenders.png" },
      { label: "w/ Rice", image: "/menu/w6-tenders.png" },
    ],
  },

  // Wings & Tenders — Chicken Only (No fries)
  {
    id: "w1",
    name: "5 Wings w/ Rice",
    description: "5 crispy wings tossed in your choice of sauce. No fries.",
    price: 7.99,
    category: "Wings & Rice",
    image: "/menu/w1-wings.png",
    sizes: ["5 pc"],
  },
  {
    id: "w2",
    name: "8 Wings w/ Rice",
    description: "8 crispy wings tossed in your choice of sauce. No fries.",
    price: 11.99,
    category: "Wings & Rice",
    image: "/menu/w2-wings.png",
    popular: true,
    sizes: ["8 pc"],
  },
  {
    id: "w3",
    name: "12 Wings w/ Rice",
    description: "12 crispy wings tossed in your choice of sauce. No fries.",
    price: 16.99,
    category: "Wings & Rice",
    image: "/menu/w3-wings.png",
    sizes: ["12 pc"],
  },
  {
    id: "w4",
    name: "2 Tenders w/ Rice",
    description: "2 crispy chicken tenders tossed in your choice of sauce. No fries.",
    price: 6.99,
    category: "Tenders & Rice",
    image: "/menu/w4-tenders.png",
    sizes: ["2 pc"],
  },
  {
    id: "w5",
    name: "3 Tenders w/ Rice",
    description: "3 crispy chicken tenders tossed in your choice of sauce. No fries.",
    price: 10.99,
    category: "Tenders & Rice",
    image: "/menu/w5-tenders.png",
    popular: true,
    sizes: ["3 pc"],
  },
  {
    id: "w6",
    name: "5 Tenders w/ Rice",
    description: "5 crispy chicken tenders tossed in your choice of sauce. No fries.",
    price: 15.99,
    category: "Tenders & Rice",
    image: "/menu/w6-tenders.png",
    sizes: ["5 pc"],
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
  // {
  //   id: "s4",
  //   name: "Loaded Fries (Regular)",
  //   description: "26 oz fries topped with chopped tenders & your choice of sauce.",
  //   price: 8.99,
  //   category: "Sides & Fries",
  //   image: "",
  //   popular: true,
  //   sizes: ["Regular"],
  // },
  // {
  //   id: "s5",
  //   name: "Loaded Fries (Large)",
  //   description: "32 oz fries topped with chopped tenders & your choice of sauce.",
  //   price: 11.99,
  //   category: "Sides & Fries",
  //   image: "",
  //   sizes: ["Large"],
  // },

  // Drinks
  {
    id: "d1",
    name: "Bottled Soda",
    description: "Choice of Coca-Cola, Sprite, Fanta, or Diet Coke.",
    price: 3.25,
    category: "Drinks",
    image: "",
    sizes: ["Small", "Medium", "Large", "Extra Large"],
  },
  {
    id: "d2",
    name: "Blue Lemonade",
    description: "House-made electric blue raspberry lemonade.",
    price: 3.25,
    category: "Drinks",
    image: "",
    popular: true,
    sizes: ["Small", "Medium", "Large", "Extra Large"],
  },
  {
    id: "d3",
    name: "Water Bottle",
    description: "Crisp, cold spring water.",
    price: 2.25,
    category: "Drinks",
    image: "",
    sizes: ["Small"],
  },
  {
    id: "d4",
    name: "Mango shake",
    description: "Creamy mango shake with a tropical twist.",
    price: 3.25,
    category: "Drinks",
    image: "",
    sizes: ["Small", "Medium", "Large"]

  }
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
