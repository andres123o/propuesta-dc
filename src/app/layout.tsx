import type { Metadata } from "next";
import { Inter_Tight, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DC Influencer Marketing",
  description: "Creadores, data y estrategia para marcas en Latinoamérica.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${jost.variable} ${interTight.variable} scroll-smooth antialiased`}
    >
      {/* Header y footer van en el layout de cada grupo: la web de DC y la propuesta llevan los suyos. */}
      <body>{children}</body>
    </html>
  );
}
