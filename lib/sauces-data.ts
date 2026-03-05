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
    id: "baddie-bbq",
    name: "Baddie BBQ",
    tagline: "Sweet, smoky, and dangerously good.",
    description:
      "Our signature smoky barbecue sauce with a hint of brown sugar, hickory, and a slow-burn finish. The OG crowd-pleaser that started it all.",
    heat: 1,
    color: "from-amber-600 to-orange-700",
    image: "",
    ingredients: ["Tomato", "Brown Sugar", "Hickory Smoke", "Garlic", "Apple Cider Vinegar"],
    pairsWith: ["Classic Bucket", "Tenders", "Loaded Fries"],
  },
  {
    id: "honey-drip",
    name: "Honey Drip",
    tagline: "Sticky, golden, and absolutely addictive.",
    description:
      "A luscious honey glaze with hints of ginger and a whisper of heat. Coats every bite in liquid gold — you'll be licking your fingers for real.",
    heat: 2,
    color: "from-yellow-500 to-amber-500",
    image: "",
    ingredients: ["Raw Honey", "Ginger", "Sesame", "Chili Flake", "Soy"],
    pairsWith: ["Wings", "Tenders", "Waffle Fries"],
  },
  {
    id: "pink-heat",
    name: "Pink Heat",
    tagline: "Pretty in pink. Deadly on the tongue.",
    description:
      "A creamy sriracha-ranch fusion that hits different. Looks cute, bites back. Our most Instagrammed sauce for a reason.",
    heat: 3,
    color: "from-pink-500 to-rose-600",
    image: "",
    ingredients: ["Sriracha", "Ranch", "Lime", "Garlic", "Pink Peppercorn"],
    pairsWith: ["Wings", "Classic Bucket", "Fry Bowl"],
  },
  {
    id: "neon-mango",
    name: "Neon Mango",
    tagline: "Tropical fire in every drop.",
    description:
      "A mango-habanero masterpiece that glows. Sweet tropical mango meets habanero heat — sunshine and spice collide in the most beautiful way.",
    heat: 4,
    color: "from-orange-400 to-red-500",
    image: "",
    ingredients: ["Mango Purée", "Habanero", "Lime", "Cilantro", "Agave"],
    pairsWith: ["Wings", "Tenders", "Loaded Chicken Fries"],
  },
  {
    id: "ghost-sauce",
    name: "Ghost Sauce",
    tagline: "You've been warned. Seriously.",
    description:
      "Carolina reaper and ghost pepper blended into a smoky, face-melting sauce. Only the bold survive. Sign the waiver (kidding… maybe).",
    heat: 5,
    color: "from-red-600 to-red-900",
    image: "",
    ingredients: ["Ghost Pepper", "Carolina Reaper", "Smoked Paprika", "Garlic", "Vinegar"],
    pairsWith: ["Wings", "Spicy Tenders", "Spicy Baddie Bucket"],
  },
  {
    id: "garlic-flex",
    name: "Garlic Flex",
    tagline: "Garlic on garlic on garlic.",
    description:
      "Roasted garlic butter with parmesan and herbs. Zero heat, maximum flavor. The sauce that proves you don't need spice to be a baddie.",
    heat: 1,
    color: "from-emerald-500 to-teal-600",
    image: "",
    ingredients: ["Roasted Garlic", "Butter", "Parmesan", "Parsley", "Lemon Zest"],
    pairsWith: ["Tenders", "Truffle Fries", "Classic Bucket"],
  },
];

export async function getSauces(): Promise<Sauce[]> {
  return sauces;
}
