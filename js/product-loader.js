// FCT Vinh Thinh - Product Content Loader
// Dynamically loads and applies product translations & SEO tags based on current language

let productData = {};

const PRODUCT_HTML_LANG_MAP = {
    'vi': 'vi',
    'en': 'en',
    'zh-cn': 'zh-CN',
    'zh-tw': 'zh-TW',
    'hi': 'hi',
    'ar': 'ar'
};

const ALLOWED_PRODUCT_TAGS = new Set(['P', 'UL', 'OL', 'LI', 'STRONG', 'EM', 'B', 'I', 'BR', 'SPAN']);

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    loadProductTranslations();
    initializeLanguageDisplay();
    setupLanguageListener();
});

// Load product translations from JSON file
function loadProductTranslations() {
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

// Get current language (prioritizing validated ?lang= query parameter via translations.js)
function getActiveProductLanguage() {
    if (typeof window.normalizeSupportedLang === 'function' && window.location && window.location.search) {
        try {
            const urlLang = window.normalizeSupportedLang(new URLSearchParams(window.location.search).get('lang'));
            if (urlLang) return urlLang;
        } catch (_) {}
    }
    try {
        const saved = (localStorage.getItem('selectedLanguage') || '').trim().toLowerCase();
        if (PRODUCT_HTML_LANG_MAP[saved]) return saved;
    } catch (_) {}
    return 'en';
}

// Initialize language display (update dropdown, dir, and html lang)
function initializeLanguageDisplay() {
    const currentLang = getActiveProductLanguage();
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

    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', PRODUCT_HTML_LANG_MAP[currentLang] || currentLang);
}

// Get product key from current URL
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

// Extract clean plain-text SEO description from HTML snippet
function extractMetaSummary(content) {
    if (content.about_p1 && typeof content.about_p1 === 'string') {
        return content.about_p1.trim();
    }
    if (Array.isArray(content.sections) && content.sections.length > 0 && content.sections[0].html) {
        try {
            const doc = new DOMParser().parseFromString(content.sections[0].html, 'text/html');
            const rawText = (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
            if (rawText.length <= 160) return rawText;
            const cut = rawText.slice(0, 157);
            const lastSpace = cut.lastIndexOf(' ');
            return (lastSpace > 100 ? cut.slice(0, lastSpace) : cut) + '...';
        } catch (_) {}
    }
    return '';
}

// Sanitize rich HTML fragments from products.json into safe whitelisted DOM nodes
function appendSanitizedFragment(targetContainer, rawHtml) {
    if (!rawHtml || typeof rawHtml !== 'string') return;
    const parsed = new DOMParser().parseFromString(rawHtml, 'text/html');

    function cloneSafeNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            return document.createTextNode(node.textContent || '');
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
            const tag = node.tagName.toUpperCase();
            if (!ALLOWED_PRODUCT_TAGS.has(tag)) {
                const frag = document.createDocumentFragment();
                Array.from(node.childNodes).forEach(child => {
                    const cleanChild = cloneSafeNode(child);
                    if (cleanChild) frag.appendChild(cleanChild);
                });
                return frag;
            }
            const cleanEl = document.createElement(tag.toLowerCase());
            Array.from(node.childNodes).forEach(child => {
                const cleanChild = cloneSafeNode(child);
                if (cleanChild) cleanEl.appendChild(cleanChild);
            });
            return cleanEl;
        }
        return null;
    }

    Array.from(parsed.body.childNodes).forEach(child => {
        const safeNode = cloneSafeNode(child);
        if (safeNode) targetContainer.appendChild(safeNode);
    });
}

// Main function to update product content
function updateProductContent() {
    const currentLang = getActiveProductLanguage();
    const productName = getProductName();

    if (typeof window.updatePageContent === 'function') {
        window.updatePageContent();
    }

    if (!productData || !productData[productName]) {
        return;
    }

    const content = productData[productName][currentLang] || productData[productName]['en'];
    if (content) {
        applyProductTranslations(content, currentLang);
    }
}

// Apply product translations & localized SEO tags to DOM
function applyProductTranslations(content, currentLang) {
    if (!content) return;

    // 1. Update main heading, breadcrumb leaf, and document title
    if (content.heading) {
        const heading = document.getElementById('product-heading') || document.querySelector('.product-detail-info h1') || document.querySelector('h1');
        if (heading) {
            heading.textContent = content.heading;
        }
        const bcCurrent = document.querySelector('.breadcrumb-current');
        if (bcCurrent) {
            bcCurrent.textContent = content.heading;
        }
        const fullTitle = content.heading + ' | FCT Vinh Thinh';
        document.title = fullTitle;

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', fullTitle);

        const twTitle = document.querySelector('meta[name="twitter:title"]');
        if (twTitle) twTitle.setAttribute('content', fullTitle);
    }

    // 2. Update meta description, OG description, Twitter description & Canonical URL
    const summary = extractMetaSummary(content);
    if (summary) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', summary);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', summary);

        const twDesc = document.querySelector('meta[name="twitter:description"]');
        if (twDesc) twDesc.setAttribute('content', summary);
    }

    if (window.location && window.location.pathname) {
        const filename = window.location.pathname.split('/').pop() || 'cinnamon.html';
        const baseUrl = 'https://agri.fct.vn/pages/products/' + filename;
        const localizedUrl = (!currentLang || currentLang === 'en')
            ? baseUrl
            : (baseUrl + '?lang=' + encodeURIComponent(currentLang));

        const canonicalEl = document.querySelector('link[rel="canonical"]');
        if (canonicalEl) canonicalEl.setAttribute('href', localizedUrl);

        const ogUrlEl = document.querySelector('meta[property="og:url"]');
        if (ogUrlEl) ogUrlEl.setAttribute('content', localizedUrl);
    }

    // 3. Update rating display text
    if (content.rating) {
        const ratingEl = document.querySelector('.product-detail-info .rating');
        if (ratingEl) {
            ratingEl.textContent = content.rating;
        }
    }

    // 4. Update product specifications safely via DOM API
    if (content.specs && Array.isArray(content.specs)) {
        const specsContainer = document.querySelector('.product-specs-detailed');
        if (specsContainer) {
            specsContainer.textContent = '';
            content.specs.forEach(item => {
                const row = document.createElement('div');
                row.className = 'spec-item';

                const strong = document.createElement('strong');
                strong.textContent = String(item.label || '').trim().replace(/:+$/, '') + ':';

                const span = document.createElement('span');
                span.textContent = String(item.value || '');

                row.appendChild(strong);
                row.appendChild(span);
                specsContainer.appendChild(row);
            });
        }
    }

    // 5. Update quote button in hero
    if (content.btn_quote) {
        const quoteBtn = document.querySelector('.product-detail-info .btn');
        if (quoteBtn) {
            quoteBtn.textContent = content.btn_quote;
        }
    }

    // 6. Update all content sections using sanitized DOM nodes
    if (content.sections && Array.isArray(content.sections)) {
        const sectionsContainer = document.getElementById('product-sections') || document.querySelector('section.container:not(.product-detail-hero):not(:has(.contact-cta))');
        if (sectionsContainer) {
            sectionsContainer.textContent = '';
            content.sections.forEach(sec => {
                const secDiv = document.createElement('div');
                secDiv.className = 'content-section';

                const h2 = document.createElement('h2');
                h2.textContent = String(sec.title || '');
                secDiv.appendChild(h2);

                appendSanitizedFragment(secDiv, sec.html);
                sectionsContainer.appendChild(secDiv);
            });
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

// Event-driven listeners for language changes (no wasteful polling needed)
function setupLanguageListener() {
    window.addEventListener('languageChanged', function() {
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

// Export functions for global access
window.updateProductContent = updateProductContent;
window.applyProductTranslations = applyProductTranslations;