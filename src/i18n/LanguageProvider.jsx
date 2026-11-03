import { useEffect, useState } from "react";
import { LanguageContext } from "./language";
import { english } from "./messages";
import { portfolio } from "../data/portfolio";
import { portfolioEn } from "../data/portfolio.en";

function localizedData(language) {
  if (language === "fr") return portfolio;
  const result = { ...portfolio, ...portfolioEn };
  for (const key of ["projects", "certificates"]) {
    result[key] = portfolio[key].map((item) => ({
      ...item,
      ...portfolioEn[key]?.[item.id],
    }));
  }
  for (const key of ["skills", "education", "experiences"]) {
    result[key] = portfolio[key].map((item, index) => ({
      ...item,
      ...portfolioEn[key]?.[index],
    }));
  }
  return result;
}
export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("portfolio-language") === "en" ? "en" : "fr";
    } catch {
      return "fr";
    }
  });
  const data = localizedData(language);
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      /* Optional storage. */
    }
    document.title = data.seo.title;
    for (const [selector, value] of [
      ['meta[name="description"]', data.seo.description],
      ['meta[property="og:title"]', data.seo.title],
      ['meta[property="og:description"]', data.seo.description],
      ['meta[property="og:locale"]', language === "en" ? "en_US" : "fr_FR"],
    ])
      document.querySelector(selector)?.setAttribute("content", value);
  }, [language, data.seo.title, data.seo.description]);
  const t = (text) => (language === "en" ? english[text] || text : text);
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, data }}>
      {children}
    </LanguageContext.Provider>
  );
}
