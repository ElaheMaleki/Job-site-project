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
        if (window.innerWidth > 600) {
            sidebar.classList.add('visible'); 
            sidebar.style.right = '0';
            sidebar.classList.remove('sidebar-collapsed'); // کلاس بسته را حذف کنید
        } else {
            sidebar.classList.add('hidden'); // در غیر این صورت، بسته باشد
            sidebar.style.right = '-250px';
            sidebar.classList.add('sidebar-collapsed'); // کلاس بسته را اضافه کنید
        }
    });
});



function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function selectOption(option) {
  document.getElementById("dropdownButton").innerText = option; 
  console.log("گزینه انتخاب شده:", option);
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tablinks").click();
});


const chatIcon = document.getElementById('chatIcon');
const chatContainer = document.getElementById('chatContainer');
const chatCloseButton = document.getElementById('chatCloseButton');

chatIcon.addEventListener('click', function() {
   chatContainer.style.display = 'block'; 
   console.log(chatContainer.style.display)
});


chatCloseButton.addEventListener('click', function() {
   chatContainer.style.display = 'none'; 
});

document.getElementById('chatSendButton').addEventListener('click', function() {
   const chatMessageInput = document.getElementById('chatMessageInput');
   const messageText = chatMessageInput.value;

   if (messageText.trim() !== '') {
       const messageDiv = document.createElement('div');
       messageDiv.textContent = messageText;
       document.getElementById('chatMessages').appendChild(messageDiv);
       chatMessageInput.value = '';
       
       // Scroll to the bottom of the chat
       const chatMessages = document.getElementById('chatMessages');
       chatMessages.scrollTop = chatMessages.scrollHeight;
   }
});
console.log()
document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('resultsChart2').getContext('2d');
    const resultsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['همه', 'پذیرفته شده', 'رد شده'],
            datasets: [{
                label: 'تعداد درخواست‌ها',
                data: [50, 30, 20],
                backgroundColor: [
                    'rgba(57, 204, 203, 0.6)',
                    'rgba(76, 175, 80, 0.6)',
                    'rgba(244, 67, 54, 0.6)'
                ],
                borderColor: [
                    'rgba(57, 204, 203, 1)',
                    'rgba(76, 175, 80, 1)',
                    'rgba(244, 67, 54, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
});
