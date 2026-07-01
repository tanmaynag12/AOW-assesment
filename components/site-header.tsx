"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="w-[58%] max-w-5xl mx-auto bg-[#335f92] text-white rounded-b-[28px]">
        <div className="flex items-center justify-center px-8 py-2">
          {/* Logo */}
          <Link href="/" className="md:hidden py-2">
            <Image
              src="/images/logo.svg"
              alt="SkillKwiz Logo"
              width={320}
              height={110}
              className="h-[72px] w-auto object-contain"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center mx-auto px-6">
            <Link href="/" className="flex items-center py-2">
              <Image
                src="/images/logo.svg"
                alt="SkillKwiz Logo"
                width={380}
                height={130}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-6 ml-6">
              <Link
                href="/"
                className={`relative group py-3 px-2 text-sm md:px-1 transition-all ${
                  pathname === "/"
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                }`}
              >
                <span>Home</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="/about"
                className={`relative group py-3 px-2 text-sm md:px-1 transition-all ${
                  pathname === "/about"
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                }`}
              >
                <span>About Us</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="/services"
                className={`relative group py-3 px-2 text-sm md:px-1 transition-all ${
                  pathname === "/services"
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                }`}
              >
                <span>Services</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="/blog"
                className={`relative group py-3 px-2 text-sm md:px-1 transition-all ${
                  pathname === "/blog"
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                }`}
              >
                <span>Blog</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center py-4 bg-[#335f92] rounded-b-[28px] absolute top-0 left-0 w-full pt-16 shadow-lg transition-all duration-300 ease-in-out">
            <Link
              href="/"
              className="text-white relative group py-4 text-lg w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Home</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="/about"
              className="text-white relative group py-3 text-lg w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>About Us</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="/services"
              className="text-white relative group py-3 text-lg w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Services</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="/blog"
              className="text-white relative group py-3 text-lg w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Blog</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
