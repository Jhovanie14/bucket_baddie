import { cache } from "react";

export type MenuCategory = "All" | "Buckets" | "Wings & Tenders" | "Sides & Fries" | "Drinks";

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
}

export const menuCategories: MenuCategory[] = [
  "All",
  "Buckets",
  "Wings & Tenders",
  "Sides & Fries",
  "Drinks",
];

const mockMenu: MenuItem[] = [
  // Buckets
  {
    id: "b1",
    name: "The Baddie Bucket",
    description: "20 Wings, 10 Tenders, Large Loaded Fries, and 4 Signature Sauces.",
    price: 34.99,
    category: "Buckets",
    image: "",
    tags: ["Popular"],
    popular: true,
    sizes: ["Medium", "Large", "Extra Large"],
  },
  {
    id: "b2",
    name: "Solo Bucket",
    description: "8 Wings, Small Fries, and 2 Signature Sauces. Perfect for one.",
    price: 14.99,
    category: "Buckets",
    image: "",
    sizes: ["Small", "Medium"],
  },
  {
    id: "b3",
    name: "Spicy Baddie Bucket",
    description: "20 Spicy Tenders tossed in Ghost Sauce, Large Jalapeño Fries.",
    price: 36.99,
    category: "Buckets",
    image: "",
    tags: ["Spicy"],
    sizes: ["Large", "Extra Large"],
  },

  // Wings & Tenders
  {
    id: "w1",
    name: "6-Piece Wings",
    description: "Crispy, double-fried halal wings tossed in your choice of sauce.",
    price: 8.99,
    category: "Wings & Tenders",
    image: "",
    sizes: ["Small"],
  },
  {
    id: "w2",
    name: "12-Piece Wings",
    description: "Bring a friend. Or don't. Double-fried halal wings.",
    price: 15.99,
    category: "Wings & Tenders",
    image: "",
    popular: true,
    sizes: ["Medium"],
  },
  {
    id: "w3",
    name: "4-Piece Tenders",
    description: "Massive, juicy halal chicken tenders with a crispy buttermilk bite.",
    price: 9.99,
    category: "Wings & Tenders",
    image: "",
    sizes: ["Small"],
  },
  {
    id: "w4",
    name: "8-Piece Tenders",
    description: "A solid box of our signature buttermilk tenders.",
    price: 17.99,
    category: "Wings & Tenders",
    image: "",
    sizes: ["Medium"],
  },

  // Sides & Fries
  {
    id: "s1",
    name: "Classic Crinkle Fries",
    description: "Crispy crinkle-cut fries with our secret Baddie seasoning.",
    price: 4.99,
    category: "Sides & Fries",
    image: "",
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "s2",
    name: "Loaded Baddie Fries",
    description: "Crinkle fries topped with chopped tenders, Pink Heat sauce, and scallions.",
    price: 9.99,
    category: "Sides & Fries",
    image: "",
    tags: ["Popular", "Spicy"],
    popular: true,
    sizes: ["Medium", "Large"],
  },
  {
    id: "s3",
    name: "Truffle Parm Fries",
    description: "Fries tossed in white truffle oil, parmesan, and parsley.",
    price: 6.99,
    category: "Sides & Fries",
    image: "",
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "s4",
    name: "Mac & Cheese Bites",
    description: "Deep-fried five-cheese mac bites served with Ranch.",
    price: 7.99,
    category: "Sides & Fries",
    image: "",
    tags: ["New"],
    sizes: ["Small", "Medium"],
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
