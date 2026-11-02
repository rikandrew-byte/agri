# FCT Vinh Thinh - Vietnamese Spice Export Website

## 🌟 Tổng quan
Website đa ngôn ngữ chuyên nghiệp cho công ty FCT Vĩnh Thịnh JSC - xuất khẩu gia vị và chè Việt Nam.

## 🚀 Tính năng chính

### 🌐 Đa ngôn ngữ (6 ngôn ngữ)
- 🇻🇳 Tiếng Việt  
- 🇺🇸 English
- 🇨🇳 简体中文 (Simplified Chinese)
- 🇹🇼 繁體中文 (Traditional Chinese)  
- 🇮🇳 हिन्दी (Hindi)
- 🇸🇦 العربية (Arabic)

### 📱 Responsive Design
- Tương thích mọi thiết bị (desktop, tablet, mobile)
- CSS Grid & Flexbox layout hiện đại
- Tối ưu hóa cho tốc độ tải

### 🛍️ Sản phẩm
- **Gia vị:** Quế, Hoa hồi, Lá quế, Cành quế
- **Chè:** Chè xanh, Chè đen
- Filter sản phẩm theo loại
- Trang chi tiết sản phẩm với thông tin đầy đủ

### 📧 Contact Form
- Validation form hoàn chỉnh
- Thông báo lỗi đa ngôn ngữ
- Email validation, phone validation
- Gửi inquiry trực tiếp

## 🔧 Cấu trúc dự án

```
📁 FCT Vinh Thinh Website/
├── 📄 index.html              # Trang chủ
├── 📁 css/
│   └── style.css              # CSS chính (responsive, đa ngôn ngữ)
├── 📁 js/  
│   ├── main.js               # JavaScript chính
│   └── product-loader.js     # Load nội dung sản phẩm động
├── 📁 languages/
│   ├── translations.js       # Hệ thống dịch 6 ngôn ngữ
│   └── products.json         # Data sản phẩm đa ngôn ngữ
├── 📁 pages/
│   ├── products.html         # Trang danh sách sản phẩm
│   └── products/             # Các trang sản phẩm chi tiết
│       ├── cinnamon.html
│       ├── star-anise.html
│       ├── green-tea.html
│       └── ...
└── 📁 images/
    ├── logo.png/svg
    └── products/             # Hình ảnh sản phẩm (có placeholder system)
```

## ⚙️ Công nghệ sử dụng

### Frontend
- **HTML5** - Semantic markup, SEO-friendly
- **CSS3** - Grid, Flexbox, CSS Variables, Animations
- **Vanilla JavaScript** - Không dependency, tối ưu tốc độ
- **JSON** - Data management cho đa ngôn ngữ

### SEO & Performance
- Open Graph meta tags
- Schema.org structured data  
- Canonical URLs
- Optimized images với lazy loading
- Minified CSS & JS

## 🛠️ Cài đặt & Sử dụng

### 1. Clone repository
```bash
git clone [repository-url]
cd fct-website
```

### 2. Chạy local server
```bash
# Với Python 3
python -m http.server 8000

# Với Node.js (live-server)
npx live-server

# Với PHP
php -S localhost:8000
```

### 3. Mở trình duyệt
```
http://localhost:8000
```

## 📋 Chức năng đã test

✅ **Language Switching** - Chuyển ngôn ngữ mượt mà
✅ **Form Validation** - Validate đa ngôn ngữ  
✅ **Product Filtering** - Lọc sản phẩm theo category
✅ **Image Placeholders** - Hiển thị placeholder khi thiếu ảnh
✅ **Responsive Layout** - Tương thích mọi màn hình
✅ **SEO Optimization** - Meta tags, structured data

## 🚀 Deployment

### Hosting tĩnh (Recommended)
- **Netlify** - Auto deploy từ Git
- **Vercel** - Serverless hosting
- **GitHub Pages** - Free hosting

### Traditional hosting  
- Upload toàn bộ files lên web server
- Đảm bảo `.htaccess` file được copy (cho URL rewriting)

## 🔧 Customization

### Thêm ngôn ngữ mới
1. Mở `languages/translations.js`
2. Thêm language code vào `languages` object
3. Thêm translations vào `translations` object
4. Update language selector trong HTML

### Thêm sản phẩm mới  
1. Thêm data vào `languages/products.json`
2. Tạo trang HTML mới trong `pages/products/`
3. Thêm vào sitemap.xml

### Tùy chỉnh theme
- Colors: Sửa CSS variables trong `:root`
- Fonts: Update `font-family` declarations  
- Layout: Modify CSS Grid/Flexbox properties

## 📞 Liên hệ & Support

**FCT Vĩnh Thịnh JSC**
- 📧 Email: andrew@fct.vn
- 📱 Phone: +84 983 027 776  
- 🏢 Address: Tòa nhà Ngôi Sao, 15B Nguyễn Cảnh Dị, Hà Nội

---

## 🔄 Version History

### v2.1.0 (Current) - SEO & Security Hardening
- ✅ HTTP Security Headers on Vercel & Apache (`Content-Security-Policy` with strict `form-action`, `Strict-Transport-Security`, `Permissions-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`)
- ✅ Eliminated DOM XSS sinks (`innerHTML` replaced with safe DOM APIs & `DOMParser` tag/attribute whitelist sanitization in `js/main.js`, `js/product-loader.js`, and `languages/translations.js`)
- ✅ Privacy & Anti-Spam Hardening: removed cleartext PII storage (`fct_inquiries` in `localStorage`), added `_honey` honeypot validation + 30s rate limiting, and `no-referrer` on third-party counter requests
- ✅ Crawlable 6-language SEO (`?lang=en|vi|zh-cn|zh-tw|hi|ar` URL routing, reciprocal `hreflang` + `x-default` across all 8 HTML pages & `sitemap.xml`, localized `<title>`/meta/OpenGraph/Twitter tags)
- ✅ Google-compliant JSON-LD `@graph` (`Organization`, `WebSite`, `CollectionPage`, `ItemPage`, `ItemList`, `FAQPage`, `VideoObject`, `BreadcrumbList`) without self-serving `AggregateRating` or price-less `Offer` errors
- ✅ Core Web Vitals (CLS/LCP): explicit `width`/`height` & `decoding="async"` on all images, rebuilt valid `16x16`+`32x32` `favicon.ico`, and removed invalid/unused Google Fonts requests

### v2.0.0 - Major Bugfix & Enhancement
- ✅ Fixed all critical bugs identified in code review
- ✅ Complete 6-language translation system
- ✅ Proper form validation with multilingual error messages  
- ✅ Fixed event handling security issues
- ✅ Removed all hardcoded content
- ✅ Image placeholder system for missing assets
- ✅ Clean code architecture, no technical debt

### v1.0.0 - Initial Release
- Basic multilingual website
- Product showcase
- Contact form

---

**Built with ❤️ for Vietnamese spice export industry**