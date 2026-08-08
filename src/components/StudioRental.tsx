import React from 'react';
import { STUDIO_PACKAGES } from '../data/companyData';
import { Check, Calendar, Clock } from 'lucide-react';

interface StudioRentalProps {
  onSelectStudio?: (studioTitle: string) => void;
}

export const StudioRental: React.FC<StudioRentalProps> = ({ onSelectStudio }) => {
  const handleBooking = (title: string) => {
    if (onSelectStudio) {
      onSelectStudio(title);
    } else {
      const elem = document.getElementById('contact');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getStatusBadge = (status?: 'available' | 'limited' | 'reserved') => {
    switch (status) {
      case 'available':
        return {
          bg: 'bg-emerald-950/85 text-emerald-300 border-emerald-500/40',
          dot: 'bg-emerald-400',
          ping: 'bg-emerald-400',
        };
      case 'limited':
        return {
          bg: 'bg-amber-950/85 text-amber-300 border-amber-500/40',
          dot: 'bg-amber-400',
          ping: 'bg-amber-400',
        };
      case 'reserved':
        return {
          bg: 'bg-slate-900/85 text-slate-300 border-slate-700',
          dot: 'bg-blue-400',
          ping: 'bg-blue-400',
        };
      default:
        return {
          bg: 'bg-slate-900/85 text-slate-300 border-slate-700',
          dot: 'bg-emerald-400',
          ping: 'bg-emerald-400',
        };
    }
  };

  return (
    <section id="studio" className="h-[100dvh] min-h-[100dvh] snap-start snap-always flex-shrink-0 flex flex-col justify-center items-center py-12 sm:py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full uppercase tracking-wider">
            STUDIO RENTAL &amp; INFRA
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-3">
            160평 최첨단 전문 스튜디오
          </h2>
          <ul className="text-xs sm:text-sm text-slate-700 font-medium space-y-1 inline-block text-left">
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-600 font-bold">•</span>
              <span>6개 맞춤형 룸 : 1인 방송부터 대형 세트까지</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-600 font-bold">•</span>
              <span>최상급 인프라 : 전문 조명, 카메라, 방음 설비 완비</span>
            </li>
          </ul>
        </div>

        {/* Studio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STUDIO_PACKAGES.map((pkg) => {
            const badgeStyle = getStatusBadge(pkg.status);
            return (
              <div 
                key={pkg.id}
                id={pkg.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover"
                    />
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                      {pkg.badge}
                    </div>

                    {/* Real-time Status Badge */}
                    {pkg.statusText && (
                      <div className={`absolute top-3 right-3 backdrop-blur-md border px-2.5 py-1 rounded-md text-[11px] font-bold shadow-md flex items-center space-x-1.5 ${badgeStyle.bg}`}>
                        <span className="relative flex h-2 w-2">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${badgeStyle.ping}`}></span>
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${badgeStyle.dot}`}></span>
                        </span>
                        <span>{pkg.statusText}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <h3 className="text-xl font-extrabold text-slate-900">
                        {pkg.title}
                      </h3>
                      {pkg.nextAvailableTime && (
                        <span className="inline-flex items-center space-x-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{pkg.nextAvailableTime}</span>
                        </span>
                      )}
                    </div>

                    <ul className="space-y-3 mb-6">
                      {pkg.specs.map((spec, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-xs text-slate-700">
                          <span className="flex-shrink-0 bg-emerald-50 text-emerald-600 p-0.5 rounded mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleBooking(pkg.title)}
                    className="w-full bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{pkg.title} 예약 문의하기</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
