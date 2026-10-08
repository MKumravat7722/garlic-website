import React from 'react';
import { Leaf, Award, Package, Globe } from 'lucide-react';

export default function ValueProps() {
  const props = [
    {
      title: 'Naturally Grown',
      desc: 'Sourced from trusted Indian farms',
      icon: (
        <div className="w-12 h-12 rounded-full bg-[#f8f3e8] border border-[#e8d7bb] flex items-center justify-center text-[#0e3b2e] group-hover:bg-[#0e3b2e] group-hover:text-amber-400 transition-colors duration-300">
          <Leaf className="w-6 h-6 stroke-[2.2]" />
        </div>
      ),
    },
    {
      title: 'Premium Quality',
      desc: 'Graded and processed to global standards',
      icon: (
        <div className="w-12 h-12 rounded-full bg-[#f8f3e8] border border-[#e8d7bb] flex items-center justify-center text-[#0e3b2e] group-hover:bg-[#0e3b2e] group-hover:text-amber-400 transition-colors duration-300">
          <Award className="w-6 h-6 stroke-[2.2]" />
        </div>
      ),
    },
    {
      title: 'Hygienic Packaging',
      desc: 'Safe and export-ready packing options',
      icon: (
        <div className="w-12 h-12 rounded-full bg-[#f8f3e8] border border-[#e8d7bb] flex items-center justify-center text-[#0e3b2e] group-hover:bg-[#0e3b2e] group-hover:text-amber-400 transition-colors duration-300">
          <Package className="w-6 h-6 stroke-[2.2]" />
        </div>
      ),
    },
    {
      title: 'Global Supply',
      desc: 'Delivering to international markets worldwide',
      icon: (
        <div className="w-12 h-12 rounded-full bg-[#f8f3e8] border border-[#e8d7bb] flex items-center justify-center text-[#0e3b2e] group-hover:bg-[#0e3b2e] group-hover:text-amber-400 transition-colors duration-300">
          <Globe className="w-6 h-6 stroke-[2.2]" />
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white py-6 border-b border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {props.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-[#faf7f0]/60"
            >
              <div className="shrink-0">{item.icon}</div>
              <div className="text-left">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#c47d18] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
