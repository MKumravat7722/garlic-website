import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, preselectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: preselectedProduct || 'Fresh Garlic Bulbs',
    quantity: '1x 20ft Reefer FCL (14 MT)',
    destination: 'UAE (Jebel Ali)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsapp = () => {
    const text = `*Garlic Export Inquiry - Baba Somnath Traders*%0A%0A*Name:* ${formData.name || 'Importer'}%0A*Company:* ${formData.company || 'N/A'}%0A*Product:* ${formData.product}%0A*Quantity:* ${formData.quantity}%0A*Destination:* ${formData.destination}%0A*Phone:* ${formData.phone || 'N/A'}%0A*Notes:* ${formData.notes || 'None'}`;
    window.open(`https://wa.me/919584922249?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-amber-200/60 max-h-[92vh] overflow-y-auto text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-[#083528]">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
              Thank you for contacting <strong>Baba Somnath Traders</strong>. Our export desk at Chothram Mandi, Indore will evaluate CIF / FOB rates and get back to you within 2 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleSendWhatsapp}
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Connect</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-0.5 w-5 bg-[#c47d18]" />
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#c47d18]">
                  BABA SOMNATH TRADERS EXPORT DESK
                </span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#083528]">
                Request Official Export Quote
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Direct export pricing from Indore Mandi, MP (APEDA & FSSAI certified)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / Ahmed Al-Mansoor"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c47d18]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Company / Importer Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Al-Baraka Trading LLC"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c47d18]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 ... or +91 9..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c47d18]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="buyer@domain.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c47d18]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Product Grade *</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c47d18] bg-white font-medium"
                  >
                    <option value="Fresh Garlic Bulbs">Fresh Garlic Bulbs (40mm - 65mm)</option>
                    <option value="Export Grade Garlic">Export Grade Garlic (Uniform 55mm+)</option>
                    <option value="Peeled Garlic">Peeled Garlic (Pouched / Foodgrade)</option>
                    <option value="Custom Packaging">Custom Packaging (Private Label)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Order Volume *</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c47d18] bg-white font-medium"
                  >
                    <option value="1x 20ft Reefer FCL (14 MT)">1x 20ft Reefer FCL (~14 MT)</option>
                    <option value="1x 40ft Reefer FCL (28 MT)">1x 40ft Reefer FCL (~28 MT)</option>
                    <option value="Multiple 40ft Containers (50+ MT)">Multiple Containers (50+ MT)</option>
                    <option value="Trial Air Consignment (2 - 5 MT)">Trial Consignment (2 - 5 MT)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Destination Country / Discharge Port *</label>
                <input
                  type="text"
                  required
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="e.g. Jebel Ali (Dubai) / Jeddah / Rotterdam / New York"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c47d18]"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Special Packaging / Mesh Bag Weight / Instructions</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. 10kg mesh bags, pre-cooling required, Phytosanitary certificate needed."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c47d18] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsapp}
                  className="px-4 py-2.5 rounded-lg border border-emerald-600 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="gold-gradient-btn px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          </>
        )}

      </div>
    </div>
  );
}
