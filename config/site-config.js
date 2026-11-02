// FCT Vĩnh Thịnh Website Configuration
const siteConfig = {
    company: {
        name: 'FCT Vinh Thinh Joint Stock Company',
        nameVi: 'Công Ty Cổ Phần FCT Vĩnh Thịnh',
        address: {
            en: 'Star Building, 15B Nguyen Canh Di St, Dinh Cong Ward, Hanoi, Vietnam',
            vi: 'Tòa nhà Ngôi Sao, số 15B đường Nguyễn Cảnh Dị, phường Định Công, thành phố Hà Nội, Việt Nam'
        },
        contact: {
            phone: '+84 983 027 776',
            email: 'andrew@fct.vn',
            contactPerson: 'Andrew Tseng'
        }
    },

    products: {
        cinnamon: {
            types: ['sticks', 'chips', 'split', 'powder'],
            grades: ['A', 'B', 'C'],
            origins: ['Yen Bai', 'Quang Nam']
        },
        cinnamonLeaf: {
            processing: ['dried', 'fresh'],
            uses: ['essential oil', 'tea']
        },
        starAnise: {
            grades: ['whole', 'broken'],
            seasons: ['spring', 'autumn'],
            origins: ['Lang Son']
        },
        tea: {
            green: ['sencha', 'gunpowder', 'jasmine'],
            black: ['broken', 'whole leaf']
        }
    },

    seo: {
        title: {
            en: 'FCT Vinh Thinh - Direct Vietnamese Cinnamon, Star Anise & Tea Exporter',
            vi: 'FCT Vĩnh Thịnh - Xuất Khẩu Quế Yên Bái, Hoa Hồi Lạng Sơn & Chè Việt Nam',
            'zh-cn': '越南FCT永盛 - 越南肉桂、八角大料、桂枝片及高山茶源头出口商',
            'zh-tw': '越南FCT永盛 - 越南肉桂、八角大料、桂枝片及高山茶源頭出口商',
            hi: 'FCT Vinh Thinh - वियतनामी दालचीनी, चक्र फूल (स्टार ऐनीज़) और चाय निर्यातक',
            ar: 'FCT Vinh Thinh - مصدر القرفة الفيتنامية واليانسون النجمي والشاي بالجملة'
        },
        productsTitle: {
            en: 'Bulk Export Catalog: Cinnamon, Star Anise & Tea | FCT Vinh Thinh',
            vi: 'Danh Mục Xuất Khẩu Sỉ: Quế, Hoa Hồi & Chè Cao Nguyên | FCT Vĩnh Thịnh',
            'zh-cn': '出口产品目录：越南肉桂、八角茴香与高山茶 | FCT永盛',
            'zh-tw': '出口產品目錄：越南肉桂、八角茴香與高山茶 | FCT永盛',
            hi: 'थोक निर्यात उत्पाद सूची: दालचीनी, चक्र फूल और चाय | FCT Vinh Thinh',
            ar: 'كتالوج منتجات التصدير بالجملة: القرفة واليانسون النجمي والشاي | FCT Vinh Thinh'
        },
        keywords: {
            en: 'vietnam cinnamon export, cassia cinnamon supplier, lang son star anise exporter, gui zhi sliced cinnamon twigs, vietnamese bulk tea exporter, FOB Hai Phong spices',
            vi: 'xuất khẩu quế Việt Nam, quế Yên Bái xuất khẩu, hoa hồi Lạng Sơn xuất khẩu, cành quế lá quế xuất khẩu, chè xanh chè đen xuất khẩu, FCT Vĩnh Thịnh',
            'zh-cn': '越南肉桂出口, 越南八角茴香供应商, 越南桂枝片批发, 烟仔桂桂通出口, 越南高山绿茶红茶, 海防港FOB香料出口商',
            'zh-tw': '越南肉桂出口, 越南八角茴香供應商, 越南桂枝片批發, 煙仔桂桂通出口, 越南高山綠茶紅茶, 海防港FOB香料出口商',
            hi: 'वियतनाम दालचीनी निर्यात, चक्र फूल थोक आपूर्तिकर्ता, वियतनामी ग्रीन टी ब्लैक टी निर्यात, कैसिया दालचीनी',
            ar: 'تصدير القرفة الفيتنامية, مورد اليانسون النجمي بالجملة, تصدير الشاي الفيتنامي, بهارات فيتنام ميناء هاي فونغ'
        },
        description: {
            en: 'Direct Vietnamese manufacturer & bulk exporter of Yen Bai Cassia Cinnamon (HS 0906), Lang Son Star Anise (HS 0909.61), and Highland Tea (HS 0902). Up to 500 MT/month FOB Hai Phong.',
            vi: 'Công ty Cổ phần FCT Vĩnh Thịnh — Nhà chế biến và xuất khẩu trực tiếp Quế Yên Bái, Hoa Hồi Lạng Sơn, Quế chi và Chè cao nguyên Việt Nam qua Cảng Hải Phòng (500 tấn/tháng).',
            'zh-cn': '越南FCT永盛股份公司 — 越南安沛肉桂(桂通/烟仔桂/肉桂粉/桂枝片)、谅山八角大料及高山茶源头出口商，海防港FOB月供应量达500吨。',
            'zh-tw': '越南FCT永盛股份公司 — 越南安沛肉桂(桂通/煙仔桂/肉桂粉/桂枝片)、諒山八角大料及高山茶源頭出口商，海防港FOB月供應量達500噸。',
            hi: 'FCT विन्ह थिन्ह - येन बाई वियतनामी कैसिया दालचीनी, लैंग सोन चक्र फूल और हाईलैंड चाय का प्रत्यक्ष निर्माता व थोक निर्यातक (500 MT/माह, हाई फोंग पोर्ट)।',
            ar: 'شركة FCT فين ثين - مُصنِّع ومُصدِّر مباشر للقرفة الفيتنامية واليانسون النجمي والشاي الجبلي بالجملة عبر ميناء هاي فونغ بطاقة تصل إلى 500 طن شهرياً.'
        },
        productsDescription: {
            en: 'Explore FCT Vinh Thinh B2B export specifications for Vietnamese cassia cinnamon sticks, powder, twigs, dried leaves, whole star anise, and highland whole-leaf green & black tea.',
            vi: 'Danh mục quy cách xuất khẩu sỉ của FCT Vĩnh Thịnh: Quế ống, quế điếu, bột quế, cành & lá quế, hoa hồi Lạng Sơn và chè xanh, chè đen nguyên lá xuất cảng Hải Phòng.',
            'zh-cn': '浏览FCT永盛大宗出口规格：越南肉桂条、肉桂粉、桂皮碎、桂枝片、干肉桂叶、谅山八角及越南高山全叶绿茶与红茶。',
            'zh-tw': '瀏覽FCT永盛大宗出口規格：越南肉桂條、肉桂粉、桂皮碎、桂枝片、乾肉桂葉、諒山八角及越南高山全葉綠茶與紅茶。',
            hi: 'थोक निर्यात विनिर्देश देखें: वियतनामी दालचीनी स्टिक्स, पाउडर, पत्तियां, साबुत चक्र फूल और प्रीमियम वियतनामी ग्रीन व ब्लैक टी।',
            ar: 'تصفح مواصفات التصدير بالجملة لشركة FCT Vinh Thinh: أعواد ومسحوق وأوراق القرفة، اليانسون النجمي الكامل، والشاي الأخضر والأسود الفيتنامي.'
        },
        ogLocale: {
            en: 'en_US',
            vi: 'vi_VN',
            'zh-cn': 'zh_CN',
            'zh-tw': 'zh_TW',
            hi: 'hi_IN',
            ar: 'ar_AE'
        }
    },

    targetMarkets: [
        'Taiwan', 'China', 'India', 'Thailand', 'Singapore', 'Malaysia',
        'UAE', 'Saudi Arabia', 'Germany', 'Netherlands', 'UK', 'France'
    ],

    exportLogistics: {
        loadingPort: 'Hai Phong Port, Vietnam',
        monthlyCapacity: 'Up to 500 MT / Month',
        incoterms: ['FOB Hai Phong', 'CIF', 'CFR'],
        containers: ['20ft', '40ft', '40HC']
    },

    exportDocuments: [
        'Certificate of Origin (C/O)',
        'Phytosanitary Certificate',
        'Fumigation Certificate',
        'Commercial Invoice & Packing List',
        'SGS / Vinacontrol Inspection (upon request)'
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
if (typeof window !== 'undefined') {
    window.siteConfig = siteConfig;
}