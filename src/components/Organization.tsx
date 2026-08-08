import React from 'react';
import { DIVISIONS_DATA, COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Video, BookOpen, Cpu, Briefcase, FlaskConical } from 'lucide-react';

export const Organization: React.FC = () => {
  const getIcon = (code: string) => {
    switch (code) {
      case 'R&D CENTER': return <FlaskConical className="w-5 h-5 text-emerald-600" />;
      case 'DIVISION 01': return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'DIVISION 02': return <Cpu className="w-5 h-5 text-teal-600" />;
      case 'DIVISION 03': return <Video className="w-5 h-5 text-purple-600" />;
      case 'DIVISION 04': return <Briefcase className="w-5 h-5 text-amber-600" />;
      default: return <ShieldCheck className="w-5 h-5 text-blue-600" />;
    }
  };

  const getBadgeStyle = (code: string) => {
    switch (code) {
      case 'R&D CENTER': return 'bg-emerald-50 text-emerald-700 border-emerald-200/60';
      case 'DIVISION 01': return 'bg-blue-50 text-blue-700 border-blue-200/60';
      case 'DIVISION 02': return 'bg-teal-50 text-teal-700 border-teal-200/60';
      case 'DIVISION 03': return 'bg-purple-50 text-purple-700 border-purple-200/60';
      case 'DIVISION 04': return 'bg-amber-50 text-amber-700 border-amber-200/60';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="organization" className="h-[100dvh] min-h-[100dvh] snap-start snap-always flex-shrink-0 flex flex-col justify-center items-center py-10 sm:py-14 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Intro Header: Core Expertise */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-bold text-blue-600 tracking-wider bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60 shadow-2xs uppercase inline-block mb-2">
            CORE EXPERTISE &amp; COMPETENCY
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            분야별 최상위 전문가 원스톱 통합 조직
          </h2>
          <p className="text-sm sm:text-base font-bold text-blue-700 tracking-wide max-w-2xl mx-auto">
            (교육사업 / 에듀테크 / 영상미디어 / 경영지원)
          </p>
        </div>

        {/* Top CEO Hierarchy Tree */}
        <div className="flex flex-col items-center mb-6 sm:mb-8 relative">
          {/* CEO Node */}
          <div className="bg-slate-950 text-white px-8 py-3.5 rounded-2xl shadow-md border border-slate-800 text-center z-10 max-w-xs w-full">
            <div className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase mb-0.5">
              EXECUTIVE LEADERSHIP
            </div>
            <h3 className="text-base font-bold text-white">대표이사 / CEO</h3>
            <p className="text-xs text-slate-300 font-medium mt-0.5">총괄 기획 및 전략 이사회</p>
          </div>

          {/* Vertical Stem Line */}
          <div className="w-0.5 h-6 sm:h-8 bg-slate-300"></div>

          {/* Horizontal Distribution Bar for 5 Divisions */}
          <div className="hidden lg:block w-full max-w-6xl h-0.5 bg-slate-300 relative">
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></div>
            <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white shadow-sm"></div>
            <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-teal-500 border-2 border-white shadow-sm"></div>
            <div className="absolute left-[70%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-500 border-2 border-white shadow-sm"></div>
            <div className="absolute left-[90%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-500 border-2 border-white shadow-sm"></div>
          </div>
        </div>

        {/* Divisions Grid - 5 Cards with Unified Concept */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4">
          {DIVISIONS_DATA.map((div) => (
            <div 
              key={div.id} 
              id={div.id}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/90 hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Code Badge & Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border ${getBadgeStyle(div.code)}`}>
                    {div.code}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-50 group-hover:scale-110 transition-transform">
                    {getIcon(div.code)}
                  </div>
                </div>

                {/* Division Title & Description */}
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                  {div.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 min-h-[36px]">
                  {div.description}
                </p>
              </div>

              {/* Sub Teams Tag List */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {div.subCategories.map((sub, i) => (
                  <span key={i} className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md inline-flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

