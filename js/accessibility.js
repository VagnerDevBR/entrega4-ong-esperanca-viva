// js/accessibility.js
(function () {
  const body = document.body;
  const darkBtn = document.getElementById('toggle-dark');
  const contrastBtn = document.getElementById('toggle-contrast');

  // Carrega preferências anteriores do usuário
  const savedTheme = localStorage.getItem('theme-mode');
  const savedContrast = localStorage.getItem('contrast-mode');
  if (savedTheme === 'dark') enableDarkMode();
  if (savedContrast === 'high') enableHighContrast();

  // Eventos dos botões
  darkBtn.addEventListener('click', toggleDarkMode);
  contrastBtn.addEventListener('click', toggleContrastMode);

  // Atalhos de teclado para acessibilidade (Alt+D, Alt+C)
  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key.toLowerCase() === 'd') {
      e.preventDefault();
      toggleDarkMode();
    }
    if (e.altKey && e.key.toLowerCase() === 'c') {
      e.preventDefault();
      toggleContrastMode();
    }
  });

  function toggleDarkMode() {
    const isActive = body.classList.toggle('dark-mode');
    darkBtn.setAttribute('aria-pressed', isActive);
    darkBtn.textContent = isActive ? '☀️ Modo Claro' : '🌙 Modo Escuro';
    localStorage.setItem('theme-mode', isActive ? 'dark' : 'light');
    announceChange(isActive ? 'Modo escuro ativado' : 'Modo claro ativado');
  }

  function toggleContrastMode() {
    const isActive = body.classList.toggle('high-contrast');
    contrastBtn.setAttribute('aria-pressed', isActive);
    contrastBtn.textContent = isActive ? '🌑 Contraste Padrão' : '🌓 Alto Contraste';
    localStorage.setItem('contrast-mode', isActive ? 'high' : 'normal');
    announceChange(isActive ? 'Modo alto contraste ativado' : 'Modo padrão ativado');
  }

  function enableDarkMode() {
    body.classList.add('dark-mode');
    darkBtn.setAttribute('aria-pressed', 'true');
    darkBtn.textContent = '☀️ Modo Claro';
  }

  function enableHighContrast() {
    body.classList.add('high-contrast');
    contrastBtn.setAttribute('aria-pressed', 'true');
    contrastBtn.textContent = '🌑 Contraste Padrão';
  }

  // Mensagens de voz para leitores de tela
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('class', 'sr-only');
  document.body.appendChild(liveRegion);

  function announceChange(message) {
    liveRegion.textContent = '';
    setTimeout(() => (liveRegion.textContent = message), 100);
  }

  // Permite ativar o menu com Enter ou Espaço (navegação por teclado)
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuToggle.click();
      }
    });
  }
})();
// Ajuste de acessibilidade 