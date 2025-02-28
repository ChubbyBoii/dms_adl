document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    // Simulate login process (replace with actual API call)
    console.log('Logging in with:', username, password);
    alert('Login successful! Redirecting...');
    // Redirect to dashboard or another page
    window.location.href = 'dashboard.html';
});