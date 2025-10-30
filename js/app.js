// js/app.js — ponto de entrada principal
import { initRouter, onContentLoaded } from './router.js';
import { initFormValidation } from './formValidation.js';
import { storage } from './storage.js';
import { renderProjects, showToast } from './templates.js';

function init() {
  initRouter();
  initPageFeatures();
  onContentLoaded(initPageFeatures);
  setupMenuToggle();
  setupAccessibilityShortcuts();
}

function setupMenuToggle() {
  const toggle = document.querySelector('.menu-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const ul = document.querySelector('nav ul');
    if (!ul) return;
    ul.classList.toggle('show');
    // Gerenciar aria-expanded para acessibilidade
    const expanded = ul.classList.contains('show');
    toggle.setAttribute('aria-expanded', expanded);
  });

  // Permite ativar por teclado (Enter/Espaço)
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle.click();
    }
  });
}

function initPageFeatures() {
  initFormValidation();

  const projectsContainer = document.querySelector('#projetos-list-container');
  if (projectsContainer) {
    const projects = storage.get('projetos', getSeedProjects());
    renderProjects(projectsContainer, projects);
  }

  // Delegação: eventos de clique em cards renderizados dinamicamente
  document.body.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) {
      showToast('Você clicou em um projeto.', 'info', 1800);
    }
  });
}

// Seeds default (apenas se não houver dados)
function getSeedProjects() {
  const seed = [
    { id: 1, title: 'Doação Solidária', description: 'Arrecadação e distribuição de alimentos.', img: 'img/doacao.jpg', status: 'Ativo' },
    { id: 2, title: 'Programa Voluntariado', description: 'Capacitação e engajamento de voluntários.', img: 'img/voluntariado.jpg', status: 'Em andamento' },
    { id: 3, title: 'Educar para o Futuro', description: 'Oficinas de reforço escolar e inclusão digital.', img: 'img/ong.png', status: 'Novo' }
  ];
  storage.set('projetos', seed);
  return seed;
}

function setupAccessibilityShortcuts() {
  // Caso queira adicionar atalhos adicionais no futuro
  // (os atalhos Alt+D e Alt+C já estão implementados em accessibility.js)
}

// Inicializa a aplicação
document.addEventListener('DOMContentLoaded', init);
