// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (email) {
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'form-status success';
            successMsg.textContent = 'Thanks for subscribing! Check your inbox soon.';
            successMsg.style.marginTop = '15px';
            successMsg.style.padding = '10px';
            successMsg.style.borderRadius = '8px';
            successMsg.style.textAlign = 'center';
            
            newsletterForm.appendChild(successMsg);
            emailInput.value = '';
            
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        }
    });
}

// Start Now Button Alert
const startNowBtn = document.getElementById('startNowBtn');
if (startNowBtn) {
    startNowBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('🎉 Welcome to GVMTEAM! Visit our gym or contact us to start your free trial today!');
    });
}

// Animate on Scroll - Simple Intersection Observer
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .coach-card, .testimonial-card, .value-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
};

// Sticky Navbar on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.padding = '20px 0';
        }
    }
});

// Close mobile menu when clicking a link
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});