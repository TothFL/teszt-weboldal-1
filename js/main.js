// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        // Only remove if we're not on a page that forced it (like services/contact)
        const isForced = document.querySelector('nav').dataset.forceScrolled === 'true';
        if (!isForced && !window.location.pathname.includes('services.html') && !window.location.pathname.includes('contact.html')) {
            navbar.classList.remove('scrolled');
        }
    }
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
});

// Form Submission (Simulated)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerText = 'Request Sent!';
            btn.style.background = '#4CAF50';
            contactForm.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Mobile Menu Toggle (Simplified for this version)
// Add logic here if a hamburger menu is needed for smaller screens
