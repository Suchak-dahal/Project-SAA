import React from "react";

interface PropItem {
  icon: React.ReactNode;
  title: string;
  desc?: string;
}

interface ValuePropBannerProps {
  items: PropItem[];
}

export function ValuePropBanner({ items }: ValuePropBannerProps) {
  return (
    <section className="border-t border-b border-[#C5A059]/20 bg-[#F4EFE6]/40 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs space-y-3"
            >
              {/* Icon Container */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A059]/10 text-[#C5A059]">
                {item.icon}
              </div>
              
              {/* Title & Description */}
              <h3 className="font-serif text-sm font-semibold tracking-wide text-[#3B2F2F] uppercase">
                {item.title}
              </h3>
              {item.desc && (
                <p className="text-xs text-[#3B2F2F]/70 leading-relaxed font-sans">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
