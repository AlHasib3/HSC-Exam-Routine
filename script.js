document.addEventListener('DOMContentLoaded', () => {
    // --- ডেটা ও কনফিগারেশন ---
    const allExams = [
        { subject: 'বাংলা ১ম পত্র', code: '101', date: '2025-06-26', department: 'common' },
        { subject: 'বাংলা ২য় পত্র', code: '102', date: '2025-06-29', department: 'common' },
        { subject: 'ইংরেজি ১ম পত্র', code: '107', date: '2025-07-01', department: 'common' },
        { subject: 'ইংরেজি ২য় পত্র', code: '108', date: '2025-07-03', department: 'common' },
        { subject: 'তথ্য ও যোগাযোগ প্রযুক্তি', code: '275', date: '2025-07-07', department: 'common' },
        { subject: 'পদার্থবিজ্ঞান ১ম পত্র', code: '174', date: '2025-07-10', department: 'science' },
        { subject: 'পদার্থবিজ্ঞান ২য় পত্র', code: '175', date: '2025-07-13', department: 'science' },
        { subject: 'রসায়ন ১ম পত্র', code: '176', date: '2025-07-20', department: 'science' },
        { subject: 'রসায়ন ২য় পত্র', code: '177', date: '2025-07-22', department: 'science' },
        { subject: 'জীববিজ্ঞান ১ম পত্র', code: '178', date: '2025-07-28', department: 'science' },
        { subject: 'জীববিজ্ঞান ২য় পত্র', code: '179', date: '2025-07-30', department: 'science' },
        { subject: 'উচ্চতর গণিত ১ম পত্র', code: '265', date: '2025-08-04', department: 'science' },
        { subject: 'উচ্চতর গণিত ২য় পত্র', code: '266', date: '2025-08-06', department: 'science' },
        { subject: 'হিসাববিজ্ঞান ১ম পত্র', code: '253', date: '2025-07-10', department: 'business' },
        { subject: 'হিসাববিজ্ঞান ২য় পত্র', code: '254', date: '2025-07-13', department: 'business' },
        { subject: 'পৌরনীতি ও সুশাসন ১ম পত্র', code: '269', date: '2025-07-28', department: 'humanities' },
        { subject: 'পৌরনীতি ও সুশাসন ২য় পত্র', code: '270', date: '2025-07-30', department: 'humanities' }
    ];

    const myRoutineSubjects = [ 'ইংরেজি ১ম পত্র', 'ইংরেজি ২য় পত্র', 'তথ্য ও যোগাযোগ প্রযুক্তি', 'পদার্থবিজ্ঞান ১ম পত্র', 'পদার্থবিজ্ঞান ২য় পত্র', 'রসায়ন ১ম পত্র', 'রসায়ন ২য় পত্র', 'জীববিজ্ঞান ১ম পত্র', 'জীববিজ্ঞান ২য় পত্র', 'উচ্চতর গণিত ১ম পত্র', 'উচ্চতর গণিত ২য় পত্র' ];
    
    // --- DOM এলিমেন্ট নির্বাচন ---
    const routineBody = document.getElementById('routine-body');
    const timeDisplay = document.getElementById('time-display');
    const dateDisplay = document.getElementById('date-display');
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const settingsMenu = document.getElementById('settings-menu');
    const overlay = document.getElementById('overlay');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const themeButtons = document.querySelectorAll('.theme-btn');
    const resetButton = document.getElementById('reset-btn');
    const appTitle = document.getElementById('app-title');

    let currentFilter = 'my_routine';
    let countdownInterval;

    // --- সহায়ক ফাংশন ---
    const bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const toBengali = (num) => String(num).split('').map(digit => bengaliNumerals[digit] || digit).join('');
    
    const bengaliDays = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    const bengaliMonths = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    
    // --- সময় ও তারিখ আপডেট (হেডারে) ---
    const updateHeaderClock = () => {
        const now = new Date();
        const hours = now.getHours();
        
        let timePeriod = "রাত";
        if (hours >= 5 && hours < 12) timePeriod = "সকাল";
        else if (hours >= 12 && hours < 17) timePeriod = "দুপুর";
        else if (hours >= 17 && hours < 19) timePeriod = "বিকাল";

        const timeString = now.toLocaleTimeString('bn-BD', { hour12: true });
        timeDisplay.textContent = `${timePeriod} ${timeString.split(' ')[1]}`;
        
        const dateString = `${bengaliDays[now.getDay()]}, ${toBengali(now.getDate())} ${bengaliMonths[now.getMonth()]}, ${toBengali(now.getFullYear())}`;
        dateDisplay.textContent = dateString;
    };

    // --- কাউন্টডাউন গণনা ও ফরম্যাটিং ---
    const calculateTimeLeft = (examDate) => {
        const targetTime = new Date(`${examDate}T10:00:00`);
        const now = new Date();
        let diff = targetTime - now;

        if (diff <= 0) return { finished: true };

        diff /= 1000;
        const seconds = Math.floor(diff % 60);
        diff /= 60;
        const minutes = Math.floor(diff % 60);
        diff /= 60;
        const hours = Math.floor(diff % 24);
        const totalDays = Math.floor(diff / 24);
        
        let months = 0;
        let days = totalDays;
        if (days >= 30) {
            months = Math.floor(days / 30);
            days = days % 30;
        }

        return { months, days, hours, minutes, seconds, finished: false };
    };

    const formatTimeLeft = (timeLeft) => {
        if (timeLeft.finished) return "পরীক্ষা শেষ";

        const pad = (num) => toBengali(String(num).padStart(2, '0'));
        let parts = [];
        if (timeLeft.months > 0) parts.push(`${toBengali(timeLeft.months)} মাস`);
        if (timeLeft.days > 0 || timeLeft.months > 0) parts.push(`${toBengali(timeLeft.days)} দিন`);
        
        parts.push(`${pad(timeLeft.hours)}:${pad(timeLeft.minutes)}:${pad(timeLeft.seconds)}`);
        return parts.join(' ');
    };

    // --- রুটিন রেন্ডার ও কাউন্টডাউন আপডেট ---
    const renderRoutine = (filter) => {
        if (countdownInterval) clearInterval(countdownInterval);
        routineBody.innerHTML = '';
        
        let filteredExams;
        if (filter === 'my_routine') {
            filteredExams = allExams.filter(exam => myRoutineSubjects.includes(exam.subject));
            appTitle.textContent = "এইচএসসি ২০২৫: আমার রুটিন";
        } else if (filter === 'all') {
            filteredExams = allExams;
            appTitle.textContent = "এইচএসসি ২০২৫: সম্পূর্ণ রুটিন";
        } else {
            const deptName = {science: 'বিজ্ঞান বিভাগ', humanities: 'মানবিক বিভাগ', business: 'ব্যবসায় শিক্ষা'}[filter];
            filteredExams = allExams.filter(exam => exam.department === filter || exam.department === 'common');
            appTitle.textContent = `এইচএসসি ২০২৫: ${deptName}`;
        }
        
        const headers = Array.from(document.querySelectorAll('thead th')).map(th => th.textContent);

        filteredExams.forEach((exam) => {
            const row = document.createElement('tr');
            const examDateObj = new Date(exam.date);
            const formattedDate = `${toBengali(examDateObj.getDate())} ${bengaliMonths[examDateObj.getMonth()]}, ${toBengali(examDateObj.getFullYear())}`;
            
            row.innerHTML = `
                <td>${exam.subject}</td>
                <td>${formattedDate}</td>
                <td class="countdown" data-exam-date="${exam.date}">লোড হচ্ছে...</td>
                <td>${toBengali(exam.code)}</td>
            `;
            
            // মোবাইল ভিউ এর জন্য data-label যোগ করা
            row.querySelectorAll('td').forEach((td, i) => {
                td.setAttribute('data-label', headers[i]);
            });

            routineBody.appendChild(row);
        });

        updateAllCountdowns();
        countdownInterval = setInterval(updateAllCountdowns, 1000);
    };

    const updateAllCountdowns = () => {
        const countdownCells = document.querySelectorAll('.countdown');
        countdownCells.forEach(cell => {
            const examDate = cell.dataset.examDate;
            const timeLeft = calculateTimeLeft(examDate);
            cell.textContent = formatTimeLeft(timeLeft);
        });
    };
    
    // --- মেনু ও অন্যান্য ইভেন্ট ---
    const toggleMenu = (open) => {
        settingsMenu.classList.toggle('open', open);
        overlay.classList.toggle('active', open);
    };

    menuToggle.addEventListener('click', () => toggleMenu(true));
    menuClose.addEventListener('click', () => toggleMenu(false));
    overlay.addEventListener('click', () => toggleMenu(false));
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            renderRoutine(currentFilter);
            toggleMenu(false);
        });
    });

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.id === 'dark-mode-btn' ? 'dark' : 'light';
            document.body.classList.toggle('dark-mode', theme === 'dark');
            localStorage.setItem('theme', theme);
            themeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    
    resetButton.addEventListener('click', () => {
        localStorage.removeItem('theme');
        document.body.classList.remove('dark-mode');
        currentFilter = 'my_routine';
        renderRoutine(currentFilter);
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="my_routine"]').classList.add('active');
        themeButtons.forEach(btn => btn.classList.remove('active'));
        document.getElementById('light-mode-btn').classList.add('active');
        toggleMenu(false);
    });

    // --- অ্যাপ্লিকেশন শুরু ---
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    themeButtons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(savedTheme === 'dark' ? 'dark-mode-btn' : 'light-mode-btn').classList.add('active');
    
    document.querySelector(`.filter-btn[data-filter="${currentFilter}"]`).classList.add('active');

    renderRoutine(currentFilter);
    setInterval(updateHeaderClock, 1000);
    updateHeaderClock();
});