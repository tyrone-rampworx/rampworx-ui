import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { CartProvider } from '../contexts/CartContext'; // Adjust the path if necessary
import CartSummary from "../components/CartSummary"; // Make sure CartSummary is correctly imported
import "react-datepicker/dist/react-datepicker.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rampworx Skatepark Liverpool",
  description: "A COMMUNITY OF YOUNG PEOPLE USING EXTREME SPORTS TO DEVELOP THEIR PHYSICAL AND MENTAL WELL BEING",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap the entire app with CartProvider */}
        <CartProvider>
          <nav className="bg-[#fe0600] p-1 fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center py-0.5">
              <Link href="/">
                <Image src="/images/logo.jpg" alt="Logo" width={100} height={35} />
              </Link>
              <ul className="flex space-x-4">
                {[  
                  { href: "/register", label: "REGISTER" },
                  { href: "/book-a-session", label: "BOOK A SESSION" },
                  { href: "/coaching", label: "COACHING" },
                  { href: "/times-prices", label: "TIMES & PRICES" },
                  { href: "/first-time", label: "FIRST TIME" },
                  { href: "/parties", label: "PARTIES" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/charity", label: "CHARITY" },
                  { href: "/events", label: "EVENTS" },
                  { href: "/find-us", label: "FIND US" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white font-bold hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-3">
                <Link href="https://www.facebook.com/rampworxskatepark" target="_blank">
                  <Image src="/images/facebook-white.png" alt="Facebook" width={24} height={24} />
                </Link>
                <Link href="https://www.youtube.com/@rampworx" target="_blank">
                  <Image src="/images/youtube-white.png" alt="YouTube" width={24} height={24} />
                </Link>
                <Link href="https://www.instagram.com/rampworx/" target="_blank">
                  <Image src="/images/instagram-white.png" alt="Instagram" width={24} height={24} />
                </Link>
                <Link href="https://www.tripadvisor.co.uk/Attraction_Review-g186337-d10239063-Reviews-Rampworx_Skatepark-Liverpool_Merseyside_England.html" target="_blank">
                  <Image src="/images/trip-advisor-white.png" alt="TripAdvisor" width={24} height={24} />
                </Link>
              </div>
            </div>
          </nav>
          <main className="w-screen overflow-x-hidden pt-14">{children}</main>
          {/* CartSummary will be visible on all pages */}
          <CartSummary />
          
          {/* Footer Section */}
          <footer className="bg-gray-900 text-white text-center p-4 mt-6">
            <div className="container mx-auto">
              <p>&copy; {new Date().getFullYear()} Rampworx Skatepark Liverpool. All rights reserved.</p>
              <div className="flex justify-center space-x-4 mt-2">
                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
