import React from 'react';
import { useTranslation } from 'react-i18next';

// Importa los iconos SVG directamente aquí
import ReactIcon from "./icons/ReactIcon";
import FirebaseIcon from "./icons/Firebase";
import HTMLIcon from "./icons/HTML";
import CSSIcon from "./icons/CSS";
import JavaScriptIcon from "./icons/JavaScript";

const TAGS = {
  REACT: {
    name: "React.js",
    class: "bg-[#0000ff] text-white text-center",
    icon: ReactIcon,
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-[#a8b000] text-white",
    icon: FirebaseIcon,
  },
  HTML: {
    name: "HTML",
    class: "bg-[#ff8000] text-white",
    icon: HTMLIcon,
  },
  CSS: {
    name: "CSS",
    class: "bg-[#0000ff] text-white",
    icon: CSSIcon,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-[#a8b000] text-white",
    icon: JavaScriptIcon,
  },
};

const Projects = () => {
  const { t } = useTranslation();

  const PROJECTS = [
    {
      title: t("projects.title"),
      description: t("projects.description"),
      link: "https://kamienimportaciones.netlify.app/",
      github: "",
      image: "/projects/Kámien.webp",
      tags: [TAGS.REACT, TAGS.FIREBASE, TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS],
    },
  ];

  return (
    <>
      {PROJECTS.map(({ image, title, description, tags, link }, index) => (
        <div key={index}>
          <article className="mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              {title}
            </h3>
            <p className="text-lg mb-4 text-pretty">{description}</p>

            <ul className="flex flex-wrap gap-x-2 sm:gap-x-4 md:gap-x-6 flex-row mb-2">
              {tags.map((tag, index) => (
                <li key={index} className="mb-2">
                  <span
                    className={`flex items-center gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 border border-white/10`}
                    style={{ minWidth: "120px" }}
                  >
                    <tag.icon className="size-4" />
                    {tag.name}
                  </span>
                </li>
              ))}
            </ul>

            <img
              loading="lazy"
              className="rounded shadow-2xl shadow-white/10 aspect-video mt-8 w-full"
              src={image}
              alt={`${t("projects.screenshot")} ${image}`}
            />
          </article>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-white/5 border dark:border-white/10 border-gray-300 rounded-full inline-flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10"
          >
            {t("experiences.more")}{" "}
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
        </div >
      ))}
    </>
  );
};

export default Projects;
