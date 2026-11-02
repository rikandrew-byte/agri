// FCT Vinh Thinh - Main JavaScript Functions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language system
    initializeLanguage();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize form handling
    initializeContactForm();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize animations
    initializeAnimations();
});

// Language Switcher Functions
function toggleLanguageMenu(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    }
    const menu = document.getElementById('languageMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Close language menu when clicking outside (registered once)
document.addEventListener('click', function(e) {
    if (!e.target.closest('.language-dropdown')) {
        const menu = document.getElementById('languageMenu');
        if (menu && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    }
});

// Set language and persist to localStorage
function setLanguage(lang, e) {
    if (e && e.preventDefault) {
        e.preventDefault();
    }
    
    // Save language to localStorage & window
    localStorage.setItem('selectedLanguage', lang);
    if (typeof window !== 'undefined') {
        window.currentLanguage = lang;
    }
    
    // Update current language button
    const currentBtn = document.querySelector('.current-language');
    const langOptions = {
        'vi': '🇻🇳 Tiếng Việt',
        'en': '🇺🇸 English',
        'zh-cn': '🇨🇳 简体中文',
        'zh-tw': '🇹🇼 繁體中文',
        'hi': '🇮🇳 हिन्दी',
        'ar': '🇸🇦 العربية'
    };
    
    if (currentBtn) {
        currentBtn.textContent = langOptions[lang] || langOptions['en'];
    }
    
    // Close language menu
    const menu = document.getElementById('languageMenu');
    if (menu) {
        menu.classList.remove('active');
    }
    
    // Set page direction for RTL languages
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
    
    // Update content from translations.js
    if (typeof updatePageContent === 'function') {
        updatePageContent();
    } else if (window.updatePageContent && typeof window.updatePageContent === 'function') {
        window.updatePageContent();
    }
    
    // Update product page content from product-loader.js
    if (typeof updateProductContent === 'function') {
        updateProductContent();
    } else if (window.updateProductContent && typeof window.updateProductContent === 'function') {
        window.updateProductContent();
    }
    
    // Trigger language change event for other scripts
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Initialize language on page load
function initializeLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    if (typeof window !== 'undefined') {
        window.currentLanguage = savedLang;
    }
    
    // Update current language button display
    const currentBtn = document.querySelector('.current-language');
    const langOptions = {
        'vi': '🇻🇳 Tiếng Việt',
        'en': '🇺🇸 English',
        'zh-cn': '🇨🇳 简体中文',
        'zh-tw': '🇹🇼 繁體中文',
        'hi': '🇮🇳 हिन्दी',
        'ar': '🇸🇦 العربية'
    };
    
    if (currentBtn) {
        currentBtn.textContent = langOptions[savedLang] || langOptions['en'];
    }
    
    // Set page direction and lang attribute
    if (savedLang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', savedLang);
    }
    
    // Initialize translations
    if (typeof updatePageContent === 'function') {
        updatePageContent();
    } else if (window.updatePageContent && typeof window.updatePageContent === 'function') {
        window.updatePageContent();
    }
    
    // Load product translations if available
    if (typeof updateProductContent === 'function') {
        updateProductContent();
    } else if (window.updateProductContent && typeof window.updateProductContent === 'function') {
        window.updateProductContent();
    }
}

// Mobile Menu Functions
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Contact Form Functions
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                company: formData.get('company'),
                country: formData.get('country'),
                product: formData.get('product'),
                message: formData.get('message'),
                agree: formData.get('agree'),
                language: localStorage.getItem('selectedLanguage') || 'en',
                timestamp: new Date().toISOString(),
                ip: 'N/A'
            };
            
            // Validate required fields
            const requiredFields = ['name', 'email', 'message'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = contactForm.querySelector(`[name="${field}"]`);
                if (!data[field] || data[field].trim() === '') {
                    showFieldError(input, t('form_required_field'));
                    isValid = false;
                } else {
                    clearFieldError(input);
                }
            });
            
            // Validate email format
            if (data.email && !isValidEmail(data.email)) {
                const emailInput = contactForm.querySelector('[name="email"]');
                showFieldError(emailInput, t('form_invalid_email'));
                isValid = false;
            }
            
            // Validate phone format if provided
            if (data.phone && !isValidPhone(data.phone)) {
                const phoneInput = contactForm.querySelector('[name="phone"]');
                showFieldError(phoneInput, t('form_invalid_phone'));
                isValid = false;
            }
            
            // Validate checkbox
            if (!data.agree) {
                showNotification(t('form_agree_required'), 'error');
                isValid = false;
            }
            
            if (isValid) {
                submitContactForm(data, contactForm);
            }
        });
    }
}

function showFieldError(input, message) {
    clearFieldError(input);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '14px';
    errorDiv.style.marginTop = '5px';
    
    input.parentNode.appendChild(errorDiv);
    input.style.borderColor = '#e74c3c';
    input.classList.add('error');
}

function clearFieldError(input) {
    const existingError = input.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    input.style.borderColor = '#e1e5e9';
    input.classList.remove('error');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function submitContactForm(data, form) {
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    const formMessage = document.getElementById('formMessage');
    const targetEmail = (window.siteConfig && window.siteConfig.company && window.siteConfig.company.contact && window.siteConfig.company.contact.email)
        ? window.siteConfig.company.contact.email
        : 'andrew@fct.vn';

    // Show loading state
    submitBtn.textContent = (typeof t === 'function' ? t('form_sending') : 'Sending...') || 'Sending...';
    submitBtn.disabled = true;

    // Backup inquiry locally so no lead is ever lost
    try {
        const inquiries = JSON.parse(localStorage.getItem('fct_inquiries') || '[]');
        inquiries.push(data);
        localStorage.setItem('fct_inquiries', JSON.stringify(inquiries));
    } catch (storageErr) {
        console.warn('Local backup skipped:', storageErr);
    }

    const emailSubject = `[FCT Export Inquiry] ${data.company || data.name}${data.country ? ' (' + data.country + ')' : ''}${data.product ? ' - ' + data.product : ''}`;
    const plainSummary = [
        `Full Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone / WhatsApp: ${data.phone || 'N/A'}`,
        `Company: ${data.company || 'N/A'}`,
        `Country: ${data.country || 'N/A'}`,
        `Product Interest: ${data.product || 'General Export Inquiry'}`,
        `Message:\n${data.message}`
    ].join('\n');

    const whatsappUrl = `https://wa.me/84983027776?text=${encodeURIComponent('Hello FCT Vinh Thinh, I just sent an export inquiry:\n\n' + plainSummary)}`;
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(plainSummary)}`;

    const apiPayload = {
        _subject: emailSubject,
        _template: 'table',
        _captcha: 'false',
        Name: data.name,
        Email: data.email,
        Phone_WhatsApp: data.phone || 'N/A',
        Company: data.company || 'N/A',
        Country: data.country || 'N/A',
        Product_Interest: data.product || 'General Export Inquiry',
        Message: data.message,
        Language: data.language,
        Submitted_At: data.timestamp
    };

    fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(apiPayload)
    })
    .then(response => response.json().catch(() => ({})))
    .then(result => {
        const isDelivered = result && (result.success === true || result.success === 'true');
        form.reset();

        const successText = typeof t === 'function' ? t('form_success') : 'Thank you! Your inquiry has been sent directly to andrew@fct.vn.';
        const waFollowupText = typeof t === 'function' ? t('form_whatsapp_followup') : 'Or send instantly via WhatsApp';

        if (isDelivered) {
            formMessage.innerHTML = `
                <div>${successText}</div>
                <div class="form-quick-followup">
                    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="followup-wa-link">💬 ${waFollowupText}</a>
                </div>
            `;
            formMessage.className = 'form-message success';
            showNotification(successText, 'success');
        } else {
            // Automatic mailto fallback if endpoint awaits first-time email activation or is rate-limited
            const fallbackText = typeof t === 'function' ? t('form_fallback_notice') : 'Opened direct email to andrew@fct.vn to ensure immediate delivery.';
            window.location.href = mailtoUrl;
            formMessage.innerHTML = `
                <div>${fallbackText}</div>
                <div class="form-quick-followup">
                    <a href="${mailtoUrl}" class="followup-mail-link">✉️ ${targetEmail}</a>
                    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="followup-wa-link">💬 ${waFollowupText}</a>
                </div>
            `;
            formMessage.className = 'form-message success';
            showNotification(fallbackText, 'success');
        }
    })
    .catch(error => {
        console.warn('Direct AJAX email unavailable, triggering mailto fallback:', error);
        const fallbackText = typeof t === 'function' ? t('form_fallback_notice') : 'Opened direct email to andrew@fct.vn to ensure immediate delivery.';
        const waFollowupText = typeof t === 'function' ? t('form_whatsapp_followup') : 'Or send instantly via WhatsApp';
        form.reset();
        window.location.href = mailtoUrl;
        formMessage.innerHTML = `
            <div>${fallbackText}</div>
            <div class="form-quick-followup">
                <a href="${mailtoUrl}" class="followup-mail-link">✉️ ${targetEmail}</a>
                <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="followup-wa-link">💬 ${waFollowupText}</a>
            </div>
        `;
        formMessage.className = 'form-message success';
        showNotification(fallbackText, 'info');
    })
    .finally(() => {
        submitBtn.textContent = typeof t === 'function' ? t('contact.submit') : originalText;
        submitBtn.disabled = false;
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add styles
    const bgColor = type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.product-card, .about-content, .warehouse-video-card, .warehouse-photo-item, .contact-content').forEach(el => {
        observer.observe(el);
    });
    
    // Counter animation for highlights
    animateCounters();
}

function animateCounters() {
    const counters = document.querySelectorAll('.highlight-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + suffix;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + suffix;
            }
        }, 50);
    });
}

// Product Card Interactions: allow native navigation when href is set
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.view-details-btn');
    if (btn && (!btn.getAttribute('href') || btn.getAttribute('href') === '#')) {
        e.preventDefault();
    }
});

// Scroll effects
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    
    // Add shadow to header on scroll
    if (scrolled > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// Language-specific formatting
function formatContent() {
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // RTL languages
    if (currentLang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
    
    // Update number formatting for different locales
    updateNumberFormatting(currentLang);
}

function updateNumberFormatting(lang) {
    const phoneElements = document.querySelectorAll('[data-phone]');
    phoneElements.forEach(el => {
        // Format phone numbers based on language/region
        const phone = '+84 983 027 776';
        el.textContent = phone; // Keep international format for now
    });
}

// Export functions for global access
window.toggleLanguageMenu = toggleLanguageMenu;
window.setLanguage = setLanguage;
window.initializeLanguage = initializeLanguage;
window.showNotification = showNotification;
// Image placeholder system with high-quality SVG Data URIs
function initializeImagePlaceholders() {
    function getPlaceholderSvg(altText) {
        const alt = (altText || '').toLowerCase();
        let title = 'FCT VINH THINH';
        let subtitle = 'PREMIUM EXPORT QUALITY';
        let icon = '🌿';
        let bg1 = '#8B4513';
        let bg2 = '#B8860B';
        
        if (alt.includes('cinnamon') || alt.includes('quế')) {
            title = 'VIETNAMESE CINNAMON';
            subtitle = 'PREMIUM QUALITY EXPORT';
            icon = '🍂';
            bg1 = '#8B4513';
            bg2 = '#B8860B';
        } else if (alt.includes('star') || alt.includes('anise') || alt.includes('hồi')) {
            title = 'STAR ANISE';
            subtitle = 'SPRING HARVEST VIETNAM';
            icon = '⭐';
            bg1 = '#8B5A2B';
            bg2 = '#CD853F';
        } else if (alt.includes('tea') || alt.includes('chè') || alt.includes('trà')) {
            title = 'VIETNAMESE TEA';
            subtitle = 'HIGHLAND HARVEST';
            icon = '🍃';
            bg1 = '#1e4d2b';
            bg2 = '#2e7d32';
        } else if (alt.includes('farm') || alt.includes('spices') || alt.includes('about')) {
            title = 'FCT VINH THINH';
            subtitle = 'VIETNAM SPICE & TEA EXPORTER';
            icon = '🌱';
            bg1 = '#2c5530';
            bg2 = '#8B4513';
        }
        
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
            <defs>
                <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${bg1}"/>
                    <stop offset="100%" stop-color="${bg2}"/>
                </linearGradient>
            </defs>
            <rect width="600" height="400" fill="url(#g)" rx="12"/>
            <text x="300" y="165" font-size="52" text-anchor="middle" dominant-baseline="middle">${icon}</text>
            <text x="300" y="235" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">${title}</text>
            <text x="300" y="268" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.85)" text-anchor="middle" letter-spacing="1">${subtitle}</text>
        </svg>`;
        
        return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    }

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Only attach if not already handled
        if (!img.dataset.placeholderHandled) {
            img.dataset.placeholderHandled = 'true';
            
            img.addEventListener('error', function() {
                // Avoid infinite loop if SVG fails
                this.onerror = null;
                this.src = getPlaceholderSvg(this.alt);
                this.classList.add('placeholder-applied');
            });
            
            // Trigger check if image has empty or broken source
            if (!img.getAttribute('src') || img.getAttribute('src') === '#') {
                img.src = getPlaceholderSvg(img.alt);
            }
        }
    });
}

// Floating Quick Contact Widget (WhatsApp, Zalo, WeChat)
function initFloatingContactWidget() {
    if (document.getElementById('floatingContactWidget')) return;

    // Create widget container
    const widget = document.createElement('div');
    widget.id = 'floatingContactWidget';
    widget.className = 'floating-contact-widget';
    widget.innerHTML = `
        <!-- WhatsApp -->
        <a href="https://wa.me/84983027776?text=Hello%20FCT%20Vinh%20Thinh%2C%20I%20am%20interested%20in%20your%20products" target="_blank" rel="noopener noreferrer" class="floating-contact-btn btn-whatsapp pulse-anim" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            <span class="contact-tooltip" data-i18n="contact.chat_whatsapp">Chat on WhatsApp</span>
        </a>

        <!-- Zalo -->
        <a href="https://zalo.me/0983027776" target="_blank" rel="noopener noreferrer" class="floating-contact-btn btn-zalo" aria-label="Zalo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 4C13 4 4 12.1 4 22c0 5.6 2.9 10.7 7.7 14.2-.6 2.8-2.1 6.5-2.2 6.7-.2.6.2 1.1.8 1.1h.4c3.4-.6 7.5-2.4 9.9-3.7 1.1.2 2.3.4 3.4.4 11 0 20-8.1 20-18S35 4 24 4zm-4.7 22.8c-.3.4-.8.6-1.3.6h-4.3c-.6 0-1-.4-1-1 0-.3.1-.6.3-.8l4.4-6h-3.7c-.6 0-1-.4-1-1s.4-1 1-1h4.3c.6 0 1 .4 1 1 0 .3-.1.6-.3.8l-4.4 6h3.7c.6 0 1 .4 1 1.4zm6.6.6c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zm9.5-.6c0 .6-.4 1-1 1h-4.3c-.6 0-1-.4-1-1V15.6c0-.6.4-1 1-1s1 .4 1 1v9.8h3.3c.6 0 1 .4 1 1z"/></svg>
            <span class="contact-tooltip" data-i18n="contact.chat_zalo">Chat Zalo</span>
        </a>

        <!-- WeChat -->
        <button type="button" onclick="openWeChatModal()" class="floating-contact-btn btn-wechat" aria-label="WeChat">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 76.5 302.7 8 200.7 8 93.9 8 7.3 80.4 7.3 170.8c0 51.6 28.5 97.4 73.1 127.2L64 360l76.7-38.3c18.5 4.9 38 7.7 58.2 7.7 4.1 0 8.1-.1 12.2-.4-5.3-15.6-8.2-32.3-8.2-49.7 0-61.9 49.3-111.7 110.2-111.7h72.1zm-247-49.1c11.9 0 21.6 8.7 21.6 19.4s-9.7 19.4-21.6 19.4-21.6-8.7-21.6-19.4 9.7-19.4 21.6-19.4zm108.2 0c11.9 0 21.6 8.7 21.6 19.4s-9.7 19.4-21.6 19.4-21.6-8.7-21.6-19.4 9.7-19.4 21.6-19.4zM568.7 339c0-75.3-73.4-136.3-163.9-136.3s-163.9 61-163.9 136.3c0 75.3 73.4 136.3 163.9 136.3 17 0 33.3-2.3 48.7-6.5l64.4 32.2-13.8-51.7c37.3-25.1 60.6-63.5 60.6-110.3zm-207.8-21.8c-9.5 0-17.3-7-17.3-15.5s7.7-15.5 17.3-15.5 17.3 7 17.3 15.5-7.8 15.5-17.3 15.5zm87.6 0c-9.5 0-17.3-7-17.3-15.5s7.7-15.5 17.3-15.5 17.3 7 17.3 15.5-7.7 15.5-17.3 15.5z"/></svg>
            <span class="contact-tooltip" data-i18n="contact.chat_wechat">WeChat</span>
        </button>
    `;
    document.body.appendChild(widget);

    // Create WeChat Modal
    const modal = document.createElement('div');
    modal.id = 'wechatModal';
    modal.className = 'wechat-modal-overlay';
    modal.onclick = function(e) {
        if (e.target === modal) closeWeChatModal();
    };
    modal.innerHTML = `
        <div class="wechat-modal-card" onclick="event.stopPropagation()">
            <button type="button" class="wechat-modal-close" onclick="closeWeChatModal()" aria-label="Close">&times;</button>
            <div class="wechat-header">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 76.5 302.7 8 200.7 8 93.9 8 7.3 80.4 7.3 170.8c0 51.6 28.5 97.4 73.1 127.2L64 360l76.7-38.3c18.5 4.9 38 7.7 58.2 7.7 4.1 0 8.1-.1 12.2-.4-5.3-15.6-8.2-32.3-8.2-49.7 0-61.9 49.3-111.7 110.2-111.7h72.1zm-247-49.1c11.9 0 21.6 8.7 21.6 19.4s-9.7 19.4-21.6 19.4-21.6-8.7-21.6-19.4 9.7-19.4 21.6-19.4zm108.2 0c11.9 0 21.6 8.7 21.6 19.4s-9.7 19.4-21.6 19.4-21.6-8.7-21.6-19.4 9.7-19.4 21.6-19.4zM568.7 339c0-75.3-73.4-136.3-163.9-136.3s-163.9 61-163.9 136.3c0 75.3 73.4 136.3 163.9 136.3 17 0 33.3-2.3 48.7-6.5l64.4 32.2-13.8-51.7c37.3-25.1 60.6-63.5 60.6-110.3zm-207.8-21.8c-9.5 0-17.3-7-17.3-15.5s7.7-15.5 17.3-15.5 17.3 7 17.3 15.5-7.8 15.5-17.3 15.5zm87.6 0c-9.5 0-17.3-7-17.3-15.5s7.7-15.5 17.3-15.5 17.3 7 17.3 15.5-7.7 15.5-17.3 15.5z"/></svg>
                <h3 data-i18n="wechat.modal_title">Connect via WeChat (微信)</h3>
            </div>
            <div class="wechat-qr-container">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="#ffffff" rx="8"/>
                    <rect x="10" y="10" width="24" height="24" fill="#07C160" rx="3"/>
                    <rect x="14" y="14" width="16" height="16" fill="#ffffff" rx="2"/>
                    <rect x="18" y="18" width="8" height="8" fill="#07C160"/>
                    <rect x="66" y="10" width="24" height="24" fill="#07C160" rx="3"/>
                    <rect x="70" y="14" width="16" height="16" fill="#ffffff" rx="2"/>
                    <rect x="74" y="18" width="8" height="8" fill="#07C160"/>
                    <rect x="10" y="66" width="24" height="24" fill="#07C160" rx="3"/>
                    <rect x="14" y="70" width="16" height="16" fill="#ffffff" rx="2"/>
                    <rect x="18" y="74" width="8" height="8" fill="#07C160"/>
                    <circle cx="50" cy="50" r="10" fill="#07C160"/>
                    <rect x="42" y="15" width="8" height="18" fill="#212529" rx="2"/>
                    <rect x="15" y="42" width="18" height="8" fill="#212529" rx="2"/>
                    <rect x="68" y="42" width="18" height="8" fill="#212529" rx="2"/>
                    <rect x="42" y="68" width="8" height="18" fill="#212529" rx="2"/>
                    <rect x="68" y="68" width="18" height="18" fill="#212529" rx="2"/>
                </svg>
            </div>
            <div class="wechat-id-box">
                <span class="wechat-id-text" id="wechatIdValue">+84 983 027 776</span>
                <button type="button" class="btn-copy-wechat" onclick="copyWeChatId()" data-i18n="wechat.copy_btn">Copy ID</button>
            </div>
            <p style="font-size: 13px; color: #6c757d; margin: 0; line-height: 1.5;" data-i18n="wechat.desc">
                Scan QR code or search by phone number to connect directly.
            </p>
        </div>
    `;
    document.body.appendChild(modal);

    // Apply translations to newly injected elements if translation function available
    if (typeof updatePageContent === 'function') {
        updatePageContent();
    }
}

// WeChat Modal Helpers
window.openWeChatModal = function() {
    const modal = document.getElementById('wechatModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeWeChatModal = function() {
    const modal = document.getElementById('wechatModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.copyWeChatId = function() {
    const idText = '+84 983 027 776';
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(idText).then(() => {
            const btn = document.querySelector('.btn-copy-wechat');
            if (btn) {
                const originalText = btn.textContent;
                btn.textContent = (typeof t === 'function' ? t('wechat.copied') : 'Copied!') || 'Copied!';
                btn.style.background = '#28a745';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '#07C160';
                }, 2000);
            }
        });
    }
};

// Fullscreen Image Lightbox for Container & Warehouse Galleries
function initImageLightbox() {
    if (document.getElementById('fctLightbox')) return;

    const overlay = document.createElement('div');
    overlay.id = 'fctLightbox';
    overlay.className = 'fct-lightbox-overlay';
    overlay.innerHTML = `
        <button type="button" class="fct-lightbox-close" aria-label="Close">&times;</button>
        <img class="fct-lightbox-img" src="" alt="">
        <div class="fct-lightbox-caption"></div>
    `;
    document.body.appendChild(overlay);

    const imgEl = overlay.querySelector('.fct-lightbox-img');
    const capEl = overlay.querySelector('.fct-lightbox-caption');
    const closeBtn = overlay.querySelector('.fct-lightbox-close');

    function closeLightbox() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeLightbox();
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeLightbox();
        }
    });

    document.addEventListener('click', function(e) {
        const card = e.target.closest('.zoomable-media');
        if (!card) return;
        const targetImg = card.querySelector('img');
        if (!targetImg) return;
        const captionNode = card.querySelector('.container-photo-caption, .warehouse-photo-caption');
        imgEl.src = targetImg.src;
        imgEl.alt = targetImg.alt || '';
        capEl.textContent = captionNode ? captionNode.textContent : (targetImg.alt || '');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initializeImagePlaceholders();
    initFloatingContactWidget();
    initImageLightbox();
});

// Re-initialize when language or dynamic content changes
window.addEventListener('languageChanged', function() {
    setTimeout(initializeImagePlaceholders, 300);
    if (typeof updatePageContent === 'function') {
        updatePageContent();
    }
});