import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/components/context/AppContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAA Collection | Premium Nepali Luxury Brand",
  description: "A premium luxury brand from Nepal, blending soft feminine aesthetics with modern Nepalese heritage in clothing, jewelry, and cosmetics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-espresso">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
