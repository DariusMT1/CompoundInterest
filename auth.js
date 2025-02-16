document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout-button');
    const userNameDisplay = document.getElementById('user-name');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (localStorage.getItem(username)) {
                alert('Username already exists. Please choose another one.');
            } else {
                localStorage.setItem(username, password);
                alert('Registration successful! Please log in.');
                window.location.href = 'login.html';
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const storedPassword = localStorage.getItem(username);
            if (storedPassword && storedPassword === password) {
                sessionStorage.setItem('loggedInUser', username);
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password.');
            }
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            sessionStorage.removeItem('loggedInUser');
            alert('Logged out successfully.');
            window.location.href = 'login.html';
        });
    }

    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (!loggedInUser && window.location.pathname.endsWith('index.html')) {
        alert('Please log in first.');
        window.location.href = 'login.html';
    } else if (loggedInUser && userNameDisplay) {
        userNameDisplay.textContent = `Welcome, ${loggedInUser}`;
    }
});
