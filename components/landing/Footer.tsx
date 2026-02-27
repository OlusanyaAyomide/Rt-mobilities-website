"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Twitter, Instagram, Linkedin, Facebook, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-primary-deep pt-16 pb-8 border-t border-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground leading-relaxed max-w-xs text-sm">
              Pioneering asset-backed wealth creation through transparent RT Connect management across Africa.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground pt-1">
              <Link href="#" className="hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></Link>
            </div>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms And Conditions</Link></li>
              <li><Link href="/help" className="hover:text-primary transition-colors">Help Desk</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/rt-connect" className="hover:text-primary transition-colors">RT Connect</Link></li>
              <li><Link href="/#faq" className="hover:text-primary transition-colors">FAQs</Link></li>
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

        {/* Disclaimer & Info Text Block */}
        <div className="pt-8 border-t border-primary/5 pb-8 space-y-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            RT Mobility is a proprietary product of Riverscope Technologies Ltd. All participation via RT Connect is powered by the Coffer Multi-purpose Cooperative Society, providing a secure framework through our adjoining cooperative affiliation. All fleet operations and technical management are oversighted by Riverscope Engineering.{" "}
            <span className="inline-flex items-center gap-1.5 font-medium text-primary-deep bg-blue-50/50 px-2 py-0.5 rounded-full ml-1 align-middle">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              <span className="tracking-wide uppercase text-[10px] font-bold">REGULATED ASSET MANAGEMENT</span>
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs text-muted-foreground">
            <span className="flex items-start gap-1.5">
              <span>📍</span>
              <span>9A, Akinbi Close, Off Olusegun Coker Street, Ijaiye, Ojokoro, Lagos State, Nigeria</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span>✉️</span>
              <a href="mailto:investor-rtconnect@riverscope.global" className="hover:text-primary transition-colors">investor-rtconnect@riverscope.global</a>
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} RT Mobility. All rights reserved. Securing growth through assets.</p>
        </div>
      </div>
    </footer>
  );
}
