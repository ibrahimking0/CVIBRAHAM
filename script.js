// ملف script.js

// تنبيه عند إرسال نموذج الاتصال
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // يمكنك هنا إضافة كود لإرسال النموذج إلى الخادم
    // أو استخدام خدمة مثل Formspree
    
    alert('شكراً على رسالتك! سأتواصل معك قريباً.');
    this.reset();
});

// تأثير التمرير السلس للروابط
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// إضافة تأثير عند التمرير
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// تهيئة تأثيرات الأقسام عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // جعل القسم الأول مرئياً فور التحميل
    if (sections.length > 0) {
        sections[0].style.opacity = '1';
        sections[0].style.transform = 'translateY(0)';
    }
});