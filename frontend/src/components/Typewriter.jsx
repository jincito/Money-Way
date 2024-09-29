import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, typingSpeed = 150, deletingSpeed = 75, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const handleTyping = () => {
      if (!isDeleting && index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        setIndex(index - 1);
      }

      if (index === text.length && !isDeleting) {
        setIsDeleting(true);
        setPause(true);
        setTimeout(() => setPause(false), delay); // Delay before deleting
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
        setPause(true);
        setTimeout(() => setPause(false), delay); // Delay before re-typing
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, pause, text, typingSpeed, deletingSpeed, delay]);

  return <p>{displayedText}</p>;
};

const App = () => {
  return (
    <div>
    <Typewriter text="▼TAKE THE QUIZ▼"/>
    </div>
  );
};

export default App;