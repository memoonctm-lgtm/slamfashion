"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { useStore } from "@/context/StoreContext";

export default function ContactPage() {
  const { settings } = useStore();
  const { contact } = settings;

  const formatPhone = (p: string) => {
    if (p.length === 10) {
      return `(${p.slice(0, 3)}) ${p.slice(3, 6)}-${p.slice(6)}`;
    }
    return p;
  };

  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-b from-surface to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Contact
            </p>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Get In Touch
            </h1>
            <p className="mt-4 text-white/50 max-w-xl">
              Have a custom order, bulk inquiry, or question? Reach out — we&apos;d
              love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-start gap-4 p-4 bg-surface rounded-xl border border-white/5 hover:border-gold/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-white/40">
                        Email
                      </p>
                      <p className="text-white mt-0.5">{contact.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-start gap-4 p-4 bg-surface rounded-xl border border-white/5 hover:border-gold/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-white/40">
                        Phone
                      </p>
                      <p className="text-white mt-0.5">
                        {formatPhone(contact.phone)}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-surface rounded-xl border border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-white/40">
                        Orders
                      </p>
                      <p className="text-white/60 text-sm mt-0.5">
                        Custom orders and inquiries welcome. Add items to your
                        cart and reach out to complete your purchase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3 p-8 bg-surface rounded-2xl border border-white/5"
            >
              <h2 className="text-xl font-bold text-white mb-6">
                Send a Message
              </h2>
              <ContactForm email={contact.email} phone={contact.phone} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
