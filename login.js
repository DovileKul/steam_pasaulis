document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('Prisijungimas sėkmingas!');
    });
});
