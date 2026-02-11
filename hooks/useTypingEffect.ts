
import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, speed: number = 50, startDelay: number = 1000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    setIsTyping(true);

    const startTimeout = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    }, startDelay);
    
    return () => clearTimeout(startTimeout);

  }, [text, speed, startDelay]);

  return { displayedText, isTyping };
};
