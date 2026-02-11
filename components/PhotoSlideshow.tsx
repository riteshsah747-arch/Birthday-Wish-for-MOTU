
import React, { useState, useEffect } from 'react';

const images = [
  'https://picsum.photos/seed/motu1/800/600',
  'https://picsum.photos/seed/motu2/800/600',
  'https://picsum.photos/seed/motu3/800/600',
  'https://picsum.photos/seed/motu4/800/600',
  'https://picsum.photos/seed/motu5/800/600',
];

const PhotoSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full max-w-2xl aspect-w-4 aspect-h-3 rounded-2xl shadow-2xl p-2 bg-white/50">
      <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(236,72,153,0.5)] animate-pulse"></div>
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Memory ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default PhotoSlideshow;
