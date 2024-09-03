document.getElementById('buttonText').addEventListener('click', function() {
    localStorage.setItem('storedData', document.getElementById('inputText').value);
});

