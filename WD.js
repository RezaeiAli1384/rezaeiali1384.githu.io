// اسکرول نرم برای لینک‌ها
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// تغییر رنگ هدر هنگام اسکرول
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#ffffff';
    } else {
        header.style.backgroundColor = '#f8f9fa';
    }
});

// نمایش سال جاری در فوتر
document.getElementById('year').textContent = new Date().getFullYear();