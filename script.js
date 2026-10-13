/**
 * WNK CORPORATE — CORE SCRIPTS
 * Multilingual Engine (PT/EN), Light/Dark Theme Switcher,
 * Interactive Tabs, Custom Video Controller, Contact Form & UI Micro-interactions.
 */

// ==========================================================================
// 1. DICIONÁRIO DE IDIOMAS (I18N: PORTUGUÊS / ENGLISH)
// ==========================================================================
const translations = {
  pt: {
    // Nav
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.bts": "BTS",
    "nav.assets": "Ativos",
    "nav.global": "Exterior",
    "nav.video": "Vídeo",
    "nav.clients": "Parceiros",
    "nav.compliance": "Compliance",
    "nav.contact": "Contato",
    "nav.cta": "Fale Conosco",

    // Hero
    "hero.badge": "Conexão direta com os melhores negócios imobiliários",
    "hero.title": "Estruturação, Fusões e Ativos Corporativos de Alto Padrão",
    "hero.desc": "A WNK Corporate integra corretagem imobiliária especializada, projetos de arquitetura e engenharia financeira em soluções sob medida no Brasil e no exterior.",
    "hero.cta_primary": "Fale com um Especialista",
    "hero.cta_secondary": "Conheça os Serviços",
    "hero.cred_creci": "CRECI 32.390-J",
    "hero.cred_cau": "Arquitetura CAU / CREA",
    "hero.cred_global": "Operações Globais",

    // Manifesto
    "manifesto.label": "Posicionamento Estratégico",
    "manifesto.quote": "“A WNK Corporate é a conexão direta que leva você aos melhores negócios do mercado imobiliário.”",
    "manifesto.desc": "Sua parceira estratégica no mundo dos negócios corporativos. Atuamos com agilidade e máxima eficiência, conectando dos grandes players institucionais aos microempreendedores em múltiplos setores: corporativo, varejo, atacado e agronegócio.",
    "stat.companies": "+100",
    "stat.companies_lbl": "Empresas atendidas e parceiros",
    "stat.assets": "30+",
    "stat.assets_lbl": "Segmentos de ativos comercializados",
    "stat.countries": "8+",
    "stat.countries_lbl": "Países com negócios e investimentos",
    "stat.contracts": "10+10",
    "stat.contracts_lbl": "Anos em contratos estruturados BTS",

    // Serviços
    "services.label": "Expertise Multidisciplinar",
    "services.title": "Soluções Integradas de Ponta a Ponta",
    "services.subtitle": "Reunimos corretagem especializada, arquitetura técnica e operações financeiras para destravar o valor máximo de cada patrimônio.",
    "serv1.tag": "Pilar Técnico",
    "serv1.title": "Arquitetura & Viabilidade",
    "serv1.desc": "Desenvolvimento técnico e visão urbanística com registros CAU e CREA, antecipando parâmetros de ocupação e rentabilidade.",
    "serv1.item1": "Desenvolvimento de projetos arquitetônicos e executivos",
    "serv1.item2": "Definição de estudo aprofundado de viabilidade técnica",
    "serv1.item3": "Adequação normativa e parametrização urbana",

    "serv2.tag": "Pilar Comercial",
    "serv2.title": "Operações Imobiliárias",
    "serv2.desc": "Estruturação sob medida de grandes ativos, desmobilização de capital e intermediação nos mais sofisticados modelos corporativos.",
    "serv2.item1": "Desenvolvimento de BTS (Build to Suit) com câmaras frias e crossdocking",
    "serv2.item2": "Operações de Sale & Leaseback para liberação de liquidez",
    "serv2.item3": "Valuation e Due Diligence com auditoria completa de ativos",
    "serv2.item4": "Securitização de recebíveis imobiliários & CRI",

    "serv3.tag": "Pilar Estratégico",
    "serv3.title": "Operações Financeiras & M&A",
    "serv3.desc": "Fusões e aquisições com foco em ganho de escala, sinergia de mercado e absorção de concorrência com absoluta confidencialidade.",
    "serv3.item1": "Estruturação completa de M&A (Fusões e Aquisições)",
    "serv3.item2": "Assessoria Buy-Side e Sell-Side especializada",
    "serv3.item3": "Cruzamento de métricas financeiras para valor justo de venda",

    // BTS
    "bts.label": "Especialidade Institucional",
    "bts.title": "Desenvolvimento BTS (Build to Suit)",
    "bts.desc": "A WNK Corporate, em conjunto com seus parceiros do mercado imobiliário, estrutura e participa de concorrências para viabilizar operações de BTS no Brasil e no Exterior. Criamos ativos na medida exata da operação do cliente.",
    "bts.f1_title": "Concorrências Competitivas",
    "bts.f1_desc": "Participação em disputas e licitações privadas no Brasil e exterior.",
    "bts.f2_title": "Crossdocking & Armazenagem",
    "bts.f2_desc": "Layouts logísticos inteligentes para alta rotatividade de cargas.",
    "bts.f3_title": "Câmaras Frias & Climatização",
    "bts.f3_desc": "Infraestrutura termoisolada para cadeias farmacêuticas e alimentícias.",
    "bts.f4_title": "Contratos Longos 10+10 Anos",
    "bts.f4_desc": "Segurança jurídica e fluxo de caixa contínuo com os melhores players.",
    "bts.badge_title": "Contratos Institucionais 10+10 Anos",
    "bts.badge_sub": "Projetos customizados seguindo os padrões do seu negócio",

    // Vídeo
    "video.label": "Apresentação Oficial",
    "video.title": "WNK Corporate em Movimento",
    "video.subtitle": "Assista ao nosso vídeo institucional e conheça nossa visão de mercado, agilidade e presença em múltiplos segmentos.",

    // Ativos
    "assets.label": "Portfólio Abrangente",
    "assets.title": "Segmentos de Ativos Comercializados",
    "assets.subtitle": "Dos grandes complexos industriais ao varejo capilarizado, atendemos demandas sob medida em mais de 30 categorias patrimoniais.",
    "assets.tab_retail": "Varejo & Retail (16)",
    "assets.tab_invest": "Investimentos & Large Scale (14)",

    // Exterior
    "global.label": "Presença Internacional",
    "global.title": "Imóveis e Oportunidades no Exterior",
    "global.desc": "Portfólio selecionado de casas, lofts e empreendimentos de alto padrão nos principais centros financeiros e destinos turísticos mundiais.",
    "global.p1": "Estados Unidos",
    "global.p2": "França",
    "global.p3": "Portugal",
    "global.p4": "Dubai",
    "global.p5": "Abu Dhabi",
    "global.p6": "Espanha",
    "global.p7": "Uruguai",
    "global.p8": "Argentina",
    "global.card_title": "Casas e Lofts Exclusivos",
    "global.card_sub": "Assessoria integral para aquisição, estruturação e blindagem patrimonial internacional.",

    // Metodologia
    "process.label": "Rigor Operacional",
    "process.title": "Como Conduzimos os Negócios",
    "process.subtitle": "Processo disciplinado que protege o capital dos investidores e acelera a liquidez dos proprietários.",
    "step1.title": "01. Diagnóstico Inicial",
    "step1.desc": "Mapeamento aprofundado dos objetivos da empresa, vocação do imóvel e análise preliminar de viabilidade.",
    "step2.title": "02. Due Diligence",
    "step2.desc": "Auditoria minuciosa das certidões, passivos, contratos e saúde jurídica para blindar a transação.",
    "step3.title": "03. Valuation Preciso",
    "step3.desc": "Cruzamento de dados de mercado para estabelecer o valor justo do ativo ou negócio.",
    "step4.title": "04. Estruturação Técnica",
    "step4.desc": "Projetos de arquitetura, parâmetros urbanísticos e modelagem econômico-financeira sob medida.",
    "step5.title": "05. Negociação Qualificada",
    "step5.desc": "Apresentação sigilosa aos maiores players e condução de concorrências estruturadas.",
    "step6.title": "06. Fechamento & Compliance",
    "step6.desc": "Formalização de contratos de longo prazo com máxima segurança jurídica e ética irrepreensível.",

    // Compliance
    "compliance.label": "Governança & Integridade",
    "compliance.title": "Ética, Transparência & Compliance",
    "compliance.quote": "“Fazer negócios tendo conduta e ética, agindo da melhor forma com o cliente, respeitando a legislação e cumprindo as necessidades de cada órgão público, com seriedade dentro das leis para não haver atos de corrupção, suborno e tentativas de lavagem de dinheiro no mercado imobiliário. Estamos sempre atentos para fazer o negócio com a maior transparência possível.”",
    "compliance.p1": "Transparência Absoluta",
    "compliance.p2": "Anticorrupção & PLD",
    "compliance.p3": "Rigor Regulatório",
    "compliance.p4": "Conformidade Legal",

    // Clientes
    "clients.label": "Histórico de Confiança",
    "clients.title": "Empresas que Confiaram na WNK",
    "clients.subtitle": "Grandes corporações, fundos imobiliários e redes multinacionais com as quais realizamos negócios, concorrências e parcerias.",
    "clients.mosaic_cta": "Clique para ampliar o mosaico oficial de clientes",

    // Liderança
    "lead.label": "Direção Técnica",
    "lead.title": "Liderança com Visão Multidisciplinar",
    "lead.name": "Rodrigo Papp Lopes",
    "lead.roles": "Corretor de Imóveis & Arquiteto Urbanista",
    "lead.bio": "Profissional que une no mesmo ecossistema a visão técnica e espacial da Arquitetura com a assertividade da Corretagem Corporativa e a inteligência das Operações Financeiras de M&A. Especialista em conduzir negociações complexas com os principais players do Brasil e exterior.",
    "lead.creci": "CRECI: 63.893-F",
    "lead.cau": "CAU: A136977-6",
    "lead.crea": "CREA: 260562967-8",

    // Contato
    "contact.label": "Atendimento Direto",
    "contact.title": "Inicie sua Negociação Conosco",
    "contact.subtitle": "Nossa equipe está pronta para avaliar sua demanda patrimonial com total discrição e velocidade de resposta.",
    "contact.phone_lbl": "WhatsApp / Telefone Direto",
    "contact.email_lbl": "E-mail Corporativo Principal",
    "contact.email_alt_lbl": "E-mail de Apoio",
    "contact.address_lbl": "Cobertura & Atendimento",
    "contact.address_val": "Atendimento em todo o Brasil e no Exterior",
    "contact.form_title": "Solicitar Contato Estratégico",
    "contact.f_name": "Seu Nome Completo",
    "contact.f_company": "Empresa / Organização",
    "contact.f_email": "E-mail Corporativo",
    "contact.f_phone": "WhatsApp / Telefone com DDD",
    "contact.f_interest": "Área de Interesse Principal",
    "contact.f_interest_def": "Selecione a operação desejada...",
    "contact.f_opt_bts": "Desenvolvimento BTS (Build to Suit)",
    "contact.f_opt_mna": "Operações Financeiras & M&A",
    "contact.f_opt_logistics": "Galpões Logísticos / Indústria",
    "contact.f_opt_retail": "Varejo & Comercial",
    "contact.f_opt_global": "Imóveis no Exterior",
    "contact.f_opt_valuation": "Valuation & Due Diligence",
    "contact.f_opt_other": "Outros Segmentos Corporativos",
    "contact.f_msg": "Detalhes da Demanda / Mensagem",
    "contact.f_lgpd": "Concordo com o tratamento dos dados conforme a",
    "contact.f_lgpd_link": "Política de Privacidade (LGPD)",
    "contact.f_submit": "Enviar Mensagem pelo Site",
    "contact.f_or_wpp": "Ou fale diretamente no WhatsApp",

    // Footer
    "footer.desc": "Conexão direta com os melhores negócios do mercado imobiliário corporativo no Brasil e no exterior.",
    "footer.nav_title": "Navegação Rápida",
    "footer.serv_title": "Principais Serviços",
    "footer.legal_title": "Informações Corporativas",
    "footer.legal_razao": "WNK Corporate Gestão Imobiliária EIRELI - ME",
    "footer.legal_cnpj": "CNPJ: 20.929.539/0001-37",
    "footer.legal_creci": "CRECI: 32.390-J",
    "footer.rights": "Todos os direitos reservados.",
    "footer.privacy": "Política de Privacidade (LGPD)"
  },

  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.bts": "BTS",
    "nav.assets": "Asset Classes",
    "nav.global": "Global",
    "nav.video": "Video",
    "nav.clients": "Partners",
    "nav.compliance": "Compliance",
    "nav.contact": "Contact",
    "nav.cta": "Contact Us",

    // Hero
    "hero.badge": "Direct connection to prime real estate opportunities",
    "hero.title": "Structuring, M&A, and Prime Corporate Real Estate Assets",
    "hero.desc": "WNK Corporate integrates specialized real estate brokerage, architectural design, and financial engineering for institutional players and leading investors across Brazil and worldwide.",
    "hero.cta_primary": "Speak with an Expert",
    "hero.cta_secondary": "Explore Our Services",
    "hero.cred_creci": "CRECI 32.390-J Certified",
    "hero.cred_cau": "Architecture CAU / CREA",
    "hero.cred_global": "Global Transactions",

    // Manifesto
    "manifesto.label": "Strategic Positioning",
    "manifesto.quote": "“WNK Corporate is the direct connection leading you to the highest value real estate opportunities.”",
    "manifesto.desc": "Your strategic partner in commercial real estate. Operating with agile execution and institutional rigor, connecting major corporate players and entrepreneurs across corporate, retail, wholesale, and agribusiness sectors.",
    "stat.companies": "+100",
    "stat.companies_lbl": "Corporate clients and partners",
    "stat.assets": "30+",
    "stat.assets_lbl": "Commercial asset categories",
    "stat.countries": "8+",
    "stat.countries_lbl": "Countries with active operations",
    "stat.contracts": "10+10",
    "stat.contracts_lbl": "Years structured BTS contracts",

    // Serviços
    "services.label": "Multidisciplinary Expertise",
    "services.title": "End-to-End Integrated Solutions",
    "services.subtitle": "Bringing together prime brokerage, architectural intelligence, and financial operations to unlock the maximum valuation of every asset.",
    "serv1.tag": "Technical Pillar",
    "serv1.title": "Architecture & Feasibility",
    "serv1.desc": "Technical design and master planning backed by official CAU and CREA credentials, optimizing spatial efficiency and yields.",
    "serv1.item1": "Comprehensive executive and architectural project drafting",
    "serv1.item2": "In-depth economic and technical feasibility analysis",
    "serv1.item3": "Zoning parameterization and urban code compliance",

    "serv2.tag": "Commercial Pillar",
    "serv2.title": "Corporate Real Estate",
    "serv2.desc": "Tailor-made structuring of institutional assets, capital unlocking, and mediation in complex commercial transactions.",
    "serv2.item1": "Build to Suit (BTS) with crossdocking and temperature-controlled cold rooms",
    "serv2.item2": "Sale & Leaseback strategies for corporate liquidity release",
    "serv2.item3": "Rigorous valuation models and full due diligence audits",
    "serv2.item4": "Receivables securitization and real estate debt notes (CRI)",

    "serv3.tag": "Strategic Pillar",
    "serv3.title": "Financial Operations & M&A",
    "serv3.desc": "Mergers and acquisitions driving market consolidation, competitor integration, and diversification under strict non-disclosure.",
    "serv3.item1": "Full-cycle M&A structuring (Mergers & Acquisitions)",
    "serv3.item2": "Specialized Buy-Side and Sell-Side advisory",
    "serv3.item3": "Multi-variable financial modeling for fair market pricing",

    // BTS
    "bts.label": "Institutional Benchmark",
    "bts.title": "BTS Development (Build to Suit)",
    "bts.desc": "WNK Corporate, alongside institutional capital partners, structures and participates in selective bidding tenders to deliver turn-key BTS developments in Brazil and internationally. Tailored to client specifications.",
    "bts.f1_title": "Competitive Procurement",
    "bts.f1_desc": "Participation in private tenders and RFPs across Brazil and global hubs.",
    "bts.f2_title": "Crossdocking Logistics",
    "bts.f2_desc": "Engineered high-throughput sorting layouts for supply chains.",
    "bts.f3_title": "Cold Storage Capabilities",
    "bts.f3_desc": "Thermal-controlled facilities for pharmaceutical and grocery giants.",
    "bts.f4_title": "10+10 Year Long Leases",
    "bts.f4_desc": "Predictable long-term institutional cash flows and legal security.",
    "bts.badge_title": "10+10 Year Institutional Leases",
    "bts.badge_sub": "Custom developments built strictly to your operational blueprint",

    // Vídeo
    "video.label": "Official Showcase",
    "video.title": "WNK Corporate in Action",
    "video.subtitle": "Watch our institutional video and learn about our market agility and multi-sector reach.",

    // Ativos
    "assets.label": "Comprehensive Portfolio",
    "assets.title": "Asset Classes Commercialized",
    "assets.subtitle": "From mega-logistics campuses to prime high-street retail, handling institutional mandates across over 30 asset categories.",
    "assets.tab_retail": "Retail & Commercial (16)",
    "assets.tab_invest": "Investments & Large Scale (14)",

    // Exterior
    "global.label": "Global Reach",
    "global.title": "Prime Real Estate Worldwide",
    "global.desc": "Curated portfolio of prime mansions, lofts, and investments in top global financial hubs and luxury lifestyle markets.",
    "global.p1": "United States",
    "global.p2": "France",
    "global.p3": "Portugal",
    "global.p4": "Dubai",
    "global.p5": "Abu Dhabi",
    "global.p6": "Spain",
    "global.p7": "Uruguay",
    "global.p8": "Argentina",
    "global.card_title": "Exclusive Lofts & Luxury Villas",
    "global.card_sub": "Cross-border advisory for acquisition, structuring, and wealth preservation.",

    // Metodologia
    "process.label": "Operational Discipline",
    "process.title": "Our Execution Methodology",
    "process.subtitle": "A disciplined 6-stage lifecycle safeguarding capital and accelerating deal closings.",
    "step1.title": "01. Initial Diagnosis",
    "step1.desc": "Comprehensive scoping of business objectives, site analysis, and preliminary feasibility.",
    "step2.title": "02. Due Diligence",
    "step2.desc": "Rigorous investigation of legal, financial, and regulatory standing to derisk the deal.",
    "step3.title": "03. Precise Valuation",
    "step3.desc": "Multi-variable comparative modeling establishing justifiable fair asset pricing.",
    "step4.title": "04. Technical Structuring",
    "step4.desc": "Master architectural drafts, zoning approval mapping, and financial pro formas.",
    "step5.title": "05. Qualified Negotiations",
    "step5.desc": "Targeted outreach to top-tier institutional investors through private bid processes.",
    "step6.title": "06. Closing & Compliance",
    "step6.desc": "Contract finalization with bulletproof governance and ethical adherence.",

    // Compliance
    "compliance.label": "Governance & Integrity",
    "compliance.title": "Ethics, Transparency & Compliance",
    "compliance.quote": "“Conducting transactions with the utmost ethics, acting in the best interest of our clients, complying with every public authority and regulatory framework, strictly enforcing anti-bribery, anti-corruption, and anti-money laundering laws. Our commitment is complete transparency in every deal.”",
    "compliance.p1": "Absolute Transparency",
    "compliance.p2": "Anti-Corruption & AML",
    "compliance.p3": "Regulatory Compliance",
    "compliance.p4": "Legal Certainty",

    // Clientes
    "clients.label": "Track Record",
    "clients.title": "Companies That Trusted WNK",
    "clients.subtitle": "Global institutions, real estate investment trusts, and market leaders we have collaborated with.",
    "clients.mosaic_cta": "Click to expand the official corporate client mosaic",

    // Liderança
    "lead.label": "Technical Direction",
    "lead.title": "Leadership with Multidisciplinary Vision",
    "lead.name": "Rodrigo Papp Lopes",
    "lead.roles": "Licensed Real Estate Broker & Architect",
    "lead.bio": "A seasoned executive bridging the spatial and aesthetic precision of Architecture with commercial corporate brokerage and sophisticated M&A financial engineering. Leading high-stakes negotiations across Brazil and overseas.",
    "lead.creci": "CRECI: 63.893-F",
    "lead.cau": "CAU: A136977-6",
    "lead.crea": "CREA: 260562967-8",

    // Contato
    "contact.label": "Direct Advisory",
    "contact.title": "Initiate Your Deal With Us",
    "contact.subtitle": "Our team is prepared to analyze your corporate real estate mandate with full discretion and speed.",
    "contact.phone_lbl": "Direct Phone / WhatsApp",
    "contact.email_lbl": "Primary Corporate E-mail",
    "contact.email_alt_lbl": "Secondary Support E-mail",
    "contact.address_lbl": "Service & Coverage",
    "contact.address_val": "Nationwide & International Service",
    "contact.form_title": "Request Confidential Advisory",
    "contact.f_name": "Full Name",
    "contact.f_company": "Company / Organization",
    "contact.f_email": "Corporate E-mail",
    "contact.f_phone": "Phone / WhatsApp with Country Code",
    "contact.f_interest": "Primary Area of Interest",
    "contact.f_interest_def": "Select transaction type...",
    "contact.f_opt_bts": "Build to Suit (BTS) Development",
    "contact.f_opt_mna": "Financial Operations & M&A",
    "contact.f_opt_logistics": "Logistics & Industrial Warehouses",
    "contact.f_opt_retail": "Retail & Commercial Complexes",
    "contact.f_opt_global": "International Real Estate",
    "contact.f_opt_valuation": "Valuation & Due Diligence",
    "contact.f_opt_other": "Other Corporate Assets",
    "contact.f_msg": "Project Details / Message",
    "contact.f_lgpd": "I agree to the processing of my data according to the",
    "contact.f_lgpd_link": "Privacy Policy (GDPR/LGPD)",
    "contact.f_submit": "Submit Strategic Inquiry",
    "contact.f_or_wpp": "Or message us directly on WhatsApp",

    // Footer
    "footer.desc": "Your direct gateway to the finest commercial real estate opportunities in Brazil and globally.",
    "footer.nav_title": "Quick Links",
    "footer.serv_title": "Key Services",
    "footer.legal_title": "Corporate Information",
    "footer.legal_razao": "WNK Corporate Gestão Imobiliária EIRELI - ME",
    "footer.legal_cnpj": "CNPJ: 20.929.539/0001-37",
    "footer.legal_creci": "CRECI: 32.390-J",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy (LGPD)"
  }
};

// ==========================================================================
// 2. DADOS DOS SEGMENTOS DE ATIVOS (VAREJO & INVESTIMENTOS)
// ==========================================================================
const assetsData = {
  varejo: [
    { icon: "warehouse", pt: "Centros de Distribuição", en: "Distribution Centers" },
    { icon: "waves", pt: "Parques Aquáticos", en: "Water Parks" },
    { icon: "hotel", pt: "Hotéis & Resorts", en: "Hotels & Resorts" },
    { icon: "bed", pt: "Motéis", en: "Motels" },
    { icon: "palmtree", pt: "Pousadas", en: "Inns & Lodges" },
    { icon: "sparkles", pt: "Ilhas & Spas", en: "Islands & Spas" },
    { icon: "store", pt: "Lojas & Franquias", en: "Shops & Franchises" },
    { icon: "home", pt: "Casas em Condomínios Fechados", en: "Gated Community Villas" },
    { icon: "fuel", pt: "Postos de Combustível", en: "Gas Stations" },
    { icon: "building", pt: "Apartamentos & Lançamentos", en: "Luxury Condos & Launches" },
    { icon: "pill", pt: "Drogarias & Redes de Saúde", en: "Pharmacies & Health Chains" },
    { icon: "shopping-bag", pt: "Strip Centers & Power Centers", en: "Strip Centers & Power Centers" },
    { icon: "briefcase", pt: "Salas e Lajes Comerciais", en: "Corporate Office Floors" },
    { icon: "trending-up", pt: "Imóveis com Renda Ativa", en: "Income-Generating Properties" },
    { icon: "wheat", pt: "Agronegócio, Fazendas & Haras", en: "Agribusiness, Farms & Studs" },
    { icon: "car", pt: "Estacionamentos Comerciais", en: "Commercial Parking Lots" }
  ],
  investimentos: [
    { icon: "zap", pt: "PCHs & Usinas Hidrelétricas", en: "Small Hydro Plants & Energy" },
    { icon: "cross", pt: "Complexos Hospitalares", en: "Hospitals & Medical Centers" },
    { icon: "hammer", pt: "Operações BTS (Build to Suit)", en: "Build to Suit (BTS) Projects" },
    { icon: "container", pt: "Portos Secos & Aduanas", en: "Dry Ports & Customs Depots" },
    { icon: "graduation-cap", pt: "Faculdades & Universidades", en: "Universities & Colleges" },
    { icon: "book-open", pt: "Colégios & Escolas Bilíngues", en: "Schools & Educational Hubs" },
    { icon: "shopping-cart", pt: "Shopping Centers", en: "Shopping Malls" },
    { icon: "anchor", pt: "Portos Marítimos & Estaleiros", en: "Sea Ports & Shipyards" },
    { icon: "landmark", pt: "Agências Bancárias Corporativas", en: "Bank Branches & Financial Hubs" },
    { icon: "building-2", pt: "Prédios Comerciais Inteiros", en: "Commercial Towers" },
    { icon: "boxes", pt: "Condomínios de Galpões Logísticos", en: "Logistics Warehouse Parks" },
    { icon: "map-pin", pt: "Áreas Estruturadas p/ Incorporação", en: "Development Land Banks" },
    { icon: "plane", pt: "Aeroportos & Hangares", en: "Airports & Private Hangars" },
    { icon: "factory", pt: "Galpões e Plantas Industriais", en: "Industrial Manufacturing Plants" }
  ]
};

// ==========================================================================
// 3. INICIALIZAÇÃO DE ESTADO
// ==========================================================================
let currentLang = localStorage.getItem("wnk_lang") || "pt";
let currentTheme = localStorage.getItem("wnk_theme") || "dark";
let currentAssetTab = "varejo";

// ==========================================================================
// 4. FUNÇÃO DE IDIOMA
// ==========================================================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("wnk_lang", lang);
  document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");

  // Atualizar botões de idioma
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Atualizar textos com atributo data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Atualizar atributos de placeholder
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Renderizar ativos no idioma selecionado
  renderAssets();
}

// ==========================================================================
// 5. FUNÇÃO DE TEMA (DARK / LIGHT)
// ==========================================================================
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("wnk_theme", theme);
  document.documentElement.setAttribute("data-theme", theme);

  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    if (theme === "light") {
      // Ícone de Sol
      themeIcon.innerHTML = `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
    } else {
      // Ícone de Lua
      themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
    }
  }
}

// ==========================================================================
// 6. RENDERIZADOR DE ATIVOS
// ==========================================================================
function renderAssets() {
  const container = document.getElementById("assetsList");
  if (!container) return;

  const list = assetsData[currentAssetTab] || [];
  container.innerHTML = "";

  list.forEach(item => {
    const pill = document.createElement("div");
    pill.className = "asset-pill";
    pill.innerHTML = `
      <div class="asset-icon">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 8v8M8 12h8"/>
        </svg>
      </div>
      <div class="asset-name">${item[currentLang]}</div>
    `;
    container.appendChild(pill);
  });
}

// ==========================================================================
// 7. TOAST NOTIFICATION
// ==========================================================================
function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// ==========================================================================
// 8. DOM CONTENT LOADED HANDLERS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar Tema e Idioma
  setTheme(currentTheme);
  setLanguage(currentLang);

  // Alternador de Idioma
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Alternador de Tema
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }

  // Header Scroll
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Menu Mobile
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("open");
      });
    });
  }

  // Abas de Ativos (Tabs)
  const tabRetail = document.getElementById("tabRetail");
  const tabInvest = document.getElementById("tabInvest");
  if (tabRetail && tabInvest) {
    tabRetail.addEventListener("click", () => {
      tabRetail.classList.add("active");
      tabInvest.classList.remove("active");
      currentAssetTab = "varejo";
      renderAssets();
    });

    tabInvest.addEventListener("click", () => {
      tabInvest.classList.add("active");
      tabRetail.classList.remove("active");
      currentAssetTab = "investimentos";
      renderAssets();
    });
  }

  // Controles de Vídeo
  const video = document.getElementById("instVideo");
  const playBtn = document.getElementById("videoPlayBtn");
  if (video && playBtn) {
    playBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playBtn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
      } else {
        video.pause();
        playBtn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
      }
    });

    video.addEventListener("play", () => {
      playBtn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
    });

    video.addEventListener("pause", () => {
      playBtn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
    });
  }

  // Modal Mosaico Clientes
  const clientsMosaicTrigger = document.getElementById("clientsMosaicTrigger");
  const modalClients = document.getElementById("modalClients");
  const modalClose = document.getElementById("modalClose");
  if (clientsMosaicTrigger && modalClients) {
    clientsMosaicTrigger.addEventListener("click", () => {
      modalClients.classList.add("open");
    });
  }
  if (modalClose && modalClients) {
    modalClose.addEventListener("click", () => {
      modalClients.classList.remove("open");
    });
    modalClients.addEventListener("click", (e) => {
      if (e.target === modalClients) {
        modalClients.classList.remove("open");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalClients.classList.contains("open")) {
        modalClients.classList.remove("open");
      }
    });
  }

  // Formulário de Contato
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("formName").value.trim();
      const company = document.getElementById("formCompany").value.trim();
      const email = document.getElementById("formEmail").value.trim();
      const phone = document.getElementById("formPhone").value.trim();
      const interest = document.getElementById("formInterest").value;
      const message = document.getElementById("formMessage").value.trim();
      const lgpd = document.getElementById("formLgpd").checked;

      if (!lgpd) {
        alert(currentLang === "pt" ? "Por favor aceite os termos de privacidade para continuar." : "Please agree to the privacy policy to continue.");
        return;
      }

      // Preparar mensagem estruturada
      const subject = encodeURIComponent(`Contato Comercial WNK Corporate - ${name} (${company || 'Particular'})`);
      const body = encodeURIComponent(
        `Nome: ${name}\nEmpresa: ${company}\nE-mail: ${email}\nTelefone/WhatsApp: ${phone}\nInteresse: ${interest}\nMensagem:\n${message}\n\nEnviado via site wnkcorporate.com.br`
      );

      // Feedback ao usuário
      showToast(
        currentLang === "pt"
          ? "Obrigado! Sua solicitação foi registrada. Abrindo envio direto para wnkcorporate@wnkcorporate.com.br..."
          : "Thank you! Your inquiry was registered. Opening direct message to wnkcorporate@wnkcorporate.com.br..."
      );

      // Disparar cliente de e-mail direto
      window.location.href = `mailto:wnkcorporate@wnkcorporate.com.br?subject=${subject}&body=${body}`;

      // Limpar formulário
      contactForm.reset();
    });
  }
});
