
import React, { useState, useRef, useCallback } from 'react';
import LandingScreen from './components/LandingScreen';
import MainContent from './components/MainContent';
import GlitterCursor from './components/GlitterCursor';
import FloatingHearts from './components/FloatingHearts';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = useCallback(() => {
    setIsOpened(true);

    if (audioRef.current) {
      // This is the most reliable way to handle browser autoplay policies.
      // We explicitly create and resume an AudioContext on the first user interaction.
      // This "unlocks" audio playback for the page.
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        const audioContext = new AudioContext();
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
      } catch (e) {
        console.error("Could not initialize AudioContext for autoplay:", e);
      }

      // Attempt to play the audio after unlocking the context.
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Audio playback was prevented by the browser:", error);
        });
      }
    }
    
    document.body.style.overflow = 'auto'; // Allow scrolling
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 text-gray-800 selection:bg-pink-300 selection:text-white">
      <GlitterCursor />
      <FloatingHearts />
      
      {/* Audio element - using a royalty-free placeholder */}
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/audio/2022/12/26/audio_1416999238.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {!isOpened ? (
        <LandingScreen onOpen={handleOpen} />
      ) : (
        <MainContent />
      )}
    </div>
  );
};

export default App;
