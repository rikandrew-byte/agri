// FCT Vinh Thinh - Product Content Loader
// Dynamically loads and applies product translations based on current language

let productData = {};

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    loadProductTranslations();
    initializeLanguageDisplay();
    setupLanguageListener();
});

// Load product translations from JSON file
function loadProductTranslations() {
    // Determine relative path based on page URL depth
    let jsonPath = 'languages/products.json';
    if (window.location.pathname.includes('/pages/products/')) {
        jsonPath = '../../languages/products.json';
    } else if (window.location.pathname.includes('/pages/')) {
        jsonPath = '../languages/products.json';
    }

    fetch(jsonPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            productData = data;
            updateProductContent();
        })
        .catch(error => {
            console.error('Error loading product translations from ' + jsonPath + ':', error);
            // Fallback retry with alternative path if needed
            if (jsonPath !== '../../languages/products.json') {
                fetch('../../languages/products.json')
                    .then(res => res.json())
                    .then(data => {
                        productData = data;
                        updateProductContent();
                    })
                    .catch(e => console.error('Fallback load failed:', e));
            }
        });
}

// Get current language from localStorage or default to 'en'
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'en';
}

// Initialize language display (update dropdown and flag)
function initializeLanguageDisplay() {
    const currentLang = getCurrentLanguage();
    const currentBtn = document.querySelector('.current-language');
    
    if (currentBtn) {
        const langOptions = {
            'vi': '🇻🇳 Tiếng Việt',
            'en': '🇺🇸 English',
            'zh-cn': '🇨🇳 简体中文',
            'zh-tw': '🇹🇼 繁體中文',
            'hi': '🇮🇳 हिन्दी',
            'ar': '🇸🇦 العربية'
        };
        currentBtn.textContent = langOptions[currentLang] || langOptions['en'];
    }
    
    // Set text direction for Arabic
    if (currentLang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', currentLang);
    }
}

// Get product name from current URL
function getProductName() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    const productMap = {
        'cinnamon.html': 'cinnamon',
        'cinnamon-leaves.html': 'cinnamon_leaves',
        'cinnamon-branches.html': 'cinnamon_branches',
        'star-anise.html': 'star_anise',
        'green-tea.html': 'green_tea',
        'black-tea.html': 'black_tea'
    };
    
    return productMap[filename] || 'cinnamon';
}

// Main function to update product content
function updateProductContent() {
    const currentLang = getCurrentLanguage();
    const productName = getProductName();
    
    // Always trigger general UI translations for navbar, footer, etc.
    if (typeof window.updatePageContent === 'function') {
        window.updatePageContent();
    }
    
    if (!productData || !productData[productName]) {
        return;
    }
    
    const content = productData[productName][currentLang] || productData[productName]['en'];
    if (content) {
        applyProductTranslations(content);
    }
}

// Apply product translations to DOM
function applyProductTranslations(content) {
    if (!content) return;
    
    // 1. Update main heading
    if (content.heading) {
        const heading = document.getElementById('product-heading') || document.querySelector('h1');
        if (heading) {
            heading.textContent = content.heading;
        }
        document.title = content.heading + ' | FCT Vinh Thinh';
    }
    
    // 2. Update meta tags
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && content.about_p1) {
        metaDesc.setAttribute('content', content.about_p1);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && content.heading) {
        ogTitle.setAttribute('content', content.heading);
    }
    
    // 3. Update rating
    if (content.rating) {
        const ratingEl = document.querySelector('.product-detail-info .rating');
        if (ratingEl) {
            ratingEl.textContent = content.rating;
        }
    }
    
    // 4. Update product specifications
    if (content.specs && Array.isArray(content.specs)) {
        const specsContainer = document.querySelector('.product-specs-detailed');
        if (specsContainer) {
            specsContainer.innerHTML = content.specs.map(item => {
                const labelText = item.label.trim().replace(/:+$/, '') + ':';
                return `
                <div class="spec-item">
                    <strong>${labelText}</strong>
                    <span>${item.value}</span>
                </div>`;
            }).join('');
        }
    }
    
    // 5. Update quote button in hero
    if (content.btn_quote) {
        const quoteBtn = document.querySelector('.product-detail-info .btn');
        if (quoteBtn) {
            quoteBtn.textContent = content.btn_quote;
        }
    }
    
    // 6. Update all content sections
    if (content.sections && Array.isArray(content.sections)) {
        const sectionsContainer = document.getElementById('product-sections') || document.querySelector('section.container:not(.product-detail-hero):not(:has(.contact-cta))');
        if (sectionsContainer) {
            sectionsContainer.innerHTML = content.sections.map(sec => `
                <div class="content-section">
                    <h2>${sec.title}</h2>
                    ${sec.html}
                </div>
            `).join('');
        }
    }
    
    // 7. Update CTA Section
    if (content.cta) {
        const ctaEl = document.querySelector('.contact-cta');
        if (ctaEl) {
            if (content.cta.title) {
                const titleEl = ctaEl.querySelector('h3');
                if (titleEl) titleEl.textContent = content.cta.title;
            }
            if (content.cta.desc) {
                const descEl = ctaEl.querySelector('p');
                if (descEl) descEl.textContent = content.cta.desc;
            }
            if (content.cta.button) {
                const btnEl = ctaEl.querySelector('.btn');
                if (btnEl) btnEl.textContent = content.cta.button;
            }
        }
    }
}

// Setup listener for language changes
function setupLanguageListener() {
    window.addEventListener('languageChanged', function(e) {
        initializeLanguageDisplay();
        updateProductContent();
    });
    
    window.addEventListener('storage', function(e) {
        if (e.key === 'selectedLanguage') {
            initializeLanguageDisplay();
            updateProductContent();
        }
    });
}

// Periodic check for language changes (backup mechanism)
setInterval(function() {
    const currentLang = getCurrentLanguage();
    if (currentLang !== (window.lastCheckedLang || '')) {
        window.lastCheckedLang = currentLang;
        initializeLanguageDisplay();
        updateProductContent();
    }
}, 1000);

// Export functions for global access
window.updateProductContent = updateProductContent;
window.applyProductTranslations = applyProductTranslations;
window.getCurrentLanguage = getCurrentLanguage;