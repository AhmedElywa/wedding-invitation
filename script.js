// Set the wedding date - January 6, 2025 at 7:00 PM
const weddingDate = new Date('January 6, 2025 19:00:00').getTime();

// Update countdown every second
const countdownInterval = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the distance between now and wedding date
    const distance = weddingDate - now;
    
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = `
            <div class="countdown-message">
                <h2 style="color: #667eea; font-family: 'Great Vibes', cursive; font-size: 3em;">
                    We're Married! 💕
                </h2>
                <p style="font-size: 1.3em; color: #555; margin-top: 20px;">
                    Thank you for celebrating with us!
                </p>
            </div>
        `;
    }
}, 1000);

// Add animation on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections with slide-up class
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.slide-up');
    sections.forEach((section, index) => {
        // Don't hide the first slide-up section (countdown) - let it animate on load
        if (index > 0) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'all 0.8s ease-out';
            observer.observe(section);
        }
    });
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sparkle effect on hover (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    const createSparkle = (x, y) => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.position = 'fixed';
        sparkle.style.width = '5px';
        sparkle.style.height = '5px';
        sparkle.style.background = 'white';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkleAnim 1s ease-out forwards';
        sparkle.style.zIndex = '9999';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    };
    
    // Add sparkle animation style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleAnim {
            0% {
                opacity: 1;
                transform: scale(0) translateY(0);
            }
            100% {
                opacity: 0;
                transform: scale(2) translateY(-50px);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Optional: Add sparkles on mouse move over header
    const header = document.querySelector('.header');
    if (header) {
        header.addEventListener('mousemove', function(e) {
            if (Math.random() > 0.9) {
                createSparkle(e.clientX, e.clientY);
            }
        });
    }
});
