export type ProductCategory =
  | "T-Shirts"
  | "Sweatshirts"
  | "Headwear"
  | "Slides & Accessories";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: ProductColor[];
  featured?: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

export interface BrandPillar {
  id: string;
  title: string;
  description: string;
  icon: "shield" | "dumbbell" | "lion" | "mountain" | "crown";
}

export interface BrandCopy {
  heroHeadline: string;
  heroSubheadline: string;
  heroCta: string;
  essenceTitle: string;
  essenceText: string;
  aboutTitle: string;
  aboutStory: string;
  aboutMission: string;
  footerStatement: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface ThemeColors {
  gold: string;
  background: string;
  surface: string;
  surfaceLight: string;
}

export interface StoreSettings {
  brandCopy: BrandCopy;
  contact: ContactInfo;
  theme: ThemeColors;
  products: Product[];
  pillars: BrandPillar[];
}
