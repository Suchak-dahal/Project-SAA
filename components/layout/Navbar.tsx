"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Heart, Leaf } from "lucide-react";
import { useApp } from "@/components/context/AppContext";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cart, wishlist, setCartOpen } = useApp();

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const navLinks = [
    { name: "Clothing", href: "/clothing" },
    { name: "Jewelry", href: "/jewelry" },
    { name: "Cosmetics", href: "/cosmetics" },
    { name: "Our Story", href: "/about" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#C5A059]/10 bg-[#FBF9F5]/90 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Left: Mobile Hamburger / Desktop Navigation Links */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#3B2F2F] hover:text-[#C5A059] transition-colors md:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              {/* Desktop menu */}
              <nav className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-sans text-xs uppercase tracking-widest transition-colors duration-300 ${
                      isActive(link.href)
                        ? "text-[#C5A059] font-semibold border-b border-[#C5A059] pb-1"
                        : "text-[#3B2F2F]/80 hover:text-[#C5A059]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Center: Brand Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 md:gap-2">
              <Link href="/" className="flex items-center gap-1.5 md:gap-2 group">
                <Leaf className="h-4 w-4 md:h-5 md:w-5 text-[#C5A059] rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                <span className="font-serif text-lg md:text-xl font-medium tracking-widest text-[#3B2F2F] uppercase whitespace-nowrap">
                  SAA Collection
                </span>
              </Link>
            </div>

            {/* Right: Actions (Wishlist & Shopping Bag) */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Wishlist Link/Icon */}
              <Link
                href="/about" // Or we can redirect to a section or page. Since about is a page, we can link to it or just make it interactive.
                className="relative p-2 text-[#3B2F2F] hover:text-[#C5A059] transition-colors group"
                aria-label="Wishlist"
              >
                <Heart className={`h-5 w-5 ${wishlistCount > 0 ? "fill-[#C5A059] text-[#C5A059]" : ""}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#C5A059] text-[9px] font-semibold text-white animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Shopping Bag Button */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-[#3B2F2F] hover:text-[#C5A059] transition-colors group cursor-pointer"
                aria-label="Open Shopping Bag"
              >
                <ShoppingBag className="h-5 w-5 group-hover:scale-105 transition-transform" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#C5A059] text-[9px] font-semibold text-white">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[#C5A059]/5 bg-[#FBF9F5] ${
            isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-6 py-4 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-sans text-xs uppercase tracking-widest ${
                  isActive(link.href)
                    ? "text-[#C5A059] font-semibold"
                    : "text-[#3B2F2F]/80 hover:text-[#C5A059]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
