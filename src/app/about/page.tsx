"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scissors, Layers, Stamp } from "lucide-react";
import { useStore } from "@/context/StoreContext";

const qualityFeatures = [
  {
    icon: Scissors,
    title: "Premium Embroidery",
    description:
      "Every S.L.A.M. logo is meticulously embroidered with premium thread for a raised, textured finish that withstands countless washes.",
  },
  {
    icon: Layers,
    title: "Woven Patch Detail",
    description:
      "Select pieces feature custom woven patches with intricate gold threading — a hallmark of luxury streetwear craftsmanship.",
  },
  {
    icon: Stamp,
    title: "Rubber Patch Accents",
    description:
      "Bold rubber patch detailing on hoodies and accessories delivers a tactile, premium feel that sets S.L.A.M. apart.",
  },
];

export default function AboutPage() {
  const { settings } = useStore();
  const { brandCopy } = settings;

  return (
    <>
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
              About S.L.A.M.
            </p>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {brandCopy.aboutTitle}
            </h1>
            <p className="mt-2 text-lg text-white/40 font-medium tracking-wide">
              Strength. Humility. Discipline. Purpose.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
                alt="S.L.A.M. apparel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Our Story
              </h2>
              <p className="text-white/60 leading-relaxed">
                {brandCopy.aboutStory}
              </p>
              <p className="text-white/60 leading-relaxed">
                {brandCopy.aboutMission}
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-gold font-bold tracking-wider uppercase text-sm">
                  Built for Men of Faith
                </p>
                <p className="text-white/40 text-sm mt-2">
                  S.L.A.M. is more than clothing — it&apos;s a declaration of
                  identity for men who choose humility over ego, discipline over
                  distraction, and purpose over pleasure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Craftsmanship
            </p>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Quality You Can Feel
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-surface-light rounded-xl border border-white/5"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              <span className="text-gold">Submit</span> to Purpose.{" "}
              <span className="text-gold">Live</span> with Power.
            </h2>
            <p className="mt-4 text-white/50">
              Every stitch, every patch, every detail — crafted for men who
              understand that true strength begins with submission.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
