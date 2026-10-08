import React, { useState } from 'react';
import qualityGarlicImg from '../assets/quality_garlic.png';
import certsCardImg from '../assets/certifications_card.png';
import { Check, ArrowRight, ShieldCheck, X, FileCheck, Award } from 'lucide-react';

export default function Quality({ onOpenQuote }) {
  const [showQualityModal, setShowQualityModal] = useState(false);

  const checklist = [
    'Carefully selected and sorted garlic',
    'Lab tested for purity and food safety',
    'Fresh, clean and chemical residue free',
    'Proper grading and hygienic processing',
    'Export-ready supply with documentation support',
  ];

  return (
    <section id="quality" className="py-16 lg:py-20 bg-[#073024] text-white relative overflow-hidden">
      
      {/* Subtle background ambient texture */}
      <div className="absolute inset-0 bg-radial-gradient from-[#0b4232]/40 via-transparent to-black/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Visual Garlic Bulbs Artwork */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-sm lg:max-w-none group">
              <img
                src={qualityGarlicImg}
                alt="Finest Sorted Indian Garlic Bulbs"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Center Column: Quality Commitment & Bullet points */}
          <div className="lg:col-span-5 space-y-5 text-left">
            {/* Tagline */}
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-6 bg-[#d89736]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#d89736]">
                OUR COMMITMENT
              </span>
              <span className="h-[1.5px] w-6 bg-[#d89736]" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-serif text-white leading-tight">
              Quality Is Our Priority
            </h2>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
              We follow strict quality control processes to deliver the garlic our global customers trust.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d89736] flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-[#073024] stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-100 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <button
                onClick={() => setShowQualityModal(true)}
                className="gold-gradient-btn px-6 py-3 rounded-md text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Learn More About Our Quality</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Global Certifications Card */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="bg-white rounded-xl shadow-2xl p-2 w-full max-w-[210px] transform hover:scale-102 transition-transform duration-300 border border-gray-100">
              <img
                src={certsCardImg}
                alt="Our Global Certifications - FSSAI, APEDA, ISO 9001:2015, Phytosanitary"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Quality Standards & Testing Modal */}
      {showQualityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 text-gray-800">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative border border-amber-100 max-h-[90vh] overflow-y-auto text-left">
            <button
              onClick={() => setShowQualityModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#c47d18]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#c47d18]">
                GLOBAL EXPORT STANDARDS
              </span>
            </div>

            <h3 className="text-2xl font-bold font-serif text-[#083528] mb-3">
              Comprehensive Quality Assurance
            </h3>

            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              Every shipment leaving Baba Somnath Traders undergoes rigorous 5-stage inspection to guarantee compliance with international food and agricultural safety laws.
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-amber-50/70 rounded-lg border border-amber-200/60">
                <h4 className="font-bold text-[#083528] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c47d18]" /> 1. Moisture & Curing Control
                </h4>
                <p className="text-gray-600 mt-1">
                  Bulbs are naturally sun-cured and moisture-tested to ensure moisture content remains strictly below 65%, preventing fungus, rotting, and weight shrinkage during sea transit.
                </p>
              </div>

              <div className="p-3 bg-amber-50/70 rounded-lg border border-amber-200/60">
                <h4 className="font-bold text-[#083528] flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#c47d18]" /> 2. APEDA & Phytosanitary Certification
                </h4>
                <p className="text-gray-600 mt-1">
                  Official Plant Quarantine Inspection and Phytosanitary Certificate issued prior to port departure, confirming free from pests, chemical residues, and biological contaminants.
                </p>
              </div>

              <div className="p-3 bg-amber-50/70 rounded-lg border border-amber-200/60">
                <h4 className="font-bold text-[#083528] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#c47d18]" /> 3. Reefer Temperature Management
                </h4>
                <p className="text-gray-600 mt-1">
                  Containerized shipments utilize dedicated refrigerated (reefer) containers calibrated at -1°C to 0°C with 65-70% humidity and continual temperature data-loggers.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3 pt-3 border-t border-gray-100">
              <button
                onClick={() => setShowQualityModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-xs font-semibold text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowQualityModal(false);
                  onOpenQuote();
                }}
                className="gold-gradient-btn px-5 py-2 rounded-md text-xs font-bold"
              >
                Request Quality Audit Report
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
