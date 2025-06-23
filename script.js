document.addEventListener('DOMContentLoaded', () => {
    // --- সম্পূর্ণ ডেটা (PDF থেকে সংগৃহীত) ---
    const allExams = [
        // Common Subjects
        { subject: 'বাংলা ১ম পত্র', code: '101', date: '2025-06-26', department: 'common' },
        { subject: 'বাংলা ২য় পত্র', code: '102', date: '2025-06-29', department: 'common' },
        { subject: 'ইংরেজি ১ম পত্র', code: '107', date: '2025-07-01', department: 'common' },
        { subject: 'ইংরেজি ২য় পত্র', code: '108', date: '2025-07-03', department: 'common' },
        { subject: 'তথ্য ও যোগাযোগ প্রযুক্তি', code: '275', date: '2025-07-07', department: 'common' },
        // Science
        { subject: 'পদার্থবিজ্ঞান ১ম পত্র', code: '174', date: '2025-07-10', department: 'science' },
        { subject: 'পদার্থবিজ্ঞান ২য় পত্র', code: '175', date: '2025-07-13', department: 'science' },
        { subject: 'রসায়ন ১ম পত্র', code: '176', date: '2025-07-20', department: 'science' },
        { subject: 'রসায়ন ২য় পত্র', code: '177', date: '2025-07-22', department: 'science' },
        { subject: 'জীববিজ্ঞান ১ম পত্র', code: '178', date: '2025-07-28', department: 'science' },
        { subject: 'জীববিজ্ঞান ২য় পত্র', code: '179', date: '2025-07-30', department: 'science' },
        { subject: 'উচ্চতর গণিত ১ম পত্র', code: '265', date: '2025-08-04', department: 'science' },
        { subject: 'উচ্চতর গণিত ২য় পত্র', code: '266', date: '2025-08-06', department: 'science' },
        // Humanities
        { subject: 'যুক্তিবিদ্যা ১ম পত্র', code: '121', date: '2025-07-10', department: 'humanities' },
        { subject: 'যুক্তিবিদ্যা ২য় পত্র', code: '122', date: '2025-07-13', department: 'humanities' },
        { subject: 'ভূগোল ১ম পত্র', code: '125', date: '2025-07-15', department: 'humanities' },
        { subject: 'ভূগোল ২য় পত্র', code: '126', date: '2025-07-17', department: 'humanities' },
        { subject: 'ইসলামের ইতিহাস ও সংস্কৃতি ১ম পত্র', code: '267', date: '2025-07-20', department: 'humanities' },
        { subject: 'ইসলামের ইতিহাস ও সংস্কৃতি ২য় পত্র', code: '268', date: '2025-07-22', department: 'humanities' },
        { subject: 'ইতিহাস ১ম পত্র', code: '304', date: '2025-07-20', department: 'humanities' },
        { subject: 'ইতিহাস ২য় পত্র', code: '305', date: '2025-07-22', department: 'humanities' },
        { subject: 'অর্থনীতি ১ম পত্র', code: '109', date: '2025-07-24', department: 'humanities' },
        { subject: 'অর্থনীতি ২য় পত্র', code: '110', date: '2025-07-27', department: 'humanities' },
        { subject: 'পৌরনীতি ও সুশাসন ১ম পত্র', code: '269', date: '2025-07-28', department: 'humanities' },
        { subject: 'পৌরনীতি ও সুশাসন ২য় পত্র', code: '270', date: '2025-07-30', department: 'humanities' },
        { subject: 'মনোবিজ্ঞান ১ম পত্র', code: '123', date: '2025-07-31', department: 'humanities' },
        { subject: 'মনোবিজ্ঞান ২য় পত্র', code: '124', date: '2025-08-03', department: 'humanities' },
        { subject: 'ইসলাম শিক্ষা ১ম পত্র', code: '249', date: '2025-08-04', department: 'humanities' },
        { subject: 'ইসলাম শিক্ষা ২য় পত্র', code: '250', date: '2025-08-06', department: 'humanities' },
        // Business Studies
        { subject: 'হিসাববিজ্ঞান ১ম পত্র', code: '253', date: '2025-07-10', department: 'business' },
        { subject: 'হিসাববিজ্ঞান ২য় পত্র', code: '254', date: '2025-07-13', department: 'business' },
        { subject: 'উৎপাদন ব্যবস্থাপনা ও বিপণন ১ম পত্র', code: '286', date: '2025-07-20', department: 'business' },
        { subject: 'উৎপাদন ব্যবস্থাপনা ও বিপণন ২য় পত্র', code: '287', date: '2025-07-22', department: 'business' },
        { subject: 'ব্যবসায় সংগঠন ও ব্যবস্থাপনা ১ম পত্র', code: '277', date: '2025-07-28', department: 'business' },
        { subject: 'ব্যবসায় সংগঠন ও ব্যবস্থাপনা ২য় পত্র', code: '278', date: '2025-07-30', department: 'business' },
        { subject: 'ফিন্যান্স, ব্যাংকিং ও বিমা ১ম পত্র', code: '292', date: '2025-08-07', department: 'business' },
        { subject: 'ফিন্যান্স, ব্যাংকিং ও বিমা ২য় পত্র', code: '293', date: '2025-08-10', department: 'business' },
    ];

    const myRoutineSubjects = [ 'বাংলা ১ম পত্র', 'বাংলা ২য় পত্র', 'ইংরেজি ১ম পত্র', 'ইংরেজি ২য় পত্র', 'তথ্য ও যোগাযোগ প্রযুক্তি', 'পদার্থবিজ্ঞান ১ম পত্র', 'পদার্থবিজ্ঞান ২য় পত্র', 'রসায়ন ১ম পত্র', 'রসায়ন ২য় পত্র', 'জীববিজ্ঞান ১ম পত্র', 'জীববিজ্ঞান ২য় পত্র', 'উচ্চতর গণিত ১ম পত্র', 'উচ্চতর গণিত ২য় পত্র' ];
    
    // --- DOM এলিমেন্ট নির্বাচন ---
    const routineBody = document.getElementById('routine-body');
    const dateDisplay = document.getElementById('date-display');
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const settingsMenu = document.getElementById('settings-menu');
    const overlay = document.getElementById('overlay');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const themeButtons = document.querySelectorAll('.theme-btn');
    const resetButton = document.getElementById('reset-btn');
    const appTitle = document.getElementById('app-title');
    const themeColorMeta = document.getElementById('theme-color-meta');

    let currentFilter = 'my_routine';
    let countdownInterval;

    // --- সহায়ক ফাংশন ---
    const bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const toBengali = (num) => String(num).split('').map(digit => bengaliNumerals[digit] || digit).join('');
    const bengaliDays = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    const bengaliMonths = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    
    // --- সময় ও তারিখ আপডেট ---
    const updateHeaderClock = () => {
        const now = new Date();
        const hours = now.getHours();
        let timePeriod = "রাত";
        if (hours >= 5 && hours < 12) timePeriod = "সকাল";
        else if (hours >= 12 && hours < 17) timePeriod = "দুপুর";
        else if (hours >= 17 && hours < 19) timePeriod = "বিকাল";
        const timeString = now.toLocaleTimeString('bn-BD', { hour: 'numeric', minute: '2-digit' });
        dateDisplay.textContent = `${timePeriod} ${timeString.split(' ')[0]}, ${bengaliDays[now.getDay()]}`;
    };

    // --- কাউন্টডাউন ফাংশন ---
    const calculateTimeLeft = (examDate) => {
        const targetTime = new Date(`${examDate}T10:00:00`);
        const now = new Date();
        let diff = targetTime - now;
        if (diff <= 0) return { finished: true };
        diff /= 1000;
        const seconds = Math.floor(diff % 60); diff /= 60;
        const minutes = Math.floor(diff % 60); diff /= 60;
        const hours = Math.floor(diff % 24);
        const days = Math.floor(diff / 24);
        return { days, hours, minutes, seconds, finished: false };
    };

    const formatTimeLeft = (timeLeft) => {
        if (timeLeft.finished) return "পরীক্ষা শেষ";
        const pad = (num) => toBengali(String(num).padStart(2, '0'));
        let parts = [];
        if (timeLeft.days > 0) parts.push(`${toBengali(timeLeft.days)} দিন`);
        parts.push(`${pad(timeLeft.hours)}:${pad(timeLeft.minutes)}:${pad(timeLeft.seconds)}`);
        return parts.join(' ');
    };

    // --- রুটিন রেন্ডার ---
    const renderRoutine = (filter) => {
        if (countdownInterval) clearInterval(countdownInterval);
        routineBody.innerHTML = '';
        
        let filteredExams;
        if (filter === 'my_routine') {
            filteredExams = allExams.filter(exam => myRoutineSubjects.includes(exam.subject));
            appTitle.innerHTML = "এইচএসসি ২০২৫:<br>আমার রুটিন";
        } else {
            const titleMap = { all: "সম্পূর্ণ রুটিন", science: "বিজ্ঞান বিভাগ", humanities: "মানবিক", business: "ব্যবসায় শিক্ষা" };
            appTitle.innerHTML = `এইচএসসি ২০২৫:<br>${titleMap[filter]}`;
            filteredExams = (filter === 'all') ? allExams : allExams.filter(e => e.department === filter || e.department === 'common');
        }
        
        filteredExams.sort((a, b) => new Date(a.date) - new Date(b.date));

        filteredExams.forEach(exam => {
            const row = document.createElement('tr');
            const examDateObj = new Date(exam.date);
            const formattedDate = `${toBengali(examDateObj.getDate())} ${bengaliMonths[examDateObj.getMonth()]}, ${toBengali(examDateObj.getFullYear())}`;
            
            row.innerHTML = `
                <td>${exam.subject}</td>
                <td>${formattedDate}</td>
                <td class="desktop-only countdown" data-exam-date="${exam.date}"></td>
                <td class="desktop-only">${toBengali(exam.code)}</td>
            `;
            routineBody.appendChild(row);
        });

        updateAllCountdowns();
        countdownInterval = setInterval(updateAllCountdowns, 1000);
    };

    const updateAllCountdowns = () => {
        document.querySelectorAll('.countdown').forEach(cell => {
            const timeLeft = calculateTimeLeft(cell.dataset.examDate);
            cell.textContent = formatTimeLeft(timeLeft);
        });
    };
    
    // --- মেনু ও থিম ---
    const toggleMenu = (open) => {
        settingsMenu.classList.toggle('open', open);
        overlay.classList.toggle('active', open);
    };
    
    const applyTheme = (theme) => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        // ট্যাব বারের রঙ পরিবর্তন
        themeColorMeta.setAttribute('content', theme === 'dark' ? '#1e1e1e' : '#6f42c1');
        localStorage.setItem('theme', theme);
        themeButtons.forEach(btn => btn.classList.remove('active'));
        document.getElementById(theme === 'dark' ? 'dark-mode-btn' : 'light-mode-btn').classList.add('active');
    };

    // --- ইভেন্ট লিসেনার ---
    menuToggle.addEventListener('click', () => toggleMenu(true));
    menuClose.addEventListener('click', () => toggleMenu(false));
    overlay.addEventListener('click', () => toggleMenu(false));
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentFilter = button.dataset.filter;
            renderRoutine(currentFilter);
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            toggleMenu(false);
        });
    });

    themeButtons.forEach(button => button.addEventListener('click', () => {
        applyTheme(button.id === 'dark-mode-btn' ? 'dark' : 'light');
    }));
    
    resetButton.addEventListener('click', () => {
        currentFilter = 'my_routine';
        renderRoutine(currentFilter);
        applyTheme('light');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="my_routine"]').classList.add('active');
        toggleMenu(false);
    });

    // --- অ্যাপ্লিকেশন শুরু ---
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    document.querySelector(`.filter-btn[data-filter="${currentFilter}"]`).classList.add('active');
    renderRoutine(currentFilter);
    setInterval(updateHeaderClock, 1000);
    updateHeaderClock();
});