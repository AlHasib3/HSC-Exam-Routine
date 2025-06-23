document.addEventListener('DOMContentLoaded', () => {
    // --- ভাষা ও ডেটা ---
    const i18n = {
        bn: {
            myRoutineTitle: "এইচএসসি ২০২৫:<br>আমার রুটিন",
            allRoutineTitle: "এইচএসসি ২০২৫:<br>সম্পূর্ণ রুটিন",
            deptTitle: (dept) => `এইচএসসি ২০২৫:<br>${dept}`,
            subtitle: "এই ওয়েবসাইটটি নির্মিত হয়েছে 'আল হাসিব'-এর উদ্যোগে।",
            subjectHeader: "বিষয়", dateHeader: "পরীক্ষার তারিখ", countdownHeader: "বাকি সময়", codeHeader: "বিষয় কোড",
            settings: "সেটিংস", general: "সাধারণ", myRoutine: "আমার রুটিন",
            selectDept: "বিভাগ নির্বাচন", allDepts: "সকল বিভাগ", scienceDept: "বিজ্ঞান বিভাগ", humanitiesDept: "মানবিক", businessDept: "ব্যবসায় শিক্ষা",
            language: "ভাষা", themeMode: "থিম মোড", light: "লাইট", dark: "ডার্ক",
            reset: "রিসেট", resetToDefault: "ডিফল্ট করুন",
            day: "দিন", days: "দিন", finished: "পরীক্ষা শেষ",
            departments: { science: "বিজ্ঞান বিভাগ", humanities: "মানবিক", business: "ব্যবসায় শিক্ষা" },
            periods: { morning: "সকাল", noon: "দুপুর", afternoon: "বিকাল", night: "রাত" },
            daysOfWeek: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'],
            months: ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর']
        },
        en: {
            myRoutineTitle: "HSC 2025:<br>My Routine",
            allRoutineTitle: "HSC 2025:<br>Full Routine",
            deptTitle: (dept) => `HSC 2025:<br>${dept}`,
            subtitle: "This website was built by 'Al Hasib'.",
            subjectHeader: "Subject", dateHeader: "Exam Date", countdownHeader: "Time Left", codeHeader: "Code",
            settings: "Settings", general: "General", myRoutine: "My Routine",
            selectDept: "Select Department", allDepts: "All Departments", scienceDept: "Science", humanitiesDept: "Humanities", businessDept: "Business Studies",
            language: "Language", themeMode: "Theme Mode", light: "Light", dark: "Dark",
            reset: "Reset", resetToDefault: "Reset to Default",
            day: "day", days: "days", finished: "Exam Finished",
            departments: { science: "Science", humanities: "Humanities", business: "Business Studies" },
            periods: { morning: "Morning", noon: "Noon", afternoon: "Afternoon", night: "Night" },
            daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }
    };

    const allExams = [ /* পরীক্ষার ডেটা অপরিবর্তিত */
        { code: '101', date: '2025-06-26', dept: 'common', subject: { bn: 'বাংলা ১ম পত্র', en: 'Bangla 1st Paper' } },
        { code: '102', date: '2025-06-29', dept: 'common', subject: { bn: 'বাংলা ২য় পত্র', en: 'Bangla 2nd Paper' } },
        { code: '107', date: '2025-07-01', dept: 'common', subject: { bn: 'ইংরেজি ১ম পত্র', en: 'English 1st Paper' } },
        { code: '108', date: '2025-07-03', dept: 'common', subject: { bn: 'ইংরেজি ২য় পত্র', en: 'English 2nd Paper' } },
        { code: '275', date: '2025-07-07', dept: 'common', subject: { bn: 'তথ্য ও যোগাযোগ প্রযুক্তি', en: 'ICT' } },
        { code: '174', date: '2025-07-10', dept: 'science', subject: { bn: 'পদার্থবিজ্ঞান ১ম পত্র', en: 'Physics 1st Paper' } },
        { code: '175', date: '2025-07-13', dept: 'science', subject: { bn: 'পদার্থবিজ্ঞান ২য় পত্র', en: 'Physics 2nd Paper' } },
        { code: '176', date: '2025-07-20', dept: 'science', subject: { bn: 'রসায়ন ১ম পত্র', en: 'Chemistry 1st Paper' } },
        { code: '177', date: '2025-07-22', dept: 'science', subject: { bn: 'রসায়ন ২য় পত্র', en: 'Chemistry 2nd Paper' } },
        { code: '178', date: '2025-07-28', dept: 'science', subject: { bn: 'জীববিজ্ঞান ১ম পত্র', en: 'Biology 1st Paper' } },
        { code: '179', date: '2025-07-30', dept: 'science', subject: { bn: 'জীববিজ্ঞান ২য় পত্র', en: 'Biology 2nd Paper' } },
        { code: '265', date: '2025-08-04', dept: 'science', subject: { bn: 'উচ্চতর গণিত ১ম পত্র', en: 'Higher Math 1st Paper' } },
        { code: '266', date: '2025-08-06', dept: 'science', subject: { bn: 'উচ্চতর গণিত ২য় পত্র', en: 'Higher Math 2nd Paper' } },
    ];
    
    // --- DOM Elements ---
    const timeDisplay = document.getElementById('time-display');
    const fullDateDisplay = document.getElementById('full-date-display');
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    // অন্যান্য DOM এলিমেন্ট আগের মতোই
    const routineBody = document.getElementById('routine-body');
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const settingsMenu = document.getElementById('settings-menu');
    const overlay = document.getElementById('overlay');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const themeButtons = document.querySelectorAll('.theme-btn');
    const langButtons = document.querySelectorAll('.lang-btn');
    const resetButton = document.getElementById('reset-btn');
    const appTitle = document.getElementById('app-title');
    const appSubtitle = document.getElementById('app-subtitle');

    let currentFilter = 'my_routine';
    let currentLang = localStorage.getItem('language') || 'bn';
    let countdownInterval;

    const toLocaleNum = (num, lang) => (lang === 'bn') ? String(num).split('').map(d => i18n.bn.numerals[d] || d).join('') : String(num);
    i18n.bn.numerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    
    const updateHeaderClock = () => {
        const now = new Date();
        const lang = i18n[currentLang];
        
        // সময় প্রদর্শন
        const hours = now.getHours();
        let periodKey = "night";
        if (hours >= 5 && hours < 12) periodKey = "morning";
        else if (hours >= 12 && hours < 17) periodKey = "noon";
        else if (hours >= 17 && hours < 19) periodKey = "afternoon";

        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const timeString = now.toLocaleTimeString(currentLang === 'bn' ? 'bn-BD' : 'en-US', timeOptions);
        timeDisplay.textContent = `${lang.periods[periodKey]} ${timeString}`;
        
        // তারিখ প্রদর্শন
        const dateString = `${lang.daysOfWeek[now.getDay()]}, ${toLocaleNum(now.getDate(), currentLang)} ${lang.months[now.getMonth()]}, ${toLocaleNum(now.getFullYear(), currentLang)}`;
        fullDateDisplay.textContent = dateString;
    };
    
    const setTheme = (theme) => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        themeColorMeta.content = (theme === 'dark') ? '#121212' : '#ffffff';
        localStorage.setItem('theme', theme);
        themeButtons.forEach(btn => btn.classList.toggle('active', btn.id.startsWith(theme)));
    };
    
    // --- আগের অন্যান্য ফাংশনগুলো অপরিবর্তিত রয়েছে ---
    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
        });
        appSubtitle.textContent = i18n[currentLang].subtitle;
        updateHeaderClock();
        renderRoutine();
    };

    const calculateTimeLeft = (examDate) => {
        const diff = new Date(`${examDate}T10:00:00`) - new Date();
        if (diff <= 0) return { finished: true };
        const seconds = Math.floor((diff / 1000) % 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return { days, hours, minutes, seconds, finished: false };
    };

    const formatTimeLeft = (timeLeft, lang) => {
        if (timeLeft.finished) return i18n[lang].finished;
        const pad = (num) => toLocaleNum(String(num).padStart(2, '0'), lang);
        let parts = [];
        if (timeLeft.days > 0) parts.push(`${toLocaleNum(timeLeft.days, lang)} ${timeLeft.days > 1 ? i18n[lang].days : i18n[lang].day}`);
        parts.push(`${pad(timeLeft.hours)}:${pad(timeLeft.minutes)}:${pad(timeLeft.seconds)}`);
        return parts.join(' ');
    };

    const renderRoutine = () => {
        if (countdownInterval) clearInterval(countdownInterval);
        routineBody.innerHTML = '';
        
        let filteredExams;
        if (currentFilter === 'my_routine') {
            appTitle.innerHTML = i18n[currentLang].myRoutineTitle;
            filteredExams = allExams.filter(exam => myRoutineSubjectCodes.includes(exam.code));
        } else {
            const deptName = i18n[currentLang].departments[currentFilter];
            appTitle.innerHTML = (currentFilter === 'all') ? i18n[currentLang].allRoutineTitle : i18n[currentLang].deptTitle(deptName);
            filteredExams = (currentFilter === 'all') ? allExams : allExams.filter(e => e.dept === currentFilter || e.dept === 'common');
        }
        
        filteredExams.sort((a, b) => new Date(a.date) - new Date(b.date));

        filteredExams.forEach(exam => {
            const row = document.createElement('tr');
            const examDateObj = new Date(exam.date);
            const formattedDate = `${toLocaleNum(examDateObj.getDate(), currentLang)} ${i18n[currentLang].months[examDateObj.getMonth()]}, ${toLocaleNum(examDateObj.getFullYear(), currentLang)}`;
            
            row.innerHTML = `
                <td>${exam.subject[currentLang]}</td>
                <td>${formattedDate}</td>
                <td class="desktop-only countdown" data-exam-date="${exam.date}"></td>
                <td class="desktop-only">${toLocaleNum(exam.code, currentLang)}</td>
            `;
            routineBody.appendChild(row);
        });

        updateAllCountdowns();
        countdownInterval = setInterval(updateAllCountdowns, 1000);
    };
    
    const myRoutineSubjectCodes = ['101', '102', '107', '108', '275', '174', '175', '176', '177', '178', '179', '265', '266'];

    const updateAllCountdowns = () => {
        document.querySelectorAll('.countdown').forEach(cell => {
            const timeLeft = calculateTimeLeft(cell.dataset.examDate);
            cell.textContent = formatTimeLeft(timeLeft, currentLang);
        });
    };

    const toggleMenu = (open) => { settingsMenu.classList.toggle('open', open); overlay.classList.toggle('active', open); };
    menuToggle.addEventListener('click', () => toggleMenu(true));
    menuClose.addEventListener('click', () => toggleMenu(false));
    overlay.addEventListener('click', () => toggleMenu(false));
    
    filterButtons.forEach(button => button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.dataset.filter;
        renderRoutine();
        toggleMenu(false);
    }));

    langButtons.forEach(button => button.addEventListener('click', () => {
        setLanguage(button.dataset.lang);
        toggleMenu(false);
    }));

    themeButtons.forEach(button => button.addEventListener('click', () => setTheme(button.id.startsWith('dark') ? 'dark' : 'light')));
    
    resetButton.addEventListener('click', () => {
        currentFilter = 'my_routine';
        filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === 'my_routine'));
        setLanguage('bn');
        setTheme('light');
        toggleMenu(false);
    });

    // --- Initialization ---
    setLanguage(currentLang);
    setTheme(localStorage.getItem('theme') || 'light');
    document.querySelector(`.filter-btn[data-filter="${currentFilter}"]`).classList.add('active');
    setInterval(updateHeaderClock, 1000);
});