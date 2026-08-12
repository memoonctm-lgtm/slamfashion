"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ShopCatalogCard } from "@/components/ShopCatalogCard";
import { PillarIconCard } from "@/components/PillarIconCard";
import { useStore } from "@/context/StoreContext";

export default function HomePage() {
  const { settings, featuredProducts } = useStore();
  const { brandCopy, pillars } = settings;

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-104px)] flex items-center border-b border-template overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="label-caps text-gold mb-6">S.L.A.M. Activewear</p>
            <h1 className="heading-xl text-4xl sm:text-5xl lg:text-7xl text-white">
              {brandCopy.heroHeadline}
            </h1>
            <p className="mt-8 text-lg text-muted leading-relaxed max-w-xl">
              {brandCopy.heroSubheadline}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-gold text-xs rounded-sm"
              >
                {brandCopy.heroCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/collections"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-template text-white text-xs font-bold tracking-[0.15em] uppercase rounded-sm hover:border-gold/40 transition-colors"
              >
                View Collections
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars preview */}
      <section className="py-20 lg:py-28 border-b border-template bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <div>
              <h2 className="heading-section text-xl sm:text-2xl text-white">
                The S.L.A.M. Way
              </h2>
              <p className="mt-3 text-muted max-w-lg">
                {brandCopy.essenceText}
              </p>
            </div>
            <Link
              href="/about"
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold hover:underline"
            >
              Learn More →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((pillar, i) => (
              <PillarIconCard key={pillar.id} pillar={pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-20 lg:py-28 border-b border-template">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-end gap-4 mb-12">
            <h2 className="heading-section text-xl sm:text-2xl text-white">
              Featured Apparel
            </h2>
            <Link
              href="/shop"
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold"
            >
              Shop All →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {featuredProducts.slice(0, 6).map((product, i) => (
              <ShopCatalogCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gold banner */}
      <section className="bg-gold">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm font-black tracking-[0.08em] uppercase text-black">
            {brandCopy.midBannerLeft}
          </p>
          <p className="text-sm font-black tracking-[0.2em] uppercase text-black">
            {brandCopy.midBannerRight}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
