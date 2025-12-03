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

        // Start music playback and store in sessionStorage
        const audio = document.getElementById('bg-music');
        if (audio) {
            audio.play().catch(e => console.log('Audio play failed', e));
            sessionStorage.setItem('musicStarted', 'true');
        }

        // Add opening animation class
        envelopeWrapper.classList.add('opening');

        // Continuously update music time during animation
        const updateInterval = setInterval(function() {
            if (audio && !audio.paused) {
                sessionStorage.setItem('musicTime', audio.currentTime.toString());
            }
        }, 50); // Update every 50ms for smooth transition

        // Wait for animation to complete, then navigate
        setTimeout(function() {
            // Final save of current music time before navigating
            clearInterval(updateInterval);
            if (audio && !audio.paused) {
                sessionStorage.setItem('musicTime', audio.currentTime.toString());
            }

            // Fade out effect
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '0';

            // Navigate to main invitation
            setTimeout(function() {
                window.location.href = 'invitation.html';
            }, 500);
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
