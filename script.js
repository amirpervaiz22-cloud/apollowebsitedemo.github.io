/**
 * Apollo Medical Billing - GitHub Logic
 */

// --- Navigation ---
function navigateTo(pageId) {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const target = document.getElementById('page-' + pageId);
    if (target) {
        target.classList.add('active');
    }

    // Update Nav links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });

    // Close mobile menu
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('hidden');
}

// --- Mobile Menu ---
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// --- Assistant Logic ---
function toggleAssistant(forceState) {
    const panel = document.getElementById('consultant-panel');
    if (forceState !== undefined) {
        if (forceState) panel.classList.remove('hidden');
        else panel.classList.add('hidden');
    } else {
        panel.classList.toggle('hidden');
    }
}

// --- Contact Form ---
function handleContact(event) {
    event.preventDefault();
    const success = document.getElementById('success-msg');
    
    success.classList.remove('hidden');
    event.target.reset();

    setTimeout(() => {
        success.classList.add('hidden');
    }, 4000);
}




// --- Scroll effect for navbar ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '0.75rem 0';
        nav.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
    } else {
        nav.style.padding = '1.5rem 0';
        nav.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
    }
});

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }
});