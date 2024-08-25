document.getElementById('check-icon').addEventListener('click', function () {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
});

// AOS Initialization

AOS.init();

// URL Hide/Show

function urlHideShow() {
    const service = document.getElementById('service').value;
    const url = document.getElementById('urlInput');

    // Show the URL input field only for specific services
    if (service === 'Website Maintenance & Support' || 
        service === 'Website Redesign & Revamp' || 
        service === 'Wordpress To HTML') {
        url.style.display = 'block';  // Show the input
    } else {
        url.style.display = 'none';   // Hide the input
    }
}