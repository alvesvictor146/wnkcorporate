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
    "nav.leadership": "Liderança",
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
    "stat.stores": "+100",
    "stat.stores_lbl": "Lojas vendidas",
    "stat.bts": "+80",
    "stat.bts_lbl": "Estruturação de BTS",
    "stat.cities": "+40",
    "stat.cities_lbl": "Cidades com vendas de ativos",
    "stat.m2_sold": "+2 mi",
    "stat.m2_sold_lbl": "m² comercializados",
    "stat.m2_leased": "+1 mi",
    "stat.m2_leased_lbl": "m² locados",
    "stat.slb": "+500 mil",
    "stat.slb_lbl": "Sale and Leaseback",

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
    "assets.choose_segment": "Escolha o segmento:",
    "segment.lajes": "Lajes Corporativas",
    "segment.logistico": "Logístico",
    "segment.renda_urbana": "Renda Urbana",
    "segment.agro": "Agro",
    "segment.shopping": "Shopping",
    "segment.residencial": "Residencial e Residencial Estudantil",

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
    "lead.label": "Direção Executiva & Novos Negócios",
    "lead.title": "Liderança com Visão Multidisciplinar",
    "lead.name": "Rodrigo P. Lopes",
    "lead.roles": "Sócio-Proprietário | Head de Novos Negócios | Estruturação de Negócios, Finanças & M&A",
    "lead.bio1": "Com mais de duas décadas de trajetória executiva, atua na liderança das frentes Comercial, Administrativa e de Gestão de Projetos. À frente da unidade de Novos Negócios da WNK Corporate, conduz estudos de viabilidade mercadológica, prospecção e avaliação estratégica de oportunidades de investimento e fusões & aquisições (M&A).",
    "lead.bio2": "É Arquiteto e Designer de Interiores, com especialização em Gestão de Projetos pela Universidade Paulista (UNIP).",
    "lead.creci": "CRECI: 63.893-F",
    "lead.cau": "CAU: A136977-6",
    "lead.crea": "CREA: 260562967-8",
    "lead.unip": "Gestão de Projetos • UNIP",

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
    "nav.leadership": "Leadership",
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
    "stat.stores": "+100",
    "stat.stores_lbl": "Retail Stores Sold",
    "stat.bts": "+80",
    "stat.bts_lbl": "BTS Projects Structured",
    "stat.cities": "+40",
    "stat.cities_lbl": "Cities with Asset Sales",
    "stat.m2_sold": "+2M",
    "stat.m2_sold_lbl": "Sq. Meters Marketed",
    "stat.m2_leased": "+1M",
    "stat.m2_leased_lbl": "Sq. Meters Leased",
    "stat.slb": "+500k",
    "stat.slb_lbl": "Sale & Leaseback",

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
    "assets.choose_segment": "Select Asset Class:",
    "segment.lajes": "Corporate Offices",
    "segment.logistico": "Logistics & Industrial",
    "segment.renda_urbana": "Urban Retail & Yield",
    "segment.agro": "Agribusiness",
    "segment.shopping": "Shopping",
    "segment.residencial": "Residential & Student Housing",

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
    "lead.label": "Executive Leadership & New Business",
    "lead.title": "Multidisciplinary Leadership",
    "lead.name": "Rodrigo P. Lopes",
    "lead.roles": "Partner-Owner | Head of New Business | Business Structuring, Finance & M&A",
    "lead.bio1": "With over two decades of executive experience, he leads Commercial, Administrative, and Project Management operations. Heading the New Business unit at WNK Corporate, he oversees market feasibility analyses, origination, and strategic valuation of investment opportunities and mergers & acquisitions (M&A).",
    "lead.bio2": "Architect and Interior Designer, with a specialization in Project Management from Universidade Paulista (UNIP).",
    "lead.creci": "CRECI: 63.893-F",
    "lead.cau": "CAU: A136977-6",
    "lead.crea": "CREA: 260562967-8",
    "lead.unip": "Project Management • UNIP",

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
// 2. DADOS DOS SEGMENTOS DE ATIVOS (6 CATEGORIAS OFICIAIS)
// ==========================================================================
const assetsData = {
  lajes: [
    { icon: "building-2", pt: "Lajes Corporativas Triple A (AAA)", en: "Triple-A Corporate Office Floors", descPt: "Andares em edifícios de altíssimo padrão nos principais eixos econômicos.", descEn: "High-spec corporate floors in premier financial districts." },
    { icon: "briefcase", pt: "Edifícios Corporativos Monousuário", en: "Single-Tenant Corporate HQs", descPt: "Sedes institucionais completas para grandes corporações e multinacionais.", descEn: "Dedicated corporate headquarters and standalone towers." },
    { icon: "building", pt: "Salas Comerciais & Andares Corridos", en: "Executive Suites & Open Space", descPt: "Módulos flexíveis para consultorias, escritórios e empresas de tecnologia.", descEn: "Flexible floorplates for consultancies, tech firms and law offices." },
    { icon: "landmark", pt: "Complexos Financeiros & Centros de Negócios", en: "Financial Complexes & Business Centers", descPt: "Ativos estratégicos integrados a redes bancárias e centros de convenções.", descEn: "Prime assets adjacent to financial districts and corporate services." },
    { icon: "briefcase", pt: "Retrofit de Espaços Corporativos", en: "Corporate Retrofit & Modernization", descPt: "Requalificação completa de edifícios consolidados para novos padrões ESG.", descEn: "Comprehensive upgrades of corporate towers to modern ESG standards." },
    { icon: "building-2", pt: "Sedes Administrativas Sob Medida (BTS)", en: "Tailored Corporate BTS HQs", descPt: "Estruturação sob demanda com contratos atípicos de longo prazo (10 a 20 anos).", descEn: "Custom-built corporate headquarters under long-term leases." }
  ],
  logistico: [
    { icon: "boxes", pt: "Condomínios de Galpões Logísticos", en: "Logistics Warehouse Parks", descPt: "Módulos com pé-direito livre de 12m e alta capacidade de piso (6 ton/m²).", descEn: "Class-A parks with 12m clear height and 6 ton/sqm floor load." },
    { icon: "warehouse", pt: "Centros de Distribuição (CD)", en: "Distribution Centers (CD)", descPt: "Plataformas logísticas para redes de varejo, atacado e comércio eletrônico.", descEn: "Large logistics hubs for e-commerce, retail and wholesale operators." },
    { icon: "boxes", pt: "Galpões Last Mile e Cross-Docking", en: "Last Mile & Cross-Docking Hubs", descPt: "Operações ágeis posicionadas no anel viário das grandes capitais brasileiras.", descEn: "Strategic suburban hubs enabling rapid same-day urban deliveries." },
    { icon: "warehouse", pt: "Portos Secos & Zonas Aduaneiras", en: "Dry Ports & Customs Depots", descPt: "Estruturas alfandegadas e pátios intermodais para importação e exportação.", descEn: "Bonded facilities and intermodal transport terminals." },
    { icon: "boxes", pt: "Câmaras Frias & Galpões Climatizados", en: "Cold Storage & Refrigerated Facilities", descPt: "Instalações especializadas para indústria farmacêutica, vacinas e perecíveis.", descEn: "Temperature-controlled facilities for pharmaceutical and food logistics." },
    { icon: "warehouse", pt: "Plantas Industriais & BTS Especializado", en: "Industrial Manufacturing Plants & BTS", descPt: "Instalações fabris de alta complexidade desenvolvidas sob medida.", descEn: "Specialized industrial facilities built to tenant specifications." }
  ],
  renda_urbana: [
    { icon: "trending-up", pt: "Imóveis de Varejo com Renda Ativa (Yield)", en: "Yield-Generating Retail Assets", descPt: "Ativos locados para operadores de primeira linha com fluxos de dividendos estáveis.", descEn: "Properties leased to blue-chip tenants with predictable dividend cashflows." },
    { icon: "shopping-bag", pt: "Supermercados & Atacarejos de Grande Porte", en: "Big Box Supermarkets & Cash & Carry", descPt: "Lojas âncora operadas pelas maiores redes atacadistas e supermercadistas.", descEn: "Anchor stores leased to major national retail and cash & carry chains." },
    { icon: "store", pt: "Drogarias & Farmácias de Rede", en: "Pharmacies & Retail Health Hubs", descPt: "Pontos de esquina de altíssimo fluxo nas capitais e cidades polo.", descEn: "High-traffic corner retail units tenanted by national pharmacy chains." },
    { icon: "landmark", pt: "Agências Bancárias Corporativas", en: "Bank Branches & Financial Hubs", descPt: "Imóveis locados para bancos institucionais com contratos de longo prazo.", descEn: "Institutional bank branches backed by investment-grade tenants." },
    { icon: "store", pt: "Postos de Combustíveis & Conveniência", en: "Gas Stations & Convenience Strips", descPt: "Empreendimentos em rodovias e avenidas principais com bandeiras consagradas.", descEn: "Prime petrol stations with convenience retail on major highways." },
    { icon: "building", pt: "Complexos Hospitalares & Clínicas Integradas", en: "Hospitals & Medical Clinics", descPt: "Infraestruturas de saúde especializadas para grupos médicos e operadoras.", descEn: "Healthcare infrastructure tenanted by leading hospital networks." },
    { icon: "briefcase", pt: "Colégios & Campi Universitários", en: "Colleges & University Campuses", descPt: "Ativos educacionais com locatários de relevância e contratos atípicos.", descEn: "Educational campuses tenanted by reputable educational groups." },
    { icon: "trending-up", pt: "Operações de Sale & Leaseback Urbano", en: "Urban Sale & Leaseback Transactions", descPt: "Desmobilização patrimonial estratégica para otimizar o capital de giro.", descEn: "Monetizing corporate real estate to unlock operational working capital." }
  ],
  agro: [
    { icon: "wheat", pt: "Fazendas de Soja, Grãos & Pecuária", en: "Soy, Grain & Cattle Farmlands", descPt: "Propriedades produtivas com solo de alta fertilidade e histórico comprovado.", descEn: "Productive farmlands with high soil quality and proven harvest records." },
    { icon: "warehouse", pt: "Silos & Centros de Armazenamento de Grãos", en: "Grain Storage Terminals & Silos", descPt: "Capacidade estática em polos do Centro-Oeste, Matopiba e Sul do Brasil.", descEn: "Static storage capacity across Brazil's core agricultural corridors." },
    { icon: "boxes", pt: "Plantas Agroindustriais & Frigoríficos", en: "Agro-industrial Plants & Processing Units", descPt: "Estruturas habilitadas para abate, processamento e exportação global.", descEn: "Processing facilities certified for international food export markets." },
    { icon: "trending-up", pt: "Usinas de Bioenergia & Etanol", en: "Bioenergy & Ethanol Facilities", descPt: "Ativos de cogeração de energia a biomassa e destilarias de cana e milho.", descEn: "Biomass cogeneration assets and corn/cane ethanol distilleries." },
    { icon: "wheat", pt: "Terras Produtivas e Imóveis Rurais Estruturados", en: "Prime Productive Land Banks", descPt: "Regularização fundiária, CAR e conformidade ambiental rigorosa.", descEn: "Structured rural assets with complete registry and environmental compliance." },
    { icon: "wheat", pt: "Haras de Elite & Centros Equestres", en: "Elite Stud Farms & Equestrian Centers", descPt: "Infraestrutura de ponta para criação, treinamento e reprodução de cavalos de raça.", descEn: "State-of-the-art infrastructure for elite horse breeding and training." }
  ],
  shopping: [
    { icon: "shopping-cart", pt: "Shopping Centers Regionais & Malls", en: "Regional Shopping Centers & Malls", descPt: "Centros de compras dominantes com mix qualificado de lazer e gastronomia.", descEn: "Dominant retail malls featuring entertainment, dining and national anchors." },
    { icon: "store", pt: "Power Centers & Strip Malls de Conveniência", en: "Power Centers & Neighborhood Strip Malls", descPt: "Formatos abertos de compras rápidas com estacionamento frontal e baixo condomínio.", descEn: "Open-air convenience formats with dedicated parking and low condo fees." },
    { icon: "shopping-bag", pt: "Lojas Âncora e Mega Stores", en: "Anchor Stores & Mega Stores", descPt: "Espaços amplos locados para grandes magazines, livrarias e academias.", descEn: "Large retail premises tenanted by departmental chains and fitness centers." },
    { icon: "store", pt: "Galerias Comerciais & Calçadões Urbanos", en: "Commercial Galleries & Shopping Arcades", descPt: "Pontos comerciais densamente povoados com alta conversão diária.", descEn: "Dense footfall shopping arcades with high retail sales conversion." },
    { icon: "shopping-cart", pt: "Outlets de Desconto & Varejo Promocional", en: "Outlet Malls & Off-Price Retail", descPt: "Empreendimentos em rodovias de acesso com público regional consumidor.", descEn: "Destination highway outlets offering off-price retail shopping." },
    { icon: "store", pt: "Parques Temáticos & Centros de Lazer Integrados", en: "Theme Parks & Integrated Leisure Hubs", descPt: "Destinos turísticos com atrações familiares, cinemas e áreas gastronômicas.", descEn: "Entertainment and tourist centers featuring cinemas and family attractions." }
  ],
  residencial: [
    { icon: "users", pt: "Empreendimentos Multifamily (Renda Residencial)", en: "Multifamily Residential Yield", descPt: "Edifícios residenciais inteiros desenvolvidos para locação com gestão profissional.", descEn: "Entire residential towers designed for professionally managed rental yield." },
    { icon: "users", pt: "Student Housing (Residencial Estudantil)", en: "Student Housing & Co-living", descPt: "Moradias inteligentes projetadas nas proximidades dos maiores polos universitários.", descEn: "Modern purpose-built student accommodations near top university campuses." },
    { icon: "building", pt: "Apartamentos & Condomínios de Alto Padrão", en: "Luxury High-Rise Condominiums", descPt: "Unidades residenciais nos bairros mais nobres com arquitetura autoral.", descEn: "High-end residential developments in prime metropolitan locations." },
    { icon: "home", pt: "Casas em Condomínios Fechados Exclusivos", en: "Gated Community Villas & Mansions", descPt: "Residências de altíssimo padrão com segurança perimetral e lazer completo.", descEn: "Luxury villas in gated communities with 24/7 security and resort amenities." },
    { icon: "home", pt: "Loteamentos e Terrenos para Incorporação", en: "Residential Land Banking & Subdivisions", descPt: "Glebas estruturadas com viabilidade técnica para incorporadoras.", descEn: "Approved master-planned land parcels for residential development." },
    { icon: "building-2", pt: "Lofts & Residências no Exterior", en: "Lofts & Prime International Residences", descPt: "Ativos nos Estados Unidos, Europa e Emirados com assessoria cambial e jurídica.", descEn: "Curated residential assets in the US, Europe and UAE with foreign advisory." }
  ]
};

// ==========================================================================
// 3. INICIALIZAÇÃO DE ESTADO
// ==========================================================================
let currentLang = localStorage.getItem("wnk_lang") || "pt";
let currentTheme = localStorage.getItem("wnk_theme") || "dark";
let currentAssetTab = "lajes";

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

  // Atualizar status do botão de áudio do vídeo
  const audioStatusText = document.getElementById("audioStatusText");
  const video = document.getElementById("instVideo");
  if (audioStatusText && video) {
    audioStatusText.textContent = video.muted
      ? (lang === "pt" ? "Ativar Áudio" : "Unmute")
      : (lang === "pt" ? "Som Ativo" : "Sound On");
  }

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
function getAssetIconSvg(icon) {
  switch (icon) {
    case "building":
    case "building-2":
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="6" x2="9.01" y2="6"></line><line x1="15" y1="6" x2="15.01" y2="6"></line><line x1="9" y1="10" x2="9.01" y2="10"></line><line x1="15" y1="10" x2="15.01" y2="10"></line><line x1="9" y1="14" x2="9.01" y2="14"></line><line x1="15" y1="14" x2="15.01" y2="14"></line><line x1="9" y1="18" x2="15" y2="18"></line></svg>`;
    case "warehouse":
    case "boxes":
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`;
    case "briefcase":
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`;
    case "shopping-cart":
    case "shopping-bag":
    case "store":
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`;
    case "wheat":
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22s5-5 10-5 10 5 10 5"></path><path d="M12 17V2"></path><path d="M12 7c-2 0-4-1.5-4-3s2-2 4-2 4 .5 4 2-2 3-4 3z"></path><path d="M12 12c-2.5 0-5-1.5-5-3s2.5-2 5-2 5 .5 5 2-2.5 3-5 3z"></path></svg>`;
    case "home":
    case "users":
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
    case "trending-up":
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`;
    case "landmark":
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>`;
    default:
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 6 12 12 16 14"/></svg>`;
  }
}

function renderAssets() {
  const container = document.getElementById("assetsList");
  if (!container) return;

  const list = assetsData[currentAssetTab] || [];
  container.innerHTML = "";

  list.forEach(item => {
    const pill = document.createElement("div");
    pill.className = "asset-pill";
    const iconSvg = getAssetIconSvg(item.icon);
    const title = item[currentLang] || item.pt;
    const desc = currentLang === "en" ? (item.descEn || "") : (item.descPt || "");

    pill.innerHTML = `
      <div class="asset-icon">
        ${iconSvg}
      </div>
      <div class="asset-info">
        <div class="asset-name">${title}</div>
        ${desc ? `<div class="asset-desc">${desc}</div>` : ""}
      </div>
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

  // Seleção de Segmentos (Barra conforme Imagem de Referência)
  const segmentBtns = document.querySelectorAll(".segment-tab-btn");
  segmentBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      segmentBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      currentAssetTab = btn.dataset.segment;
      renderAssets();
    });
  });

  // Controles de Vídeo (Autoplay contínuo em Loop e Áudio inicialmente mudo)
  const video = document.getElementById("instVideo");
  const playBtn = document.getElementById("videoPlayBtn");
  const audioBtn = document.getElementById("videoAudioBtn");
  const audioStatusText = document.getElementById("audioStatusText");

  if (video) {
    video.muted = true;
    video.loop = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.log("Autoplay silencioso aguardando interação:", err);
      });
    }

    if (playBtn) {
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

    if (audioBtn) {
      function syncAudioButton() {
        if (video.muted) {
          audioBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
            <span id="audioStatusText">${currentLang === "pt" ? "Ativar Áudio" : "Unmute"}</span>
          `;
          audioBtn.setAttribute("title", currentLang === "pt" ? "Ativar áudio" : "Unmute audio");
        } else {
          audioBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
            <span id="audioStatusText">${currentLang === "pt" ? "Som Ativo" : "Sound On"}</span>
          `;
          audioBtn.setAttribute("title", currentLang === "pt" ? "Silenciar áudio" : "Mute audio");
        }
      }

      audioBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        syncAudioButton();
      });
    }
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
