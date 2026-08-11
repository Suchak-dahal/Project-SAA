import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium tracking-widest transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:ring-offset-2 text-xs uppercase cursor-pointer";

  const variants = {
    primary:
      "bg-[#C5A059] text-white hover:bg-[#B59049] border border-[#C5A059] px-8 py-3.5 shadow-sm transform hover:-translate-y-[1px] active:translate-y-0",
    secondary:
      "bg-transparent text-[#C5A059] border border-[#C5A059] hover:bg-[#C5A059] hover:text-white px-8 py-3.5 transform hover:-translate-y-[1px] active:translate-y-0",
    link:
      "bg-transparent text-[#3B2F2F] hover:text-[#C5A059] px-0 py-1 border-b border-transparent hover:border-[#C5A059] transition-colors duration-200 tracking-normal normal-case font-normal",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
