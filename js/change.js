
function closeWelcomeBox() {
    document.getElementById('welcome-box').style.display = 'none';
}

function showTooltip(event) {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'block'; 
    tooltip.style.left = event.pageX + 'px';
    tooltip.style.top = (event.pageY + 20) + 'px'; 
}

function hideTooltip() {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none'; 
}



    document.querySelector('.btn button').addEventListener('click', function(event) {
        event.preventDefault(); 

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('رمز عبور و تکرار آن مطابقت ندارد.');
            return false; 
        }
        else {
            window.location.href = '../html/change.html'; 
        }
        
    });
