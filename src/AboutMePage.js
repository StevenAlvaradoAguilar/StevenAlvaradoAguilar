/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ChangeLanguage from "./components/icons/ChangeLanguage";
import DownArrow from "./components/icons/DownArrow";
import FrontEndCard from "./FrontEndCard";
import BackEndCard from "./BackEndCard";
import OtherTechnologies from "./OtherTechnologies";
import "./AboutMe.css";

function AboutMePage() {
  const { t, i18n } = useTranslation();

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("lang") || "en"
  );

  // const [theme, handleChange] = useTheme('dark');

  const lngs = {
    en: { nativeName: "English" },
    es: { nativeName: "Spanish" },
    fr: { nativeName: "French" },
  };

  useEffect(() => {
    localStorage.setItem("lang", selectedLang); // Actualizar el idioma seleccionado en el localStorage
    i18n.changeLanguage(selectedLang); // Cambiar el idioma en la aplicación
  }, [selectedLang, i18n]);

  const handleLanguageMenuToggle = () => {
    setIsLanguageMenuOpen((prevState) => !prevState);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang); // Cambiar el idioma seleccionado
    setIsLanguageMenuOpen(false); // Cerrar el menú de idiomas
  };

  return (
    <div className="container mx-auto px-1 py-4">
      <div className="font-bold text-sm md:text-base flex flex-wrap items-center justify-center container mx-auto border border-black rounded-full px-3 py-1 bg-neutral-200 dark:bg-black/50 backdrop-blur-2xl">
        <Link
          to="/"
          className="md:text-base hover:bg-white/20 rounded-full px-3 transition"
        >
          {t("page.backHome")}
        </Link>
        <div className="navBarTranslations font-bold text-sm md:text-base ml-20">
          <button
            type="button"
            className="button"
            aria-haspopup="true"
            aria-expanded={isLanguageMenuOpen}
            aria-label="Change language"
            onClick={handleLanguageMenuToggle}
          >
            <div className="flex items-center">
              <ChangeLanguage className="size-4 md:size-6 mr-2" />
              <DownArrow className="size-4 md:size-6" />
            </div>
          </button>
          {isLanguageMenuOpen && (
            <div className="menuLanguages floatingMenu">
              <div className="menuItems font-bold text-sm md:text-base absolute z-10 top-full left-50 mt-1 border border-black rounded-md shadow-lg focus:outline-none">
                {Object.keys(lngs).map((lng) => (
                  <div
                    className="language"
                    key={lng}
                    onClick={() => handleLanguageChange(lng)}
                  >
                    <a className="langOption">{lngs[lng].nativeName}</a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-4 botton-1 mt-10" align="center">
        {t("about.title")}
      </h1>
      <p className="text-lg mb-4 mt-5">{t("about.bio")}</p>
      <h2 className="text-2xl font-bold mb-4">{t("about.skills")}</h2>
      <p align="left">
        <a href="https://skillicons.dev">
          <div style={{ position: "relative", textAlign: "center" }}>
            <h3 className="mb-4">FrontEnd Stack</h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <FrontEndCard />
            </div>
          </div>

          <div style={{ position: "relative", textAlign: "center" }}>
            <h3 className="mb-4">BackEnd Stack</h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <BackEndCard />
            </div>
          </div>

          <div style={{ position: "relative", textAlign: "center" }}>
            <h3 className="mb-4">BackEnd Stack</h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <OtherTechnologies />
            </div>
          </div>
        </a>
      </p>
    </div>
  );
}

export default AboutMePage;
