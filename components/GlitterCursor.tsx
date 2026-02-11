
import React, { useEffect } from 'react';

const GlitterCursor: React.FC = () => {
  useEffect(() => {
    const sparkles: HTMLElement[] = [];
    const numSparkles = 20;

    for (let i = 0; i < numSparkles; i++) {
      const sparkle = document.createElement('div');
      sparkle.style.position = 'absolute';
      sparkle.style.width = '8px';
      sparkle.style.height = '8px';
      sparkle.style.borderRadius = '50%';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.opacity = '0';
      sparkle.style.transition = 'opacity 0.5s, transform 0.5s';
      sparkle.style.zIndex = '9999';
      document.body.appendChild(sparkle);
      sparkles.push(sparkle);
    }

    let currentSparkle = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const sparkle = sparkles[currentSparkle];
      currentSparkle = (currentSparkle + 1) % numSparkles;
      
      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;
      
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.opacity = '1';
      sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
      sparkle.style.transform = 'scale(1)';

      setTimeout(() => {
        sparkle.style.opacity = '0';
        sparkle.style.transform = 'scale(0) translate(50px, -50px)';
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      sparkles.forEach(s => s.remove());
    };
  }, []);

  return null;
};

export default GlitterCursor;
