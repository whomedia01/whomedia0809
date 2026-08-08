import React, { useEffect } from 'react';
import { X, ZoomIn, Camera, Info } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  imgUrl: string;
  title: string;
  description?: string;
  specs?: string[];
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imgUrl,
  title,
  description,
  specs,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imgUrl) return null;

  return (
    <div
      id="image-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
    >
      <div
        id="image-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white truncate">
                {title || '스튜디오 세트 상세'}
              </h3>
              <p className="text-xs text-slate-400">(주)후미디어 4K 스마트 스튜디오 시설</p>
            </div>
          </div>

          <button
            id="close-image-modal-btn"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
            aria-label="이미지 모달 닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Content */}
        <div className="relative w-full bg-slate-950 flex items-center justify-center overflow-hidden min-h-[300px] max-h-[60vh]">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-contain max-h-[60vh] rounded-b-none"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Description & Specs Footer */}
        <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-3">
          {description && (
            <p className="text-sm text-slate-300 leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>{description}</span>
            </p>
          )}

          {specs && specs.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {specs.map((spec, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                >
                  ⚡ {spec}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
