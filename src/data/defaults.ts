import type { StoreSettings } from "@/types";

export const DEFAULT_SETTINGS: StoreSettings = {
  theme: {
    gold: "#D4AF37",
    background: "#000000",
    surface: "#121212",
    surfaceLight: "#1E1E1E",
  },
  brandCopy: {
    heroHeadline: "SUBMIT TO PURPOSE. LIVE WITH POWER.",
    heroSubheadline:
      "Strength through submission. Built for men who lead with faith and live with integrity.",
    heroCta: "Explore Collection",
    essenceTitle: "Strength. Humility. Discipline. Purpose.",
    essenceText:
      "S.L.A.M. stands for strength through submission. It's a mindset of humility, discipline, and purpose. Built for men who lead with faith and live with integrity.",
    aboutTitle: "Built for Men of Faith",
    aboutStory:
      "S.L.A.M. was born from a conviction that true strength begins with surrender — to God, to purpose, and to the discipline required to lead with integrity. Every garment we create is a statement of identity: bold enough to stand out, grounded enough to honor what matters most.",
    aboutMission:
      "We design premium athletic streetwear for men who refuse to compromise — men who train their bodies, sharpen their minds, and walk in faith. From the gym to the street, S.L.A.M. apparel carries the message: submit to purpose, live with power.",
    footerStatement:
      "Strength through submission. Premium apparel for men who lead with faith and live with integrity.",
  },
  contact: {
    email: "smattier@yahoo.com",
    phone: "7042360302",
  },
  pillars: [
    {
      id: "1",
      title: "Submit to God",
      description: "Everything starts with Him.",
      icon: "shield",
    },
    {
      id: "2",
      title: "Build Discipline",
      description: "Train your body. Strengthen your mind.",
      icon: "dumbbell",
    },
    {
      id: "3",
      title: "Live with Honor",
      description: "Lead with integrity. Respect all.",
      icon: "lion",
    },
    {
      id: "4",
      title: "Pursue Purpose",
      description: "Stay focused. Finish strong.",
      icon: "mountain",
    },
    {
      id: "5",
      title: "Be a Legacy",
      description: "Impact generations. Leave it better.",
      icon: "crown",
    },
  ],
  products: [
    {
      id: "p1",
      title: "S.L.A.M. Classic Tee",
      category: "T-Shirts",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      description:
        "Premium heavyweight cotton tee with gold S.L.A.M. embroidery on chest.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Heather Gray", hex: "#6B6B6B" },
      ],
      featured: true,
    },
    {
      id: "p2",
      title: "Submit Like A Man Hoodie",
      category: "Sweatshirts",
      price: 85,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
      description:
        "Oversized fleece hoodie with woven S.L.A.M. patch and gold drawstrings.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Charcoal", hex: "#36454F" },
      ],
      featured: true,
    },
    {
      id: "p3",
      title: "Purpose Crewneck",
      category: "Sweatshirts",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      description:
        "French terry crewneck sweatshirt with rubber S.L.A.M. patch detail.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Heather Gray", hex: "#6B6B6B" },
      ],
      featured: true,
    },
    {
      id: "p4",
      title: "S.L.A.M. Snapback",
      category: "Headwear",
      price: 38,
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80",
      description:
        "Structured snapback with 3D embroidered S.L.A.M. monogram.",
      sizes: ["One Size"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Gold", hex: "#D4AF37" },
      ],
      featured: true,
    },
    {
      id: "p5",
      title: "Legacy Dad Hat",
      category: "Headwear",
      price: 32,
      image:
        "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=800&q=80",
      description:
        "Unstructured cotton dad hat with woven S.L.A.M. patch.",
      sizes: ["One Size"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Heather Gray", hex: "#6B6B6B" },
      ],
      featured: true,
    },
    {
      id: "p6",
      title: "S.L.A.M. Slides",
      category: "Slides & Accessories",
      price: 42,
      image:
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80",
      description:
        "Premium EVA slides with debossed S.L.A.M. logo and gold accent strap.",
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "White", hex: "#FFFFFF" },
      ],
      featured: true,
    },
    {
      id: "p7",
      title: "Discipline Duffel",
      category: "Slides & Accessories",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      description:
        "Water-resistant gym duffel with gold hardware and S.L.A.M. rubber patch.",
      sizes: ["One Size"],
      colors: [{ name: "Black", hex: "#000000" }],
      featured: true,
    },
    {
      id: "p8",
      title: "Faith Over Fear Tee",
      category: "T-Shirts",
      price: 48,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
      description:
        "Limited edition graphic tee with gold foil S.L.A.M. branding.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "White", hex: "#FFFFFF" },
      ],
      featured: false,
    },
    {
      id: "p9",
      title: "Honor Zip Hoodie",
      category: "Sweatshirts",
      price: 92,
      image:
        "https://images.unsplash.com/photo-1509941944445-0973b23e9844?w=800&q=80",
      description:
        "Full-zip heavyweight hoodie with embroidered S.L.A.M. back graphic.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Navy", hex: "#1B2838" },
      ],
      featured: false,
    },
    {
      id: "p10",
      title: "S.L.A.M. Beanie",
      category: "Headwear",
      price: 28,
      image:
        "https://images.unsplash.com/photo-1576871337628-98a48d0cf531?w=800&q=80",
      description:
        "Ribbed knit beanie with woven S.L.A.M. label.",
      sizes: ["One Size"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Heather Gray", hex: "#6B6B6B" },
      ],
      featured: false,
    },
  ],
};

export const STORAGE_KEY = "slam-store-settings";
export const CART_STORAGE_KEY = "slam-cart";
