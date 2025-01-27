document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (validateForm(username, password)) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                window.location.href = '/BookMyRide/pages/home.html'; // Redirect to home page
            } else {
                alert('Invalid username or password.');
            }
        }
    });

    function validateForm(username, password) {
        if (username === '' || password === '') {
            alert('Both fields are required.');
            return false;
        }
        return true;
    }
});