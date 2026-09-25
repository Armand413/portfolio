import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, Monitor, X } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Navigation({ links }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("accueil");
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") || "system";
    } catch {
      return "system";
    }
  });
  const toggle = useRef(null);
  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      document.documentElement.dataset.theme =
        theme === "system" ? (media.matches ? "dark" : "light") : theme;
    };
    apply();
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* Stockage facultatif. */
    }
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [theme]);
  useEffect(() => {
    const update = () => {
      const sections = [...document.querySelectorAll("main > section[id]")];
      const current = sections
        .filter((section) => section.getBoundingClientRect().top <= 180)
        .at(-1);
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;
      setActive(
        atBottom ? sections.at(-1)?.id || "accueil" : current?.id || "accueil",
      );
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  const next =
    theme === "system" ? "light" : theme === "light" ? "dark" : "system";
  const labels = { system: "système", light: "clair", dark: "sombre" };
  const Icon = theme === "system" ? Monitor : theme === "light" ? Sun : Moon;
  return (
    <header className="header">
      <div className="container header-inner">
        <a
          href="#accueil"
          className="brand"
          aria-label={`${portfolio.name} — Accueil`}
          onClick={() => setOpen(false)}
        >
          {portfolio.monogram}
          <span>.</span>
        </a>
        <nav
          aria-label="Navigation principale"
          id="main-nav"
          className={`nav ${open ? "is-open" : ""}`}
        >
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
              {id === "contact" && (
                <ArrowUpRight size={15} aria-hidden="true" />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            className="icon-button"
            onClick={() => setTheme(next)}
            aria-label={`Thème ${labels[theme]}. Activer le mode ${labels[next]}`}
          >
            <Icon size={19} aria-hidden="true" />
          </button>
          <button
            ref={toggle}
            className="icon-button menu-button"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
