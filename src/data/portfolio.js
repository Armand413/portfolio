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
  cv: "CV_KI_Armand_Judicael.pdf",
  about:
    "Je suis KI Armand Judicaël, étudiant en cybersécurité à Ouagadougou. Mon objectif est de comprendre le fonctionnement des systèmes, les risques auxquels ils sont exposés et les moyens de mieux les protéger.",
  approach:
    "Je souhaite développer une démarche rigoureuse : comprendre un problème, expérimenter dans un environnement autorisé, documenter les observations et expliquer les limites des solutions proposées.",
  socials: [
    { label: "GitHub", url: "https://github.com/Armand413" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/armand-ki-a43667346/" },
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
      role: "",
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
      id: "overthewire",
      placeholder: false,
      title: "OverTheWire Bandit — Linux & Cybersécurité",
      category: "Challenge CTF",
      year: "2026",

      description:
        "Lab pratique de cybersécurité réalisé avec OverTheWire Bandit afin de renforcer mes compétences en environnement Linux, en ligne de commande et en résolution de problèmes de sécurité. Les différents niveaux m'ont permis de travailler notamment avec SSH, la gestion des fichiers, les fichiers cachés, les permissions, la recherche de fichiers et plusieurs commandes Linux telles que find, grep, sort, uniq et strings. Chaque niveau est documenté dans un dépôt GitHub afin de conserver une trace des méthodes utilisées et des concepts appris.",

      role:
        "Participant et analyste — résolution des challenges, analyse des problèmes et documentation des solutions.",

      technologies: [
        "Linux",
        "Bash",
        "SSH",
        "Git",
        "GitHub"
      ],

      problem:
        "Résoudre une série de challenges Linux et cybersécurité nécessitant l'utilisation du terminal, l'analyse de fichiers et la maîtrise progressive des commandes et mécanismes du système.",

      solution:
        "Analyse de chaque objectif, identification des informations utiles dans l'environnement, utilisation des commandes Linux adaptées, vérification du résultat puis documentation de la méthode de résolution. Les solutions sont organisées niveau par niveau dans un dépôt GitHub.",

      choices:
        "Privilégier une approche pratique basée sur l'expérimentation et la compréhension du fonctionnement des commandes plutôt que de simplement mémoriser les solutions. Les principales difficultés concernaient la manipulation de fichiers particuliers, la recherche de fichiers selon plusieurs critères et l'analyse de données non directement lisibles.",

      result:
        "Renforcement des compétences en Linux, terminal, SSH, recherche et analyse de fichiers, ainsi qu'en documentation technique et utilisation de Git/GitHub.",

      image: "images/overthewire.png",
      imageAlt: "Lab OverTheWire Bandit — Linux et cybersécurité",
      demo: "",
      source: "https://github.com/Armand413/overthewire-bandit",
      visual: "orbit",
    }
    ,
    {
  id: "mini-soc",
  placeholder: false,
  title: "CyberDefender Lab — Mini-SOC avec Wazuh",
  category: "Projet personnel de cybersécurité",
  year: "2026",
  description:
    "Laboratoire SOC virtualisé construit de zéro sous VirtualBox : supervision centralisée avec Wazuh et détection d'attaques SSH jouées depuis Kali Linux contre mes propres machines.",
  role: "Conception, déploiement et administration en solo",
  technologies: ["Wazuh", "VirtualBox", "Ubuntu Server", "Kali Linux", "Hydra", "Bash", "SSH"],
  problem:
    "Construire un laboratoire de détection fonctionnel capable de superviser une machine, de détecter des attaques réelles (échecs d'authentification, force brute SSH) et de mesurer la qualité de cette détection, plutôt que de se limiter à une installation de démonstration.",
  solution:
    "Conception du réseau et des rôles (serveur SOC, machine supervisée, poste d'attaque), déploiement de Wazuh en tout-en-un (indexer, manager, dashboard), enrôlement d'un agent, puis attaques SSH depuis Kali : échecs d'authentification manuels, suivis d'une force brute automatisée avec Hydra (dictionnaire de 20 mots de passe). Les deux scénarios ont généré des alertes distinctes dans Wazuh, avec une règle de détection de force brute déclenchée uniquement sur l'attaque automatisée.",
  choices:
    "Deux installations de Wazuh ont échoué (le service manager dépassait son délai de démarrage) ; l'analyse des journaux système a mené à revoir le dimensionnement de la machine (passage à 4 vCPU et 8 Go de RAM), après quoi l'installation a abouti. Cette étape m'a appris à diagnostiquer une panne à partir des journaux plutôt qu'à relancer une installation au hasard, et à vérifier la cohérence des fuseaux horaires avant de mesurer un temps de détection.",
  result:
    "Infrastructure opérationnelle avec un agent actif et supervisé. Premiers résultats : un test manuel (3 échecs) a généré 5 alertes de faible gravité, tandis qu'une attaque automatisée (20 échecs en 24 secondes) a généré 33 alertes et déclenché la règle de détection de force brute, absente du premier test. Projet en cours : mesures précises du temps de détection, règle de corrélation personnalisée et intégration d'une sonde réseau (Suricata) à venir.",
  image: "images/dashboard.png",
  imageAlt: "Tableau de bord Wazuh affichant les alertes de force brute SSH détectées sur l'agent sensor",
  demo: "",
  source: "https://github.com/Armand413/wazuh-mini-soc",
  visual: "orbit",
},
{
  id: "niifyeen",
  placeholder: false,
  title: "Niifyeen",
  category: "Surveillance",
  year: "2026",
  description: "Prototype de reconnaissance faciale et de suivi multi-caméras, qui illustre les technologies sur lesquelles s'appuient de nombreux systèmes de sécurité publique. Pour un gouvernement, un tel outil permet de retrouver rapidement une personne recherchée (personne disparue, suspect, individu représentant une menace), de renforcer la sécurité des lieux sensibles (aéroports, gares, grands événements) et de réagir plus vite en situation d'urgence. Le prototype démontre à petite échelle la faisabilité technique de ces systèmes. Il est développé dans un environnement fermé et contrôlé, avec des volontaires consentants, afin d'étudier à la fois son potentiel opérationnel et les garanties nécessaires (cadre légal, protection des données, contrôle démocratique) pour qu'un déploiement à plus grande échelle reste conforme aux droits fondamentaux des citoyens.",
  role: "Conception, développement et administration, en équipe",
  technologies: ["Python", "FastAPI", "Uvicorn", "SQLAlchemy", "SQLite", "OpenCV", "YOLOv8", "ByteTrack", "InsightFace", "JavaScript"],
  problem: "Montrer qu'on peut retrouver une personne recherchée à travers plusieurs caméras sans surveiller manuellement chaque flux. Il fallait détecter les personnes, reconnaître celles que l'on cherche, les suivre d'une caméra à l'autre et alerter un opérateur, le tout avec du matériel ordinaire et sans service cloud.",
  solution: "J'ai construit une application web locale. YOLOv8 détecte les personnes et ByteTrack les suit d'image en image. InsightFace compare les visages à une liste de cibles et de personnes enregistrées. Une fois reconnue, une personne garde son identité tant que sa silhouette est suivie, même si son visage n'est plus visible (durée réglable). Les caméras sont placées sur une carte de Ouagadougou et le parcours d'une cible peut être rejoué dans l'historique. Les alertes ne se déclenchent que pour les cibles, et la détection tourne côté serveur, indépendamment du navigateur.",
  choices: "Tout reste sur la machine (serveur limité à 127.0.0.1, pas d'envoi de données biométriques vers l'extérieur) pour limiter les risques liés à des données sensibles. J'ai retiré les modules qui n'étaient pas essentiels (statistiques, rapports, zones, enregistrements) pour garder un outil centré sur la recherche d'une cible. Principale difficulté : l'identification exige un visage lisible, d'où le maintien d'identité par le suivi, avec son risque de confusion quand des personnes se croisent. Le prototype n'a pas été validé avec de vraies caméras de terrain et ses seuils ne sont pas calibrés. J'en retiens que la partie technique est la plus simple : ce qui compte vraiment, ce sont le consentement, la protection des données et le contrôle humain.",
  result: "Un prototype fonctionnel avec 518 tests automatisés qui passent : détection et suivi multi-caméras, gestion de cibles, alertes ciblées, carte de la ville et historique des parcours. Il n'a pas été mesuré en conditions réelles (taux de reconnaissance, fausses alertes).",
  image: "images/supervision.png",
  imageAlt: "Interface de Niifyeen : carte de Ouagadougou avec les caméras et le suivi d'une cible",
  demo: "",
  source: "https://github.com/Armand413/niifyeen",
  visual: "orbit",
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
      title: "COMPTIA SECURITY +",
      issuer: "TOTAL SEMINARS",
      date: "[02/11/2026]",
      description: " bases de la sécurité: CIA triad, authentification, gestion des risques, analyse des menaces, sécurité des données et cryptographie.",
      credentialId: "",
      image: "images/Comptia_Security_+.png",
      imageAlt: "CERTIFICAT_COMPTIA_SECURITY_+",
      document: "",
      verificationUrl: "https://coursera.org/verify/specialization/4L5DIRGM8G5N",
    },
    {
      id: "certificat-02",
      placeholder: false,
      title: "Vulnerability Scanning with Nmap: Network Scanning",
      issuer: "COURSERA",
      date: "20/08/2026",
      description: " troduction à Nmap, installation et utilisation en ligne de commande, découverte des hôtes actifs (Host Discovery), analyse réseau (Network Scanning), scan des ports (Port Scanning), identification de l’état des ports, énumération des services (Service Enumeration), détection des versions (Version Detection), détection du système d’exploitation (OS Detection), recherche de vulnérabilités (Vulnerability Scanning), types et options de scans Nmap, personnalisation des scans, utilisation de Nmap Scripting Engine (NSE), analyse et interprétation des résultats, sauvegarde/exportation des résultats et identification de la surface d’attaque.",
      credentialId: "",
      image: "images/CERTIFICAT_02.png",
      imageAlt: "CERTIFICAT_02",
      document: "",
      verificationUrl: "https://coursera.org/verify/PMG0AGD1ET2L",
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
