import { ArrowDownRight, ArrowUpRight, Plus } from "lucide-react";
export function ExternalLink({ href, children, className = "" }) {
  if (!href) return null;
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  );
}
export default function ProjectCard({ project, index }) {
  return (
    <article className="project">
      <div className={`project-visual ${project.visual || "arch"}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            width="1000"
            height="750"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="abstract-art" aria-hidden="true">
            <div />
            <div />
            <div />
          </div>
        )}
        {project.placeholder && (
          <span className="visual-label">EMPLACEMENT À PERSONNALISER</span>
        )}
        <span className="visual-number" aria-hidden="true">
          0{index + 1}
        </span>
        <ArrowDownRight className="visual-arrow" size={28} aria-hidden="true" />
      </div>
      <div className="project-meta">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="muted">{project.description}</p>
      <div className="tags">
        {project.technologies.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <details className="project-details">
        <summary>
          Explorer le projet <Plus size={18} aria-hidden="true" />
        </summary>
        <div className="detail-content">
          <p className="eyebrow">Rôle · {project.role}</p>
          {[
            ["Le problème", project.problem],
            ["La solution", project.solution],
            ["Les choix", project.choices],
            ["Les résultats", project.result],
          ]
            .filter(([, text]) => text)
            .map(([title, text]) => (
              <div key={title}>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          <div className="flex flex-wrap gap-5">
            <ExternalLink href={project.demo} className="text-link">
              Voir la démonstration
            </ExternalLink>
            <ExternalLink href={project.source} className="text-link">
              Voir le code source
            </ExternalLink>
          </div>
        </div>
      </details>
    </article>
  );
}
