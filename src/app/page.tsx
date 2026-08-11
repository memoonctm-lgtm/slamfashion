"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { PillarCard } from "@/components/PillarCard";
import { ProductCard } from "@/components/ProductCard";
import { useStore } from "@/context/StoreContext";

export default function HomePage() {
  const { settings, featuredProducts } = useStore();
  const { brandCopy, pillars } = settings;

  return (
    <>
      <Hero
        headline={brandCopy.heroHeadline}
        subheadline={brandCopy.heroSubheadline}
        cta={brandCopy.heroCta}
      />

      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {brandCopy.essenceTitle}
            </h2>
            <p className="mt-4 text-white/50 leading-relaxed">
              {brandCopy.essenceText}
            </p>
          </motion.div>
        </div>
      </section>

      <section id="pillars" className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Our Pillars
            </p>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              The S.L.A.M. Way
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.id} pillar={pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Collection
              </p>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Featured Apparel
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-gold hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-surface to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ready to <span className="text-gold">Submit</span>?
            </h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto">
              Join the movement. Wear the message. Lead with faith, live with
              power.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gold text-black text-sm font-bold tracking-wider uppercase rounded-lg hover:bg-gold/90 transition-colors"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
