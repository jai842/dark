// JavaScript for login validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Check if username or password is empty
    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
    } else {
        // In a real application, you would send data to the server here
        alert('Login successful!'); // For demonstration purposes
    }
});
