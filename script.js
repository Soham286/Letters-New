// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    // Normalize the password by removing spaces and converting to lowercase
    password = password.toLowerCase().replace(/\s+/g, '');

    if (password === 'iloveyou') {
        window.location.href = 'Index2.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Incorrect password. Please try again.';
    }
});
