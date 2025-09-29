# Repository Guidelines

## Project Structure & Module Organization
The portfolio is a static single-page site served directly from the repository root. `index.html` owns the layout and terminal-window sections (`#home`, `#about`, `#skills`, `#portfolio`, `#experience`, `#contact`). `styles.css` contains the Gruvbox-inspired design system and responsive breakpoints; update variables at the top when adjusting theming. `script.js` drives navigation, typing animation, and scroll-triggered reveals—keep related helpers adjacent. `resume.md` is a content source that can be embedded or linked when needed. Reference `CLAUDE.md` for deeper architectural notes before introducing new patterns.

## Build, Test, and Development Commands
No build step is required—open `index.html` in any modern browser for quick checks. For consistent routing, start a local server with `python -m http.server 8000` or `npx serve .` and visit `http://localhost:8000`. When validating on mobile, use the browser’s device toolbar rather than relying on desktop-only behavior.

## Coding Style & Naming Conventions
Use four-space indentation across HTML, CSS, and JavaScript. Favor single quotes in JavaScript and double quotes in markup attributes, mirroring existing files. Stick to lowercase, hyphenated CSS class names (e.g., `terminal-window`, `hero-actions`). Keep section HTML following the established terminal-window scaffold so animations and styling stay consistent. Document complex logic with brief inline comments explaining intent, not mechanics.

## Testing Guidelines
Run through the page in Chrome and Firefox to catch vendor quirks. Confirm the hamburger menu toggles correctly below 860px, the scroll-spy updates active links, and the hero typing effect completes without console errors. Trigger IntersectionObserver behavior by scrolling the page slowly; fall back to manually adding `.visible` when testing in environments lacking the API. Capture visual diff screenshots after major layout changes.

## Commit & Pull Request Guidelines
Follow Conventional Commit messages (`feat`, `fix`, `style`, etc.) with optional scope, matching `style(ui): …` already in history. Each pull request should summarize the change, list impacted sections/components, and note visual or accessibility implications. Attach before/after screenshots for UI updates and link relevant issues. Ensure branches are rebased on main to prevent unrelated diffs.

## Accessibility & Performance Checks
Preserve semantic landmarks (`<nav>`, `<main>`, `<section>`) and update `aria` attributes whenever interactive elements change. Maintain contrast ratios by reusing the variables defined in `:root`. Audit Lighthouse or WebPageTest after sizable updates to verify typing animation and IntersectionObserver do not regress performance.
