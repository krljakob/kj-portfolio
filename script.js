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

const setActiveNav = () => {
    let activeId = sections[0]?.id;
    const scrollY = window.scrollY;

    // batch DOM reads
    const sectionOffsets = sections.map(section => ({
        id: section.id,
        top: section.offsetTop
    }));

    const offset = scrollY + 160;

    // determine active section
    sectionOffsets.forEach(section => {
        if (offset >= section.top) {
            activeId = section.id;
        }
    });

    // batch DOM writes
    navLookup.forEach(link => link.classList.remove('active'));

    if (activeId && navLookup.has(activeId)) {
        navLookup.get(activeId)?.classList.add('active');
    }
};

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
            setTimeout(type, 60);
        }
    };

    setTimeout(type, 300);
}

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const values = ['name', 'email', 'subject', 'message'].map(key => formData.get(key)?.toString().trim());

        if (values.some(value => !value)) {
            alert('Please fill in all fields before sending.');
            return;
        }

        alert('Thank you for your message. I\'ll get back to you soon.');
        contactForm.reset();
    });
}

const terminalWindows = document.querySelectorAll('.terminal-window');

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
