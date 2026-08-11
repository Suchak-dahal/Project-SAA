"use client";

import React from "react";
import Image from "next/image";
import { Leaf, Award } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/ui/CartDrawer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartDrawer />

      <main className="flex-grow bg-[#FBF9F5]">
        {/* Breadcrumb Path */}
        <div className="text-center py-6 border-b border-[#C5A059]/10">
          <span className="text-[10px] uppercase tracking-widest text-[#3B2F2F]/60 font-sans">
            About / Brand Story
          </span>
        </div>

        {/* Brand Story Hero Image */}
        <section className="relative w-full aspect-[16/10] sm:aspect-[21/9] lg:h-[450px] overflow-hidden bg-[#F4EFE6]">
          <Image
            src="/images/about_hero.png"
            alt="SAA Collection Heritage Balcony Campaign"
            fill
            priority
            className="object-cover object-center scale-102 hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-24 max-w-3xl mx-auto px-4 text-center">
          {/* Top Divider */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-[1px] w-8 bg-[#C5A059]/30"></div>
            <Leaf className="h-3.5 w-3.5 text-[#C5A059]/50 rotate-45" />
            <div className="h-[1px] w-8 bg-[#C5A059]/30"></div>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3B2F2F] font-medium leading-[1.15] mb-8 tracking-tight">
            Beauty. Roots. Confidence.
          </h2>

          <div className="space-y-6 text-sm md:text-base text-[#3B2F2F]/80 leading-relaxed font-sans font-light">
            <p>
              SAA Collection is born from the belief that elegance is deeply personal and proudly rooted.
            </p>
            <p>
              We celebrate the feminine form through fluid silhouettes, thoughtful details, and timeless pieces inspired by <span className="italic text-[#C5A059] font-medium">nature</span> and <span className="italic text-[#C5A059] font-medium">Nepal's rich heritage</span>.
            </p>
            <p>
              Our designs blend tradition with modernity—creating effortless style for the woman of today, graceful in every part of her journey.
            </p>
          </div>

          {/* Bottom Divider */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <div className="h-[1px] w-8 bg-[#C5A059]/30"></div>
            <Leaf className="h-3.5 w-3.5 text-[#C5A059]/50 rotate-[135deg]" />
            <div className="h-[1px] w-8 bg-[#C5A059]/30"></div>
          </div>
        </section>

        {/* Staggered Masonry Grid Section */}
        <section className="pb-24 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Top Left: Vase / Flower details */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4EFE6] border border-[#C5A059]/10 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1502810313894-7ba7897d4090?q=80&w=600"
                alt="Gypsophila in Ceramic Vase detail"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
            </div>

            {/* Top Right: Natural Inspiration card */}
            <div className="flex flex-col justify-center items-center text-center p-8 md:p-12 bg-[#F4EFE6] border border-[#C5A059]/10 shadow-sm min-h-[300px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A059]/10 text-[#C5A059] mb-6">
                <Leaf className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-[#3B2F2F] font-semibold mb-3">
                Natural Inspiration
              </h3>
              <p className="text-xs md:text-sm text-[#3B2F2F]/70 leading-relaxed font-sans max-w-sm">
                From soft linens to earthy tones, we draw beauty from the natural world around us.
              </p>
            </div>

            {/* Bottom Left: Modern Nepali Elegance card */}
            <div className="flex flex-col justify-center items-center text-center p-8 md:p-12 bg-[#F4EFE6] border border-[#C5A059]/10 shadow-sm min-h-[300px] order-last md:order-none">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A059]/10 text-[#C5A059] mb-6">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-[#3B2F2F] font-semibold mb-3">
                Modern Nepali Elegance
              </h3>
              <p className="text-xs md:text-sm text-[#3B2F2F]/70 leading-relaxed font-sans max-w-sm">
                Rooted in heritage, designed for now. Effortless pieces that move with you, wherever life takes you.
              </p>
            </div>

            {/* Bottom Right: Linen Embroidery details */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4EFE6] border border-[#C5A059]/10 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600"
                alt="Intricate linen flower hand embroidery detail"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
            </div>

          </div>

          {/* Slogan sign-off */}
          <div className="text-center mt-20 space-y-3">
            <div className="flex justify-center text-[#C5A059]">
              <svg
                className="h-6 w-6 rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
              </svg>
            </div>
            <p className="font-sans text-[11px] font-semibold tracking-widest text-[#3B2F2F]/65 uppercase">
              Designed in Nepal. Made with Soul.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
