"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Grid3X3, LayoutList } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { useStore } from "@/context/StoreContext";
import type { ProductCategory } from "@/types";
import { cn } from "@/lib/utils";

const categories: (ProductCategory | "All")[] = [
  "All",
  "T-Shirts",
  "Sweatshirts",
  "Headwear",
  "Slides & Accessories",
];

type SortOption = "featured" | "price-asc" | "price-desc" | "name";

export default function ShopPage() {
  const { getProductsByCategory } = useStore();
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory | "All">("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("featured");
  const [gridCols, setGridCols] = useState<"3" | "2">("3");

  const products = useMemo(() => {
    let result = getProductsByCategory(activeCategory);

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return [...result].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name":
          return a.title.localeCompare(b.title);
        case "featured":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });
  }, [getProductsByCategory, activeCategory, search, sort]);

  return (
    <>
      <div className="pt-[104px] lg:pt-[112px]">
        <PageHero
          eyebrow="Shop"
          title="The Collection"
          description="Premium faith-based athletic streetwear. Select your size and color, add to cart, and inquire to order."
          image="https://images.unsplash.com/photo-1441984904996-e0b6ad687bd5?w=1920&q=80"
        />
      </div>

      <section className="sticky top-[104px] lg:top-[112px] z-40 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-surface-light border border-white/10 rounded-sm text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-white/30" />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="px-3 py-2.5 bg-surface-light border border-white/10 rounded-sm text-xs font-bold tracking-wider uppercase text-white/70 focus:outline-none focus:border-gold/40"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                </select>
              </div>

              <div className="hidden sm:flex border border-white/10 rounded-sm overflow-hidden">
                <button
                  onClick={() => setGridCols("3")}
                  className={cn(
                    "p-2.5 transition-colors",
                    gridCols === "3"
                      ? "bg-gold/15 text-gold"
                      : "text-white/40 hover:text-white"
                  )}
                  aria-label="3 column grid"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridCols("2")}
                  className={cn(
                    "p-2.5 transition-colors",
                    gridCols === "2"
                      ? "bg-gold/15 text-gold"
                      : "text-white/40 hover:text-white"
                  )}
                  aria-label="2 column grid"
                >
                  <LayoutList className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 text-[10px] font-bold tracking-[0.15em] uppercase rounded-sm border whitespace-nowrap transition-all",
                  activeCategory === cat
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-white/10 text-white/50 hover:border-white/25 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-wider uppercase text-white/30 mb-8">
            {products.length} {products.length === 1 ? "Product" : "Products"}
          </p>

          <AnimatePresence mode="wait">
            {products.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <p className="text-white/40 text-lg">No products found.</p>
                <p className="text-white/25 text-sm mt-2">
                  Try adjusting your search or filters.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={`${activeCategory}-${sort}-${gridCols}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn(
                  "grid gap-5 lg:gap-6",
                  gridCols === "3"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2"
                )}
              >
                {products.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={i}
                    showFullDetails
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
