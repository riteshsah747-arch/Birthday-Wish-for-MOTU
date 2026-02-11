
import React from 'react';
import PhotoSlideshow from './PhotoSlideshow';
import TypingMessage from './TypingMessage';
import CakeSection from './CakeSection';

const MainContent: React.FC = () => {
  return (
    <div className="animate-fade-in p-4 md:p-8 lg:p-12 w-full max-w-5xl mx-auto">
      <header className="text-center my-8 md:my-12">
        <h1 className="text-5xl md:text-7xl font-bold text-pink-600" style={{ textShadow: '2px 2px 10px rgba(219, 39, 119, 0.4)'}}>
          Happy Birthday, Motu!
        </h1>
      </header>
      
      <main className="flex flex-col gap-12 md:gap-16 items-center">
        <PhotoSlideshow />
        <TypingMessage />
        <CakeSection />
      </main>

      <footer className="text-center mt-16 pb-8">
        <p className="text-pink-500 text-lg font-pacifico">Made with Love ❤️</p>
      </footer>
    </div>
  );
};

export default MainContent;
