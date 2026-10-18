# Plano de Implementação — Novo Protótipo WNK Corporate (Estilo GTR Investimentos)

> **Documento:** Proposta de Segundo Protótipo para Escolha do Cliente  
> **Referência Visual:** [GTR Investimentos](https://gtrinvestimentos.com.br/)  
> **Status:** ⏳ Aguardando Aprovação do Usuário para Início do Desenvolvimento  
> **Data:** 13/10/2026  

---

## 1. Diagnóstico da Referência (GTR Investimentos)

Analisamos o código-fonte, a arquitetura de layout e o comportamento visual de `https://gtrinvestimentos.com.br/`. Os pilares que definem a identidade desse site são:

### 1.1 Estilo Visual & Tom de Voz
- **Conceito:** *Boutique de Investimentos / Real Estate Investment Banking* (estilo Faria Lima / Wall Street).
- **Abordagem estética:** Limpa, sóbria, editorial e corporativa, com muito espaço em branco, tipografia imponente e fotografia arquitetônica de grande escala.
- **Diferença em relação ao Protótipo 1 (Dark Luxury Gold):**
  - **Protótipo 1:** Predominantemente escuro (*midnight navy* contínuo), muito metálico, acentos dourados fortes, visual noturno de alta joalheria/luxo.
  - **Protótipo 2 (Estilo GTR):** Equilíbrio claro/escuro. Hero imersivo com imagem full-bleed, seções centrais em fundo branco com cartões nítidos de bordas finas, blocos institucionais em azul profundo (`#091134`), e foco em tipografia editorial clássica.

### 1.2 Paleta de Cores Extraída da GTR
| Cor / Token | Hex / Valor | Aplicação no Protótipo 2 |
|---|---|---|
| **Deep Faria Lima Navy** | `#091134` / `#1A2742` | Rodapé, bloco de pilares institucionais e tipografia principal |
| **Steel Blue / Ice Accent** | `#84A0BA` / `#E0ECF5` | Realces de texto, linhas de hover do menu e orbs luminosos |
| **Pure White** | `#FFFFFF` | Fundo das seções de métricas, serviços e cases |
| **Off-White / Soft Gray** | `#F8FAFC` / `#EEEEEE` | Bordas ultrafinas de cards e fundos de apoio |
| **Neutral Grays** | `#7F7F7F` / `#757575` | Parágrafos de leitura e metadados |
| **WNK Brand Touch** | `#C9A66B` / `#8B0A0A` | Toque sutil do dourado/vermelho da WNK no monograma e em badges |

### 1.3 Tipografia Marcante
- **Títulos e Números:** **Rockwell** / **Rockwell Nova** (ou equivalente clássico *Slab Serif* como *Alfa Slab* / *Arvo* / *Zilla Slab* carregada via Google Fonts), transmitindo solidez institucional de bancos de investimento.
- **Textos de Apoio e Rótulos:** **Inter** ou **Montserrat** em caixa alta, tamanho compacto (`12px` - `14px`) com tracking espaçado.

---

## 2. Arquitetura da Página (Seção a Seção)

O novo protótipo será construído como uma experiência completa, aplicando 100% dos dados oficiais da **WNK Corporate**:

```
[01] HEADER GLASSPHISM (Translúcido com blur, menu minimalista com hover underline)
[02] HERO CINEMATOGRÁFICO FULL-BLEED (Headline imponente no canto inferior esquerdo)
[03] MANIFESTO EDITORIAL (Tipografia grande em degradê Faria Lima Navy)
[04] BIG NUMBERS & FOTO VERTICAL (Métricas comprovadas da WNK + foto executiva de ativo)
[05] PORTFÓLIO DE SOLUÇÕES (Showcase em cards verticais imersivos de serviços)
[06] PILARES INSTITUCIONAIS #091134 (Bloco escuro com esferas glow e 4 diferenciais WNK)
[07] TRACK RECORD & CASES HORIZONTAIS (Carrossel snap de operações BTS, S&LB, M&A e Global)
[08] MOSAICO CLEAN DE PARCEIROS (+120 marcas atendidas em apresentação sóbria)
[09] FORMULÁRIO EXECUTIVO & CONTATO (Estilo clean sob medida com campos corporativos)
[10] RODAPÉ INSTITUCIONAL 4 COLUNAS (Explore, Serviços, Atendimento e Contato)
[11] BOTÃO WHATSAPP DISCRETO FARIA LIMA (Design circular minimalista)
```

---

## 3. Detalhamento dos Componentes

### 3.1 Header Glassmorphism
- Barra fixa transparente com vidro fosco (`backdrop-blur: 10px`, fundo `rgba(255, 255, 255, 0.15)`).
- Logotipo oficial WNK posicionado com destaque à esquerda.
- Navegação direta à direita: `HOME` · `SOBRE` · `SERVIÇOS` · `TRACK RECORD` · `COMPLIANCE` · `CONTATO`.
- Efeito hover: linha inferior que se expande do centro para os lados na cor `#84A0BA`.
- Suporte a seletor de idioma sutil (`PT | EN`).

### 3.2 Hero Section (Boutique Style)
- Imagem de fundo full-screen (`100vh`) com tratamento de luz crepuscular/noturna corporativa.
- Posicionamento da Headline: no **terço inferior esquerdo**, em fonte Slab Serif (`46px`), cor branca, sem caixas pesadas competindo:
  > *"WNK Corporate: Sua boutique imobiliária especializada em operações de Built to Suit, Sale & Leaseback, Desenvolvimento de Ativos, M&A e Arquitetura Corporativa."*

### 3.3 Manifesto Editorial
- Título em grande formato com degradê textual `#1A2742 ➔ #84A0BA`:
  > *"Com uma trajetória multidisciplinar que une corretagem técnica, arquitetura e engenharia financeira, a WNK Corporate estrutura negócios imobiliários de alto impacto no Brasil e no exterior."*

### 3.4 Grid de Métricas & Imagem de Trajetória
- Divisão em duas colunas:
  - **Esquerda:** Foto vertical de arquitetura corporativa moderna com cantos retos/sutis.
  - **Direita:** Grade 2×2 de cartões brancos com borda cinza fina (`#EEE`):
    1. **+100** | *Empresas Atendidas* | Relacionamento sólido com os principais players e fundos do mercado.
    2. **30+** | *Segmentos de Ativos* | Do varejo capilarizado aos complexos industriais e de grande porte.
    3. **8+** | *Países com Negócios* | Presença internacional em investimentos, residências de luxo e lofts.
    4. **10+10** | *Anos em Contratos BTS* | Segurança jurídica em contratos de longo prazo com grandes grupos.

### 3.5 Showcase de Serviços (Estilo GTR Dual Slide)
- Apresentação em cards verticais de `634px` de altura com imagem fotográfica em tela cheia, gradiente escuro na base e botão sutil `"SAIBA MAIS ➔"`:
  - **Card 1: Operações Imobiliárias & BTS:** Concorrências competitivas, crossdocking, câmaras frias e contratos 10+10.
  - **Card 2: Engenharia Financeira & M&A:** Fusões, aquisições, valuation e due diligence para consolidação empresarial.
  - **Card 3: Arquitetura & Viabilidade:** Estudos técnicos, viabilidade urbanística e projetos com registros CAU e CREA.
  - **Card 4: Sale & Leaseback:** Desmobilização patrimonial para injeção de liquidez imediata no caixa da empresa.

### 3.6 Bloco de Pilares "#091134" com Efeito Glow
- Seção institucional em azul marinho profundo (`#091134`) com duas orbs luminosas em blur azul claro (`#84A0BA` / `#E0ECF5`):
  - Lado esquerdo: *"Construímos confiança com base em rigor técnico e visão estratégica."* + texto de propósito da WNK.
  - Lado direito: 4 cartões com fundo translúcido `rgba(255, 255, 255, 0.05)`, ícones lineares brancos:
    - *Excelência Técnica Multidisciplinar* (CRECI 32.390-J, CAU e CREA)
    - *Agilidade e Precisão em Cada Negociação* (Due diligence aprofundada)
    - *Soluções Customizadas de Ativos* (Projetos BTS sob medida)
    - *Ética, Transparência & Compliance* (Conduta anticorrupção e PLD)

### 3.7 Carrossel Snap de Track Record / Destaques
- Carrossel horizontal deslizável com cartões imersivos:
  - **BUILT TO SUIT** — Centros Logísticos com Crossdocking e Câmaras Climatizadas
  - **SALE & LEASEBACK** — Desmobilização de Ativos Industriais e Comerciais
  - **M&A CORPORATIVO** — Fusões e Aquisições no Setor de Educação, Saúde e Varejo
  - **INTERNACIONAL** — Casas, Lofts e Ativos em Miami, Dubai, Portugal e Uruguai

### 3.8 Rodapé Institucional
- 4 colunas clássicas inspiradas na GTR:
  - **EXPLORE:** Home, Sobre, Serviços, Track Record, Compliance, Política de Privacidade.
  - **SERVIÇOS:** BTS, Sale & Leaseback, Arquitetura, M&A, Valuation, Securitização & CRI.
  - **COBERTURA:** São Paulo - SP · Atendimento Corporativo em todo o Brasil e no Exterior.
  - **CONTATO:** WhatsApp: +55 (11) 95580-5749 · E-mails: wnkcorporate@wnkcorporate.com.br · wnkcorporate@gmail.com.
- Redes sociais, razão social completa (`WNK Corporate Gestão de Imóveis LTDA`), CNPJ e CRECI.

---

## 4. Estratégia de Implementação e Convivência dos Protótipos

Para que o cliente possa **comparar lado a lado e escolher** a melhor opção sem perder o que já foi aprovado:

1. **Protótipo 1 (Atual - Dark Luxury Gold):**
   - Permanece intacto em `index.html`.
2. **Protótipo 2 (Novo - Estilo GTR Boutique):**
   - Será implementado em arquivo dedicado: `prototipo-gtr.html` (com `styles-gtr.css` e `script-gtr.js`).
   - Terá uma barra superior discreta de alternância (ex: *"Visualizando: Protótipo 2 (Estilo GTR) — Clique para ver o Protótipo 1 (Dark Luxury)"*), permitindo que você envie um único link ao cliente e ele transite entre os dois modelos com 1 clique!
3. **Disponibilização no GitHub Pages:**
   - Ambos os protótipos estarão disponíveis no GitHub Pages:
     - Protótipo 1: `https://alvesvictor146.github.io/wnkcorporate/`
     - Protótipo 2: `https://alvesvictor146.github.io/wnkcorporate/prototipo-gtr.html`

---

## 5. Próximos Passos (Aguardando Aprovação)

Assim que você aprovar este plano, iniciarei imediatamente a execução do **Protótipo 2**:
1. Criação do arquivo `prototipo-gtr.html` com o HTML semântico e as 10 seções da referência GTR.
2. Criação do `styles-gtr.css` com a paleta Faria Lima (`#091134`, `#84A0BA`, `#FFFFFF`), tipografia Rockwell e efeitos de vidro/glow.
3. Criação do `script-gtr.js` com o carrossel snap, sliders de serviços, i18n bilíngue e alternador de protótipos.
4. Teste visual em navegador (desktop e mobile).
5. Commit e push para o repositório GitHub para publicação automática no GitHub Pages.
