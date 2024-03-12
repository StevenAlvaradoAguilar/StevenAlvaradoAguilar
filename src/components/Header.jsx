/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from "../components/icons/ChangeLanguage.svg";
// import useTheme from './hooks/useTheme';
import { Link } from 'react-router-dom';

import DownArrow from './icons/DownArrow.svg';
import ContactModal from './ContactModal';                                  

const Header = () => {
  const { t, i18n } = useTranslation();
  
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(localStorage.getItem('lang') || 'en');
  
  // const [theme, handleChange] = useTheme('dark');

  const lngs = {
    en: { nativeName: "English" },
    es: { nativeName: "Spanish" },
    fr: { nativeName: "French" },
  };

  useEffect(() => {
    localStorage.setItem('lang', selectedLang); // Actualizar el idioma seleccionado en el localStorage
    i18n.changeLanguage(selectedLang); // Cambiar el idioma en la aplicación
  }, [selectedLang, i18n]);


  const handleLanguageMenuToggle = () => {
    setIsLanguageMenuOpen((prevState) => !prevState);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang); // Cambiar el idioma seleccionado
    setIsLanguageMenuOpen(false); // Cerrar el menú de idiomas
  };

  const link = "https://drive.google.com/file/d/12VqTjANe-BNWE_FQGBRja_d6V6nvjnG8/view?usp=drive_link";

  return (
    <header
      className={"flex justify-center items-center mx-auto py-3 md:py-5 sticky top-0 w-full xl:w-[800px] z-10 underline-offset-2 tracking-wider decoration-4"}
    >
      <nav className={"flex flex-wrap items-center justify-center container mx-auto border border-black rounded-full px-3 py-1 bg-neutral-200 dark:bg-black/50 backdrop-blur-2xl"}>
        <a
          className="hover:bg-white/10 rounded-full px-3 transition font-bold text-sm md:text-base"
          href="#"
        >
          {t("header.home")}
        </a>
        <a
          className="hover:bg-white/10 rounded-full px-3 transition font-bold text-sm md:text-base"
          href="#experiencia"
        >
          {t("header.experience")}
        </a>
        <a
          className="hover:bg-white/10 rounded-full px-3 transition font-bold text-sm md:text-base"
          href="#proyectos"
        >
          {t("header.projects")}
        </a>
        <Link
          to="/about"
          className="hover:bg-white/10 rounded-full px-3 transition font-bold text-sm md:text-base"
        >
          {t("header.aboutMe")}
        </Link>
        <a
          className="hover:bg-white/10 rounded-full px-3 transition font-bold text-sm md:text-base"
          href="#contact"
          onClick={() => setIsContactModalOpen(true)} // Abrir el modal al hacer clic en "Contact"
        >
          {t("header.contact")}
        </a>
        <a
          className="hover:bg-white/10 rounded-full px-3 transition font-bold text-sm md:text-base"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("header.cv")}
        </a>
        <div className="navBarTranslations font-bold text-sm md:text-base">
          <button
            type="button"
            className="button"
            aria-haspopup="true"
            aria-expanded={isLanguageMenuOpen}
            aria-label="Change language"
            onClick={handleLanguageMenuToggle}
          >
            <div className="flex items-center">
            <img className="size-4 md:size-5 mr-2" src={ChangeLanguage} alt="Change Language" />
            <img className="size-2 md:size-3" src={DownArrow} alt="DownArrow" />
            </div>
          </button>
          {isLanguageMenuOpen && (
            <div className="menuLanguages floatingMenu">
              <div className="menuItems font-bold text-sm md:text-base absolute z-10 top-full left-50 mt-1">
                {Object.keys(lngs).map((lng) => (
                  <div 
                  className="language transition-colors duration-300 hover:text-blue-500" key={lng} onClick={() => handleLanguageChange(lng)}>
                    <a className="langOption">{lngs[lng].nativeName}</a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* <div className="container-switch">
            <span>Change Theme </span>
            <label className="switch">
            <input 
              type="checkbox" 
              onChange={handleChange} 
              checked={theme === 'dark'} 
            />
            <span className="slider"></span>
            </label>
        </div> */}
      </nav>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} /> {/* Renderizar el modal */}
    </header>
  );
};

export default Header;
