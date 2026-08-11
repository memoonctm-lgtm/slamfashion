"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/shop", label: "Shop" },
  { href: "/#pillars", label: "Pillars" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="shrink-0">
              <Logo size="sm" />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wider uppercase transition-colors hover:text-gold ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={openCart}
                className="relative p-2 text-white hover:text-gold transition-colors"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-surface border-t border-white/10 overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-4 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 text-sm font-semibold tracking-wider uppercase rounded-lg transition-colors ${
                      pathname === link.href
                        ? "text-gold bg-gold/10"
                        : "text-white/80 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CartDrawer />
    </>
  );
}
