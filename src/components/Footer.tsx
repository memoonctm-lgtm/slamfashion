import Link from "next/link";
import { Mail, Phone, Share2, MapPin } from "lucide-react";
import { Logo } from "./Logo";

interface FooterProps {
  statement: string;
  email: string;
  phone: string;
}

export function Footer({ statement, email, phone }: FooterProps) {
  const formatPhone = (p: string) => {
    if (p.length === 10) {
      return `(${p.slice(0, 3)}) ${p.slice(3, 6)}-${p.slice(6)}`;
    }
    return p;
  };

  return (
    <footer className="relative bg-surface border-t border-white/5 mt-auto overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo size="md" />
            <p className="mt-6 text-sm text-white/45 leading-relaxed max-w-sm">
              {statement}
            </p>
            <div className="flex gap-3 mt-8">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm text-white/40 hover:border-gold/40 hover:text-gold transition-all"
                aria-label="Instagram"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold mb-5">
              Navigate
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/shop", label: "Shop Collection" },
                { href: "/#pillars", label: "Our Pillars" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-gold transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold mb-5">
              Shop
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                "T-Shirts",
                "Sweatshirts",
                "Headwear",
                "Slides & Accessories",
              ].map((cat) => (
                <Link
                  key={cat}
                  href="/shop"
                  className="text-sm text-white/50 hover:text-gold transition-colors w-fit"
                >
                  {cat}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold mb-5">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-gold transition-colors group"
              >
                <span className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-sm group-hover:border-gold/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                {email}
              </a>
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-gold transition-colors group"
              >
                <span className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-sm group-hover:border-gold/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                {formatPhone(phone)}
              </a>
              <div className="flex items-center gap-3 text-sm text-white/40">
                <span className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-sm">
                  <MapPin className="w-4 h-4" />
                </span>
                Custom orders welcome
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/25 tracking-wider">
            &copy; {new Date().getFullYear()} S.L.A.M. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[11px] text-white/25 tracking-[0.2em] uppercase">
              Submit Like A Man
            </p>
            <div className="flex gap-2">
              {["Premium", "Faith", "Power"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[9px] font-bold tracking-wider uppercase text-white/30 border border-white/10 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
