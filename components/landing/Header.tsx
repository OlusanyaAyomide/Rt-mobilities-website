"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pages where the header should start transparent and become solid on scroll
  const transparentHeaderPaths = ["/"];
  const isTransparentPage = transparentHeaderPaths.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Live Inventory", href: "/inventory" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Determine effective style
  // If not on a transparent page, force "scrolled" style (solid background)
  const showSolidHeader = isScrolled || !isTransparentPage;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        showSolidHeader
          ? "bg-background/80 backdrop-blur-md shadow-sm py-1"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          {/* Logo could go here if requested, but user said use it on Hero */}
          <Logo />
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                showSolidHeader ? "text-foreground" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className={showSolidHeader ? "w-[200px]" : "w-[200px] bg-primary hover:bg-primary hover:brightness-105 text-white"} variant={showSolidHeader ? "default" : "secondary"}>Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={showSolidHeader ? "text-foreground" : "text-white"} /> : <Menu className={showSolidHeader ? "text-foreground" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden p-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full">Get Started</Button>
        </div>
      )}
    </header>
  );
}
