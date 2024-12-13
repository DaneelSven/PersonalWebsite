"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

const NavLink = ({ href, children, external = false }: NavLinkProps) => {
  const baseClasses =
    "px-4 py-2 bg-gray-900/50 rounded-lg border border-orangeAccent/20 hover:border-orangeAccent/50 transition-colors backdrop-blur-sm text-orangeAccent w-full md:w-auto text-center";

  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClasses}
    >
      {children}
    </a>
  ) : (
    <Link href={href} className={baseClasses}>
      {children}
    </Link>
  );
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-[999] px-4 md:px-6 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Image src="/logo.png" alt="Logo" width={150} height={100} />
          <div className="md:hidden relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-orangeAccent"
            >
              <Menu size={24} />
            </button>

            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2"
                style={{ zIndex: 9999 }}
              >
                <div className="bg-[#0a0a0a] p-3 rounded-lg shadow-xl w-[200px]">
                  <div className="flex flex-col gap-2">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="https://calendly.com/sven4696" external>
                      Book a Meeting
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="https://calendly.com/sven4696" external>
            Book a Meeting
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
