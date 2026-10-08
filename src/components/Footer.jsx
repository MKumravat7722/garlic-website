import React from 'react';
import footerLogoImg from '../assets/footer_logo.png';
import { ChevronRight, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Quality', href: '#quality' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const productLinks = [
    { name: 'Fresh Garlic Bulbs', href: '#products' },
    { name: 'Export Grade Garlic', href: '#products' },
    { name: 'Peeled Garlic', href: '#products' },
    { name: 'Custom Packaging', href: '#products' },
  ];

  return (
    <footer className="bg-[#06261e] text-white pt-14 pb-8 relative overflow-hidden border-t border-[#0b4232]">
      
      {/* Subtle line art garlic watermark decoration */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
        <svg width="280" height="280" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <path d="M50 15 C45 25, 20 40, 20 65 C20 85, 35 95, 50 95 C65 95, 80 85, 80 65 C80 40, 55 25, 50 15 Z" strokeWidth="1.5" />
          <path d="M50 15 C40 30, 32 50, 35 80" strokeWidth="1" />
          <path d="M50 15 C60 30, 68 50, 65 80" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#0e4435] text-left">
          
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-block">
              <img
                src={footerLogoImg}
                alt="बाबा सोमनाथ ट्रेडर्स - Baba Somnath Traders"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-xs text-gray-300 leading-relaxed font-light max-w-sm">
              Your trusted partner for premium quality Indian garlic. We are committed to delivering the best produce to global markets with a focus on quality, reliability and long-term relationships.
            </p>

            {/* Social Media Links with inline SVG icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 flex items-center gap-1 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Our Products
            </h4>
            <ul className="space-y-2 text-xs">
              {productLinks.map((prod, idx) => (
                <li key={idx}>
                  <a
                    href={prod.href}
                    className="text-gray-300 hover:text-amber-400 flex items-center gap-1 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{prod.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Our Address
            </h4>
            <div className="flex items-start gap-3 text-xs text-gray-300 leading-relaxed">
              <div className="w-7 h-7 rounded-full bg-[#c47d18] text-[#03241b] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 fill-current stroke-1" />
              </div>
              <div className="space-y-0.5">
                <p>Shop no 294 New Devi Ahilyabai</p>
                <p>Chothram Mandi</p>
                <p>Indore (MP), INDIA</p>
                <p className="font-semibold text-amber-400">PIN 452001</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-3">
          <p>© 2024 बाबा सोमनाथ ट्रेडर्स. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#sitemap" className="hover:text-amber-400 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
