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
├── index.html              # Main HTML page
├── script.js              # Custom countdown and interaction logic
├── style.css              # Custom styling (legacy, not actively used)
├── css/
│   ├── style.css          # Main theme styles
│   ├── custom-animations.css  # Custom animation definitions
│   ├── responsive-clock.css   # FlipClock countdown styles
│   └── [vendor CSS files]
├── js/
│   ├── main.js            # Core site functionality (scroll, navigation, music)
│   ├── clock.js           # FlipClock countdown initialization
│   └── [vendor JS files]
└── music.mp3              # Background music audio file
```

### Key Components

**1. Countdown Timer System (Dual Implementation)**
- [clock.js](js/clock.js) - FlipClock library countdown (displays in header, targets "2026-01-06 12:00" Africa/Cairo timezone)
- [script.js](script.js:1-38) - Custom countdown implementation (appears to be legacy/alternative, targets "2025-01-06 20:00" local time)
- Note: There's a date discrepancy between the two implementations that should be verified

**2. Background Music Autoplay**
- [index.html:76-166](index.html#L76-L166) - Inline autoplay script with multiple fallback strategies
- [main.js:252-296](js/main.js#L252-L296) - jQuery-based music autoplay (appears redundant)
- [script.js:131-175](script.js#L131-L175) - Window load music handler (appears redundant)
- Uses multiple user interaction triggers (scroll, click, touch, wheel, keydown) to overcome browser autoplay restrictions
- Audio starts muted and unmutes on first real user gesture (30px scroll threshold)

**3. Scroll Animations**
- [main.js:85-119](js/main.js#L85-L119) - Waypoints-based animations for `.animate-box` elements
- [script.js:41-67](script.js#L41-L67) - IntersectionObserver for `.slide-up` elements
- Animations trigger when elements enter viewport with configurable offsets

**4. Navigation & UX**
- [main.js:218-235](js/main.js#L218-L235) - Smooth scroll for anchor links
- [main.js:159-183](js/main.js#L159-L183) - "Go to top" button functionality
- [main.js:5-63](js/main.js#L5-L63) - Mobile offcanvas menu (currently not used in visible UI)

### Important Configuration Points

**Wedding Date Settings**
- Main countdown: [clock.js:8](js/clock.js#L8) - `moment.tz("2026-01-06 12:00", "Africa/Cairo")`
- HTML display: [index.html:182](index.html#L182) - Shows "06.01.2026"
- Legacy script: [script.js:2](script.js#L2) - `January 6, 2025 20:00:00` (inconsistent!)

**Social Media / OG Tags**
- [index.html:18-30](index.html#L18-L30) - Open Graph meta tags for sharing
- Image dimensions optimized for WhatsApp (300x300px max)
- URL: https://dev-mahmoud-elshenawy.github.io/wedding-invitation

### Dependencies

**External CDN Libraries**
- jQuery 3.x (local: js/jquery.min.js)
- Bootstrap 3.x (local: js/bootstrap.min.js, css/bootstrap.css)
- FlipClock 0.7.8 (CDN)
- Moment.js + Moment Timezone (CDN)
- Owl Carousel 2.x (local)
- Magnific Popup (local)
- Waypoints (local)
- jQuery Stellar (parallax - currently disabled)
- Animate.css (local)

**Google Fonts**
- Work Sans (body text)
- Sacramento (decorative script)
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
