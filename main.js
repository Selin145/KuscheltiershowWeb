document.getElementById('aboutLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'about.html';
    }, 500); // This should match the transition time in CSS
});