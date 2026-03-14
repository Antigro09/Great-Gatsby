import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { navigation } from "@/lib/site-data";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Great Gatsby | Literary Analysis",
  description:
    "An interactive literary analysis website exploring characters, symbols, themes, scenes, and quotes from The Great Gatsby.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable} antialiased`}>
        <div className="site-bg fixed inset-0 -z-10" />
        <div className="site-noise fixed inset-0 -z-10 opacity-25" />

        <header className="sticky top-0 z-50 border-b border-amber-100/10 bg-[#08131a]/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
            <Link href="/" className="text-xl font-semibold tracking-wide text-amber-100">
              The Great Gatsby
            </Link>
            <nav className="flex flex-wrap justify-end gap-x-4 gap-y-1 text-sm text-stone-300 sm:text-[0.92rem]">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-amber-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
      <footer>
        <div className="mx-auto max-w-6xl px-5 py-10 text-center text-sm text-stone-400 sm:px-8 lg:px-10">
          <p>
            The Great Gatsby Literary Analysis.
          </p>
          <p className="mt-2">
            Created by{" "}
            <span className="font-semibold text-amber-200">Anthony Cavero, Siddharth Sajith, and Ryan Karim</span>
          </p>
        </div>
      </footer>
    </html>
  );
}
