// Custom particle and animation effects

$(document).ready(function() {

  // Create floating hearts
  function createFloatingHeart() {
    const heart = $('<div class="floating-heart">❤</div>');
    const startX = Math.random() * $(window).width();
    const duration = 3000 + Math.random() * 2000;
    const size = 20 + Math.random() * 20;

    heart.css({
      position: 'fixed',
      left: startX + 'px',
      bottom: '-50px',
      fontSize: size + 'px',
      color: 'rgba(255, 182, 193, 0.7)',
      zIndex: '999',
      pointerEvents: 'none',
      textShadow: '0 0 10px rgba(255, 182, 193, 0.5)'
    });

    $('body').append(heart);

    heart.animate({
      bottom: $(window).height() + 50,
      left: startX + (Math.random() * 200 - 100)
    }, duration, 'linear', function() {
      $(this).remove();
    });
  }

  // Generate floating hearts periodically - reduced frequency
  setInterval(createFloatingHeart, 3000);

  // Removed sparkle effect for cleaner look

  // Smooth scroll with easing
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));

    if(target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 80
      }, 1000, 'easeInOutCubic');
    }
  });

  // Removed parallax effect to prevent section overlap

  // Countdown number animation
  if ($('.clock').length) {
    $('.clock').on('DOMSubtreeModified', function() {
      $(this).addClass('pulse-animation');
      setTimeout(() => {
        $(this).removeClass('pulse-animation');
      }, 300);
    });
  }

  // Add hover effect to event cards
  $('.event-wrap').hover(
    function() {
      $(this).find('h3').addClass('animated-heading');
    },
    function() {
      $(this).find('h3').removeClass('animated-heading');
    }
  );

  // Animate elements on scroll
  function animateOnScroll() {
    $('.animate-box').each(function() {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass('visible-element');
      }
    });
  }

  $(window).on('scroll', animateOnScroll);
  animateOnScroll(); // Initial check

  // Add confetti effect on button click
  $('.btn-default').on('click', function(e) {
    createConfetti(e.pageX, e.pageY);
  });

  function createConfetti(x, y) {
    const colors = ['#ff6b9d', '#c44569', '#ea8685', '#ffc3a0'];

    for (let i = 0; i < 30; i++) {
      const confetti = $('<div class="confetti"></div>');
      const color = colors[Math.floor(Math.random() * colors.length)];
      const angle = Math.random() * Math.PI * 2;
      const velocity = 100 + Math.random() * 100;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;

      confetti.css({
        position: 'fixed',
        left: x + 'px',
        top: y + 'px',
        width: '8px',
        height: '8px',
        background: color,
        borderRadius: Math.random() > 0.5 ? '50%' : '0',
        pointerEvents: 'none',
        zIndex: '9999'
      });

      $('body').append(confetti);

      confetti.animate({
        left: x + vx + 'px',
        top: y + vy + 'px',
        opacity: 0
      }, 1000 + Math.random() * 500, function() {
        $(this).remove();
      });
    }
  }

  // Add typing effect to the message (optional - can be removed if too much)
  function typeWriter(element, text, speed) {
    let i = 0;
    element.html('');

    function type() {
      if (i < text.length) {
        element.html(element.html() + text.charAt(i));
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  // Uncomment to enable typing effect
  // const messageElement = $('#fh5co-header h2:last-of-type');
  // const messageText = messageElement.text();
  // typeWriter(messageElement, messageText, 50);

});

// Additional CSS for animations via JavaScript
$('<style>')
  .prop('type', 'text/css')
  .html(`
    .pulse-animation {
      animation: pulse-scale 0.3s ease;
    }

    @keyframes pulse-scale {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    .animated-heading {
      animation: wiggle 0.5s ease;
    }

    @keyframes wiggle {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(2deg); }
      75% { transform: rotate(-2deg); }
    }

    .visible-element {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `)
  .appendTo('head');
