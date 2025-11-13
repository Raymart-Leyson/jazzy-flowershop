import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* Your other custom styles can follow */


const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'cinzel-decorative': ['"Cinzel Decorative"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
};

export const metadata: Metadata = {
  title: "Jazzy Flower Shop",
  description: "A beautiful flower shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
