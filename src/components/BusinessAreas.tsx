import React from 'react';
import { BookOpen, Video, TrendingUp, Check } from 'lucide-react';

export const BusinessAreas: React.FC = () => {
  return (
    <section id="business" className="h-[100dvh] min-h-[100dvh] snap-start snap-always flex-shrink-0 flex flex-col justify-center items-center py-10 sm:py-16 bg-slate-900 border-b border-slate-800 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        {/* 전체 섹션 타이틀 영역 */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-extrabold text-cyan-400 tracking-wider uppercase mb-2 break-keep">
            (주)후미디어 3대 핵심 미디어 네트워크
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-snug break-keep">
            브랜드 가치를 높이는 가장 확실한 원스톱 솔루션
          </h2>
        </div>

        {/* 3단 하위 구조 영역 (PC 3 Columns, 모바일 1 Column) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: STEP 01 - 교육 컨설팅 */}
          <div className="relative group rounded-2xl overflow-hidden min-h-[360px] flex flex-col justify-between p-6 sm:p-7 border border-white/10 bg-slate-950/60 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-cyan-400/60 transition-all duration-500 text-white block break-keep">
            {/* Background Looping Video */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <video
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-40"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              >
                <source src="https://raw.githubusercontent.com/whomedia01/whomedia4/main/whomedia_hero.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Dark Dimming Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/50 group-hover:from-slate-950/95 group-hover:via-slate-950/80 transition-colors duration-500 z-10 pointer-events-none" />

            {/* Header Top Bar */}
            <div className="relative z-20 flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-cyan-500 text-slate-950 text-xs font-black rounded-lg tracking-wider uppercase shadow-md flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-950" />
                STEP 01
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-extrabold text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 px-3 py-1 rounded-full">
                ✔ 교육 컨설팅
              </span>
            </div>

            {/* Content Area */}
            <div className="relative z-20 pt-10">
              <div className="mb-3">
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                  체계적인 이러닝 설계
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-4">
                교육 목적과 타겟에 최적화된 맞춤형 교수설계 및 에듀테크 기반 커리큘럼을 구축합니다.
              </p>
              <ul className="space-y-2.5 border-t border-white/15 pt-4 text-xs font-medium text-slate-200">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>맞춤형 이러닝 콘텐츠 교수설계 및 개발</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>기업·공공 맞춤형 에듀테크 교육 과정 구축</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: STEP 02 - 브랜딩 */}
          <div className="relative group rounded-2xl overflow-hidden min-h-[360px] flex flex-col justify-between p-6 sm:p-7 border border-white/10 bg-slate-950/60 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-emerald-400/60 transition-all duration-500 text-white block break-keep">
            {/* Background Looping Video */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <video
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-35"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-student-working-on-a-laptop-in-a-library-42934-large.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Dark Dimming Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/50 group-hover:from-slate-950/95 group-hover:via-slate-950/80 transition-colors duration-500 z-10 pointer-events-none" />

            {/* Header Top Bar */}
            <div className="relative z-20 flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-emerald-500 text-slate-950 text-xs font-black rounded-lg tracking-wider uppercase shadow-md flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-slate-950" />
                STEP 02
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full">
                ✔ 브랜딩
              </span>
            </div>

            {/* Content Area */}
            <div className="relative z-20 pt-10">
              <div className="mb-3">
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                  압도적인 콘텐츠 구현
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-4">
                160평 4K 종합 스튜디오 인프라와 몰입감 높은 연출력으로 고품질 비주얼을 완성합니다.
              </p>
              <ul className="space-y-2.5 border-t border-white/15 pt-4 text-xs font-medium text-slate-200">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>4K 스튜디오 비주얼 촬영 및 3D 미디어 연출</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>브랜드 특화 맞춤 릴스 &amp; 시네마틱 홍보 영상</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: STEP 03 - 언론 홍보 */}
          <div className="relative group rounded-2xl overflow-hidden min-h-[360px] flex flex-col justify-between p-6 sm:p-7 border border-white/10 bg-slate-950/60 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-purple-400/60 transition-all duration-500 text-white block break-keep">
            {/* Background Looping Video */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <video
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-35"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-financial-charts-and-graphs-on-a-screen-41221-large.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Dark Dimming Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/50 group-hover:from-slate-950/95 group-hover:via-slate-950/80 transition-colors duration-500 z-10 pointer-events-none" />

            {/* Header Top Bar */}
            <div className="relative z-20 flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-purple-500 text-slate-950 text-xs font-black rounded-lg tracking-wider uppercase shadow-md flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-slate-950" />
                STEP 03
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-extrabold text-purple-300 bg-purple-950/80 border border-purple-500/30 px-3 py-1 rounded-full">
                ✔ 언론 홍보
              </span>
            </div>

            {/* Content Area */}
            <div className="relative z-20 pt-10">
              <div className="mb-3">
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-purple-300 transition-colors tracking-tight">
                  전략적인 마케팅 확산
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-4">
                디지털 언론 PR 및 타겟 마케팅 네트워크를 결합하여 대외 브랜드 신뢰도를 높입니다.
              </p>
              <ul className="space-y-2.5 border-t border-white/15 pt-4 text-xs font-medium text-slate-200">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>디지털 언론 기사 송출 &amp; 대외 브랜드 PR</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>SNS 및 타겟 바이럴 마케팅 원스톱 캠페인</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};






