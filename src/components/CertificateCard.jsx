import { useLanguage } from "../i18n/language";
import { Award, FileText } from "lucide-react";
import { ExternalLink } from "./ProjectCard";

function assetUrl(path) {
  if (!path) return "";
  return /^https?:\/\//i.test(path)
    ? path
    : `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export default function CertificateCard({ certificate }) {
  const { t } = useLanguage();
  return (
    <article className="certificate">
      <div className="certificate-visual">
        {certificate.image ? (
          <img
            src={assetUrl(certificate.image)}
            alt={
              certificate.imageAlt ||
              `${t("Certificat")} : ${certificate.title}`
            }
            width="640"
            height="450"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Award size={58} strokeWidth={1} aria-hidden="true" />
        )}
      </div>
      <div className="certificate-content">
        {certificate.placeholder && (
          <p className="eyebrow certificate-placeholder">
            {t("Emplacement à personnaliser")}
          </p>
        )}
        <h3>{certificate.title}</h3>
        <div className="certificate-meta">
          <span>{certificate.issuer}</span>
          {certificate.date && (
            <span>
              {t("Obtention")} : {certificate.date}
            </span>
          )}
        </div>
        {certificate.description && (
          <p className="muted">{certificate.description}</p>
        )}
        {certificate.credentialId && (
          <p className="certificate-id">
            {t("Identifiant")} : {certificate.credentialId}
          </p>
        )}
        {(certificate.document || certificate.verificationUrl) && (
          <div className="certificate-links">
            <ExternalLink
              href={assetUrl(certificate.document)}
              className="text-link"
            >
              <FileText size={16} aria-hidden="true" />
              {t("Consulter le certificat")}
              <span className="sr-only"> : {certificate.title}</span>
            </ExternalLink>
            <ExternalLink
              href={certificate.verificationUrl}
              className="text-link"
            >
              {t("Vérifier auprès de l’organisme")}
              <span className="sr-only"> : {certificate.title}</span>
            </ExternalLink>
          </div>
        )}
      </div>
    </article>
  );
}
