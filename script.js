// theme toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

const getTheme = () => localStorage.getItem('theme') || (prefersDark.matches ? 'dark' : 'light');

const setTheme = theme => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

setTheme(getTheme());

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
    });
}

prefersDark.addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

const navToggle = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

if (navMenu) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open') && navToggle) {
                navMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

const sections = Array.from(document.querySelectorAll('main section'));
const navLookup = new Map();

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
        navLookup.set(href.slice(1), link);
    }
});

// cache section offsets to avoid forced reflows on scroll
let sectionOffsets = [];

const cacheSectionOffsets = () => {
    sectionOffsets = sections.map(section => ({
        id: section.id,
        top: section.offsetTop
    }));
};

const setActiveNav = () => {
    let activeId = sections[0]?.id;
    const offset = window.scrollY + 160;

    sectionOffsets.forEach(section => {
        if (offset >= section.top) {
            activeId = section.id;
        }
    });

    navLookup.forEach(link => link.classList.remove('active'));

    if (activeId && navLookup.has(activeId)) {
        navLookup.get(activeId)?.classList.add('active');
    }
};

// initialize cached offsets
cacheSectionOffsets();

// recalculate on resize (debounced)
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(cacheSectionOffsets, 150);
});

window.addEventListener('scroll', setActiveNav);
setActiveNav();

const typedName = document.getElementById('typed-name');

if (typedName) {
    const text = typedName.dataset.text || typedName.textContent.trim();
    typedName.textContent = '';
    let index = 0;

    const type = () => {
        if (index < text.length) {
            typedName.textContent += text.charAt(index);
            index += 1;
            setTimeout(type, 50);
        }
    };

    setTimeout(type, 100);
}

const terminalWindows = document.querySelectorAll('.terminal-window:not(.visible)');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    terminalWindows.forEach(win => {
        win.classList.add('reveal');
        revealObserver.observe(win);
    });
} else {
    terminalWindows.forEach(win => win.classList.add('visible'));
}
