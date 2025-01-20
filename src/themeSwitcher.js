const switcher = document.getElementById('flexSwitchCheckDefault');

function setThemeBasedOnTime() {
    const now = new Date();
    const hour = now.getHours(); 

    if (hour >= 18 || hour < 6) { 
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        switcher.checked = true; 
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        switcher.checked = false; 
    }
}


switcher.addEventListener('change', () => {  
    if (switcher.checked) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }
});

window.addEventListener('DOMContentLoaded', setThemeBasedOnTime);