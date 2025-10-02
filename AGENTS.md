# Repository Guidelines

## Project Structure & Module Organization
The site is a single-page portfolio served from the repository root. `index.html` owns layout and terminal-style sections (`#home`, `#about`, `#skills`, `#portfolio`, `#experience`, `#contact`). Styling lives in `styles.css`, which defines the Gruvbox-inspired palette and responsive breakpoints—adjust variables near the top when theming. `script.js` handles navigation, typing animation, and IntersectionObserver helpers; keep related utilities grouped. Content sources such as `resume.md` and architecture notes in `CLAUDE.md` inform copy or future patterns. Static assets reside alongside these files; avoid introducing build pipelines.

## Build, Test, and Development Commands
- `python -m http.server 8000` — serve the root directory locally at `http://localhost:8000` for routing consistency.
- `npx serve .` — alternative static server when Node.js tooling is preferred.
Open `index.html` directly in a browser for quick checks, but favor a local server when validating navigation or relative paths.

## Coding Style & Naming Conventions
Use four-space indentation across HTML, CSS, and JavaScript. Prefer double quotes for HTML attributes and single quotes in JavaScript. Adopt lowercase, hyphenated CSS class names (e.g., `terminal-window`, `hero-actions`). Keep section markup aligned with existing terminal-window scaffolding so animations and layout remain consistent. Document non-obvious logic with succinct inline comments.

## Testing Guidelines
Run manual passes in Chrome and Firefox, exercising the hamburger menu below 860px, scroll-spy link highlighting, and the hero typing animation. Scroll slowly to trigger IntersectionObserver reveals; in environments lacking the API, temporarily add the `.visible` class for verification. Capture before/after screenshots when adjusting layout or theming to catch visual regressions.

## Commit & Pull Request Guidelines
Follow Conventional Commit messages (e.g., `style(ui): refine hero spacing`). PRs should summarize changes, list impacted sections, note visual or accessibility implications, and attach relevant screenshots. Rebase onto `main` before opening a PR to avoid unrelated diffs and link any tracked issues.

## Accessibility & Performance Checks
Preserve semantic landmarks (`<nav>`, `<main>`, `<section>`) and maintain contrast by reusing variables from `:root`. After significant animation or script updates, run Lighthouse or WebPageTest to confirm typing and IntersectionObserver behavior stay performant.
