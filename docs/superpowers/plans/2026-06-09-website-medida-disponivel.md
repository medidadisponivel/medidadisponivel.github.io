# Website Medida Disponível — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir um website de página única, estático e responsivo, para a carpintaria Medida Disponível Unipessoal Lda.

**Architecture:** HTML + CSS + JS puro, sem build nem dependências. Uma `index.html` com 7 secções (`<section id=...>`), estilos em `style.css` com variáveis de cor, JS mínimo em `script.js`, logótipo vetorial em `assets/logo.svg`. Imagens de stock (Unsplash por URL) como placeholders. **Sem git** — validação é abrir `index.html` no browser.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox/grid, media queries), JavaScript vanilla, SVG.

---

## Estrutura de ficheiros

```
carpintaria-website/
├── index.html       # página completa, 7 secções
├── style.css         # variáveis, tipografia, layout, responsivo
├── script.js         # menu mobile, scroll suave, ano do rodapé
├── assets/
│   └── logo.svg       # logótipo gerado
└── README.md          # como editar conteúdos e publicar
```

**Paleta (usar como CSS custom properties):**
- `--escuro: #211c17` · `--escuro-2: #2c251d` · `--linha: #3a3128`
- `--madeira: #d2a679` · `--madeira-2: #a9743f` · `--madeira-3: #8a5a2b`
- `--creme: #f3ece1` · `--texto-claro: #f3e9dc` · `--texto-escuro: #3a3128`
- Fontes: títulos `Georgia, 'Times New Roman', serif`; corpo `-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`

**Placeholders de contacto (substituir quando o cliente fornecer):**
- Telefone: `+351 000 000 000` → `tel:+351000000000`
- WhatsApp: `https://wa.me/351000000000`
- Email: `geral@medidadisponivel.pt`
- Morada: `Rua da Fonte Velha nº 11, 6150-342 Proença-a-Nova`

---

### Task 1: Logótipo SVG

**Files:**
- Create: `assets/logo.svg`

- [ ] **Step 1: Criar o logótipo vetorial**

Símbolo: uma régua/esquadro estilizado + iniciais. Texto "Medida Disponível". Cores da paleta. Fundo transparente para assentar na navbar escura.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 56" width="260" height="56" role="img" aria-label="Medida Disponível">
  <!-- símbolo: esquadro com marcas de medição -->
  <g fill="none" stroke="#d2a679" stroke-width="3" stroke-linecap="round">
    <path d="M10 10 V46 H46" />
    <path d="M18 38 V46 M26 34 V46 M34 30 V46 M42 26 V46" stroke-width="2" />
    <path d="M10 10 L46 46" stroke="#a9743f" stroke-width="2" />
  </g>
  <text x="60" y="26" font-family="Georgia, serif" font-size="20" fill="#f3e9dc" font-weight="bold">Medida</text>
  <text x="60" y="46" font-family="Georgia, serif" font-size="20" fill="#d2a679">Disponível</text>
</svg>
```

- [ ] **Step 2: Verificar**

Abrir `assets/logo.svg` no browser. Esperado: símbolo de esquadro dourado à esquerda, "Medida" em creme e "Disponível" em dourado à direita, nítido.

---

### Task 2: Esqueleto HTML + cabeça do documento

**Files:**
- Create: `index.html`

- [ ] **Step 1: Criar o documento base com navbar e contentor das secções**

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Medida Disponível — Carpintaria à medida | Proença-a-Nova</title>
  <meta name="description" content="Carpintaria Medida Disponível: mobiliário por medida, cozinhas, roupeiros, portas e janelas, restauro. Proença-a-Nova, Castelo Branco.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="navbar" id="topo">
    <a href="#topo" class="navbar__logo"><img src="assets/logo.svg" alt="Medida Disponível" height="40"></a>
    <button class="navbar__toggle" aria-label="Abrir menu" aria-expanded="false">☰</button>
    <nav class="navbar__nav">
      <a href="#servicos">Serviços</a>
      <a href="#trabalhos">Trabalhos</a>
      <a href="#sobre">Sobre</a>
      <a href="#contactos">Contactos</a>
      <a href="https://wa.me/351000000000" class="btn btn--accent navbar__cta">Orçamento</a>
    </nav>
  </header>

  <main>
    <!-- secções entram aqui nas tarefas seguintes -->
  </main>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verificar**

Abrir `index.html` no browser. Esperado: navbar com logótipo e links visíveis (ainda sem estilo). Sem erros na consola.

---

### Task 3: Secção Hero

**Files:**
- Modify: `index.html` (dentro de `<main>`)

- [ ] **Step 1: Adicionar a secção hero como primeiro filho de `<main>`**

```html
<section class="hero" id="hero">
  <div class="hero__inner">
    <p class="eyebrow">Carpintaria · Proença-a-Nova</p>
    <h1 class="hero__title">A madeira certa,<br><span class="accent">na medida certa.</span></h1>
    <p class="hero__lead">Mobiliário por medida, cozinhas, roupeiros, portas e janelas. Trabalho artesanal com acabamento de excelência.</p>
    <div class="hero__cta">
      <a href="https://wa.me/351000000000" class="btn btn--accent">Pedir orçamento</a>
      <a href="#trabalhos" class="btn btn--ghost">Ver trabalhos</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verificar**

Abrir no browser. Esperado: texto do hero presente (sem estilo ainda); links funcionam.

---

### Task 4: Secção Serviços

**Files:**
- Modify: `index.html` (após o hero)

- [ ] **Step 1: Adicionar a secção de serviços com 6 cartões**

```html
<section class="servicos" id="servicos">
  <div class="section__head">
    <p class="eyebrow">O que fazemos</p>
    <h2>Serviços</h2>
  </div>
  <div class="grid grid--3">
    <article class="card-srv"><span class="card-srv__ico">🪚</span><h3>Mobiliário por medida</h3><p>Peças únicas pensadas para o seu espaço.</p></article>
    <article class="card-srv"><span class="card-srv__ico">🍽️</span><h3>Cozinhas</h3><p>Cozinhas funcionais e duradouras, à sua medida.</p></article>
    <article class="card-srv"><span class="card-srv__ico">🚪</span><h3>Roupeiros</h3><p>Soluções de arrumação que aproveitam cada canto.</p></article>
    <article class="card-srv"><span class="card-srv__ico">🪟</span><h3>Portas & Janelas</h3><p>Caixilharia e portas em madeira, montagem incluída.</p></article>
    <article class="card-srv"><span class="card-srv__ico">🏗️</span><h3>Carpintaria de obra</h3><p>Trabalhos de carpintaria para construção e remodelação.</p></article>
    <article class="card-srv"><span class="card-srv__ico">🛠️</span><h3>Restauro</h3><p>Recuperação e restauro de peças e estruturas em madeira.</p></article>
  </div>
</section>
```

- [ ] **Step 2: Verificar**

Browser: 6 cartões de serviço com ícone, título e descrição.

---

### Task 5: Secção Galeria de trabalhos

**Files:**
- Modify: `index.html` (após serviços)

- [ ] **Step 1: Adicionar a galeria com placeholders Unsplash**

Comentário no topo da secção a indicar que as imagens são placeholders substituíveis.

```html
<section class="trabalhos" id="trabalhos">
  <div class="section__head">
    <p class="eyebrow">Portfólio</p>
    <h2>Trabalhos</h2>
    <!-- PLACEHOLDERS: substituir os src por fotos reais em assets/ -->
  </div>
  <div class="grid grid--gallery">
    <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=70" alt="Trabalho de carpintaria" loading="lazy">
    <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=70" alt="Mobiliário em madeira" loading="lazy">
    <img src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=70" alt="Cozinha em madeira" loading="lazy">
    <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=70" alt="Interior com mobiliário" loading="lazy">
    <img src="https://images.unsplash.com/photo-1611021061285-3e15b4f9c2c1?w=800&q=70" alt="Pormenor de marcenaria" loading="lazy">
    <img src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&q=70" alt="Oficina de carpintaria" loading="lazy">
  </div>
</section>
```

- [ ] **Step 2: Verificar**

Browser (com internet): grelha de 6 imagens carrega. Se alguma falhar, trocar por outro URL Unsplash de marcenaria.

---

### Task 6: Secção Sobre

**Files:**
- Modify: `index.html` (após trabalhos)

- [ ] **Step 1: Adicionar a secção sobre**

```html
<section class="sobre" id="sobre">
  <div class="sobre__inner">
    <div class="sobre__txt">
      <p class="eyebrow">Quem somos</p>
      <h2>Artesãos da madeira desde 2020</h2>
      <p>A Medida Disponível é uma carpintaria em Proença-a-Nova, Castelo Branco, dedicada a transformar madeira em soluções à medida de cada cliente. Damos atenção ao detalhe e ao acabamento, do primeiro esboço à montagem final.</p>
      <p>Pequena equipa, trabalho próximo e personalizado — cada projeto é tratado como único.</p>
    </div>
    <ul class="sobre__factos">
      <li><strong>2020</strong><span>desde</span></li>
      <li><strong>À medida</strong><span>cada projeto</span></li>
      <li><strong>Proença-a-Nova</strong><span>Castelo Branco</span></li>
    </ul>
  </div>
</section>
```

- [ ] **Step 2: Verificar**

Browser: texto sobre + bloco de 3 factos visíveis.

---

### Task 7: Secção Contactos + mapa + rodapé

**Files:**
- Modify: `index.html` (após sobre, e rodapé antes de `</body>` script)

- [ ] **Step 1: Adicionar contactos com botões diretos e mapa embebido**

```html
<section class="contactos" id="contactos">
  <div class="section__head">
    <p class="eyebrow">Fale connosco</p>
    <h2>Contactos</h2>
  </div>
  <div class="contactos__grid">
    <div class="contactos__acoes">
      <a class="btn btn--accent" href="https://wa.me/351000000000">WhatsApp</a>
      <a class="btn btn--ghost" href="tel:+351000000000">Telefonar</a>
      <a class="btn btn--ghost" href="mailto:geral@medidadisponivel.pt">Email</a>
      <p class="contactos__morada">Rua da Fonte Velha nº 11<br>6150-342 Proença-a-Nova, Castelo Branco</p>
    </div>
    <div class="contactos__mapa">
      <iframe src="https://www.google.com/maps?q=Rua%20da%20Fonte%20Velha%2011%2C%206150-342%20Proen%C3%A7a-a-Nova&output=embed" width="100%" height="300" style="border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</section>
```

Rodapé (depois de `</main>`, antes do `<script>`):

```html
<footer class="rodape">
  <p><strong>Medida Disponível Unipessoal Lda</strong> · NIF 515889857</p>
  <p>Rua da Fonte Velha nº 11, 6150-342 Proença-a-Nova · <a href="tel:+351000000000">+351 000 000 000</a></p>
  <p class="rodape__copy">© <span id="ano"></span> Medida Disponível. Todos os direitos reservados.</p>
</footer>
```

- [ ] **Step 2: Verificar**

Browser: botões de contacto, morada e mapa Google embebido visíveis; rodapé presente.

---

### Task 8: JavaScript (menu mobile, scroll suave, ano)

**Files:**
- Create: `script.js`

- [ ] **Step 1: Criar o script**

```javascript
// Ano dinâmico no rodapé
const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector('.navbar__toggle');
const nav = document.querySelector('.navbar__nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const aberto = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(aberto));
  });
  // Fechar ao clicar num link
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}
```

(Scroll suave faz-se em CSS com `scroll-behavior` na Task 9.)

- [ ] **Step 2: Verificar**

Browser: ano atual aparece no rodapé. Em ecrã estreito (DevTools responsive), o botão ☰ abre/fecha o menu.

---

### Task 9: CSS — base, variáveis, tipografia e navbar

**Files:**
- Create: `style.css`

- [ ] **Step 1: Reset, variáveis, tipografia base e navbar**

```css
:root{
  --escuro:#211c17; --escuro-2:#2c251d; --linha:#3a3128;
  --madeira:#d2a679; --madeira-2:#a9743f; --madeira-3:#8a5a2b;
  --creme:#f3ece1; --texto-claro:#f3e9dc; --texto-escuro:#3a3128;
  --serif:Georgia,'Times New Roman',serif;
  --sans:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;
  --max:1100px;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:72px}
body{font-family:var(--sans);color:var(--texto-escuro);background:var(--creme);line-height:1.6}
h1,h2,h3{font-family:var(--serif);line-height:1.15}
img{max-width:100%;display:block}
.accent{color:var(--madeira)}
.eyebrow{font-size:.75rem;letter-spacing:3px;text-transform:uppercase;color:var(--madeira-2);font-weight:600}
.btn{display:inline-block;padding:11px 22px;border-radius:4px;font-size:.95rem;text-decoration:none;font-weight:600;transition:.15s}
.btn--accent{background:var(--madeira);color:var(--escuro)}
.btn--accent:hover{background:#e0b88c}
.btn--ghost{border:1px solid var(--madeira);color:var(--madeira)}
.btn--ghost:hover{background:rgba(210,166,121,.12)}

/* Navbar */
.navbar{position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;
  padding:12px 24px;background:var(--escuro);border-bottom:1px solid var(--linha)}
.navbar__logo{display:flex;align-items:center}
.navbar__nav{display:flex;align-items:center;gap:22px}
.navbar__nav a{color:var(--texto-claro);text-decoration:none;font-size:.95rem}
.navbar__nav a:hover{color:var(--madeira)}
.navbar__cta{color:var(--escuro)!important}
.navbar__toggle{display:none;background:none;border:none;color:var(--madeira);font-size:1.6rem;cursor:pointer}
```

- [ ] **Step 2: Verificar**

Browser: navbar escura, logótipo, links em creme; botão "Orçamento" dourado.

---

### Task 10: CSS — secções (hero, serviços, galeria, sobre, contactos, rodapé)

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Estilos das secções**

```css
section{padding:72px 24px}
.section__head{max-width:var(--max);margin:0 auto 36px;text-align:center}
.section__head h2{font-size:2rem;margin-top:6px}
.grid{max-width:var(--max);margin:0 auto;display:grid;gap:20px}
.grid--3{grid-template-columns:repeat(3,1fr)}
.grid--gallery{grid-template-columns:repeat(3,1fr)}

/* Hero */
.hero{background:var(--escuro);color:var(--texto-claro);padding:88px 24px}
.hero__inner{max-width:var(--max);margin:0 auto}
.hero__title{font-size:3rem;margin:14px 0}
.hero__lead{max-width:560px;opacity:.85;margin-bottom:26px}
.hero__cta{display:flex;gap:12px;flex-wrap:wrap}

/* Serviços */
.servicos{background:var(--creme)}
.card-srv{background:#fff;border:1px solid #e7ddcd;border-radius:8px;padding:26px;transition:.15s}
.card-srv:hover{transform:translateY(-3px);box-shadow:0 8px 22px rgba(0,0,0,.06)}
.card-srv__ico{font-size:1.8rem}
.card-srv h3{margin:10px 0 6px;font-size:1.2rem}
.card-srv p{font-size:.95rem;color:#6b5d4d}

/* Galeria */
.trabalhos{background:var(--escuro-2)}
.trabalhos .section__head h2,.trabalhos .eyebrow{color:var(--texto-claro)}
.grid--gallery img{width:100%;height:230px;object-fit:cover;border-radius:8px}

/* Sobre */
.sobre{background:var(--creme)}
.sobre__inner{max-width:var(--max);margin:0 auto;display:grid;grid-template-columns:1.4fr 1fr;gap:40px;align-items:center}
.sobre__txt h2{font-size:2rem;margin:6px 0 16px}
.sobre__txt p{margin-bottom:12px;color:#5b4e3f}
.sobre__factos{list-style:none;display:grid;gap:14px}
.sobre__factos li{background:var(--escuro);color:var(--texto-claro);padding:16px 20px;border-radius:8px;display:flex;flex-direction:column}
.sobre__factos strong{font-family:var(--serif);font-size:1.3rem;color:var(--madeira)}
.sobre__factos span{font-size:.8rem;opacity:.8;text-transform:uppercase;letter-spacing:1px}

/* Contactos */
.contactos{background:var(--escuro);color:var(--texto-claro)}
.contactos .eyebrow{color:var(--madeira)}
.contactos__grid{max-width:var(--max);margin:0 auto;display:grid;grid-template-columns:1fr 1.3fr;gap:30px;align-items:start}
.contactos__acoes{display:flex;flex-direction:column;gap:12px;align-items:flex-start}
.contactos__morada{margin-top:8px;opacity:.85}
.contactos__mapa iframe{border-radius:8px}

/* Rodapé */
.rodape{background:#171310;color:var(--texto-claro);text-align:center;padding:30px 24px;font-size:.9rem}
.rodape a{color:var(--madeira);text-decoration:none}
.rodape__copy{opacity:.6;margin-top:8px;font-size:.82rem}
```

- [ ] **Step 2: Verificar**

Browser desktop: todas as secções estilizadas conforme a paleta; hero escuro, serviços em cartões, galeria em grelha 3 colunas, sobre em 2 colunas, contactos escuro com mapa, rodapé.

---

### Task 11: CSS — responsivo (telemóvel/tablet)

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Media queries**

```css
@media (max-width:860px){
  .grid--3,.grid--gallery{grid-template-columns:repeat(2,1fr)}
  .sobre__inner,.contactos__grid{grid-template-columns:1fr}
  .hero__title{font-size:2.3rem}
}
@media (max-width:560px){
  .grid--3,.grid--gallery{grid-template-columns:1fr}
  .navbar__toggle{display:block}
  .navbar__nav{display:none;position:absolute;top:100%;left:0;right:0;background:var(--escuro);
    flex-direction:column;align-items:flex-start;gap:0;padding:8px 0;border-bottom:1px solid var(--linha)}
  .navbar__nav.is-open{display:flex}
  .navbar__nav a{padding:12px 24px;width:100%}
  .hero{padding:64px 20px}
  .hero__title{font-size:2rem}
}
```

- [ ] **Step 2: Verificar**

Browser DevTools responsive (375px): navbar mostra ☰, menu abre em coluna; grelhas passam a 1 coluna; sobre/contactos empilham. A 768px: grelhas a 2 colunas.

---

### Task 12: README

**Files:**
- Create: `README.md`

- [ ] **Step 1: Escrever instruções de edição e publicação**

```markdown
# Website — Medida Disponível Unipessoal Lda

Site estático de página única. Sem dependências: abre o `index.html` no browser.

## Editar conteúdos
- **Textos:** edita diretamente o `index.html`.
- **Contactos:** procura e substitui os placeholders no `index.html`:
  - `351000000000` (WhatsApp/telefone) e `geral@medidadisponivel.pt` (email).
  - Atualiza também o número visível no rodapé (`+351 000 000 000`).
- **Fotos dos trabalhos:** na secção `#trabalhos`, troca os `src` das imagens
  (Unsplash) por fotos reais. Coloca-as em `assets/` e usa `src="assets/nome.jpg"`.
- **Logótipo:** `assets/logo.svg`.
- **Cores:** variáveis no topo do `style.css` (`:root`).

## Publicar (grátis)
- **Netlify / Vercel:** arrasta a pasta para o painel, ou liga o repositório.
- **GitHub Pages:** coloca os ficheiros num repositório e ativa Pages.
- Não é preciso build — são ficheiros estáticos.
```

- [ ] **Step 2: Verificar**

Ler o README; confirmar que os placeholders mencionados (`351000000000`, `geral@medidadisponivel.pt`) batem com os usados no `index.html`.

---

### Task 13: Verificação final

- [ ] **Step 1: Revisão completa no browser**

Abrir `index.html`. Confirmar, de cima a baixo:
- [ ] Navbar fixa, logótipo nítido, links navegam para as secções (scroll suave).
- [ ] Hero com título serifa e 2 botões.
- [ ] 6 cartões de serviços.
- [ ] Galeria com 6 imagens.
- [ ] Sobre com texto + 3 factos.
- [ ] Contactos com 3 botões + morada + mapa.
- [ ] Rodapé com NIF e ano atual.
- [ ] Consola do browser sem erros.

- [ ] **Step 2: Verificação responsiva**

DevTools a 375px e 768px: menu mobile funciona, grelhas reflow, nada transborda horizontalmente.

---

## Self-review (cobertura da spec)

- Página única estática ✓ (Tasks 2–12)
- 7 secções (navbar, hero, serviços, galeria, sobre, contactos, rodapé) ✓ (Tasks 2–7,10)
- Estilo madeira×escuro com a paleta definida ✓ (Tasks 9–10)
- Logótipo SVG ✓ (Task 1)
- Galeria com placeholders substituíveis ✓ (Task 5, README)
- Contactos por botões diretos (sem backend) + mapa ✓ (Task 7)
- Responsivo ✓ (Task 11)
- Sem git, validação por browser ✓ (todas as Tasks)
- README com edição/publicação ✓ (Task 12)
