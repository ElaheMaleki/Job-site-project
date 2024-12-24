document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    
    // برای حالت موبایل، سایدبار به طور پیش‌فرض مخفی است
    sidebar.classList.add('hidden');

    document.getElementById('menu-toggle').addEventListener('click', function() {
        if (sidebar.classList.contains('hidden')) {
            sidebar.classList.remove('hidden');
            sidebar.classList.add('visible');
            sidebar.style.right = '0'; // نمایش سایدبار
        } else {
            sidebar.classList.remove('visible');
            sidebar.classList.add('hidden');
            sidebar.style.right = '-250px'; // پنهان کردن سایدبار
        }
    });
});
document.getElementById('downloadLink').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '../resume/sample-filled-resume-fa.pdf'; // مسیر فایل رزومه
    link.download = 'sample-filled-resume-fa.pdf'; // نام فایل دانلودی
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
