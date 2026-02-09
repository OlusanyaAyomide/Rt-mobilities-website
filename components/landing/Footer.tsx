"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Twitter, Instagram, Linkedin, Facebook, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-primary-deep pt-20 pb-10 border-t border-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo />
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Pioneering asset-backed wealth creation through transparent RT Connect management across Africa.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/inventory" className="hover:text-primary transition-colors">Inventory</Link></li>
              <li><Link href="/calculator" className="hover:text-primary transition-colors">Calculator</Link></li>
              <li><Link href="/faqs" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Legal</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/compliance" className="hover:text-primary transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} RT Mobility. All rights reserved. Securing growth through assets.</p>

          <div className="flex items-center gap-2 font-medium text-primary-deep bg-blue-50/50 px-3 py-1.5 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="tracking-wide uppercase text-xs font-bold">REGULATED ASSET MANAGEMENT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
