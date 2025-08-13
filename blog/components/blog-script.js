// ===================================
//   BLOG JAVASCRIPT FUNCTIONALITY
// ===================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeProgressBar();
    initializeBackToTop();
    initializeTypingEffect();
    initializeCounters();
    initializeArticles();
    initializeQuoteWidget();
    initializeNewsletterForm();
    initializeSmoothScrolling();
    initializeAOS();
    initializeMobileMenu();
});

// ===================================
//   THEME MANAGEMENT
// ===================================

function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add animation class
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });
}

// ===================================
//   PROGRESS BAR
// ===================================

function initializeProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// ===================================
//   BACK TO TOP BUTTON
// ===================================

function initializeBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
//   TYPING EFFECT
// ===================================

function initializeTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    const texts = [
        'My Tech Blog',
        'Data Analytics Insights',
        'Power BI Tutorials',
        'Python Tips & Tricks',
        'SQL Masterclass'
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[currentTextIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        let timeout = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentCharIndex === currentText.length) {
            timeout = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            timeout = 500; // Pause before next text
        }
        
        setTimeout(typeText, timeout);
    }
    
    if (typingElement) {
        typeText();
    }
}

// ===================================
//   ANIMATED COUNTERS
// ===================================

function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000; // Animation duration in ms
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// ===================================
//   ARTICLES MANAGEMENT
// ===================================

const articlesData = [
    {
        id: 1,
        title: "Getting Started with Power BI: A Complete Beginner's Guide",
        excerpt: "Learn the fundamentals of Power BI and how to create your first dashboard. This comprehensive guide covers everything from data connection to visualization.",
        category: "powerbi",
        tags: ["Power BI", "Beginner", "Tutorial"],
        date: "2025-01-15",
        readTime: "8 min read",
        image: "../images/Power BI 1.png",
        author: "Asad Ali"
    },
    {
        id: 2,
        title: "Python for Data Analysis: Essential Libraries and Techniques",
        excerpt: "Discover the most important Python libraries for data analysis including Pandas, NumPy, and Matplotlib. Learn practical techniques with real examples.",
        category: "python",
        tags: ["Python", "Data Analysis", "Pandas"],
        date: "2025-01-10",
        readTime: "12 min read",
        image: "../images/Auto_EDA.png",
        author: "Asad Ali"
    }
    // Commented out additional articles - uncomment when you add more content
    /*
    {
        id: 3,
        title: "SQL Optimization Techniques for Better Performance",
        excerpt: "Master advanced SQL optimization techniques to improve query performance. Learn about indexing, query plans, and best practices.",
        category: "sql",
        tags: ["SQL", "Optimization", "Performance"],
        date: "2025-01-05",
        readTime: "10 min read",
        image: "../images/Logic.png",
        author: "Asad Ali"
    },
    {
        id: 4,
        title: "Building Interactive Dashboards with Advanced Power BI Features",
        excerpt: "Take your Power BI skills to the next level with advanced features like drill-through, bookmarks, and custom visuals.",
        category: "powerbi",
        tags: ["Power BI", "Advanced", "Dashboards"],
        date: "2025-01-01",
        readTime: "15 min read",
        image: "../images/Power BI 3.png",
        author: "Asad Ali"
    },
    {
        id: 5,
        title: "Data Visualization Best Practices: Telling Stories with Data",
        excerpt: "Learn the principles of effective data visualization and how to create compelling charts that communicate insights clearly.",
        category: "insights",
        tags: ["Visualization", "Best Practices", "Design"],
        date: "2024-12-28",
        readTime: "7 min read",
        image: "../images/Data Analyst.png",
        author: "Asad Ali"
    },
    {
        id: 6,
        title: "Machine Learning with Python: From Basics to Deployment",
        excerpt: "A comprehensive guide to machine learning using Python. Learn scikit-learn, model evaluation, and deployment strategies.",
        category: "python",
        tags: ["Python", "Machine Learning", "scikit-learn"],
        date: "2024-12-25",
        readTime: "20 min read",
        image: "../images/Churn_ml.png",
        author: "Asad Ali"
    }
    */
];

function initializeArticles() {
    displayArticles(articlesData);
    initializeFilters();
    initializeLoadMore();
}

function displayArticles(articles) {
    const articlesGrid = document.getElementById('articles-grid');
    
    if (!articlesGrid) return;
    
    articlesGrid.innerHTML = '';
    
    articles.forEach((article, index) => {
        const articleCard = createArticleCard(article);
        articleCard.style.animationDelay = `${index * 100}ms`;
        articlesGrid.appendChild(articleCard);
    });
}

function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card fade-in';
    card.setAttribute('data-category', article.category);
    
    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="article-image" loading="lazy">
        <div class="article-content">
            <div class="article-meta">
                <span class="article-tag">${article.tags[0]}</span>
                <span class="article-date">
                    <i class="fas fa-calendar"></i>
                    ${formatDate(article.date)}
                </span>
            </div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-footer">
                <a href="article.html?id=${article.id}" class="read-more">
                    Read More <i class="fas fa-arrow-right"></i>
                </a>
                <span class="reading-time">
                    <i class="fas fa-clock"></i>
                    ${article.readTime}
                </span>
            </div>
        </div>
    `;
    
    return card;
}

function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter articles
            const filter = this.getAttribute('data-filter');
            filterArticles(filter);
        });
    });
}

function filterArticles(category) {
    const articleCards = document.querySelectorAll('.article-card');
    
    articleCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.classList.add('fade-in');
        } else {
            card.style.display = 'none';
        }
    });
}

function initializeLoadMore() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    let currentlyDisplayed = 6;
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real application, you would load more articles from an API
            this.innerHTML = '<i class="fas fa-check"></i> All Articles Loaded';
            this.disabled = true;
        });
    }
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// ===================================
//   QUOTE WIDGET
// ===================================

function initializeQuoteWidget() {
    const quotes = [
        "Data is the new oil, but analytics is the combustion engine.",
        "In God we trust. All others must bring data.",
        "Data will talk to you if you're willing to listen.",
        "The goal is to turn data into information, and information into insight.",
        "Data is not information, information is not knowledge, knowledge is not understanding.",
        "Big data is like teenage sex: everyone talks about it, nobody really knows how to do it.",
        "Data beats emotions. Facts beat opinions.",
        "The ability to take data—to be able to understand it, to process it, to extract value from it, to visualize it, to communicate it—that's going to be a hugely important skill."
    ];
    
    const quoteText = document.getElementById('random-quote');
    const quoteRefresh = document.getElementById('quote-refresh');
    
    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        
        if (quoteText) {
            quoteText.style.opacity = '0';
            setTimeout(() => {
                quoteText.textContent = quote;
                quoteText.style.opacity = '1';
            }, 150);
        }
    }
    
    if (quoteRefresh) {
        quoteRefresh.addEventListener('click', displayRandomQuote);
    }
    
    // Display a random quote on page load
    displayRandomQuote();
}

// ===================================
//   NEWSLETTER FORM
// ===================================

function initializeNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const submitBtn = this.querySelector('button[type="submit"]');
            
            // Show loading state
            const originalContent = submitBtn.innerHTML;
            submitBtn.innerHTML = '<div class="spinner"></div> Subscribing...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
                submitBtn.style.background = 'var(--success-color)';
                
                // Reset form
                setTimeout(() => {
                    this.reset();
                    submitBtn.innerHTML = originalContent;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 2000);
                
                // Show success message
                showToast('Thank you for subscribing to our newsletter!', 'success');
            }, 1500);
        });
    }
}

// ===================================
//   SMOOTH SCROLLING
// ===================================

function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
//   AOS INITIALIZATION
// ===================================

function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50
        });
    }
}

// ===================================
//   MOBILE MENU
// ===================================

function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }
}

// ===================================
//   UTILITY FUNCTIONS
// ===================================

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : 'info'}-circle"></i>
        <span>${message}</span>
    `;
    
    // Add toast styles
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--${type === 'success' ? 'success' : 'primary'}-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

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
//   SEARCH FUNCTIONALITY
// ===================================

function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput) {
        const debouncedSearch = debounce(function(query) {
            if (query.length > 2) {
                const results = searchArticles(query);
                displaySearchResults(results);
            } else {
                clearSearchResults();
            }
        }, 300);
        
        searchInput.addEventListener('input', function() {
            debouncedSearch(this.value);
        });
    }
}

function searchArticles(query) {
    return articlesData.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
}

function displaySearchResults(results) {
    // Implementation for search results display
    console.log('Search results:', results);
}

function clearSearchResults() {
    // Implementation for clearing search results
}

// ===================================
//   PERFORMANCE OPTIMIZATIONS
// ===================================

// Lazy load images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Service Worker Registration (for caching)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// ===================================
//   KEYBOARD NAVIGATION
// ===================================

document.addEventListener('keydown', function(e) {
    // Escape key to close modals/menus
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    }
    
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// ===================================
//   ANALYTICS TRACKING
// ===================================

function trackEvent(eventName, eventData) {
    // Google Analytics or other analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    console.log('Event tracked:', eventName, eventData);
}

// Track article clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('read-more') || e.target.closest('.read-more')) {
        const articleTitle = e.target.closest('.article-card').querySelector('.article-title').textContent;
        trackEvent('article_click', {
            article_title: articleTitle
        });
    }
});

// ===================================
//   ERROR HANDLING
// ===================================

window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send this to an error tracking service
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // You could send this to an error tracking service
});
