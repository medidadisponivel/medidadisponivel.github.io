/* =====================================================================
   Medida Disponível — JavaScript mínimo
   - Ano dinâmico no rodapé
   - Menu mobile (abrir/fechar; fecha ao clicar num link)
   (O scroll suave é feito em CSS com scroll-behavior.)
   ===================================================================== */

// Ano dinâmico no rodapé
const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector('.navbar__toggle');
const nav = document.querySelector('.navbar__nav');

if (toggle && nav) {
  const fechar = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const aberto = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(aberto));
  });

  // Fechar ao clicar num link de navegação
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', fechar));

  // Fechar com a tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fechar();
  });
}

/* =====================================================================
   MELHORIAS
   ===================================================================== */
const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- 1. Splash de entrada (logo a desenhar-se) ----------
   Aparece em TODOS os carregamentos. Fundo branco, logótipo + slogan.
   O overlay é criado por JS: sem JS a página fica sempre visível. */
(function intro() {
  // SVG do logótipo recolorido para fundo branco (tons escuros/madeira).
  const svg = `
    <svg class="intro__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286 60" role="img" aria-label="Medida Disponível">
      <g fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 11 V49 H50" stroke="#a9743f" stroke-width="3.4"/>
        <path d="M12 11 L50 49" stroke="#8a5a2b" stroke-width="2.2" opacity="0.9"/>
        <g class="intro__marks" stroke="#a9743f" stroke-width="2" opacity="0.95">
          <path d="M19 43 V49"/>
          <path d="M27 39 V49"/>
          <path d="M35 35 V49"/>
          <path d="M43 31 V49"/>
        </g>
        <circle cx="12" cy="11" r="2.6" fill="#a9743f" stroke="none"/>
      </g>
      <text x="66" y="28" font-family="Georgia, 'Times New Roman', serif" font-size="21" letter-spacing="0.4" fill="#211c17" font-weight="bold">Medida</text>
      <text x="66" y="49" font-family="Georgia, 'Times New Roman', serif" font-size="21" letter-spacing="0.4" fill="#a9743f">Disponível</text>
    </svg>
    <span class="intro__line" aria-hidden="true"></span>
    <p class="intro__slogan">A madeira certa,<br><span>na medida certa.</span></p>`;

  const overlay = document.createElement('div');
  overlay.className = 'intro';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = svg;
  (document.body || document.documentElement).prepend(overlay);

  const remover = () => {
    overlay.classList.add('is-leaving');
    const fim = () => overlay.remove();
    overlay.addEventListener('transitionend', fim, { once: true });
    // Rede de segurança: garante remoção mesmo sem transitionend.
    setTimeout(fim, 900);
  };

  if (reduzMovimento) {
    // Sem animação: remover de imediato.
    overlay.remove();
    return;
  }

  // Preparar o desenho: definir o comprimento real de cada traço.
  overlay.querySelectorAll('.intro__logo path').forEach((p) => {
    try {
      const len = p.getTotalLength();
      p.style.setProperty('--len', len);
    } catch (e) { /* getTotalLength pode falhar em SVG oculto; ignora */ }
  });
  // Ativa as animações no frame seguinte (para o dasharray pegar).
  requestAnimationFrame(() => overlay.classList.add('intro--draw'));

  // ~desenho + linha + slogan + pausa, depois a cortina sobe.
  setTimeout(remover, 2300);
})();

/* ---------- 2. Scroll-reveal ---------- */
(function reveal() {
  const alvos = document.querySelectorAll('.reveal');
  if (!alvos.length) return;

  // Indexar irmãos "stagger" para o desfasamento.
  document.querySelectorAll('.grid').forEach((grid) => {
    const itens = grid.querySelectorAll('.reveal--stagger');
    itens.forEach((el, i) => el.style.setProperty('--i', i));
  });

  if (reduzMovimento || !('IntersectionObserver' in window)) {
    alvos.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  alvos.forEach((el) => io.observe(el));
})();

/* ---------- 3. Lightbox da galeria ---------- */
(function lightbox() {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCap = document.getElementById('lightbox-cap');
  const botoes = Array.from(document.querySelectorAll('.shot__btn'));
  if (!lb || !lbImg || !botoes.length) return;

  const imagens = botoes.map((b) => {
    const img = b.querySelector('img');
    return { src: img ? img.currentSrc || img.src : '', alt: img ? img.alt : '' };
  });

  let atual = 0;
  let aberturaEl = null; // foco a restaurar ao fechar
  const closeBtn = lb.querySelector('.lightbox__close');

  const mostrar = (i) => {
    atual = (i + imagens.length) % imagens.length;
    const item = imagens[atual];
    lbImg.src = item.src;
    lbImg.alt = item.alt;
    lbCap.textContent = item.alt;
  };

  const abrir = (i, origem) => {
    aberturaEl = origem || null;
    mostrar(i);
    lb.hidden = false;
    lb.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => lb.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  };

  const fechar = () => {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    const esconder = () => { lb.hidden = true; };
    if (reduzMovimento) esconder();
    else { lb.addEventListener('transitionend', esconder, { once: true }); setTimeout(esconder, 300); }
    if (aberturaEl && typeof aberturaEl.focus === 'function') aberturaEl.focus();
  };

  botoes.forEach((b, i) => b.addEventListener('click', () => abrir(i, b)));

  lb.querySelectorAll('[data-lb-close]').forEach((el) => el.addEventListener('click', fechar));
  const prev = lb.querySelector('[data-lb-prev]');
  const next = lb.querySelector('[data-lb-next]');
  if (prev) prev.addEventListener('click', () => mostrar(atual - 1));
  if (next) next.addEventListener('click', () => mostrar(atual + 1));

  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') fechar();
    else if (e.key === 'ArrowLeft') mostrar(atual - 1);
    else if (e.key === 'ArrowRight') mostrar(atual + 1);
    else if (e.key === 'Tab') {
      // Retenção de foco simples dentro do diálogo.
      const focaveis = lb.querySelectorAll('button');
      if (!focaveis.length) return;
      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
    }
  });
})();
