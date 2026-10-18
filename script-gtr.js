/**
 * WNK CORPORATE — PROTÓTIPO 2 (ESTILO BOUTIQUE FARIA LIMA / GTR INVESTIMENTOS)
 * Core JavaScript: i18n, Scroll Header, Track Record Carousel & Contact Form
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. HEADER SCROLL EFFECT
  const header = document.querySelector(".header-gtr");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 2. TRACK RECORD HORIZONTAL CAROUSEL CONTROLS
  const track = document.getElementById("casesTrack");
  const btnPrev = document.getElementById("btnCasesPrev");
  const btnNext = document.getElementById("btnCasesNext");

  if (track && btnPrev && btnNext) {
    btnPrev.addEventListener("click", () => {
      const cardWidth = track.querySelector(".case-card-snap")?.offsetWidth || 350;
      track.scrollBy({ left: -(cardWidth + 24), behavior: "smooth" });
    });

    btnNext.addEventListener("click", () => {
      const cardWidth = track.querySelector(".case-card-snap")?.offsetWidth || 350;
      track.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
    });
  }

  // 2.1 CORPORATE ASSET CARDS CAROUSEL CONTROLS
  const corpTrack = document.getElementById("gtrCorpTrack");
  const corpPrev = document.getElementById("gtrCorpPrev");
  const corpNext = document.getElementById("gtrCorpNext");
  if (corpTrack && corpPrev && corpNext) {
    corpPrev.addEventListener("click", () => {
      corpTrack.scrollBy({ left: -320, behavior: "smooth" });
    });
    corpNext.addEventListener("click", () => {
      corpTrack.scrollBy({ left: 320, behavior: "smooth" });
    });
  }

  // 3. MULTILINGUAL SUPPORT (PT / EN)
  const translations = {
    pt: {
      "nav.home": "Home",
      "nav.about": "Sobre a WNK",
      "nav.services": "Serviços",
      "nav.track": "Track Record",
      "nav.pillars": "Diferenciais",
      "nav.contact": "Contato",

      "hero.title": "WNK Corporate: Sua boutique de investimentos e soluções imobiliárias especializada em operações de Built to Suit, Sale & Leaseback, M&A e Desenvolvimento de Ativos.",
      "hero.b1": "CRECI 32.390-J",
      "hero.b2": "Arquitetura CAU / CREA",
      "hero.b3": "Brasil & Exterior",

      "manifesto.text": "Com uma trajetória multidisciplinar que une corretagem técnica, arquitetura e engenharia financeira, a WNK Corporate estrutura negócios imobiliários de alto impacto no Brasil e no exterior.",

      "stat1.num": "+100",
      "stat1.title": "Empresas Atendidas",
      "stat1.desc": "Relacionamento sólido com os principais players e fundos do mercado.",

      "stat2.num": "30+",
      "stat2.title": "Segmentos de Ativos",
      "stat2.desc": "Do varejo capilarizado aos complexos industriais e de grande porte.",

      "stat3.num": "8+",
      "stat3.title": "Países com Operações",
      "stat3.desc": "Presença internacional em investimentos, residências de luxo e lofts.",

      "stat4.num": "10+10",
      "stat4.title": "Anos em Contratos BTS",
      "stat4.desc": "Segurança jurídica em contratos de longo prazo com grandes grupos.",

      "serv.label": "Soluções Estratégicas",
      "serv.title_prefix": "Conheça as soluções da WNK que unem expertise técnica e financeira para ",
      "serv.title_highlight": "destravar o valor máximo de cada patrimônio.",
      "serv.subtitle": "Nosso portfólio de serviços inclui fusões e aquisições (M&A), operações de Sale & Leaseback, contratos Built to Suit (BTS), desenvolvimento de projetos e parametrização urbana com CAU e CREA, além de securitização e crédito estruturado.",

      "serv1.tag": "Imobiliário Corporativo",
      "serv1.title": "Built to Suit (BTS) & Logística",
      "serv1.desc": "Estruturação e participação em concorrências para operações de BTS no Brasil e exterior com crossdocking, câmaras frias e contratos 10+10 anos.",

      "serv2.tag": "Engenharia Financeira",
      "serv2.title": "Fusões e Aquisições (M&A)",
      "serv2.desc": "Assessoria completa buy-side e sell-side, due diligence e cruzamento de dados de mercado para valuation justo e ganho de escala.",

      "serv3.tag": "Técnico & Urbanístico",
      "serv3.title": "Arquitetura & Viabilidade",
      "serv3.desc": "Desenvolvimento técnico e visão urbanística com registros CAU e CREA, antecipando ocupação, zonamento e rentabilidade patrimonial.",

      "serv4.tag": "Desmobilização",
      "serv4.title": "Sale & Leaseback",
      "serv4.desc": "Desmobilização patrimonial para injeção de liquidez imediata no caixa da empresa, mantendo a operação no imóvel com contrato longo.",

      "pillars.title": "Construímos confiança com base em rigor técnico e visão estratégica.",
      "pillars.desc": "Nosso propósito é oferecer soluções de investimentos e ativos imobiliários que unem precisão técnica, segurança jurídica e alta rentabilidade. Atuamos com solidez institucional para conectar grandes oportunidades aos investidores certos.",

      "p1.title": "Expertise Multidisciplinar",
      "p1.desc": "Integração rara entre corretagem especializada, arquitetura com CAU/CREA e inteligência financeira.",

      "p2.title": "Agilidade e Precisão",
      "p2.desc": "Auditoria prévia (Due Diligence) de ativos e análise aprofundada para mitigar riscos contratuais.",

      "p3.title": "Soluções Sob Medida",
      "p3.desc": "Desenvolvimento sob encomenda para empresas de varejo, atacado, logística e agronegócio.",

      "p4.title": "Ética & Compliance",
      "p4.desc": "Práticas rigorosas anticorrupção, PLD e máxima transparência em cada etapa transacionada.",

      "cases.title_prefix": "Destaques de operações que reforçam nossa ",
      "cases.title_highlight": "experiência e a confiança",
      "cases.title_suffix": " de investidores em todo o Brasil.",

      "contact.title": "Inicie sua Negociação com a WNK",
      "contact.desc": "Nossa equipe multidisciplinar está pronta para avaliar sua demanda patrimonial com discrição absoluta e agilidade corporativa.",
      "contact.submit": "Solicitar Atendimento Estratégico",
      "contact.toast": "Mensagem registrada com sucesso! Abrindo e-mail para wnkcorporate@wnkcorporate.com.br..."
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About WNK",
      "nav.services": "Services",
      "nav.track": "Track Record",
      "nav.pillars": "Pillars",
      "nav.contact": "Contact",

      "hero.title": "WNK Corporate: Your investment and real estate boutique specializing in Built to Suit, Sale & Leaseback, M&A and Corporate Asset Development.",
      "hero.b1": "CRECI 32.390-J Certified",
      "hero.b2": "Architecture CAU / CREA",
      "hero.b3": "Brazil & Global Markets",

      "manifesto.text": "With a multidisciplinary trajectory bridging institutional brokerage, architectural intelligence, and financial engineering, WNK Corporate structures high-yield deals across Brazil and worldwide.",

      "stat1.num": "+100",
      "stat1.title": "Corporate Clients",
      "stat1.desc": "Solid track record and trusted relationships with major players and investment funds.",

      "stat2.num": "30+",
      "stat2.title": "Asset Classes",
      "stat2.desc": "From prime retail and logistics to heavy industrial and large-scale complexes.",

      "stat3.num": "8+",
      "stat3.title": "Global Markets",
      "stat3.desc": "International operations in investments, luxury villas, and prime urban lofts.",

      "stat4.num": "10+10",
      "stat4.title": "Years in BTS Leases",
      "stat4.desc": "Legal certainty and long-term predictable cash flow with institutional leaders.",

      "serv.label": "Strategic Solutions",
      "serv.title_prefix": "Discover WNK solutions combining technical and financial intelligence to ",
      "serv.title_highlight": "unlock the maximum valuation of every asset.",
      "serv.subtitle": "Our service portfolio includes M&A advisory, Sale & Leaseback structuring, Built to Suit (BTS) logistics hubs, master planning and urban zoning backed by CAU and CREA, plus structured credit & CRI.",

      "serv1.tag": "Corporate Real Estate",
      "serv1.title": "Built to Suit (BTS) & Logistics",
      "serv1.desc": "Structuring competitive tenders for BTS operations across Brazil and abroad, featuring cold storage, crossdocking, and 10+10 year leases.",

      "serv2.tag": "Financial Engineering",
      "serv2.title": "Mergers & Acquisitions (M&A)",
      "serv2.desc": "Comprehensive buy-side and sell-side advisory, due diligence, and financial modeling for fair valuation and market scale.",

      "serv3.tag": "Technical & Urban",
      "serv3.title": "Architecture & Feasibility",
      "serv3.desc": "Technical executive design and urban feasibility with CAU and CREA credentials, optimizing spatial efficiency and yields.",

      "serv4.tag": "Capital Unlocking",
      "serv4.title": "Sale & Leaseback",
      "serv4.desc": "Capital unlocking to release immediate operational liquidity while retaining long-term operational tenancy.",

      "pillars.title": "Building trust anchored in technical rigor and strategic vision.",
      "pillars.desc": "Our mission is delivering investment and real estate asset solutions combining technical mastery, legal security, and high performance. We act with institutional soundness to connect premium opportunities to qualified capital.",

      "p1.title": "Multidisciplinary Expertise",
      "p1.desc": "A unique synergy between specialized brokerage, licensed architecture (CAU/CREA), and investment finance.",

      "p2.title": "Agility & Due Diligence",
      "p2.desc": "Rigorous pre-diligence and forensic document analysis to shield investor capital in every mandate.",

      "p3.title": "Tailor-Made Assets",
      "p3.desc": "Custom facility development for retail chains, wholesale, industrial logistics, and agribusiness.",

      "p4.title": "Ethics & Compliance",
      "p4.desc": "Strict anti-corruption practices, anti-money laundering controls, and transparent governance.",

      "cases.title_prefix": "Transaction highlights that reinforce our ",
      "cases.title_highlight": "experience and trust",
      "cases.title_suffix": " with institutional investors across Brazil.",

      "contact.title": "Initiate Your Deal With WNK",
      "contact.desc": "Our multidisciplinary team is prepared to analyze your real estate mandate with absolute discretion and speed.",
      "contact.submit": "Request Strategic Advisory",
      "contact.toast": "Message registered successfully! Opening email to wnkcorporate@wnkcorporate.com.br..."
    }
  };

  let currentLang = "pt";

  function applyLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang] || translations.pt;

    document.querySelectorAll("[data-gtr-i18n]").forEach(el => {
      const key = el.getAttribute("data-gtr-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll(".lang-btn-gtr").forEach(btn => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  document.querySelectorAll(".lang-btn-gtr").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      applyLanguage(lang);
    });
  });

  // 4. CONTACT FORM
  const form = document.getElementById("gtrContactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("gtrName")?.value.trim();
      const email = document.getElementById("gtrEmail")?.value.trim();
      const phone = document.getElementById("gtrPhone")?.value.trim();
      const interest = document.getElementById("gtrInterest")?.value;
      const message = document.getElementById("gtrMessage")?.value.trim();

      const topic = interest || (currentLang === "pt" ? "as soluções corporativas da WNK Corporate" : "WNK Corporate solutions");
      const wppText = currentLang === "pt"
        ? `Olá! Gostaria de mais informações sobre ${topic}.\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Telefone:* ${phone}\n*Detalhes:* ${message}`
        : `Hello! I would like more information about ${topic}.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Details:* ${message}`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=5511955805749&text=${encodeURIComponent(wppText)}`;
      window.open(whatsappUrl, "_blank");
      form.reset();
    });
  }
});
