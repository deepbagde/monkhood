import React from 'react';

export default function HelpCard() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto z-10 relative">
      <div className="rounded-3xl p-6 sm:p-7 bg-[#0a0714]/70 border border-amber-500/35 backdrop-blur-md text-center shadow-[0_0_30px_rgba(212,175,55,0.2)]">
        
        {/* NEED HELP Header */}
        <h4 className="text-[11px] font-extrabold tracking-[0.25em] text-slate-400 uppercase mb-3">
          NEED HELP?
        </h4>

        {/* Contact Info Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-200">
          <div>
            <span className="text-slate-400 font-normal">Call: </span>
            <a 
              href="tel:+919503129479" 
              className="font-bold text-slate-100 hover:text-amber-300 transition-colors"
            >
              +91 95031 29479
            </a>
          </div>

          <div>
            <span className="text-slate-400 font-normal">Email: </span>
            <a 
              href="mailto:support@monkhoodclub.com" 
              className="font-bold text-slate-100 hover:text-amber-300 transition-colors"
            >
              support@monkhoodclub.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
