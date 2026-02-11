
import React, { useState } from 'react';

const ConfettiPiece: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute w-2 h-2 rounded-full confetti"
    style={style}
  ></div>
);

const CakeSection: React.FC = () => {
  const [isCut, setIsCut] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCakeClick = () => {
    if (!isCut) {
      setIsCut(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000); // Clean up confetti elements
    }
  };

  const confettiPieces = Array.from({ length: 50 }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
      animationDelay: `${Math.random() * 0.2}s`,
      transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg) scale(1)`,
    };
    return <ConfettiPiece key={i} style={style} />;
  });

  return (
    <section className="text-center flex flex-col items-center gap-4">
      <div className="relative">
        <div 
          className="text-7xl md:text-9xl cursor-pointer transition-transform transform hover:scale-110"
          onClick={handleCakeClick}
        >
          {isCut ? '🍰' : '🎂'}
        </div>
        {showConfetti && <div className="absolute inset-0">{confettiPieces}</div>}
      </div>
      <p className={`text-3xl md:text-4xl font-pacifico text-pink-500 transition-opacity duration-500 ${isCut ? 'opacity-100' : 'opacity-0'}`} style={{textShadow: '1px 1px 5px rgba(219, 39, 119, 0.3)'}}>
        Make a wish, Motu 💫
      </p>
    </section>
  );
};

export default CakeSection;
