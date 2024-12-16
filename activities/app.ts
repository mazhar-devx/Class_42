// Interfaces for user data
interface User {
  email: string;
  password: string;
}

// Utility functions for local storage
class LocalStorageUtil {
  static getUsers(): User[] {
      const users = localStorage.getItem('users');
      return users ? JSON.parse(users) : [];
  }

  static saveUser(user: User): void {
      const users = this.getUsers();
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
  }

  static validateUser(email: string, password: string): boolean {
      const users = this.getUsers();
      return users.some(user => user.email === email && user.password === password);
  }
}

// Toggle between login and signup sections
const toggleButton = document.getElementById('toggle-button') as HTMLButtonElement;
const signupSection = document.getElementById('signup-section') as HTMLElement;
const loginSection = document.getElementById('login-section') as HTMLElement;

toggleButton.addEventListener('click', () => {
  if (signupSection.classList.contains('hidden')) {
      signupSection.classList.remove('hidden');
      loginSection.classList.add('hidden');
      toggleButton.textContent = 'Go to Login';
  } else {
      signupSection.classList.add('hidden');
      loginSection.classList.remove('hidden');
      toggleButton.textContent = 'Go to Signup';
  }
});

// Handle signup
const signupForm = document.getElementById('signup-form') as HTMLFormElement;
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = (document.getElementById('signup-email') as HTMLInputElement).value;
  const password = (document.getElementById('signup-password') as HTMLInputElement).value;

  if (!LocalStorageUtil.getUsers().some(user => user.email === email)) {
      LocalStorageUtil.saveUser({ email, password });
      alert('Signup successful! You can now log in.');
      toggleButton.click(); // Switch to login section
  } else {
      alert('User already exists. Please log in.');
  }
});

// Handle login
const loginForm = document.getElementById('login-form') as HTMLFormElement;
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = (document.getElementById('login-email') as HTMLInputElement).value;
  const password = (document.getElementById('login-password') as HTMLInputElement).value;

  if (LocalStorageUtil.validateUser(email, password)) {
      alert('Login successful!');
      createWelcomePage();
  } else {
      alert('Invalid email or password.');
  }
});

// Create a welcome page after successful login
function createWelcomePage(): void {
  const newWindow = window.open('', '_blank');
  if (newWindow) {
      newWindow.document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Welcome</title>
              <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body class="flex items-center justify-center h-screen bg-blue-100">
              <div class="text-center">
                  <h1 class="text-4xl font-bold text-blue-600">Welcome!</h1>
                  <p class="text-lg mt-2">You have successfully logged in.</p>
              </div>
          </body>
          </html>
      `);
      newWindow.document.close();
  }
}
