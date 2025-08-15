// ===================================
//   MODERN BLOG JAVASCRIPT 2025
// ===================================

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initializeAOS();
    initializeTypingEffect();
    initializeSmoothScrolling();
    initializeMobileNavigation();
    initializeScrollEffects();
});

// ===================================
//   AOS ANIMATIONS
// ===================================

function initializeAOS() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        offset: 100,
        once: true,
        disable: false
    });
}

// ===================================
//   MODERN TYPING EFFECT
// ===================================

function initializeTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const phrases = [
        'Asad In Data',
        'Data Analytics',
        'Power BI Expert',
        'Python Developer',
        'SQL Specialist',
        'Data Storyteller'
    ];

    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const current = phrases[currentPhrase];
        
        if (isDeleting) {
            typingElement.textContent = current.substring(0, currentChar - 1);
            currentChar--;
            typeSpeed = 50;
        } else {
            typingElement.textContent = current.substring(0, currentChar + 1);
            currentChar++;
            typeSpeed = 100;
        }

        if (!isDeleting && currentChar === current.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing effect
    setTimeout(type, 1000);
}

// ===================================
//   SMOOTH SCROLLING
// ===================================

function initializeSmoothScrolling() {
    // Handle navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active nav link
                updateActiveNavLink(this.getAttribute('href'));
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// ===================================
//   MOBILE NAVIGATION
// ===================================

function initializeMobileNavigation() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileToggle || !navLinks) return;

    mobileToggle.addEventListener('click', function() {
        toggleMobileMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

function closeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileToggle.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
}

// ===================================
//   SCROLL EFFECTS
// ===================================

function initializeScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', throttle(function() {
        const currentScrollY = window.scrollY;
        
        // Header background on scroll
        if (currentScrollY > 100) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.8)';
        }

        // Update active nav link based on scroll position
        updateActiveNavOnScroll();
        
        lastScrollY = currentScrollY;
    }, 16));
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos <= bottom) {
            updateActiveNavLink(`#${id}`);
        }
    });
}

function updateActiveNavLink(href) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === href) {
            link.classList.add('active');
        }
    });
}

// ===================================
//   LOAD MORE ARTICLES
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            loadMoreArticles();
        });
    }
});

function loadMoreArticles() {
    const articlesGrid = document.getElementById('articles-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    // Show loading state
    loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    loadMoreBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        const newArticles = [
            {
                title: 'Advanced Data Visualization Techniques',
                date: 'Dec 28, 2024',
                readTime: '6 min read',
                category: 'Visualization',
                excerpt: 'Learn advanced techniques for creating compelling data visualizations that tell powerful stories and drive business decisions.',
                link: './article.html?id=4'
            },
            {
                title: 'Machine Learning for Business Analytics',
                date: 'Dec 25, 2024',
                readTime: '15 min read',
                category: 'ML',
                excerpt: 'Explore how machine learning algorithms can enhance business analytics and provide predictive insights for better decision making.',
                link: './article.html?id=5'
            },
            {
                title: 'Building Real-time Dashboards',
                date: 'Dec 20, 2024',
                readTime: '9 min read',
                category: 'Dashboards',
                excerpt: 'Step-by-step guide to creating real-time dashboards that provide instant insights and keep stakeholders informed.',
                link: './article.html?id=6'
            }
        ];

        newArticles.forEach((article, index) => {
            const articleCard = createArticleCard(article);
            articlesGrid.appendChild(articleCard);
            
            // Add AOS animation
            setTimeout(() => {
                AOS.refresh();
            }, 100);
        });

        // Reset button
        loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Load More Articles';
        loadMoreBtn.disabled = false;
        
        // Hide button after loading (simulate no more articles)
        loadMoreBtn.style.display = 'none';
        
    }, 1500);
}

function createArticleCard(article) {
    const articleCard = document.createElement('article');
    articleCard.className = 'article-card';
    articleCard.setAttribute('data-aos', 'fade-up');
    
    articleCard.innerHTML = `
        <h3 class="article-title">${article.title}</h3>
        <div class="article-meta">
            <span><i class="fas fa-calendar"></i> ${article.date}</span>
            <span><i class="fas fa-clock"></i> ${article.readTime}</span>
            <span><i class="fas fa-tag"></i> ${article.category}</span>
        </div>
        <p class="article-excerpt">${article.excerpt}</p>
        <a href="${article.link}" class="read-more">
            Read More <i class="fas fa-arrow-right"></i>
        </a>
    `;
    
    return articleCard;
}

// ===================================
//   UTILITY FUNCTIONS
// ===================================

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function
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

// ===================================
//   INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate
    document.querySelectorAll('.article-card, .tech-badge').forEach(el => {
        observer.observe(el);
    });
}

// ===================================
//   KEYBOARD NAVIGATION
// ===================================

document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
    
    // Ctrl/Cmd + / for search (future feature)
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        // Future: Open search modal
        console.log('Search functionality coming soon!');
    }
});

// ===================================
//   PERFORMANCE MONITORING
// ===================================

// Monitor page load performance
window.addEventListener('load', function() {
    if ('performance' in window) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    }
});

// ===================================
//   ERROR HANDLING
// ===================================

window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // In production, you might want to send this to an error tracking service
});

// ===================================
//   ANALYTICS TRACKING (PLACEHOLDER)
// ===================================

function trackEvent(eventName, eventData) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Google Analytics 4
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
}

// Track article clicks
document.addEventListener('click', function(e) {
    const readMoreLink = e.target.closest('.read-more');
    if (readMoreLink) {
        const articleTitle = readMoreLink.closest('.article-card').querySelector('.article-title').textContent;
        trackEvent('article_click', {
            article_title: articleTitle,
            click_text: 'read_more'
        });
    }
});

// Track CTA button clicks
document.addEventListener('click', function(e) {
    const ctaButton = e.target.closest('.btn');
    if (ctaButton) {
        const buttonText = ctaButton.textContent.trim();
        trackEvent('cta_click', {
            button_text: buttonText,
            button_type: ctaButton.classList.contains('btn-primary') ? 'primary' : 'secondary'
        });
    }
});
