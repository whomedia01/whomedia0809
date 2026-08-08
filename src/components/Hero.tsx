import React, { useState, useEffect, useRef } from 'react';
import { KEYWORDS } from '../data/portfolioData';
import { Play, ChevronDown, Video, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MosaicCardFlip } from './MosaicCardFlip';
import { ParticleBackground } from './ParticleBackground';

const BG_IMAGES = [
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=85',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=85',
  'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1920&q=85',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=85'
];

export const Hero: React.FC = () => {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const heroRef = useRef<HTMLElement>(null);

  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamically calculate staggerDelay and grid density for optimal mobile performance & FPS
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const staggerDelay = isMobile ? 24 : isTablet ? 18 : 12;
  const gridRows = isMobile ? 5 : isTablet ? 6 : 8;
  const gridCols = isMobile ? 6 : isTablet ? 8 : 10;

  useEffect(() => {
    const mainEl = document.querySelector('main');
    if (mainEl) {
      containerRef.current = mainEl;
    }
  }, []);

  // Parallax scroll hooks
  const { scrollYProgress } = useScroll({
    target: heroRef,
    container: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax offsets & opacity transformations
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0px', '90px']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const metricsY = useTransform(scrollYProgress, [0, 1], ['0px', '45px']);

  // Keyword rolling interval (2.8s)
  useEffect(() => {
    const keywordInterval = setInterval(() => {
      setCurrentKeywordIndex((prev) => (prev + 1) % KEYWORDS.length);
    }, 2800);

    return () => clearInterval(keywordInterval);
  }, []);

  // Background slider interval (4s)
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 4000);

    return () => clearInterval(bgInterval);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="about" 
      className="relative flex flex-col justify-center items-center w-full h-[100dvh] min-h-[100dvh] snap-start snap-always pt-16 sm:pt-20 pb-4 overflow-hidden bg-slate-950 text-white z-0 flex-shrink-0 box-border"
    >
      {/* Background Parallax Layer with Dynamic Mosaic Card Flip */}
      <motion.div 
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 origin-center opacity-30"
      >
        <ParticleBackground />

        <MosaicCardFlip
          images={BG_IMAGES}
          currentIndex={currentBgIndex}
          staggerDelay={staggerDelay}
          rows={gridRows}
          cols={gridCols}
        />

        {/* Background Video Loop Overlay using whomedia_hero.mp4 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <video
            className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0 opacity-40 mix-blend-screen"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          >
            <source src="https://raw.githubusercontent.com/whomedia01/whomedia4/main/whomedia_hero.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Radial Gradient & Grid Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-slate-950/80 to-slate-950 pointer-events-none z-0" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Main Vertically Centered Content Container with Parallax Effect */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-1 flex flex-col justify-center items-center py-2 sm:py-4"
      >
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-7 w-full my-auto">
          
          {/* Main Title & Dynamic Keyword Subheading */}
          <div className="space-y-2.5 sm:space-y-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.25] sm:leading-tight break-keep">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 font-black mb-1">
                이러닝 개발 · 영상 제작 · 홍보 마케팅
              </span>
              <span className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black block">
                성공을 이끄는 통합 솔루션
              </span>
            </h1>

            <p className="text-slate-200 text-xs sm:text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto px-2 break-keep">
              기획부터 제작·마케팅까지 원스톱으로, 귀사의 프로젝트를 완벽하게 이끕니다.
            </p>

            {/* Rolling Keyword Display */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 font-medium shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>주요 역량: </span>
              <span className="text-red-400 font-bold transition-all duration-300">
                {KEYWORDS[currentKeywordIndex]}
              </span>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 pt-1 sm:pt-2 w-full max-w-md sm:max-w-none mx-auto">
            <a
              href="#portfolio"
              className="flex-1 sm:flex-none px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-xl text-xs sm:text-sm md:text-base font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 shadow-xl shadow-red-900/30 hover:shadow-red-600/50 transition-all flex items-center justify-center gap-1.5 sm:gap-2 group active:scale-95"
            >
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white group-hover:scale-110 transition-transform" />
              <span>포트폴리오 보러가기</span>
            </a>
            <a
              href="#studio"
              className="flex-1 sm:flex-none px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-xl text-xs sm:text-sm md:text-base font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all flex items-center justify-center gap-1.5 sm:gap-2 backdrop-blur-md active:scale-95"
            >
              <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              <span>4K 스튜디오 투어</span>
            </a>
          </div>

          {/* Key Metrics Dashboard Card with Parallax */}
          <motion.div style={{ y: metricsY }} className="pt-2 sm:pt-4">
            <div className="p-3.5 sm:p-5 md:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-2xl max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-2 sm:gap-6 divide-x divide-slate-800/80">
                
                {/* Metric 1 */}
                <div className="flex flex-col items-center justify-center p-1 text-center">
                  <div className="text-xl sm:text-3xl md:text-4xl font-black text-white font-sans flex items-baseline justify-center gap-0.5 sm:gap-1">
                    <span>17</span>
                    <span className="text-xs sm:text-base font-bold text-emerald-400">년</span>
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-slate-300 font-bold mt-0.5 sm:mt-1">
                    축적의 노하우
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col items-center justify-center p-1 text-center">
                  <div className="text-xl sm:text-3xl md:text-4xl font-black text-white font-sans flex items-baseline justify-center gap-0.5 sm:gap-1">
                    <span>1,500</span>
                    <span className="text-xs sm:text-base font-bold text-emerald-400">+</span>
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-slate-300 font-bold mt-0.5 sm:mt-1">
                    성공적 프로젝트
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col items-center justify-center p-1 text-center">
                  <div className="text-base sm:text-2xl md:text-3xl font-black text-emerald-400 font-sans tracking-tight">
                    ALL-IN-ONE
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-slate-300 font-bold mt-0.5 sm:mt-1">
                    원스톱 통합 시스템
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <div className="pt-2 pb-4 sm:pb-6 z-10">
        <a
          href="#organization"
          className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors animate-bounce"
          aria-label="아래 섹션으로 스크롤"
        >
          <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase text-slate-400">SCROLL DOWN</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
