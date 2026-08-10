import React from 'react';
import HeroBanner from './components/HeroBanner';
import PricingSection from './components/PricingSection';
import FeatureGrid from './components/FeatureGrid';
import HelpCard from './components/HelpCard';
import Footer from './components/Footer';
import BuddhaCanvas from './components/BuddhaCanvas';

// =========================================================================
// MONKHOOD CLUB CHECKOUT URLS:
// =========================================================================
const CUSTOM_MONTHLY_CHECKOUT_URL = "https://learn.monkhoodclub.com/web/checkout/6a690eba258d6e22aee85fcf"; 
const CUSTOM_YEARLY_CHECKOUT_URL = "https://learn.monkhoodclub.com/l/6dce3137f9";

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 font-['Outfit',sans-serif] selection:bg-amber-500/30 selection:text-amber-200 antialiased relative overflow-x-hidden bg-transparent">
      
      {/* 7 Sacred Slow-Rotating Buddha Chakras Background Canvas */}
      <BuddhaCanvas />

      {/* Main Landing Page Content */}
      <main className="space-y-2 relative z-10">
        {/* 1. Hero Banner Artwork */}
        <HeroBanner />

        {/* 2. Membership Pricing Options (Monthly ₹51 & Yearly ₹499) */}
        <PricingSection 
          customMonthlyUrl={CUSTOM_MONTHLY_CHECKOUT_URL}
          customYearlyUrl={CUSTOM_YEARLY_CHECKOUT_URL}
        />

        {/* 3. Feature Highlight Pills */}
        <FeatureGrid />

        {/* 4. Support Contact Card */}
        <HelpCard />
      </main>

      {/* 5. Minimalist Footer */}
      <Footer />

    </div>
  );
}
