import React, { useState } from 'react';
import globalMapImg from '../assets/global_map_shipping.png';
import { MapPin } from 'lucide-react';

export default function GlobalReach({ onOpenQuote }) {
  const [activeCountry, setActiveCountry] = useState(null);

  const row1 = [
    { name: 'UAE', transit: '4 - 6 Days', port: 'Jebel Ali / Dubai' },
    { name: 'Saudi Arabia', transit: '6 - 8 Days', port: 'Jeddah / Dammam' },
    { name: 'USA', transit: '22 - 28 Days', port: 'New York / Los Angeles' },
    { name: 'UK', transit: '18 - 22 Days', port: 'Felixstowe / London Gateway' },
    { name: 'Europe', transit: '16 - 20 Days', port: 'Rotterdam / Hamburg' },
    { name: 'Bangladesh', transit: '3 - 5 Days', port: 'Chittagong / Benapole' },
  ];

  const row2 = [
    { name: 'Malaysia', transit: '8 - 10 Days', port: 'Port Klang' },
    { name: 'Singapore', transit: '7 - 9 Days', port: 'Singapore Port' },
    { name: 'Indonesia', transit: '9 - 12 Days', port: 'Jakarta / Surabaya' },
    { name: 'Africa', transit: '14 - 18 Days', port: 'Mombasa / Durban' },
    { name: 'and More ...', transit: 'Worldwide Reefer Delivery', port: 'Global Container Ports' },
  ];

  const renderPill = (c, i) => {
    const isSelected = activeCountry?.name === c.name;
    return (
      <button
        key={i}
        onClick={() => {
          setActiveCountry(isSelected ? null : c);
        }}
        className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 cursor-pointer ${
          isSelected
            ? 'bg-[#d89736] text-[#04281f] border-[#d89736] shadow-md'
            : 'border-[#1b5042] bg-[#073629] text-gray-200 hover:border-[#d89736] hover:bg-[#0b4837]'
        }`}
      >
        {c.name}
      </button>
    );
  };

  return (
    <section className="py-14 lg:py-18 bg-[#04281f] text-white relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Content & Country Pills */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {/* Tagline */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#d89736]">
                GLOBAL REACH
              </span>
              <span className="h-[1.5px] w-6 bg-[#d89736]" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold font-serif text-white leading-tight">
              Supplying Indian Garlic Across the Globe
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              We export high-quality Indian garlic to various countries with reliable logistics and timely delivery. Our growing global network ensures fresh and consistent supply to meet market demand.
            </p>

            {/* Country Pills Container in 2 Distinct Rows */}
            <div className="pt-2 space-y-2.5">
              <div className="flex flex-wrap gap-2">
                {row1.map(renderPill)}
              </div>
              <div className="flex flex-wrap gap-2">
                {row2.map(renderPill)}
              </div>

              {/* Active country transit preview tooltip */}
              {activeCountry && (
                <div className="mt-4 p-3 rounded-lg bg-[#073527] border border-[#d89736]/40 text-xs text-left animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#d89736] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> Destination: {activeCountry.name}
                    </span>
                    <button 
                      onClick={() => onOpenQuote(activeCountry.name)}
                      className="text-[11px] underline text-amber-300 hover:text-white cursor-pointer"
                    >
                      Inquire for this route →
                    </button>
                  </div>
                  <div className="mt-1 flex gap-4 text-gray-300 text-[11px]">
                    <span>Transit: <strong>{activeCountry.transit}</strong></span>
                    <span>Port: <strong>{activeCountry.port}</strong></span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: World Map, Routes & Logistics Graphic */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full group">
              <img
                src={globalMapImg}
                alt="Global Shipping Routes and Logistics Network from India"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04281f]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
