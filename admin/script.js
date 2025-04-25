document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const userId = document.getElementById('userId').value.trim();
    const password = document.getElementById('password').value;
  
    if (!userId || !password) {
      alert('Please fill in both fields.');
      return;
    }
  
    // Simulated login - replace with your own valid credentials
    if (userId === 'admin' && password === 'admin123') {
      alert('Login successful!');
       window.location.href = "./admin_dashboard.html"; 
    } else {
      alert('Invalid credentials!');
    }
  });
  