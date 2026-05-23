(function () {
  const THEME_KEY = 'theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    if (theme === DARK) {
      icon.classList.remove('bi-moon-fill');
      icon.classList.add('bi-sun-fill');
    } else {
      icon.classList.remove('bi-sun-fill');
      icon.classList.add('bi-moon-fill');
    }
  }

  function getSavedTheme() {
    return localStorage.getItem(THEME_KEY) || LIGHT;
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme') || LIGHT;
    const next = current === DARK ? LIGHT : DARK;
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  // Apply saved preference immediately (before DOM ready) to avoid flash
  applyTheme(getSavedTheme());

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
  });
}());
