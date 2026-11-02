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
            seasons: ['spring', 'autumn']
        },
        tea: {
            green: ['sencha', 'gunpowder', 'jasmine'],
            black: ['broken', 'whole leaf']
        }
    },
    
    seo: {
        keywords: {
            en: 'vietnam cinnamon export, star anise supplier, vietnamese tea, spice exporter, cassia cinnamon',
            'zh-cn': '越南肉桂出口, 八角茴香供应商, 越南茶叶, 香料出口商',
            'zh-tw': '越南肉桂出口, 八角茴香供應商, 越南茶葉, 香料出口商',
            hi: 'वियतनाम दालचीनी निर्यात, चक्र फूल आपूर्तिकर्ता, वियतनामी चाय',
            ar: 'تصدير القرفة الفيتنامية, مورد زهر اليانسون, الشاي الفيتنامي'
        },
        description: {
            en: 'FCT Vinh Thinh - Leading exporter of premium Vietnamese cinnamon, star anise, and tea. High-quality spices for international markets.',
            'zh-cn': 'FCT永盛 - 优质越南肉桂、八角茴香和茶叶的领先出口商。为国际市场提供高品质香料。',
            'zh-tw': 'FCT永盛 - 優質越南肉桂、八角茴香和茶葉的領先出口商。為國際市場提供高品質香料。',
            hi: 'FCT विन्ह थिन्ह - प्रीमियम वियतनामी दालचीनी, चक्र फूल और चाय का अग्रणी निर्यातक।',
            ar: 'FCT فين ثين - مصدر رائد للقرفة وزهر اليانسون والشاي الفيتنامي المميز.'
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