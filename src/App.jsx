import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Quality from './components/Quality';
import Services from './components/Services';
import GlobalReach from './components/GlobalReach';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('Fresh Garlic Bulbs');

  const handleOpenQuote = (productName) => {
    if (productName && typeof productName === 'string') {
      setSelectedProductForQuote(productName);
    } else {
      setSelectedProductForQuote('Fresh Garlic Bulbs');
    }
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 antialiased font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenQuote={() => handleOpenQuote()} />
        <ValueProps />
        <AboutUs onOpenQuote={() => handleOpenQuote()} />
        <Products onOpenQuote={handleOpenQuote} />
        <Quality onOpenQuote={() => handleOpenQuote()} />
        <Services />
        <GlobalReach onOpenQuote={handleOpenQuote} />
        <ContactBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quotation & Inquiry Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        preselectedProduct={selectedProductForQuote}
      />
    </div>
  );
}
