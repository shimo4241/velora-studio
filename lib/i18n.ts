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

export type ServiceDetail = {
  title: string;
  description: string;
  benefits: readonly string[];
  results: string;
  cta: string;
};

export type ProjectDetail = {
  title: string;
  category: string;
  problem: string;
  solution: string;
  technologies: readonly string[];
  results: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  isDemo: string;
};

export type FAQItem = {
  question: string;
  answer: string;
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
    backToTop: string;
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
  services: readonly ServiceDetail[];
  verticals: readonly VerticalSection[];
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
    projects: readonly ProjectDetail[];
  };
  about: {
    eyebrow: string;
    title: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    valuesTitle: string;
    valuesDesc: string;
    whyTitle: string;
    whyDesc: string;
    processTitle: string;
    processDesc: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    list: readonly TestimonialItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly FAQItem[];
  };
  partners: {
    eyebrow: string;
    title: string;
    description: string;
    international: string;
    morocco: string;
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
  contactForm: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    serviceSelect: string;
    messageLabel: string;
    messagePlaceholder: string;
    challengeLabel: string;
    challengePlaceholder: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
    validationEmail: string;
    validationRequired: string;
    validationSpam: string;
    budgetLabel: string;
  };
  thankYou: {
    title: string;
    subtitle: string;
    backHome: string;
  };
  legal: {
    privacyTitle: string;
    privacyLastUpdated: string;
    privacyContent: string;
    termsTitle: string;
    termsLastUpdated: string;
    termsContent: string;
    cookiesTitle: string;
    cookiesLastUpdated: string;
    cookiesContent: string;
  };
  cookieConsent: {
    title: string;
    description: string;
    acceptAll: string;
    rejectAll: string;
    customize: string;
    save: string;
    necessary: string;
    analytics: string;
    marketing: string;
  };
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
  footer: {
    tagline: string;
    companyInfo: string;
    quickLinksTitle: string;
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
    privacyPolicy: string;
    termsOfService: string;
    cookiePolicy: string;
  };
};

const appWebsite = "https://velora-studioo.vercel.app/";
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
      highlights: "points forts",
      backToTop: "Retour en haut"
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
      {
        title: serviceNames[0],
        description: "Systèmes IA qui exécutent les workflows répétitifs avec précision et contrôle humain.",
        benefits: ["Réduction drastique des tâches manuelles répétitives", "Zéro erreur de saisie de données", "Disponibilité continue 24/7"],
        results: "+45% d'efficacité opérationnelle",
        cta: "Automatiser mon business"
      },
      {
        title: serviceNames[1],
        description: "Agents spécialisés pour qualification, recherche, support, reporting et opérations.",
        benefits: ["Qualification automatisée des prospects entrants", "Support client multi-langues instantané", "Reporting en temps réel"],
        results: "Temps de réponse réduit de 90%",
        cta: "Déployer un agent"
      },
      {
        title: serviceNames[2],
        description: "Acquisition, contenu et campagnes pilotés par la donnée et le positionnement.",
        benefits: ["Campagnes publicitaires hautement ciblées", "Stratégies de contenu engageantes", "Analyse précise du ROI"],
        results: "Coût d'acquisition client réduit de 30%",
        cta: "Lancer des campagnes"
      },
      {
        title: serviceNames[3],
        description: "Sites rapides, élégants et immersifs conçus pour convertir et durer.",
        benefits: ["Vitesse de chargement ultra-rapide", "Design immersif et premium", "Optimisation SEO native"],
        results: "+40% de taux de conversion",
        cta: "Créer mon site premium"
      },
      {
        title: serviceNames[4],
        description: "Architecture, contenu et performance technique pour une visibilité durable.",
        benefits: ["Indexation prioritaire sur les moteurs de recherche", "Audits techniques rigoureux", "Optimisation SEO locale"],
        results: "+150% de trafic organique",
        cta: "Optimiser mon SEO"
      },
      {
        title: serviceNames[5],
        description: "Positionnement, message et direction de marque pour une perception plus premium.",
        benefits: ["Identité visuelle mémorable et haut de gamme", "Message clair et aligné", "Cohérence sur tous les supports"],
        results: "Image de marque haut de gamme consolidée",
        cta: "Redéfinir ma marque"
      },
      {
        title: serviceNames[6],
        description: "Parcours et séquences qui transforment l'attention en opportunités qualifiées.",
        benefits: ["Funnels de conversion optimisés", "Relances automatisées ciblées", "Score de prospects précis"],
        results: "+25% de prospects qualifiés",
        cta: "Générer des leads"
      },
      {
        title: serviceNames[7],
        description: "Pipelines, scoring et relances automatisées pour des ventes plus nettes.",
        benefits: ["Gestion unifiée des opportunités", "Synchronisation bidirectionnelle", "Relances automatisées"],
        results: "Cycle de vente raccourci de 20%",
        cta: "Configurer mon CRM"
      },
      {
        title: serviceNames[8],
        description: "Automatisations métier reliant équipes, données, outils et décisions critiques.",
        benefits: ["Intégrations fluides de tous vos outils", "Dashboards unifiés pour les décideurs", "Notifications automatisées"],
        results: "40h de travail manuel économisées par semaine",
        cta: "Intégrer mes outils"
      },
      {
        title: serviceNames[9],
        description: "Solutions IA sur mesure pour accélérer les décisions et réduire les frictions.",
        benefits: ["Analyse prédictive de données complexes", "Outils d'aide à la décision personnalisés", "Adaptation totale à vos process"],
        results: "Décisions stratégiques 3x plus rapides",
        cta: "Concevoir ma solution IA"
      }
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
          "Nous construisons des agents IA, assistants internes intelligents, automatisations de workflows et solutions IA sur mesure pour les entreprises ambitieuses.",
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
    portfolio: {
      eyebrow: "Portfolio & Études de Cas",
      title: "Nos réalisations d'exception.",
      description: "Découvrez comment nous aidons nos clients à franchir un cap technologique et stratégique.",
      projects: [
        {
          title: "Aethera Luxury",
          category: "E-Commerce & IA",
          problem: "Taux de conversion mobile faible et coûts élevés du support client en période de pointe.",
          solution: "Développement d'un storefront Next.js ultra-rapide et intégration d'un agent de vente conversationnel IA personnalisé.",
          technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Stripe"],
          results: "+34% de conversion mobile, temps de réponse réduit de 90%."
        },
        {
          title: "Clinique Apex Med",
          category: "SEO & Agents Vocaux",
          problem: "Manque de visibilité locale sur les moteurs de recherche et surcharge d'appels pour les réservations.",
          solution: "Mise en place d'une stratégie de SEO local agressive et déploiement d'un agent IA vocal de prise de rendez-vous.",
          technologies: ["Node.js", "Python", "Twilio API", "Google Search Console"],
          results: "2.5x plus de patients entrants, 94% des appels de réservation automatisés."
        },
        {
          title: "Vortex Logistics",
          category: "Business Automation",
          problem: "Processus de facturation manuels lents, provoquant des erreurs de saisie et des retards.",
          solution: "Création d'un système ERP/CRM automatisé via n8n qui synchronise les livraisons, génère les factures et notifie les clients.",
          technologies: ["n8n", "PostgreSQL", "React", "Vercel"],
          results: "Élimination complète des erreurs de saisie, 40 heures manuelles économisées par semaine."
        }
      ]
    },
    about: {
      eyebrow: "À propos de Velora",
      title: "La synergie entre haute technologie et design d'exception.",
      missionTitle: "Notre Mission",
      missionDesc: "Propulser les entreprises ambitieuses vers de nouveaux sommets de croissance en éliminant les frictions opérationnelles grâce à l'IA et au design premium.",
      visionTitle: "Notre Vision",
      visionDesc: "Un monde professionnel où les tâches répétitives sont déléguées à des systèmes intelligents, libérant le potentiel créatif et stratégique des humains.",
      valuesTitle: "Nos Valeurs",
      valuesDesc: "Précision technique, esthétique premium sans compromis, intégrité absolue et culture du résultat mesurable.",
      whyTitle: "Pourquoi Velora Studio ?",
      whyDesc: "Nous ne créons pas seulement des outils. Nous façonnons des écosystèmes digitaux durables et performants qui augmentent concrètement votre chiffre d'affaires et structurent vos opérations.",
      processTitle: "Notre Approche",
      processDesc: "Du diagnostic initial à l'automatisation complète de vos processus, chaque étape est validée méticuleusement pour garantir votre ROI."
    },
    testimonials: {
      eyebrow: "Témoignages",
      title: "La confiance de nos partenaires.",
      list: [
        {
          quote: "Velora a totalement transformé notre gestion de cabinet. L'automatisation IA des rendez-vous fonctionne à la perfection. Une expérience haut de gamme.",
          author: "Dr. Antoine Laurent",
          role: "Directeur Médical, Clinique Apex",
          isDemo: "Témoignage Démo"
        },
        {
          quote: "Notre trafic organique a fait un bond de 150% en seulement 4 mois. L'équipe ne fait pas que des sites, elle crée de véritables moteurs de croissance.",
          author: "Sophie Vance",
          role: "VP Growth, Aethera Luxury",
          isDemo: "Témoignage Démo"
        },
        {
          quote: "L'automatisation de nos rapports logistiques nous a fait économiser un temps précieux. Le dashboard CRM conçu par Velora est fluide, rapide et indispensable.",
          author: "Marcos Silva",
          role: "Responsable Opérations, Vortex",
          isDemo: "Témoignage Démo"
        }
      ]
    },
    faq: {
      eyebrow: "Questions Fréquentes",
      title: "Des réponses claires à vos questions.",
      items: [
        {
          question: "Quelles technologies utilisez-vous pour les sites web ?",
          answer: "Nous utilisons principalement Next.js, React et Tailwind CSS. Ces technologies garantissent une vitesse de chargement optimale, un SEO de premier plan et une modularité totale."
        },
        {
          question: "Comment fonctionne votre stratégie SEO ?",
          answer: "Notre approche combine l'optimisation technique du code, une recherche sémantique approfondie, la structuration des données (JSON-LD) et le SEO local pour maximiser votre présence en ligne."
        },
        {
          question: "Qu'est-ce que le Branding premium ?",
          answer: "C'est l'art d'aligner votre identité visuelle, vos valeurs et vos messages avec le positionnement haut de gamme que vous visez pour attirer des clients à forte valeur."
        },
        {
          question: "Quels processus métier peut-on automatiser ?",
          answer: "Nous pouvons automatiser la qualification de leads, la saisie dans le CRM, la facturation, l'envoi d'e-mails de relance, les notifications d'équipes et l'assistance client de premier niveau."
        },
        {
          question: "En quoi les agents IA sont-ils bénéfiques ?",
          answer: "Ils gèrent le support, la prospection ou le reporting en continu, sans interruption, avec une précision mathématique et en apprenant constamment de vos données."
        },
        {
          question: "Quel est le délai moyen pour un projet ?",
          answer: "Un projet typique prend entre 4 et 8 semaines, selon la complexité des automatisations, le nombre de pages et les intégrations requises."
        },
        {
          question: "Comment fonctionne la tarification ?",
          answer: "Nous proposons des forfaits par projet avec des livrables clairs, ou des abonnements d'accompagnement mensuel pour l'optimisation continue de vos performances."
        },
        {
          question: "Assurez-vous le support après le lancement ?",
          answer: "Absolument. Nous offrons des contrats de support et de maintenance premium pour assurer la sécurité, la mise à jour et l'évolution de vos systèmes."
        }
      ]
    },
    partners: {
      eyebrow: "CONFIANCE MONDIALE",
      title: "Propulsé par la confiance de marques ambitieuses au Maroc et à l'international.",
      description: "Des startups innovantes aux grandes entreprises établies, les organisations font confiance à Velora pour concevoir des expériences digitales d'exception, des solutions IA et des stratégies de croissance.",
      international: "Partenaires Internationaux",
      morocco: "Maroc"
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
    contactForm: {
      nameLabel: "Nom complet",
      namePlaceholder: "Jean Dupont",
      emailLabel: "Adresse email",
      emailPlaceholder: "jean.dupont@entreprise.com",
      serviceLabel: "Service souhaité",
      serviceSelect: "Sélectionnez un service...",
      messageLabel: "Détails du projet",
      messagePlaceholder: "Décrivez vos objectifs, vos défis et le calendrier...",
      challengeLabel: "Vérification de sécurité",
      challengePlaceholder: "Entrez la réponse...",
      submitButton: "Lancer le projet",
      submitting: "Transmission en cours...",
      successMessage: "Votre message a été transmis avec succès !",
      errorMessage: "Une erreur est survenue. Veuillez réessayer.",
      validationEmail: "Veuillez entrer une adresse email valide.",
      validationRequired: "Ce champ est requis.",
      validationSpam: "La réponse de sécurité est incorrecte.",
      budgetLabel: "Budget estimé"
    },
    thankYou: {
      title: "Merci pour votre message.",
      subtitle: "Nous analysons votre demande et vous répondrons sous 24 heures ouvrées.",
      backHome: "Retour à l'accueil"
    },
    legal: {
      privacyTitle: "Politique de Confidentialité",
      privacyLastUpdated: "Dernière mise à jour : Juin 2026",
      privacyContent: "Chez Velora Studio, nous accordons une importance primordiale à la protection de vos données personnelles. Cette politique détaille comment nous collectons, utilisons et protégeons vos informations. Nous recueillons uniquement les données fournies via notre formulaire de contact (nom, e-mail, détails du projet). Ces informations sont exclusivement utilisées pour répondre à vos demandes commerciales. Nous ne vendons, louons ni ne partageons jamais vos données avec des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles en nous écrivant à contact.velora4241@gmail.com.",
      termsTitle: "Conditions Générales de Service",
      termsLastUpdated: "Dernière mise à jour : Juin 2026",
      termsContent: "Les présentes conditions générales régissent l'utilisation du site web de Velora Studio et de nos services associés. En accédant à ce site, vous acceptez ces conditions sans réserve. Tous les éléments visuels, textuels et loguels présents sur ce site sont la propriété intellectuelle exclusive de Velora Studio. Toute reproduction ou distribution non autorisée est formellement interdite. Velora Studio s'efforce de fournir des informations exactes et à jour, mais ne peut être tenu responsable des interruptions de service ou des erreurs indépendantes de sa volonté.",
      cookiesTitle: "Politique relative aux Cookies",
      cookiesLastUpdated: "Dernière mise à jour : Juin 2026",
      cookiesContent: "Velora Studio utilise des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et optimiser l'efficacité de nos campagnes de communication. Les cookies essentiels sont indispensables au bon fonctionnement du site. Les cookies d'analyse nous permettent de comprendre l'interaction des visiteurs avec le site. Vous pouvez à tout moment personnaliser vos choix de cookies via le panneau de consentement situé en bas de l'écran."
    },
    cookieConsent: {
      title: "Gestion des Cookies",
      description: "Nous utilisons des cookies pour optimiser votre expérience et mesurer l'audience. Personnalisez vos choix ci-dessous.",
      acceptAll: "Tout accepter",
      rejectAll: "Tout refuser",
      customize: "Personnaliser",
      save: "Enregistrer mes préférences",
      necessary: "Essentiels (Requis)",
      analytics: "Analyses & Trafic",
      marketing: "Marketing & Publicité"
    },
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
    footer: {
      tagline: "Strategy. Growth. Impact.",
      companyInfo: "Velora Studio est une agence digitale d'ingénierie intelligente de la croissance, spécialisée dans l'automatisation IA, le SEO de haut niveau et le développement web premium.",
      quickLinksTitle: "Navigation",
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
      websiteHref: appWebsite,
      privacyPolicy: "Confidentialité",
      termsOfService: "Conditions",
      cookiePolicy: "Cookies"
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
      highlights: "highlights",
      backToTop: "Back to top"
    },
    hero: {
      subtitle: "AI • Digital Marketing • Web Experiences",
      headline: "Engineering Intelligent Growth.",
      description:
        "Velora helps ambitious businesses accelerate growth through AI automation, premium web experiences and data-driven digital marketing.",
      primary: "Book a Discovery Call",
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
      {
        title: serviceNames[0],
        description: "AI systems that execute repetitive workflows with precision and human control.",
        benefits: ["Drastic reduction of manual administrative tasks", "Zero data entry errors", "Continuous 24/7 system availability"],
        results: "+45% operational efficiency",
        cta: "Automate my business"
      },
      {
        title: serviceNames[1],
        description: "Specialized agents for qualification, research, support, reporting and operations.",
        benefits: ["Automated inbound lead qualification", "Instant multilingual customer support", "Real-time automated reports"],
        results: "90% response time reduction",
        cta: "Deploy an agent"
      },
      {
        title: serviceNames[2],
        description: "Acquisition, content and campaigns orchestrated around growth data.",
        benefits: ["Highly-targeted ad campaigns", "Engaging content marketing plans", "Precise ROI performance tracking"],
        results: "30% customer acquisition cost reduction",
        cta: "Launch campaigns"
      },
      {
        title: serviceNames[3],
        description: "Fast, elegant, immersive websites designed to convert and scale.",
        benefits: ["Blazing-fast load speeds", "Immersive luxury visual layouts", "Native mobile-first responsiveness"],
        results: "+40% conversion rate increase",
        cta: "Build my premium site"
      },
      {
        title: serviceNames[4],
        description: "Architecture, content and technical performance for durable search visibility.",
        benefits: ["Priority search indexing", "Rigorous technical SEO audits", "Enhanced Google Maps local visibility"],
        results: "+150% organic traffic growth",
        cta: "Optimize my SEO"
      },
      {
        title: serviceNames[5],
        description: "Positioning, messaging and direction for a more premium brand perception.",
        benefits: ["Memorable, high-end visual identity", "Clear, aligned brand guidelines", "Absolute marketing asset consistency"],
        results: "Elevated premium brand authority",
        cta: "Re-align my brand"
      },
      {
        title: serviceNames[6],
        description: "Journeys and sequences that turn attention into qualified opportunity.",
        benefits: ["Optimized high-converting lead funnels", "Automated targeted follow-up sequences", "Accurate lead scoring metrics"],
        results: "+25% qualified leads generated",
        cta: "Generate leads"
      },
      {
        title: serviceNames[7],
        description: "Pipelines, scoring and automated follow-up for sharper sales execution.",
        benefits: ["Centralized deal pipeline dashboard", "Two-way data synchronization", "Automated client communication"],
        results: "20% shorter sales cycle",
        cta: "Configure my CRM"
      },
      {
        title: serviceNames[8],
        description: "Business automations connecting teams, data, tools and critical decisions.",
        benefits: ["Seamless multi-tool integrations", "Unified executive dashboards", "Real-time alerts and notifications"],
        results: "40 hours saved per week",
        cta: "Integrate my tools"
      },
      {
        title: serviceNames[9],
        description: "Tailored AI systems that accelerate decisions and remove operational friction.",
        benefits: ["Predictive complex data models", "Custom internal decision tools", "Complete adaptation to your workflow"],
        results: "3x faster strategic execution",
        cta: "Design my AI solution"
      }
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
          "We build AI Agents, intelligent assistants, workflow automation and custom AI solutions for ambitious businesses.",
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
        points: ["Instant profile", "QR code", "One-tap contacts"]
      }
    ],
    portfolio: {
      eyebrow: "Portfolio & Case Studies",
      title: "Our Exceptional Work.",
      description: "Explore how we partner with leaders to accelerate growth and optimize operations.",
      projects: [
        {
          title: "Aethera Luxury",
          category: "E-Commerce & AI",
          problem: "Low mobile conversion rates and high customer service overhead during peak seasons.",
          solution: "Built a headless Next.js storefront and integrated a custom conversational AI sales assistant.",
          technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Stripe"],
          results: "+34% mobile conversion, 90% reduction in support response times."
        },
        {
          title: "Apex Med Clinics",
          category: "SEO & Voice Agents",
          problem: "Weak local search footprint and patient scheduling bottlenecks over phone calls.",
          solution: "Implemented local SEO expansion and deployed a phone-based AI scheduling agent.",
          technologies: ["Node.js", "Python", "Twilio API", "Google Maps SDK"],
          results: "2.5x client acquisition rate increase, 94% patient booking automation."
        },
        {
          title: "Vortex Logistics",
          category: "Business Automation",
          problem: "Manual invoicing pipelines causing frequent entry discrepancies and payment delays.",
          solution: "Designed a centralized workflow automation via n8n linking CRM, inventory, and automated billing.",
          technologies: ["n8n", "PostgreSQL", "React", "Vercel"],
          results: "Complete elimination of discrepancies, 40 hours of manual labor saved weekly."
        }
      ]
    },
    about: {
      eyebrow: "About Velora",
      title: "Where Cutting-Edge Tech Meets Premium Craftsmanship.",
      missionTitle: "Our Mission",
      missionDesc: "To empower ambitious companies by removing operational friction, leveraging advanced AI, and designing premium digital tools.",
      visionTitle: "Our Vision",
      visionDesc: "A future where human strategy is amplified by autonomous workflows, freeing teams to focus on high-impact creativity.",
      valuesTitle: "Our Values",
      valuesDesc: "Technical precision, uncompromising aesthetics, absolute integrity, and a culture of measurable results.",
      whyTitle: "Why Velora Studio?",
      whyDesc: "We don't just build websites or write code. We architect strategic growth pipelines that optimize your baseline, decrease labor costs, and elevate your brand status.",
      processTitle: "Our Approach",
      processDesc: "From audit to deployment, every single detail is meticulously optimized to guarantee maximum ROI for your organization."
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Trusted by Ambitious Leaders.",
      list: [
        {
          quote: "Velora completely transformed our clinical management. The AI appointment bookings work seamlessly. A truly premium experience.",
          author: "Dr. Antoine Laurent",
          role: "Medical Director, Apex Med",
          isDemo: "Demo Testimonial"
        },
        {
          quote: "Our organic traffic grew by 150% in just 4 months. The team doesn't just build sites, they build growth engines.",
          author: "Sophie Vance",
          role: "VP of Growth, Aethera Luxury",
          isDemo: "Demo Testimonial"
        },
        {
          quote: "Automating our logistics flows saved us tons of manual overhead. The CRM dashboard Velora built is clean, fast, and indispensable.",
          author: "Marcos Silva",
          role: "Operations Lead, Vortex Logistics",
          isDemo: "Demo Testimonial"
        }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common Questions.",
      items: [
        {
          question: "What core tech stack do you use for websites?",
          answer: "We primarily build with Next.js, React, and Tailwind CSS. This guarantees maximum page speeds, responsive layouts, clean code, and solid technical SEO."
        },
        {
          question: "How do you approach SEO?",
          answer: "We perform deep technical audits, semantic keyword mapping, JSON-LD structured data injection, page speed optimization, and localized SEO setups."
        },
        {
          question: "What does premium branding include?",
          answer: "It covers visual identity, logotype design, typography systems, tone of voice guidelines, and high-fidelity assets designed to position your brand at a premium status."
        },
        {
          question: "What processes can be automated?",
          answer: "CRM entries, lead qualification, billing/invoicing pipelines, email follow-up sequences, team alerts, and first-level customer support responses."
        },
        {
          question: "How do AI agents help?",
          answer: "They handle tasks like lead scoring, customer queries, and operational reports 24/7 without delays, integrating with your existing databases."
        },
        {
          question: "What is your typical project timeline?",
          answer: "A standard project takes 4 to 8 weeks, depending on the complexity of required integrations, custom database setups, and design scope."
        },
        {
          question: "How does project pricing work?",
          answer: "We offer fixed, milestone-based pricing for specific project scopes, or custom monthly retainer plans for ongoing growth support."
        },
        {
          question: "Do you offer post-launch support?",
          answer: "Yes, we provide premium support and maintenance plans to ensure your apps remain secure, updated, and highly performant."
        }
      ]
    },
    partners: {
      eyebrow: "TRUSTED WORLDWIDE",
      title: "Trusted by ambitious brands across Morocco and internationally.",
      description: "From innovative startups to established companies, organizations trust Velora to build digital experiences, AI solutions and business growth strategies.",
      international: "International Partners",
      morocco: "Morocco"
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's Build Something Exceptional.",
      description:
        "Tell us about your project and let's turn your ideas into measurable growth.",
      primary: "Book a Discovery Call",
      primaryHref: whatsappHref("Hello Velora, I would like to book a strategy call for my project."),
      secondary: "Send an Email",
      secondaryHref: emailHref
    },
    contactForm: {
      nameLabel: "Full Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "john.doe@company.com",
      serviceLabel: "Desired Service",
      serviceSelect: "Select a service...",
      messageLabel: "Project Scope",
      messagePlaceholder: "Describe your goals, challenges, timeline...",
      challengeLabel: "Security Verification",
      challengePlaceholder: "Enter answer...",
      submitButton: "Start Your Project",
      submitting: "Submitting...",
      successMessage: "Your message has been sent successfully!",
      errorMessage: "An error occurred. Please try again.",
      validationEmail: "Please enter a valid email address.",
      validationRequired: "This field is required.",
      validationSpam: "Security answer is incorrect.",
      budgetLabel: "Estimated Budget"
    },
    thankYou: {
      title: "Thank You.",
      subtitle: "We have received your message and will get back to you within 24 business hours.",
      backHome: "Back to Home"
    },
    legal: {
      privacyTitle: "Privacy Policy",
      privacyLastUpdated: "Last updated: June 2026",
      privacyContent: "At Velora Studio, we value the confidentiality of your personal details. This policy explains how we collect and protect your data. We collect information submitted through our contact form (name, email, project brief). This is exclusively used to answer your requests. We do not sell or lease your data. Under GDPR, you have the right to request modification or erasure of your records at contact.velora4241@gmail.com.",
      termsTitle: "Terms of Service",
      termsLastUpdated: "Last updated: June 2026",
      termsContent: "These terms govern your use of the Velora Studio website and services. By visiting this website, you accept these terms. All graphic materials, site designs, and software codes are the exclusive property of Velora Studio. Unauthorized distribution is prohibited. Velora Studio does not accept liability for temporary site interruptions beyond our direct control.",
      cookiesTitle: "Cookie Policy",
      cookiesLastUpdated: "Last updated: June 2026",
      cookiesContent: "Velora Studio uses cookies to analyze traffic and provide optimal site operation. Required cookies are critical for basic site rendering. Analytical cookies enable us to study customer navigation patterns. You can manage your preferences at any time using the preferences bar at the bottom."
    },
    cookieConsent: {
      title: "Cookie Settings",
      description: "We use cookies to optimize your visit and measure traffic. Select your options below.",
      acceptAll: "Accept All",
      rejectAll: "Reject All",
      customize: "Customize",
      save: "Save Preferences",
      necessary: "Essential (Required)",
      analytics: "Analytics & Traffic",
      marketing: "Marketing & Ads"
    },
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
    footer: {
      tagline: "Strategy. Growth. Impact.",
      companyInfo: "Velora Studio is a premium digital agency specializing in custom AI automation, elite SEO architectures, and immersive web experiences designed for measurable growth.",
      quickLinksTitle: "Navigation",
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
      websiteHref: appWebsite,
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy"
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
      highlights: "puntos destacados",
      backToTop: "Volver arriba"
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
      {
        title: serviceNames[0],
        description: "Sistemas de IA que ejecutan flujos repetitivos con precisión y control humano.",
        benefits: ["Reducción de tareas administrativas manuales", "Eliminación de errores en entrada de datos", "Sistemas disponibles 24/7 sin interrupción"],
        results: "+45% de eficiencia operativa",
        cta: "Automatizar mi negocio"
      },
      {
        title: serviceNames[1],
        description: "Agentes especializados para cualificación, investigación, soporte, reporting y operaciones.",
        benefits: ["Cualificación de leads automatizada", "Soporte de atención al cliente multilingüe instantáneo", "Reports automáticos en tiempo real"],
        results: "90% de reducción en tiempo de respuesta",
        cta: "Desplegar un agente"
      },
      {
        title: serviceNames[2],
        description: "Adquisición, contenido y campañas orquestadas con datos de crecimiento.",
        benefits: ["Campañas publicitarias altamente segmentadas", "Estrategia de contenidos atractiva", "Seguimiento preciso del retorno de inversión (ROI)"],
        results: "30% de ahorro en costes de adquisición",
        cta: "Lanzar campañas"
      },
      {
        title: serviceNames[3],
        description: "Sitios rápidos, elegantes e inmersivos diseñados para convertir y escalar.",
        benefits: ["Velocidad de carga de nivel premium", "Diseño inmersivo y de alta gama", "Optimización móvil avanzada desde el inicio"],
        results: "+40% de incremento en conversiones",
        cta: "Crear mi web premium"
      },
      {
        title: serviceNames[4],
        description: "Arquitectura, contenido y rendimiento técnico para una visibilidad duradera.",
        benefits: ["Indexación preferente en buscadores", "Auditoría técnica rigurosa de SEO", "Potenciación de visibilidad en SEO Local y Maps"],
        results: "+150% de tráfico orgánico",
        cta: "Optimizar mi SEO"
      },
      {
        title: serviceNames[5],
        description: "Posicionamiento, mensaje y dirección para una percepción de marca más premium.",
        benefits: ["Identidad visual icónica y sofisticada", "Guías de marca claras y alineadas", "Consistencia total de activos de marketing"],
        results: "Percepción de marca de alto valor consolidada",
        cta: "Redefinir mi marca"
      },
      {
        title: serviceNames[6],
        description: "Recorridos y secuencias que convierten atención en oportunidades cualificadas.",
        benefits: ["Funnels de venta de alta conversión", "Secuencias automáticas de seguimiento", "Puntuación de leads automatizada"],
        results: "+25% de leads cualificados",
        cta: "Generar leads"
      },
      {
        title: serviceNames[7],
        description: "Pipelines, scoring y seguimiento automatizado para ventas más precisas.",
        benefits: ["Dashboard de pipeline centralizado", "Sincronización bidireccional de datos", "Comunicaciones de ventas automáticas"],
        results: "Ciclo de venta acortado en un 20%",
        cta: "Configurar mi CRM"
      },
      {
        title: serviceNames[8],
        description: "Automatizaciones de negocio que conectan equipos, datos, herramientas y decisiones.",
        benefits: ["Integraciones directas multiherramienta", "Panel unificado de métricas directivas", "Alertas y notificaciones automatizadas"],
        results: "40 horas ahorradas por semana",
        cta: "Integrar mis herramientas"
      },
      {
        title: serviceNames[9],
        description: "Sistemas de IA a medida que aceleran decisiones y eliminan fricción operativa.",
        benefits: ["Modelado predictivo de datos complejos", "Herramientas de decisión a medida", "Total adaptación a tu flujo de negocio"],
        results: "Toma de decisiones 3x más rápida",
        cta: "Diseñar mi solución IA"
      }
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
          "Construimos agentes de IA, asistentes inteligentes, automatización de workflows y soluciones de IA personalizadas para empresas ambiciosas.",
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
        points: ["Perfil instantáneo", "Código QR", "Contactos en un toque"]
      }
    ],
    portfolio: {
      eyebrow: "Portfolio & Casos de Éxito",
      title: "Nuestros Proyectos Destacados.",
      description: "Conozca cómo impulsamos el crecimiento y optimizamos los flujos de trabajo de nuestros socios.",
      projects: [
        {
          title: "Aethera Luxury",
          category: "E-Commerce e IA",
          problem: "Baja conversión en dispositivos móviles y costes de soporte elevados en periodos de rebajas.",
          solution: "Creación de un storefront headless en Next.js y despliegue de un asistente de ventas conversacional con IA.",
          technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Stripe"],
          results: "+34% de conversión en móvil, reducción de soporte al cliente del 90%."
        },
        {
          title: "Clínicas Apex Med",
          category: "SEO y Agentes de Voz",
          problem: "Baja visibilidad en búsquedas locales y saturación del personal administrativo por llamadas telefónicas.",
          solution: "Implementación de SEO local estratégico y agente de voz con IA para agendar citas de forma automática.",
          technologies: ["Node.js", "Python", "Twilio API", "Google Maps SDK"],
          results: "Incremento de pacientes de 2.5x, automatización del 94% de llamadas de reservas."
        },
        {
          title: "Vortex Logistics",
          category: "Automatización de Negocio",
          problem: "Facturación manual lenta y propensa a fallos de digitación, retrasando cobros.",
          solution: "Desarrollo de flujos automatizados n8n que conectan CRM, inventarios y generación automática de facturas.",
          technologies: ["n8n", "PostgreSQL", "React", "Vercel"],
          results: "Eliminación total de discrepancias de cobro, ahorro de 40 horas manuales semanales."
        }
      ]
    },
    about: {
      eyebrow: "Sobre Velora",
      title: "Fusión de Tecnología de Vanguardia y Diseño de Alta Gama.",
      missionTitle: "Nuestra Misión",
      missionDesc: "Empoderar a empresas con visión de futuro eliminando la fricción operativa mediante IA sofisticada y diseño web de estatus premium.",
      visionTitle: "Nuestra Visión",
      visionDesc: "Un ecosistema corporativo donde las tareas monótonas son asumidas por flujos autónomos, liberando el ingenio estratégico de los equipos.",
      valuesTitle: "Nuestros Valores",
      valuesDesc: "Precisión técnica absoluta, estética premium innegociable, transparencia comercial y enfoque absoluto en resultados.",
      whyTitle: "¿Por qué Velora Studio?",
      whyDesc: "No solo creamos páginas o escribimos integraciones. Diseñamos sistemas inteligentes de captación y automatización que aumentan su margen neto y estructuran su negocio para escalar.",
      processTitle: "Nuestro Enfoque",
      processDesc: "Desde la auditoría inicial de procesos hasta el lanzamiento y el scale, cada hito se diseña con un único objetivo: maximizar su retorno de inversión (ROI)."
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "La Confianza de Líderes Ambiciosos.",
      list: [
        {
          quote: "Velora transformó completamente la gestión de nuestra clínica. La reserva automática de citas funciona sin incidencias. Un servicio premium excepcional.",
          author: "Dr. Antoine Laurent",
          role: "Director Médico, Apex Med",
          isDemo: "Testimonio Demo"
        },
        {
          quote: "Nuestro tráfico orgánico saltó un 150% en solo 4 meses. El equipo no solo diseña webs, crea verdaderos motores de crecimiento.",
          author: "Sophie Vance",
          role: "VP de Crecimiento, Aethera Luxury",
          isDemo: "Testimonio Demo"
        },
        {
          quote: "Automatizar nuestros flujos de logística nos ahorró incontables horas manuales. El panel CRM es limpio, rapidísimo e indispensable.",
          author: "Marcos Silva",
          role: "Líder de Operaciones, Vortex Logistics",
          isDemo: "Testimonio Demo"
        }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas Frecuentes.",
      items: [
        {
          question: "¿Qué tecnologías utilizáis para las páginas web?",
          answer: "Principalmente desarrollamos con Next.js, React y Tailwind CSS, garantizando así velocidades de carga ultra rápidas, SEO impecable y modularidad a largo plazo."
        },
        {
          question: "¿Cómo enfocáis el posicionamiento SEO?",
          answer: "Combinamos auditorías técnicas de código, estructuración semántica de datos (JSON-LD), optimización de rendimiento y SEO Local para máxima visibilidad en su región."
        },
        {
          question: "¿Qué incluye el Branding premium?",
          answer: "Comprende la definición de posicionamiento, logotipo, manual tipográfico, directrices de tono de voz y el diseño de todos los recursos visuales corporativos de alto valor."
        },
        {
          question: "¿Qué tareas empresariales se pueden automatizar?",
          answer: "Desde registros automáticos en CRM, cualificación previa de clientes potenciales, pipelines de cobro, secuencias de seguimiento de correo y atención al cliente básica de primer nivel."
        },
        {
          question: "¿Cuáles son los beneficios de los agentes de IA?",
          answer: "Operan 24/7 sin pausas ni fatiga, interactúan con bases de datos internas para resolver incidencias de clientes o realizar scoring de leads al instante."
        },
        {
          question: "¿Cuál es el plazo medio de un proyecto?",
          answer: "Normalmente oscila entre 4 y 8 semanas, dependiendo del alcance del diseño y de la complejidad de las integraciones de sistemas y automatización."
        },
        {
          question: "¿Cómo funciona el modelo de precios?",
          answer: "Ofrecemos presupuestos cerrados basados en hitos claros del proyecto, o modelos de suscripción mensual (retainer) para mejoras constantes de marketing y automatizaciones."
        },
        {
          question: "¿Ofrecéis soporte técnico tras el lanzamiento?",
          answer: "Sí, disponemos de planes de mantenimiento y soporte premium para monitorizar el rendimiento, aplicar actualizaciones de seguridad y expandir funcionalidades."
        }
      ]
    },
    partners: {
      eyebrow: "CONFIANZA MUNDIAL",
      title: "Con la confianza de marcas ambiciosas en Marruecos y a nivel internacional.",
      description: "Desde startups innovadoras hasta empresas consolidadas, las organizaciones confían en Velora para crear experiencias digitales, soluciones de IA y estrategias de crecimiento.",
      international: "Socios Internacionales",
      morocco: "Marruecos"
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
    contactForm: {
      nameLabel: "Nombre completo",
      namePlaceholder: "Juan Pérez",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "juan.perez@empresa.com",
      serviceLabel: "Servicio requerido",
      serviceSelect: "Seleccione un servicio...",
      messageLabel: "Alcance del proyecto",
      messagePlaceholder: "Describa sus objetivos, retos, plazos estimados...",
      challengeLabel: "Verificación de seguridad",
      challengePlaceholder: "Introduzca respuesta...",
      submitButton: "Iniciar Proyecto",
      submitting: "Transmitiendo...",
      successMessage: "¡Su mensaje ha sido enviado correctamente!",
      errorMessage: "Ocurrió un error. Por favor, inténtelo de nuevo.",
      validationEmail: "Introduzca una dirección de correo válida.",
      validationRequired: "Este campo es obligatorio.",
      validationSpam: "La respuesta de verificación es incorrecta.",
      budgetLabel: "Presupuesto estimado"
    },
    thankYou: {
      title: "Gracias por escribirnos.",
      subtitle: "Hemos recibido su mensaje y responderemos en un plazo máximo de 24 horas laborables.",
      backHome: "Volver al Inicio"
    },
    legal: {
      privacyTitle: "Política de Privacidad",
      privacyLastUpdated: "Última actualización: Junio 2026",
      privacyContent: "En Velora Studio, valoramos la confidencialidad de sus datos. Esta política detalla la recopilación y protección de sus datos. Recogemos información enviada mediante el formulario de contacto (nombre, correo, detalles del proyecto). Se usa únicamente para atender su solicitud. No compartimos datos con terceros. Conforme al RGPD, puede solicitar rectificación o cancelación escribiendo a contact.velora4241@gmail.com.",
      termsTitle: "Condiciones de Servicio",
      termsLastUpdated: "Última actualización: Junio 2026",
      termsContent: "Estas condiciones regulan el uso del sitio web y servicios de Velora Studio. Al acceder, acepta estas condiciones. Todo recurso visual, código fuente y estructura es propiedad intelectual exclusiva de Velora Studio. Queda prohibida la reproducción no autorizada. Velora Studio no se responsabiliza de cortes temporales fuera de nuestro control.",
      cookiesTitle: "Política de Cookies",
      cookiesLastUpdated: "Última actualización: Junio 2026",
      cookiesContent: "Velora Studio emplea cookies para analizar el tráfico y habilitar un funcionamiento óptimo. Las cookies requeridas son fundamentales para renderizar el sitio. Las cookies analíticas nos ayudan a estudiar los patrones de uso. Puede configurar sus preferencias usando la barra inferior de opciones."
    },
    cookieConsent: {
      title: "Configuración de Cookies",
      description: "Usamos cookies para optimizar su visita y medir tráfico. Elija sus preferencias abajo.",
      acceptAll: "Aceptar todo",
      rejectAll: "Rechazar todo",
      customize: "Personalizar",
      save: "Guardar preferencias",
      necessary: "Esenciales (Requerido)",
      analytics: "Analítica y Tráfico",
      marketing: "Marketing y Anuncios"
    },
    why: {
      eyebrow: "Por qué Velora",
      title: "Sistemas premium diseñados para convertir atención en crecimiento.",
      description:
        "Cada proyecto combina estrategia, design, automatisation y rendimiento para crear una ventaja medible, elegante y duradera.",
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
        { title: "Develop", description: "Construire interfaces, sistemas e integraciones sobre una base sólida." },
        { title: "Automate", description: "Conectar IA, CRM, workflows y datos para reducir trabajo manual." },
        { title: "Launch", description: "Desplegar, medir y asegurar un lanzamiento limpio." },
        { title: "Scale", description: "Optimizar campañas, conversión y automatizaciones de forma continua." }
      ]
    },
    footer: {
      tagline: "Strategy. Growth. Impact.",
      companyInfo: "Velora Studio es una agencia digital premium especializada en automatización de IA a medida, infraestructuras SEO avanzadas y experiencias web inmersivas diseñadas para un crecimiento medible.",
      quickLinksTitle: "Navegación",
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
      websiteHref: appWebsite,
      privacyPolicy: "Privacidad",
      termsOfService: "Condiciones",
      cookiePolicy: "Cookies"
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
