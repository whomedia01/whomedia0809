import React, { useState, useEffect } from 'react';

export interface MosaicCardFlipProps {
  images: string[];
  currentIndex: number;
  staggerDelay?: number;
  rows?: number;
  cols?: number;
}

export const MosaicCardFlip: React.FC<MosaicCardFlipProps> = ({
  images,
  currentIndex,
  staggerDelay = 12,
  rows = 8,
  cols = 10,
}) => {
  const [prevIndex, setPrevIndex] = useState(currentIndex);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (currentIndex !== prevIndex) {
      setIsFlipped(true);
      const totalTiles = rows + cols;
      const maxDelay = totalTiles * staggerDelay + 700;

      const timer = setTimeout(() => {
        setPrevIndex(currentIndex);
        setIsFlipped(false);
      }, maxDelay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, prevIndex, rows, cols, staggerDelay]);

  const currentImg = images[currentIndex % images.length];
  const previousImg = images[prevIndex % images.length];

  const totalTiles = rows * cols;
  const tiles = Array.from({ length: totalTiles });

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      <div
        className="w-full h-full grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {tiles.map((_, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;

          // Diagonal delay wave calculation
          const delay = (r + c) * staggerDelay;

          const bgPosX = cols > 1 ? (c / (cols - 1)) * 100 : 50;
          const bgPosY = rows > 1 ? (r / (rows - 1)) * 100 : 50;
          const bgSize = `${cols * 100}% ${rows * 100}%`;

          return (
            <div
              key={`${r}-${c}`}
              className="relative w-full h-full [perspective:1000px]"
            >
              <div
                className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 ease-in-out"
                style={{
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transitionDelay: `${delay}ms`,
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 w-full h-full [backface-visibility:hidden]"
                  style={{
                    backgroundImage: `url('${previousImg}')`,
                    backgroundPosition: `${bgPosX}% ${bgPosY}%`,
                    backgroundSize: bgSize,
                  }}
                />
                {/* Back Side */}
                <div
                  className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  style={{
                    backgroundImage: `url('${currentImg}')`,
                    backgroundPosition: `${bgPosX}% ${bgPosY}%`,
                    backgroundSize: bgSize,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MosaicCardFlip;
