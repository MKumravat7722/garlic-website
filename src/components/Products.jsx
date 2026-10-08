import React, { useState } from 'react';
import p1Img from '../assets/product_fresh_garlic.png';
import p2Img from '../assets/product_export_grade.png';
import p3Img from '../assets/product_peeled_garlic.png';
import p4Img from '../assets/product_custom_packaging.png';
import { ArrowRight, Check, X, Shield, Package, Sparkles } from 'lucide-react';

export default function Products({ onOpenQuote }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 'fresh-garlic-bulbs',
      title: 'Fresh Garlic Bulbs',
      image: p1Img,
      desc: 'Premium quality fresh garlic with excellent aroma and longer shelf life.',
      specs: {
        size: '40mm - 65mm+ diameter',
        color: 'Pure White & Natural Purple tinged',
        clovesCount: '10 - 15 cloves per bulb',
        moisture: 'Below 65% (properly cured)',
        shelfLife: '6 - 9 months in controlled ventilation',
        packaging: '5kg, 10kg, 20kg Mesh Bags or Corrugated Cartons',
        application: 'Retail, Supermarket Chains, Wholesale Produce Markets',
      },
    },
    {
      id: 'export-grade-garlic',
      title: 'Export Grade Garlic',
      image: p2Img,
      desc: 'Carefully graded garlic meeting international quality standards for bulk export.',
      specs: {
        size: '50mm, 55mm, 60mm & above (Uniform sorting)',
        color: 'Bright White, spotless outer skin',
        origin: 'Indore & Malwa Belt, Madhya Pradesh, India',
        grading: 'Optical and manual sorting for defect-free cloves',
        shelfLife: '9 - 12 months in cold storage (0°C to -1°C)',
        packaging: '10kg / 20kg Mesh Bags or 10kg Master Cartons',
        application: 'Bulk International Importers, Food Distributors, Spice Blenders',
      },
    },
    {
      id: 'peeled-garlic',
      title: 'Peeled Garlic',
      image: p3Img,
      desc: 'Clean, white, ready-to-use peeled garlic for food processing and horeca segments.',
      specs: {
        size: 'Whole plump cloves, nitrogen flushed',
        color: 'Ivory White, unblemished',
        hygiene: 'Processed in HACCP certified, sanitized cleanrooms',
        shelfLife: '45 - 60 days under refrigerated conditions (2°C - 4°C)',
        packaging: '500g, 1kg, 5kg Vacuum Sealed Food-Grade Pouches',
        application: 'HoReCa (Hotels, Restaurants, Catering), Ready-Meal Manufacturers, Sauce & Paste Factories',
      },
    },
    {
      id: 'custom-packaging',
      title: 'Custom Packaging',
      image: p4Img,
      desc: 'Flexible packaging options tailored to client requirements with proper labeling.',
      specs: {
        options: 'Mesh Bags, Carton Boxes, Jute Bags, Vacuum Packs, Net Bags with barcode tags',
        weights: '100g, 250g, 500g, 1kg, 5kg, 10kg, 20kg, 25kg, or 50kg bulk',
        branding: 'Private labeling with buyer brand logo, QR code & country regulations',
        palletization: 'Standard Euro pallets or ISO shipping container pallet wrapping',
        compliance: 'Pre-cooling and reefer container temperature logging provided',
        application: 'Custom Private Label Brands, Global Supermarket Distribution',
      },
    },
  ];

  return (
    <section id="products" className="py-16 lg:py-24 bg-[#faf9f6] border-y border-amber-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1.5px] w-6 bg-[#c47d18]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#c47d18]">
              OUR PRODUCTS
            </span>
            <span className="h-[1.5px] w-6 bg-[#c47d18]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-serif text-[#083528]">
            High-Quality Garlic Products
          </h2>

          <p className="text-sm sm:text-base text-gray-600">
            We supply a wide range of garlic varieties to meet the diverse needs of our global customers.
          </p>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Product Photo */}
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#c47d18] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed min-h-[40px]">
                    {product.desc}
                  </p>
                </div>

                {/* View Details Button */}
                <div className="pt-5 mt-auto">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full gold-gradient-btn py-2.5 px-4 rounded-md text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Specification Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative border border-amber-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-20 h-20 rounded-xl object-cover border border-amber-200 shrink-0"
              />
              <div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#c47d18]">EXPORT SPECIFICATION</span>
                <h3 className="text-xl font-bold font-serif text-[#083528]">
                  {selectedProduct.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Direct harvest from Madhya Pradesh, India
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-700 leading-relaxed mb-4 bg-amber-50/60 p-3 rounded-lg border border-amber-200/50">
              {selectedProduct.desc}
            </p>

            <div className="space-y-2 text-left">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5 text-[#083528]">
                <Sparkles className="w-3.5 h-3.5 text-[#c47d18]" /> Technical Details
              </h4>
              <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg text-xs overflow-hidden">
                {Object.entries(selectedProduct.specs).map(([key, val]) => (
                  <div key={key} className="grid grid-cols-3 p-2.5 bg-white hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="col-span-2 text-gray-800 font-medium">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 border border-gray-300 rounded-md text-xs font-semibold text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const prod = selectedProduct;
                  setSelectedProduct(null);
                  onOpenQuote(prod.title);
                }}
                className="gold-gradient-btn px-5 py-2.5 rounded-md text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request Price For This Grade</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
