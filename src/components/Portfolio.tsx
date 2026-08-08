import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/companyData';
import { PORTFOLIO_CATEGORIES } from '../data/portfolioData';
import { PortfolioCategory, PortfolioItem } from '../types';
import { Play, X, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('all');
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredItems = activeTab === 'all' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(item => item.cat === activeTab);

  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <section id="portfolio" className="h-[100dvh] min-h-[100dvh] snap-start snap-always flex-shrink-0 flex flex-col justify-center items-center py-12 sm:py-16 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 shadow-2xs">
            PORTFOLIO
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-3">
            콘텐츠 개발 &amp; 통합 미디어 포트폴리오
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            교육 컨설팅부터 4K 미디어 프로덕션, 후캠퍼스 평생교육, 디지털 언론 PR까지 (주)후미디어의 주요 수행 사례입니다.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              id={`tab-${cat.id}`}
              onClick={() => {
                setActiveTab(cat.id);
                setVisibleCount(8);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid Cards with Fade In/Out Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                onClick={() => setSelectedVideo(item)}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-slate-900 overflow-hidden">
                    <img
                      src={item.imageUrl || `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                      alt={item.title}
                      onError={(e) => {
                        // Fallback image if youtube thumbnail fails
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    {/* Category Tag Badge */}
                    <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                      {item.label}
                    </div>

                    {/* Client Tag */}
                    <div className="absolute top-2.5 right-2.5 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                      {item.tag}
                    </div>

                    {/* Play Button Icon Overlay */}
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-blue-600 group-hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors mb-1.5">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-4 pb-4 flex items-center justify-between text-[11px] text-slate-500 pt-2.5 border-t border-slate-100/80">
                  <span className="font-semibold text-slate-700">{item.tag}</span>
                  <span className="text-slate-400 font-mono text-[10px]">{item.duration || '03:30'}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-6 py-3 rounded-full transition-colors border border-slate-300 shadow-xs"
            >
              <span>더보기</span>
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="p-4 bg-slate-950 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {selectedVideo.label}
                </span>
                <h3 className="text-sm font-bold text-white truncate max-w-md">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-slate-400 hover:text-white p-1 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {selectedVideo.description && (
              <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300">
                <p className="font-semibold text-white mb-1">고객사: {selectedVideo.tag}</p>
                <p>{selectedVideo.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
