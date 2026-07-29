import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, ArrowRight, Link, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MembershipModal({ plan, onClose }) {
  const [redirecting, setRedirecting] = useState(false);

  if (!plan) return null;

  const handleCheckout = () => {
    // Launch celebratory lotus sparkles
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f5d77f', '#d4af37', '#8b5cf6']
    });

    setRedirecting(true);
    setTimeout(() => {
      if (plan.url && plan.url !== '#') {
        window.location.href = plan.url;
      } else {
        alert(`You clicked ${plan.name}! To customize this link later, update the 'customMonthlyUrl' or 'customYearlyUrl' prop in App.jsx or PricingSection.jsx.`);
        setRedirecting(false);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#18132e] via-[#0f0b21] to-[#080514] border-2 border-amber-400/60 shadow-[0_0_60px_rgba(245,215,127,0.3)] text-left overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-xl">
            🪷
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-widest text-amber-300 uppercase block">
              Monkhood Sangha Checkout
            </span>
            <h3 className="font-cinzel text-xl font-bold text-amber-100">
              {plan.name}
            </h3>
          </div>
        </div>

        {/* Order Summary Box */}
        <div className="p-4 rounded-2xl bg-white/5 border border-amber-500/20 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-300">Selected Plan:</span>
            <span className="text-sm font-semibold text-amber-200">{plan.name}</span>
          </div>
          <div className="flex justify-between items-baseline pt-2 border-t border-white/10">
            <span className="text-xs text-slate-300">Total Investment:</span>
            <div className="text-right">
              <span className="font-cinzel text-2xl font-bold gold-text-gradient">
                {plan.price}
              </span>
              <span className="text-xs text-slate-400 font-medium"> {plan.billing}</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="space-y-2.5 mb-6">
          <div className="flex items-center space-x-2 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Instant Digital Sangha Access</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Daily Live Morning Monk Sessions</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Cancel anytime from member portal</span>
          </div>
        </div>

        {/* Note about link replacement */}
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/30 text-[11px] text-amber-200/90 mb-6 flex items-start space-x-2">
          <Link className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Developer Tip:</strong> Replace the dummy link with your Razorpay / Stripe checkout URL in <code>App.jsx</code> anytime.
          </span>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleCheckout}
          disabled={redirecting}
          className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-[0_0_25px_rgba(245,215,127,0.4)] hover:brightness-110 transition-all flex items-center justify-center space-x-2"
        >
          {redirecting ? (
            <span>Processing Sangha Pass...</span>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Proceed to Checkout ({plan.price})</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

      </div>
    </div>
  );
}
