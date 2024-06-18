const loginForm = document.querySelector('.login-form');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
  loginForm.classList.add('active');
};

loginLink.onclick = () => {
  loginForm.classList.remove('active');
};

// Show/hide password
document.querySelectorAll('.icon-password').forEach((icon) => {
  icon.addEventListener('click', () => {
    const passwordInput = icon
      .closest('.input-box')
      .querySelector('input[type="password"], input[type="text"]');
    const eyeIcon = icon.closest('.input-box').querySelector('.fa-eye');
    const eyeSlashIcon = icon
      .closest('.input-box')
      .querySelector('.fa-eye-slash');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.style.display = 'inline';
      eyeSlashIcon.style.display = 'none';
    } else {
      passwordInput.type = 'password';
      eyeIcon.style.display = 'none';
      eyeSlashIcon.style.display = 'inline';
    }
  });
});
