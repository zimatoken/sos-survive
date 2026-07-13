// js/theme.js
// ============================================================
// ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ — Тёмная/Светлая тема
// ============================================================

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
}

function loadTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
}

// ===== ЭКСПОРТ =====
window.toggleTheme = toggleTheme;
window.loadTheme = loadTheme;
window.updateThemeIcon = updateThemeIcon;

console.log('✅ Темы загружены');
