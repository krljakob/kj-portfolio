# Karl Jakob Portfolio

Terminal-inspired static portfolio website built with vanilla HTML, CSS, and JavaScript.

## Overview

Single-page application featuring a retro terminal aesthetic with smooth animations and responsive design. No build tools, no frameworks, no dependencies.

## Quick Start

```bash
# Clone and open directly
git clone https://github.com/krljakob/kj-portfolio
cd kj-portfolio
open index.html

# Or serve locally
python -m http.server 8000
# Visit http://localhost:8000
```

## Features

- Dark/light theme toggle with localStorage persistence
- Smooth scroll navigation with active section highlighting
- Terminal window UI components throughout
- Typing animations and scroll-triggered reveals
- Fully responsive design
- Performance optimized with passive listeners and cached calculations

## Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS custom properties, Gruvbox-inspired color scheme
- **Typography**: Fira Code monospace font
- **Deployment**: Vercel (no build step required)

## File Structure

```
├── fonts/                 # Self-hosted Fira Code fonts
├── index.html            # Single-page application
├── styles.css            # Complete styling system
├── script.js             # Navigation and interactions
├── resume.md             # Resume source content
└── CLAUDE.md             # Development guidelines
```

## Customization

Edit colors by modifying CSS variables in `styles.css:1-15`. Update content directly in `index.html` sections for projects, skills, and experience.

## Performance

- Single HTML file with inlined critical CSS
- Preloaded fonts with `font-display: optional`
- IntersectionObserver for efficient scroll animations
- Cached section offsets to prevent layout thrashing
- Passive event listeners on scroll/resize
