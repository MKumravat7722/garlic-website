import React from 'react';
import garlicLeftImg from '../assets/contact_garlic_left.png';
import garlicRightImg from '../assets/contact_garlic_right.png';
import { Phone, MessageCircle } from 'lucide-react';

export default function ContactBanner() {
  const whatsappNumber = '9584922249';
  const phoneNumber = '93022232405';

  return (
    <section id="contact" className="relative bg-[#ffffff] pt-8 pb-0 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#083528]">
            Get in Touch With Us
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            For product inquiries, bulk orders or export details, feel free to contact us.
          </p>
        </div>

        {/* Framing Layout with Garlic Bulbs sitting at bottom edge */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-4 relative">
          
          {/* Left Garlic Photo */}
          <div className="hidden lg:block lg:w-1/4 shrink-0 pointer-events-none self-end">
            <img
              src={garlicLeftImg}
              alt="Fresh Indian Garlic Cloves"
              className="w-full max-w-[290px] h-auto object-contain block"
            />
          </div>

          {/* Center: Large CTA Buttons */}
          <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 z-10 w-full max-w-xl pb-6">
            
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/91${whatsappNumber}?text=Hello%20Baba%20Somnath%20Traders,%20I%20am%20interested%20in%20garlic%20export%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#09573f] to-[#064230] hover:from-[#0d6b4e] hover:to-[#084f3a] text-white px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3.5 group cursor-pointer border border-[#1b6b52]"
            >
              <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-wide font-sans">
                {whatsappNumber}
              </span>
            </a>

            {/* Phone CTA */}
            <a
              href={`tel:+91${phoneNumber}`}
              className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#063e32] to-[#032a22] hover:from-[#094f40] hover:to-[#05372d] text-white px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3.5 group cursor-pointer border border-[#165a49]"
            >
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-wide font-sans">
                {phoneNumber}
              </span>
            </a>

          </div>

          {/* Right Garlic Photo */}
          <div className="hidden lg:block lg:w-1/4 shrink-0 pointer-events-none self-end">
            <img
              src={garlicRightImg}
              alt="Premium Quality Garlic Produce"
              className="w-full max-w-[290px] h-auto object-contain block"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
