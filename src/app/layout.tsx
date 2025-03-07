import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../contexts/CartContext";
import NavBar from "../components/NavBar"; // New separate component for the navigation
import CartSummary from "../components/CartSummary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata must be inside layout.tsx without "use client"
export const metadata: Metadata = {
  title: "Rampworx Skatepark Liverpool",
  description: "A COMMUNITY OF YOUNG PEOPLE USING EXTREME SPORTS TO DEVELOP THEIR PHYSICAL AND MENTAL WELL-BEING",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <NavBar /> {/* Moved the Navbar to its own component */}
          <main className="w-screen overflow-x-hidden pt-16">{children}</main>
          <CartSummary />
          <footer className="bg-gray-900 text-white text-center p-4 mt-6">
            <div className="container mx-auto">
              <p>&copy; {new Date().getFullYear()} Rampworx Skatepark Liverpool. All rights reserved.</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
                <a href="/contact" className="hover:underline">Contact</a>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
