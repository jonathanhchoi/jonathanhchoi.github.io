// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.skill-card, .research-card, .project-card, .resource-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active class to current navigation item based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    const navHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(sectionId)) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Add typing effect to hero title (optional)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add copy-to-clipboard functionality for code examples (if needed in future)
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Form submission handler (for future contact form)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted');
    });
}

// Add page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Filter projects by technology (for code page)
const techFilters = document.querySelectorAll('.tech-filter');
if (techFilters.length > 0) {
    techFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const tech = this.dataset.tech;
            const projects = document.querySelectorAll('.project-card');
            
            if (tech === 'all') {
                projects.forEach(project => {
                    project.style.display = 'block';
                });
            } else {
                projects.forEach(project => {
                    const projectTechs = project.querySelectorAll('.tech-tag');
                    let hasTech = false;
                    projectTechs.forEach(tag => {
                        if (tag.textContent.toLowerCase() === tech.toLowerCase()) {
                            hasTech = true;
                        }
                    });
                    project.style.display = hasTech ? 'block' : 'none';
                });
            }
            
            // Update active filter
            techFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Lazy loading for images (if you add images later)
const lazyImages = document.querySelectorAll('img[data-src]');
if (lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// Console Easter egg
console.log('%c Welcome to Jonathan H. Choi\'s Website! ', 'background: #2563eb; color: white; font-size: 20px; padding: 10px;');
console.log('%c Interested in the code? Check out the /code page! ', 'color: #2563eb; font-size: 14px;');