import React, { useState } from 'react';
import { STUDIO_GALLERY } from '../data/companyData';
import { StudioGalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export const StudioGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<StudioGalleryItem | null>(null);

  const scrollToContact = () => {
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const nextImage = () => {
    if (!activeItem) return;
    const idx = STUDIO_GALLERY.findIndex(g => g.id === activeItem.id);
    const nextIdx = (idx + 1) % STUDIO_GALLERY.length;
    setActiveItem(STUDIO_GALLERY[nextIdx]);
  };

  const prevImage = () => {
    if (!activeItem) return;
    const idx = STUDIO_GALLERY.findIndex(g => g.id === activeItem.id);
    const prevIdx = (idx - 1 + STUDIO_GALLERY.length) % STUDIO_GALLERY.length;
    setActiveItem(STUDIO_GALLERY[prevIdx]);
  };

  return (
    <section id="gallery" className="h-[100dvh] min-h-[100dvh] snap-start snap-always flex-shrink-0 flex flex-col justify-center items-center py-12 sm:py-16 bg-slate-900 text-white border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-red-500 tracking-wider uppercase bg-red-950/60 border border-red-800/40 px-3 py-1 rounded-full">
              STUDIO / RENT GALLERY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
              160평 최첨단 스튜디오 & 제작 환경 갤러리
            </h2>
          </div>

          <button
            onClick={scrollToContact}
            className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors flex items-center space-x-2 shadow-lg flex-shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>스튜디오 임대 문의</span>
          </button>
        </div>

        {/* 8 Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {STUDIO_GALLERY.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 cursor-pointer aspect-video hover:border-red-500 transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-md text-red-400 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700">
                {item.tag}
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                <span className="text-xs font-bold text-white truncate pr-2">
                  {item.title}
                </span>
                <span className="p-1 rounded-full bg-slate-800/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800/80"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white p-2 rounded-full bg-slate-800/80"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white p-2 rounded-full bg-slate-800/80"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <div className="relative aspect-video max-h-[70vh] bg-black">
              <img
                src={activeItem.url}
                alt={activeItem.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <span className="text-xs font-bold text-red-400 bg-red-950 px-2.5 py-1 rounded border border-red-800/50">
                  {activeItem.tag}
                </span>
                <h3 className="text-lg font-bold text-white mt-2">{activeItem.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{activeItem.description}</p>
              </div>

              <button
                onClick={() => {
                  setActiveItem(null);
                  scrollToContact();
                }}
                className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex-shrink-0"
              >
                이 스튜디오 대여 문의
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
