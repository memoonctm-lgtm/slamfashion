"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ContactFormProps {
  email: string;
  phone: string;
}

export function ContactForm({ email, phone }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      form.subject || "S.L.A.M. Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Message Ready!</h3>
        <p className="text-white/50 text-sm">
          Your email client should open shortly. You can also reach us directly
          at {email} or {phone}.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-gold text-sm font-semibold tracking-wider uppercase hover:underline"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold tracking-wider uppercase text-white/40 mb-2">
            Name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-wider uppercase text-white/40 mb-2">
            Email
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold tracking-wider uppercase text-white/40 mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-wider uppercase text-white/40 mb-2">
            Subject
          </label>
          <input
            type="text"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
            placeholder="Custom order, inquiry..."
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold tracking-wider uppercase text-white/40 mb-2">
          Message
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
          placeholder="Tell us about your order or inquiry..."
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-black text-sm font-bold tracking-wider uppercase rounded-lg hover:bg-gold/90 transition-colors"
      >
        <Send className="w-4 h-4" />
        Send Inquiry
      </button>
    </form>
  );
}
