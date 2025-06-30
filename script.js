// Futuristic MNE Components - Enhanced JavaScript

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    initFuturisticLoader();
    initNavigation();
    initScrollEffects();
    initHeroAnimations();
    initGallerySystem();
    initContactForm();
    initScrollToTop();
    initParticleSystem();
    initHolographicEffects();
    initIntersectionObserver();
    initMouseEffects();
    
    // Console welcome message
    console.log(`
🚀 MNE COMPONENTS - FUTURISTIC INTERFACE LOADED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ Next-Generation Battery Solutions
🔬 Advanced Manufacturing Technology
🌐 Powering the Electric Future

Built with cutting-edge web technologies
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `);
}

// Futuristic Loader System
function initFuturisticLoader() {
    const loader = document.getElementById('loader');
    const loadingProgress = document.querySelector('.loading-progress');
    
    if (!loader) return;
    
    // Simulate loading with realistic progress
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Hide loader with futuristic effect
            setTimeout(() => {
                loader.classList.add('hidden');
                startInitialAnimations();
            }, 500);
        }
        
        if (loadingProgress) {
            loadingProgress.style.width = `${progress}%`;
        }
    }, 200);
}

// Enhanced Navigation System
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu.futuristic-dropdown');
    let mobileDropdownOpen = false;

    // Scroll-based navbar effects
    let lastScrollY = window.scrollY;

    // Hide nav menu on scroll if open (mobile only)
    window.addEventListener('scroll', debounce(() => {
        const currentScrollY = window.scrollY;
        if (navbar) {
            if (currentScrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            if (currentScrollY > lastScrollY && currentScrollY > 500) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        }
        lastScrollY = currentScrollY;
        updateActiveNavLink();
        // Hide nav menu if open on mobile
        if (window.innerWidth <= 480 && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            // Also close dropdown if open
            if (dropdownMenu) {
                dropdownMenu.style.display = 'none';
                mobileDropdownOpen = false;
            }
            document.body.style.overflow = '';
        }
    }, 10));

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
                // Also close dropdown if open
                if (dropdownMenu) {
                    dropdownMenu.style.display = 'none';
                    mobileDropdownOpen = false;
                }
            }
            // Animate menu items
            const navItems = navMenu.querySelectorAll('.nav-item');
            navItems.forEach((item, index) => {
                if (navMenu.classList.contains('active')) {
                    setTimeout(() => {
                        item.style.animation = `slideInFromRight 0.3s ease-out forwards`;
                    }, index * 100);
                } else {
                    item.style.animation = '';
                }
            });
        });
    }

    // Dropdown toggle for mobile
    if (dropdown && dropdownMenu) {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 480) {
                e.preventDefault();
                mobileDropdownOpen = !mobileDropdownOpen;
                dropdownMenu.style.display = mobileDropdownOpen ? 'block' : 'none';
                // Hide all other nav items except dropdown when opening, restore all when closing
                const navItems = navMenu.querySelectorAll('.nav-item');
                navItems.forEach(item => {
                    if (!item.classList.contains('dropdown')) {
                        item.style.display = mobileDropdownOpen ? 'none' : '';
                    }
                });
                // Always show all nav items if closing the dropdown
                if (!mobileDropdownOpen) {
                    navItems.forEach(item => {
                        item.style.display = '';
                    });
                }
            }
        });
    }

    // When closing menu, always show all nav items
    function resetMobileNavItems() {
        if (window.innerWidth <= 480 && navMenu) {
            const navItems = navMenu.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.style.display = '';
            });
        }
    }

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    smoothScrollTo(target);
                    // Close mobile menu if open
                    if (navMenu && navMenu.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                        document.body.style.overflow = '';
                        // Also close dropdown if open
                        if (dropdownMenu) {
                            dropdownMenu.style.display = 'none';
                            mobileDropdownOpen = false;
                        }
                        resetMobileNavItems();
                    }
                }
            }
        });
    });

    // On window resize, reset nav items and dropdown
    window.addEventListener('resize', () => {
        if (window.innerWidth > 480) {
            if (dropdownMenu) dropdownMenu.style.display = '';
            mobileDropdownOpen = false;
            resetMobileNavItems();
            document.body.style.overflow = '';
        }
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Enhanced scroll effects
function initScrollEffects() {
    // Parallax effect for hero elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.holographic-display, .visual-container');
        
        parallaxElements.forEach(element => {
            const speed = 0.3;
            element.style.transform = `translateY(${scrolled * speed}px) rotateX(${scrolled * 0.05}deg)`;
        });
        
        // Update floating particles based on scroll
        updateParticlePositions(scrolled);
    });
}

// Hero section animations
function initHeroAnimations() {
    const heroStats = document.querySelectorAll('.stat-number');
    
    // Animate statistics when they come into view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count')) || 0;
                animateCounter(entry.target, 0, target, 2000);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    heroStats.forEach(stat => {
        if (stat.hasAttribute('data-count')) {
            statsObserver.observe(stat);
        }
    });
}

// Enhanced Gallery System
function initGallerySystem() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Initialize filter system
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button with smooth transition
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.transform = 'scale(1)';
            });
            
            this.classList.add('active');
            this.style.transform = 'scale(1.05)';
            
            // Filter gallery items with staggered animation
            let visibleIndex = 0;
            galleryItems.forEach((item, index) => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    
                    // Staggered reveal animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1) translateY(0)';
                    }, visibleIndex * 100);
                    
                    visibleIndex++;
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8) translateY(20px)';
                    
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
    
    // Add hover effects to gallery cards
    const galleryCards = document.querySelectorAll('.gallery-card');
    galleryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateY(5deg)';
            this.querySelector('.gallery-image img').style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateY(0)';
            this.querySelector('.gallery-image img').style.transform = 'scale(1) rotate(0)';
        });
    });
}

// Lightbox functionality
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    if (lightbox && lightboxImage) {
        lightboxImage.src = imageSrc;
        lightbox.classList.add('show');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Add glitch effect to lightbox
        lightboxImage.addEventListener('load', () => {
            lightboxImage.style.animation = 'lightboxAppear 0.5s ease-out';
        });
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    if (lightbox) {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
        
        if (lightboxImage) {
            lightboxImage.style.animation = '';
        }
    }
}

// Enhanced Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, select, textarea');
    
    // Add futuristic focus effects
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
            
            // Create ripple effect
            createRippleEffect(this);
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Real-time validation feedback
        input.addEventListener('input', function() {
            validateFieldRealtime(this);
        });
    });
    
    // Form submission with animation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitFormWithAnimation();
        }
    });
}

// Validate form field in real-time
function validateFieldRealtime(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous errors
    clearFieldError(field);
    
    if (required && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
        field.style.borderColor = '#ff006e';
        field.style.boxShadow = '0 0 10px rgba(255, 0, 110, 0.3)';
    } else {
        field.style.borderColor = '#00f5ff';
        field.style.boxShadow = '0 0 10px rgba(0, 245, 255, 0.3)';
    }
    
    return isValid;
}

// Form validation
function validateForm() {
    const form = document.getElementById('contact-form');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateFieldRealtime(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Submit form with futuristic animation
function submitFormWithAnimation() {
    const submitBtn = document.querySelector('.form-submit');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> TRANSMITTING...';
    submitBtn.disabled = true;
    submitBtn.style.background = 'linear-gradient(135deg, #8b5cf6, #00f5ff)';
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> MESSAGE SENT!';
        submitBtn.style.background = 'linear-gradient(135deg, #00ff88, #00f5ff)';
        
        // Show success effect
        createSuccessEffect();
        
        // Reset form after delay
        setTimeout(() => {
            document.getElementById('contact-form').reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 3000);
    }, 2000);
}

// Scroll to top functionality
function initScrollToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', debounce(() => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }, 100));
    
    backToTopBtn.addEventListener('click', () => {
        smoothScrollTo(document.body);
    });
}

// Particle system for enhanced effects
function initParticleSystem() {
    const particleContainer = document.querySelector('.floating-particles');
    
    if (!particleContainer) return;
    
    // Create additional floating particles
    for (let i = 0; i < 20; i++) {
        createFloatingParticle(particleContainer, i);
    }
}

function createFloatingParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = 'dynamic-particle';
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: ${index % 3 === 0 ? '#00f5ff' : index % 3 === 1 ? '#ff006e' : '#8b5cf6'};
        border-radius: 50%;
        pointer-events: none;
        opacity: ${Math.random() * 0.6 + 0.3};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: particleFloat ${Math.random() * 10 + 15}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
        box-shadow: 0 0 10px currentColor;
    `;
    
    container.appendChild(particle);
}

function updateParticlePositions(scrollOffset) {
    const particles = document.querySelectorAll('.dynamic-particle');
    particles.forEach((particle, index) => {
        const speed = (index % 3 + 1) * 0.1;
        const currentTransform = particle.style.transform || '';
        const newY = scrollOffset * speed;
        particle.style.transform = `${currentTransform} translateY(${newY}px)`;
    });
}

// Holographic effects for solution cards
function initHolographicEffects() {
    const solutionCards = document.querySelectorAll('.solution-card');
    
    solutionCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            
            // Add holographic shimmer
            const shimmer = this.querySelector('::before');
            if (shimmer) {
                shimmer.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,245,255,0.1) 0%, transparent 50%)`;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Enhanced intersection observer for scroll animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Add special effects for different elements
                if (entry.target.classList.contains('solution-card')) {
                    addCardRevealEffect(entry.target);
                } else if (entry.target.classList.contains('gallery-item')) {
                    addGalleryRevealEffect(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for reveal animations
    const revealElements = document.querySelectorAll('.solution-card, .gallery-item, .contact-card, .feature-item');
    revealElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });
}

// Mouse tracking effects
function initMouseEffects() {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update holographic displays
        updateHolographicDisplays(mouseX, mouseY);
    });
}

function updateHolographicDisplays(x, y) {
    const displays = document.querySelectorAll('.holographic-display, .tech-display');
    
    displays.forEach(display => {
        const rect = display.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (x - centerX) / window.innerWidth;
        const deltaY = (y - centerY) / window.innerHeight;
        
        display.style.transform = `translate(${deltaX * 20}px, ${deltaY * 20}px) rotateX(${deltaY * 10}deg) rotateY(${deltaX * 10}deg)`;
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function smoothScrollTo(target) {
    const targetPosition = target.offsetTop - 100;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;
    
    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    requestAnimationFrame(animation);
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
}

function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #ff006e;
        font-size: 0.75rem;
        margin-top: 0.25rem;
        display: block;
        animation: errorAppear 0.3s ease-out;
    `;
    
    field.parentElement.appendChild(errorElement);
}

function clearFieldError(field) {
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        width: 10px;
        height: 10px;
        background: rgba(0, 245, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        animation: rippleExpand 0.6s ease-out;
        top: 50%;
        left: 10px;
        transform: translate(-50%, -50%);
    `;
    
    element.parentElement.style.position = 'relative';
    element.parentElement.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

function createSuccessEffect() {
    const successElement = document.createElement('div');
    successElement.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #00ff88, #00f5ff);
        color: #0a0a0f;
        padding: 2rem 3rem;
        border-radius: 20px;
        font-weight: 600;
        font-size: 1.125rem;
        z-index: 10000;
        animation: successPulse 2s ease-out;
        box-shadow: 0 20px 40px rgba(0, 255, 136, 0.3);
    `;
    successElement.innerHTML = '<i class="fas fa-check-circle"></i> Message Transmitted Successfully!';
    
    document.body.appendChild(successElement);
    
    setTimeout(() => successElement.remove(), 2000);
}

function addCardRevealEffect(card) {
    card.style.animation = 'cardReveal 0.8s ease-out forwards';
}

function addGalleryRevealEffect(item) {
    item.style.animation = 'galleryReveal 0.6s ease-out forwards';
}

function startInitialAnimations() {
    // Trigger hero animations
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title .title-line, .hero-subtitle, .hero-stats, .hero-actions');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animation = `slideInUp 1s ease-out forwards`;
        }, index * 200);
    });
    
    // Start holographic effects
    const holoDisplays = document.querySelectorAll('.holographic-display, .battery-visual');
    holoDisplays.forEach(display => {
        display.style.animation = 'holoActivate 2s ease-out forwards';
    });
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close lightbox on Escape
    if (e.key === 'Escape') {
        closeLightbox();
    }
    
    // Navigate with arrow keys
    if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Close lightbox on outside click
document.addEventListener('click', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Add custom CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
    
    @keyframes lightboxAppear {
        0% { opacity: 0; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes errorAppear {
        0% { opacity: 0; transform: translateY(-10px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes rippleExpand {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
    }
    
    @keyframes successPulse {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    
    @keyframes cardReveal {
        0% { opacity: 0; transform: translateY(50px) rotateX(20deg); }
        100% { opacity: 1; transform: translateY(0) rotateX(0); }
    }
    
    @keyframes galleryReveal {
        0% { opacity: 0; transform: scale(0.8) rotateY(20deg); }
        100% { opacity: 1; transform: scale(1) rotateY(0); }
    }
    
    @keyframes holoActivate {
        0% { opacity: 0; transform: scale(0.5); }
        50% { opacity: 0.8; transform: scale(1.1); }
        100% { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Performance monitoring
const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
            console.log(`🚀 Page loaded in ${entry.loadEventEnd - entry.fetchStart}ms`);
        }
    });
});

observer.observe({ entryTypes: ['navigation'] });

// Export functions for external use
window.MNEComponents = {
    openLightbox,
    closeLightbox,
    smoothScrollTo,
    createRippleEffect
};