// Create floating hearts
function createFloatingHearts() {
    const heartsContainer = document.getElementById('hearts-background');
    const numberOfHearts = 15;

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';

        // Random positioning
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.animationDuration = (12 + Math.random() * 8) + 's';

        // Random size variation
        const size = 15 + Math.random() * 10;
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';

        heartsContainer.appendChild(heart);
    }
}

// Envelope opening logic
function initEnvelope() {
    const envelopeWrapper = document.getElementById('envelope');
    let isOpening = false;

    envelopeWrapper.addEventListener('click', function() {
        if (isOpening) return;
        isOpening = true;

        // Start music playback
        const audio = document.getElementById('bg-music');
        if (audio) {
            audio.play().catch(e => console.log('Audio play failed', e));
        }

        // Add opening animation class
        envelopeWrapper.classList.add('opening');

        // Wait for animation to complete, then transition
        setTimeout(function() {
            // Fade out envelope container
            const envelopeContainer = document.getElementById('envelope-container');
            envelopeContainer.style.transition = 'opacity 0.8s ease';
            envelopeContainer.style.opacity = '0';

            // Transition to main invitation
            setTimeout(function() {
                envelopeContainer.style.display = 'none';
                
                // Show main invitation
                const mainInvitation = document.getElementById('main-invitation');
                mainInvitation.style.display = 'block';
                mainInvitation.style.opacity = '0';
                
                // Change body background to white (or whatever style.css defines)
                // We can remove the envelope specific body styles by adding a class
                document.body.classList.add('invitation-active');
                
                // Trigger reflow
                void mainInvitation.offsetWidth;
                
                mainInvitation.style.transition = 'opacity 1s ease';
                mainInvitation.style.opacity = '1';
                
                // Trigger scroll events to initialize animations if needed
                window.dispatchEvent(new Event('scroll'));
                window.dispatchEvent(new Event('resize'));
                
            }, 800);
        }, 1500); // Wait for envelope open animation
    });

    // Add hover effect hint
    envelopeWrapper.addEventListener('mouseenter', function() {
        if (!isOpening) {
            const clickHint = document.querySelector('.click-hint');
            if (clickHint) {
                clickHint.style.color = '#667eea';
                clickHint.style.fontWeight = 'bold';
            }
        }
    });

    envelopeWrapper.addEventListener('mouseleave', function() {
        if (!isOpening) {
            const clickHint = document.querySelector('.click-hint');
            if (clickHint) {
                clickHint.style.color = '#999';
                clickHint.style.fontWeight = 'normal';
            }
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    initEnvelope();

    // Fade in body
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
