// Utility functions for local storage
var LocalStorageUtil = /** @class */ (function () {
    function LocalStorageUtil() {
    }
    LocalStorageUtil.getUsers = function () {
        var users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    };
    LocalStorageUtil.saveUser = function (user) {
        var users = this.getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    };
    LocalStorageUtil.validateUser = function (email, password) {
        var users = this.getUsers();
        return users.some(function (user) { return user.email === email && user.password === password; });
    };
    return LocalStorageUtil;
}());
// Toggle between login and signup sections
var toggleButton = document.getElementById('toggle-button');
var signupSection = document.getElementById('signup-section');
var loginSection = document.getElementById('login-section');
toggleButton.addEventListener('click', function () {
    if (signupSection.classList.contains('hidden')) {
        signupSection.classList.remove('hidden');
        loginSection.classList.add('hidden');
        toggleButton.textContent = 'Go to Login';
    }
    else {
        signupSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
        toggleButton.textContent = 'Go to Signup';
    }
});
// Handle signup
var signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    if (!LocalStorageUtil.getUsers().some(function (user) { return user.email === email; })) {
        LocalStorageUtil.saveUser({ email: email, password: password });
        alert('Signup successful! You can now log in.');
        toggleButton.click(); // Switch to login section
    }
    else {
        alert('User already exists. Please log in.');
    }
});
// Handle login
var loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    if (LocalStorageUtil.validateUser(email, password)) {
        alert('Login successful!');
        createWelcomePage();
    }
    else {
        alert('Invalid email or password.');
    }
});
// Create a welcome page after successful login
function createWelcomePage() {
    var newWindow = window.open('', '_blank');
    if (newWindow) {
        newWindow.document.write("\n          <!DOCTYPE html>\n          <html lang=\"en\">\n          <head>\n              <meta charset=\"UTF-8\">\n              <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n              <title>Welcome</title>\n              <script src=\"https://cdn.tailwindcss.com\"></script>\n          </head>\n          <body class=\"flex items-center justify-center h-screen bg-blue-100\">\n              <div class=\"text-center\">\n                  <h1 class=\"text-4xl font-bold text-blue-600\">Welcome!</h1>\n                  <p class=\"text-lg mt-2\">You have successfully logged in.</p>\n              </div>\n          </body>\n          </html>\n      ");
        newWindow.document.close();
    }
}
