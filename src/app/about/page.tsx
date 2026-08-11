"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scissors, Layers, Stamp, Cross, Target, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
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

const values = [
  {
    icon: Cross,
    title: "Faith First",
    text: "Everything we create starts with a foundation of faith and purpose.",
  },
  {
    icon: Target,
    title: "Disciplined Design",
    text: "Every detail is intentional — from fabric selection to final stitch.",
  },
  {
    icon: Users,
    title: "Community Built",
    text: "More than a brand — a brotherhood of men who lead with integrity.",
  },
];

export default function AboutPage() {
  const { settings } = useStore();
  const { brandCopy } = settings;

  return (
    <>
      <div className="pt-[104px] lg:pt-[112px]">
        <PageHero
          eyebrow="About S.L.A.M."
          title={brandCopy.aboutTitle}
          description="Strength. Humility. Discipline. Purpose."
          image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80"
        />
      </div>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
                  alt="S.L.A.M. apparel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold/20 rounded-sm -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold/10 rounded-sm -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <SectionHeader
                eyebrow="Our Story"
                title="Born From Conviction"
                align="left"
                className="max-w-none mb-0"
              />
              <p className="text-white/55 leading-relaxed text-lg">
                {brandCopy.aboutStory}
              </p>
              <p className="text-white/55 leading-relaxed">
                {brandCopy.aboutMission}
              </p>
              <div className="p-6 bg-surface border border-gold/20 rounded-sm border-l-2 border-l-gold">
                <p className="text-gold font-black tracking-wider uppercase text-sm">
                  Built for Men of Faith
                </p>
                <p className="text-white/45 text-sm mt-2 leading-relaxed">
                  S.L.A.M. is more than clothing — it&apos;s a declaration of
                  identity for men who choose humility over ego, discipline over
                  distraction, and purpose over pleasure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-14 h-14 mx-auto rounded-sm gold-gradient flex items-center justify-center mb-5">
                  <v.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-lg font-black text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Craftsmanship"
            title="Quality You Can Feel"
            description="Every piece is crafted with the same attention to detail you'd expect from luxury streetwear."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualityFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-surface-light border border-white/5 hover:border-gold/25 rounded-sm transition-all duration-500 card-shine"
              >
                <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-black text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              <span className="gold-text">Submit</span> to Purpose.{" "}
              <span className="gold-text">Live</span> with Power.
            </h2>
            <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
              Every stitch, every patch, every detail — crafted for men who
              understand that true strength begins with submission.
            </p>
            <div className="mt-10">
              <Button href="/shop" size="lg">
                Explore Collection
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
