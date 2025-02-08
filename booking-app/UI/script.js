// Load Navbar
document.getElementById('navbar').innerHTML = `
  <div class="navbar">
    <div class="logo">
      <h3>BookMyRide</h3>
      <img src="bus.png" alt="Logo" class="logo-img"> <!-- Logo Image -->
    </div>
    <div class="nav-links">
      <a href="index.html" class="${document.title.includes('Home') ? 'active' : ''}">Home</a>
      <a href="about.html" class="${document.title.includes('About') ? 'active' : ''}">About</a>
      <a href="services.html" class="${document.title.includes('Services') ? 'active' : ''}">Services</a>
      <a href="contact.html" class="${document.title.includes('Contact') ? 'active' : ''}">Admin</a>
      <a href="login.html" class="${document.title.includes('Login') ? 'active' : ''}">Login</a>
      <a href="signup.html" class="${document.title.includes('Signup') ? 'active' : ''}">Signup</a>
    </div>
    <div class="burger-menu" id="burger-menu">
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </div>
  </div>
`;

// JavaScript to toggle the burger menu and the navigation links
document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.querySelector('.nav-links');

  if (!burgerMenu || !navLinks) {
    console.error('Burger menu or navigation links not found in the DOM.');
    return;
  }

  // Toggle the navbar visibility when burger menu is clicked
  burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    burgerMenu.classList.toggle('active');

    console.log('Burger menu toggled:', {
      navLinksClasses: navLinks.className,
      burgerMenuClasses: burgerMenu.className,
    });
  });
});

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
  <div class="d-flex  justify-content-center">
        <ul class="list-unstyled text-center  " style="">
        <li><a href="#home" class="">Home</a></li>
        <li><a href="#bus-routes" class="">Bus Routes</a></li>
         <li><a href="#fleet" class="">Fleet</a></li>
          <li><a href="#fleet" class="">FAQS</a></li>
      </ul>
              <ul class="list-unstyled text-center " style="">
        <li><a href="#book-bus" class="">Book a Bus</a></li>
        <li><a href="#timetable" class="">Timetable</a></li>
        <li><a href="#fleet" class="">Fleet</a></li>
         <li><a href="#fleet" class="">Buses</a></li>
      </ul>
      
                    <ul class="list-unstyled text-center " style="">
        <li><a href="#home" class="">Home</a></li>
        <li><a href="#contact" class="">Contact Us</a></li>
        <li><a href="#faqs" class="">FAQs</a></li>
         <li><a href="#fleet" class="">Fleet</a></li>
      </ul>
      


  </div>
      &copy; 2025 BookMyRide.  All rights reserved.
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


