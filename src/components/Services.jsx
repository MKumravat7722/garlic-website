import React from 'react';
import { 
  Sprout, 
  SearchCheck, 
  Package, 
  Truck, 
  FileText, 
  Headset, 
  ChevronRight 
} from 'lucide-react';

export default function Services() {
  const steps = [
    {
      title: 'Sourcing',
      desc: 'From trusted Indian farmers',
      icon: <Sprout className="w-5 h-5 text-amber-950" />,
    },
    {
      title: 'Quality Check',
      desc: 'Inspection & grading as per global standards',
      icon: <SearchCheck className="w-5 h-5 text-amber-950" />,
    },
    {
      title: 'Packing',
      desc: 'Customized and export-ready packing',
      icon: <Package className="w-5 h-5 text-amber-950" />,
    },
    {
      title: 'Logistics',
      desc: 'Efficient global shipping support',
      icon: <Truck className="w-5 h-5 text-amber-950" />,
    },
    {
      title: 'Documentation',
      desc: 'Complete export document assistance',
      icon: <FileText className="w-5 h-5 text-amber-950" />,
    },
    {
      title: 'Ongoing Support',
      desc: 'Dedicated support for long-term partnership',
      icon: <Headset className="w-5 h-5 text-amber-950" />,
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1.5px] w-6 bg-[#c47d18]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#c47d18]">
              OUR SERVICES
            </span>
            <span className="h-[1.5px] w-6 bg-[#c47d18]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#083528]">
            Complete Import-Export Solutions
          </h2>

          <p className="text-sm sm:text-base text-gray-600">
            From sourcing to shipping, we provide end-to-end support with a focus on quality, compliance and timely delivery.
          </p>
        </div>

        {/* 6 Step Interactive Process Flow */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center group relative"
              >
                {/* Arrow connector between steps for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-6 -right-3 z-20 text-amber-500/80 items-center justify-center pointer-events-none">
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                )}

                {/* Circular Icon with Gold Ring */}
                <div className="w-14 h-14 rounded-full bg-[#f6eee0] border-2 border-[#d6a555] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#073024] group-hover:border-[#073024] transition-all duration-300 shadow-sm cursor-pointer">
                  <div className="group-hover:text-amber-400 text-amber-950 transition-colors">
                    {step.icon}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-[#c47d18] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[11px] sm:text-xs text-gray-500 leading-snug px-1">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
