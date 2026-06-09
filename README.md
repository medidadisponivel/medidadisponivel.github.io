# Website — Medida Disponível Unipessoal Lda

Site estático de página única (carpintaria, Proença-a-Nova). Sem dependências,
sem build: basta abrir o `index.html` no browser.

## Estrutura

```
carpintaria-website/
├── index.html      # toda a página (7 secções)
├── style.css       # variáveis de cor, tipografia, layout, responsivo
├── script.js       # menu mobile + ano do rodapé
├── assets/
│   └── logo.svg     # logótipo vetorial
└── README.md
```

## Editar conteúdos

- **Textos:** edita diretamente o `index.html` (cada secção tem um `id`:
  `hero`, `servicos`, `trabalhos`, `sobre`, `contactos`).
- **Contactos (placeholders):** atualmente são valores de teste. Faz
  *procurar e substituir* em **todos os ficheiros** para os valores reais:
  - `351966576530` — usado no WhatsApp (`https://wa.me/351966576530`) e no
    telefone (`tel:+351966576530`).
  - `medidadisponivel@gmail.com` — email (`mailto:`).
  - O número visível em texto no rodapé é `+351 966 576 530` — atualiza-o também.
  > Como o mesmo padrão `351966576530` é usado em todo o lado (navbar, hero,
  > contactos e rodapé), um único *find-replace* trata de tudo.
- **Fotos dos trabalhos:** na secção `#trabalhos`, as imagens são placeholders
  do Unsplash. Substitui cada `src` por fotos reais: guarda-as em `assets/` e
  usa `src="assets/nome-da-foto.jpg"`. Mantém o atributo `alt` descritivo.
- **Mapa:** na secção `#contactos`, o `iframe` aponta para a morada via Google
  Maps (`output=embed`). Para mudar, troca o texto da morada no parâmetro `q`.
- **Logótipo:** `assets/logo.svg` (vetorial; escala sem perder nitidez).
- **Cores e tipografia:** todas as variáveis estão no topo do `style.css`,
  dentro do bloco `:root` (`--escuro`, `--madeira`, `--creme`, etc.).

## Fontes

As fontes web (Fraunces + Inter) são carregadas via Google Fonts no `<head>`.
Se não houver internet, o site usa automaticamente os fallbacks
(Georgia para títulos, system/Helvetica/Arial para corpo) — continua a
funcionar offline.

## Publicar (grátis)

- **Netlify / Vercel:** arrasta a pasta para o painel (drag & drop) ou liga
  um repositório.
- **GitHub Pages:** coloca os ficheiros num repositório e ativa Pages.
- Não é preciso build — são ficheiros estáticos. Também podes simplesmente
  abrir o `index.html` localmente no browser.
