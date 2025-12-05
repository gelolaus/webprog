// Navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    // Close mobile menu when clicking external links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    const navbar = document.getElementById('mainNav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Stagger animation delays for cards
    const cards = document.querySelectorAll('.content-card');
    cards.forEach((card, index) => {
        const delay = index * 0.08 + (Math.random() * 0.05);
        card.style.animationDelay = `${delay}s`;
    });

    const heroSection = document.querySelector('.hero-section');
    if (heroSection && window.innerWidth > 768) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.2;
            
            if (scrolled < heroSection.offsetHeight) {
                heroSection.style.transform = `translateY(${rate}px)`;
            } else {
                heroSection.style.transform = 'translateY(0)';
            }
        });
    }

    // Card hover effects
    cards.forEach((card, index) => {
        const hoverAmount = index % 2 === 0 ? '-2px' : '-3px';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = `translateY(${hoverAmount})`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

});

