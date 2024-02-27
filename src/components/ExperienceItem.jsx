import React from 'react';
import { useTranslation } from 'react-i18next';

const ExperienceItem = (props) => {
  const { t } = useTranslation();

  const { title, description, link, date } = props;

  return (
    <div className="relative">
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80 py-1 px-2 md:py-2 md:px-4">{date}</time>

      <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mt-2 px-2 md:px-4">{title}</h3>
      <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty px-2 md:px-4">{description}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 bg-white/5 border dark:border-white/10 border-gray-300 rounded-full inline-flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10"
        >
          {t("experiences.more")}
          <svg
            className="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      )}
    </div>
  );
};

export default ExperienceItem;
