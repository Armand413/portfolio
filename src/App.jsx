import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowUp,
  Download,
  MapPin,
  ShieldCheck,
  Terminal,
  Mail,
} from "lucide-react";
import Navigation from "./components/Navigation";
import CertificateCard from "./components/CertificateCard";
import ProjectCard, { ExternalLink } from "./components/ProjectCard";
import { portfolio as p } from "./data/portfolio";

function SectionTitle({ label, title }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">// {label}</p>
      <h2 id={label === "à propos" ? "about-title" : undefined}>{title}</h2>
    </div>
  );
}
function Timeline({ title, entries }) {
  if (!entries.length) return null;
  return (
    <div className="timeline">
      <h3>{title}</h3>
      {entries.map((entry, index) => (
        <article key={index}>
          <p className="eyebrow">{entry.period}</p>
          <div>
            <h4>{entry.title}</h4>
            <p className="organization">{entry.organization}</p>
            <p className="muted">{entry.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
function useCv(url) {
  const [available, setAvailable] = useState("");
  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) return;
        const bytes = new Uint8Array(await response.arrayBuffer());
        if (new TextDecoder().decode(bytes.slice(0, 5)) === "%PDF-")
          setAvailable(url);
      })
      .catch(() => {});
    return () => controller.abort();
  }, [url]);
  return available === url && !!url;
}
export default function App() {
  const cvUrl = p.cv
    ? /^https?:/.test(p.cv)
      ? p.cv
      : `${import.meta.env.BASE_URL}${p.cv.replace(/^\//, "")}`
    : "";
  const cvAvailable = useCv(cvUrl);
  const projects = p.projects.filter((project) => !project.placeholder);
  const certificates = (p.certificates || []).filter(
    (certificate) => !certificate.placeholder,
  );
  const hasHistory = p.experiences.length || p.education.length;
  const links = [
    ["a-propos", "À propos"],
    ["competences", "Compétences"],
    ["projets", "Projets"],
    ["certificats", "Certificats"],
    ...(hasHistory ? [["parcours", "Parcours"]] : []),
    ["contact", "Contact"],
  ];
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Navigation links={links} />
      <main id="contenu" tabIndex={-1}>
        <section
          id="accueil"
          className="hero container"
          aria-labelledby="hero-title"
        >
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="profile-badge">
                <span />
                {p.profession}
              </p>
              <h1 id="hero-title">
                {p.headline.map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
              </h1>
              <p className="intro-name">
                Bonjour, je suis <strong>{p.name}.</strong>
              </p>
              <p className="hero-description muted">{p.introduction}</p>
              <div className="hero-actions">
                <a className="button-primary" href="#projets">
                  Voir mes projets <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a href="#contact" className="button-secondary">
                  Me contacter
                </a>
              </div>
            </div>
            <div className="hero-side">
              {p.portrait ? (
                <img
                  className="portrait"
                  src={p.portrait}
                  alt={p.portraitAlt || `Portrait de ${p.name}`}
                  width="700"
                  height="520"
                  fetchPriority="high"
                />
              ) : (
                <div className="portrait-placeholder">
                  <div className="portrait-grid" />
                  <ShieldCheck size={46} strokeWidth={1} aria-hidden="true" />
                  <span className="portrait-monogram">{p.monogram}</span>
                  <span className="portrait-label">
                    COMPRENDRE · APPRENDRE · PROTÉGER
                  </span>
                  <span className="portrait-note">
                    Portrait à personnaliser
                  </span>
                </div>
              )}
              <div
                className="terminal"
                aria-label="Illustration de terminal : démarche d’apprentissage"
              >
                <div className="terminal-bar">
                  <div aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>learning.sh — illustration</span>
                  <Terminal size={13} aria-hidden="true" />
                </div>
                <p className="terminal-command">$ cat parcours.json</p>
                <pre>
                  {"{\n  "}
                  <span>"domaine"</span>
                  {': "cybersécurité",\n  '}
                  <span>"démarche"</span>
                  {
                    ': [\n    "comprendre",\n    "expérimenter",\n    "documenter"\n  ]\n}'
                  }
                </pre>
                <p className="terminal-status">
                  → Un apprentissage continu<span aria-hidden="true"> _</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="a-propos"
          className="section"
          aria-labelledby="about-title"
        >
          <div className="container">
            <SectionTitle label="à propos" title="Ce qui guide mon parcours" />
            <div className="about-grid">
              <div>
                <div className="about-icon">
                  <ShieldCheck size={23} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p className="lead">{p.about}</p>
                <p className="location">
                  <MapPin size={14} aria-hidden="true" />
                  {p.location}
                </p>
              </div>
              <div className="about-copy">
                <p className="muted">{p.approach}</p>
                <div className="approach-row">
                  <span>comprendre</span>
                  <p>Les systèmes et les risques.</p>
                </div>
                <div className="approach-row">
                  <span>expérimenter</span>
                  <p>Dans un environnement autorisé.</p>
                </div>
                <div className="approach-row">
                  <span>documenter</span>
                  <p>La démarche, les observations et les limites.</p>
                </div>
                {cvAvailable && (
                  <a href={cvUrl} download className="text-link">
                    Télécharger mon CV <Download size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
        <section id="competences" className="section" aria-label="Compétences">
          <div className="container">
            <SectionTitle
              label="compétences"
              title="Mes domaines d’apprentissage"
            />
            <div className="skills-grid">
              {p.skills.map((group) => (
                <article className="skill" key={group.title}>
                  <h3>{group.title}</h3>
                  <p className="muted">{group.description}</p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="projets" className="section" aria-label="Projets">
          <div className="container">
            <SectionTitle label="projets" title="Projets & laboratoires" />
            {projects.length ? (
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <p className="empty-state">Aucun projet publié pour le moment.</p>
            )}
          </div>
        </section>
        <section id="certificats" className="section" aria-label="Certificats">
          <div className="container">
            <SectionTitle label="certificats" title="Certifications" />
            {certificates.length ? (
              <div className="certificates-list">
                {certificates.map((certificate) => (
                  <CertificateCard
                    key={certificate.id}
                    certificate={certificate}
                  />
                ))}
              </div>
            ) : (
              <p className="empty-state">
                Aucun certificat publié pour le moment.
              </p>
            )}
          </div>
        </section>
        {!!hasHistory && (
          <section
            id="parcours"
            className="section"
            aria-label="Formation et parcours"
          >
            <div className="container">
              <SectionTitle label="parcours" title="Formation & expériences" />
              <Timeline title="Formations" entries={p.education} />
              <Timeline title="Expériences" entries={p.experiences} />
            </div>
          </section>
        )}
        <section
          id="contact"
          className="section contact-section"
          aria-label="Contact"
        >
          <div className="container">
            <SectionTitle label="contact" title="Discutons" />
            <div className="contact-grid">
              <div>
                <p className="muted">
                  Un projet académique, un échange ou une opportunité ?
                  Échangeons autour de la cybersécurité et de mon parcours.
                </p>
                {p.email && (
                  <a className="contact-address" href={`mailto:${p.email}`}>
                    {p.email}
                  </a>
                )}
                <div className="socials">
                  {p.socials
                    .filter((s) => s.url)
                    .map((s) => (
                      <ExternalLink href={s.url} key={s.label}>
                        {s.label}
                      </ExternalLink>
                    ))}
                </div>
              </div>
              <div className="contact-panel">
                <Mail size={24} strokeWidth={1.5} aria-hidden="true" />
                <h3>Un premier échange ?</h3>
                <p className="muted">
                  Présentez votre idée et le contexte de votre message. Je serai
                  ravi d’en discuter avec vous.
                </p>
                {p.email ? (
                  <a className="button-primary" href={`mailto:${p.email}`}>
                    M’écrire par e-mail{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <p className="muted">Adresse de contact à renseigner.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <p>
          © {new Date().getFullYear()} {p.name}
        </p>
        <a className="text-link" href="#accueil">
          Retour en haut <ArrowUp size={14} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
