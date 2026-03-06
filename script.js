// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
});

// Reveal Elements
sr.reveal('.hero-text-content', { delay: 300, origin: 'left' });
sr.reveal('.hero-image-container', { delay: 500, origin: 'right' });
sr.reveal('.hero-cta', { delay: 700 });
sr.reveal('.hero-socials', { delay: 900 });
sr.reveal('.section-header', { delay: 200 });
sr.reveal('.about-text', { delay: 400, origin: 'left' });
sr.reveal('.about-skills-cards', { delay: 400, origin: 'right' });
sr.reveal('.skill-category', { delay: 200, interval: 100 });
sr.reveal('.timeline-item', { delay: 200, interval: 200, origin: 'left' });
sr.reveal('.project-card', { delay: 200, interval: 100 });
sr.reveal('.blog-card', { delay: 200, interval: 200 });
sr.reveal('.education-block', { delay: 300, origin: 'left' });
sr.reveal('.achievements-block', { delay: 300, origin: 'right' });
sr.reveal('.contact-card', { delay: 200 });

// Progress Bar Animation with Intersection Observer
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = width;
            animationObserver.unobserve(progressBar);
        }
    });
}, { threshold: 0.1 });

// Start observing progress bars
document.querySelectorAll('.skill-card-progress-bar').forEach(bar => {
    animationObserver.observe(bar);
});

// Sticky Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 25, 47, 0.98)';
        navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
        navbar.style.padding = '5px 0';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.85)';
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '0';
    }
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Submission Simulation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerText = 'Message Sent!';
            btn.style.background = '#2ecc71';
            btn.style.color = '#fff';
            contactForm.reset();

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Scroll Progress Bar
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    if (scrollProgress) {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${totalScroll / windowHeight * 100}%`;
        scrollProgress.style.width = scroll;
    }
});

// Initialize Vanilla Tilt
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".project-card, .skill-card, .blog-card"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02
    });
}

// Initialize Lucide icons
lucide.createIcons();
