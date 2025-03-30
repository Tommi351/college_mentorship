// Login Form
document.addEventListener('DOMContentLoaded', function() {
const loginForm = document.getElementById('login-form');
console.log(loginForm)


loginForm.addEventListener('submit', function(event) {
event.preventDefault();
const email = document.getElementById('login-email');
const password = document.getElementById('login-password');
if (!email.value.trim() && !password.value.trim()) {
    console.log('both email and password are required');
} else {
    console.log('this form is good');
    window.location.href='dashboard.html';
}
});
});


// Register Form 
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('register-email');
    const password = document.getElementById('register-password');
    const confirmPassword = document.getElementById('confirmPassword')

    if (!email.value.trim() && !password.value.trim() && !confirmPassword.value.trim() ) {
        console.log('All fields are required');
    } else if (password.value !== confirmPassword.value) {
           console.log('Passwords do not match')
    } else {
        console.log('this registeration is good');
        window.location.href='login.html';
    }
    });


