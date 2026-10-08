import React from 'react';
import heroImg from '../assets/hero_image.png';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#f9f7f2] via-[#faf8f4] to-[#ffffff] pt-8 pb-12 lg:pt-12 lg:pb-16 border-b border-[#ece6da]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 z-10 space-y-5 text-left">
            {/* Tagline */}
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-6 bg-[#c47d18]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#c47d18]">
                PREMIUM INDIAN GARLIC
              </span>
              <span className="h-[1.5px] w-6 bg-[#c47d18]" />
            </div>

            {/* Main Headings */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight font-serif text-[#083528]">
                Global Quality
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight font-serif text-[#c47d18]">
                Indian Garlic
              </h1>
            </div>

            {/* Sub-headline */}
            <div className="pt-1">
              <h2 className="text-xl sm:text-2xl lg:text-[23px] font-bold text-[#0c382b] font-serif leading-snug">
                We Export Fresh, Pure and <br className="hidden sm:inline" />
                Premium Garlic to the World
              </h2>
            </div>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed pt-1">
              Connecting global markets with the finest Indian garlic. Consistent quality, reliable supply and long-term partnerships built on trust.
            </p>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="gold-gradient-btn px-7 py-3 rounded-md text-sm font-semibold flex items-center gap-2 shadow-md cursor-pointer"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="px-7 py-3 rounded-md text-sm font-semibold text-[#093d2e] bg-white border border-[#d6a95f] hover:bg-[#faf6ee] transition-all duration-200 shadow-sm cursor-pointer"
              >
                Request a Quote
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-xl border border-amber-900/10 group">
              <img
                src={heroImg}
                alt="Global Quality Indian Garlic Export Cargo Ship and Farm"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle Ambient Lighting Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-amber-500/5 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
