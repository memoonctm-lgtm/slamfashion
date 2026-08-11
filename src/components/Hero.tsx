"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  headline: string;
  subheadline: string;
  cta: string;
}

export function Hero({ headline, subheadline, cta }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-surface to-black" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, var(--color-gold, #D4AF37) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-gold, #D4AF37) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold, #D4AF37) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-xs sm:text-sm font-bold tracking-[0.4em] uppercase mb-6">
            S.L.A.M. — Submit Like A Man
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
            {headline.split(". ").map((part, i, arr) => (
              <span key={i}>
                {i === 0 ? (
                  <span className="text-gold">{part}</span>
                ) : (
                  part
                )}
                {i < arr.length - 1 ? ". " : ""}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black text-sm font-bold tracking-wider uppercase rounded-lg hover:bg-gold/90 transition-all hover:gap-3"
            >
              {cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
