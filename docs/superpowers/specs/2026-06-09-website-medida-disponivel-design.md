# Especificação — Website Medida Disponível Unipessoal Lda

**Data:** 2026-06-09
**Estado:** Aprovado para planeamento

## Objetivo

Criar um website de **página única (one-page)**, estático e responsivo, para a
empresa de carpintaria **Medida Disponível Unipessoal Lda**. O site serve como
cartão de visita digital: apresenta a empresa, os serviços e os trabalhos, e
facilita o contacto/pedido de orçamento. Atualmente a empresa não tem website.

## Dados da empresa

- **Nome:** Medida Disponível Unipessoal Lda
- **NIF:** 515889857
- **Morada:** Rua da Fonte Velha nº 11, 6150-342 Proença-a-Nova, Castelo Branco
- **Atividade:** Montagem de trabalhos de carpintaria e de caixilharia (CAE 43320)
- **Constituída:** 2020 · microempresa (<6 colaboradores)
- **Serviços:** mobiliário por medida, cozinhas, roupeiros, portas e janelas,
  carpintaria de obra, restauro
- **Contactos:** a fornecer pelo cliente (usar placeholders entretanto —
  `+351 ___ ___ ___`, `geral@medidadisponivel.pt`, redes sociais)

## Direção visual

Fusão "madeira quente × escuro sofisticado":

| Elemento        | Valor                                            |
|-----------------|--------------------------------------------------|
| Fundo escuro    | `#211c17` (hero, navbar, rodapé)                 |
| Acento madeira  | `#d2a679` (dourado) e `#a9743f` (madeira média)  |
| Faixas claras   | `#f3ece1` (creme), texto escuro `#3a3128`        |
| Texto claro     | `#f3e9dc`                                         |
| Títulos         | Serifa (Georgia / serif display)                 |
| Corpo de texto  | Sans-serif limpo (system / Helvetica/Arial)      |

Ambiente: artesanal e premium. O fundo escuro valoriza as fotos dos trabalhos;
os acentos de madeira reforçam o tema. Mockup validado com o cliente.

## Estrutura da página (ordem vertical)

1. **Navbar fixa** — logótipo SVG + âncoras (Serviços · Trabalhos · Sobre ·
   Contactos) + botão "Orçamento". Menu hambúrguer em ecrã pequeno.
2. **Hero** — título em serifa, subtítulo, dois CTAs:
   "Pedir orçamento" (→ WhatsApp) e "Ver trabalhos" (→ scroll para galeria).
3. **Serviços** — 6 cartões com ícone: Mobiliário por medida, Cozinhas,
   Roupeiros, Portas & Janelas, Carpintaria de obra, Restauro.
4. **Galeria de trabalhos** — grelha responsiva de imagens. Placeholders de
   stock (Unsplash, tema marcenaria) prontos para substituir pelas fotos reais.
5. **Sobre** — texto curto: artesão desde 2020 em Proença-a-Nova, trabalho à
   medida, foco no acabamento e confiança.
6. **Contactos** — botões de ação direta (sem backend):
   WhatsApp (`https://wa.me/...`), telefonar (`tel:`), email (`mailto:`) +
   morada + **Google Maps embebido** (Rua da Fonte Velha nº 11).
7. **Rodapé** — nome legal, NIF 515889857, contactos, ano corrente.

## Logótipo

Gerado em **SVG vetorial** (escala perfeita, sem dependências). Tema madeira,
texto "Medida Disponível" com um símbolo que evoca precisão/medição (ex.: tábua
+ esquadro/régua), jogando com o nome da empresa. Cores da paleta acima.
Guardado em `assets/logo.svg` e embebido inline na navbar.

## Tecnologia

- **HTML + CSS + JS puro.** Sem framework, sem build, sem dependências externas
  (exceto fontes do sistema e imagens de stock por URL).
- JS mínimo: alternar menu mobile, scroll suave nas âncoras, ano dinâmico no
  rodapé.
- **Responsivo:** mobile-first; breakpoints para tablet/desktop.
- **Publicação:** ficheiros estáticos, prontos para Netlify / GitHub Pages /
  Vercel, ou abrir `index.html` localmente.

## Estrutura de ficheiros

```
carpintaria-website/
├── index.html       # toda a página, secções por <section> com id
├── style.css        # variáveis de cor, tipografia, layout, responsivo
├── script.js        # menu mobile, scroll suave, ano do rodapé
├── assets/
│   └── logo.svg      # logótipo gerado
├── docs/             # esta especificação + plano
└── README.md         # como editar conteúdos e publicar
```

## Fora de âmbito (YAGNI)

- Backend / processamento de formulário (usa botões diretos).
- Loja online / e-commerce.
- CMS ou área de administração.
- Multi-idioma (só Português).
- Blog / notícias.

## Critérios de sucesso

- Site abre e renderiza corretamente em desktop e telemóvel.
- Todas as 7 secções presentes e ligadas pela navbar.
- Logótipo SVG visível e nítido em qualquer tamanho.
- Botões de contacto funcionais (WhatsApp/tel/email) e mapa visível.
- Conteúdos e contactos facilmente editáveis; README explica como.
- Imagens de stock claramente substituíveis pelas reais.
