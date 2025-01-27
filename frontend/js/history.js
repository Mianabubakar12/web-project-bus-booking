document.addEventListener('DOMContentLoaded', function() {
    const historyTableBody = document.querySelector('#historyTable tbody');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        window.location.href = '../index.html'; // Redirect to login if not logged in
        return;
    }

    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const userBookings = bookings.filter(booking => booking.username === loggedInUser.username);

    if (userBookings.length > 0) {
        userBookings.forEach(booking => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${booking.from}</td>
                <td>${booking.to}</td>
                <td>${booking.seat}</td>
                <td>${booking.date}</td>
            `;
            historyTableBody.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="4">No bookings found.</td>';
        historyTableBody.appendChild(row);
    }
});