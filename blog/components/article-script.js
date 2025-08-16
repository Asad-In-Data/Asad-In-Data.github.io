// ===================================
//   ARTICLE PAGE JAVASCRIPT
// ===================================

// Sample articles data (in a real app, this would come from your articles folder)
const articlesDatabase = {
    1: {
        id: 1,
        title: "Mastering Logistic Regression as a Base Model – A Self-Taught Perspective",
        excerpt: "As someone learning machine learning by building real-world projects, I've come to appreciate the power of Logistic Regression as a solid baseline model. Learn how it works, why we use it, and how to handle imbalanced data.",
        category: "python",
        tags: ["Machine Learning", "Logistic Regression", "Python", "Classification"],
        date: "2025-01-20",
        readTime: "12 min read",
        image: "../images/Churn_ml.png",
        author: "Asad Ali",
        content: `
# Mastering Logistic Regression as a Base Model – A Self-Taught Perspective

As someone learning machine learning by building real-world projects (rather than watching endless lectures), I've come to appreciate the power of Logistic Regression as a solid baseline model. It's simple, fast, interpretable, and surprisingly effective in many real-world scenarios.

In this post, I'll walk through what Logistic Regression is, how it works, why we use it, and what I've learned while applying it in practice – especially when dealing with imbalanced classification problems.

## What is Logistic Regression?

Despite its name, Logistic Regression is not a regression algorithm – it's used for binary classification tasks. That means it helps answer questions like:

- Will the customer churn? (Yes/No)
- Is this transaction fraudulent? (Yes/No) 
- Does the patient have the disease? (Yes/No)

At its core, it calculates a linear combination of the input features, applies a sigmoid function to squash the output between 0 and 1, and then uses a threshold (usually 0.5) to decide which class the input belongs to.

## How It Works (Intuitively)

### 1. Compute Linear Score (z):
\`\`\`
z = w1x1 + w2x2 + ... + b
\`\`\`

### 2. Apply Sigmoid Function:
Converts z to a probability between 0 and 1:
\`\`\`
σ(z) = 1/(1 + e^(-z))
\`\`\`

### 3. Make Prediction:
- If probability > 0.5 → Class 1
- Else → Class 0

This simplicity makes Logistic Regression ideal as a starting point for most binary classification problems.

## Why I Use It as a Base Model

In every project I work on, I start with Logistic Regression because:

✅ **It's fast and easy to implement**  
✅ **It's interpretable** – the coefficients tell me how features affect the output  
✅ **It gives me a baseline** to compare more complex models like Random Forest or XGBoost  
✅ **It often performs surprisingly well**, especially when combined with proper preprocessing  

## My Dataset: Imbalanced Binary Classification

While working on a binary classification dataset with class imbalance (Class 1 ≈ 27%, Class 0 ≈ 73%), I applied logistic regression after feature scaling:

### Preprocessing
\`\`\`python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
\`\`\`

### Training the Model
\`\`\`python
from sklearn.linear_model import LogisticRegression

model = LogisticRegression(max_iter=1000, class_weight='balanced')
model.fit(X_train_scaled, y_train)
\`\`\`

### Evaluation
\`\`\`python
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score, roc_auc_score

y_pred = model.predict(X_test_scaled)
y_proba = model.predict_proba(X_test_scaled)[:, 1]

print("Accuracy:", accuracy_score(y_test, y_pred))
print("Confusion Matrix:\\n", confusion_matrix(y_test, y_pred))
print("Classification Report:\\n", classification_report(y_test, y_pred))
print("ROC-AUC Score:", roc_auc_score(y_test, y_proba))
\`\`\`

## Results (Sample Output)

**Accuracy:** 78.8%  
**Confusion Matrix:**
\`\`\`
[[916 117]
 [181 193]]
\`\`\`

**Precision (Class 1):** 62%  
**Recall (Class 1):** 52%  
**F1-Score (Class 1):** 56%  
**ROC-AUC Score:** ~0.79  

These results revealed something crucial: Although the overall accuracy was good, the recall for Class 1 (minority class) was low, which means the model was missing actual positive cases.

This insight led me to experiment further with:
- Class balancing techniques (\`class_weight='balanced'\`)
- Resampling methods like SMOTE
- Other models like Random Forest for deeper analysis

## Key Takeaways for Fellow Learners

- **Logistic Regression is the best place to start** in any binary classification task
- **Don't blindly trust accuracy** – always check precision, recall, F1-score, and confusion matrix
- **If your data is imbalanced, handle it explicitly** using class weights or oversampling
- **Logistic Regression is also great for learning feature importance** and understanding relationships in your data

| Use Case | Recommended? |
|----------|--------------|
| Binary classification (yes/no) | ✅ Yes |
| Simple and linearly separable data | ✅ Yes |
| Feature importance explanation needed | ✅ Yes |
| Complex non-linear patterns | ❌ Try Random Forest / XGBoost |

## Final Thought

You don't need to start with complex models. A well-tuned Logistic Regression model – with good preprocessing and careful evaluation – can take you surprisingly far.

I'll continue posting about my journey with classification models, including decision trees, KNN, and ensemble techniques. Let me know if you'd like to see the code, data, or full notebook.

> **Your Turn:** Have you tried Logistic Regression in your own projects? What did you discover about your data when you did? Drop your experience in the comments or DM me – let's connect and grow together! 🚀
        `
    },
    2: {
        id: 2,
        title: "From Baseline to Power: Using Random Forest to Boost Classification Performance",
        excerpt: "After building a solid baseline with Logistic Regression, discover how Random Forest can take your machine learning project to the next level. Learn about ensemble methods and feature importance.",
        category: "python",
        tags: ["Random Forest", "Machine Learning", "Ensemble", "Feature Importance"],
        date: "2025-01-18",
        readTime: "10 min read",
        image: "../images/Auto_EDA.png",
        author: "Asad Ali",
        content: `
# From Baseline to Power: Using Random Forest to Boost Classification Performance

After building a solid baseline with Logistic Regression, I decided to take my machine learning project to the next level using one of the most powerful and widely-used classifiers in the industry – Random Forest.

In this article, I'll walk through what Random Forest is, how it works, why it's better for complex problems, and how I used it to improve my classification project – especially for handling imbalanced data.

## What Is Random Forest?

Random Forest is an ensemble machine learning algorithm that builds multiple decision trees, and combines their predictions to make a final output. It's one of the most reliable models in supervised learning, especially when your data has:

- Non-linear relationships
- Noisy features
- Imbalanced classes

## How It Works (Simply)

### 1. Bootstrapping
Random samples (with replacement) are drawn to train each tree.

### 2. Random Feature Selection
At each node, a random subset of features is chosen to split on – this creates diversity in the trees.

### 3. Voting/Averaging
- **For classification:** Majority vote from all trees
- **For regression:** Average of all predictions

This results in a robust, low-variance, and high-accuracy model.

## Why I Switched to Random Forest

In my binary classification project, I had already used Logistic Regression. While it gave good accuracy (~79%), it struggled with Class 1 recall due to class imbalance.

Random Forest allowed me to:
- Capture non-linear patterns
- Handle imbalance using \`class_weight='balanced'\`
- Gain insights via feature importance
- Improve recall and F1-score

## Model Implementation

Here's the implementation I used:

\`\`\`python
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix, roc_auc_score

# Initialize model
rf_model = RandomForestClassifier(
    n_estimators=100,
    class_weight='balanced',
    random_state=42
)

# Train
rf_model.fit(X_train, y_train)

# Predict
y_pred = rf_model.predict(X_test)
y_proba = rf_model.predict_proba(X_test)[:, 1]

# Evaluate
print("Accuracy:", accuracy_score(y_test, y_pred))
print("Confusion Matrix:\\n", confusion_matrix(y_test, y_pred))
print("Classification Report:\\n", classification_report(y_test, y_pred))
print("ROC-AUC Score:", roc_auc_score(y_test, y_proba))
\`\`\`

## Results (Sample)

**Accuracy:** 83%  
**Precision (Class 1):** 70%  
**Recall (Class 1):** 61%  
**F1-score (Class 1):** 65%  
**ROC-AUC:** ~0.86  

🎯 **Compared to Logistic Regression, Random Forest significantly improved recall for Class 1** – which was the priority in my project.

## Bonus: Feature Importance Visualization

Understanding which features drive predictions is critical. Random Forest makes this easy:

\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt

feat_imp = pd.Series(rf_model.feature_importances_, index=X.columns)
feat_imp.nlargest(10).plot(kind='barh', title='Top 10 Feature Importances')
plt.gca().invert_yaxis()
plt.tight_layout()
plt.show()
\`\`\`

This helped me explain the model's behavior and identify key drivers in the data.

## Model Tuning (Optional)

Later, I'll tune hyperparameters using GridSearchCV. Some parameters worth exploring:

| Parameter | Description |
|-----------|-------------|
| \`n_estimators\` | Number of trees |
| \`max_depth\` | Max depth of each tree |
| \`min_samples_split\` | Min samples to split a node |
| \`max_features\` | Max features considered at each split |

## Key Takeaways

- **Random Forest is easy to use and powerful**
- **It handles class imbalance better than Logistic Regression**
- **Feature importance provides explainability**
- **Works well with non-linear and noisy data**
- **A great next step after building a simple baseline**

## What's Next?

I'll now compare Random Forest with other advanced classifiers like:
- 🔹 Support Vector Machines (SVM)
- 🔹 K-Nearest Neighbors (KNN)
- 🔹 XGBoost

Stay tuned for Part 3 of my journey – where I'll bring everything together and build a final comparison report.

> **Are you also improving your model performance with ensemble methods?** Let me know your experience or drop your questions in the comments.

Let's keep learning – one model at a time. 🚀

**Follow me for more real-world, project-based machine learning breakdowns. No lectures – just code, logic, and results.**
        `
    },
    3: {
        id: 3,
        title: "Random Forest vs Logistic Regression: A Practical Comparison Through Real Projects",
        excerpt: "A detailed comparison between Logistic Regression and Random Forest based on real project results. Learn when to use which model and understand their strengths and limitations.",
        category: "insights",
        tags: ["Model Comparison", "Machine Learning", "Performance Analysis"],
        date: "2025-01-16",
        readTime: "8 min read",
        image: "../images/Data Analyst.png",
        author: "Asad Ali",
        content: `
# Random Forest vs Logistic Regression: A Practical Comparison Through Real Projects

When building machine learning models, I always start with a simple baseline – and gradually move toward more complex, powerful algorithms. In one of my recent binary classification projects, I began with Logistic Regression, then improved results using Random Forest.

In this post, I'll walk through the key differences, strengths, limitations, and performance comparison between the two – based on real project results.

## A Quick Recap of the Models

### 🔹 Logistic Regression
- A linear model for binary classification
- Computes a weighted sum of features and applies a sigmoid function
- Outputs a probability between 0 and 1
- Assumes linear relationship between input and output

### 🔹 Random Forest
- An ensemble of decision trees
- Uses bootstrapping + feature randomness to build diverse trees
- Aggregates results via majority voting
- Handles non-linear patterns better

## My Project Setup

I used both models on the same dataset:
- Binary classification problem
- Slightly imbalanced target variable
- Preprocessed features (scaling for Logistic Regression only)
- Evaluated using: Accuracy, Precision, Recall, F1-Score, ROC-AUC

## Performance Comparison

| Metric | Logistic Regression | Random Forest |
|--------|-------------------|---------------|
| **Accuracy** | 78.8% | 83% |
| **Precision (Class 1)** | 62% | 70% |
| **Recall (Class 1)** | 52% | 61% |
| **F1-Score (Class 1)** | 56% | 65% |
| **ROC-AUC Score** | ~0.79 | ~0.86 |

🎯 **Observation:** Random Forest outperformed Logistic Regression on almost every metric – especially Recall and F1-score for the minority class.

## Interpretation

| Factor | Logistic Regression | Random Forest |
|--------|-------------------|---------------|
| **🔹 Linear vs Non-linear** | Works well if data is linearly separable | Handles complex decision boundaries |
| **🔹 Needs Scaling?** | Yes | No |
| **🔹 Interpretability** | High (coefficients are explainable) | Lower (black-box, but offers feature importance) |
| **🔹 Imbalance Handling** | Needs class_weight or resampling | Works well with \`class_weight='balanced'\` |
| **🔹 Speed** | Fast | Slower |
| **🔹 Use Case** | Quick baseline & explainable models | Production-level performance |

## Feature Importance (Bonus from Random Forest)

One benefit I got from Random Forest was the ability to visualize feature importance:

\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt

feat_imp = pd.Series(rf_model.feature_importances_, index=X.columns)
feat_imp.nlargest(10).plot(kind='barh', title='Top 10 Important Features')
plt.gca().invert_yaxis()
plt.tight_layout()
plt.show()
\`\`\`

This gave me a clear view of which features were driving predictions – something not directly available in logistic regression without deep analysis.

## Key Takeaways

- **Start with Logistic Regression** for a fast, interpretable baseline
- **Move to Random Forest when:**
  - You need better recall or overall accuracy
  - Your data shows non-linearity
  - You can afford slightly more training time
- **Evaluate models beyond accuracy:** check precision, recall, and ROC-AUC
- **Compare results, not just algorithms** – each dataset behaves differently

## What's Next?

After Logistic Regression and Random Forest, I upgraded my model performance even further by introducing XGBoost – an advanced gradient boosting algorithm.

**Coming up next:**
🚀 **"XGBoost for Classification – How I Took My Model from Good to Exceptional"**

Let's keep leveling up. 🚀

> **Have you compared models on your project? What worked best for you?**  
I'd love to hear your approach – drop a comment or connect with me!
        `
    },
    4: {
        id: 4,
        title: "XGBoost for Classification – From Good to Exceptional",
        excerpt: "Take your binary classification project from good to exceptional with XGBoost. Learn how gradient boosting works, implementation details, and why XGBoost is the gold standard in ML competitions.",
        category: "python",
        tags: ["XGBoost", "Gradient Boosting", "Advanced ML", "Competition"],
        date: "2025-01-14",
        readTime: "15 min read",
        image: "../images/Web_Scrape.png",
        author: "Asad Ali",
        content: `
# XGBoost for Classification – From Good to Exceptional

After using Logistic Regression as a base model and Random Forest for a power boost, I decided to go one step further – and it was worth it.

In this post, I'll break down how I used XGBoost to take my binary classification project from good to exceptional. From intuition to implementation, you'll see why XGBoost is often the gold standard in machine learning competitions and production systems alike.

## What is XGBoost?

XGBoost stands for **eXtreme Gradient Boosting** – it's a boosted ensemble of decision trees trained sequentially, where each tree tries to fix the mistakes of the previous one.

Unlike Random Forest, which builds trees independently, XGBoost learns from errors – like a true student.

It uses gradient descent optimization to minimize loss, and regularization to prevent overfitting.

## How XGBoost Works (Intuition)

1. **Train the first tree** to make initial predictions
2. **Compute the errors** (residuals)
3. **Train the next tree** to predict these residuals
4. **Repeat** for many small trees
5. **Add up the predictions** (with weights) for the final output

Each tree is a "corrective layer," making the ensemble smarter with every step.

## Why I Switched to XGBoost

After using Random Forest, I still had:
- Slight class imbalance issues
- Desire for even better recall & precision
- Curiosity about state-of-the-art models

I knew XGBoost could offer:
- **Boosted performance**
- **Fine control through hyperparameters**
- **Built-in handling for imbalance**
- **Fast training** even on large datasets

## Model Implementation (My Workflow)

\`\`\`python
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix, roc_auc_score

# Initialize XGBoost model
xgb_model = XGBClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=5,
    scale_pos_weight=2,   # handles imbalance
    use_label_encoder=False,
    eval_metric='logloss',
    random_state=42
)

# Train
xgb_model.fit(X_train, y_train)

# Predict
y_pred = xgb_model.predict(X_test)
y_proba = xgb_model.predict_proba(X_test)[:, 1]

# Evaluate
print("Accuracy:", accuracy_score(y_test, y_pred))
print("Confusion Matrix:\\n", confusion_matrix(y_test, y_pred))
print("Classification Report:\\n", classification_report(y_test, y_pred))
print("ROC-AUC Score:", roc_auc_score(y_test, y_proba))
\`\`\`

## Performance Results

**Accuracy:** 85%  
**Precision (Class 1):** 76%  
**Recall (Class 1):** 68%  
**F1-Score (Class 1):** 72%  
**ROC-AUC Score:** ~0.89  

🎯 **That's a solid improvement over both Logistic Regression and Random Forest!**

## Key Benefits I Observed

| Feature | Why It Helped |
|---------|---------------|
| **🔹 Boosting** | Better learning from errors |
| **🔹 scale_pos_weight** | Better class 1 recall in imbalanced data |
| **🔹 Regularization** | Reduced overfitting risk |
| **🔹 Faster training** | Efficient on medium-large datasets |
| **🔹 Feature importance** | Built-in interpretation tools |

## Feature Importance (Bonus Visualization)

\`\`\`python
import matplotlib.pyplot as plt
from xgboost import plot_importance

plot_importance(xgb_model, max_num_features=10, height=0.5, title='Top Features by XGBoost')
plt.tight_layout()
plt.show()
\`\`\`

This gave me deeper visibility into which features were truly driving predictions – critical for stakeholder reporting.

## Next Steps: Hyperparameter Tuning

XGBoost becomes even more powerful when fine-tuned.

| Parameter | Effect |
|-----------|--------|
| \`max_depth\` | Tree depth control |
| \`learning_rate\` | Smaller = slower but better |
| \`n_estimators\` | Total number of trees |
| \`subsample\` | Row sampling for regularization |
| \`colsample_bytree\` | Feature sampling per tree |
| \`scale_pos_weight\` | Balances imbalance |
| \`gamma, lambda\` | Controls overfitting (regularization) |

You can use GridSearchCV or Optuna for tuning.

## Final Comparison Table

| Metric | Logistic Regression | Random Forest | XGBoost |
|--------|-------------------|---------------|---------|
| **Accuracy** | 78.8% | 83% | **85%** |
| **Precision (Class 1)** | 62% | 70% | **76%** |
| **Recall (Class 1)** | 52% | 61% | **68%** |
| **F1-score (Class 1)** | 56% | 65% | **72%** |
| **ROC-AUC** | ~0.79 | ~0.86 | **~0.89** |

🏆 **XGBoost wins across the board.**

## Takeaways for Practitioners

- **Always start simple** – build, learn, improve
- **XGBoost is worth the jump when:**
  - Accuracy needs a boost
  - Imbalance is an issue
  - You need fine control
- **It's fast, reliable, and trusted by Kaggle champions & companies alike**

## What's Next?

I'll now finalize my project by comparing all models, visualizing results, and packaging insights into a complete project report.

**Up next:**
🚀 **"Model Comparison & Final Evaluation – Logistic vs Random Forest vs XGBoost"**

Let's keep building.  
One model at a time. 🚀

> **Have you used XGBoost in your projects?**  
What challenges did you face while tuning it?  
Let's talk in the comments!
        `
    },
    5: {
        id: 5,
        title: "SVM vs KNN: Which One Should I Trust With My Classification?",
        excerpt: "Exploring Support Vector Machines and K-Nearest Neighbors side by side. Real metrics, code, and observations to help you choose the right algorithm for your classification problems.",
        category: "python",
        tags: ["SVM", "KNN", "Classification", "Algorithm Comparison"],
        date: "2025-01-12",
        readTime: "11 min read",
        image: "../images/Logic.png",
        author: "Asad Ali",
        content: `
# SVM vs KNN: Which One Should I Trust With My Classification?

## Day 4 of My Model Exploration Log

After testing Logistic Regression, Random Forest, and XGBoost on my classification project, I reached a fork in the road:

**"Should I use Support Vector Machines (SVM)?  
Or try K-Nearest Neighbors (KNN)?"**

So I decided to test both, side by side, with real metrics, code, and observations.

## Step 1: What Are These Models?

### 🔹 SVM (Support Vector Machine)
- Tries to draw the **best boundary** between classes
- Focuses on **maximizing the margin** between the classes
- Good for **clear separation**
- Can be **kernelized** (RBF, poly) for complex boundaries

**🎯 Ideal For:** Clean, high-dimensional data  
**⚠️ Watch Out:** Slower on large datasets

### 🔹 KNN (K-Nearest Neighbors)
- **Memorizes the entire training data**
- Classifies a point by **voting from its k-nearest neighbors**
- **No learning phase** – pure instance-based

**🎯 Ideal For:** Low-dimensional, well-distributed data  
**⚠️ Watch Out:** Slows down during prediction

## Step 2: Training Both Models

\`\`\`python
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix, roc_auc_score

# SVM Model
svm_model = SVC(kernel='rbf', probability=True, class_weight='balanced', random_state=42)
svm_model.fit(X_train_scaled, y_train)

# KNN Model
knn_model = KNeighborsClassifier(n_neighbors=5)
knn_model.fit(X_train_scaled, y_train)
\`\`\`

## Step 3: Evaluation Loop

\`\`\`python
for name, model in zip(['SVM', 'KNN'], [svm_model, knn_model]):
    y_pred = model.predict(X_test_scaled)
    y_proba = model.predict_proba(X_test_scaled)[:, 1]
    
    print(f"\\n🔹 Results for: {name}")
    print("Accuracy:", accuracy_score(y_test, y_pred))
    print("Confusion Matrix:\\n", confusion_matrix(y_test, y_pred))
    print("Classification Report:\\n", classification_report(y_test, y_pred))
    print("ROC-AUC Score:", roc_auc_score(y_test, y_proba))
\`\`\`

## Step 4: My Observations

### 🔹 SVM:
- **ROC-AUC:** 0.88
- **Class 1 Recall:** 66%
- **F1-score:** 69%
- **Slower to train**, but great at precision and margin

### 🔹 KNN:
- **ROC-AUC:** 0.82
- **Class 1 Recall:** 59%
- **F1-score:** 63%
- **Faster to implement**, slower to predict, and affected by scaling & k

## Step 5: When Would I Choose What?

| Use Case | Go with SVM | Go with KNN |
|----------|-------------|-------------|
| You want **clean margin** between classes | ✅ | ❌ |
| Your data is **noisy or high-dimensional** | ✅ | ❌ |
| You need **instant model** | ❌ | ✅ |
| Dataset is **small** | ❌ | ✅ |
| You're **experimenting fast** | ❌ | ✅ |

## Final Verdict in My Case?

I went with **SVM** because:
- It gave **better class separation**
- **Recall was stronger** (important in my use case)
- **Margin was visibly clean** in 2D plots

But KNN still taught me a lot about locality and scaling sensitivity.

## My Tip If You're Choosing Between These

**Try both. Seriously.**

Tune them a little. Plot decision boundaries.  
Choose the one that makes your confusion matrix smile. 😊

## What's Next?

I'll now gather all results from:
- Logistic Regression
- Random Forest
- XGBoost
- SVM
- KNN

and build a **final comparison dashboard + model ranking report**.

Let's bring the whole project together. 🚀

> **Got your own insights on SVM vs KNN?**  
Drop a comment or show me your favorite kernel.
        `
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeArticlePage();
    initializeTableOfContents();
    initializeSocialShare();
    initializeBookmark();
    initializeReadingProgress();
    loadRelatedArticles();
    initializeComments();
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
    
    // Check if elements exist
    if (!prevArticleLink || !nextArticleLink) {
        console.log('Navigation elements not found');
        return;
    }
    
    // Previous article
    if (currentIndex > 0) {
        const prevArticle = allArticles[currentIndex - 1];
        prevArticleLink.href = `article.html?id=${prevArticle.id}`;
        const prevTitle = prevArticleLink.querySelector('.nav-title');
        if (prevTitle) {
            prevTitle.textContent = prevArticle.title;
        }
        prevArticleLink.parentElement.style.display = 'flex';
        prevArticleLink.style.pointerEvents = 'auto';
    } else {
        prevArticleLink.parentElement.style.display = 'none';
    }
    
    // Next article
    if (currentIndex < allArticles.length - 1) {
        const nextArticle = allArticles[currentIndex + 1];
        nextArticleLink.href = `article.html?id=${nextArticle.id}`;
        const nextTitle = nextArticleLink.querySelector('.nav-title');
        if (nextTitle) {
            nextTitle.textContent = nextArticle.title;
        }
        nextArticleLink.parentElement.style.display = 'flex';
        nextArticleLink.style.pointerEvents = 'auto';
    } else {
        nextArticleLink.parentElement.style.display = 'none';
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
//   COMMENTS SYSTEM (UTTERANCES)
// ===================================

function initializeComments() {
    const utterancesContainer = document.getElementById('utterances-container');
    
    if (!utterancesContainer) return;
    
    // Create Utterances script
    const utterancesScript = document.createElement('script');
    utterancesScript.src = 'https://utteranc.es/client.js';
    utterancesScript.async = true;
    utterancesScript.crossOrigin = 'anonymous';
    
    // Configure Utterances
    utterancesScript.setAttribute('repo', 'Asad-In-Data/blog-comments'); // You'll need to create this repo
    utterancesScript.setAttribute('issue-term', 'pathname');
    utterancesScript.setAttribute('theme', getUtterancesTheme());
    utterancesScript.setAttribute('label', 'blog-comment');
    
    // Add error handling
    utterancesScript.onload = function() {
        console.log('Utterances comments loaded successfully');
    };
    
    utterancesScript.onerror = function() {
        console.log('Failed to load Utterances comments');
        showCommentsError();
    };
    
    // Append script to container
    utterancesContainer.appendChild(utterancesScript);
    
    // Listen for theme changes to update Utterances
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            setTimeout(() => {
                updateUtterancesTheme();
            }, 300);
        });
    }
}

function getUtterancesTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    return currentTheme === 'dark' ? 'github-dark' : 'github-light';
}

function updateUtterancesTheme() {
    const utterancesFrame = document.querySelector('.utterances-frame');
    if (utterancesFrame) {
        const theme = getUtterancesTheme();
        const message = {
            type: 'set-theme',
            theme: theme
        };
        utterancesFrame.contentWindow.postMessage(message, 'https://utteranc.es');
    }
}

function showCommentsError() {
    const utterancesContainer = document.getElementById('utterances-container');
    utterancesContainer.innerHTML = `
        <div class="comments-error">
            <i class="fas fa-exclamation-triangle"></i>
            <h4>Comments temporarily unavailable</h4>
            <p>Having trouble loading comments? Please use the alternative discussion channels below or email me directly.</p>
        </div>
    `;
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
