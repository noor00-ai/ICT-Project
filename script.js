document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    // username input field
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    // display error message
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    // event listener is a function that waits for and responds to events
    form.addEventListener('submit', (e) => {
        let valid = true;
        // clear previous error 
        usernameError.textContent = '';
        passwordError.textContent = '';
        // checks the username field
        if (usernameField.value.trim() === '') {
            usernameError.textContent = 'Username is required';
            valid = false;
        }
        // checks the password field
        if (passwordField.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            valid = false;
        }
        if (!valid) {
            // stops the form submission if validation fails
            e.preventDefault();
        }
    });
});