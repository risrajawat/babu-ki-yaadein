import React, { useEffect } from 'react';

const FloatingHearts = () => {
  useEffect(() => {
    const container = document.getElementById('floatingHearts');
    const heartCount = 20;
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.classList.add('absolute', 'text-pink-300');
      heart.innerHTML = '❤️';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animation = `float ${15 + Math.random() * 10}s linear infinite`;
      heart.style.fontSize = `${10 + Math.random() * 20}px`;
      heart.style.opacity = `${0.2 + Math.random() * 0.3}`;
      container.appendChild(heart);
    }
  }, []);

  return <div className="absolute top-0 left-0 w-full h-full -z-10" id="floatingHearts"></div>;
};

export default FloatingHearts;