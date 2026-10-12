const themeToggle = document.querySelector('.theme-toggle');
const themeText = document.querySelector('.theme-text');

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');

  themeText.textContent = isDark ? 'LIGHT' : 'DARK';

  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Switch to light mode' : 'Switch to dark mode'
  );
});
