"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // FIXED

  return (
    <nav className="bg-[#fe0600] p-2 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.jpg" alt="Rampworx Logo" width={120} height={40} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {[
            { href: "/register", label: "REGISTER" },
            { href: "/book-a-session", label: "BOOK A SESSION" },
            { href: "/coaching", label: "COACHING" },
            { href: "/times-prices", label: "TIMES & PRICES" },
            {
              href: "/first-time",
              label: "FIRST TIME",
              subLinks: [
                { href: "/first-time/important-info", label: "IMPORTANT INFO" },
                { href: "/first-time/skatepark-etiquette", label: "SKATEPARK ETIQUETTE" },
                { href: "/first-time/helmets-safety", label: "HELMETS & SAFETY" },
                { href: "/first-time/equipment-hire", label: "EQUIPMENT HIRE" },
                { href: "/first-time/week-pass", label: "WEEK PASS" },
                { href: "/first-time/terms-conditions", label: "TERMS & CONDITIONS" },
              ],
            },
            { href: "/parties", label: "PARTIES" },
            { href: "/faq", label: "FAQ" },
            { href: "/charity", label: "CHARITY" },
            { href: "/events", label: "EVENTS" },
            { href: "/find-us", label: "FIND US" },
          ].map((item) => (
            <li key={item.href} className="relative">
              {item.subLinks ? (
                <button
                  className="text-white font-bold hover:underline flex items-center gap-1"
                  onClick={() => setDropdownOpen(dropdownOpen === item.href ? null : item.href)}
                >
                  {item.label}
                  <ChevronDown size={18} />
                </button>
              ) : (
                <Link href={item.href} className="text-white font-bold hover:underline">
                  {item.label}
                </Link>
              )}

              {item.subLinks && dropdownOpen === item.href && (
                <ul className="absolute left-0 mt-2 bg-[#fe0600] shadow-lg rounded-md p-2 w-48">
                  {item.subLinks.map((sub) => (
                    <li key={sub.href} className="py-1">
                      <Link href={sub.href} className="text-white hover:underline block px-3">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fe0600] w-full absolute top-full left-0 flex flex-col items-center py-4 space-y-3">
          {[
            { href: "/register", label: "REGISTER" },
            { href: "/book-a-session", label: "BOOK A SESSION" },
            { href: "/coaching", label: "COACHING" },
            { href: "/times-prices", label: "TIMES & PRICES" },
            { href: "/parties", label: "PARTIES" },
            { href: "/faq", label: "FAQ" },
            { href: "/charity", label: "CHARITY" },
            { href: "/events", label: "EVENTS" },
            { href: "/find-us", label: "FIND US" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="text-white font-bold text-lg hover:underline">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
