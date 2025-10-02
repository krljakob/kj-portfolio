# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for Karl Jakob with a terminal-inspired design theme. Single-page application built with vanilla HTML, CSS, and JavaScript - no build tools, no frameworks, no dependencies.

**Tech Stack:**
- Vanilla HTML5, CSS3, JavaScript (ES6+)
- Fira Code font family for terminal aesthetic
- No package manager, no build process, no npm/node dependencies

## Development Commands

### Running Locally
```bash
# open directly in browser
open index.html

# or use a local server (optional)
python -m http.server 8000
# then visit http://localhost:8000

# or with node/bun
npx serve .
bun --hot index.html
```

No build, compile, or watch commands needed - edit files and refresh browser.

## Architecture

### Core Design Pattern: Terminal Window Component
Every section uses a repeating terminal window structure:

```html
<div class="terminal-window" data-title="filename.ext">
    <div class="terminal-header">
        <span class="terminal-dot red|amber|green"></span>
        <span class="terminal-path">karl@portfolio:~</span>
        <span class="file-indicator">filename.ext</span>
    </div>
    <div class="terminal-body [section-specific-class]">
        <!-- Section content -->
    </div>
</div>
```

All sections (#home, #about, #skills, #portfolio, #experience, #contact) follow this pattern.

### CSS Architecture
**Design System:**
- Dark theme variables: `styles.css:1-52`
- Light theme variables: `styles.css:54-102`
- Gruvbox-inspired color scheme in CSS custom properties
- All colors, spacing, fonts defined in `:root`
- Modify theme by changing CSS variables

**Key Variables:**
- `--bg`, `--bg-alt`, `--bg-soft`: Background layers
- `--accent`, `--accent-hover`: Interactive states
- `--text`, `--text-muted`, `--text-light`: Text hierarchy
- `--font`: Monospace stack (Fira Code + fallbacks)

**Responsive Breakpoints:**
- 980px: Reduce padding
- 860px: Mobile hamburger menu
- 768px: Single-column layouts
- 520px: Compact mobile spacing

### JavaScript Architecture (`script.js`)

**Theme Toggle (`script.js:1-26`):**
- Dark/light mode with localStorage persistence
- Respects `prefers-color-scheme` media query
- Theme stored in localStorage for persistence
- Animated moon/sun icons with rotation transitions

**Navigation (`script.js:28-108`):**
- Scroll-spy using cached section offsets
- Hash-based navigation with smooth scrolling
- Hamburger menu with `aria-expanded` state

**Performance Optimizations:**
- **Cached Section Offsets** (`script.js:61-72`): Avoids forced reflows during scroll
- **Passive Event Listeners** (`script.js:106,108`): Improves scroll performance
- **Resize Debouncing** (`script.js:99-106`): Only recalculates on width changes >5px
- **Batch DOM Reads** (`script.js:66-71`): Uses requestAnimationFrame for layout reads

**Animations:**
- Typing animation: Hero name character-by-character (`script.js:110-126`)
- Reveal animations: `IntersectionObserver` triggers `.visible` class when terminal windows enter viewport with 15% threshold (`script.js:128-146`)

## Common Edits

### Adding Portfolio Projects
Edit `index.html:167-199`. Each project is an `<article class="portfolio-entry">` with header, description, tech stack list, and project links.

### Updating Skills
Edit skill categories in `index.html:122-151`. Organized by: Languages, Specializations, Tools & Architecture.

### Modifying Experience
Edit entries in `index.html:215-241`. Standard card layout with period, title, company, description, bullet points.

### Changing Colors
Edit CSS variables in `styles.css:1-15`. Current theme is Gruvbox-inspired dark mode.

## Design System

**Typography:**
- All text uses `var(--font)` (Fira Code monospace stack)
- Fallback chain: `'Fira Code', 'FiraCode Nerd Font', ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace`

**Spacing Scale:**
- Consistent gaps: `0.5rem`, `1rem`, `1.5rem`, `2rem`, `2.5rem`
- Section padding: `90px 20px` (desktop) → `70px 16px` (tablet) → smaller on mobile

**Interactive States:**
- All interactive elements have hover with `translateY(-1px or -2px)`
- Consistent `0.2s ease` transitions
- Focus states mirror hover states

## Accessibility Features

- Semantic HTML5 elements throughout
- `aria-label` and `aria-expanded` on navigation toggle
- Sufficient color contrast (light text on dark backgrounds)
- `rel="noopener"` on external links
- Keyboard navigation supported via focus states

## Performance Characteristics

- Single HTML file with inlined critical CSS in `<head>`
- Self-hosted fonts with `font-display: optional` for instant text rendering
- Preloaded fonts and CSS for faster initial paint
- CSS efficient selectors, minimal specificity
- `IntersectionObserver` for performant scroll animations (15% threshold)
- Passive event listeners on scroll/resize
- Cached section offsets to prevent layout thrashing
- `scroll-behavior: smooth` via CSS
- No build tools, no JavaScript frameworks, no external CDN dependencies

## File Structure
```
.
├── fonts/
│   ├── fira-code-latin.woff2
│   └── fira-code-symbols.woff2
├── index.html          # Single-page application
├── styles.css          # All styling (terminal theme, responsive, light/dark)
├── script.js           # Navigation, animations, theme toggle, scroll effects
├── resume.md           # Resume content (not rendered on site)
├── .vercelignore       # Vercel deployment config
└── CLAUDE.md           # This file
```

## Deployment

Configured for Vercel deployment (`.vercelignore` present). No build step required - deploys directly.