document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('data').textContent = localStorage.getItem('storedData');
});
