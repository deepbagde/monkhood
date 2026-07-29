import React, { useState } from 'react';

const FEATURE_TOOLTIPS = {
  "Daily Monk Morning Sangha Sessions": "Live 30-min guided meditation at dawn led by experienced monks.",
  "Sunday Weekly Live Community Sessions": "Interactive Sunday workshops for Q&A, group reflection & teachings.",
  "Premium Recorded Courses": "On-demand masterclasses covering mindfulness, breathwork & philosophy.",
  "Live Guest Expert Sessions": "Exclusive live masterclasses from international spiritual leaders.",
  "Session Recordings": "Unlimited access to HD recordings of all past live sessions.",
  "Community Access": "Connect with global Sangha practitioners in a warm, ad-free portal.",
  "Mindfulness & Meditation Library": "200+ guided audio tracks for sleep, stress, focus & deep peace.",
  "Buddha's Wisdom for Modern Life": "Practical ancient teachings decoded for modern everyday living.",
  "New Course Every Month": "Fresh structured curriculum added every single month.",
  "Early Access to Every New Course": "Get 7-day priority access before public course launches.",
  "Priority Registration for Offline Events": "Reserved VIP seating for live retreats and offline Sangha meets.",
  "Members-only Surprise Sessions": "Unannounced live meditation circles with guest monks.",
  "VIP Community Badge": "Distinguished glowing badge on your Sangha community profile.",
  "Gamification": "Track meditation streaks, level up & earn mindfulness badges.",
  "Monthly Challenges": "Guided 21-day transformation challenges with community accountability."
};

const MONTHLY_FEATURES = [
  "Daily Monk Morning Sangha Sessions",
  "Sunday Weekly Live Community Sessions",
  "Premium Recorded Courses",
  "Live Guest Expert Sessions",
  "Session Recordings",
  "Community Access",
  "Mindfulness & Meditation Library",
  "Buddha's Wisdom for Modern Life",
  "New Course Every Month"
];

const YEARLY_FEATURES = [
  "Daily Monk Morning Sangha Sessions",
  "Sunday Weekly Live Community Sessions",
  "Premium Recorded Courses",
  "Live Guest Expert Sessions",
  "Session Recordings",
  "Community Access",
  "Mindfulness & Meditation Library",
  "Buddha's Wisdom for Modern Life",
  "New Course Every Month",
  "Early Access to Every New Course",
  "Priority Registration for Offline Events",
  "Members-only Surprise Sessions",
  "VIP Community Badge",
  "Gamification",
  "Monthly Challenges"
];

export default function PricingSection({ 
  customMonthlyUrl = "https://learn.monkhoodclub.com/web/checkout/6a690eba258d6e22aee85fcf", 
  customYearlyUrl = "https://learn.monkhoodclub.com/web/checkout/6a691103258d6e22aee8f2d3" 
}) {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <section className="relative py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      
      {/* Pricing Cards Grid matching image layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch pt-2">
        
        {/* ========================================================== */}
        {/* MONTHLY MEMBERSHIP CARD */}
        {/* ========================================================== */}
        <div className="relative group rounded-3xl p-6 sm:p-8 bg-[#0b0816]/90 border border-amber-500/35 hover:border-amber-400/80 backdrop-blur-xl shadow-[0_0_35px_rgba(212,175,55,0.15)] hover:shadow-[0_0_55px_rgba(212,175,55,0.3)] transition-all duration-500 flex flex-col justify-between overflow-visible">
          
          <div>
            {/* Title & Description */}
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-100 tracking-wide mb-1 gold-text-gradient">
              Monthly Membership
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light mb-6">
              Perfect to begin your mindfulness journey.
            </p>

            {/* Price (Matching User's Screenshot Font Exactly) */}
            <div className="mb-6 flex items-baseline space-x-1.5 border-b border-amber-500/20 pb-6">
              <span className="font-price text-5xl sm:text-6xl font-semibold gold-text-gradient tracking-tight">
                ₹51
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-normal">
                /month
              </span>
            </div>

            {/* Includes Header */}
            <div className="mb-4">
              <span className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                INCLUDES
              </span>
            </div>

            {/* Checkmark Features with Low-Light Muted Ticks */}
            <ul className="space-y-2.5 mb-8">
              {MONTHLY_FEATURES.map((feature, idx) => (
                <li 
                  key={idx} 
                  onMouseEnter={() => setHoveredFeature(feature)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="relative flex items-center space-x-3 text-xs sm:text-sm text-slate-200 cursor-pointer group/item transition-colors hover:text-amber-200"
                >
                  {/* Low-light muted checkmark circle */}
                  <span className="w-4 h-4 rounded-full bg-[#181308] border border-amber-600/40 flex items-center justify-center text-amber-500/80 text-[10px] flex-shrink-0">
                    ✓
                  </span>
                  <span className="font-medium text-slate-200 group-hover/item:text-amber-200">{feature}</span>

                  {/* Interactive Tooltip Card */}
                  {hoveredFeature === feature && FEATURE_TOOLTIPS[feature] && (
                    <div className="absolute left-6 bottom-full mb-2 z-30 w-64 p-3 rounded-xl bg-[#17112b] border border-amber-400/50 shadow-[0_0_25px_rgba(0,0,0,0.8)] text-xs text-amber-100 backdrop-blur-xl animate-fade-in pointer-events-none">
                      <span className="font-semibold text-amber-300 block mb-0.5">✨ Sangha Benefit:</span>
                      {FEATURE_TOOLTIPS[feature]}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Button & Subtext */}
          <div>
            <a
              href={customMonthlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm tracking-widest uppercase bg-gradient-to-r from-[#2a1b05] via-[#4d3209] to-[#2a1b05] hover:from-[#3d2808] hover:to-[#5e3d0a] text-amber-200 border border-amber-500/60 hover:border-amber-300 shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all cursor-pointer"
            >
              Join Monthly
            </a>
            <p className="text-[11px] text-center text-slate-400 mt-2.5">
              Renews automatically every month.
            </p>
          </div>

        </div>

        {/* ========================================================== */}
        {/* YEARLY MEMBERSHIP CARD (MOST POPULAR) */}
        {/* ========================================================== */}
        <div className="relative group rounded-3xl p-6 sm:p-8 pt-8 sm:pt-9 bg-[#0d091e]/90 border-2 border-amber-400/80 hover:border-amber-300 backdrop-blur-xl shadow-[0_0_50px_rgba(245,215,127,0.35)] transition-all duration-500 flex flex-col justify-between overflow-visible">
          
          {/* Badge: MOST POPULAR (100% VISIBLE ON DESKTOP & MOBILE) */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 px-5 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase shadow-[0_0_25px_rgba(245,215,127,0.9)] flex items-center space-x-1.5 border border-yellow-200 whitespace-nowrap">
              <span>⚡</span>
              <span>MOST POPULAR</span>
            </span>
          </div>

          <div>
            {/* Title & Description */}
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-100 tracking-wide mb-1 pt-1 gold-text-gradient">
              Yearly Membership
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light mb-6">
              Pay once and enjoy the entire year.
            </p>

            {/* Price Row (Matching User's Screenshot Font Exactly) */}
            <div className="mb-2 flex items-baseline space-x-2">
              <span className="line-through text-slate-500 font-price text-xl font-normal">
                ₹612
              </span>
              <span className="font-price text-5xl sm:text-6xl font-semibold gold-text-gradient tracking-tight">
                ₹499
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-normal">
                /year
              </span>
            </div>

            {/* Savings Pill */}
            <div className="mb-6 border-b border-amber-500/20 pb-6">
              <span className="text-[11px] font-bold tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/40 px-3 py-1 rounded-md shadow-[0_0_12px_rgba(245,215,127,0.25)]">
                SAVE 18% • YOU SAVE ₹113
              </span>
            </div>

            {/* Header */}
            <div className="mb-4">
              <span className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                EVERYTHING IN MONTHLY, PLUS
              </span>
            </div>

            {/* Checkmark Features with Low-Light Muted Ticks */}
            <ul className="space-y-2.5 mb-8">
              {YEARLY_FEATURES.map((feature, idx) => (
                <li 
                  key={idx} 
                  onMouseEnter={() => setHoveredFeature(feature)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="relative flex items-center space-x-3 text-xs sm:text-sm text-slate-200 cursor-pointer group/item transition-colors hover:text-amber-200"
                >
                  {/* Low-light muted checkmark circle */}
                  <span className="w-4 h-4 rounded-full bg-[#181308] border border-amber-600/40 flex items-center justify-center text-amber-500/80 text-[10px] flex-shrink-0">
                    ✓
                  </span>
                  <span className="font-medium text-slate-200 group-hover/item:text-amber-200">{feature}</span>

                  {/* Interactive Tooltip Card */}
                  {hoveredFeature === feature && FEATURE_TOOLTIPS[feature] && (
                    <div className="absolute left-6 bottom-full mb-2 z-30 w-64 p-3 rounded-xl bg-[#17112b] border border-amber-400/50 shadow-[0_0_25px_rgba(0,0,0,0.8)] text-xs text-amber-100 backdrop-blur-xl animate-fade-in pointer-events-none">
                      <span className="font-semibold text-amber-300 block mb-0.5">✨ Sangha Benefit:</span>
                      {FEATURE_TOOLTIPS[feature]}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div>
            <a
              href={customYearlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm tracking-widest uppercase bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:brightness-110 text-slate-950 shadow-[0_0_30px_rgba(245,215,127,0.5)] transition-all cursor-pointer"
            >
              Join Yearly
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
