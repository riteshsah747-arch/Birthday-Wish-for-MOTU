
import React from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';

const fullMessage = `Happy Birthday, Motu! 🎉❤️

Wishing you the happiest birthday, Motu. Today is such a special day, and I honestly feel thankful to Uncle and Aunty for bringing such an amazing person into this world — my little “pumps” who means so much to me.

Thank you for being a part of my life as such a supportive and caring sister. If I ever imagined having my own sister, I would want her to care for me, support me, love me, and even fight with me sometimes — just like you do. You’ve always been there, and that truly means a lot.

I wish you a future that is brighter than ever, full of success, good health, and a long, beautiful life — even longer than mine. May you always stay happy and keep smiling the way you do.

Once again, happy birthday. This is not just your birthday; it’s the beginning of another beautiful year of your life. A new chapter to grow, to dream bigger, and to achieve more. May God make this new year meaningful and fill it with endless joy and happiness.`;


const TypingMessage: React.FC = () => {
  const { displayedText, isTyping } = useTypingEffect(fullMessage, 30);

  return (
    <section className="w-full max-w-3xl bg-white/60 p-6 md:p-8 rounded-2xl shadow-lg backdrop-blur-sm">
      <p className="text-xl md:text-2xl text-gray-700 whitespace-pre-wrap leading-relaxed font-dancing-script">
        {displayedText}
        {isTyping && <span className="blinking-cursor">|</span>}
      </p>
    </section>
  );
};

export default TypingMessage;
