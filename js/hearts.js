// Floating Hearts Animation
(function() {
  'use strict';

  function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    if (!container) return;

    // Clear any existing hearts
    container.innerHTML = '';

    // Create 15 hearts with random properties
    const heartCount = 15;
    const sizes = ['small', 'medium', 'large'];
    const swayDirections = ['', 'sway-left', 'sway-right'];

    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';

      // Random size
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
      heart.classList.add(randomSize);

      // Random sway direction
      const randomSway = swayDirections[Math.floor(Math.random() * swayDirections.length)];
      if (randomSway) {
        heart.classList.add(randomSway);
      }

      // Random horizontal position
      const randomLeft = Math.random() * 100;
      heart.style.left = randomLeft + '%';

      // Random animation delay
      const randomDelay = Math.random() * 10;
      heart.style.animationDelay = randomDelay + 's';

      // Random animation duration (between 12-20 seconds)
      const randomDuration = 12 + Math.random() * 8;
      heart.style.animationDuration = randomDuration + 's';

      container.appendChild(heart);
    }
  }

  // Initialize hearts when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFloatingHearts);
  } else {
    createFloatingHearts();
  }

  // Recreate hearts periodically for continuous animation
  setInterval(function() {
    const container = document.getElementById('hearts-container');
    if (container && container.children.length < 15) {
      createFloatingHearts();
    }
  }, 20000); // Check every 20 seconds

})();
