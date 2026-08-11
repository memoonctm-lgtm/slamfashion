"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/#pillars", label: "Pillars" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <>
      <header
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "glass border-b border-white/5"
            : "bg-black/40 backdrop-blur-sm border-b border-white/5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
            )}
          >
            <Link href="/" className="shrink-0 relative z-10">
              <Logo size="sm" />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors",
                    isActive(link.href)
                      ? "text-gold"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-px gold-gradient"
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1 sm:gap-2">
              <Link
                href="/shop"
                className="hidden sm:flex p-2.5 text-white/60 hover:text-gold transition-colors"
                aria-label="Search shop"
              >
                <Search className="w-4 h-4" />
              </Link>

              <button
                onClick={openCart}
                className="relative p-2.5 text-white/80 hover:text-gold transition-colors"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 gold-gradient text-black text-[9px] font-black rounded-full flex items-center justify-center"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 text-white"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
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
              className="lg:hidden glass border-t border-white/5 overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-6 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-4 py-3.5 text-sm font-bold tracking-wider uppercase rounded-sm transition-colors",
                        isActive(link.href)
                          ? "text-gold bg-gold/10 border-l-2 border-gold"
                          : "text-white/70 hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
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
