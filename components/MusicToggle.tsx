
import React from 'react';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicToggle: React.FC<MusicToggleProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 bg-white/50 backdrop-blur-sm text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-white/80 transition"
    >
      {isPlaying ? '🔊' : '🔇'}
    </button>
  );
};

export default MusicToggle;
