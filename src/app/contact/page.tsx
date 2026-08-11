"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/PageHero";
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

  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: formatPhone(contact.phone),
      href: `tel:${contact.phone}`,
    },
    {
      icon: MapPin,
      label: "Orders",
      value: "Custom orders & bulk inquiries welcome",
      href: undefined,
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24–48 hours",
      href: undefined,
    },
  ];

  return (
    <>
      <div className="pt-[104px] lg:pt-[112px]">
        <PageHero
          eyebrow="Contact"
          title="Get In Touch"
          description="Have a custom order, bulk inquiry, or question? We'd love to hear from you."
          image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
        />
      </div>

      <section className="pb-24 lg:pb-32 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-6"
            >
              <div>
                <p className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
                  Reach Us
                </p>
                <h2 className="text-2xl font-black text-white">
                  Contact Information
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {card.href ? (
                      <a
                        href={card.href}
                        className="flex items-start gap-4 p-5 bg-surface border border-white/5 hover:border-gold/25 rounded-sm transition-all duration-300 group card-shine"
                      >
                        <div className="w-11 h-11 rounded-sm gold-gradient flex items-center justify-center shrink-0">
                          <card.icon className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/35">
                            {card.label}
                          </p>
                          <p className="text-white mt-1 text-sm group-hover:text-gold transition-colors">
                            {card.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-5 bg-surface border border-white/5 rounded-sm">
                        <div className="w-11 h-11 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                          <card.icon className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/35">
                            {card.label}
                          </p>
                          <p className="text-white/55 mt-1 text-sm">
                            {card.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7"
            >
              <div className="p-8 sm:p-10 bg-surface border border-white/5 rounded-sm border-glow">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-white">
                      Send a Message
                    </h2>
                    <p className="text-white/40 text-sm mt-0.5">
                      We&apos;ll get back to you shortly
                    </p>
                  </div>
                </div>
                <ContactForm email={contact.email} phone={contact.phone} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
