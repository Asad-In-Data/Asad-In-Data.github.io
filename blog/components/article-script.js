// ===================================
//   ARTICLE PAGE JAVASCRIPT
// ===================================

// Sample articles data (in a real app, this would come from your articles folder)
const articlesDatabase = {
    1: {
        id: 1,
        title: "Getting Started with Power BI: A Complete Beginner's Guide",
        excerpt: "Learn the fundamentals of Power BI and how to create your first dashboard. This comprehensive guide covers everything from data connection to visualization.",
        category: "powerbi",
        tags: ["Power BI", "Beginner", "Tutorial"],
        date: "2025-01-15",
        readTime: "8 min read",
        image: "../images/Power BI 1.png",
        author: "Asad Ali",
        content: `
# Getting Started with Power BI: A Complete Beginner's Guide

Power BI is a powerful business analytics tool that helps you visualize your data and share insights across your organization. In this comprehensive guide, we'll cover everything you need to know to get started with Power BI.

## What is Power BI?

Power BI is a collection of software services, apps, and connectors that work together to turn your unrelated sources of data into coherent, visually immersive, and interactive insights. Whether your data is a simple Excel spreadsheet or a collection of cloud-based and on-premises hybrid data warehouses, Power BI lets you easily connect to your data sources, visualize what's important, and share that with anyone or everyone you want.

## Key Components of Power BI

### Power BI Desktop
Power BI Desktop is a free application you can install on your local computer that lets you connect to, transform, and visualize your data. With Power BI Desktop, you can connect to multiple different sources of data, and combine them into a data model.

### Power BI Service
The Power BI service is the online SaaS (Software as a Service) part of Power BI. In the Power BI service, you can share reports and dashboards with your team or across your organization.

### Power BI Mobile Apps
Power BI mobile apps are available for Windows, iOS, and Android devices. The mobile apps let you view and interact with your Power BI dashboards and reports while you're on the go.

## Getting Started: Your First Dashboard

Let's create your first Power BI dashboard step by step:

### Step 1: Install Power BI Desktop
1. Go to the official Microsoft Power BI website
2. Download Power BI Desktop for free
3. Install the application on your computer

### Step 2: Connect to Your Data
\`\`\`sql
-- Example: Connecting to SQL Server
SELECT 
    ProductName,
    CategoryName,
    Sales,
    OrderDate
FROM 
    SalesData
WHERE 
    OrderDate >= '2023-01-01'
\`\`\`

### Step 3: Create Your First Visualization
Once you've connected to your data, you can start creating visualizations. Power BI offers various chart types:

- **Bar Charts**: Great for comparing values across categories
- **Line Charts**: Perfect for showing trends over time
- **Pie Charts**: Useful for showing parts of a whole
- **Tables**: For detailed data viewing
- **Maps**: For geographical data visualization

## Best Practices for Power BI

> "The goal is to turn data into information, and information into insight." - Carly Fiorina

Here are some best practices to follow when creating Power BI reports:

1. **Keep it Simple**: Don't overcrowd your dashboards with too many visuals
2. **Use Consistent Colors**: Maintain a consistent color scheme throughout your reports
3. **Optimize Performance**: Use DirectQuery wisely and consider data refresh schedules
4. **Security First**: Implement row-level security when sharing sensitive data

## Advanced Features to Explore

As you become more comfortable with Power BI, explore these advanced features:

- **DAX (Data Analysis Expressions)**: Create custom calculations and measures
- **Power Query**: Transform and clean your data before visualization
- **Custom Visuals**: Import additional visualizations from the marketplace
- **Real-time Dashboards**: Set up live data streaming for real-time insights

## Conclusion

Power BI is an incredibly powerful tool that can transform how you work with data. Start with simple visualizations and gradually explore more advanced features as you build confidence. Remember, the key to effective data visualization is telling a clear story with your data.

Ready to dive deeper? Check out our upcoming articles on advanced Power BI techniques and DAX formulas!
        `
    },
    2: {
        id: 2,
        title: "Python for Data Analysis: Essential Libraries and Techniques",
        excerpt: "Discover the most important Python libraries for data analysis including Pandas, NumPy, and Matplotlib. Learn practical techniques with real examples.",
        category: "python",
        tags: ["Python", "Data Analysis", "Pandas"],
        date: "2025-01-10",
        readTime: "12 min read",
        image: "../images/Auto_EDA.png",
        author: "Asad Ali",
        content: `
# Python for Data Analysis: Essential Libraries and Techniques

Python has become the go-to language for data analysis due to its simplicity, powerful libraries, and vibrant community. In this comprehensive guide, we'll explore the essential libraries and techniques every data analyst should know.

## Why Python for Data Analysis?

Python offers several advantages for data analysis:

- **Easy to Learn**: Simple, readable syntax
- **Rich Ecosystem**: Extensive libraries for data science
- **Community Support**: Large community and abundant resources
- **Versatility**: Can handle everything from data cleaning to machine learning
- **Integration**: Works well with databases, web APIs, and other tools

## Essential Libraries for Data Analysis

### 1. NumPy - Numerical Computing

NumPy is the foundation of the Python data science stack. It provides support for large, multi-dimensional arrays and matrices.

\`\`\`python
import numpy as np

# Creating arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])

# Basic operations
print(arr.mean())  # Calculate mean
print(arr.std())   # Calculate standard deviation
print(matrix.T)    # Transpose matrix
\`\`\`

### 2. Pandas - Data Manipulation and Analysis

Pandas is the cornerstone of data analysis in Python, providing data structures and operations for manipulating numerical tables and time series.

\`\`\`python
import pandas as pd

# Reading data
df = pd.read_csv('sales_data.csv')

# Basic exploration
print(df.head())           # First 5 rows
print(df.info())           # Data types and info
print(df.describe())       # Statistical summary

# Data manipulation
filtered_df = df[df['sales'] > 1000]
grouped = df.groupby('category')['sales'].sum()
\`\`\`

### 3. Matplotlib & Seaborn - Data Visualization

These libraries help create beautiful and informative visualizations.

\`\`\`python
import matplotlib.pyplot as plt
import seaborn as sns

# Basic plot
plt.figure(figsize=(10, 6))
plt.plot(df['date'], df['sales'])
plt.title('Sales Over Time')
plt.show()

# Seaborn for statistical plots
sns.boxplot(data=df, x='category', y='sales')
plt.show()
\`\`\`

## Common Data Analysis Workflows

### 1. Data Loading and Exploration

\`\`\`python
# Load data
df = pd.read_csv('data.csv')

# Explore structure
print(f"Shape: {df.shape}")
print(f"Columns: {df.columns.tolist()}")
print(f"Data types: {df.dtypes}")

# Check for missing values
print(df.isnull().sum())
\`\`\`

### 2. Data Cleaning

\`\`\`python
# Handle missing values
df = df.dropna()  # Remove rows with missing values
# or
df = df.fillna(df.mean())  # Fill with mean

# Remove duplicates
df = df.drop_duplicates()

# Data type conversion
df['date'] = pd.to_datetime(df['date'])
df['category'] = df['category'].astype('category')
\`\`\`

### 3. Exploratory Data Analysis (EDA)

\`\`\`python
# Statistical summary
print(df.describe())

# Correlation analysis
correlation_matrix = df.corr()
sns.heatmap(correlation_matrix, annot=True)

# Distribution plots
df['sales'].hist(bins=30)
plt.title('Sales Distribution')
plt.show()
\`\`\`

## Advanced Techniques

### Group Operations
\`\`\`python
# Group by multiple columns
result = df.groupby(['category', 'region']).agg({
    'sales': ['sum', 'mean', 'count'],
    'profit': 'sum'
})
\`\`\`

### Time Series Analysis
\`\`\`python
# Set date as index
df.set_index('date', inplace=True)

# Resample to monthly data
monthly_sales = df['sales'].resample('M').sum()

# Calculate rolling averages
df['rolling_avg'] = df['sales'].rolling(window=7).mean()
\`\`\`

### Pivot Tables
\`\`\`python
# Create pivot table
pivot = pd.pivot_table(df, 
                       values='sales', 
                       index='category', 
                       columns='month', 
                       aggfunc='sum')
\`\`\`

## Performance Tips

1. **Use Vectorized Operations**: Avoid loops when possible
2. **Choose Appropriate Data Types**: Use categories for categorical data
3. **Chunk Large Files**: Process large datasets in chunks
4. **Use Built-in Functions**: Pandas functions are optimized

\`\`\`python
# Vectorized operation (fast)
df['profit_margin'] = df['profit'] / df['sales']

# Instead of loops (slow)
# for i in range(len(df)):
#     df.loc[i, 'profit_margin'] = df.loc[i, 'profit'] / df.loc[i, 'sales']
\`\`\`

## Best Practices

- **Document Your Code**: Use comments and docstrings
- **Handle Errors Gracefully**: Use try-except blocks
- **Validate Your Data**: Check data quality at each step
- **Use Version Control**: Track changes with Git
- **Test Your Analysis**: Verify results with different approaches

## Conclusion

Python's ecosystem provides powerful tools for data analysis. Start with these essential libraries and gradually explore more specialized tools as your needs grow. Remember, practice is key to mastering these techniques!

In our next article, we'll dive deeper into advanced Pandas techniques and explore machine learning with scikit-learn.
        `
    }
    // Commented out additional articles - uncomment when you add more content
    /*
    // Add more articles here when ready
    // 3: { ... },
    // 4: { ... },
    // etc.
    */
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeArticlePage();
    initializeTableOfContents();
    initializeSocialShare();
    initializeBookmark();
    initializeReadingProgress();
    loadRelatedArticles();
    initializeNewsletterForm();
    initializeTheme();
    initializeBackToTop();
    initializeAOS();
});

// ===================================
//   ARTICLE PAGE INITIALIZATION
// ===================================

function initializeArticlePage() {
    // Get article ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId && articlesDatabase[articleId]) {
        loadArticle(articlesDatabase[articleId]);
    } else {
        // Article not found
        displayArticleNotFound();
    }
}

function loadArticle(article) {
    // Update page title and meta
    document.title = `${article.title} - Asad In Data`;
    document.getElementById('article-title').content = article.title;
    document.getElementById('article-description').content = article.excerpt;
    
    // Update Open Graph tags
    document.getElementById('og-title').content = article.title;
    document.getElementById('og-description').content = article.excerpt;
    document.getElementById('og-url').content = window.location.href;
    document.getElementById('og-image').content = article.image;
    
    // Update Twitter Card tags
    document.getElementById('twitter-title').content = article.title;
    document.getElementById('twitter-description').content = article.excerpt;
    document.getElementById('twitter-image').content = article.image;
    
    // Update structured data
    updateStructuredData(article);
    
    // Update page content
    document.getElementById('main-title').textContent = article.title;
    document.getElementById('article-category').textContent = article.category.charAt(0).toUpperCase() + article.category.slice(1);
    document.getElementById('publish-date').textContent = formatDate(article.date);
    document.getElementById('read-time').textContent = article.readTime;
    document.getElementById('view-count').textContent = generateViewCount();
    
    // Update featured image
    const featuredImage = document.getElementById('featured-image');
    featuredImage.src = article.image;
    featuredImage.alt = article.title;
    
    // Update tags
    updateArticleTags(article.tags);
    
    // Load article content
    loadArticleContent(article.content);
    
    // Update navigation
    updateArticleNavigation(article.id);
}

function updateStructuredData(article) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "author": {
            "@type": "Person",
            "name": article.author
        },
        "datePublished": article.date,
        "dateModified": article.date,
        "image": article.image,
        "publisher": {
            "@type": "Organization",
            "name": "Asad In Data",
            "logo": {
                "@type": "ImageObject",
                "url": "/favicon.ico"
            }
        },
        "description": article.excerpt
    };
    
    document.getElementById('structured-data').textContent = JSON.stringify(structuredData);
}

function updateArticleTags(tags) {
    const tagsContainer = document.getElementById('article-tags');
    tagsContainer.innerHTML = '';
    
    tags.forEach(tag => {
        const tagElement = document.createElement('a');
        tagElement.href = `index.html#articles`;
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
}

function loadArticleContent(content) {
    const articleText = document.getElementById('article-text');
    
    // Convert Markdown-style content to HTML
    const htmlContent = convertMarkdownToHTML(content);
    articleText.innerHTML = htmlContent;
    
    // Apply syntax highlighting if Prism.js is available
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
    
    // Add copy buttons to code blocks
    addCopyButtonsToCodeBlocks();
}

function convertMarkdownToHTML(markdown) {
    let html = markdown;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');
    
    // Code blocks
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, (match, lang, code) => {
        const language = lang || 'javascript';
        return `<pre><code class="language-${language}">${code.trim()}</code></pre>`;
    });
    
    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');
    
    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
    
    // Line breaks
    html = html.replace(/\n\n/gim, '</p><p>');
    html = html.replace(/\n/gim, '<br>');
    
    // Wrap in paragraphs
    html = '<p>' + html + '</p>';
    
    // Clean up empty paragraphs and fix structure
    html = html.replace(/<p><\/p>/gim, '');
    html = html.replace(/<p>(<h[1-6]>.*<\/h[1-6]>)<\/p>/gim, '$1');
    html = html.replace(/<p>(<pre>.*<\/pre>)<\/p>/gim, '$1');
    html = html.replace(/<p>(<blockquote>.*<\/blockquote>)<\/p>/gim, '$1');
    
    return html;
}

function addCopyButtonsToCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(codeBlock => {
        const pre = codeBlock.parentElement;
        
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-btn';
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.setAttribute('aria-label', 'Copy code');
        
        // Position button
        pre.style.position = 'relative';
        copyButton.style.position = 'absolute';
        copyButton.style.top = '10px';
        copyButton.style.right = '10px';
        copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
        copyButton.style.border = 'none';
        copyButton.style.color = 'white';
        copyButton.style.padding = '8px';
        copyButton.style.borderRadius = '4px';
        copyButton.style.cursor = 'pointer';
        copyButton.style.fontSize = '12px';
        
        // Add click handler
        copyButton.addEventListener('click', function() {
            navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                copyButton.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            });
        });
        
        pre.appendChild(copyButton);
    });
}

function displayArticleNotFound() {
    document.getElementById('main-title').textContent = 'Article Not Found';
    document.getElementById('article-text').innerHTML = `
        <div style="text-align: center; padding: 3rem;">
            <h2>Sorry, this article could not be found.</h2>
            <p>The article you're looking for might have been moved or deleted.</p>
            <a href="index.html" class="btn btn-primary">
                <i class="fas fa-arrow-left"></i>
                Back to Blog
            </a>
        </div>
    `;
}

// ===================================
//   TABLE OF CONTENTS
// ===================================

function initializeTableOfContents() {
    setTimeout(() => {
        generateTableOfContents();
        initializeTOCScrollSpy();
    }, 1000); // Wait for content to load
}

function generateTableOfContents() {
    const toc = document.getElementById('table-of-contents');
    const headings = document.querySelectorAll('#article-text h1, #article-text h2, #article-text h3');
    
    if (headings.length === 0) {
        toc.innerHTML = '<p>No headings found</p>';
        return;
    }
    
    let tocHTML = '<ul>';
    
    headings.forEach((heading, index) => {
        // Add ID to heading for linking
        const id = `heading-${index}`;
        heading.id = id;
        
        // Create TOC entry
        const level = parseInt(heading.tagName.charAt(1));
        const indent = level > 2 ? 'style="margin-left: 20px;"' : '';
        
        tocHTML += `<li ${indent}>
            <a href="#${id}" class="toc-link">${heading.textContent}</a>
        </li>`;
    });
    
    tocHTML += '</ul>';
    toc.innerHTML = tocHTML;
}

function initializeTOCScrollSpy() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const headings = document.querySelectorAll('#article-text h1, #article-text h2, #article-text h3');
    
    function updateActiveTOCLink() {
        let activeHeading = null;
        
        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            if (rect.top <= 150) {
                activeHeading = heading;
            }
        });
        
        // Update active link
        tocLinks.forEach(link => link.classList.remove('active'));
        
        if (activeHeading) {
            const activeLink = document.querySelector(`a[href="#${activeHeading.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', debounce(updateActiveTOCLink, 100));
    updateActiveTOCLink(); // Initial call
}

// ===================================
//   SOCIAL SHARING
// ===================================

function initializeSocialShare() {
    const shareBtn = document.getElementById('share-btn');
    const shareButtons = document.querySelectorAll('.share-btn-vertical');
    
    const shareData = {
        title: document.title,
        url: window.location.href,
        text: document.querySelector('meta[name="description"]')?.content || ''
    };
    
    // Main share button
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share(shareData);
            } else {
                // Fallback to copy URL
                navigator.clipboard.writeText(window.location.href).then(() => {
                    showToast('Link copied to clipboard!', 'success');
                });
            }
        });
    }
    
    // Social media share buttons
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.getAttribute('data-platform');
            const url = generateShareURL(platform, shareData);
            
            window.open(url, '_blank', 'width=600,height=400');
        });
    });
}

function generateShareURL(platform, data) {
    const urls = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.title)}&url=${encodeURIComponent(data.url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(data.url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url)}`,
        reddit: `https://reddit.com/submit?url=${encodeURIComponent(data.url)}&title=${encodeURIComponent(data.title)}`
    };
    
    return urls[platform] || '#';
}

// ===================================
//   BOOKMARK FUNCTIONALITY
// ===================================

function initializeBookmark() {
    const bookmarkBtn = document.getElementById('bookmark-btn');
    const articleId = new URLSearchParams(window.location.search).get('id');
    
    if (!bookmarkBtn || !articleId) return;
    
    // Check if article is bookmarked
    const bookmarks = getBookmarks();
    const isBookmarked = bookmarks.includes(articleId);
    
    updateBookmarkButton(bookmarkBtn, isBookmarked);
    
    bookmarkBtn.addEventListener('click', function() {
        const bookmarks = getBookmarks();
        const isCurrentlyBookmarked = bookmarks.includes(articleId);
        
        if (isCurrentlyBookmarked) {
            removeBookmark(articleId);
            updateBookmarkButton(this, false);
            showToast('Bookmark removed', 'info');
        } else {
            addBookmark(articleId);
            updateBookmarkButton(this, true);
            showToast('Article bookmarked!', 'success');
        }
    });
}

function getBookmarks() {
    return JSON.parse(localStorage.getItem('blogBookmarks') || '[]');
}

function addBookmark(articleId) {
    const bookmarks = getBookmarks();
    if (!bookmarks.includes(articleId)) {
        bookmarks.push(articleId);
        localStorage.setItem('blogBookmarks', JSON.stringify(bookmarks));
    }
}

function removeBookmark(articleId) {
    const bookmarks = getBookmarks();
    const index = bookmarks.indexOf(articleId);
    if (index > -1) {
        bookmarks.splice(index, 1);
        localStorage.setItem('blogBookmarks', JSON.stringify(bookmarks));
    }
}

function updateBookmarkButton(btn, isBookmarked) {
    const icon = btn.querySelector('i');
    if (isBookmarked) {
        icon.className = 'fas fa-bookmark';
        btn.classList.add('bookmarked');
    } else {
        icon.className = 'far fa-bookmark';
        btn.classList.remove('bookmarked');
    }
}

// ===================================
//   READING PROGRESS
// ===================================

function initializeReadingProgress() {
    const progressBar = document.getElementById('progress-bar');
    const articleBody = document.getElementById('article-text');
    
    if (!progressBar || !articleBody) return;
    
    window.addEventListener('scroll', function() {
        const articleTop = articleBody.offsetTop;
        const articleHeight = articleBody.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        const articleStart = articleTop - windowHeight / 2;
        const articleEnd = articleTop + articleHeight - windowHeight / 2;
        
        if (scrollTop < articleStart) {
            progressBar.style.width = '0%';
        } else if (scrollTop > articleEnd) {
            progressBar.style.width = '100%';
        } else {
            const progress = ((scrollTop - articleStart) / (articleEnd - articleStart)) * 100;
            progressBar.style.width = `${Math.max(0, Math.min(100, progress))}%`;
        }
    });
}

// ===================================
//   RELATED ARTICLES
// ===================================

function loadRelatedArticles() {
    const relatedContainer = document.getElementById('related-articles');
    const currentArticleId = new URLSearchParams(window.location.search).get('id');
    
    if (!relatedContainer) return;
    
    // Get related articles (simplified - in real app, you'd use tags/category matching)
    const allArticles = Object.values(articlesDatabase);
    const relatedArticles = allArticles
        .filter(article => article.id != currentArticleId)
        .slice(0, 3);
    
    relatedContainer.innerHTML = '';
    
    relatedArticles.forEach((article, index) => {
        const articleCard = createRelatedArticleCard(article);
        articleCard.style.animationDelay = `${index * 100}ms`;
        relatedContainer.appendChild(articleCard);
    });
}

function createRelatedArticleCard(article) {
    const card = document.createElement('a');
    card.href = `article.html?id=${article.id}`;
    card.className = 'related-article-card fade-in';
    
    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="related-article-image" loading="lazy">
        <div class="related-article-content">
            <h3 class="related-article-title">${article.title}</h3>
            <p class="related-article-excerpt">${article.excerpt.substring(0, 120)}...</p>
            <div class="related-article-meta">
                <span>${formatDate(article.date)}</span>
                <span>${article.readTime}</span>
            </div>
        </div>
    `;
    
    return card;
}

// ===================================
//   NAVIGATION
// ===================================

function updateArticleNavigation(currentId) {
    const allArticles = Object.values(articlesDatabase);
    const currentIndex = allArticles.findIndex(article => article.id == currentId);
    
    const prevArticleLink = document.getElementById('prev-article');
    const nextArticleLink = document.getElementById('next-article');
    
    // Previous article
    if (currentIndex > 0) {
        const prevArticle = allArticles[currentIndex - 1];
        prevArticleLink.href = `article.html?id=${prevArticle.id}`;
        prevArticleLink.querySelector('.nav-title').textContent = prevArticle.title;
        prevArticleLink.style.display = 'flex';
    } else {
        prevArticleLink.style.display = 'none';
    }
    
    // Next article
    if (currentIndex < allArticles.length - 1) {
        const nextArticle = allArticles[currentIndex + 1];
        nextArticleLink.href = `article.html?id=${nextArticle.id}`;
        nextArticleLink.querySelector('.nav-title').textContent = nextArticle.title;
        nextArticleLink.style.display = 'flex';
    } else {
        nextArticleLink.style.display = 'none';
    }
}

// ===================================
//   UTILITY FUNCTIONS
// ===================================

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function generateViewCount() {
    // In a real app, this would come from analytics
    return Math.floor(Math.random() * 5000) + 500;
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

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : 'info'}-circle"></i>
        <span>${message}</span>
    `;
    
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
    
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// ===================================
//   THEME AND OTHER FUNCTIONALITY
// ===================================

// Import shared functionality from main blog script
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

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

function initializeNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<div class="spinner"></div> Subscribing...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
                submitBtn.style.background = 'var(--success-color)';
                
                setTimeout(() => {
                    this.reset();
                    submitBtn.innerHTML = originalContent;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 2000);
                
                showToast('Thank you for subscribing!', 'success');
            }, 1500);
        });
    }
}

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
