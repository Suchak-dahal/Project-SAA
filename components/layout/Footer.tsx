"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Leaf, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      setMessage("Please enter an email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you! You have successfully subscribed to SAA Collection updates.");
      setEmail("");
    }, 1000);
  };

  return (
    <footer className="bg-[#F4EFE6] border-t border-[#C5A059]/10 pt-16 pb-8 text-[#3B2F2F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          {/* Logo and About Brand */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-[#C5A059] rotate-45" />
              <span className="font-serif text-base font-semibold tracking-widest uppercase">
                SAA Collection
              </span>
            </Link>
            <p className="text-xs text-[#3B2F2F]/75 leading-relaxed max-w-xs font-sans">
              Experience the harmony of soft feminine luxury and traditional Nepalese craft. Sustainably created and meticulously curated.
            </p>
          </div>

          {/* Quick links: Collections */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-[#C5A059] font-semibold mb-4">
              Collections
            </h3>
            <ul className="space-y-2.5 text-xs text-[#3B2F2F]/80 font-sans">
              <li>
                <Link href="/clothing" className="hover:text-[#C5A059] transition-colors">
                  Clothing Collection
                </Link>
              </li>
              <li>
                <Link href="/jewelry" className="hover:text-[#C5A059] transition-colors">
                  Jewelry Collection
                </Link>
              </li>
              <li>
                <Link href="/cosmetics" className="hover:text-[#C5A059] transition-colors">
                  Clean Cosmetics
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links: About & Support */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-[#C5A059] font-semibold mb-4">
              Information
            </h3>
            <ul className="space-y-2.5 text-xs text-[#3B2F2F]/80 font-sans">
              <li>
                <Link href="/about" className="hover:text-[#C5A059] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <span className="text-[#3B2F2F]/40 cursor-not-allowed">Sustainability</span>
              </li>
              <li>
                <span className="text-[#3B2F2F]/40 cursor-not-allowed">Care Guides</span>
              </li>
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-widest text-[#C5A059] font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-xs text-[#3B2F2F]/70 leading-relaxed font-sans">
              Subscribe to receive exclusive access to new collections and brand updates.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex items-center border-b border-[#3B2F2F]/20 py-2 max-w-sm"
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="w-full bg-transparent text-xs font-sans text-[#3B2F2F] placeholder-[#3B2F2F]/40 focus:outline-none py-1"
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="p-1 text-[#3B2F2F] hover:text-[#C5A059] transition-colors disabled:opacity-40"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {message && (
              <p
                className={`text-[10px] mt-2 font-sans ${
                  status === "error" ? "text-red-500" : "text-[#C5A059]"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-[#C5A059]/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#3B2F2F]/60 font-sans uppercase tracking-widest">
          <p>&copy; {currentYear} SAA Collection. All Rights Reserved.</p>
          <p>Handcrafted with Love in Nepal</p>
        </div>
      </div>
    </footer>
  );
}
