document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cityFrom = urlParams.get('from');
    const cityTo = urlParams.get('to');

    const cityFromSelect = document.getElementById("city-from");
    const cityToSelect = document.getElementById("city-to");
    const seatSelect = document.getElementById("seat-select");
    const bookButton = document.getElementById("book-button");
    const easypaisaInput = document.getElementById("easypaisa-account");
    const successMessage = document.getElementById("success-message");

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        window.location.href = '../index.html'; // Redirect to login if not logged in
        return;
    }

    const cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
    const seats = ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C", "4A", "4B", "4C"];

    // Populate city dropdowns
    cities.forEach(city => {
        const optionFrom = document.createElement("option");
        optionFrom.value = city;
        optionFrom.textContent = city;
        cityFromSelect.appendChild(optionFrom);

        const optionTo = document.createElement("option");
        optionTo.value = city;
        optionTo.textContent = city;
        cityToSelect.appendChild(optionTo);
    });

    // Set selected cities
    cityFromSelect.value = cityFrom;
    cityToSelect.value = cityTo;

    // Mark booked seats
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookedSeats = bookings
        .filter(booking => booking.from === cityFrom && booking.to === cityTo)
        .map(booking => booking.seat);

    // Populate seat dropdown with available seats
    const availableSeats = seats.filter(seat => !bookedSeats.includes(seat));
    if (availableSeats.length > 0) {
        availableSeats.forEach(seat => {
            const option = document.createElement("option");
            option.value = seat;
            option.textContent = seat;
            seatSelect.appendChild(option);
        });
    } else {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Not Available";
        seatSelect.appendChild(option);
        seatSelect.disabled = true;
    }

    // Booking button click event
    bookButton.addEventListener("click", function() {
        const selectedSeat = seatSelect.value;
        const easypaisaAccount = easypaisaInput.value.trim();

        if (selectedSeat && easypaisaAccount) {
            const booking = {
                username: loggedInUser.username,
                from: cityFrom,
                to: cityTo,
                seat: selectedSeat,
                easypaisaAccount: easypaisaAccount,
                date: new Date().toISOString().split('T')[0]
            };

            bookings.push(booking);
            localStorage.setItem('bookings', JSON.stringify(bookings));

            successMessage.textContent = 'Booking successful!';
            successMessage.style.display = 'block';

            setTimeout(() => {
                window.location.href = 'home.html'; // Redirect to home page after 2 seconds
            }, 2000);
        } else {
            alert('Please select a seat and enter your Easypaisa account number.');
        }
    });
});