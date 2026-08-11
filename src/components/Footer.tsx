import Link from "next/link";
import { Mail, Phone } from "lucide-react";
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
    <footer className="bg-surface border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Logo size="md" />
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-md">
              {statement}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-gold mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/shop", label: "Shop" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-gold mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {email}
              </a>
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {formatPhone(phone)}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} S.L.A.M. All rights reserved.
          </p>
          <p className="text-xs text-white/30 tracking-wider uppercase">
            Submit Like A Man
          </p>
        </div>
      </div>
    </footer>
  );
}
