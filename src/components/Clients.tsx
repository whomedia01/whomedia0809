import React from 'react';
import { CLIENT_PARTNERS } from '../data/companyData';

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="h-[100dvh] min-h-[100dvh] snap-start snap-always flex-shrink-0 flex flex-col justify-center items-center py-12 sm:py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center w-full my-auto flex flex-col justify-center">
        <div>
          <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-2 block">
            CLIENTS & PARTNERS
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            후미디어와 함께하는 주요 파트너사
          </h2>
        </div>
      </div>

      {/* Marquee Row */}
      <div className="relative w-full overflow-hidden flex py-4">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap min-w-full justify-around items-center">
          {CLIENT_PARTNERS.concat(CLIENT_PARTNERS).map((partner, idx) => (
            <div 
              key={`${partner.id}-${idx}`}
              className="px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center min-w-[140px] text-center group hover:border-red-500 transition-colors"
            >
              <span className="text-sm font-extrabold text-slate-700 group-hover:text-red-600 transition-colors">
                {partner.logoText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
