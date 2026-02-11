
import React from 'react';

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 15 }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 5 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      fontSize: `${Math.random() * 1.5 + 0.5}rem`, // 0.5rem to 2rem
    };
    return (
      <div key={i} className="heart absolute bottom-[-5vh] text-pink-400" style={style}>
        💖
      </div>
    );
  });

  return <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">{hearts}</div>;
};

export default FloatingHearts;
