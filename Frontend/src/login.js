document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (username === 'admin' && password === 'password') {
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
            
        } else {
            loginMessage.textContent = 'Invalid username or password!';
            loginMessage.style.color = 'red';
        }
    });
});
