// English text only. Identity, URLs, files and visibility are inherited from portfolio.js.
// Projects and certificates use their stable IDs; skills and education follow the French order.
export const portfolioEn = {
  profession: "Cybersecurity student",
  headline: ["Student,", "specializing in", "cybersecurity."],
  introduction:
    "As a cybersecurity student, I am building my knowledge around protecting systems and data. This portfolio presents my learning journey, hands-on labs and academic projects.",
  about:
    "I’m KI Armand Judicaël, a cybersecurity student based in Ouagadougou. My goal is to understand how systems work, the risks they face and how to better protect them.",
  approach:
    "I aim to develop a rigorous approach: understand a problem, experiment in an authorized environment, document observations and explain the limitations of proposed solutions.",
  skills: [
    {
      title: "Systems & networks",
      description:
        "Specify the concepts actually covered in class or in a lab.",
      items: [
        "[Systems studied]",
        "[Protocols studied]",
        "[Tools used in labs]",
      ],
    },
    {
      title: "Security & analysis",
      description:
        "Describe the topics explored and the context in which they were practiced.",
      items: [
        "[Security concepts studied]",
        "[Methods practiced]",
        "[Security tools used]",
      ],
    },
    {
      title: "Code & documentation",
      description: "Present the languages and methods used in your work.",
      items: [
        "[Languages practiced]",
        "[Version control tools used]",
        "[Reports or procedures written]",
      ],
    },
  ],
  projects: {
    portfolio: {
      title: "Portfolio",
      category: "Website",
      description:
        "This portfolio was designed to demonstrate my skills in full-stack development and application security.",
    },
    overthewire: {
      title: "OverTheWire Bandit — Linux & Cybersecurity",
      category: "CTF challenge",
      description:
        "A hands-on cybersecurity lab using OverTheWire Bandit to strengthen my Linux, command-line and security problem-solving skills. The levels covered SSH, file management, hidden files, permissions, file searches and Linux commands including find, grep, sort, uniq and strings. Each level is documented in a GitHub repository to record the methods used and concepts learned.",
      role: "Participant and analyst — solving challenges, analyzing problems and documenting solutions.",
      problem:
        "Solve a series of Linux and cybersecurity challenges requiring terminal use, file analysis and a progressively deeper understanding of system commands and mechanisms.",
      solution:
        "Analyze each objective, identify useful information in the environment, use appropriate Linux commands, verify the result and document the method. Solutions are organized by level in a GitHub repository.",
      choices:
        "Prioritize hands-on experimentation and understanding how commands work rather than memorizing solutions. The main challenges involved unusual files, searches with multiple criteria and data that could not be read directly.",
      result:
        "Improved skills in Linux, the terminal, SSH, file searching and analysis, technical documentation, and Git/GitHub.",
      imageAlt: "OverTheWire Bandit lab — Linux and cybersecurity",
    },
  },
  certificates: {
    "certificat-01": {
      description:
        "Security fundamentals: the CIA triad, authentication, risk management, threat analysis, data security and cryptography.",
    },
    "certificat-02": {
      description:
        "Introduction to Nmap, installation and command-line use, host discovery, network and port scanning, port states, service enumeration, version and OS detection, vulnerability scanning, scan types and options, scan customization, Nmap Scripting Engine (NSE), interpreting and exporting results, and identifying the attack surface.",
    },
  },
  education: [
    {
      period: "In progress · [Start year to be added]",
      title: "Cybersecurity studies",
      organization: "[Institution to be added]",
      description:
        "[Specify the exact program name, your year of study and the main subjects covered.]",
    },
  ],
  seo: {
    title: "KI Armand Judicaël — Cybersecurity student",
    description:
      "Portfolio of KI Armand Judicaël, a cybersecurity student in Ouagadougou: education, learning and academic projects.",
  },
};
