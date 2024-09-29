import React, { useEffect } from 'react';
import './Background.css'; // Create this CSS file for the star styles

const Background = ({ starFieldWidth, starFieldHeight, noOfStars, speed }) => {
  useEffect(() => {
    addStars(starFieldWidth, starFieldHeight, noOfStars);
    animateStars(starFieldWidth, speed);
  }, [starFieldWidth, starFieldHeight, noOfStars, speed]);

  const addStars = (width, height, count) => {
    const starField = document.getElementById('star-field');

    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const topOffset = Math.floor(Math.random() * height);
      const leftOffset = Math.floor(Math.random() * width);
      star.style.top = `${topOffset}px`;
      star.style.left = `${leftOffset}px`;
      starField.appendChild(star);
    }
  };

  const animateStars = (width, speed) => {
    const starField = document.getElementById('star-field');
    const stars = starField.childNodes;

    const getStarColor = (index) => {
      if (index % 8 === 0) return 'red';
      if (index % 10 === 0) return 'yellow';
      if (index % 17 === 0) return 'blue';
      return 'white';
    };

    const getStarRelativeSpeed = (index) => {
      if (index % 6 === 0) return 1;
      if (index % 9 === 0) return 2;
      if (index % 2 === 0) return -1;
      return 0;
    };

    setInterval(() => {
      for (let i = 0; i < stars.length; i++) {
        stars[i].className = `star ${getStarColor(i)}`;

        let currentLeft = parseInt(stars[i].style.left, 10);
        let leftChangeAmount = speed + getStarRelativeSpeed(i);
        let leftDiff;

        if (currentLeft - leftChangeAmount < 0) {
          leftDiff = currentLeft - leftChangeAmount + width;
        } else {
          leftDiff = currentLeft - leftChangeAmount;
        }

        stars[i].style.left = `${leftDiff}px`;
      }
    }, 20);
  };

  return <div id="star-field" className="star-field"></div>;
};

export default Background;
