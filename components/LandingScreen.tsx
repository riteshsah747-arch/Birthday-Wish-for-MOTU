
import React from 'react';

interface LandingScreenProps {
  onOpen: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onOpen }) => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <button
        onClick={onOpen}
        className="font-pacifico text-2xl md:text-4xl text-white px-8 py-4 md:px-12 md:py-6 bg-pink-500 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none animate-pulse-glow"
      >
        Open for Motu 💖
      </button>
    </div>
  );
};

export default LandingScreen;
