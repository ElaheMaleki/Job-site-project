    function selectTheme(theme) {
        // حذف کلاس selected از تمام تصاویر
        const allImages = document.querySelectorAll('.preview-image');
        allImages.forEach(img => {
            img.classList.remove('selected');
        });

        // اضافه کردن کلاس selected به تصویر انتخاب شده
        const selectedImage = document.getElementById(theme);
        selectedImage.classList.add('selected');
        
        // شما می‌توانید در اینجا کدی برای ذخیره انتخاب کاربر یا هر کار دیگری اضافه کنید.
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
                fileName = 'file1.docx'; // نام فایل برای تم ۱
                break;
            case 'theme2':
                fileName = 'file2.docx'; // نام فایل برای تم ۲
                break;
            case 'theme3':
                fileName = 'file3.docx'; // نام فایل برای تم ۳
                break;
            default:
                alert('لطفا یک تم انتخاب کنید.');
                return; // اگر هیچ تمی انتخاب نشده باشد، تابع متوقف می‌شود.
        }

        // ایجاد لینک دانلود
        const link = document.createElement('a');
        link.href = `../resume/${fileName}`; // مسیر فایل‌ها را به درستی تنظیم کنید.
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
