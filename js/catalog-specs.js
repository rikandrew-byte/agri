// FCT Vinh Thinh — Commercial Export Classification & Technical Specification Matrix (6 Languages)
// Benchmarks: Vietnam Export Standards (VPSA / VITAS), Hai Phong Port 20FCL & 40HC Container Loadability

(function () {
    'use strict';

    const UI_LABELS = {
        'vi': {
            sectionSubtitle: 'Phân loại chi tiết từng phẩm cấp thương mại kèm đầy đủ chỉ tiêu độ ẩm, tạp chất, tinh dầu, quy cách đóng gói và định mức đóng container 20FCL / 40HC tại cảng Hải Phòng.',
            tabs: {
                all: 'Tất Cả Phân Loại (12)',
                cinnamon: 'Quế Xuất Khẩu (7)',
                anise: 'Hoa Hồi Lạng Sơn (3)',
                tea: 'Chè Cao Nguyên (2)'
            },
            labels: {
                hs: 'Mã HS',
                moisture: 'Độ ẩm',
                admixture: 'Tạp chất',
                spec: 'Quy cách & Ngoại quan',
                oil: 'Tinh dầu / Chiết xuất',
                packing: 'Đóng gói',
                container: 'Đóng Cont (20ft / 40HC)'
            },
            btnDetails: 'Xem Chi Tiết',
            btnQuote: 'Nhận Báo Giá',
            matrixBadge: 'Tiêu Chuẩn Xuất Khẩu Cảng Hải Phòng',
            matrixTitle: 'Bảng Phân Loại Phẩm Cấp & Thông Số Đóng Container',
            matrixSubtitle: 'Thông số kỹ thuật tiêu chuẩn áp dụng cho các lô hàng xuất khẩu đường biển (có thể tùy chỉnh độ ẩm, chiều dài và bao bì theo yêu cầu nhà nhập khẩu).',
            colGrade: 'Phẩm Cấp / Phân Loại',
            colHs: 'Mã HS',
            colMoisture: 'Độ Ẩm',
            colAdmixture: 'Tạp Chất',
            colSpec: 'Quy Cách & Ngoại Quan',
            colOil: 'Tinh Dầu / Thủy Phân',
            colPacking: 'Quy Cách Đóng Gói',
            colLoad: 'Định Mức 20FCL / 40HC'
        },
        'en': {
            sectionSubtitle: 'Classified commercial export grades with full technical specifications: moisture, admixture, essential oil / water extract, export packing, and 20FCL / 40HC container loadability from Hai Phong Port.',
            tabs: {
                all: 'All Export Grades (12)',
                cinnamon: 'Cassia Cinnamon (7)',
                anise: 'Star Aniseed (3)',
                tea: 'Vietnamese Tea (2)'
            },
            labels: {
                hs: 'HS Code',
                moisture: 'Moisture',
                admixture: 'Admixture',
                spec: 'Size & Condition',
                oil: 'Oil / Extract',
                packing: 'Packing',
                container: 'Load (20FCL / 40HC)'
            },
            btnDetails: 'Full Details',
            btnQuote: 'Request Quote',
            matrixBadge: 'FOB Hai Phong Export Specifications',
            matrixTitle: 'Commercial Grade Classification & Container Loading Matrix',
            matrixSubtitle: 'Standard physical-chemical parameters and container payload capacities for international sea freight (customizable to buyer specifications).',
            colGrade: 'Commercial Grade',
            colHs: 'HS Code',
            colMoisture: 'Moisture',
            colAdmixture: 'Admixture',
            colSpec: 'Specifications & Condition',
            colOil: 'Oil / Water Extract',
            colPacking: 'Export Packing',
            colLoad: '20FCL / 40HC Capacity'
        },
        'zh-cn': {
            sectionSubtitle: '按国际大宗贸易标准细分各出口品级，完整列明水分、杂质、挥发油/水浸出物、包装规格及海防港 20尺柜 / 40尺高柜装柜量。',
            tabs: {
                all: '全部出口规格 (12)',
                cinnamon: '越南肉桂系列 (7)',
                anise: '谅山八角大料 (3)',
                tea: '高山茶叶系列 (2)'
            },
            labels: {
                hs: 'HS编码',
                moisture: '水分',
                admixture: '杂质',
                spec: '规格与外观',
                oil: '含油率/浸出物',
                packing: '出口包装',
                container: '装柜量 (20GP / 40HC)'
            },
            btnDetails: '查看详情',
            btnQuote: '立即询价',
            matrixBadge: '海防港出口技术指标',
            matrixTitle: '出口等级分类与集装箱装载参数表',
            matrixSubtitle: '海运出口标准理化指标与集装箱装货吨位（可根据采购商要求定制长度、湿度及唛头包装）。',
            colGrade: '品级 / 商业分类',
            colHs: 'HS编码',
            colMoisture: '水分上限',
            colAdmixture: '杂质上限',
            colSpec: '规格尺寸与品质状态',
            colOil: '精油 / 水浸出物',
            colPacking: '标准出口包装',
            colLoad: '20GP / 40HC 装柜量'
        },
        'zh-tw': {
            sectionSubtitle: '依國際大宗貿易標準細分各出口品級，完整列明水分、雜質、揮發油/水浸出物、包裝規格及海防港 20呎櫃 / 40呎高櫃裝櫃量。',
            tabs: {
                all: '全部出口規格 (12)',
                cinnamon: '越南肉桂系列 (7)',
                anise: '諒山八角系列 (3)',
                tea: '高山茶葉系列 (2)'
            },
            labels: {
                hs: 'HS編碼',
                moisture: '水分',
                admixture: '雜質',
                spec: '規格與外觀',
                oil: '含油率/浸出物',
                packing: '出口包裝',
                container: '裝櫃量 (20GP / 40HC)'
            },
            btnDetails: '查看詳情',
            btnQuote: '立即詢價',
            matrixBadge: '海防港出口技術指標',
            matrixTitle: '出口等級分類與貨櫃裝載參數表',
            matrixSubtitle: '海運出口標準理化指標與貨櫃裝載噸位（可依採購商要求客製長度、濕度及嘜頭包裝）。',
            colGrade: '品級 / 商業分類',
            colHs: 'HS編碼',
            colMoisture: '水分上限',
            colAdmixture: '雜質上限',
            colSpec: '規格尺寸與品質狀態',
            colOil: '精油 / 水浸出物',
            colPacking: '標準出口包裝',
            colLoad: '20GP / 40HC 裝櫃量'
        },
        'hi': {
            sectionSubtitle: 'हाई फोंग पोर्ट से 20FCL और 40HC कंटेनर क्षमता, नमी, मिश्रण (Admixture), आवश्यक तेल और पैकेजिंग विवरण के साथ वर्गीकृत निर्यात ग्रेड।',
            tabs: {
                all: 'सभी निर्यात ग्रेड (12)',
                cinnamon: 'वियतनामी दालचीनी (7)',
                anise: 'चक्र फूल / स्टार ऐनीज़ (3)',
                tea: 'वियतनामी चाय (2)'
            },
            labels: {
                hs: 'HS कोड',
                moisture: 'नमी (Moisture)',
                admixture: 'मिश्रण (Admixture)',
                spec: 'आकार व स्थिति',
                oil: 'तेल / अर्क मात्रा',
                packing: 'पैकेजिंग',
                container: 'कंटेनर लोड (20ft / 40HC)'
            },
            btnDetails: 'पूरा विवरण',
            btnQuote: 'कोटेशन मांगें',
            matrixBadge: 'FOB हाई फोंग निर्यात मानक',
            matrixTitle: 'व्यावसायिक ग्रेड वर्गीकरण और कंटेनर लोडिंग तालिका',
            matrixSubtitle: 'अंतर्राष्ट्रीय समुद्री शिपमेंट के लिए मानक भौतिक-रासायनिक मापदंड और कंटेनर क्षमता।',
            colGrade: 'व्यावसायिक ग्रेड',
            colHs: 'HS कोड',
            colMoisture: 'नमी',
            colAdmixture: 'मिश्रण',
            colSpec: 'विवरण और गुणवत्ता',
            colOil: 'आवश्यक तेल / अर्क',
            colPacking: 'निर्यात पैकिंग',
            colLoad: '20FCL / 40HC क्षमता'
        },
        'ar': {
            sectionSubtitle: 'تصنيف دقيق لدرجات التصدير التجارية مع المواصفات الفنية الكاملة: الرطوبة، الشوائب، نسبة الزيت العطري، التعبئة، وسعة الحاويات 20 قدم و40HC من ميناء هاي فونغ.',
            tabs: {
                all: 'جميع درجات التصدير (12)',
                cinnamon: 'القرفة الفيتنامية (7)',
                anise: 'اليانسون النجمي (3)',
                tea: 'الشاي الجبلي (2)'
            },
            labels: {
                hs: 'رمز HS',
                moisture: 'الرطوبة',
                admixture: 'الشوائب',
                spec: 'المقاس والحالة',
                oil: 'الزيت / المستخلص',
                packing: 'التعبئة',
                container: 'سعة الحاوية (20ft / 40HC)'
            },
            btnDetails: 'التفاصيل الكاملة',
            btnQuote: 'اطلب عرض سعر',
            matrixBadge: 'مواصفات التصدير FOB هاي فونغ',
            matrixTitle: 'جدول تصنيف الدرجات التجارية وسعة تحميل الحاويات',
            matrixSubtitle: 'المعايير الفيزيائية والكيميائية القياسية وسعة الحاويات البحرية للتصدير العالمي.',
            colGrade: 'الدرجة التجارية',
            colHs: 'رمز HS',
            colMoisture: 'الرطوبة',
            colAdmixture: 'الشوائب',
            colSpec: 'المواصفات والحالة',
            colOil: 'الزيت / المستخلص',
            colPacking: 'تعبئة التصدير',
            colLoad: 'سعة 20FCL / 40HC'
        }
    };

    const CATALOG_ITEMS = [
        // ==================== CASSIA CINNAMON (7 GRADES) ====================
        {
            id: 'tube-cassia',
            category: 'cinnamon',
            page: 'cinnamon.html',
            img: 'images/products/cinnamon-gallery/cinnamon-rolled-bundles.jpg',
            width: 1600,
            height: 901,
            hs: '0906.11',
            badge: { vi: 'Chủ Lực', en: 'Flagship', 'zh-cn': '主力出口', 'zh-tw': '主力出口', hi: 'प्रमुख ग्रेड', ar: 'المنتج الرئيسي' },
            origin: { vi: 'Yên Bái, Việt Nam', en: 'Yen Bai, Vietnam', 'zh-cn': '越南安沛省', 'zh-tw': '越南安沛省', hi: 'येन बाई, वियतनाम', ar: 'ين باي، فيتنام' },
            title: {
                vi: 'Quế Ống Nguyên Thanh (Tube / Whole Cassia)',
                en: 'Whole / Tube Cassia (Rolled Cinnamon)',
                'zh-cn': '越南桂通 / 整支卷筒肉桂 (Tube Cassia)',
                'zh-tw': '越南桂通 / 整支捲筒肉桂 (Tube Cassia)',
                hi: 'साबुत ट्यूब कासिया दालचीनी (Tube Cassia)',
                ar: 'قرفة أنبوبية كاملة ملفوفة (Tube Cassia)'
            },
            moisture: '13.5% max',
            admixture: '1.0% max',
            spec: {
                vi: 'Dài 30–45 cm; Dày ≥ 2.2 mm; Cuộn tự nhiên (cạo vỏ theo yêu cầu), không nấm mốc',
                en: 'Length 30–45 cm; Thickness ≥ 2.2 mm; Natural color (skin removed optional), no fungus',
                'zh-cn': '长度 30–45 cm；厚度 ≥ 2.2 mm；自然卷筒（可做刮皮），无霉变',
                'zh-tw': '長度 30–45 cm；厚度 ≥ 2.2 mm；自然捲筒（可做刮皮），無霉變',
                hi: 'लंबाई 30–45 सेमी; मोटाई ≥ 2.2 मिमी; प्राकृतिक रंग, फंगस-मुक्त',
                ar: 'الطول 30–45 سم؛ السمك ≥ 2.2 مم؛ لون طبيعي بدون عفن (مقشور حسب الطلب)'
            },
            oil: {
                vi: 'Tinh dầu: 2.5% – 4.5% min',
                en: 'Essential Oil: 2.5% – 4.5% min',
                'zh-cn': '精油含量：2.5% – 4.5% min',
                'zh-tw': '精油含量：2.5% – 4.5% min',
                hi: 'आवश्यक तेल: 2.5% – 4.5% min',
                ar: 'الزيت العطري: 2.5% – 4.5% كحد أدنى'
            },
            packing: {
                vi: 'Thùng Carton 10 kg / 20 kg net (hoặc theo yêu cầu)',
                en: 'Cartons (Net 10 kg / 20 kg) or customized',
                'zh-cn': '纸箱（净重 10 kg / 20 kg）或定制',
                'zh-tw': '紙箱（淨重 10 kg / 20 kg）或客製',
                hi: 'कार्टन (10 किग्रा / 20 किग्रा नेट)',
                ar: 'كرتون (10 كجم / 20 كجم صافي) أو حسب الطلب'
            },
            load: '5.5–6.0 MT / 20FCL · 12.5–13.5 MT / 40HC'
        },
        {
            id: 'cigarette-cassia',
            category: 'cinnamon',
            page: 'cinnamon.html',
            img: 'images/products/cinnamon-gallery/cinnamon-scraped-sticks.jpg',
            width: 1600,
            height: 901,
            hs: '0906.11',
            badge: { vi: 'Bán Chạy', en: 'Best Seller', 'zh-cn': '热销规格', 'zh-tw': '熱銷規格', hi: 'बेस्ट सेलर', ar: 'الأكثر مبيعاً' },
            origin: { vi: 'Yên Bái, Việt Nam', en: 'Yen Bai, Vietnam', 'zh-cn': '越南安沛省', 'zh-tw': '越南安沛省', hi: 'येन बाई, वियतनाम', ar: 'ين باي، فيتنام' },
            title: {
                vi: 'Quế Điếu / Quế Thanh Cạo Vỏ (Cigarette / Finger Cassia)',
                en: 'Cigarette / Finger Cassia (Scraped or Natural)',
                'zh-cn': '越南烟仔桂 / 刮皮肉桂条 (Cigarette Cassia)',
                'zh-tw': '越南煙仔桂 / 刮皮肉桂條 (Cigarette Cassia)',
                hi: 'सिगरेट / फिंगर कासिया स्टिक्स (Cigarette Cassia)',
                ar: 'أعواد قرفة سيجار مقشورة أو طبيعية (Cigarette Cassia)'
            },
            moisture: '13.0% max',
            admixture: '0.5% max',
            spec: {
                vi: 'Dài 8 cm, 10 cm, 15 cm, 20 cm; Bề mặt nhẵn mịn, cuộn đều, không nấm mốc',
                en: 'Length 8, 10, 15, 20 cm; Smooth touch, tight roll, natural yellow-brown, no fungus',
                'zh-cn': '长度 8 / 10 / 15 / 20 cm；表面光滑紧实，色泽金黄自然，无霉变',
                'zh-tw': '長度 8 / 10 / 15 / 20 cm；表面光滑緊實，色澤金黃自然，無霉變',
                hi: 'लंबाई 8, 10, 15, 20 सेमी; चिकनी सतह, फंगस-मुक्त',
                ar: 'الطول 8، 10، 15، 20 سم؛ ملمس ناعم ولف متناسق بدون عفن'
            },
            oil: {
                vi: 'Tinh dầu: 2.5% – 4.5% min',
                en: 'Essential Oil: 2.5% – 4.5% min',
                'zh-cn': '精油含量：2.5% – 4.5% min',
                'zh-tw': '精油含量：2.5% – 4.5% min',
                hi: 'आवश्यक तेल: 2.5% – 4.5% min',
                ar: 'الزيت العطري: 2.5% – 4.5% كحد أدنى'
            },
            packing: {
                vi: 'Thùng Carton 10 kg / 20 kg net hoặc đóng hộp lẻ sỉ',
                en: 'Cartons (Net 10 kg or 20 kg) or customized',
                'zh-cn': '纸箱（净重 10 kg / 20 kg）或定制小包装',
                'zh-tw': '紙箱（淨重 10 kg / 20 kg）或客製小包裝',
                hi: 'कार्टन (10 किग्रा या 20 किग्रा नेट)',
                ar: 'كرتون (10 كجم أو 20 كجم صافي) أو تعبئة مخصصة'
            },
            load: '7.5–8.0 MT / 20FCL · 17.5 MT / 40HC'
        },
        {
            id: 'split-cassia',
            category: 'cinnamon',
            page: 'cinnamon.html',
            img: 'images/products/cinnamon-split.jpg',
            width: 540,
            height: 960,
            hs: '0906.11',
            badge: null,
            origin: { vi: 'Yên Bái & Quảng Nam', en: 'Yen Bai & Quang Nam', 'zh-cn': '安沛 & 广南产区', 'zh-tw': '安沛 & 廣南產區', hi: 'येन बाई, वियतनाम', ar: 'ين باي، فيتنام' },
            title: {
                vi: 'Quế Chẻ Xuất Khẩu (Split Cassia)',
                en: 'Split Cassia (Natural Split Bark)',
                'zh-cn': '越南桂皮 / 开片肉桂 (Split Cassia)',
                'zh-tw': '越南桂皮 / 開片肉桂 (Split Cassia)',
                hi: 'स्प्लिट कासिया छाल (Split Cassia)',
                ar: 'لحاء القرفة المشقوق (Split Cassia)'
            },
            moisture: '13.5% max',
            admixture: '1.0% max',
            spec: {
                vi: 'Dài 25–45 cm (tối thiểu 80%); Dày 1.5–3.0 mm; Màu vàng nâu đỏ, không nấm mốc',
                en: 'Length 25–45 cm (80% min); Thickness 1.5–3.0 mm; Yellow/reddish color, no fungus',
                'zh-cn': '长度 25–45 cm（≥80%）；厚度 1.5–3.0 mm；黄褐微红色，无霉变',
                'zh-tw': '長度 25–45 cm（≥80%）；厚度 1.5–3.0 mm；黃褐微紅色，無霉變',
                hi: 'लंबाई 25–45 सेमी (80% min); पीला/लाल भूरा रंग, फंगस-मुक्त',
                ar: 'الطول 25–45 سم (80% كحد أدنى)؛ لون بني محمر طبيعي بدون عفن'
            },
            oil: {
                vi: 'Tinh dầu: 2.0% – 4.0% min',
                en: 'Essential Oil: 2.0% – 4.0% min',
                'zh-cn': '精油含量：2.0% – 4.0% min',
                'zh-tw': '精油含量：2.0% – 4.0% min',
                hi: 'आवश्यक तेल: 2.0% – 4.0% min',
                ar: 'الزيت العطري: 2.0% – 4.0% كحد أدنى'
            },
            packing: {
                vi: 'Carton 10 kg net hoặc Kiện ép thủy lực 20–25 kg',
                en: 'Cartons (Net 10 kg) or 20–25 kg Pressed Bales',
                'zh-cn': '10 kg 纸箱 或 20–25 kg 液压打包件',
                'zh-tw': '10 kg 紙箱 或 20–25 kg 液壓打包件',
                hi: '10 किग्रा कार्टन या 20–25 किग्रा प्रेस्ड बेल',
                ar: 'كرتون 10 كجم أو بالات مضغوطة 20–25 كجم'
            },
            load: '6.5 MT / 20FCL · 15 MT / 40HC (22–24 MT Pressed)'
        },
        {
            id: 'broken-cut-cassia',
            category: 'cinnamon',
            page: 'cinnamon.html',
            img: 'images/products/cinnamon-chips.jpg',
            width: 542,
            height: 962,
            hs: '0906.19',
            badge: null,
            origin: { vi: 'Yên Bái, Việt Nam', en: 'Yen Bai, Vietnam', 'zh-cn': '越南安沛省', 'zh-tw': '越南安沛省', hi: 'येन बाई, वियतनाम', ar: 'ين باي، فيتنام' },
            title: {
                vi: 'Quế Cắt Vuông / Tròn & Quế Vụn (Square Cut & Broken Cassia)',
                en: 'Square / Round Cut & Broken Cassia (KABC / KBBC)',
                'zh-cn': '越南桂碎 / 方切与圆切肉桂片 (Cut & Broken Cassia)',
                'zh-tw': '越南桂碎 / 方切與圓切肉桂片 (Cut & Broken Cassia)',
                hi: 'स्क्वायर कट और ब्रोकन कासिया (Broken & Cut Cassia)',
                ar: 'قرفة مقطعة ومكسورة عالية الزيت (Broken & Cut Cassia)'
            },
            moisture: '13.5% max',
            admixture: '1.0% – 2.0% max',
            spec: {
                vi: 'Cắt vuông/tròn 2–5 cm (có cạo vỏ) hoặc mảnh vụn sạch; Màu vàng sáng, không mốc',
                en: 'Square/round cut 2–5 cm (skin removed optional) or clean broken pieces; No fungus',
                'zh-cn': '方切/圆切 2–5 cm（可刮皮）或洁净桂碎；色泽金黄，无霉变',
                'zh-tw': '方切/圓切 2–5 cm（可刮皮）或潔淨桂碎；色澤金黃，無霉變',
                hi: '2–5 सेमी कट या साफ टुकड़े; चमकीला पीला-भूरा रंग, फंगस-मुक्त',
                ar: 'قطع مربعة/دائرية 2–5 سم أو قطع مكسورة نظيفة بدون عفن'
            },
            oil: {
                vi: 'Tinh dầu: 2.0% – 4.2% min',
                en: 'Essential Oil: 2.0% – 4.2% min',
                'zh-cn': '精油含量：2.0% – 4.2% min',
                'zh-tw': '精油含量：2.0% – 4.2% min',
                hi: 'आवश्यक तेल: 2.0% – 4.2% min',
                ar: 'الزيت العطري: 2.0% – 4.2% كحد أدنى'
            },
            packing: {
                vi: 'Thùng Carton 20 kg net hoặc Kiện ép PP 25 kg',
                en: 'Cartons (Net 20 kg) or 25 kg Pressed PP Bales',
                'zh-cn': '20 kg 纸箱 或 25 kg 压缩编织袋包',
                'zh-tw': '20 kg 紙箱 或 25 kg 壓縮編織袋包',
                hi: '20 किग्रा कार्टन या 25 किग्रा प्रेस्ड पीपी बैग',
                ar: 'كرتون 20 كجم أو بالات مضغوطة 25 كجم'
            },
            load: '8.5–10 MT / 20FCL · 18 MT / 40HC (24–25 MT Pressed)'
        },
        {
            id: 'cassia-powder',
            category: 'cinnamon',
            page: 'cinnamon.html',
            img: 'images/products/cinnamon-powder.jpg',
            width: 1920,
            height: 2560,
            hs: '0906.20',
            badge: { vi: 'Độ Mịn Cao', en: '80–120 Mesh', 'zh-cn': '80–120目细粉', 'zh-tw': '80–120目細粉', hi: '80–120 मेश', ar: 'نعومة 80–120' },
            origin: { vi: 'Yên Bái, Việt Nam', en: 'Yen Bai, Vietnam', 'zh-cn': '越南安沛省', 'zh-tw': '越南安沛省', hi: 'येन बाई, वियतनाम', ar: 'ين باي، فيتنام' },
            title: {
                vi: 'Bột Quế Nguyên Chất Xuất Khẩu (Pure Cassia Powder)',
                en: 'Pure Cassia Cinnamon Powder (60 – 120 Mesh)',
                'zh-cn': '100%纯天然越南肉桂粉 (Cassia Powder)',
                'zh-tw': '100%純天然越南肉桂粉 (Cassia Powder)',
                hi: 'शुद्ध वियतनामी दालचीनी पाउडर (Cassia Powder)',
                ar: 'مسحوق القرفة الفيتنامية النقي (Cassia Powder)'
            },
            moisture: '10.0% – 12.0% max',
            admixture: '0.5% max',
            spec: {
                vi: 'Độ mịn 60 – 120 Mesh; 100% quế vỏ nghiền mịn không pha trộn, màu nâu vàng tự nhiên',
                en: 'Fineness 60–120 mesh; 100% pure ground bark, natural brown-yellow color, no additives',
                'zh-cn': '细度 60–120 目；100%纯肉桂皮研磨，天然棕黄色，无任何添加',
                'zh-tw': '細度 60–120 目；100%純肉桂皮研磨，天然棕黃色，無任何添加',
                hi: 'महीनता 60–120 मेश; 100% शुद्ध छाल पाउडर, प्राकृतिक भूरा रंग',
                ar: 'نعومة 60–120 مش؛ مطحون لحاء نقي 100% بدون إضافات'
            },
            oil: {
                vi: 'Tinh dầu: 1.5% – 4.0% (tùy cấp độ)',
                en: 'Essential Oil: 1.5% – 4.0% (grade options)',
                'zh-cn': '精油含量：1.5% – 4.0%（按等级定制）',
                'zh-tw': '精油含量：1.5% – 4.0%（依等級客製）',
                hi: 'आवश्यक तेल: 1.5% – 4.0% (ग्रेड अनुसार)',
                ar: 'الزيت العطري: 1.5% – 4.0% (حسب الدرجة)'
            },
            packing: {
                vi: 'Bao PP / PE / Kraft nhiều lớp 20–25 kg net',
                en: 'Multi-wall Kraft / PE / PP Bags (Net 20–25 kg)',
                'zh-cn': '内衬PE牛皮纸袋 / PP编织袋（净重 20–25 kg）',
                'zh-tw': '內襯PE牛皮紙袋 / PP編織袋（淨重 20–25 kg）',
                hi: 'पीपी / पीई / क्राफ्ट बैग (20–25 किग्रा नेट)',
                ar: 'أكياس كرافت / PE / PP متعددة الطبقات (20–25 كجم صافي)'
            },
            load: '15–16 MT / 20FCL · 26–27 MT / 40HC'
        },
        {
            id: 'sliced-twigs-branches',
            category: 'cinnamon',
            page: 'cinnamon-branches.html',
            img: 'images/products/cinnamon-gallery/cinnamon-twig-slices.jpg',
            width: 900,
            height: 1600,
            hs: '0906.19',
            badge: { vi: 'Đông Dược & Gia Vị', en: 'Gui Zhi Slices', 'zh-cn': '桂枝片/桂枝丁', 'zh-tw': '桂枝片/桂枝丁', hi: 'दालचीनी स्लाइस', ar: 'شرائح أغصان' },
            origin: { vi: 'Yên Bái, Việt Nam', en: 'Yen Bai, Vietnam', 'zh-cn': '越南安沛省', 'zh-tw': '越南安沛省', hi: 'येन बाई, वियतनाम', ar: 'ين باي، فيتنام' },
            title: {
                vi: 'Quế Chi Thái Lát & Cành Quế Khúc (Gui Zhi Slices & Branches)',
                en: 'Diagonal-Sliced Cinnamon Twigs (Gui Zhi) & Branches',
                'zh-cn': '越南斜切桂枝片 / 桂枝丁 / 原枝 (Gui Zhi)',
                'zh-tw': '越南斜切桂枝片 / 桂枝丁 / 原枝 (Gui Zhi)',
                hi: 'तिरछे कटे दालचीनी टहनी स्लाइस व शाखाएं (Gui Zhi)',
                ar: 'شرائح أغصان القرفة المقطعة وأغصان كاملة (Gui Zhi)'
            },
            moisture: '12.5% – 13.0% max',
            admixture: '1.0% max',
            spec: {
                vi: 'Thái lát vát dày 2–4 mm, cắt khúc 1–3 cm hoặc nguyên cành 20–50 cm; Khô sạch, rõ vân dầu',
                en: 'Diagonal slices 2–4 mm, cut segments 1–3 cm, or whole branches 20–50 cm; Clean, no mold',
                'zh-cn': '斜切片厚 2–4 mm、桂枝丁 1–3 cm 或整枝 20–50 cm；干爽无霉、油圈清晰',
                'zh-tw': '斜切片厚 2–4 mm、桂枝丁 1–3 cm 或整枝 20–50 cm；乾爽無霉、油圈清晰',
                hi: '2–4 मिमी तिरछे स्लाइस या 1–3 सेमी टुकड़े; साफ व फंगस-मुक्त',
                ar: 'شرائح مائلة بسمك 2–4 مم أو قطع 1–3 سم؛ جافة ونظيفة بدون عفن'
            },
            oil: {
                vi: 'Tinh dầu tự nhiên: 1.0% – 2.0%',
                en: 'Volatile Oil: 1.0% – 2.0%',
                'zh-cn': '挥发油含量：1.0% – 2.0%',
                'zh-tw': '揮發油含量：1.0% – 2.0%',
                hi: 'वाष्पशील तेल: 1.0% – 2.0%',
                ar: 'الزيت الطيار: 1.0% – 2.0%'
            },
            packing: {
                vi: 'Bao tải dệt PP 25 kg – 40 kg net',
                en: 'PP Woven Bags (Net 25–40 kg)',
                'zh-cn': 'PP编织袋包装（净重 25–40 kg）',
                'zh-tw': 'PP編織袋包裝（淨重 25–40 kg）',
                hi: 'पीपी बुने हुए बैग (25–40 किग्रा नेट)',
                ar: 'أكياس PP منسوجة (25–40 كجم صافي)'
            },
            load: '8.0–9.0 MT / 20FCL · 18–20 MT / 40HC'
        },
        {
            id: 'cinnamon-leaves',
            category: 'cinnamon',
            page: 'cinnamon-leaves.html',
            img: 'images/products/cinnamon-gallery/cinnamon-leaves-pile.jpg',
            width: 1600,
            height: 901,
            hs: '0906.19',
            badge: null,
            origin: { vi: 'Yên Bái, Việt Nam', en: 'Yen Bai, Vietnam', 'zh-cn': '越南安沛省', 'zh-tw': '越南安沛省', hi: 'येन बाई, वियतनाम', ar: 'ين باي، فيتنام' },
            title: {
                vi: 'Lá Quế Khô Chưng Cất Tinh Dầu (Dried Cinnamon Leaves)',
                en: 'Dried Vietnamese Cinnamon Leaves (Pressed Bales)',
                'zh-cn': '越南干肉桂叶（精油提炼与茶用级）',
                'zh-tw': '越南乾肉桂葉（精油提煉與茶用級）',
                hi: 'सूखी वियतनामी दालचीनी पत्तियां (Cinnamon Leaves)',
                ar: 'أوراق القرفة الفيتنامية المجففة (Cinnamon Leaves)'
            },
            moisture: '12.0% max',
            admixture: '2.0% max',
            spec: {
                vi: 'Lá quế vùng cao phơi/hong khô tự nhiên, thơm nồng, không ẩm mốc',
                en: 'Shade/sun-dried highland leaves, strong natural aroma, free of mold',
                'zh-cn': '高山采收自然阴干/晒干，香气浓郁，无霉变',
                'zh-tw': '高山採收自然陰乾/曬乾，香氣濃郁，無霉變',
                hi: 'प्राकृतिक रूप से सुखाई गई पत्तियां, तीव्र सुगंध, फंगस-मुक्त',
                ar: 'أوراق جبلية مجففة طبيعياً برائحة عطرية قوية بدون عفن'
            },
            oil: {
                vi: 'Tinh dầu lá: 1.2% – 2.2%',
                en: 'Leaf Essential Oil: 1.2% – 2.2%',
                'zh-cn': '叶精油含量：1.2% – 2.2%',
                'zh-tw': '葉精油含量：1.2% – 2.2%',
                hi: 'पत्ती तेल मात्रा: 1.2% – 2.2%',
                ar: 'زيت الأوراق العطري: 1.2% – 2.2%'
            },
            packing: {
                vi: 'Kiện ép thủy lực 25–40 kg hoặc Bao PP lớn',
                en: 'Hydraulic Pressed Bales (25–40 kg) or Jumbo PP Bags',
                'zh-cn': '液压打包件（25–40 kg）或大宗PP编织袋',
                'zh-tw': '液壓打包件（25–40 kg）或大宗PP編織袋',
                hi: 'हाइड्रोलिक प्रेस्ड बेल (25–40 किग्रा) या पीपी बैग',
                ar: 'بالات مضغوطة هيدروليكياً (25–40 كجم) أو أكياس PP'
            },
            load: '8.0–9.0 MT / 20FCL · 18–20 MT / 40HC'
        },

        // ==================== STAR ANISE (3 GRADES) ====================
        {
            id: 'autumn-star-anise',
            category: 'anise',
            page: 'star-anise.html',
            img: 'images/products/star-anise-gallery/star-anise-macro-pod.jpg',
            width: 1600,
            height: 901,
            hs: '0909.61',
            badge: { vi: 'Thượng Hạng', en: 'Grade A Export', 'zh-cn': '特级秋果', 'zh-tw': '特級秋果', hi: 'ग्रेड A निर्यात', ar: 'درجة أولى ممتازة' },
            origin: { vi: 'Lạng Sơn, Việt Nam', en: 'Lang Son, Vietnam', 'zh-cn': '越南谅山省', 'zh-tw': '越南諒山省', hi: 'लैंग सोन, वियतनाम', ar: 'لانغ سون، فيتنام' },
            title: {
                vi: 'Đại Hồi Vụ Thu Nguyên Cánh Loại 1 (Autumn Whole Star Anise)',
                en: 'Autumn Harvest Whole Star Aniseed — Grade A',
                'zh-cn': '越南谅山秋果大料八角（一级整果）',
                'zh-tw': '越南諒山秋果八角（一級整果）',
                hi: 'शरद फसल साबुत चक्र फूल — ग्रेड A (Whole Star Anise)',
                ar: 'يانسون نجمي كامل قطف الخريف — درجة أولى (Star Anise)'
            },
            moisture: '12.5% – 13.0% max',
            admixture: '1.0% max',
            spec: {
                vi: 'Cỡ bông ≥ 2.5 cm (tối thiểu 80%); Cánh vỡ ≤ 5%; Màu nâu đỏ tự nhiên, không nấm mốc',
                en: 'Flower size ≥ 2.5 cm (80% min); Broken ≤ 5%; Reddish-brown natural color, no fungus',
                'zh-cn': '果径 ≥ 2.5 cm（≥80%）；碎瓣 ≤ 5%；色泽棕红饱满（生晒/蒸制可选），无霉变',
                'zh-tw': '果徑 ≥ 2.5 cm（≥80%）；碎瓣 ≤ 5%；色澤棕紅飽滿（生曬/蒸製可選），無霉變',
                hi: 'फूल आकार ≥ 2.5 सेमी (80% min); टूटे ≤ 5%; प्राकृतिक लाल-भूरा रंग, फंगस-मुक्त',
                ar: 'حجم الزهرة ≥ 2.5 سم (80% كحد أدنى)؛ الكسر ≤ 5%؛ لون بني محمر طبيعي بدون عفن'
            },
            oil: {
                vi: 'Tinh dầu: ≥ 8.5% – 10.5% (Anethole ≥ 85%)',
                en: 'Essential Oil: ≥ 8.5% – 10.5% (Trans-anethole ≥ 85%)',
                'zh-cn': '精油含量：≥ 8.5% – 10.5%（反式茴香脑 ≥ 85%）',
                'zh-tw': '精油含量：≥ 8.5% – 10.5%（反式茴香腦 ≥ 85%）',
                hi: 'आवश्यक तेल: ≥ 8.5% – 10.5% (एनेथोल ≥ 85%)',
                ar: 'الزيت العطري: ≥ 8.5% – 10.5% (أنيثول ≥ 85%)'
            },
            packing: {
                vi: 'Thùng Carton 5 lớp lót PE (5 kg / 10 kg net)',
                en: '5-Ply Export Cartons with PE Liner (Net 5 kg / 10 kg)',
                'zh-cn': '内衬PE五层出口纸箱（净重 5 kg / 10 kg）',
                'zh-tw': '內襯PE五層出口紙箱（淨重 5 kg / 10 kg）',
                hi: 'पीई लाइनर युक्त 5-प्लाई कार्टन (5 किग्रा / 10 किग्रा नेट)',
                ar: 'كرتون تصدير 5 طبقات مبطن PE (5 كجم / 10 كجم صافي)'
            },
            load: '6.5–7.5 MT / 20FCL · 15.0–16.0 MT / 40HC'
        },
        {
            id: 'spring-star-anise',
            category: 'anise',
            page: 'star-anise.html',
            img: 'images/products/star-anise-gallery/star-anise-hand-select.jpg',
            width: 1600,
            height: 1200,
            hs: '0909.61',
            badge: null,
            origin: { vi: 'Lạng Sơn, Việt Nam', en: 'Lang Son, Vietnam', 'zh-cn': '越南谅山省', 'zh-tw': '越南諒山省', hi: 'लैंग सोन, वियतनाम', ar: 'لانغ سون، فيتنام' },
            title: {
                vi: 'Hoa Hồi Vụ Xuân Chọn Lọc (Spring Harvest Star Anise)',
                en: 'Spring Harvest Whole Star Aniseed (Sun / Steam Dried)',
                'zh-cn': '越南谅山春果八角（生晒 / 蒸制整果）',
                'zh-tw': '越南諒山春果八角（生曬 / 蒸製整果）',
                hi: 'बसंत फसल साबुत चक्र फूल (Spring Star Anise)',
                ar: 'يانسون نجمي كامل قطف الربيع (Spring Star Anise)'
            },
            moisture: '13.0% max',
            admixture: '1.0% max',
            spec: {
                vi: 'Cỡ bông ≥ 2.0–2.5 cm (75% min); Cánh vỡ ≤ 8%–10%; Phơi nắng tự nhiên hoặc sấy hơi',
                en: 'Flower size ≥ 2.0–2.5 cm (75% min); Broken ≤ 8–10%; Natural sun-dried or steamed, no fungus',
                'zh-cn': '果径 ≥ 2.0–2.5 cm（≥75%）；碎瓣 ≤ 8–10%；自然生晒或蒸汽杀青，无霉变',
                'zh-tw': '果徑 ≥ 2.0–2.5 cm（≥75%）；碎瓣 ≤ 8–10%；自然生曬或蒸汽殺青，無霉變',
                hi: 'फूल आकार ≥ 2.0–2.5 सेमी (75% min); टूटे ≤ 8–10%; धूप में सुखाया हुआ',
                ar: 'حجم الزهرة ≥ 2.0–2.5 سم (75% كحد أدنى)؛ الكسر ≤ 8–10%؛ مجفف بالشمس بدون عفن'
            },
            oil: {
                vi: 'Tinh dầu: 7.0% – 9.0% min',
                en: 'Essential Oil: 7.0% – 9.0% min',
                'zh-cn': '精油含量：7.0% – 9.0% min',
                'zh-tw': '精油含量：7.0% – 9.0% min',
                hi: 'आवश्यक तेल: 7.0% – 9.0% min',
                ar: 'الزيت العطري: 7.0% – 9.0% كحد أدنى'
            },
            packing: {
                vi: 'Thùng Carton 10 kg net đai nẹp tiêu chuẩn biển',
                en: 'Strapped Export Cartons (Net 10 kg)',
                'zh-cn': '打包带加固出口纸箱（净重 10 kg）',
                'zh-tw': '打包帶加固出口紙箱（淨重 10 kg）',
                hi: 'स्ट्रैप्ड एक्सपोर्ट कार्टन (10 किग्रा नेट)',
                ar: 'كرتون تصدير محزم (10 كجم صافي)'
            },
            load: '7.0–7.5 MT / 20FCL · 15.5–16.5 MT / 40HC'
        },
        {
            id: 'broken-star-anise',
            category: 'anise',
            page: 'star-anise.html',
            img: 'images/products/star-anise-gallery/star-anise-sun-drying.jpg',
            width: 1600,
            height: 1200,
            hs: '0909.61',
            badge: { vi: 'Xay Bột & Tinh Dầu', en: 'Extraction Grade', 'zh-cn': '碎八角/提油级', 'zh-tw': '碎八角/提油級', hi: 'ब्रोकन ग्रेड', ar: 'درجة الطحن والتقطير' },
            origin: { vi: 'Lạng Sơn, Việt Nam', en: 'Lang Son, Vietnam', 'zh-cn': '越南谅山省', 'zh-tw': '越南諒山省', hi: 'लैंग सोन, वियतनाम', ar: 'لانغ سون، فيتنام' },
            title: {
                vi: 'Hoa Hồi Cánh Vỡ & Hồi Cuống (Broken Star Aniseed)',
                en: 'Broken Star Aniseed (For Grinding & Oil Extraction)',
                'zh-cn': '越南八角碎瓣 / 工业研磨与提油级 (Broken Aniseed)',
                'zh-tw': '越南八角碎瓣 / 工業研磨與提油級 (Broken Aniseed)',
                hi: 'ब्रोकन स्टार ऐनीज़ / टूटे चक्र फूल (Broken Aniseed)',
                ar: 'يانسون نجمي مكسور للطحن واستخلاص الزيوت (Broken Aniseed)'
            },
            moisture: '13.0% max',
            admixture: '2.0% max',
            spec: {
                vi: 'Cánh hồi rời & hạt khô sạch, sàng lọc kỹ tạp chất, tối ưu chi phí nghiền bột ngũ vị & chưng cất',
                en: 'Clean broken carpels & seeds, sifted, cost-effective for five-spice grinding & oil distillation, no fungus',
                'zh-cn': '洁净八角碎瓣与籽粒，过筛去杂，高性价比五香粉研磨及精油提取原料，无霉变',
                'zh-tw': '潔淨八角碎瓣與籽粒，過篩去雜，高性價比五香粉研磨及精油提取原料，無霉變',
                hi: 'साफ टूटी पंखुड़ियां व बीज, मसाला पिसाई और तेल आसवन हेतु किफायती, फंगस-मुक्त',
                ar: 'فصوص وبذور مكسورة نظيفة ومغربلة، مثالية لطحن البهارات وتقطير الزيت بدون عفن'
            },
            oil: {
                vi: 'Tinh dầu: 6.5% – 8.5% min',
                en: 'Essential Oil: 6.5% – 8.5% min',
                'zh-cn': '精油含量：6.5% – 8.5% min',
                'zh-tw': '精油含量：6.5% – 8.5% min',
                hi: 'आवश्यक तेल: 6.5% – 8.5% min',
                ar: 'الزيت العطري: 6.5% – 8.5% كحد أدنى'
            },
            packing: {
                vi: 'Thùng Carton 10–15 kg hoặc Bao PP dệt 20–25 kg',
                en: 'Cartons (10–15 kg) or PP Woven Bags (20–25 kg)',
                'zh-cn': '10–15 kg 纸箱 或 20–25 kg PP编织袋',
                'zh-tw': '10–15 kg 紙箱 或 20–25 kg PP編織袋',
                hi: '10–15 किग्रा कार्टन या 20–25 किग्रा पीपी बैग',
                ar: 'كرتون 10–15 كجم أو أكياس PP سعة 20–25 كجم'
            },
            load: '8.5–9.5 MT / 20FCL · 18.0–20.0 MT / 40HC'
        },

        // ==================== VIETNAMESE HIGHLAND TEA (2 LINES × MULTIPLE GRADES) ====================
        {
            id: 'highland-green-tea',
            category: 'tea',
            page: 'green-tea.html',
            img: 'images/products/tea-gallery/tea-fresh-buds-closeup.jpg',
            width: 1280,
            height: 960,
            hs: '0902.20',
            badge: { vi: 'OP / Pekoe / PS / BPS', en: 'OP · Pekoe · PS · BPS', 'zh-cn': 'OP/Pekoe/PS/BPS', 'zh-tw': 'OP/Pekoe/PS/BPS', hi: 'OP · Pekoe · PS · BPS', ar: 'OP · Pekoe · PS · BPS' },
            origin: { vi: 'Cao Nguyên Phía Bắc, VN', en: 'Northern Highlands, Vietnam', 'zh-cn': '越南北部高山茶区', 'zh-tw': '越南北部高山茶區', hi: 'उत्तरी हाईलैंड्स, वियतनाम', ar: 'مرتفعات شمال فيتنام' },
            title: {
                vi: 'Chè Xanh Cao Nguyên Xuất Khẩu (OP / Pekoe / PS / BPS)',
                en: 'Vietnamese Highland Green Tea (OP, Pekoe, PS, BPS)',
                'zh-cn': '越南高山大宗出口绿茶（OP / Pekoe / PS / BPS）',
                'zh-tw': '越南高山大宗出口綠茶（OP / Pekoe / PS / BPS）',
                hi: 'वियतनामी हाईलैंड ग्रीन टी (OP, Pekoe, PS, BPS)',
                ar: 'الشاي الأخضر الجبلي الفيتنامي (OP, Pekoe, PS, BPS)'
            },
            moisture: '7.5% – 8.0% max',
            admixture: '0.5% – 1.0% max',
            spec: {
                vi: 'Đủ phẩm cấp OP (nguyên lá xoắn), Pekoe, PS, BPS, TH101; Tro tổng 4.0–6.5%; Xơ ≤ 15.5%',
                en: 'Full grades: OP (whole twisted leaf), Pekoe, PS, BPS, TH101; Total Ash 4.0–6.5%; Fiber ≤ 15.5%',
                'zh-cn': '涵盖 OP（整叶紧条）、Pekoe、PS、BPS、TH101 等级；总灰分 4.0–6.5%；粗纤维 ≤ 15.5%',
                'zh-tw': '涵蓋 OP（整葉緊條）、Pekoe、PS、BPS、TH101 等級；總灰分 4.0–6.5%；粗纖維 ≤ 15.5%',
                hi: 'ग्रेड: OP, Pekoe, PS, BPS; कुल राख (Ash) 4.0–6.5%; फाइबर ≤ 15.5%',
                ar: 'الدرجات: OP، Pekoe، PS، BPS؛ الرماد الكلي 4.0–6.5%؛ الألياف ≤ 15.5%'
            },
            oil: {
                vi: 'Chất hòa tan (Water Extract): ≥ 32% – 36%',
                en: 'Water-Soluble Extract: ≥ 32% – 36% min',
                'zh-cn': '水浸出物含量：≥ 32% – 36% min',
                'zh-tw': '水浸出物含量：≥ 32% – 36% min',
                hi: 'जल-घुलनशील अर्क (Water Extract): ≥ 32% – 36%',
                ar: 'المستخلص المائي الذائب: ≥ 32% – 36% كحد أدنى'
            },
            packing: {
                vi: 'Bao giấy Kraft / PP lót PE chống ẩm 20–40 kg (kèm túi hút ẩm cont)',
                en: 'PE-lined Multi-wall Kraft Sacks or PP Bags (20–40 kg net + container desiccants)',
                'zh-cn': '内衬食品级PE多层牛皮纸袋或PP袋（净重 20–40 kg，配集装箱防潮干燥棒）',
                'zh-tw': '內襯食品級PE多層牛皮紙袋或PP袋（淨重 20–40 kg，配貨櫃防潮乾燥棒）',
                hi: 'पीई-लाइन वाले क्राफ्ट पेपर या पीपी बैग (20–40 किग्रा नेट)',
                ar: 'أكياس ورق كرافت أو PP مبطنة بـ PE (20–40 كجم صافي مع مجففات حاوية)'
            },
            load: '10–11 MT / 20FCL · 20–22 MT / 40HC'
        },
        {
            id: 'highland-black-tea',
            category: 'tea',
            page: 'black-tea.html',
            img: 'images/products/tea-gallery/tea-sculpted-hills.jpg',
            width: 1276,
            height: 956,
            hs: '0902.40',
            badge: { vi: 'Orthodox & CTC', en: 'Orthodox & CTC', 'zh-cn': '工夫红茶 & CTC', 'zh-tw': '工夫紅茶 & CTC', hi: 'ऑर्थोडॉक्स व CTC', ar: 'أرثوذكس و CTC' },
            origin: { vi: 'Cao Nguyên Phía Bắc, VN', en: 'Northern Highlands, Vietnam', 'zh-cn': '越南北部高山茶区', 'zh-tw': '越南北部高山茶區', hi: 'उत्तरी हाईलैंड्स, वियतनाम', ar: 'مرتفعات شمال فيتنام' },
            title: {
                vi: 'Chè Đen Cao Nguyên Xuất Khẩu (OP / FBOP / Pekoe / PS / BPS / CTC)',
                en: 'Vietnamese Highland Black Tea (Orthodox OP, FBOP, Pekoe, PS, BPS & CTC)',
                'zh-cn': '越南高山大宗出口红茶（OP / FBOP / Pekoe / PS / BPS / CTC红碎茶）',
                'zh-tw': '越南高山大宗出口紅茶（OP / FBOP / Pekoe / PS / BPS / CTC紅碎茶）',
                hi: 'वियतनामी हाईलैंड ब्लैक टी (Orthodox OP, FBOP, Pekoe, PS, BPS व CTC)',
                ar: 'الشاي الأسود الجبلي الفيتنامي (Orthodox OP, FBOP, Pekoe, PS, BPS & CTC)'
            },
            moisture: '7.5% – 8.0% max',
            admixture: '0.5% – 1.0% max',
            spec: {
                vi: 'Lên men 90–100%; Cấp lá OP, FBOP, Pekoe, PS, BPS & CTC (BP1, PF1, PD); Nước đỏ hổ phách đậm',
                en: '90–100% oxidized; Grades OP, FBOP, Pekoe, PS, BPS & CTC (BP1, PF1, PD); Total Ash 4.0–6.5%',
                'zh-cn': '发酵度 90–100%；提供条形茶 OP/FBOP/Pekoe/PS/BPS 及 CTC 红碎茶（BP1/PF1/PD），汤色红亮',
                'zh-tw': '發酵度 90–100%；提供條形茶 OP/FBOP/Pekoe/PS/BPS 及 CTC 紅碎茶（BP1/PF1/PD），湯色紅亮',
                hi: '90–100% ऑक्सीकृत; ग्रेड OP, FBOP, Pekoe, PS, BPS व CTC (BP1, PF1, PD); राख ≤ 6.5%',
                ar: 'مؤكسد 90–100%؛ درجات OP وFBOP وPekoe وPS وBPS وCTC؛ لون عنبري غني'
            },
            oil: {
                vi: 'Chất hòa tan (Water Extract): ≥ 32% – 38%',
                en: 'Water-Soluble Extract: ≥ 32% – 38% min',
                'zh-cn': '水浸出物含量：≥ 32% – 38% min',
                'zh-tw': '水浸出物含量：≥ 32% – 38% min',
                hi: 'जल-घुलनशील अर्क (Water Extract): ≥ 32% – 38%',
                ar: 'المستخلص المائي الذائب: ≥ 32% – 38% كحد أدنى'
            },
            packing: {
                vi: 'Bao giấy Kraft nhiều lớp lót PE (20–30 kg) hoặc Bao PP/PE (30–45 kg)',
                en: 'Multi-wall PE-lined Kraft Sacks (20–30 kg) or PP/PE Bags (30–45 kg)',
                'zh-cn': '内衬PE多层牛皮纸袋（20–30 kg）或 PP/PE 复合袋（30–45 kg）',
                'zh-tw': '內襯PE多層牛皮紙袋（20–30 kg）或 PP/PE 複合袋（30–45 kg）',
                hi: 'पीई-लाइन क्राफ्ट पेपर बैग (20–30 किग्रा) या पीपी बैग (30–45 किग्रा)',
                ar: 'أكياس ورق كرافت مبطنة بـ PE (20–30 كجم) أو أكياس PP/PE (30–45 كجم)'
            },
            load: '10–12 MT / 20FCL · 21–24 MT / 40HC'
        }
    ];

    // Extra granular tea & spice sub-rows for individual product detail pages
    const DETAIL_PAGE_ROWS = {
        'cinnamon.html': ['tube-cassia', 'cigarette-cassia', 'split-cassia', 'broken-cut-cassia', 'cassia-powder'],
        'cinnamon-branches.html': ['sliced-twigs-branches', 'broken-cut-cassia'],
        'cinnamon-leaves.html': ['cinnamon-leaves'],
        'star-anise.html': ['autumn-star-anise', 'spring-star-anise', 'broken-star-anise'],
        'green-tea.html': 'green_tea_grades',
        'black-tea.html': 'black_tea_grades'
    };

    const TEA_GRADE_MATRICES = {
        green_tea_grades: [
            {
                hs: '0902.20',
                moisture: '7.5% max',
                admixture: '0.5% max',
                load: '10 MT / 20FCL · 19–20 MT / 40HC',
                title: { vi: 'Trà Xanh OP (Orange Pekoe — Nguyên Lá Xoắn Dài)', en: 'Green Tea OP (Orange Pekoe — Long Whole Leaf)', 'zh-cn': '高山绿茶 OP（长条整叶一级）', 'zh-tw': '高山綠茶 OP（長條整葉一級）', hi: 'ग्रीन टी OP (लंबे साबुत पत्ते)', ar: 'شاي أخضر OP (أوراق كاملة طويلة ملفوفة)' },
                spec: { vi: 'Lá dài xoắn chặt đồng đều, nước xanh vàng trong, hậu ngọt thanh; Tro ≤ 6.0%', en: 'Long, tightly wired whole leaves; bright yellow-green liquor, sweet finish; Ash ≤ 6.0%', 'zh-cn': '条索紧结匀整，汤色黄绿清亮，回甘清甜；总灰分 ≤ 6.0%', 'zh-tw': '條索緊結勻整，湯色黃綠清亮，回甘清甜；總灰分 ≤ 6.0%', hi: 'लंबे मुड़े हुए साबुत पत्ते, हल्का मीठा स्वाद; कुल राख ≤ 6.0%', ar: 'أوراق كاملة طويلة متجانسة، مشروب أخضر صافٍ ومذاق حلو طبيعي' },
                oil: { vi: 'Thủy phân ≥ 34–36%', en: 'Water Extract ≥ 34–36%', 'zh-cn': '水浸出物 ≥ 34–36%', 'zh-tw': '水浸出物 ≥ 34–36%', hi: 'अर्क ≥ 34–36%', ar: 'المستخلص ≥ 34–36%' },
                packing: { vi: 'Bao Kraft lót PE 20–25 kg', en: '20–25 kg PE-lined Kraft Sack', 'zh-cn': '20–25 kg 内衬PE牛皮纸袋', 'zh-tw': '20–25 kg 內襯PE牛皮紙袋', hi: '20–25 किग्रा क्राफ्ट बैग', ar: 'أكياس كرافت مبطنة 20–25 كجم' }
            },
            {
                hs: '0902.20',
                moisture: '8.0% max',
                admixture: '0.5% max',
                load: '10.5 MT / 20FCL · 20–21 MT / 40HC',
                title: { vi: 'Trà Xanh Pekoe / TH101 (Lá Xoắn Vừa — Đậm Vị)', en: 'Green Tea Pekoe / TH101 (Curled Medium Whole Leaf)', 'zh-cn': '高山绿茶 Pekoe / TH101（卷曲醇厚级）', 'zh-tw': '高山綠茶 Pekoe / TH101（捲曲醇厚級）', hi: 'ग्रीन टी Pekoe / TH101 (मजबूत स्वाद)', ar: 'شاي أخضر Pekoe / TH101 (قوام غني)' },
                spec: { vi: 'Cánh trà xoắn ngắn hơn OP, vị đậm đà, thích hợp phối trộn & đóng gói bán lẻ', en: 'Shorter curled leaves, fuller body, ideal for loose-leaf retail & blending', 'zh-cn': '条索卷曲紧实，滋味浓醇，适合拼配与零售分装', 'zh-tw': '條索捲曲緊實，滋味濃醇，適合拼配與零售分裝', hi: 'मध्यम मुड़े पत्ते, गाढ़ा स्वाद, ब्लेंडिंग हेतु उपयुक्त', ar: 'أوراق ملفوفة متوسطة، طعم قوي ومثالي للخلطات والتجزئة' },
                oil: { vi: 'Thủy phân ≥ 33–35%', en: 'Water Extract ≥ 33–35%', 'zh-cn': '水浸出物 ≥ 33–35%', 'zh-tw': '水浸出物 ≥ 33–35%', hi: 'अर्क ≥ 33–35%', ar: 'المستخلص ≥ 33–35%' },
                packing: { vi: 'Bao Kraft / PP lót PE 25–30 kg', en: '25–30 kg Kraft / PP-PE Sack', 'zh-cn': '25–30 kg 牛皮纸袋 / PP袋', 'zh-tw': '25–30 kg 牛皮紙袋 / PP袋', hi: '25–30 किग्रा क्राफ्ट/पीपी बैग', ar: 'أكياس كرافت / PP سعة 25–30 كجم' }
            },
            {
                hs: '0902.20',
                moisture: '8.0% max',
                admixture: '1.0% max',
                load: '11–12 MT / 20FCL · 22–24 MT / 40HC',
                title: { vi: 'Trà Xanh PS & BPS / Fanning (Pha Trà Sữa, Túi Lọc & Chiết Xuất)', en: 'Green Tea PS & BPS / Fanning (Tea Bags, Milk Tea & Beverage Base)', 'zh-cn': '绿茶 PS & BPS / 茶末（袋泡茶、新式茶饮与工业提取基底）', 'zh-tw': '綠茶 PS & BPS / 茶末（袋泡茶、手搖飲與工業提取基底）', hi: 'ग्रीन टी PS व BPS / फैनिंग (टी-बैग और बेवरेज बेस)', ar: 'شاي أخضر PS وBPS (لأكياس الشاي والمشروبات الصناعية)' },
                spec: { vi: 'Mảnh lá 3–5 mm (BPS) hoặc lá mở (PS), chiết xuất nhanh, hiệu quả kinh tế cao; Xơ ≤ 16%', en: '4–5 mm flaky leaf (BPS) or bold open leaf (PS); rapid infusion, high yield; Fiber ≤ 16%', 'zh-cn': '片状碎叶 4–5 mm，出汤迅速浓烈，餐饮茶饮与茶包高性价比原料；粗纤维 ≤ 16%', 'zh-tw': '片狀碎葉 4–5 mm，出湯迅速濃烈，手搖茶飲與茶包高性價比原料；粗纖維 ≤ 16%', hi: '4–5 मिमी पत्ती टुकड़े, तेज़ अर्क और उच्च किफायत', ar: 'قطع أوراق 4–5 مم سريعة الاستخلاص وعالية الجدوى الاقتصادية' },
                oil: { vi: 'Thủy phân ≥ 32–34%', en: 'Water Extract ≥ 32–34%', 'zh-cn': '水浸出物 ≥ 32–34%', 'zh-tw': '水浸出物 ≥ 32–34%', hi: 'अर्क ≥ 32–34%', ar: 'المستخلص ≥ 32–34%' },
                packing: { vi: 'Bao PP lót PE 30–45 kg net', en: '30–45 kg PE-lined PP Woven Bag', 'zh-cn': '30–45 kg 内衬PE编织袋', 'zh-tw': '30–45 kg 內襯PE編織袋', hi: '30–45 किग्रा पीई-लाइन पीपी बैग', ar: 'أكياس PP مبطنة 30–45 كجم' }
            }
        ],
        black_tea_grades: [
            {
                hs: '0902.40',
                moisture: '7.5% max',
                admixture: '0.5% max',
                load: '10 MT / 20FCL · 19–20 MT / 40HC',
                title: { vi: 'Trà Đen Orthodox OP / FBOP (Nguyên Lá Búp Vàng Thượng Hạng)', en: 'Orthodox Black Tea OP / FBOP (Whole Leaf with Golden Tips)', 'zh-cn': '传统工夫红茶 OP / FBOP（金毫整叶特级）', 'zh-tw': '傳統工夫紅茶 OP / FBOP（金毫整葉特級）', hi: 'ऑर्थोडॉक्स ब्लैक टी OP / FBOP (सुनहरी नोक वाले साबुत पत्ते)', ar: 'شاي أسود أرثوذكس OP / FBOP (أوراق كاملة مع قمم ذهبية)' },
                spec: { vi: 'Lá đen bóng điểm búp vàng, nước đỏ hổ phách trong, hương mật ong tự nhiên; Tro ≤ 6.0%', en: 'Dark wired leaves with golden tips, bright amber-red liquor, smooth honeyed aroma; Ash ≤ 6.0%', 'zh-cn': '乌润显金毫，汤色红艳明亮，自然蜜糖果香；总灰分 ≤ 6.0%', 'zh-tw': '烏潤顯金毫，湯色紅艷明亮，自然蜜糖果香；總灰分 ≤ 6.0%', hi: 'गहरे साबुत पत्ते, अंबर-लाल रंग और शहद जैसी सुगंध; राख ≤ 6.0%', ar: 'أوراق سوداء كاملة مع براعم ذهبية، لون عنبري محمر ونكهة عسلية' },
                oil: { vi: 'Thủy phân ≥ 34–38%', en: 'Water Extract ≥ 34–38%', 'zh-cn': '水浸出物 ≥ 34–38%', 'zh-tw': '水浸出物 ≥ 34–38%', hi: 'अर्क ≥ 34–38%', ar: 'المستخلص ≥ 34–38%' },
                packing: { vi: 'Bao giấy Kraft nhiều lớp lót PE 20–25 kg', en: '20–25 kg Multi-wall PE-lined Kraft Sack', 'zh-cn': '20–25 kg 多层内衬PE牛皮纸袋', 'zh-tw': '20–25 kg 多層內襯PE牛皮紙袋', hi: '20–25 किग्रा क्राफ्ट पेपर बैग', ar: 'أكياس ورق كرافت مبطنة 20–25 كجم' }
            },
            {
                hs: '0902.40',
                moisture: '8.0% max',
                admixture: '0.8% max',
                load: '11 MT / 20FCL · 21–22 MT / 40HC',
                title: { vi: 'Trà Đen Pekoe / PS / BPS (Pha Chế, Phối Trộn & Đồ Uống)', en: 'Orthodox Black Tea Pekoe / PS / BPS (Blending & Beverage Base)', 'zh-cn': '红茶 Pekoe / PS / BPS（商用拼配与奶茶基底）', 'zh-tw': '紅茶 Pekoe / PS / BPS（商用拼配與奶茶基底）', hi: 'ब्लैक टी Pekoe / PS / BPS (ब्लेंडिंग और बेवरेज ग्रेड)', ar: 'شاي أسود Pekoe / PS / BPS (للخلطات والمشروبات)' },
                spec: { vi: 'Vị đậm chắc, màu nước đỏ sẫm bền màu khi pha sữa/đá; Xơ ≤ 16.0%', en: 'Strong full-bodied cup, deep reddish liquor holding well with milk or ice; Fiber ≤ 16.0%', 'zh-cn': '汤感浓厚饱满，配奶或冰镇色味俱佳；粗纤维 ≤ 16.0%', 'zh-tw': '湯感濃厚飽滿，配奶或冰鎮色味俱佳；粗纖維 ≤ 16.0%', hi: 'गाढ़ा कड़क स्वाद, मिल्क टी व आइस्ड टी हेतु उत्तम', ar: 'قوام غني وقوي مثالي للشاي بالحليب والشاي المثلج' },
                oil: { vi: 'Thủy phân ≥ 32–36%', en: 'Water Extract ≥ 32–36%', 'zh-cn': '水浸出物 ≥ 32–36%', 'zh-tw': '水浸出物 ≥ 32–36%', hi: 'अर्क ≥ 32–36%', ar: 'المستخلص ≥ 32–36%' },
                packing: { vi: 'Bao Kraft / PP lót PE 25–35 kg', en: '25–35 kg PE-lined Kraft / PP Bag', 'zh-cn': '25–35 kg 内衬PE牛皮纸袋或PP袋', 'zh-tw': '25–35 kg 內襯PE牛皮紙袋或PP袋', hi: '25–35 किग्रा क्राफ्ट / पीपी बैग', ar: 'أكياس كرافت / PP سعة 25–35 كجم' }
            },
            {
                hs: '0902.40',
                moisture: '8.0% max',
                admixture: '0.5% max',
                load: '12–13 MT / 20FCL · 23–25 MT / 40HC',
                title: { vi: 'Trà Đen CTC — BP1 / PF1 / PD (Hạt Đều Cho Túi Lọc & Chai Đóng Sẵn)', en: 'CTC Black Tea — BP1 / PF1 / PD (Granular Tea Bag & RTD Grade)', 'zh-cn': 'CTC 红碎茶 — BP1 / PF1 / PD（袋泡茶与即饮茶颗粒级）', 'zh-tw': 'CTC 紅碎茶 — BP1 / PF1 / PD（袋泡茶與即飲茶顆粒級）', hi: 'CTC ब्लैक टी — BP1 / PF1 / PD (दानेदार कड़क ग्रेड)', ar: 'شاي أسود CTC — درجات BP1 / PF1 / PD (حبيبي سريع التخمير)' },
                spec: { vi: 'Hạt tròn đều mật độ khối cao, lên màu cực nhanh và đậm, tối ưu cước biển 40HC', en: 'Uniform high-density granules, instant rich color extraction, maximum 40HC payload efficiency', 'zh-cn': '颗粒紧实匀称、容重高，秒出浓红茶汤，40尺高柜装货量最大化', 'zh-tw': '顆粒緊實勻稱、容重高，秒出濃紅茶湯，40呎高櫃裝貨量最大化', hi: 'समान घने दाने, तुरंत गाढ़ा रंग और कड़क स्वाद, 40HC में अधिकतम लोड', ar: 'حبيبات متجانسة عالية الكثافة، استخلاص فوري ولون غني جداً' },
                oil: { vi: 'Thủy phân ≥ 34–38%', en: 'Water Extract ≥ 34–38%', 'zh-cn': '水浸出物 ≥ 34–38%', 'zh-tw': '水浸出物 ≥ 34–38%', hi: 'अर्क ≥ 34–38%', ar: 'المستخلص ≥ 34–38%' },
                packing: { vi: 'Bao giấy Kraft đa lớp lót bạc/PE 25–35 kg', en: '25–35 kg Foil/PE-lined Multi-wall Paper Sack', 'zh-cn': '25–35 kg 内衬铝箔/PE多层纸袋', 'zh-tw': '25–35 kg 內襯鋁箔/PE多層紙袋', hi: '25–35 किग्रा मल्टी-वॉल पेपर बैग', ar: 'أكياس ورقية متعددة الطبقات مبطنة 25–35 كجم' }
            }
        ]
    };

    function getActiveLang() {
        if (typeof window.normalizeSupportedLang === 'function' && window.location && window.location.search) {
            try {
                const q = window.normalizeSupportedLang(new URLSearchParams(window.location.search).get('lang'));
                if (q && UI_LABELS[q]) return q;
            } catch (_) {}
        }
        try {
            const saved = (localStorage.getItem('selectedLanguage') || '').trim().toLowerCase();
            if (UI_LABELS[saved]) return saved;
        } catch (_) {}
        return 'en';
    }

    function pickText(field, lang) {
        if (typeof field === 'string') return field;
        if (!field) return '';
        return field[lang] || field['en'] || '';
    }

    function resolveAssetPrefix() {
        const p = window.location.pathname || '';
        if (p.includes('/pages/products/')) return '../../';
        if (p.includes('/pages/')) return '../';
        return '';
    }

    function resolveDetailHref(pageFile, lang) {
        const p = window.location.pathname || '';
        let base = 'pages/products/' + pageFile;
        if (p.includes('/pages/products/')) {
            base = pageFile;
        } else if (p.includes('/pages/')) {
            base = 'products/' + pageFile;
        }
        return (lang && lang !== 'en') ? (base + '?lang=' + encodeURIComponent(lang)) : base;
    }

    function mapCategoryToSelectOption(cat, id) {
        if (id === 'cinnamon-leaves') return 'Cinnamon Leaves';
        if (id === 'sliced-twigs-branches') return 'Cinnamon Branches';
        if (cat === 'cinnamon') return 'Vietnamese Cinnamon';
        if (cat === 'anise') return 'Star Anise';
        if (id === 'highland-green-tea') return 'Green Tea';
        if (id === 'highland-black-tea') return 'Black Tea';
        return 'Mixed Container';
    }

    window.requestGradeQuote = function (gradeId) {
        const lang = getActiveLang();
        const item = CATALOG_ITEMS.find(function (x) { return x.id === gradeId; });
        const title = item ? pickText(item.title, lang) : gradeId;
        const specSummary = item ? ('HS ' + item.hs + ' | ' + item.load) : '';

        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const prodSelect = document.getElementById('product');
            if (prodSelect && item) {
                const targetVal = mapCategoryToSelectOption(item.category, item.id);
                for (let i = 0; i < prodSelect.options.length; i++) {
                    if (prodSelect.options[i].value === targetVal) {
                        prodSelect.selectedIndex = i;
                        break;
                    }
                }
            }
            const msgBox = document.getElementById('message');
            if (msgBox && !msgBox.value.trim()) {
                msgBox.value = title + ' (' + specSummary + ') — FOB Hai Phong / CIF Inquiry: ';
            }
            const header = document.querySelector('header');
            const offset = header ? header.offsetHeight : 80;
            window.scrollTo({
                top: contactSection.offsetTop - offset - 10,
                behavior: 'smooth'
            });
            if (msgBox) setTimeout(function () { msgBox.focus(); }, 500);
        } else {
            const prefix = resolveAssetPrefix();
            const qs = new URLSearchParams();
            if (lang && lang !== 'en') qs.set('lang', lang);
            qs.set('grade', gradeId);
            window.location.href = prefix + 'index.html?' + qs.toString() + '#contact';
        }
    };

    let currentCategoryFilter = 'all';

    function renderClassifiedCatalog() {
        const gridEl = document.getElementById('classifiedCatalogGrid');
        const tabsEl = document.getElementById('classifiedCatalogTabs');
        const subtitleEl = document.getElementById('classifiedCatalogSubtitle');
        if (!gridEl) return;

        const lang = getActiveLang();
        const ui = UI_LABELS[lang] || UI_LABELS['en'];
        const prefix = resolveAssetPrefix();

        if (subtitleEl) {
            subtitleEl.textContent = ui.sectionSubtitle;
        }

        if (tabsEl) {
            tabsEl.textContent = '';
            ['all', 'cinnamon', 'anise', 'tea'].forEach(function (catKey) {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'catalog-tab-btn' + (currentCategoryFilter === catKey ? ' active' : '');
                btn.setAttribute('data-cat', catKey);
                btn.textContent = ui.tabs[catKey];
                btn.addEventListener('click', function () {
                    currentCategoryFilter = catKey;
                    renderClassifiedCatalog();
                });
                tabsEl.appendChild(btn);
            });
        }

        gridEl.textContent = '';
        const visibleItems = CATALOG_ITEMS.filter(function (item) {
            return currentCategoryFilter === 'all' || item.category === currentCategoryFilter;
        });

        visibleItems.forEach(function (item) {
            const card = document.createElement('article');
            card.className = 'classified-spec-card fade-in';
            card.setAttribute('data-category', item.category);

            // Image wrapper
            const imgWrap = document.createElement('div');
            imgWrap.className = 'classified-card-media zoomable-media';

            const img = document.createElement('img');
            img.src = prefix + item.img;
            img.alt = pickText(item.title, lang);
            img.width = item.width;
            img.height = item.height;
            img.loading = 'lazy';
            img.decoding = 'async';
            imgWrap.appendChild(img);

            const hsBadge = document.createElement('span');
            hsBadge.className = 'classified-hs-pill';
            hsBadge.textContent = ui.labels.hs + ': ' + item.hs;
            imgWrap.appendChild(hsBadge);

            if (item.badge) {
                const statusBadge = document.createElement('span');
                statusBadge.className = 'classified-grade-badge';
                statusBadge.textContent = pickText(item.badge, lang);
                imgWrap.appendChild(statusBadge);
            }

            const hiddenCaption = document.createElement('div');
            hiddenCaption.className = 'warehouse-photo-caption';
            hiddenCaption.style.display = 'none';
            hiddenCaption.textContent = pickText(item.title, lang) + ' — ' + item.load;
            imgWrap.appendChild(hiddenCaption);

            card.appendChild(imgWrap);

            // Body
            const body = document.createElement('div');
            body.className = 'classified-card-body';

            const originEl = document.createElement('div');
            originEl.className = 'classified-origin-line';
            originEl.textContent = '📍 ' + pickText(item.origin, lang);
            body.appendChild(originEl);

            const h3 = document.createElement('h3');
            h3.className = 'classified-card-title';
            h3.textContent = pickText(item.title, lang);
            body.appendChild(h3);

            // 5-row technical parameter list
            const dl = document.createElement('div');
            dl.className = 'classified-spec-rows';

            const rows = [
                { k: ui.labels.moisture, v: item.moisture },
                { k: ui.labels.admixture, v: item.admixture },
                { k: ui.labels.oil, v: pickText(item.oil, lang) },
                { k: ui.labels.spec, v: pickText(item.spec, lang) },
                { k: ui.labels.packing, v: pickText(item.packing, lang) }
            ];

            rows.forEach(function (r) {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'classified-spec-row';
                const kSpan = document.createElement('span');
                kSpan.className = 'cs-key';
                kSpan.textContent = r.k + ':';
                const vSpan = document.createElement('span');
                vSpan.className = 'cs-val';
                vSpan.textContent = r.v;
                rowDiv.appendChild(kSpan);
                rowDiv.appendChild(vSpan);
                dl.appendChild(rowDiv);
            });
            body.appendChild(dl);

            // Highlighted Container Loadability Bar
            const loadBar = document.createElement('div');
            loadBar.className = 'classified-container-bar';
            const loadLabel = document.createElement('span');
            loadLabel.className = 'cc-label';
            loadLabel.textContent = '🚢 ' + ui.labels.container + ':';
            const loadVal = document.createElement('strong');
            loadVal.className = 'cc-val';
            loadVal.textContent = item.load;
            loadBar.appendChild(loadLabel);
            loadBar.appendChild(loadVal);
            body.appendChild(loadBar);

            // Action Buttons
            const actions = document.createElement('div');
            actions.className = 'classified-card-actions';

            const detailLink = document.createElement('a');
            detailLink.href = resolveDetailHref(item.page, lang);
            detailLink.className = 'btn btn-secondary classified-btn';
            detailLink.textContent = ui.btnDetails;

            const quoteBtn = document.createElement('button');
            quoteBtn.type = 'button';
            quoteBtn.className = 'btn btn-primary classified-btn';
            quoteBtn.textContent = ui.btnQuote;
            quoteBtn.addEventListener('click', function () {
                window.requestGradeQuote(item.id);
            });

            actions.appendChild(detailLink);
            actions.appendChild(quoteBtn);
            body.appendChild(actions);

            card.appendChild(body);
            gridEl.appendChild(card);
        });
    }

    function renderDetailPageMatrix() {
        const containerEl = document.getElementById('gradeSpecMatrixContainer');
        if (!containerEl) return;

        const pathName = window.location.pathname || '';
        const rawSlug = (pathName.split('/').filter(Boolean).pop() || '').toLowerCase();
        const fileName = rawSlug.endsWith('.html') ? rawSlug : (rawSlug + '.html');
        const mapping = DETAIL_PAGE_ROWS[fileName];
        if (!mapping) return;

        const lang = getActiveLang();
        const ui = UI_LABELS[lang] || UI_LABELS['en'];

        let dataRows = [];
        if (Array.isArray(mapping)) {
            dataRows = mapping.map(function (id) {
                return CATALOG_ITEMS.find(function (x) { return x.id === id; });
            }).filter(Boolean);
        } else if (TEA_GRADE_MATRICES[mapping]) {
            dataRows = TEA_GRADE_MATRICES[mapping];
        }

        if (!dataRows.length) return;

        containerEl.textContent = '';

        const headerDiv = document.createElement('div');
        headerDiv.className = 'warehouse-header';

        const badge = document.createElement('span');
        badge.className = 'warehouse-badge';
        badge.textContent = ui.matrixBadge;

        const h2 = document.createElement('h2');
        h2.className = 'section-title';
        h2.textContent = ui.matrixTitle;

        const sub = document.createElement('p');
        sub.className = 'warehouse-subtitle';
        sub.textContent = ui.matrixSubtitle;

        headerDiv.appendChild(badge);
        headerDiv.appendChild(h2);
        headerDiv.appendChild(sub);
        containerEl.appendChild(headerDiv);

        const tableWrap = document.createElement('div');
        tableWrap.className = 'grade-matrix-scroll-wrap';

        const table = document.createElement('table');
        table.className = 'grade-matrix-table';

        const thead = document.createElement('thead');
        const trHead = document.createElement('tr');
        [ui.colGrade, ui.colHs, ui.colMoisture, ui.colAdmixture, ui.colOil, ui.colSpec, ui.colPacking, ui.colLoad].forEach(function (colText) {
            const th = document.createElement('th');
            th.textContent = colText;
            trHead.appendChild(th);
        });
        thead.appendChild(trHead);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        dataRows.forEach(function (row) {
            const tr = document.createElement('tr');
            const cells = [
                pickText(row.title, lang),
                row.hs,
                row.moisture,
                row.admixture,
                pickText(row.oil, lang),
                pickText(row.spec, lang),
                pickText(row.packing, lang),
                row.load
            ];
            cells.forEach(function (val, idx) {
                const td = document.createElement('td');
                if (idx === 0) td.className = 'gm-grade-col';
                if (idx === 1) td.className = 'gm-hs-col';
                if (idx === 7) td.className = 'gm-load-col';
                td.textContent = val;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        tableWrap.appendChild(table);
        containerEl.appendChild(tableWrap);
    }

    function applyPreselectedGradeFromUrl() {
        if (!window.location || !window.location.search) return;
        try {
            const gradeId = new URLSearchParams(window.location.search).get('grade');
            if (gradeId && document.getElementById('contact')) {
                setTimeout(function () {
                    window.requestGradeQuote(gradeId);
                }, 350);
            }
        } catch (_) {}
    }

    function initAllCatalogSpecs() {
        renderClassifiedCatalog();
        renderDetailPageMatrix();
        applyPreselectedGradeFromUrl();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllCatalogSpecs);
    } else {
        initAllCatalogSpecs();
    }

    window.addEventListener('languageChanged', function () {
        renderClassifiedCatalog();
        renderDetailPageMatrix();
    });
})();
