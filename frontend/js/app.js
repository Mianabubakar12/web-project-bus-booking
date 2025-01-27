// This file contains the main JavaScript logic for the application, handling global functions and event listeners.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners
    initEventListeners();
});

function initEventListeners() {
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');
    const bookButton = document.getElementById('bookButton');
    const historyButton = document.getElementById('historyButton');

    if (loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = 'pages/login.html';
        });
    }

    if (signupButton) {
        signupButton.addEventListener('click', function() {
            window.location.href = 'pages/signup.html';
        });
    }

    if (bookButton) {
        bookButton.addEventListener('click', function() {
            window.location.href = 'pages/booking.html';
        });
    }

    if (historyButton) {
        historyButton.addEventListener('click', function() {
            window.location.href = 'pages/history.html';
        });
    }
}

// Function to show success message after booking
function showSuccessMessage() {
    alert('Booking successful! Please provide your Easypaisa account number.');
}

// Function to retrieve booking history (mockup)
function getBookingHistory() {
    // This function would normally fetch data from a server
    return [
        { id: 1, from: 'Karachi', to: 'Lahore', date: '2023-10-01', seat: 'A1' },
        { id: 2, from: 'Islamabad', to: 'Peshawar', date: '2023-10-05', seat: 'B2' }
    ];
}