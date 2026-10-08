import React, { useState } from 'react';
import logoImg from '../assets/logo.png';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Quality', href: '#quality' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img 
              src={logoImg} 
              alt="बाबा सोमनाथ ट्रेडर्स - Baba Somnath Traders" 
              className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveNav(link.name)}
                  className={`relative text-sm font-semibold transition-colors duration-200 py-1 ${
                    isActive 
                      ? 'text-[#073527]' 
                      : 'text-gray-700 hover:text-[#c47d18]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#073527] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => onOpenQuote()}
              className="gold-gradient-btn px-6 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#073527] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  activeNav === link.name
                    ? 'text-[#073527] bg-green-50 font-bold'
                    : 'text-gray-700 hover:text-[#c47d18] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full gold-gradient-btn py-3 rounded-md text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
