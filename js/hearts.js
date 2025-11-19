// Floating Hearts and Butterflies Animation
(function() {
  'use strict';

  function createFloatingElements() {
    const container = document.getElementById('hearts-container');
    if (!container) return;

    // Clear any existing elements
    container.innerHTML = '';

    // Create 10 hearts and 4 butterflies
    const heartCount = 10;
    const butterflyCount = 2;
    const sizes = ['small', 'medium', 'large'];
    const swayDirections = ['', 'sway-left', 'sway-right'];

    // Create hearts
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

    // Create butterflies
    for (let i = 0; i < butterflyCount; i++) {
      const butterfly = document.createElement('div');
      butterfly.className = 'butterfly';

      // Random size
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
      butterfly.classList.add(randomSize);

      // Random sway direction
      const randomSway = swayDirections[Math.floor(Math.random() * swayDirections.length)];
      if (randomSway) {
        butterfly.classList.add(randomSway);
      }

      // Random horizontal position
      const randomLeft = Math.random() * 100;
      butterfly.style.left = randomLeft + '%';

      // Random animation delay
      const randomDelay = Math.random() * 10;
      butterfly.style.animationDelay = randomDelay + 's';

      // Random animation duration (between 14-22 seconds for different speed)
      const randomDuration = 14 + Math.random() * 8;
      butterfly.style.animationDuration = randomDuration + 's';

      container.appendChild(butterfly);
    }
  }

  // Initialize elements when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFloatingElements);
  } else {
    createFloatingElements();
  }

  // Recreate elements periodically for continuous animation
  setInterval(function() {
    const container = document.getElementById('hearts-container');
    if (container && container.children.length < 14) {
      createFloatingElements();
    }
  }, 20000); // Check every 20 seconds

})();
