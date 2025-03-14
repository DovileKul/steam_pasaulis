document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Visi laukeliai turi būti užpildyti!');
        return;
    }

    alert('Prisijungimas sėkmingas!'); // Simulated success
});
