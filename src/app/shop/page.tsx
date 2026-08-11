"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { useStore } from "@/context/StoreContext";
import type { ProductCategory } from "@/types";

const categories: (ProductCategory | "All")[] = [
  "All",
  "T-Shirts",
  "Sweatshirts",
  "Headwear",
  "Slides & Accessories",
];

export default function ShopPage() {
  const { getProductsByCategory } = useStore();
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory | "All">("All");

  const products = getProductsByCategory(activeCategory);

  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-b from-surface to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Shop
            </p>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              The Collection
            </h1>
            <p className="mt-4 text-white/50 max-w-xl">
              Premium faith-based athletic streetwear. Select your size and
              color, add to cart, and inquire to order.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-bold tracking-wider uppercase rounded-lg border transition-all ${
                  activeCategory === cat
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/40">No products in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  showFullDetails
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
