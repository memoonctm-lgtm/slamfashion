"use client";

import {
  Shield,
  Dumbbell,
  Mountain,
  Crown,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import type { BrandPillar } from "@/types";

const iconMap: Record<BrandPillar["icon"], LucideIcon> = {
  shield: Shield,
  dumbbell: Dumbbell,
  lion: Crown,
  mountain: Mountain,
  crown: Crown,
};

interface PillarCardProps {
  pillar: BrandPillar;
  index: number;
}

export function PillarCard({ pillar, index }: PillarCardProps) {
  const Icon = iconMap[pillar.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative p-6 lg:p-8 bg-surface rounded-xl border border-white/5 hover:border-gold/30 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
        <Icon className="w-6 h-6 text-gold" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
        {pillar.title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed">
        {pillar.description}
      </p>
    </motion.div>
  );
}
