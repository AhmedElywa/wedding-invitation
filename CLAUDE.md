# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static wedding invitation website for Mahmoud & Nouran's wedding on January 6, 2026. The site features a countdown timer, event details, background music, and animated visual effects.

## Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, and JavaScript (jQuery-based)
- **No Build System**: This is a static website with no build process required
- **Deployment**: GitHub Pages (https://dev-mahmoud-elshenawy.github.io/wedding-invitation)

## Development Commands

### Running Locally
```bash
# No server required - open directly in browser
open index.html

# Or use a simple HTTP server for testing
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

### Deployment
The site auto-deploys to GitHub Pages when changes are pushed to the main branch.

## Code Architecture

### File Structure
```
/
├── index.html              # Envelope landing page (entry point)
├── invitation.html         # Main invitation page with event details
├── script.js              # Custom countdown and interaction logic
├── style.css              # Custom styling (legacy, not actively used)
├── css/
│   ├── envelope.css       # Envelope landing page styles
│   ├── style.css          # Main theme styles for invitation page
│   ├── custom-animations.css  # Custom animation definitions
│   ├── responsive-clock.css   # FlipClock countdown styles
│   └── [vendor CSS files]
├── js/
│   ├── envelope.js        # Envelope animation and navigation logic
│   ├── main.js            # Core site functionality (scroll, navigation, music)
│   ├── clock.js           # FlipClock countdown initialization
│   └── [vendor JS files]
├── images/
│   ├── bg-2.jpg           # Background image for index.html and invitation page
│   └── [other images]
└── music.mp3              # Background music audio file
```

### Key Components

**1. Envelope Landing Page (index.html)**

- Animated envelope that opens on click to reveal wedding details
- [envelope.js](js/envelope.js) - Handles envelope opening animation, floating hearts, and page navigation
- [css/envelope.css](css/envelope.css) - Complete styling for envelope page with blue gradient background and gold accents
- Color scheme: Blue background (#9FC3E5, #7DB3DD, #C1D9EE) with gold accents (#CBA62E, #E5C158)
- Key animations: envelope shake, letter slide-out, wax seal break, sparkle effects
- Transition timing: 2 seconds for envelope animation + 0.5s fade + 0.5s navigation = ~3 seconds total
- On click, navigates to [invitation.html](invitation.html)

**2. Background Music Continuity System**

- Music starts on [index.html](index.html) with first user interaction (click, touch, scroll, mousemove)
- [index.html:34-70](index.html#L34-L70) - Auto-start music script, saves playback time to sessionStorage every 100ms
- [js/envelope.js:43-66](js/envelope.js#L43-L66) - Continuously updates music time during envelope animation (every 50ms)
- [invitation.html:77-129](invitation.html#L77-L129) - Resumes music from exact saved position on page load
- Uses sessionStorage to maintain music state and playback position across page navigation
- Multiple fallback strategies for browser autoplay restrictions

**3. Countdown Timer System (invitation.html)**

- [clock.js](js/clock.js) - FlipClock library countdown (displays in header, targets "2026-01-06 12:00" Africa/Cairo timezone)
- [script.js](script.js:1-38) - Custom countdown implementation (legacy/alternative)

**4. Scroll Animations (invitation.html)**

- [main.js:85-119](js/main.js#L85-L119) - Waypoints-based animations for `.animate-box` elements
- [script.js:41-67](script.js#L41-L67) - IntersectionObserver for `.slide-up` elements
- Animations trigger when elements enter viewport with configurable offsets

**5. Navigation & UX (invitation.html)**

- [main.js:218-235](js/main.js#L218-L235) - Smooth scroll for anchor links
- [main.js:159-183](js/main.js#L159-L183) - "Go to top" button functionality
- [main.js:5-63](js/main.js#L5-L63) - Mobile offcanvas menu

### Important Configuration Points

**Wedding Date Settings**

- Main countdown: [clock.js:8](js/clock.js#L8) - `moment.tz("2026-01-06 12:00", "Africa/Cairo")`
- HTML display on invitation page shows "06.01.2026"
- Event location: High Level - Sindbad Village

**Color Scheme**

- Background colors: #9FC3E5 (main blue), #7DB3DD (darker), #C1D9EE (lighter)
- Accent color: #CBA62E (gold), #E5C158 (lighter gold), #F5D56E (lightest gold)
- Letter/envelope: Cream/off-white (#fffef9, #fffcf0, #fffdf5)

**Social Media / OG Tags**

- [index.html:11-19](index.html#L11-L19) - Open Graph meta tags for sharing
- Image dimensions optimized for WhatsApp (300x300px max)
- URL: <https://dev-mahmoud-elshenawy.github.io/wedding-invitation>

### Dependencies

**External CDN Libraries**

- jQuery 3.x (local: js/jquery.min.js)
- Bootstrap 3.x (local: js/bootstrap.min.js, css/bootstrap.css)
- FlipClock 0.7.8 (CDN) - used on invitation.html
- Moment.js + Moment Timezone (CDN) - used on invitation.html
- Owl Carousel 2.x (local)
- Magnific Popup (local)
- Waypoints (local)
- Animate.css (local)

**Google Fonts**

- Great Vibes (decorative script for envelope page)
- Playfair Display (serif for dates and formal text)
- Lato (sans-serif body text)
- Work Sans (body text on invitation page)
- Sacramento (decorative script on invitation page)
- Engagement (decorative)
- Sofia Sans Condensed

## Common Gotchas

1. **Multiple Music Autoplay Implementations**: There are THREE separate music autoplay handlers (inline script, main.js, and script.js). Consider consolidating to avoid conflicts.

2. **Date Inconsistency**: [clock.js](js/clock.js) uses 2026, but [script.js](script.js) uses 2025. Verify the correct wedding date.

3. **Redundant Style Files**: Both `style.css` (root) and `css/style.css` exist. The root one appears legacy.

4. **Floating Hearts**: Code exists in [js/hearts.js](js/hearts.js) and referenced in HTML but is commented out ([index.html:169](index.html#L169)).

5. **No Build Process**: Direct file editing - changes are immediately reflected. Be careful with formatting in minified vendor files.

6. **Browser Autoplay Policies**: The music autoplay logic is complex because browsers block autoplay. Test across Chrome, Safari, Firefox, and mobile browsers when modifying music behavior.

## Modifying Content

**Event Details**: Edit [index.html:212-228](index.html#L212-L228) for ceremony time, location, and Google Maps embed.

**Countdown Target**: Update [js/clock.js:8](js/clock.js#L8) with the correct target date/time and timezone.

**Background Music**: Replace [music.mp3](music.mp3) (currently ~1.6MB). Keep file size reasonable for mobile users.

**Images**: Main background is [images/bg-2.jpg](images/bg-2.jpg). Gallery images in [index.html:250-267](index.html#L250-L267) (mostly commented out).

**Arabic Quote**: The Islamic blessing is at [index.html:244-245](index.html#L244-L245) - uses right-to-left styling.
