// This file handles the signup process, including form validation and user registration.

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const email = document.getElementById('email').value;

        if (validateForm(username, password, confirmPassword, email)) {
            const user = {
                username: username,
                password: password,
                email: email
            };

            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            signupForm.reset();
            window.location.href = 'login.html'; // Redirect to login page
        }
    });

    function validateForm(username, password, confirmPassword, email) {
        if (username === '' || password === '' || confirmPassword === '' || email === '') {
            alert('All fields are required.');
            return false;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Invalid email format.');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});