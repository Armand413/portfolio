// Remplacez les champs entre crochets. Les liens vides sont masqués.
export const portfolio = {
  name: "KI Armand Judicaël",
  monogram: "KAJ",
  profession: "Étudiant en cybersécurité",
  headline: ["Étudiant,", "spécialisation", "cybersécurité."],
  introduction:
    "Étudiant en cybersécurité, je construis mon parcours autour de la protection des systèmes et des données. Ce portfolio a vocation à présenter mes apprentissages, mes travaux pratiques et mes projets académiques.",
  location: "Ouagadougou, Burkina Faso",
  email: "kiarmand413@gmail.com",
  portrait: "images/KI_ARMAND.png",
  portraitAlt: "KI ARMAND JUDICAEL",
  cv: "",
  about:
    "Je suis KI Armand Judicaël, étudiant en cybersécurité à Ouagadougou. Mon objectif est de comprendre le fonctionnement des systèmes, les risques auxquels ils sont exposés et les moyens de mieux les protéger.",
  approach:
    "Je souhaite développer une démarche rigoureuse : comprendre un problème, expérimenter dans un environnement autorisé, documenter les observations et expliquer les limites des solutions proposées.",
  socials: [
    { label: "GitHub", url: "" },
    { label: "LinkedIn", url: "" },
  ],
  skills: [
    {
      title: "Systèmes & réseaux",
      description: "Renseigner les notions réellement abordées en cours ou en laboratoire.",
      items: ["[Systèmes étudiés]", "[Protocoles étudiés]", "[Outils utilisés en TP]"],
    },
    {
      title: "Sécurité & analyse",
      description: "Préciser les sujets explorés et leur contexte de mise en pratique.",
      items: ["[Notions de sécurité étudiées]", "[Méthodes pratiquées]", "[Outils de sécurité utilisés]"],
    },
    {
      title: "Code & documentation",
      description: "Présenter les langages et les méthodes mobilisés dans vos travaux.",
      items: ["[Langages pratiqués]", "[Outils de versionnement utilisés]", "[Rapports ou procédures rédigés]"],
    },
  ],
  // Emplacements de démonstration, aucun projet réel inventé.
  projects: [
    {
      id: "portfolio",
      placeholder: false,
      title: "portfolio",
      category: "Site Web",
      year: "2026",
      description:
        "Ce portfolio a été conçu  pour démontrer concrètement mes compétences en développement full-stack et en sécurité applicative",
      role:"",
      technologies: ["[React,Vite,Tailwind Css]"],
      problem: "",
      solution: "",
      choices: "",
      result: "",
      image: "images/portfolio.png",
      imageAlt: "",
      demo: "",
      source: "",
      visual: "arch",
    },
    {
      id: "projet-02",
      placeholder: true,
      title: "[Votre projet académique]",
      category: "[Projet de cours ou challenge CTF]",
      year: "[Année]",
      description:
        "[Ajoutez un projet ou un challenge réellement réalisé : sujet, contribution personnelle et apprentissages.]",
      role: "[Votre rôle]",
      technologies: ["[Technologie]", "[Outil]"],
      problem: "[Quel était l’objectif du projet ou du challenge ?]",
      solution: "[Présentez les étapes de résolution et votre contribution personnelle.]",
      choices: "[Expliquez vos choix, les difficultés rencontrées et ce que vous retenez.]",
      result: "",
      image: "",
      imageAlt: "",
      demo: "",
      source: "",
      visual: "orbit",
    },
  ],
  // Objets { period, title, organization, description }. Les listes vides sont masquées.
  // Dupliquez cet emplacement pour chaque certificat réellement obtenu.
  // Les fichiers locaux se placent dans public/certificats/.
  certificates: [
    {
      id: "certificat-01",
      placeholder: false,
      title: "Security Risk Management & Cryptography Fundamentals",
      issuer: "TOTAL SEMINARS",
      date: "[17/07/2026]",
      description: " bases de la sécurité: CIA triad, authentification, gestion des risques, analyse des menaces, sécurité des données et cryptographie.",
      credentialId: "",
      image: "images/CERTIFICAT_01.png",
      imageAlt: "CERTIFICAT_01",
      document: "",
      verificationUrl: "https://coursera.org/verify/LOKW750FGUHL",
    },
  ],
  experiences: [],
  education: [
    {
      period: "En cours · [Année de début à renseigner]",
      title: "Études en cybersécurité",
      organization: "[Établissement à renseigner]",
      description: "[Précisez l’intitulé exact de votre formation, votre niveau d’études et les principaux enseignements suivis.]",
    },
  ],
  seo: {
    title: "KI Armand Judicaël — Étudiant en cybersécurité",
    description:
      "Portfolio de KI Armand Judicaël, étudiant en cybersécurité à Ouagadougou : formation, apprentissages et travaux académiques.",
    url: "",
    image: "",
  },
};
