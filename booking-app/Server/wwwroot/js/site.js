

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form reload

    // Collect form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    // Validate passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Create a user object
    const userData = {
      name: name,
      email: email,
      password: password,
    };

    // Check for existing users in localStorage or create a new array
    let users = [];
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
    }
    users.push(userData);

    // Save updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Create a downloadable JSON file
    const jsonData = JSON.stringify(users, null, 2); // Pretty print JSON
    const blob = new Blob([jsonData], { type: 'application/json' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'users.json';
    downloadLink.click();

    // Reset the form
    signupForm.reset();

    alert('Signup data saved and users.json file downloaded!');
  });
});


// Load Footer
document.getElementById('footer').innerHTML = `
  <div class="footer">
    &copy; 2025 My Website. All rights reserved.
  </div>
`;


document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting in the usual way

  // Get form input values
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;

  // Build the URL with the search parameters
  const searchParams = new URLSearchParams({
    from: from,
    to: to,
    date: date
  });

  // Redirect to the buses.html page with the search parameters in the URL
  window.location.href = `buses.html?${searchParams.toString()}`;
});
