document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    
    // برای حالت موبایل، سایدبار به طور پیش‌فرض مخفی است
    if (window.innerWidth > 768) {
        sidebar.classList.add('visible'); // در دسکتاپ سایدبار باز است
    } else {
        sidebar.classList.add('hidden'); // در موبایل سایدبار بسته است
    }

    document.getElementById('menu-toggle').addEventListener('click', function() {
        if (sidebar.classList.contains('hidden')) {
            sidebar.classList.remove('hidden');
            sidebar.classList.add('visible');
            sidebar.style.right = '0'; // نمایش سایدبار
            sidebar.classList.remove('sidebar-collapsed'); // کلاس بسته را حذف کنید
        } else {
            sidebar.classList.remove('visible');
            sidebar.classList.add('hidden');
            sidebar.style.right = '-250px'; // پنهان کردن سایدبار
            sidebar.classList.add('sidebar-collapsed'); // کلاس بسته را اضافه کنید
        }
    });

    // اضافه کردن رویداد برای تغییر اندازه پنجره
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.add('visible'); // اگر بزرگتر از 768 باشد، سایدبار باز باشد
            sidebar.style.right = '0';
            sidebar.classList.remove('sidebar-collapsed'); // کلاس بسته را حذف کنید
        } else {
            sidebar.classList.add('hidden'); // در غیر این صورت، بسته باشد
            sidebar.style.right = '-250px';
            sidebar.classList.add('sidebar-collapsed'); // کلاس بسته را اضافه کنید
        }
    });
});
    
    
    function selectTheme(theme) {
        // حذف کلاس selected از تمام تصاویر
        const allImages = document.querySelectorAll('.preview-image');
        allImages.forEach(img => {
            img.classList.remove('selected');
        });

        // اضافه کردن کلاس selected به تصویر انتخاب شده
        const selectedImage = document.getElementById(theme);
        selectedImage.classList.add('selected');
        
    }

    document.getElementById('downloadLink').addEventListener('click', function() {
        const selectedTheme = document.querySelector('.selected');

        if (!selectedTheme) {
            alert('لطفا یک تم انتخاب کنید.');
            return; // اگر هیچ تمی انتخاب نشده باشد، تابع متوقف می‌شود.
        }

        let fileName = '';

        switch (selectedTheme.id) {
            case 'theme1':
                fileName = 'file1.docx'; 
                break;
            case 'theme2':
                fileName = 'file2.docx'; 
                break;
            case 'theme3':
                fileName = 'file3.docx'; 
                break;
            default:
                alert('لطفا یک تم انتخاب کنید.');
                return; 
        }

        const link = document.createElement('a');
        link.href = `../resume/${fileName}`; // مسیر فایل‌ها را به درستی تنظیم کنید.
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
