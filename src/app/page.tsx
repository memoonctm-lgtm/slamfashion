"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Truck, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { StatsBar } from "@/components/StatsBar";
import { SectionHeader } from "@/components/SectionHeader";
import { PillarCard } from "@/components/PillarCard";
import { ProductCard } from "@/components/ProductCard";
import { Testimonials, LookbookStrip } from "@/components/Testimonials";
import { Button } from "@/components/Button";
import { useStore } from "@/context/StoreContext";

const trustBadges = [
  { icon: Award, label: "Premium Materials" },
  { icon: ShieldCheck, label: "Quality Guaranteed" },
  { icon: Truck, label: "Custom Orders" },
];

export default function HomePage() {
  const { settings, featuredProducts } = useStore();
  const { brandCopy, pillars } = settings;

  return (
    <>
      <div className="pt-[104px] lg:pt-[112px]">
        <Hero
          headline={brandCopy.heroHeadline}
          subheadline={brandCopy.heroSubheadline}
          cta={brandCopy.heroCta}
        />
      </div>

      <Marquee />
      <StatsBar />

      <section id="essence" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80"
                alt="S.L.A.M. brand essence"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="gold-text text-2xl font-black tracking-tight">
                  S.L.A.M.
                </p>
                <p className="text-white/50 text-sm mt-1 tracking-wider uppercase">
                  Submit Like A Man
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeader
                eyebrow="Brand Essence"
                title={brandCopy.essenceTitle}
                description={brandCopy.essenceText}
                align="left"
                className="max-w-none"
              />

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-3 p-4 bg-surface border border-white/5 rounded-sm"
                  >
                    <badge.icon className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-white/50">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="pillars" className="py-24 lg:py-32 bg-surface relative">
        <div className="absolute inset-0 mesh-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Pillars"
            title="The S.L.A.M. Way"
            description="Five principles that define everything we create and everything we stand for."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.id} pillar={pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      <LookbookStrip />

      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
            <SectionHeader
              eyebrow="Collection"
              title="Featured Apparel"
              description="Hand-selected pieces that embody strength, faith, and premium street luxury."
              align="left"
              className="max-w-xl mb-0"
            />
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-gold hover:gap-3 transition-all shrink-0"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {featuredProducts.slice(0, 8).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase mb-6">
              Join the Movement
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to <span className="gold-text">Submit</span>?
            </h2>
            <p className="mt-6 text-white/50 max-w-lg mx-auto text-lg leading-relaxed">
              Wear the message. Lead with faith. Live with power. Your wardrobe
              should reflect your purpose.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/shop" size="lg">
                Shop Collection
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Custom Order
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
