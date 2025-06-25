document.addEventListener('DOMContentLoaded', function() {
    // --- DATA & STATE ---
    const masterExamData = [ {date:"2025-06-26",time:"morning",subject_key:"ban_1",code:"101",departments:["all"]},{date:"2025-06-29",time:"morning",subject_key:"ban_2",code:"102",departments:["all"]},{date:"2025-07-01",time:"morning",subject_key:"en_1",code:"107",departments:["all"]},{date:"2025-07-03",time:"morning",subject_key:"en_2",code:"108",departments:["all"]},{date:"2025-07-07",time:"morning",subject_key:"ict",code:"275",departments:["all"]},{date:"2025-07-10",time:"morning",subject_key:"phy_1",code:"174",departments:["science"]},{date:"2025-07-10",time:"morning",subject_key:"acc_1",code:"253",departments:["business"]},{date:"2025-07-10",time:"morning",subject_key:"logic_1",code:"121",departments:["humanities"]},{date:"2025-07-13",time:"morning",subject_key:"phy_2",code:"175",departments:["science"]},{date:"2025-07-13",time:"morning",subject_key:"acc_2",code:"254",departments:["business"]},{date:"2025-07-13",time:"morning",subject_key:"logic_2",code:"122",departments:["humanities"]},{date:"2025-07-15",time:"morning",subject_key:"geo_1",code:"125",departments:["humanities"]},{date:"2025-07-15",time:"afternoon",subject_key:"music_1",code:"218",departments:["optional"]},{date:"2025-07-15",time:"afternoon",subject_key:"arabic_1",code:"133",departments:["humanities"]},{date:"2025-07-15",time:"afternoon",subject_key:"pali_1",code:"139",departments:["humanities"]},{date:"2025-07-17",time:"morning",subject_key:"geo_2",code:"126",departments:["humanities"]},{date:"2025-07-17",time:"afternoon",subject_key:"music_2",code:"219",departments:["optional"]},{date:"2025-07-17",time:"afternoon",subject_key:"arabic_2",code:"134",departments:["humanities"]},{date:"2025-07-17",time:"afternoon",subject_key:"pali_2",code:"140",departments:["humanities"]},{date:"2025-07-20",time:"morning",subject_key:"che_1",code:"176",departments:["science"]},{date:"2025-07-20",time:"morning",subject_key:"islamic_h_1",code:"267",departments:["humanities"]},{date:"2025-07-20",time:"morning",subject_key:"history_1",code:"304",departments:["humanities"]},{date:"2025-07-20",time:"morning",subject_key:"home_m_1",code:"282",departments:["humanities"]},{date:"2025-07-20",time:"morning",subject_key:"prod_m_1",code:"286",departments:["business"]},{date:"2025-07-22",time:"morning",subject_key:"che_2",code:"177",departments:["science"]},{date:"2025-07-22",time:"morning",subject_key:"islamic_h_2",code:"268",departments:["humanities"]},{date:"2025-07-22",time:"morning",subject_key:"history_2",code:"305",departments:["humanities"]},{date:"2025-07-22",time:"morning",subject_key:"home_m_2",code:"283",departments:["humanities"]},{date:"2025-07-22",time:"morning",subject_key:"prod_m_2",code:"287",departments:["business"]},{date:"2025-07-24",time:"morning",subject_key:"eco_1",code:"109",departments:["humanities","business"]},{date:"2025-07-24",time:"morning",subject_key:"engg_d_1",code:"180",departments:["science"]},{date:"2025-07-27",time:"morning",subject_key:"eco_2",code:"110",departments:["humanities","business"]},{date:"2025-07-27",time:"morning",subject_key:"engg_d_2",code:"182",departments:["science"]},{date:"2025-07-28",time:"morning",subject_key:"civics_1",code:"269",departments:["humanities"]},{date:"2025-07-28",time:"morning",subject_key:"bio_1",code:"178",departments:["science"]},{date:"2025-07-28",time:"morning",subject_key:"business_org_1",code:"277",departments:["business"]},{date:"2025-07-28",time:"afternoon",subject_key:"food_n_1",code:"279",departments:["humanities"]},{date:"2025-07-30",time:"morning",subject_key:"civics_2",code:"270",departments:["humanities"]},{date:"2025-07-30",time:"morning",subject_key:"bio_2",code:"179",departments:["science"]},{date:"2025-07-30",time:"morning",subject_key:"business_org_2",code:"278",departments:["business"]},{date:"2025-07-30",time:"afternoon",subject_key:"food_n_2",code:"280",departments:["optional"]},{date:"2025-07-31",time:"morning",subject_key:"psy_1",code:"123",departments:["humanities"]},{date:"2025-07-31",time:"morning",subject_key:"agri_1",code:"239",departments:["science", "humanities"]},{date:"2025-07-31",time:"morning",subject_key:"soil_1",code:"288",departments:["science"]},{date:"2025-07-31",time:"morning",subject_key:"charu_1",code:"225",departments:["optional"]},{date:"2025-07-31",time:"morning",subject_key:"natok_1",code:"227",departments:["optional"]},{date:"2025-07-31",time:"afternoon",subject_key:"stats_1",code:"129",departments:["science","humanities","business"]},{date:"2025-07-31",time:"afternoon",subject_key:"applied_art_1",code:"284",departments:["optional"]},{date:"2025-08-03",time:"morning",subject_key:"psy_2",code:"124",departments:["humanities"]},{date:"2025-08-03",time:"morning",subject_key:"agri_2",code:"240",departments:["science","humanities"]},{date:"2025-08-03",time:"morning",subject_key:"soil_2",code:"289",departments:["science"]},{date:"2025-08-03",time:"morning",subject_key:"charu_2",code:"226",departments:["optional"]},{date:"2025-08-03",time:"morning",subject_key:"natok_2",code:"228",departments:["optional"]},{date:"2025-08-03",time:"afternoon",subject_key:"stats_2",code:"130",departments:["science","humanities","business"]},{date:"2025-08-03",time:"afternoon",subject_key:"applied_art_2",code:"285",departments:["optional"]},{date:"2025-08-04",time:"morning",subject_key:"hmath_1",code:"265",departments:["science"]},{date:"2025-08-04",time:"morning",subject_key:"islamic_s_1",code:"249",departments:["humanities"]},{date:"2025-08-04",time:"afternoon",subject_key:"home_s_1",code:"273",departments:["humanities"]},{date:"2025-08-04",time:"afternoon",subject_key:"sanskrit_1",code:"137",departments:["optional"]},{date:"2025-08-04",time:"afternoon",subject_key:"loghu_s_1",code:"216",departments:["optional"]},{date:"2025-08-06",time:"morning",subject_key:"hmath_2",code:"266",departments:["science"]},{date:"2025-08-06",time:"morning",subject_key:"islamic_s_2",code:"250",departments:["humanities"]},{date:"2025-08-06",time:"afternoon",subject_key:"home_s_2",code:"274",departments:["humanities"]},{date:"2025-08-06",time:"afternoon",subject_key:"sanskrit_2",code:"138",departments:["optional"]},{date:"2025-08-06",time:"afternoon",subject_key:"loghu_s_2",code:"217",departments:["optional"]},{date:"2025-08-07",time:"morning",subject_key:"fin_1",code:"292",departments:["business"]},{date:"2025-08-07",time:"morning",subject_key:"child_d_1",code:"298",departments:["humanities"]},{date:"2025-08-07",time:"afternoon",subject_key:"soc_1",code:"117",departments:["humanities"]},{date:"2025-08-07",time:"afternoon",subject_key:"soc_w_1",code:"271",departments:["humanities"]},{date:"2025-08-07",time:"afternoon",subject_key:"sports_1",code:"158",departments:["optional"]},{date:"2025-08-10",time:"morning",subject_key:"fin_2",code:"293",departments:["business"]},{date:"2025-08-10",time:"morning",subject_key:"child_d_2",code:"299",departments:["humanities"]},{date:"2025-08-10",time:"afternoon",subject_key:"soc_2",code:"118",departments:["humanities"]},{date:"2025-08-10",time:"afternoon",subject_key:"soc_w_2",code:"272",departments:["humanities"]},{date:"2025-08-10",time:"afternoon",subject_key:"sports_2",code:"159",departments:["optional"]} ];
    const translations={bn:{main_title:"এইচএসসি ২০২৫:",sub_title:'এই ওয়েবসাইটটি নির্মিত হয়েছে "আল হাসিব" - এর উদ্যোগে',col_subject_code:"বিষয় ও কোড",col_date_details:"তারিখ ও বিস্তারিত",group_amar_routine:"আমার রুটিন",group_science:"বিজ্ঞান বিভাগ",group_humanities:"মানবিক বিভাগ",group_business:"ব্যবসায় শিক্ষা",time_m:"সকাল ১০টা - ১টা",time_a:"বিকাল ২টা - ৫টা",ban_1:"বাংলা ১ম পত্র",ban_2:"বাংলা ২য় পত্র",en_1:"ইংরেজি ১ম পত্র",en_2:"ইংরেজি ২য় পত্র",ict:"তথ্য ও যোগাযোগ প্রযুক্তি",phy_1:"পদার্থবিজ্ঞান ১ম পত্র",acc_1:"হিসাববিজ্ঞান ১ম পত্র",logic_1:"যুক্তিবিদ্যা ১ম পত্র",phy_2:"পদার্থবিজ্ঞান ২য় পত্র",acc_2:"হিসাববিজ্ঞান ২য় পত্র",logic_2:"যুক্তিবিদ্যা ২য় পত্র",geo_1:"ভূগোল ১ম পত্র",music_1:"উচ্চাঙ্গ সংগীত ১ম পত্র",arabic_1:"আরবি ১ম পত্র",pali_1:"পালি ১ম পত্র",geo_2:"ভূগোল ২য় পত্র",music_2:"উচ্চাঙ্গ সংগীত ২য় পত্র",arabic_2:"আরবি ২য় পত্র",pali_2:"পালি ২য় পত্র",che_1:"রসায়ন ১ম পত্র",islamic_h_1:"ইসলামের ইতিহাস ও সংস্কৃতি ১ম পত্র",history_1:"ইতিহাস ১ম পত্র",home_m_1:"গৃহ ব্যবস্থাপনা ও পারিবারিক জীবন ১ম পত্র",prod_m_1:"উৎপাদন ব্যবস্থাপনা ও বিপণন ১ম পত্র",che_2:"রসায়ন ২য় পত্র",islamic_h_2:"ইসলামের ইতিহাস ও সংস্কৃতি ২য় পত্র",history_2:"ইতিহাস ২য় পত্র",home_m_2:"গৃহ ব্যবস্থাপনা ও পারিবারিক জীবন ২য় পত্র",prod_m_2:"উৎপাদন ব্যবস্থাপনা ও বিপণন ২য় পত্র",eco_1:"অর্থনীতি ১ম পত্র",engg_d_1:"প্রকৌশল অঙ্কন ও ওয়ার্কশপ প্র্যাকটিস ১ম পত্র",eco_2:"অর্থনীতি ২য় পত্র",engg_d_2:"প্রকৌশল অঙ্কন ও ওয়ার্কশপ প্র্যাকটিস ২য় পত্র",civics_1:"পৌরনীতি ও সুশাসন ১ম পত্র",bio_1:"জীববিজ্ঞান ১ম পত্র",business_org_1:"ব্যবসায় সংগঠন ও ব্যবস্থাপনা ১ম পত্র",food_n_1:"খাদ্য ও পুষ্টি ১ম পত্র",civics_2:"পৌরনীতি ও সুশাসন ২য় পত্র",bio_2:"জীববিজ্ঞান ২য় পত্র",business_org_2:"ব্যবসায় সংগঠন ও ব্যবস্থাপনা ২য় পত্র",food_n_2:"খাদ্য ও পুষ্টি ২য় পত্র",psy_1:"মনোবিজ্ঞান ১ম পত্র",agri_1:"কৃষিশিক্ষা ১ম পত্র",soil_1:"মৃত্তিকা বিজ্ঞান ১ম পত্র",charu_1:"চারু ও কারুকলা ১ম পত্র",natok_1:"নাট্যকলা ১ম পত্র",stats_1:"পরিসংখ্যান ১ম পত্র",applied_art_1:"ব্যবহারিক শিল্পকলা ও বস্ত্র পরিচ্ছদ ১ম পত্র",psy_2:"মনোবিজ্ঞান ২য় পত্র",agri_2:"কৃষিশিক্ষা ২য় পত্র",soil_2:"মৃত্তিকা বিজ্ঞান ২য় পত্র",charu_2:"চারু ও কারুকলা ২য় পত্র",natok_2:"নাট্যকলা ২য় পত্র",stats_2:"পরিসংখ্যান ২য় পত্র",applied_art_2:"ব্যবহারিক শিল্পকলা ও বস্ত্র পরিচ্ছদ ২য় পত্র",hmath_1:"উচ্চতর গণিত ১ম পত্র",islamic_s_1:"ইসলাম শিক্ষা ১ম পত্র",home_s_1:"গার্হস্থ্য বিজ্ঞান ১ম পত্র",sanskrit_1:"সংস্কৃত ১ম পত্র",loghu_s_1:"লঘু সংগীত ১ম পত্র",hmath_2:"উচ্চতর গণিত ২য় পত্র",islamic_s_2:"ইসলাম শিক্ষা ২য় পত্র",home_s_2:"গার্হস্থ্য বিজ্ঞান ২য় পত্র",sanskrit_2:"সংস্কৃত ২য় পত্র",loghu_s_2:"লঘু সংগীত ২য় পত্র",fin_1:"ফিন্যান্স, ব্যাংকিং ও বিমা ১ম পত্র",child_d_1:"শিশু বিকাশ ১ম পত্র",soc_1:"সমাজবিজ্ঞান ১ম পত্র",soc_w_1:"সমাজকর্ম ১ম পত্র",sports_1:"ক্রীড়া ১ম পত্র",fin_2:"ফিন্যান্স, ব্যাংকিং ও বিমা ২য় পত্র",child_d_2:"শিশু বিকাশ ২য় পত্র",soc_2:"সমাজবিজ্ঞান ২য় পত্র",soc_w_2:"সমাজকর্ম ২য় পত্র",sports_2:"ক্রীড়া ২য় পত্র",countdown_calculating:"গণনা করা হচ্ছে...",countdown_expired:"পরীক্ষা শেষ",month:" মাস",day:" দিন",weekdays:["রবি","সোম","মঙ্গল","বুধ","বৃহঃ","শুক্র","শনি"],months:["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"],time_periods:{night:"রাত",dawn:"ভোর",morning:"সকাল",noon:"দুপুর",afternoon:"বিকাল",evening:"সন্ধ্যা"},settings_title:"সেটিংস",appearance_title:"সাধারণ",dept_select_title:"বিভাগ নির্বাচন",lang_title:"ভাষা",lang_bn:"বাংলা",lang_en:"English",theme_title:"থিম মোড",theme_light:"লাইট",theme_dark:"ডার্ক",font_title:"ফন্ট",font_bn_title:"বাংলা ফন্ট",font_en_title:"ইংরেজি ফন্ট",font_size_title:"ফন্টের আকার",color_title:"রঙ",primary_color:"প্রধান রঙ",body_bg_color:"পেজ ব্যাকগ্রাউন্ড",body_text_color:"সাধারণ লেখা",container_bg_color:"কার্ড ব্যাকগ্রাউন্ড",container_text_color:"কার্ডের লেখা",header_start_color:"হেডার শুরু",header_end_color:"হেডার শেষ",reset_title:"রিসেট",reset_button:"ডিফল্ট করুন",reset_confirm:"আপনি কি সকল সেটিংস রিসেট করতে চান?"},en:{main_title:"HSC 2025:",sub_title:"Created under the initiative of 'Al Hasib'",col_subject_code:"Subject & Code",col_date_details:"Date & Details",group_amar_routine:"My Routine",group_science:"Science",group_humanities:"Humanities",group_business:"Business Studies",time_m:"10AM - 1PM",time_a:"2PM - 5PM",ban_1:"Bangla 1st Paper",ban_2:"Bangla 2nd Paper",en_1:"English 1st Paper",en_2:"English 2nd Paper",ict:"ICT",phy_1:"Physics 1st Paper",acc_1:"Accounting 1st Paper",logic_1:"Logic 1st Paper",phy_2:"Physics 2nd Paper",acc_2:"Accounting 2nd Paper",logic_2:"Logic 2nd Paper",geo_1:"Geography 1st Paper",music_1:"Classical Music 1st Paper",arabic_1:"Arabic 1st Paper",pali_1:"Pali 1st Paper",geo_2:"Geography 2nd Paper",music_2:"Classical Music 2nd Paper",arabic_2:"Arabic 2nd Paper",pali_2:"Pali 2nd Paper",che_1:"Chemistry 1st Paper",islamic_h_1:"Islamic History & Culture 1st",history_1:"History 1st Paper",home_m_1:"Home Management & Family Life 1st",prod_m_1:"Production Mgmt. & Marketing 1st",che_2:"Chemistry 2nd Paper",islamic_h_2:"Islamic History & Culture 2nd",history_2:"History 2nd Paper",home_m_2:"Home Management & Family Life 2nd",prod_m_2:"Production Mgmt. & Marketing 2nd",eco_1:"Economics 1st Paper",engg_d_1:"Engineering Drawing & Workshop 1st",eco_2:"Economics 2nd Paper",engg_d_2:"Engineering Drawing & Workshop 2nd",civics_1:"Civics & Good Governance 1st",bio_1:"Biology 1st Paper",business_org_1:"Business Org. & Mgmt. 1st",food_n_1:"Food & Nutrition 1st Paper",civics_2:"Civics & Good Governance 2nd",bio_2:"Biology 2nd Paper",business_org_2:"Business Org. & Mgmt. 2nd",food_n_2:"Food & Nutrition 2nd Paper",psy_1:"Psychology 1st Paper",agri_1:"Agriculture Studies 1st Paper",soil_1:"Soil Science 1st Paper",charu_1:"Fine Arts 1st Paper",natok_1:"Drama 1st Paper",stats_1:"Statistics 1st Paper",applied_art_1:"Applied Art & Textile 1st",psy_2:"Psychology 2nd Paper",agri_2:"Agriculture Studies 2nd Paper",soil_2:"Soil Science 2nd Paper",charu_2:"Fine Arts 2nd Paper",natok_2:"Drama 2nd Paper",stats_2:"Statistics 2nd Paper",applied_art_2:"Applied Art & Textile 2nd",hmath_1:"Higher Mathematics 1st Paper",islamic_s_1:"Islamic Studies 1st Paper",home_s_1:"Home Science 1st Paper",sanskrit_1:"Sanskrit 1st Paper",loghu_s_1:"Light Music 1st Paper",hmath_2:"Higher Mathematics 2nd Paper",islamic_s_2:"Islamic Studies 2nd Paper",home_s_2:"Home Science 2nd Paper",sanskrit_2:"Sanskrit 2nd Paper",loghu_s_2:"Light Music 2nd Paper",fin_1:"Finance, Banking & Insurance 1st",child_d_1:"Child Development 1st Paper",soc_1:"Sociology 1st Paper",soc_w_1:"Social Work 1st Paper",sports_1:"Sports 1st Paper",fin_2:"Finance, Banking & Insurance 2nd",child_d_2:"Child Development 2nd Paper",soc_2:"Sociology 2nd Paper",soc_w_2:"Social Work 2nd Paper",sports_2:"Sports 2nd Paper",countdown_calculating:"Calculating...",countdown_expired:"Exam Finished",month:" months",day:" days",weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],time_periods:{night:"Night",dawn:"Dawn",morning:"Morning",noon:"Noon",afternoon:"Afternoon",evening:"Evening"},settings_title:"Settings",appearance_title:"Appearance",dept_select_title:"Select Department",lang_title:"Language",lang_bn:"Bengali",lang_en:"English",theme_title:"Theme Mode",theme_light:"Light",theme_dark:"Dark",font_title:"Fonts",font_bn_title:"Bengali Font",font_en_title:"English Font",font_size_title:"Font Size",color_title:"Colors",primary_color:"Primary Color",body_bg_color:"Page Background",body_text_color:"Body Text",container_bg_color:"Card Background",container_text_color:"Card Text",header_start_color:"Header Start",header_end_color:"Header End",reset_title:"Reset",reset_button:"Reset to Default",reset_confirm:"Are you sure you want to reset all settings?"}};
    const root = document.documentElement;
    
    let settings;
    const defaultSettings = { lang: 'bn', theme: 'light', group: 'amar_routine', fontBn: "'Noto Sans Bengali', sans-serif", fontEn: "'Poppins', sans-serif", fontSize: '16', colors: { '--primary-color': '#007bff', '--header-bg-start': '#007bff', '--header-bg-end': '#0056b3', '--body-bg': '#f8f9fa', '--body-text-color': '#212529', '--container-bg': '#ffffff', '--container-text-color': '#343a40' } };

    function loadSettings() {
        settings = {
            lang: localStorage.getItem('appLang') || defaultSettings.lang,
            theme: localStorage.getItem('appTheme') || defaultSettings.theme,
            group: localStorage.getItem('appGroup') || defaultSettings.group,
            fontBn: localStorage.getItem('appFontBn') || defaultSettings.fontBn,
            fontEn: localStorage.getItem('appFontEn') || defaultSettings.fontEn,
            fontSize: localStorage.getItem('appFontSize') || defaultSettings.fontSize,
            colors: { ...defaultSettings.colors, ...JSON.parse(localStorage.getItem('appColors')) }
        };
    }

    function applySettings() {
        document.body.classList.remove('settings-panel-open');
        document.body.className = settings.theme === 'dark' ? 'dark-mode' : '';
        document.documentElement.lang = settings.lang;
        
        for (const [key, value] of Object.entries(settings.colors)) {
            root.style.setProperty(key, value);
        }
        root.style.setProperty('--font-bn', settings.fontBn);
        root.style.setProperty('--font-en', settings.fontEn);
        root.style.setProperty('--base-font-size', `${settings.fontSize}px`);
        
        const langDict = translations[settings.lang];
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (langDict?.[key]) el.textContent = langDict[key];
        });
        
        document.getElementById('main-title').textContent = `${langDict.main_title} ${langDict['group_' + settings.group]}`;
        
        document.querySelectorAll('.btn-group button').forEach(b => b.classList.remove('active'));
        document.getElementById(`lang-${settings.lang}`)?.classList.add('active');
        document.getElementById(`theme-${settings.theme}`)?.classList.add('active');
        document.getElementById(`group-${settings.group}`)?.classList.add('active');

        document.getElementById('font-bn-select').value = settings.fontBn;
        document.getElementById('font-en-select').value = settings.fontEn;
        document.getElementById('font-size-slider').value = settings.fontSize;
        
        document.querySelectorAll('.color-input-group input[type="color"]').forEach(picker => {
            const cssVar = '--' + picker.id.replace('-picker', '').replace(/-/g, '-');
            picker.value = settings.colors[cssVar] || '#ffffff';
        });
        
        populateTable();
    }

    function getFilteredData(group) {
        if (group === 'amar_routine') {
             return [ { date: '2025-06-26', subject_key: 'ban_1', code: '101', time: 'morning' }, { date: '2025-06-29', subject_key: 'ban_2', code: '102', time: 'morning' }, { date: '2025-07-01', subject_key: 'en_1', code: '107', time: 'morning' }, { date: '2025-07-03', subject_key: 'en_2', code: '108', time: 'morning' }, { date: '2025-07-07', subject_key: 'ict', code: '275', time: 'morning' }, { date: '2025-07-10', subject_key: 'phy_1', code: '174', time: 'morning' }, { date: '2025-07-13', subject_key: 'phy_2', code: '175', time: 'morning' }, { date: '2025-07-20', subject_key: 'che_1', code: '176', time: 'morning' }, { date: '2025-07-22', subject_key: 'che_2', code: '177', time: 'morning' }, { date: '2025-07-28', subject_key: 'bio_1', code: '178', time: 'morning' }, { date: '2025-07-30', subject_key: 'bio_2', code: '179', time: 'morning' }, { date: '2025-08-04', subject_key: 'hmath_1', code: '265', time: 'morning' }, { date: '2025-08-06', subject_key: 'hmath_2', code: '266', time: 'morning' }];
        }
        return masterExamData.filter(exam => exam.departments.includes('all') || exam.departments.includes(group));
    }

    function populateTable() {
        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = '';
        const langDict = translations[settings.lang];
        const currentGroupData = getFilteredData(settings.group);

        currentGroupData.forEach(exam => {
            const row = document.createElement('tr');
            const examDateObj = new Date(exam.date);
            const dateString = new Intl.DateTimeFormat(settings.lang === 'bn' ? 'bn-BD' : 'en-GB', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }).format(examDateObj);
            
            row.innerHTML = `
                <td class="subject-cell subject-cell-highlight">${langDict[exam.subject_key] || exam.subject_key} (${exam.code})</td>
                <td class="details-cell">
                    <div class="date-info">${dateString}</div>
                    <div class="time-info">${langDict['time_' + exam.time.charAt(0)]}</div>
                    <div class="countdown" data-exam-date="${exam.date}" data-exam-time="${exam.time}">${langDict.countdown_calculating}</div>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }
    
    function saveAndApply(key, value) {
        localStorage.setItem(key, value);
        loadSettings();
        applySettings();
    }

    // --- New Panel Logic with Hash for Back Button ---
    const openSettings = () => {
        if (location.hash !== '#settings') {
            location.hash = '#settings';
        }
        document.body.classList.add('settings-panel-open');
    };

    const closeSettings = () => {
        document.body.classList.remove('settings-panel-open');
    };

    document.getElementById('settings-icon').addEventListener('click', openSettings);
    
    document.querySelector('.panel-close').addEventListener('click', () => {
        history.back(); // This will trigger the hashchange event
    });
    
    window.addEventListener('hashchange', () => {
        if (location.hash !== '#settings') {
            closeSettings();
        }
    });

    // Check hash on initial load
    if (location.hash === '#settings') {
        openSettings();
    }

    // --- Other event listeners ---
    ['lang-bn', 'lang-en', 'theme-light', 'theme-dark', 'group-amar_routine', 'group-science', 'group-humanities', 'group-business'].forEach(id => {
        document.getElementById(id).addEventListener('click', (e) => {
            const [key, ...valueParts] = e.target.id.split('-');
            const value = valueParts.join('-');
            const storageKey = `app${key.charAt(0).toUpperCase() + key.slice(1)}`;
            saveAndApply(storageKey, value);
        });
    });
    
    document.getElementById('font-bn-select').addEventListener('change', (e) => saveAndApply('appFontBn', e.target.value));
    document.getElementById('font-en-select').addEventListener('change', (e) => saveAndApply('appFontEn', e.target.value));
    document.getElementById('font-size-slider').addEventListener('input', (e) => {
         root.style.setProperty('--base-font-size', `${e.target.value}px`);
         localStorage.setItem('appFontSize', e.target.value);
    });
    
    document.querySelectorAll('.color-input-group input[type="color"]').forEach(picker => {
        picker.addEventListener('input', (e) => {
            const cssVar = '--' + picker.id.replace('-picker', '').replace(/-/g, '-');
            root.style.setProperty(cssVar, e.target.value);
            settings.colors[cssVar] = e.target.value;
            localStorage.setItem('appColors', JSON.stringify(settings.colors));
        });
    });

    document.getElementById('reset-settings-btn').addEventListener('click', () => {
        if (confirm(translations[settings.lang].reset_confirm)) {
            ['appLang', 'appTheme', 'appGroup', 'appFontBn', 'appFontEn', 'appFontSize', 'appColors'].forEach(key => localStorage.removeItem(key));
            location.reload();
        }
    });
    
    let calDate = new Date();
    function renderCalendar() {
         const weekdaysEl = document.querySelector('#calendar-weekdays');
         const daysEl = document.querySelector('#calendar-days');
         const monthYearEl = document.getElementById('month-year');
         const langDict = translations[settings.lang];
         const month = calDate.getMonth();
         const year = calDate.getFullYear();
         
         monthYearEl.textContent = `${langDict.months[month]} ${new Intl.DateTimeFormat(settings.lang === 'bn' ? 'bn-BD' : 'en-GB', { year: 'numeric' }).format(calDate)}`;
         weekdaysEl.innerHTML = langDict.weekdays.map(day => `<div class="day-name">${day}</div>`).join('');
         
         daysEl.innerHTML = '';
         const firstDay = new Date(year, month, 1).getDay();
         const lastDate = new Date(year, month + 1, 0).getDate();
         for (let i = 0; i < firstDay; i++) { daysEl.innerHTML += `<div></div>`; }
         for (let i = 1; i <= lastDate; i++) {
             const dayDiv = document.createElement('div');
             dayDiv.textContent = new Intl.DateTimeFormat(settings.lang === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric' }).format(new Date(year, month, i));
             if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                 dayDiv.classList.add('current-day');
             }
             daysEl.appendChild(dayDiv);
         }
    }
    document.getElementById('live-datetime').addEventListener('click', () => { renderCalendar(); document.getElementById('calendar-modal').classList.add('open'); });
    document.querySelector('.modal-close').addEventListener('click', () => document.getElementById('calendar-modal').classList.remove('open'));
    document.getElementById('prev-month').addEventListener('click', () => { calDate.setMonth(calDate.getMonth() - 1); renderCalendar(); });
    document.getElementById('next-month').addEventListener('click', () => { calDate.setMonth(calDate.getMonth() + 1); renderCalendar(); });

    setInterval(() => {
        const now = new Date();
        const langDict = translations[settings.lang];

        if (settings.lang === 'bn') {
            let hours = now.getHours();
            let periodKey;
            if (hours >= 4 && hours < 6) periodKey = 'dawn'; else if (hours >= 6 && hours < 12) periodKey = 'morning'; else if (hours >= 12 && hours < 16) periodKey = 'noon'; else if (hours >= 16 && hours < 18) periodKey = 'afternoon'; else if (hours >= 18 && hours < 20) periodKey = 'evening'; else periodKey = 'night';
            const timeString = new Intl.DateTimeFormat('bn-BD', {hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true}).format(now);
            document.getElementById('live-clock').textContent = `${langDict.time_periods[periodKey]} ${timeString.replace('AM', '').replace('PM', '').trim()}`;
        } else {
            document.getElementById('live-clock').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        }
        document.getElementById('live-date').textContent = new Intl.DateTimeFormat(settings.lang === 'bn' ? 'bn-BD' : 'en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(now);
        
        document.querySelectorAll('.countdown').forEach(el => {
             const examTimeStr = el.getAttribute('data-exam-time') === 'morning' ? "T10:00:00" : "T14:00:00";
             const examDate = new Date(el.getAttribute('data-exam-date') + examTimeStr);
             const totalSeconds = Math.floor((examDate - now) / 1000);
             if (totalSeconds < 0) { el.textContent = langDict.countdown_expired; el.classList.add('expired'); return; }
             
             let rem = totalSeconds;
             const months = Math.floor(rem / (30.44 * 24 * 3600)); rem %= (30.44 * 24 * 3600);
             const days = Math.floor(rem / (24 * 3600)); rem %= (24 * 3600);
             const hours = Math.floor(rem / 3600); rem %= 3600;
             const minutes = Math.floor(rem / 60); const seconds = rem % 60;
             
             const toNativeNum = (n, p = false) => new Intl.NumberFormat(settings.lang === 'bn' ? 'bn-BD' : 'en-US', { minimumIntegerDigits: p ? 2 : 1 }).format(n);
             
             let text = '';
             if (months > 0) text += `${toNativeNum(months)}${langDict.month} `;
             if (days > 0) text += `${toNativeNum(days)}${langDict.day} `;
             text += `${toNativeNum(hours, true)}:${toNativeNum(minutes, true)}:${toNativeNum(seconds, true)}`;
             el.textContent = text;
        });
    }, 1000);
    
    loadSettings();
    applySettings();
});