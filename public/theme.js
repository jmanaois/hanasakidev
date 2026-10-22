// Loaded synchronously in <head> so the saved theme applies before first paint.
const themeKey = 'hanasaki-theme';
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const themeColors = { light: '#f8f7f4', dark: '#16181d' };

function storedTheme() {
  try { return localStorage.getItem(themeKey); } catch { return null; }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColors[theme]);
  const toggle = document.querySelector('.theme-toggle');
  if (toggle) toggle.setAttribute('aria-label', `switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

applyTheme(storedTheme() || (prefersDark.matches ? 'dark' : 'light'));
prefersDark.addEventListener('change', event => {
  if (!storedTheme()) applyTheme(event.matches ? 'dark' : 'light');
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.createElement('button');
  toggle.className = 'theme-toggle';
  toggle.type = 'button';
  toggle.innerHTML = '<svg class="icon icon-moon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></svg><svg class="icon icon-sun" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  toggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(themeKey, next); } catch {}
    // Crossfade the whole page between themes; fall back to color transitions.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) applyTheme(next);
    else if (document.startViewTransition) document.startViewTransition(() => applyTheme(next));
    else {
      document.documentElement.classList.add('theme-fading');
      applyTheme(next);
      setTimeout(() => document.documentElement.classList.remove('theme-fading'), 500);
    }
  });
  document.querySelector('header').append(toggle);
  applyTheme(document.documentElement.dataset.theme);
});
