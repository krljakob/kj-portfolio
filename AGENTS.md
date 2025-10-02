# AGENTS.md - Agent Guidelines for kj-portfolio

## Build and Development Commands
- `python -m http.server 8000` — serve locally at http://localhost:8000 for testing navigation and routing.
- `npx serve .` — alternative static server if Node.js is preferred.
- Open `index.html` directly in browser for quick checks, but use server for full validation.

## Testing Commands
No automated tests; run manual tests in Chrome/Firefox:
- Test hamburger menu toggle below 860px breakpoint.
- Verify scroll-spy link highlighting on section navigation.
- Check typing animation in hero section; scroll to trigger IntersectionObserver reveals.
- Add `.visible` class manually if IntersectionObserver unavailable.
- Capture screenshots before/after changes for visual regression checks.

## Code Style Guidelines
- **Formatting:** Use 4-space indentation in HTML, CSS, JS. No trailing whitespace.
- **Imports:** None; single-file structure (index.html, styles.css, script.js).
- **Types:** Vanilla JavaScript; no TypeScript or static typing.
- **Naming Conventions:** camelCase for JS variables/functions (e.g., `setTheme`); hyphen-case for CSS classes (e.g., `terminal-window`).
- **Quotes:** Double quotes for HTML attributes; single quotes in JS strings.
- **Error Handling:** Check element existence before adding listeners (e.g., `if (themeToggle)`); use try/catch for external APIs if added.
- **Comments:** Succinct inline comments for non-obvious logic; avoid obvious explanations.
- **Other:** Preserve semantic HTML landmarks; maintain Gruvbox palette in CSS variables; no build pipelines.
