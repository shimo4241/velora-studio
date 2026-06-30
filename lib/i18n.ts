export type Locale = "fr" | "en" | "es";

type Pair = readonly [string, string];

type SectionImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type VerticalSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: SectionImage;
  points: readonly string[];
  appName?: string;
  website?: string;
};

type CounterStat = {
  value: number;
  suffix: string;
  label: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

type FooterLink = {
  label: string;
  href: string;
};

export type Dictionary = {
  nav: {
    home: string;
    services: string;
    solutions: string;
    projects: string;
    about: string;
    contact: string;
    language: string;
  };
  a11y: {
    skipToContent: string;
    primaryNavigation: string;
    home: string;
    heroActions: string;
    performanceStats: string;
    scrollNext: string;
    highlights: string;
  };
  hero: {
    subtitle: string;
    headline: string;
    description: string;
    primary: string;
    secondary: string;
    stats: readonly { value: string; label: string }[];
  };
  cards: readonly Pair[];
  future: {
    eyebrow: string;
    title: string;
    lines: readonly string[];
  };
  services: readonly Pair[];
  verticals: readonly VerticalSection[];
  why: {
    eyebrow: string;
    title: string;
    description: string;
    stats: readonly CounterStat[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly ProcessStep[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    primaryHref: string;
    secondary: string;
    secondaryHref: string;
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    services: readonly string[];
    languagesTitle: string;
    languages: readonly FooterLink[];
    contactTitle: string;
    emailLabel: string;
    email: string;
    emailHref: string;
    whatsappLabel: string;
    whatsapp: string;
    whatsappHref: string;
    websiteLabel: string;
    website: string;
    websiteHref: string;
  };
};

const appWebsite = "https://velora-navy.vercel.app/";
const email = "contact.velora4241@gmail.com";
const whatsappNumber = "+34 640 55 96 99";

const whatsappHref = (message: string) => `https://wa.me/34640559699?text=${encodeURIComponent(message)}`;
const emailHref = `mailto:${email}`;

const serviceNames = [
  "AI Automation",
  "AI Agents",
  "Digital Marketing",
  "Premium Web Development",
  "SEO",
  "Brand Strategy",
  "Lead Generation",
  "CRM Automation",
  "Business Automation",
  "Custom AI Solutions"
] as const;

const footerServices = [
  "AI Automation",
  "Digital Marketing",
  "Premium Web Development",
  "Business Automation",
  "SEO",
  "Branding",
  "Lead Generation"
] as const;

const languageLinks = [
  { label: "Français", href: "/" },
  { label: "English", href: "/en" },
  { label: "Español", href: "/es" }
] as const;

const dictionaries = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      solutions: "Solutions",
      projects: "Projets",
      about: "À propos",
      contact: "Contact",
      language: "Langue"
    },
    a11y: {
      skipToContent: "Aller au contenu",
      primaryNavigation: "Navigation principale",
      home: "Accueil Velora",
      heroActions: "Actions principales",
      performanceStats: "Statistiques de performance Velora",
      scrollNext: "Faire défiler vers la section suivante",
      highlights: "points forts"
    },
    hero: {
      subtitle: "IA • Marketing digital • Expériences web",
      headline: "Ingénierie de la croissance intelligente.",
      description:
        "Velora aide les entreprises ambitieuses à accélérer leur croissance grâce à l'automatisation IA, aux expériences web premium et au marketing digital piloté par la donnée.",
      primary: "Réserver un appel stratégique",
      secondary: "Voir nos projets",
      stats: [
        { value: "120+", label: "Projets livrés" },
        { value: "97%", label: "Satisfaction client" },
        { value: "10x", label: "Vitesse moyenne d'automatisation" }
      ]
    },
    cards: [
      ["AI Automation", "Transformez les tâches répétitives en systèmes automatisés intelligents alimentés par l'IA."],
      ["Premium Web Development", "Des sites haute performance conçus pour impressionner, convertir et évoluer."],
      ["Digital Growth", "SEO, branding et marketing orientés vers des résultats business mesurables."]
    ],
    future: {
      eyebrow: "Le futur du business intelligent.",
      title: "Chaque interaction. Chaque workflow. Chaque expérience client.",
      lines: ["Propulsés par des systèmes intelligents conçus pour la croissance."]
    },
    services: [
      [serviceNames[0], "Systèmes IA qui exécutent les workflows répétitifs avec précision et contrôle humain."],
      [serviceNames[1], "Agents spécialisés pour qualification, recherche, support, reporting et opérations."],
      [serviceNames[2], "Acquisition, contenu et campagnes pilotés par la donnée et le positionnement."],
      [serviceNames[3], "Sites rapides, élégants et immersifs conçus pour convertir et durer."],
      [serviceNames[4], "Architecture, contenu et performance technique pour une visibilité durable."],
      [serviceNames[5], "Positionnement, message et direction de marque pour une perception plus premium."],
      [serviceNames[6], "Parcours et séquences qui transforment l'attention en opportunités qualifiées."],
      [serviceNames[7], "Pipelines, scoring et relances automatisées pour des ventes plus nettes."],
      [serviceNames[8], "Automatisations métier reliant équipes, données, outils et décisions critiques."],
      [serviceNames[9], "Solutions IA sur mesure pour accélérer les décisions et réduire les frictions."]
    ],
    verticals: [
      {
        id: "services",
        eyebrow: "Velora Dental",
        title: "Croissance digitale pour les cliniques dentaires modernes.",
        description:
          "Nous aidons les dentistes à attirer davantage de patients grâce à des sites premium, au SEO local, à l'optimisation Google Business Profile, à la gestion des réseaux sociaux, à l'automatisation IA des rendez-vous et à un branding conçu pour convertir.",
        cta: "Développer mon cabinet dentaire",
        href: whatsappHref("Bonjour Velora, je veux développer mon cabinet dentaire avec vos solutions digitales et IA."),
        image: {
          src: "/velora/dental-growth.png",
          alt: "Clinique dentaire premium avec interfaces IA Velora",
          width: 744,
          height: 362
        },
        points: ["SEO local", "Rendez-vous IA", "Branding patient"]
      },
      {
        id: "velora-business",
        eyebrow: "Velora Business",
        title: "Accélérez la croissance de votre entreprise.",
        description:
          "Nous aidons les entreprises à automatiser leurs opérations, augmenter leur productivité et construire des écosystèmes digitaux premium grâce à l'IA, l'automatisation et les logiciels modernes.",
        cta: "Développer mon business",
        href: whatsappHref("Bonjour Velora, je veux accélérer la croissance de mon entreprise avec l'IA et l'automatisation."),
        image: {
          src: "/velora/business-growth.png",
          alt: "Environnement business premium avec dashboards et automatisation intelligente",
          width: 744,
          height: 362
        },
        points: ["CRM automation", "Sales funnels", "Productivité IA"]
      },
      {
        id: "velora-ai",
        eyebrow: "Velora AI",
        title: "Une intelligence artificielle qui travaille pour vous.",
        description:
          "Nous construisons des agents IA, assistants intelligents, automatisations de workflows, systèmes de support client et solutions IA sur mesure pour les entreprises ambitieuses.",
        cta: "Découvrir les solutions IA",
        href: whatsappHref("Bonjour Velora, je veux découvrir vos solutions IA et agents intelligents pour mon entreprise."),
        image: {
          src: "/velora/ai-solutions.png",
          alt: "Centre de contrôle IA futuriste avec hologrammes et systèmes intelligents",
          width: 744,
          height: 320
        },
        points: ["AI Agents", "Support intelligent", "Workflows autonomes"]
      },
      {
        id: "velora-apps",
        eyebrow: "Velora Apps",
        title: "Cartes de visite digitales.",
        description:
          "Des cartes de visite digitales modernes qui connectent instantanément les professionnels à leurs clients.",
        cta: "Ouvrir Velora Apps",
        href: appWebsite,
        image: {
          src: "/velora/velora-apps-mockup.png",
          alt: "Mockup premium Velora Apps avec carte digitale sur smartphone",
          width: 744,
          height: 320
        },
        points: ["Profil instantané", "QR code", "Contacts en un geste"],
        appName: "Velora Apps",
        website: appWebsite
      }
    ],
    why: {
      eyebrow: "Pourquoi Velora",
      title: "Des systèmes premium conçus pour convertir l'attention en croissance.",
      description:
        "Chaque projet associe stratégie, design, automatisation et performance pour créer un avantage mesurable, élégant et durable.",
      stats: [
        { value: 120, suffix: "+", label: "Projets livrés" },
        { value: 40, suffix: "+", label: "Entreprises automatisées" },
        { value: 6, suffix: "", label: "Pays servis" },
        { value: 97, suffix: "%", label: "Satisfaction client" }
      ]
    },
    process: {
      eyebrow: "Notre process",
      title: "Une progression claire, du diagnostic au scale.",
      description:
        "Nous gardons l'expérience simple côté client, tout en construisant une architecture digitale précise derrière chaque étape.",
      steps: [
        { title: "Discover", description: "Comprendre vos objectifs, vos frictions et vos opportunités de croissance." },
        { title: "Strategy", description: "Définir le positionnement, les priorités et la trajectoire mesurable." },
        { title: "Design", description: "Créer l'expérience premium, les parcours et la direction visuelle." },
        { title: "Develop", description: "Construire les interfaces, systèmes et intégrations avec une base solide." },
        { title: "Automate", description: "Connecter IA, CRM, workflows et données pour réduire le travail manuel." },
        { title: "Launch", description: "Déployer, mesurer et sécuriser une mise en ligne propre." },
        { title: "Scale", description: "Optimiser les campagnes, la conversion et les automatisations en continu." }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Construisons quelque chose d'exceptionnel.",
      description:
        "Parlez-nous de votre projet et transformons vos idées en croissance mesurable.",
      primary: "Réserver un appel stratégique",
      primaryHref: whatsappHref("Bonjour Velora, je souhaite réserver un appel stratégique pour mon projet."),
      secondary: "Envoyer un email",
      secondaryHref: emailHref
    },
    footer: {
      tagline: "Strategy. Growth. Impact.",
      servicesTitle: "Services",
      services: footerServices,
      languagesTitle: "Langues",
      languages: languageLinks,
      contactTitle: "Contact",
      emailLabel: "Email",
      email,
      emailHref,
      whatsappLabel: "WhatsApp",
      whatsapp: whatsappNumber,
      whatsappHref: whatsappHref("Bonjour Velora, je souhaite parler de mon projet."),
      websiteLabel: "Website",
      website: appWebsite,
      websiteHref: appWebsite
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      solutions: "Solutions",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      language: "Language"
    },
    a11y: {
      skipToContent: "Skip to content",
      primaryNavigation: "Primary navigation",
      home: "Velora home",
      heroActions: "Primary actions",
      performanceStats: "Velora performance statistics",
      scrollNext: "Scroll to next section",
      highlights: "highlights"
    },
    hero: {
      subtitle: "AI • Digital Marketing • Web Experiences",
      headline: "Engineering Intelligent Growth.",
      description:
        "Velora helps ambitious businesses accelerate growth through AI automation, premium web experiences and data-driven digital marketing.",
      primary: "Book a Strategy Call",
      secondary: "View Our Work",
      stats: [
        { value: "120+", label: "Projects Delivered" },
        { value: "97%", label: "Client Satisfaction" },
        { value: "10x", label: "Average Automation Speed" }
      ]
    },
    cards: [
      ["AI Automation", "Transform repetitive workflows into intelligent automated systems powered by AI."],
      ["Premium Web Development", "High-performance websites designed to impress, convert and scale."],
      ["Digital Growth", "SEO, branding and marketing strategies focused on measurable business results."]
    ],
    future: {
      eyebrow: "The Future of Intelligent Business.",
      title: "Every interaction. Every workflow. Every customer experience.",
      lines: ["Powered by intelligent systems designed for growth."]
    },
    services: [
      [serviceNames[0], "AI systems that execute repetitive workflows with precision and human control."],
      [serviceNames[1], "Specialized agents for qualification, research, support, reporting and operations."],
      [serviceNames[2], "Acquisition, content and campaigns orchestrated around growth data."],
      [serviceNames[3], "Fast, elegant, immersive websites designed to convert and scale."],
      [serviceNames[4], "Architecture, content and technical performance for durable search visibility."],
      [serviceNames[5], "Positioning, messaging and direction for a more premium brand perception."],
      [serviceNames[6], "Journeys and sequences that turn attention into qualified opportunity."],
      [serviceNames[7], "Pipelines, scoring and automated follow-up for sharper sales execution."],
      [serviceNames[8], "Business automations connecting teams, data, tools and critical decisions."],
      [serviceNames[9], "Tailored AI systems that accelerate decisions and remove operational friction."]
    ],
    verticals: [
      {
        id: "services",
        eyebrow: "Velora Dental",
        title: "Digital Growth for Modern Dental Clinics.",
        description:
          "We help dentists attract more patients through premium websites, local SEO, Google Business Profile optimization, social media management, AI appointment automation and high-converting branding.",
        cta: "Grow My Dental Practice",
        href: whatsappHref("Hello Velora, I want to grow my dental practice with your digital and AI solutions."),
        image: {
          src: "/velora/dental-growth.png",
          alt: "Premium futuristic dental clinic with Velora AI interfaces",
          width: 744,
          height: 362
        },
        points: ["Local SEO", "AI appointments", "Patient branding"]
      },
      {
        id: "velora-business",
        eyebrow: "Velora Business",
        title: "Scale Your Business Faster.",
        description:
          "We help companies automate operations, increase productivity and build premium digital ecosystems through AI, automation and modern software.",
        cta: "Grow My Business",
        href: whatsappHref("Hello Velora, I want to scale my business with AI and automation."),
        image: {
          src: "/velora/business-growth.png",
          alt: "Luxury executive business environment with dashboards and intelligent automation",
          width: 744,
          height: 362
        },
        points: ["CRM automation", "Sales funnels", "AI productivity"]
      },
      {
        id: "velora-ai",
        eyebrow: "Velora AI",
        title: "Artificial Intelligence That Works For You.",
        description:
          "We build AI Agents, intelligent assistants, workflow automation, customer support systems and custom AI solutions for ambitious businesses.",
        cta: "Discover AI Solutions",
        href: whatsappHref("Hello Velora, I want to discover your AI agents and intelligent automation solutions."),
        image: {
          src: "/velora/ai-solutions.png",
          alt: "Futuristic AI control room with holograms and intelligent systems",
          width: 744,
          height: 320
        },
        points: ["AI Agents", "Smart support", "Autonomous workflows"]
      },
      {
        id: "velora-apps",
        eyebrow: "Velora Apps",
        title: "Digital Business Cards.",
        description:
          "Modern digital business cards that instantly connect professionals with their clients.",
        cta: "Open Velora Apps",
        href: appWebsite,
        image: {
          src: "/velora/velora-apps-mockup.png",
          alt: "Premium Velora Apps smartphone mockup with digital business cards",
          width: 744,
          height: 320
        },
        points: ["Instant profile", "QR code", "One-tap contacts"],
        appName: "Velora Apps",
        website: appWebsite
      }
    ],
    why: {
      eyebrow: "Why Velora",
      title: "Premium systems built to turn attention into growth.",
      description:
        "Every project combines strategy, design, automation and performance to create a measurable, elegant and durable advantage.",
      stats: [
        { value: 120, suffix: "+", label: "Projects Delivered" },
        { value: 40, suffix: "+", label: "Businesses Automated" },
        { value: 6, suffix: "", label: "Countries Served" },
        { value: 97, suffix: "%", label: "Client Satisfaction" }
      ]
    },
    process: {
      eyebrow: "Our Process",
      title: "A clear progression from discovery to scale.",
      description:
        "We keep the client experience simple while building precise digital architecture behind every step.",
      steps: [
        { title: "Discover", description: "Understand your goals, friction points and growth opportunities." },
        { title: "Strategy", description: "Define positioning, priorities and the measurable path forward." },
        { title: "Design", description: "Create the premium experience, journeys and visual direction." },
        { title: "Develop", description: "Build interfaces, systems and integrations on a solid foundation." },
        { title: "Automate", description: "Connect AI, CRM, workflows and data to reduce manual work." },
        { title: "Launch", description: "Deploy, measure and secure a clean release." },
        { title: "Scale", description: "Continuously improve campaigns, conversion and automation performance." }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's Build Something Exceptional.",
      description:
        "Tell us about your project and let's turn your ideas into measurable growth.",
      primary: "Book a Strategy Call",
      primaryHref: whatsappHref("Hello Velora, I would like to book a strategy call for my project."),
      secondary: "Send an Email",
      secondaryHref: emailHref
    },
    footer: {
      tagline: "Strategy. Growth. Impact.",
      servicesTitle: "Services",
      services: footerServices,
      languagesTitle: "Languages",
      languages: languageLinks,
      contactTitle: "Contact",
      emailLabel: "Email",
      email,
      emailHref,
      whatsappLabel: "WhatsApp",
      whatsapp: whatsappNumber,
      whatsappHref: whatsappHref("Hello Velora, I would like to discuss my project."),
      websiteLabel: "Website",
      website: appWebsite,
      websiteHref: appWebsite
    }
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      solutions: "Soluciones",
      projects: "Proyectos",
      about: "Nosotros",
      contact: "Contacto",
      language: "Idioma"
    },
    a11y: {
      skipToContent: "Saltar al contenido",
      primaryNavigation: "Navegación principal",
      home: "Inicio de Velora",
      heroActions: "Acciones principales",
      performanceStats: "Estadísticas de rendimiento de Velora",
      scrollNext: "Desplazarse a la siguiente sección",
      highlights: "puntos destacados"
    },
    hero: {
      subtitle: "IA • Marketing digital • Experiencias web",
      headline: "Ingeniería del crecimiento inteligente.",
      description:
        "Velora ayuda a empresas ambiciosas a acelerar su crecimiento con automatización de IA, experiencias web premium y marketing digital basado en datos.",
      primary: "Reservar llamada estratégica",
      secondary: "Ver proyectos",
      stats: [
        { value: "120+", label: "Proyectos entregados" },
        { value: "97%", label: "Satisfacción del cliente" },
        { value: "10x", label: "Velocidad media de automatización" }
      ]
    },
    cards: [
      ["AI Automation", "Transforma procesos repetitivos en sistemas automatizados inteligentes impulsados por IA."],
      ["Premium Web Development", "Webs de alto rendimiento diseñadas para impresionar, convertir y escalar."],
      ["Digital Growth", "SEO, branding y marketing enfocados en resultados de negocio medibles."]
    ],
    future: {
      eyebrow: "El futuro del negocio inteligente.",
      title: "Cada interacción. Cada workflow. Cada experiencia de cliente.",
      lines: ["Impulsados por sistemas inteligentes diseñados para crecer."]
    },
    services: [
      [serviceNames[0], "Sistemas de IA que ejecutan flujos repetitivos con precisión y control humano."],
      [serviceNames[1], "Agentes especializados para cualificación, investigación, soporte, reporting y operaciones."],
      [serviceNames[2], "Adquisición, contenido y campañas orquestadas con datos de crecimiento."],
      [serviceNames[3], "Sitios rápidos, elegantes e inmersivos diseñados para convertir y escalar."],
      [serviceNames[4], "Arquitectura, contenido y rendimiento técnico para una visibilidad duradera."],
      [serviceNames[5], "Posicionamiento, mensaje y dirección para una percepción de marca más premium."],
      [serviceNames[6], "Recorridos y secuencias que convierten atención en oportunidades cualificadas."],
      [serviceNames[7], "Pipelines, scoring y seguimiento automatizado para ventas más precisas."],
      [serviceNames[8], "Automatizaciones de negocio que conectan equipos, datos, herramientas y decisiones."],
      [serviceNames[9], "Sistemas de IA a medida que aceleran decisiones y eliminan fricción operativa."]
    ],
    verticals: [
      {
        id: "services",
        eyebrow: "Velora Dental",
        title: "Crecimiento digital para clínicas dentales modernas.",
        description:
          "Ayudamos a dentistas a atraer más pacientes con webs premium, SEO local, optimización de Google Business Profile, gestión de redes sociales, automatización de citas con IA y branding de alta conversión.",
        cta: "Hacer crecer mi clínica dental",
        href: whatsappHref("Hola Velora, quiero hacer crecer mi clínica dental con vuestras soluciones digitales e IA."),
        image: {
          src: "/velora/dental-growth.png",
          alt: "Clínica dental premium con interfaces de IA Velora",
          width: 744,
          height: 362
        },
        points: ["SEO local", "Citas con IA", "Branding paciente"]
      },
      {
        id: "velora-business",
        eyebrow: "Velora Business",
        title: "Escala tu negocio más rápido.",
        description:
          "Ayudamos a empresas a automatizar operaciones, aumentar la productividad y construir ecosistemas digitales premium con IA, automatización y software moderno.",
        cta: "Hacer crecer mi negocio",
        href: whatsappHref("Hola Velora, quiero escalar mi negocio con IA y automatización."),
        image: {
          src: "/velora/business-growth.png",
          alt: "Entorno empresarial premium con dashboards y automatización inteligente",
          width: 744,
          height: 362
        },
        points: ["CRM automation", "Sales funnels", "Productividad IA"]
      },
      {
        id: "velora-ai",
        eyebrow: "Velora AI",
        title: "Inteligencia artificial que trabaja para ti.",
        description:
          "Construimos agentes de IA, asistentes inteligentes, automatización de workflows, sistemas de atención al cliente y soluciones de IA personalizadas para empresas ambiciosas.",
        cta: "Descubrir soluciones IA",
        href: whatsappHref("Hola Velora, quiero descubrir vuestras soluciones de IA y agentes inteligentes para mi empresa."),
        image: {
          src: "/velora/ai-solutions.png",
          alt: "Sala de control de IA futurista con hologramas y sistemas inteligentes",
          width: 744,
          height: 320
        },
        points: ["AI Agents", "Soporte inteligente", "Workflows autónomos"]
      },
      {
        id: "velora-apps",
        eyebrow: "Velora Apps",
        title: "Tarjetas de visita digitales.",
        description:
          "Tarjetas de visita digitales modernas que conectan instantáneamente a profesionales con sus clientes.",
        cta: "Abrir Velora Apps",
        href: appWebsite,
        image: {
          src: "/velora/velora-apps-mockup.png",
          alt: "Mockup premium de Velora Apps con tarjetas digitales en smartphone",
          width: 744,
          height: 320
        },
        points: ["Perfil instantáneo", "Código QR", "Contactos en un toque"],
        appName: "Velora Apps",
        website: appWebsite
      }
    ],
    why: {
      eyebrow: "Por qué Velora",
      title: "Sistemas premium diseñados para convertir atención en crecimiento.",
      description:
        "Cada proyecto combina estrategia, diseño, automatización y rendimiento para crear una ventaja medible, elegante y duradera.",
      stats: [
        { value: 120, suffix: "+", label: "Proyectos entregados" },
        { value: 40, suffix: "+", label: "Negocios automatizados" },
        { value: 6, suffix: "", label: "Países servidos" },
        { value: 97, suffix: "%", label: "Satisfacción del cliente" }
      ]
    },
    process: {
      eyebrow: "Nuestro proceso",
      title: "Una progresión clara del descubrimiento al scale.",
      description:
        "Mantenemos una experiencia simple para el cliente mientras construimos una arquitectura digital precisa detrás de cada etapa.",
      steps: [
        { title: "Discover", description: "Entender tus objetivos, fricciones y oportunidades de crecimiento." },
        { title: "Strategy", description: "Definir posicionamiento, prioridades y una ruta medible." },
        { title: "Design", description: "Crear la experiencia premium, los recorridos y la dirección visual." },
        { title: "Develop", description: "Construir interfaces, sistemas e integraciones sobre una base sólida." },
        { title: "Automate", description: "Conectar IA, CRM, workflows y datos para reducir trabajo manual." },
        { title: "Launch", description: "Desplegar, medir y asegurar un lanzamiento limpio." },
        { title: "Scale", description: "Optimizar campañas, conversión y automatizaciones de forma continua." }
      ]
    },
    contact: {
      eyebrow: "Contacto",
      title: "Construyamos algo excepcional.",
      description:
        "Cuéntanos tu proyecto y convirtamos tus ideas en crecimiento medible.",
      primary: "Reservar llamada estratégica",
      primaryHref: whatsappHref("Hola Velora, quiero reservar una llamada estratégica para mi proyecto."),
      secondary: "Enviar un email",
      secondaryHref: emailHref
    },
    footer: {
      tagline: "Strategy. Growth. Impact.",
      servicesTitle: "Servicios",
      services: footerServices,
      languagesTitle: "Idiomas",
      languages: languageLinks,
      contactTitle: "Contacto",
      emailLabel: "Email",
      email,
      emailHref,
      whatsappLabel: "WhatsApp",
      whatsapp: whatsappNumber,
      whatsappHref: whatsappHref("Hola Velora, quiero hablar de mi proyecto."),
      websiteLabel: "Website",
      website: appWebsite,
      websiteHref: appWebsite
    }
  }
} as const satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export const localeLinks: Record<Locale, string> = {
  fr: "/",
  en: "/en",
  es: "/es"
};
