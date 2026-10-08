import React, { useState } from 'react';
import aboutCapsuleImg from '../assets/about_capsule.png';
import { ArrowRight, Leaf, ShieldCheck, Globe, Handshake, CheckCircle2 } from 'lucide-react';

export default function AboutUs({ onOpenQuote }) {
  const [showStoryModal, setShowStoryModal] = useState(false);

  const keyHighlights = [
    {
      title: '100%',
      sub: 'Natural Produce',
      icon: <Leaf className="w-5 h-5 text-[#c47d18]" />,
    },
    {
      title: 'Strict',
      sub: 'Quality Standards',
      icon: <ShieldCheck className="w-5 h-5 text-[#c47d18]" />,
    },
    {
      title: 'Global',
      sub: 'Buyers Support',
      icon: <Globe className="w-5 h-5 text-[#c47d18]" />,
    },
    {
      title: 'Long-Term',
      sub: 'Partnerships',
      icon: <Handshake className="w-5 h-5 text-[#c47d18]" />,
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Story & Information */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Section Tag */}
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-6 bg-[#c47d18]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#c47d18]">
                ABOUT US
              </span>
              <span className="h-[1.5px] w-6 bg-[#c47d18]" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-serif text-[#083528] leading-[1.18]">
              Bringing India's <br className="hidden sm:inline" />
              Finest Garlic to the World
            </h2>

            {/* Narrative description */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              We are a reliable garlic import-export company, committed to supplying premium quality Indian garlic to global markets. With strong sourcing networks, rigorous quality checks and a professional supply chain, we ensure consistent supply, freshness and customer satisfaction.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => setShowStoryModal(true)}
                className="gold-gradient-btn px-7 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Artwork */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl group">
              <div className="overflow-hidden rounded-3xl shadow-xl border border-amber-900/10">
                <img
                  src={aboutCapsuleImg}
                  alt="Garlic Farm produce and Fresh Natural Aroma"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>

        {/* 4 Bottom Value Badges */}
        <div className="mt-14 pt-8 border-t border-gray-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {keyHighlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-50/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-amber-300 bg-amber-50/80 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="text-left text-xs sm:text-sm">
                  <span className="font-bold text-gray-900 mr-1.5">
                    {item.title}
                  </span>
                  <span className="text-gray-600 font-medium">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* About Us Detailed Story Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-amber-100">
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1"
            >
              ✕
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#c47d18]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#c47d18]">OUR HERITAGE</span>
            </div>
            <h3 className="text-2xl font-bold font-serif text-[#083528] mb-4">
              Baba Somnath Traders (बाबा सोमनाथ ट्रेडर्स)
            </h3>
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed text-left">
              <p>
                Headquartered at the prestigious <strong>Shop no 294 New Devi Ahilyabai, Chothram Mandi, Indore (MP), India</strong>, Baba Somnath Traders has established itself as an industry benchmark for premium grade garlic exports.
              </p>
              <p>
                Madhya Pradesh and neighboring agricultural belts produce some of the most pungent, oil-rich, and firm-fleshed garlic in the world. Our deep-rooted relationships with farming collectives enable us to inspect produce right at harvest time, selecting only bulbs with optimal clove counts, robust papery husks, and maximum natural aroma.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs font-medium text-gray-800">
                <div className="flex items-center gap-2 bg-green-50 p-2 rounded">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>APEDA & FSSAI Certified Operations</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 p-2 rounded">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cold Storage & Grading Facilities</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 p-2 rounded">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct Port Access (Nhava Sheva / Mundra)</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 p-2 rounded">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom Phytosanitary Documentation</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowStoryModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowStoryModal(false);
                  onOpenQuote();
                }}
                className="gold-gradient-btn px-5 py-2 rounded-md text-xs font-semibold"
              >
                Contact Our Export Desk
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
