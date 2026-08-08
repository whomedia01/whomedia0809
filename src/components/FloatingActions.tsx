import React, { useState, useEffect } from 'react';
import { Phone, Send, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Phone Call Floating Button */}
      <a
        href="tel:02-1234-5678"
        className="pointer-events-auto p-3.5 rounded-full bg-slate-900 border border-slate-700 text-white shadow-xl hover:scale-110 transition-transform hover:border-red-500 group flex items-center gap-2"
        title="전화 상담 연결 (02-1234-5678)"
      >
        <Phone className="w-5 h-5 text-red-500 group-hover:animate-bounce" />
        <span className="hidden sm:inline text-xs font-bold pr-1">02-1234-5678</span>
      </a>

      {/* Quick Inquiry Floating Button */}
      <a
        href="#contact"
        className="pointer-events-auto px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs shadow-xl shadow-red-600/30 hover:scale-105 transition-all flex items-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span>빠른 제작 문의</span>
      </a>

      {/* Scroll to top button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-slate-950/90 border border-slate-800 text-slate-400 hover:text-white hover:border-red-500/50 shadow-xl transition-all"
          aria-label="맨 위로 스크롤"
        >
          <ArrowUp className="w-4 h-4 text-red-500" />
        </button>
      )}

    </div>
  );
};
