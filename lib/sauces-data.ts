export interface Sauce {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heat: 1 | 2 | 3 | 4 | 5; // 1 = mild, 5 = extreme
  color: string; // tailwind gradient stops
  image: string;
  ingredients: string[];
  pairsWith: string[];
}

export const sauces: Sauce[] = [
  {
    id: "ghost-mode-mirchi",
    name: "Ghost Mode Mirchi",
    tagline: "Extreme heat. Not for the faint-hearted.",
    description:
      "Ghost pepper meets fiery green mirchi in this face-melting extreme sauce. You've been warned — this one's not a game.",
    heat: 5,
    color: "from-red-700 to-red-950",
    image: "",
    ingredients: ["Ghost Pepper", "Green Mirchi", "Vinegar", "Garlic", "Smoked Paprika"],
    pairsWith: ["Wings", "Tenders", "Buckets"],
  },
  {
    id: "mirchi-melt",
    name: "Mirchi Melt",
    tagline: "South Asian heat, bold and unapologetic.",
    description:
      "A rich, slow-cooked green mirchi sauce with deep spice and a lingering burn. Heat with personality.",
    heat: 4,
    color: "from-green-600 to-emerald-800",
    image: "",
    ingredients: ["Green Mirchi", "Onion", "Garlic", "Cumin", "Vinegar"],
    pairsWith: ["Wings", "Tenders", "Loaded Fries"],
  },
  {
    id: "periperi-masala",
    name: "PeriPeri Masala",
    tagline: "African fire meets desi soul.",
    description:
      "Peri peri heat blended with aromatic masala spices. Smoky, tangy, and boldly spiced — a fusion that just works.",
    heat: 4,
    color: "from-orange-600 to-red-700",
    image: "",
    ingredients: ["Peri Peri Chili", "Masala Spices", "Tomato", "Garlic", "Lemon"],
    pairsWith: ["Wings", "Tenders", "Buckets"],
  },
  {
    id: "garlic-drip",
    name: "Garlic Drip",
    tagline: "Dripping in garlic. Zero regrets.",
    description:
      "A buttery roasted garlic sauce with a glossy drip finish. Rich, savory, and completely addictive.",
    heat: 1,
    color: "from-yellow-200 to-amber-400",
    image: "",
    ingredients: ["Roasted Garlic", "Butter", "Olive Oil", "Parsley", "Lemon"],
    pairsWith: ["Tenders", "Loaded Fries", "Buckets"],
  },
  {
    id: "buff-baddie",
    name: "Buff Baddie",
    tagline: "Buffalo sauce, but make it baddie.",
    description:
      "Our take on the classic buffalo — tangy, buttery, and hitting harder than expected. Old school heat with a Baddie twist.",
    heat: 3,
    color: "from-orange-500 to-red-600",
    image: "",
    ingredients: ["Cayenne", "Butter", "Vinegar", "Garlic", "Salt"],
    pairsWith: ["Wings", "Tenders", "Buckets"],
  },
  {
    id: "mango-habanero-heat",
    name: "Mango Habanero Heat",
    tagline: "Tropical sweetness, habanero bite.",
    description:
      "Ripe mango purée collides with habanero heat for a sauce that's sweet up front and fiery at the back. Summer in every drop.",
    heat: 4,
    color: "from-yellow-400 to-orange-600",
    image: "",
    ingredients: ["Mango Purée", "Habanero", "Lime", "Ginger", "Agave"],
    pairsWith: ["Wings", "Tenders", "Loaded Fries"],
  },
  {
    id: "butter-baddie",
    name: "Butter Baddie",
    tagline: "Smooth, rich, and totally indulgent.",
    description:
      "A velvety butter sauce with mild seasoning and a silky finish. No heat, all comfort. The sauce that makes everything better.",
    heat: 1,
    color: "from-yellow-300 to-amber-300",
    image: "",
    ingredients: ["Butter", "Garlic", "Cream", "Herbs", "Salt"],
    pairsWith: ["Tenders", "Buckets", "Loaded Fries"],
  },
  {
    id: "lemon-masalaflex",
    name: "Lemon Masalaflex",
    tagline: "Dry rub. Zesty. Bold. Flex.",
    description:
      "A zesty dry rub blend of lemon zest, chaat masala, and warming spices. No sauce, just pure seasoning that coats every bite.",
    heat: 2,
    color: "from-lime-400 to-yellow-500",
    image: "",
    ingredients: ["Lemon Zest", "Chaat Masala", "Cumin", "Coriander", "Black Salt"],
    pairsWith: ["Wings", "Tenders", "Fries-Only Bucket"],
  },
];

export async function getSauces(): Promise<Sauce[]> {
  return sauces;
}
