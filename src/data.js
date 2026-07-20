// src/data.js
// Toutes les données du portfolio centralisées ici.
// Modifie ce fichier pour mettre à jour le contenu sans toucher à App.js.

// -------------------------------------------------------------------------
// SEO — à adapter avec ton vrai nom de domaine une fois déployé
// -------------------------------------------------------------------------
export const SITE_URL = "https://jaures229.github.io"; // Site utilisateur GitHub Pages (racine)
export const SITE_IMAGE = "assets/images/og-preview.jpg"; // image de partage 1200x630 recommandée

export const SEO = {
  fr: {
    title: "Jaurès AGOSSOU — Gameplay Programmer | Portfolio",
    description:
      "Portfolio de Jaurès AGOSSOU, Gameplay  Programmer spécialisé en C++/Unity Projets : R-Type, AstroWorld, Zemidjan Road Rage",
    keywords:
      "gameplay programmer, développeur de jeux vidéo, C++, Unity, ECS, netcode, portfolio game dev, Epitech, Bénin, Masseka Game Studio",
  },
  en: {
    title: "Jaurès AGOSSOU — Gameplay & Network Programmer | Portfolio",
    description:
      "Portfolio of Jaurès AGOSSOU, a Gameplay & Network Programmer specialized in C++/Unity. Featured projects: R-Type, AstroWorld, Zemidjan Road Rage.",
    keywords:
      "gameplay programmer, network programmer, game developer, C++, Unity, ECS, game dev portfolio, Epitech, Benin, Masseka Game Studio",
  },
};

export const TECH_ICONS = {
  "C++": "assets/icons/cpp.svg",
  "C": "assets/icons/c_language.png",
  "C#": "assets/icons/csharp.svg",
  "Python": "assets/icons/python.svg",
  "Lua": "assets/icons/lua.svg",
  "JavaScript": "assets/icons/javascript.svg",
  "Unity": "assets/icons/unity.svg",
  "SFML": "assets/icons/sfml.png",
  "SDL2": "assets/icons/sdl2.svg",
  "CMake": "assets/icons/cmake.svg",
  "Git": "assets/icons/git.svg",
  "Docker": "assets/icons/docker.svg",
  "Jenkins": "assets/icons/jenkins.svg",
  "Linux": "assets/icons/linux.svg",
};

// -------------------------------------------------------------------------
// TRANSLATIONS — textes statiques (navbar, hero, titres de sections, footer)
// -------------------------------------------------------------------------
export const TRANSLATIONS = {
  fr: {
    // Navbar
    navStart: "Accueil",
    navMissions: "Missions",
    navData: "CV",
    navComms: "Contact",

    // Hero
    heroSubtitle: "Gameplay  Programmer",
    heroStatsLvl: "LVL 19 — Gameplay Programmer",
    heroDesc:
      "Développeur de jeux vidéo spécialisé en programmation gameplay. Passionné par l'architecture technique des jeux (ECS, State Machines, netcode), j'aime transformer des systèmes complexes en expériences fluides et réactives.",
    downloadCV: "Télécharger le CV",

    // Skills
    techTitle: "Arbre de Compétences",
    skillRootTag: "JOUEUR",
    skillEngines: "Moteurs",
    skillLanguages: "Langages",
    skillTools: "Outils & Concepts",
    skillLibraries: "Librairies",

    // Projects
    missionTitle: "Journal des Missions",
    allMissions: "Toutes",
    proMissions: "Professionnel",
    sideQuests: "Projets Perso",
    systemLoadout: "Stack Technique",
    viewBriefing: "Voir la mission",
    closeBriefing: "Fermer",

    // Experience / Education
    experienceTitle: "Quêtes Principales",
    educationTitle: "Académie",
    expandEntry: "Détails",
    collapseEntry: "Réduire",
    ongoing: "En cours",

    // Footer
    contactTitle: "Communications",
    insertCoin: "INSERT COIN TO CONTINUE",
    contactText:
      "Toujours partant pour discuter d'un projet, d'une opportunité ou simplement échanger sur le game dev. N'hésitez pas à me contacter !",
  },
  en: {
    // Navbar
    navStart: "Start",
    navMissions: "Missions",
    navData: "Resume",
    navComms: "Comms",

    // Hero
    heroSubtitle: "Gameplay  Programmer",
    heroStatsLvl: "LVL 22 — Gameplay Programmer",
    heroDesc:
      "Game developer specialized in gameplay. Passionate about the technical architecture of games (ECS, State Machines, netcode), I enjoy turning complex systems into smooth, responsive experiences.",
    downloadCV: "Download Resume",

    // Skills
    techTitle: "Skill Tree",
    skillRootTag: "PLAYER",
    skillEngines: "Engines",
    skillLanguages: "Languages",
    skillTools: "Tools & Concepts",
    skillLibraries: "Libraries",

    // Projects
    missionTitle: "Mission Log",
    allMissions: "All",
    proMissions: "Professional",
    sideQuests: "Side Quests",
    systemLoadout: "System Loadout",
    viewBriefing: "View briefing",
    closeBriefing: "Close",

    // Experience / Education
    experienceTitle: "Main Quests",
    educationTitle: "Academy",
    expandEntry: "Details",
    collapseEntry: "Collapse",
    ongoing: "Ongoing",

    // Footer
    contactTitle: "Comms",
    insertCoin: "INSERT COIN TO CONTINUE",
    contactText:
      "Always open to talk about a project, an opportunity, or just geek out about game dev. Feel free to reach out!",
  },
};

// -------------------------------------------------------------------------
// PROJECTS — R-TYPE en vedette, suivi des autres projets
// -------------------------------------------------------------------------
export const PROJECTS = [
  {
    title: "Zemidjan Road Rage",
    type: "pro",
    featured : true,
    date: "2025",
    context: {
      fr: "Équipe de 4 — Gameplay & Physique",
      en: "Team of 4 — Gameplay & Physics",
    },
    tagline: {
      fr: "Runner mobile physique mettant en valeur la culture urbaine des conducteurs de taxi-moto (Zemidjans).",
      en: "Physics-based mobile runner celebrating the urban culture of local motorcycle taxi drivers (Zemidjans)."
    },
    mediaType: "youtube",
    mediaSrc: "DQIltyTADHw",
    imageAlt: "Zemidjan Road Rage gameplay screenshot",
    technologies: ["Unity", "C#"],
    stack: "Unity · C# · Physique de véhicule arcade",
    description: {
      fr: [
        "Conception et développement d'un prototype 2D sous Unity C# visant à valoriser le patrimoine culturel et le quotidien du transport urbain béninois.",
        "Ajustement et implémentation d'un moteur physique 2D personnalisé pour simuler avec précision et dynamisme les comportements des mototaxis.",
        "Création d'une boucle de gameplay de type Runner, intégrant une gestion des obstacles et un système de score dynamique reflétant la réalité du trafic local.",
      ],
      en: [
        "Designed and developed a 2D prototype in Unity C# focused on celebrating cultural heritage and the daily life of Beninese urban transit.",
        "Fine-tuned and implemented custom 2D physics behaviors to accurately and dynamically simulate local motorcycle taxi physics.",
        "Created a core Runner gameplay loop, integrating obstacle management and a dynamic scoring system reflecting local traffic reality.",
      ],
    },
    links: [
      { label: "PLAYSTORE", url: "https://play.google.com/store/apps/details?id=com.DefaultCompany.ZemidjanRoadRage&pli=1", isItch: true},
    ],
  },
  {
    title: "R-TYPE",
    type: "perso",
    date: "2024",
    context: {
      fr: "Projet Epitech — Équipe de 5 — Moteur & Réseau",
      en: "Epitech Project — Team of 5 — Engine & Network",
    },
    tagline: {
      fr: "Moteur ECS + netcode UDP server-authoritative pour un shoot 'em up multijoueur.",
      en: "ECS engine + server-authoritative UDP netcode for a multiplayer shoot 'em up.",
    },
    mediaType: "youtube",
    mediaSrc: "n7Ic8BMVGXg",
    imageAlt: "R-Type gameplay",
    technologies: ["C++", "ECS", "TCP/UDP", "SFML", "CMake", "Git", "Lua"],
    stack: "C++17 · ECS Engine · Client/Serveur UDP · Cross-platform (Linux/Windows)",
    description: {
      fr: [
        "Conception d'un moteur de jeu générique en C++ reposant sur une architecture ECS (Entity Component System) pour découpler données et comportements.",
        "Implémentation du netcode client/serveur en UDP avec gestion de la fiabilité applicative, de la latence et de la réconciliation d'état (server-authoritative).",
        "Mise en place d'un système de sérialisation binaire des paquets réseau pour minimiser la bande passante utilisée.",
        "Développement du système de spawn et de patterns d'ennemis via lua scripting",
      ],
      en: [
        "Designed a generic C++ game engine built on an ECS (Entity Component System) architecture to decouple data from behaviour.",
        "Implemented client/server netcode over UDP with custom reliability layer, latency handling and server-authoritative state reconciliation.",
        "Built a binary packet serialization system to minimize network bandwidth usage.",
        "Developed enemy spawn and pattern systems through a configurable lua script",
      ],
    },
    links: [
      { label: "GitHub", url: "https://github.com/Jaures229/R-Type", isItch: false },
    ],
  },
  {
    title: "AstroWorld",
    type: "perso",
    date: "2025",
    context: {
      fr: "Projet Perso — Equipe de 4 — Gameplay",
      en: "Personal Project — Team of 4 — Gameplay",
    },
    tagline: {
      fr: "Jeu de plateforme ludo-éducatif spatial visant à vulgariser l'astronomie.",
      en: "Educational space platformer designed to popularize astronomy."
    },
    mediaType: "youtube",
    mediaSrc: "19r1Wgs_hfI",
    imageAlt: "AstroWorld Gameplay",
    technologies: ["Unity", "C#", "Git"],
    stack: "Unity 2022 LTS · C#",
    description: {
      fr: [
        "Développement d'un prototype 3D ludo-éducatif visant à promouvoir les sciences spatiales et l'astronomie auprès du public africain.",
        "Création d'un système d'événements découplé (Observer Pattern) pour synchroniser l'affichage des données astronomiques (UI), l'audio et le gameplay.",
      ],
      en: [
        "Developed an educational 3D prototype aimed at promoting space sciences and astronomy to African audiences.",
        "Built a decoupled event system (Observer Pattern) to synchronize real-time astronomical data displays (UI), audio, and gameplay.",
      ]
    },
    links: [
    ],
  },
  {
    title: "Kekenon Racing",
    type: "perso",
    date: "2025",
    context: {
      fr: "Projet D'équipe — Equipe de 4",
      en: "Team Project — Team of 4",
    },
    tagline: {
      fr: "Prototype de jeu de course 2D célébrant l'univers des conducteurs de taxi-moto (Zemidjans) au Bénin.",
      en: "2D racing game prototype celebrating the unique world of motorcycle taxi drivers (Zemidjans) in Benin."
    },
    mediaType: "youtube",
    mediaSrc: "dho1rWR0GiA",
    imageAlt: "Kekenon Racing gameplay",
    technologies: ["Unity", "C#"],
    stack: "Unity · C#",
    description: {
      fr: [
        "Conception et programmation d'un prototype de jeu de course 2D sous Unity C# mettant à l'honneur le dynamisme urbain et l'identité culturelle du Bénin.",
      ],
      en: [
        "Designed and programmed a 2D racing game prototype in Unity C# showcasing the urban dynamism and cultural identity of Benin.",
      ],
    },
    links: [
    ],
  },
  {
    title: "Kekenon Baba",
    type: "perso",
    date: "2025",
    context: {
      fr: "Projet d'équipe — Gameplay 2D",
      en: "Team Project — Solo — 2D Gameplay",
    },
    tagline: {
      fr: "Prototype de jeu de course 2D célébrant l'univers des conducteurs de taxi-moto (Zemidjans) au Bénin.",
      en: "2D racing game prototype celebrating the unique world of motorcycle taxi drivers (Zemidjans) in Benin."
    },
    mediaType: "youtube",
    mediaSrc: "jGwtcBUdAIc",
    imageAlt: "Kekenon Baba gameplay screenshot",
    technologies: ["Unity", "C#"],
    stack: "Unity · C#",
    description: {
      fr: [
        "Conception et programmation d'un prototype de jeu de course 2D sous Unity C# mettant à l'honneur le dynamisme urbain et l'identité culturelle du Bénin.",
      ],
      en: [
        "Designed and programmed a 2D racing game prototype in Unity C# showcasing the urban dynamism and cultural identity of Benin.",
      ],
    },
    links: [
    ],
  },
];

// -------------------------------------------------------------------------
// ARSENAL — structure du Skill Tree (racine Unity/C# + 3 branches)
// -------------------------------------------------------------------------
export const ARSENAL = {
  MOTEURS: [
    { icon: TECH_ICONS["Unity"], name: "Unity" },
  ],
  LANGAGES: [
    { icon: TECH_ICONS["C++"], name: "C++" },
    { icon: TECH_ICONS["C"], name: "C" },
    { icon: TECH_ICONS["C#"], name: "C#" },
    { icon: TECH_ICONS["Lua"], name: "Lua" },
    { icon: TECH_ICONS["JavaScript"], name: "JavaScript" },
  ],
  "OUTILS & CONCEPTS": [
    { icon: TECH_ICONS["Git"], name: "Git" },
    { icon: TECH_ICONS["CMake"], name: "CMake" },
    { icon: TECH_ICONS["Linux"], name: "Linux" },
    { icon: TECH_ICONS["Docker"], name: "Docker" },
  ],
  LIBRAIRIE: [
    { icon: TECH_ICONS["SFML"], name: "SFML" },
    { icon: TECH_ICONS["SDL2"], name: "SDL2" },

  ],
};

// -------------------------------------------------------------------------
// EXPERIENCES — Quêtes Principales
// -------------------------------------------------------------------------
export const EXPERIENCES = [
  {
    period: "Mai 2025 - Nov 2025",
    company: "Masseka Game Studio",
    role: {
      fr: "Gameplay Programmer",
      en: "Gameplay Programmer",
    },
    summary: {
      fr: "Systèmes de gameplay Unity  en production.",
      en: "C++/Unity gameplay systems in production.",
    },
    achievements: {
      fr: [
        "Développement de systèmes de gameplay en Unity pour des titres en cours de production.",
        "Collaboration avec les équipes design et art dans un pipeline agile (revues de code, sprints).",
      ],
      en: [
        "Developed gameplay systems in C++/Unity for titles in active production.",
        "Collaborated with design and art teams in an agile pipeline (code reviews, sprints).",
      ],
    },
  },
];

// -------------------------------------------------------------------------
// EDUCATION — Académie
// -------------------------------------------------------------------------
export const EDUCATION = [
  {
    period: "2022 — 2025",
    school: "Epitech",
    degree: {
      fr: "Expert en Technologies de l'Information",
      en: "Information Technology Expert Degree",
    },
    summary: {
      fr: "Cursus 100% projets — C/C++, systèmes, réseau, travail en équipe.",
      en: "100% project-based curriculum — C/C++, systems, networking, teamwork.",
    },
    details: {
      fr: "Cursus par projets 100% orienté pratique : algorithmique, C/C++, architecture système, réseau, et gestion de projet en équipe. Réalisation de projets techniques exigeants dont R-Type, un moteur de jeu multijoueur en C++.",
      en: "Fully project-based, hands-on curriculum: algorithms, C/C++, systems architecture, networking, and team project management. Delivered demanding technical projects including R-Type, a multiplayer C++ game engine.",
    },
  },
];
