# ONG Esperança Viva — Projeto Final (Entrega IV)

**Status:** Finalizado  
**Autor:** Vagner Lima

---

## Resumo do Projeto
Aplicação Single Page Application (SPA) para a ONG **Esperança Viva**. Permite visualização de projetos, cadastro de voluntários e inclui medidas de acessibilidade (WCAG 2.1 AA). O projeto foi desenvolvido com HTML5, CSS3 (modular) e JavaScript modular (ES Modules).

## Tecnologias
- HTML5 semântico
- CSS3 (variáveis, Grid, Flexbox)
- JavaScript (ES6 modules)
- LocalStorage (persistência de dados local)
- Deploy: GitHub Pages (recomendado)

## Estrutura do repositório

```
PROJETOONG/
├── css/
│ ├── components/
│ └── modules/
│ └── style.css
├── img/
├── js/
│ ├── app.js
│ ├── accessibility.js
│ ├── formValidation.js
│ ├── router.js
│ ├── storage.js
│ └── templates.js
├── index.html
└── README.md
```

## Funcionalidades implementadas
- SPA com roteamento via hash (`router.js`).
- Formulário de cadastro com validação avançada (CPF, CEP, telefone, idade).
- Armazenamento local de cadastros (localStorage).
- Design System modular com variáveis CSS.
- Acessibilidade: skip-link, navegação por teclado, aria-live, `aria-pressed` em toggles, modo escuro e alto contraste.
- Padrões de escrita segura de HTML (escape de texto).

## Acessibilidade (WCAG 2.1 - AA)
- Navegação por teclado suportada em todos os controles interativos.
- Elementos semânticos (`header`, `main`, `nav`, `footer`) e `aria` onde necessário.
- `aria-live` para atualizações de SPA (toasts e mensagens).
- Skip link para saltar diretamente ao conteúdo principal.
- Alto contraste e modo escuro com persistência no `localStorage`.
- Foco visível (outline) definido para componentes interativos.

## Instruções para rodar localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/<usuario>/<repositório>.git
   cd <repositório>

2. Abra `index.html` no navegador (basta abrir o arquivo localmente) ou use uma extensão server (como o *Live Server* do VS Code).

## Otimização e Produção (orientação)
- Minificar CSS/JS (sugestões abaixo).
- Comprimir imagens (TinyPNG / Squoosh).
- Colocar arquivos finais na pasta `dist/` e subir ao GitHub.

## Deploy (GitHub Pages)
1. No GitHub: *Settings > Pages* → selecionar branch `main` e `/ (root)` → salvar.
2. Aguarde o link público. Use esse link para entrega.

## Versionamento & GitFlow
- Branches: `main` (produção) e `develop` (desenvolvimento).
- Convenção de commits semânticos: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`.
- Criar release `v1.0.0` ao publicar.

---

## Contatos
- Autor: **Vagner Lima**  
- Email: vagner-v6@live.com
