import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import ContactModal from './ContactModal';
import { Link } from 'react-router-dom';

const Footer = () => {

  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const getGreetingTime = (d = DateTime.now()) => {
    const split_afternoon = 12; // 24hr time to split the afternoon
    const split_evening = 17; // 24hr time to split the evening
    const currentHour = parseFloat(d.toFormat('hh'));

    if (currentHour >= split_afternoon && currentHour <= split_evening) {
      return 'afternoon';
    } else if (currentHour >= split_evening) {
      return 'evening';
    }
    return 'morning';
  }

  return (
    <footer
      className="rounded-lg shadow m-4 bg-black/5 dark:bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10"
    >
      <div
        className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
      >
        <span
          className="text-sm sm:text-center text-yellow-800/90 dark:text-yellow-200/90"
        >© 2024 <a
          href="https://www.linkedin.com/in/stevenalvaradoa/"
          className="hover:underline">stevenalvaradodev</a
          >. {t("footer.rights")}
        </span>
        <ul
          className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"
        >
          <Link
            to="/about"
            className="hover:bg-white/10 rounded-full px-3 transition font-bold text-sm md:text-base"
          >
            {t("header.aboutMe")}
          </Link>
          <li>
            <a
              className="hover:bg-white/10 rounded-full px-3 transition font-bold text-sm md:text-base"
              href="#contact"
              onClick={() => setIsContactModalOpen(true)} // Abrir el modal al hacer clic en "Contact"
            >
              {t("footer.contact")}
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        {t('footer.date', { date: new Date(), context: getGreetingTime() })}
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} /> {/* Renderizar el modal */}
    </footer>

  );
};

export default Footer;

