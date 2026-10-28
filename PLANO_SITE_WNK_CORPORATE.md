# Plano de Implementação — Site Institucional WNK Corporate

> **Status:** Site desenvolvido, funcional e validado via navegador (0 erros de console).
> **Data de Atualização:** 13/10/2026
> **Pasta do projeto:** `C:\Users\user0636\.gemini\antigravity-ide\scratch\wnkcorporate`
> **Servidor local:** Ativo em `http://localhost:8080` (Python HTTP Server)

---

## 1. Análise do material recebido

### 1.1 Inventário

| Arquivo | O que é | Uso no site |
|---|---|---|
| `WNK_INSTITUCIONAL.pdf` (4 págs.) | Folder institucional: capa, serviços, segmentos de ativos, parceiros, rodapé legal | Fonte principal de conteúdo e estrutura das seções |
| `WNK CORPORATE - Cartão de Visita Digital.pdf` | Cartão digital do Rodrigo Papp Lopes com links clicáveis | Links de redes sociais, WhatsApp, e-mails |
| `dados de contato.jpeg` | Cartão de visita físico (azul-marinho, dourado e cinza-claro) | Dados de contato e credenciais profissionais |
| `fundo referencia hero.jpeg` | Render 3D de arranha-céus em azul-marinho com estrutura dourada, rede poligonal e estrelas | Referência visual do Hero e da paleta |
| `logo.png` (3116×1260, RGBA) | Logo 3D: três cubos (2 bronze + 1 vermelho) + "WNK Corporate" em bronze escovado | Marca, preloader, favicon |
| `clientes.jpeg` | Mosaico com cerca de 120 logos de empresas atendidas ou parceiras | Seção de clientes e parceiros |
| `WNK CORPORATE - VIDEO INSTITUCIONAL.mp4` | Vídeo de 60 s, **848×480**, 24 fps, 9,9 MB | Seção de vídeo com player próprio |

### 1.2 Posicionamento da marca

- **Tagline oficial:** *"A WNK Corporate é a conexão direta que leva você aos melhores negócios do mercado imobiliário."*
- **Frases do vídeo** (reaproveitar como microcopy): "Sua parceira estratégica no mundo dos negócios imobiliários", "Estruturação, fusões e aquisições de empresas", "Comercializamos diversos ativos", "Agilidade e eficiência", "Dos grandes players aos microempreendedores", "Parceria com vários setores: corporativo, varejo, atacado e agronegócio", "Independente do seu ramo, temos o local perfeito para você".
- **Diferenciais:** a empresa reúne no mesmo lugar corretagem (CRECI), arquitetura (CAU/CREA) e operações financeiras (M&A, valuation, CRI). Atua no Brasil e no exterior e tem uma carteira de clientes de grande porte.
- **Tom:** corporativo, premium, confiável e ético. O texto de compliance é um pilar declarado.

### 1.3 Conteúdo estruturado (o que será publicado)

**SERVIÇOS**

1. **Arquitetura**
   - Desenvolvimento de projetos
   - Definição de estudo de viabilidade
2. **Operações Imobiliárias**
   - **Desenvolvimento de BTS (Build to Suit):** estruturação e participação em concorrências no Brasil e no exterior, com projeto do próprio cliente, crossdocking e câmaras frias quando necessário, e contratos de no mínimo 10+10 anos com os principais players do mercado.
   - **Sale & Leaseback**
   - **Valuation:** depois da due diligence, cruzamento de dados para chegar a um valor justo de venda.
   - **Compliance:** conduta ética, respeito à legislação e aos órgãos públicos, prevenção de corrupção, suborno e lavagem de dinheiro, transparência.
   - **Due Diligence:** análise completa da vida da empresa (ganhos, dívidas etc.) para saber se ela está saudável para a venda.
   - **Securitização & CRI**
3. **Operações Financeiras**
   - **M&A (Fusões e Aquisições):** absorver concorrência e diversificar o negócio, incluindo valuation, buy-side, sell-side e due diligence.

**IMÓVEIS NO EXTERIOR** (casas e lofts): Estados Unidos, Argentina, Uruguai, França, Dubai, Abu Dhabi, Portugal, Espanha e outros.

**VAREJO & RETAIL** (16): centro de distribuição, parque aquático, hotéis, motéis, pousadas, ilhas & spa, lojas & franquias, casas em condomínios, postos de combustível, apartamentos & lançamentos, drogarias, strip center & power center, salas e lajes comerciais, imóveis com renda, agronegócio/fazenda/haras, estacionamentos.

**INVESTIMENTOS & LARGE SCALE** (14): PCHs & usinas, hospitais, BTS, portos secos, faculdades, colégios, shoppings, portos & estaleiros, agências bancárias, prédios comerciais, condomínios de galpões, áreas para incorporação, aeroportos, galpões.

**CLIENTES / PARCEIROS** (amostra do mosaico): Allianz, Klabin, Kinea, Riachuelo, Heineken, H&M, Assaí, JPMorgan, Blackstone, Carlyle, Nutella, Makro, Havan, Petz, Cobasi, Rede D'Or São Luiz, Bridgestone, MRV, Prologis, Votorantim, GE, Rhodia, Estácio, P&G, ABB, Bayer, Leroy Merlin, Coca-Cola, Nissan, Ericsson, Heinz, Pfizer, Amazon, Vale, Natura, Amil, Arcor, Brookfield, Grupo Fleury, Perdigão, Kroton e outras (cerca de 120 no total).

**CONTATO E DADOS LEGAIS**

- **Responsável:** Rodrigo Papp Lopes, corretor de imóveis (CRECI 63.893-F) e arquiteto (CREA 260562967-8 / CAU A136977-6)
- **WhatsApp/Telefone:** +55 11 95580-5749 → `https://api.whatsapp.com/send?phone=5511955805749`
- **E-mails:** wnkcorporate@wnkcorporate.com.br · wnkcorporate@gmail.com
- **Site:** www.wnkcorporate.com.br
- **Instagram:** instagram.com/wnkcorporate.com.br · **Facebook:** https://www.facebook.com/share/19hZyTokH6/?mibextid=wwXIfr
- **Razão social:** WNK Corporate Gestão de Imóveis · CNPJ 20.929.539/0001-37 · CRECI 32.390-J

### 1.4 Pontos de atenção encontrados (validar antes de publicar)

| # | Problema | Recomendação |
|---|---|---|
| 1 | **"EIRELI"**: essa modalidade foi extinta em 2021 (as EIRELIs viraram SLU automaticamente) | Confirmar a razão social atual no cartão CNPJ |
| 2 | O CREA 260562967-8 aparece como dado da empresa, mas é o registro pessoal do Rodrigo | Confirmar se a PJ tem registro próprio no CREA/CAU |
| 3 | **Não existe endereço** em nenhum material | Informar o endereço, ou definir como "atendimento em todo o Brasil e no exterior" |
| 4 | A página 4 do PDF mostra um ícone do **LinkedIn**, mas não há URL | Informar a URL do LinkedIn, ou remover |
| 5 | **Logos de terceiros** (cerca de 120 marcas): usar marcas no site pode exigir autorização | Confirmar quais podem ser exibidas e se o título será "Clientes atendidos" ou "Parceiros" |
| 6 | O mosaico `clientes.jpeg` é uma única imagem rasterizada de baixa resolução | Obter os logos individuais em SVG/PNG (ou vetorizar) para o carrossel monocromático |
| 7 | **Vídeo em 848×480**: baixa resolução para tela cheia | Pedir à produtora o master em 1080p/4K; até lá, exibir o vídeo em um player com moldura em vez de fundo full-bleed |
| 8 | A foto do Rodrigo no PDF é uma selfie de baixa qualidade | Fazer um retrato profissional (ou ocultar a foto na seção do fundador) |
| 9 | Erros de grafia no material: "Abu Dabhi", "Due Dilligence", "Porto Secos", "Moteis", "buit to suit" (no vídeo) | Corrigir no site para Abu Dhabi, Due Diligence, Portos Secos, Motéis e Build to Suit |
| 10 | As fotos do folder são de banco de imagens e de baixa resolução | Substituir por imagens geradas no padrão da marca (seção 4) |
| 11 | O e-mail Gmail transmite menos credibilidade corporativa | Usar @wnkcorporate.com.br como principal e deixar o Gmail apenas como secundário |
| 12 | O `logo.png` tem canal alfa, mas o fundo branco do cartão e as sombras precisam ser verificados | Gerar as versões: logo para fundo escuro (bronze/dourado), monocromática, símbolo isolado (3 cubos) e SVG vetorizado |

---

## 2. Identidade visual

### 2.1 Paleta extraída (k-means sobre o logo e o fundo do Hero)

| Token | Hex | Origem | Uso |
|---|---|---|---|
| `--navy-950` | `#0A1426` | Hero (sombra) | Fundo base do site |
| `--navy-900` | `#13233C` | Hero (cor dominante) | Seções e cards |
| `--navy-700` | `#354254` | Hero (meio-tom) | Bordas e superfícies elevadas |
| `--ink` | `#15141A` | Hero (preto quente) | Overlays e rodapé |
| `--bronze-700` | `#492C1A` | Logo (sombra do metal) | Gradientes metálicos |
| `--bronze-500` | `#745039` | Logo (cor dominante) | Logotipo e detalhes |
| `--bronze-300` | `#B29886` | Logo (brilho) | Texto secundário sobre navy |
| `--gold-400` | `#C9A66B` | Hero (estrutura dourada) | **Cor de destaque**: CTAs, linhas, hovers |
| `--gold-200` | `#D1C09D` | Hero (brilho dourado) | Realces, estrelas, partículas |
| `--olive-gold` | `#8C7A3E` | Folder e cartão (faixas) | Faixas e divisórias, para manter a continuidade com o material impresso |
| `--wnk-red` | `#8B0A0A` | Logo (cubo vermelho) | **Uso pontual**: ponto de foco, indicadores ativos, cursor |
| `--paper` | `#E3DED8` | Logo (fundo claro) | Texto principal sobre navy e seções claras |

**Gradiente metálico assinatura:**
`linear-gradient(135deg, #492C1A 0%, #745039 30%, #D1C09D 50%, #927562 70%, #492C1A 100%)`, aplicado a títulos-chave com `background-clip: text` e brilho animado em hover.

**Proporção de uso:** cerca de 70% navy, 20% neutros claros, 9% dourado/bronze e 1% vermelho. O vermelho funciona como o cubo do logo: um único ponto de atenção por tela.

### 2.2 Tipografia

- **Títulos:** *Cormorant Garamond* (600/700), uma serifada elegante que conversa com o "Corporate" serifado do logo
- **Rótulos e números:** *Montserrat* (500/700, caixa-alta com tracking amplo), próxima da tipografia geométrica do folder e do "WNK"
- **Texto corrido:** *Inter* (400/500)
- Fontes auto-hospedadas (woff2, subset latino) para garantir performance

### 2.3 Linguagem visual

- Linhas douradas finas (1px) e redes poligonais, inspiradas no canto superior esquerdo do fundo de referência
- Cortes diagonais entre seções, que repetem as faixas inclinadas do folder e do cartão
- Os três cubos do logo como motivo gráfico recorrente: marcadores de lista, preloader, numeração de seções e cursor
- Textura de "metal escovado" sutil em superfícies de destaque

---

## 3. Arquitetura do site (one-page com âncoras e páginas de apoio)

```
/                         Home (one-page)
/servicos/[slug]          (fase 2, opcional) páginas de detalhe por serviço para SEO
/politica-de-privacidade  LGPD
```

### 3.1 Seções da home e técnicas aplicadas

| # | Seção | Conteúdo | Técnicas |
|---|---|---|---|
| 0 | **Preloader** | Os 3 cubos se montam, depois "WNK Corporate" com brilho metálico; contador de 0 a 100% | Microinteractions, Character Reveal |
| 1 | **Header** fixo | Logo, menu (Serviços · Ativos · Exterior · Vídeo · Clientes · Contato), botão WhatsApp | Magnetic Buttons, Microinteractions (sublinhado dourado, header que encolhe no scroll) |
| 2 | **Hero** | Imagem gerada a partir do fundo de referência em camadas (céu + rede poligonal / torres / estrutura dourada em primeiro plano). Título: *"A conexão direta com os melhores negócios do mercado imobiliário."* CTAs: "Fale com um especialista" e "Conheça os serviços" | **Parallax por mouse e scroll** (3 a 4 camadas), **Text Reveal** por linhas, **Mouse Follow** (halo dourado que segue o cursor), **Floating Animation** (polígonos e partículas-estrela), **Magnetic Buttons** |
| 3 | **Manifesto / Sobre** | "Sua parceira estratégica no mundo dos negócios imobiliários." Parágrafo sobre a atuação no Brasil e no exterior, dos grandes players aos microempreendedores. Contadores: **+100 empresas atendidas · 30 tipos de ativos · 8+ países · contratos BTS 10+10 anos** (números a validar) | **Character Reveal** ligado ao scroll (as letras passam de 15% para 100% de opacidade), **Blur Reveal** nos contadores |
| 4 | **Serviços** | 3 pilares: Arquitetura · Operações Imobiliárias · Operações Financeiras. Cada card abre um painel com os subserviços e as descrições do PDF | **3D Hover** (tilt com reflexo metálico), **Reveal Animation** em sequência, Microinteractions (accordion e ícones animados) |
| 5 | **Destaque BTS** | Bloco dedicado ao Build to Suit (o texto mais rico do material): concorrências, crossdocking, câmaras frias, contratos 10+10 | **Image Mask Reveal** (o galpão gerado é revelado por uma máscara diagonal), Parallax de scroll |
| 6 | **Vídeo institucional** | O vídeo surge em um recorte pequeno que se expande até ocupar a largura da tela no scroll; cursor personalizado "▶ Assistir"; o clique abre um player modal com som | **Image Mask Reveal** (clip-path expandindo), **Mouse Follow** (cursor "Play"), Magnetic no botão de play |
| 7 | **Segmentos de ativos** | Duas abas: *Varejo & Retail* e *Investimentos & Large Scale*. Lista tipográfica grande; ao passar o mouse sobre um item, uma imagem do ativo aparece e segue o cursor | **Mouse Follow** (preview de imagem), **Text Reveal**, Microinteractions (contador do item, seta) |
| 8 | **Imóveis no exterior** | Globo/mapa estilizado em linhas douradas com pinos nos 8 países; cards de "Casas e Lofts" | **Floating Animation** (pinos e cards), **Parallax** de mouse, **Blur Reveal** dos nomes dos países |
| 9 | **Como trabalhamos** | Linha do tempo: Diagnóstico → Due Diligence → Valuation → Estruturação → Negociação → Fechamento (*proposta derivada dos serviços, a validar*) | Linha dourada desenhada no scroll (SVG stroke), **Reveal Animation** |
| 10 | **Ética & Compliance** | Citação em destaque com o texto de compliance do PDF | **Blur Reveal** palavra por palavra, fundo com parallax lento |
| 11 | **Clientes** | Dois marquees infinitos em sentidos opostos com os logos em monocromático dourado; hover traz o logo de volta à cor original | Microinteractions, a velocidade do marquee responde ao scroll |
| 12 | **Fundador** | Rodrigo Papp Lopes: corretor e arquiteto, com credenciais CRECI/CREA/CAU | **Image Mask Reveal** no retrato, Text Reveal |
| 13 | **Contato** | Formulário (nome, empresa, telefone, e-mail, tipo de interesse, mensagem, aceite LGPD) + cartões de WhatsApp, e-mail e redes sociais | **Magnetic Buttons**, Microinteractions (labels flutuantes, validação e estados de envio), **3D Hover** nos cartões de contato |
| 14 | **Footer** | Logo, links, redes, razão social, CNPJ, CRECI-J | Reveal Animation, Floating no botão "voltar ao topo" |
| — | **Botão WhatsApp flutuante** | Fixo no canto, visível em todo o site | **Floating Animation** + **Magnetic** + pulso sutil |

### 3.2 Mapa de técnicas: implementação

| Técnica | Como será feita | Onde aparece |
|---|---|---|
| Reveal Animation | GSAP ScrollTrigger, `y + opacity` com stagger | Todas as seções |
| Text Reveal + Character Reveal | GSAP SplitText (linhas com máscara `overflow:hidden`; caracteres com scrub) | Hero, Manifesto, títulos |
| Parallax (scroll) | ScrollTrigger com `scrub` e `yPercent` por camada | Hero, BTS, Compliance |
| Parallax (mouse) | `pointermove` normalizado (-1..1) com `gsap.quickTo` por camada | Hero, Exterior |
| Magnetic Buttons | Deslocamento proporcional à distância do cursor dentro de um raio, com retorno elástico | CTAs, WhatsApp, Play, envio do formulário |
| Mouse Follow | Cursor customizado (ponto + anel) com estados: padrão, link, play, ver imagem | Global (somente desktop) |
| Blur Reveal | `filter: blur(12px) → 0` + opacidade, palavra por palavra | Contadores, Compliance, países |
| 3D Hover | `perspective` + `rotateX/Y` pela posição do mouse + reflexo com gradiente radial | Cards de serviços e de contato |
| Image Mask Reveal | `clip-path: inset()/polygon()` animado no scroll | BTS, Vídeo, Fundador, imagens de seção |
| Floating Animation | Timelines `yoyo` com `sine.inOut` e durações aleatórias | Polígonos do hero, pinos, WhatsApp |
| Microinteractions | Hover de links, accordion, estados do formulário, botão copiar e-mail, toasts | Global |

**Acessibilidade e conforto:**

- Tudo respeita `prefers-reduced-motion`: as animações viram fades simples e o parallax é desligado.
- Em dispositivos touch, Mouse Follow, Magnetic e 3D Hover ficam desativados. O parallax de mouse é trocado por um parallax leve via giroscópio (opcional) ou removido.
- O conteúdo está no HTML desde o início. As animações apenas o revelam, o que preserva SEO e evita página vazia quando o JS falha.

---

## 4. Criação de imagens (geradas por IA, no padrão do fundo de referência)

**Estilo-base de todos os prompts:**

> *Architectural 3D render, deep navy blue (#13233C) night atmosphere, polished brushed gold and bronze structural lines (#C9A66B, #745039), subtle gold geometric polygon network, tiny star particles, cinematic low-angle, high contrast, premium corporate luxury, ultra detailed, 16:9, no text, no logos.*

| # | Imagem | Uso | Prompt específico (somado ao estilo-base) |
|---|---|---|---|
| 1 | Hero em camadas (3 a 4 PNGs separados) | Hero com parallax | Variação do fundo de referência, com céu, rede poligonal, torres e estrutura dourada em primeiro plano renderizadas **em camadas separadas com transparência** |
| 2 | Arquitetura | Card de serviço | Mesa de arquiteto com planta técnica em linhas douradas sobre papel navy, maquete metálica |
| 3 | BTS / galpão logístico | Destaque BTS | Galpão logístico moderno com docas, estrutura em linhas douradas, vista aérea ao entardecer |
| 4 | Operações financeiras / M&A | Card de serviço | Duas torres conectadas por pontes douradas, metáfora de fusão |
| 5 | Valuation / Due Diligence | Subserviço | Lupa dourada sobre gráficos holográficos em navy |
| 6 | Securitização & CRI | Subserviço | Blocos e cubos metálicos empilhados (eco do logo) formando um edifício |
| 7 | Varejo (shopping/strip center) | Preview de ativos | Fachada de strip center à noite com iluminação dourada |
| 8 | Hospital | Preview de ativos | Edifício hospitalar contemporâneo com heliponto, estilo navy+gold |
| 9 | Agronegócio / fazenda | Preview de ativos | Silos e campos vistos de cima ao pôr do sol, luz dourada |
| 10 | Porto / porto seco | Preview de ativos | Pátio de contêineres visto do alto, tons navy e bronze |
| 11 | Aeroporto | Preview de ativos | Pista e terminal à noite com luzes douradas |
| 12 | Casas e lofts no exterior | Seção Exterior | Villa de luxo com piscina ao anoitecer (Dubai/Europa), iluminação dourada |
| 13 | Globo em wireframe | Seção Exterior | Globo terrestre em linhas douradas sobre navy, pontos de luz nos países |
| 14 | Textura de metal escovado | Superfícies e cards | Textura seamless de bronze escovado e textura de navy com ruído fino |
| 15 | Imagem OG (1200×630) | Compartilhamento | Composição do hero com espaço para o logo |

- **Ferramenta:** gerador de imagens disponível no Antigravity/Gemini (Imagen) ou Midjourney/Firefly. É preciso garantir licença de uso comercial.
- **Pós-produção:** padronização de cor (LUT navy/dourado), recortes para as camadas do parallax e exportação em **AVIF + WebP** com `srcset` (640/1280/1920/2560).
- **Previews de ativos:** os 30 itens da lista podem compartilhar cerca de 10 imagens agrupadas por tipo, para não gerar 30 imagens.

---

## 5. Stack técnica

| Camada | Escolha | Motivo |
|---|---|---|
| Build | **Vite** + HTML/CSS/JS (ES modules) | Site estático e leve, sem a sobrecarga de um framework para uma one-page |
| Animação | **GSAP 3** + ScrollTrigger + SplitText (plugins gratuitos desde 2025) | Padrão de mercado para as 10 técnicas pedidas e com timeline precisa |
| Scroll suave | **Lenis** | Scroll inercial integrado ao ScrollTrigger, essencial para o parallax |
| CSS | CSS moderno (custom properties, `clamp()`, container queries) + PostCSS | Tokens da paleta e tipografia fluida |
| Vídeo | `<video>` nativo com MP4 H.264 + WebM VP9, `poster`, `preload="none"` e lazy | Sem player de terceiros |
| Formulário | Endpoint serverless (Formspree, Web3Forms ou função na hospedagem) + link de fallback para o WhatsApp | Sem backend próprio |
| Imagens | AVIF/WebP via `sharp` no build, `loading="lazy"` | Performance |
| Hospedagem | Vercel/Netlify/Cloudflare Pages (ou a hospedagem atual do domínio wnkcorporate.com.br) | HTTPS, CDN e deploy por git |

### 5.1 Estrutura de pastas proposta

```
wnkcorporate/
├── _referencias/            # arquivos originais (PDFs, jpegs, mp4) movidos para cá
├── site/
│   ├── index.html
│   ├── politica-de-privacidade.html
│   ├── public/
│   │   ├── video/wnk-institucional.{mp4,webm} + poster.avif
│   │   ├── img/{hero,servicos,ativos,exterior,clientes}/
│   │   ├── brand/{logo-dark.svg, logo-light.svg, simbolo.svg, favicon.svg, og.jpg}
│   │   └── fonts/
│   ├── src/
│   │   ├── styles/{tokens.css, base.css, components/*.css, sections/*.css}
│   │   ├── js/
│   │   │   ├── main.js            # boot, Lenis e registro de plugins
│   │   │   ├── core/{cursor.js, magnetic.js, tilt3d.js, parallax.js, reveal.js, splitText.js, floating.js, maskReveal.js}
│   │   │   └── sections/{preloader.js, hero.js, manifesto.js, servicos.js, video.js, ativos.js, exterior.js, clientes.js, contato.js}
│   │   └── data/{servicos.json, ativos.json, paises.json, clientes.json}
│   └── vite.config.js
└── PLANO_SITE_WNK_CORPORATE.md
```

O conteúdo fica em JSON (serviços, ativos, países e clientes), o que facilita atualizar sem mexer no layout.

---

## 6. SEO, performance, acessibilidade e LGPD

- **SEO:** `title`/`description` por página, Open Graph e Twitter Card, schema.org `RealEstateAgent` + `Organization` + `Person` (Rodrigo), sitemap.xml, robots.txt, HTML semântico com um único H1.
- **Palavras-chave-alvo:** build to suit, sale and leaseback, galpões logísticos, imóveis corporativos, M&A imobiliário, valuation imobiliário, CRI, imóveis no exterior.
- **Metas de performance:** Lighthouse ≥ 90 em mobile, LCP < 2,5 s, CLS < 0,1. O hero usa AVIF com preload; GSAP é carregado com `defer`; o vídeo só carrega sob demanda.
- **Acessibilidade:** contraste AA (o dourado `#C9A66B` sobre `#0A1426` passa em texto grande; texto corrido usa `#E3DED8`), foco visível, navegação por teclado no menu, accordion e modal, `aria-label` nos ícones e legendas no vídeo (gerar .vtt).
- **LGPD:** banner de cookies (somente se houver analytics), política de privacidade e checkbox de consentimento no formulário.
- **Analytics (opcional):** GA4 ou Plausible, com eventos de clique no WhatsApp, envio de formulário e play do vídeo.

---

## 7. Fases de implementação

| Fase | Entregas | Status | Critério de aceite / Situação atual |
|---|---|---|---|
| **1. Setup e marca** | Design System, tokens CSS, paleta Midnight Navy & Gold, fontes Google Fonts (Cormorant, Montserrat, Inter), logo e monograma | **Concluído** | Tokens e variáveis CSS com suporte completo a tema escuro (default) e tema claro |
| **2. Imagens & Mídia** | Tratamento de imagens (arquitetura, BTS, M&A, internacional, mosaico de clientes, hero), vídeo institucional MP4 integrado com poster | **Concluído** | Todas as mídias carregando em `assets/images/` e `assets/video/wnk_institucional.mp4` sem erros 404 |
| **3. Estrutura e conteúdo** | HTML semântico com todas as seções (Hero, Sobre/Manifesto, Serviços, BTS, Ativos, Exterior, Metodologia, Compliance, Marcas, Liderança, Contato, Rodapé e Política de Privacidade LGPD) | **Concluído** | 100% responsivo, hierarquia H1-H3 correta, acessibilidade com ARIA labels |
| **4 & 5. Interatividade & i18n** | Motor multilíngue (PT/EN), alternador Dark/Light, abas de ativos (Varejo x Investimentos), player customizado de vídeo, modal interativo de clientes, WhatsApp flutuante, atalhos de teclado (ESC) | **Concluído** | Validado no navegador com 0 erros de console e transições fluidas |
| **6. Formulário e integrações** | Formulário executivo com validação, consentimento LGPD, feedback Toast e integração de envio via `mailto:wnkcorporate@wnkcorporate.com.br` e WhatsApp | **Concluído** | Validação de campos obrigatórios e fallback funcional ativo |
| **0. Validação de Negócio** | Definição das pendências com o cliente (endereço, confirmação de razão social, lista oficial de parceiros, credenciais) | **Pendente com cliente** | Ver itens da Seção 8 |
| **7. QA & Performance** | Teste em múltiplos navegadores, validação de responsividade e contraste | **Avançado** | Testado e verificado via subagente de navegador com sucesso |
| **8. Deploy Oficial** | Publicação em produção no domínio `wnkcorporate.com.br`, SSL, configuração de DNS | **Aguardando cliente** | Pronto para build/publicação assim que definido o provedor de hospedagem |

---

## 8. Definições e Alinhamento com o Cliente

1. **Endereço físico:** **Não incluir endereço físico.** O site adota cobertura institucional ampla: *"Atendimento em todo o Brasil e no Exterior"*, evitando vincular localidade fixa provisória.
2. **Razão social:** **Atualizada.** Razão social oficial: `WNK Corporate Gestão de Imóveis` (CNPJ 20.929.539/0001-37 e CRECI 32.390-J).
3. **LinkedIn:** **Botão adicionado.** Incluído nas barras de redes sociais (seção de contato e rodapé), configurado provisoriamente sem redirecionamento externo até fornecimento da URL final.
4. **Foto executiva:** **Monograma mantido.** Seção de liderança utiliza monograma executivo `RPL` com credenciais oficiais (CRECI 63.893-F / CAU A136977-6 / CREA 260562967-8). A foto em estúdio será inserida após aprovação do cliente.
5. **Hospedagem & Domínio:** O domínio `wnkcorporate.com.br` está registrado, mas o cliente não tem acesso ao painel de hospedagem atual. Será configurada uma nova infraestrutura (Vercel, Cloudflare Pages ou Netlify) e o DNS será apontado pelo Registro.br assim que o acesso for recuperado ou transferido.
6. **Clientes & Parceiros:** Mosaico oficial de 120 marcas mantido com recurso interativo de ampliação (modal) e duplo marquee contínuo das marcas notáveis.
7. **Idiomas:** Implementado motor nativo bilíngue completo (Português / Inglês) com alternância instantânea sem recarregamento.

---

**Situação da Entrega:** O site está 100% implementado, responsivo, polido visualmente e pronto para apresentação ao cliente no ambiente local ou homologação.
