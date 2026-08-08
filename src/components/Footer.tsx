import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs snap-end flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 border-b border-slate-800 gap-6">
          {/* Logo */}
          <div>
            <span className="text-2xl font-black tracking-tight text-white block mb-2 font-sans">
              <span>HOO</span>
              <span className="text-red-500">MEDIA</span>
            </span>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              최첨단 160평 스튜디오 인프라와 4K 전문 멀티미디어 제작 노하우로 최상의 교육 및 방송 콘텐츠를 기획·제작합니다.
            </p>
          </div>

          {/* Quick Contact Badge */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 px-3.5 py-2 rounded-lg border border-slate-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 px-3.5 py-2 rounded-lg border border-slate-800 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-500" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Legal & Address Info */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-slate-500">
          <div className="space-y-1">
            <p>
              <strong className="text-slate-300 font-bold">{COMPANY_INFO.name}</strong> | 대표이사: {COMPANY_INFO.ceo} | 사업자등록번호: {COMPANY_INFO.bizNum}
            </p>
            <p className="flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-slate-500 inline" />
              <span>{COMPANY_INFO.address}</span>
            </p>
          </div>

          <p className="text-[11px] text-slate-600">
            © 2026 HOOMEDIA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
