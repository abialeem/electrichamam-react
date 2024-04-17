import React, { useState, useEffect } from 'react';

export default function TypingAnimation({ words, speed }){
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');

  // Typing effect
  useEffect(() => {
    if (index === words.length) setIndex(0);
    const word = words[index].substring(0, subIndex);
    setText(word);

    if (reverse) {
      if (subIndex === 0) {
        setReverse(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      } else {
        setTimeout(() => setSubIndex((prev) => prev - 1), speed);
      }
    } else {
      if (subIndex === words[index].length + 1) {
        setTimeout(() => setReverse(true), speed * 2);
      } else {
        setTimeout(() => setSubIndex((prev) => prev + 1), speed);
      }
    }
  }, [subIndex, index, reverse, words, speed]);

  return (
    <div className="TypingAnimation">
      <span>{text}</span>
      <span className="cursor">|</span>
    </div>
  );
};