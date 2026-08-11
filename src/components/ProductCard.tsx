"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Check } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
  showFullDetails?: boolean;
}

export function ProductCard({
  product,
  index = 0,
  showFullDetails = false,
}: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor.name,
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-gold/20 transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-surface-light">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-black/70 backdrop-blur-sm text-[10px] font-bold tracking-wider uppercase text-gold rounded">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold text-white tracking-wide">
          {product.title}
        </h3>
        {showFullDetails && (
          <p className="text-xs text-white/40 mt-1 line-clamp-2">
            {product.description}
          </p>
        )}
        <p className="text-gold text-lg font-bold mt-2">
          ${product.price.toFixed(2)}
        </p>

        {showFullDetails && (
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-[10px] font-semibold tracking-wider uppercase text-white/40 mb-2">
                Size
              </p>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded border transition-colors ${
                      selectedSize === size
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-white/10 text-white/60 hover:border-white/30"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-wider uppercase text-white/40 mb-2">
                Color
              </p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      selectedColor.name === color.name
                        ? "border-gold scale-110"
                        : "border-white/20"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleAddToCart}
          className={`mt-4 w-full py-3 flex items-center justify-center gap-2 text-sm font-bold tracking-wider uppercase rounded-lg transition-all ${
            added
              ? "bg-green-600 text-white"
              : "bg-gold text-black hover:bg-gold/90"
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
