import React from 'react';
import { useTranslation } from 'react-i18next';
import "./imageCards.css"

// Importa los iconos SVG directamente aquí
import ReactIcon from "./icons/ReactIcon.svg";
import FirebaseIcon from "./icons/Firebase.svg";
import HTMLIcon from "./icons/HTML.svg";
import CSSIcon from "./icons/CSS.svg";
import JavaScriptIcon from "./icons/JavaScript.svg";
import NextJsIcon from "./icons/NextJs.svg";
import TypescriptIcon from "./icons/Typescript.svg";
import APIIcon from "./icons/API.svg";
import TailwindIcon from "./icons/Tailwind.svg";
import PythonIcon from "./icons/Python.svg";
import DjangoIcon from "./icons/Django.svg";
import PostgresqlIcon from "./icons/Postgresql.svg";
import VercelIcon from "./icons/Vercel.svg";
import RenderIcon from "./icons/Render.svg";

const TAGS = {
  REACT: {
    name: "React.js",
    icon: ReactIcon,
  },
  FIREBASE: {
    name: "Firebase",
    icon: FirebaseIcon,
  },
  HTML: {
    name: "HTML",
    icon: HTMLIcon,
  },
  CSS: {
    name: "CSS",
    icon: CSSIcon,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  NEXTJS: {
    name: "NextJS",
    icon: NextJsIcon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: TypescriptIcon,
  },
  TAILWIND: {
    name: "Tailwind",
    icon: TailwindIcon,
  },
  API: {
    name: "API",
    icon: APIIcon,
  },
  PYTHON: {
    name: "Python",
    icon: PythonIcon,
  },
  DJANGO: {
    name: "Django",
    icon: DjangoIcon,
  },
  POSTGRESQL: {
    name: "Postgresql",
    icon: PostgresqlIcon,
  },
  VERCEL: {
    name: "Vercel",
    icon: VercelIcon,
  },
  RENDER: {
    name: "Render",
    icon: RenderIcon,
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
    {
      title: t("projects.title2"),
      description: t("projects.description2"),
      link: "https://globalweathers.netlify.app/",
      github: "https://github.com/StevenAlvaradoAguilar/Weather-App",
      image: "/projects/Weather.webp",
      tags: [TAGS.NEXTJS, TAGS.TYPESCRIPT, TAGS.API, TAGS.TAILWIND],
    },
    {
      title: t("projects.title3"),
      description: t("projects.description3"),
      link: "https://django-nextjs-crud-front-iwcqzvrk0.vercel.app/",
      github: "https://github.com/StevenAlvaradoAguilar/Django-Nextjs-CRUD-Front-end",
      image: "/projects/TodoAppCRUD.webp",
      tags: [TAGS.NEXTJS, TAGS.PYTHON, TAGS.DJANGO, TAGS.POSTGRESQL, TAGS.VERCEL, TAGS.RENDER],
    },
  ];

  return (
    <>
      {PROJECTS.map(({ image, title, description, tags, github, link }, index) => (
        <div key={index} className="mb-8 sm:mb-12 md:mb-12 pb-8">
          <article className="mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              {title}
            </h3>
            <p className="text-lg mb-4 text-pretty">{description}</p>

            <ul className="flex flex-wrap gap-x-2 sm:gap-x-4 md:gap-x-6 flex-row mb-2">
              {tags.map((tag, index) => (
                <li key={index} className="mb-2">
                  <span
                    className={`tags flex items-center gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 border border-white/10`}
                    style={{ minWidth: "120px" }}
                  >
                    {typeof tag.icon === 'string' ? (
                      <img loading="lazy" src={tag.icon} alt={tag.name} className="size-8" />
                    ) : (
                      <img loading="lazy" src={tag.icon.default} alt={tag.name} className="size-8" />
                    )}
                    {tag.name}
                  </span>
                </li>
              ))}
            </ul>

            <img
              loading="lazy"
              className="imageProjects rounded shadow-2xl shadow-white/10 aspect-video mt-8 w-full"
              src={image}
              alt={`${t("projects.screenshot")} ${image}`}
            />
          </article>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="links ml-4 inline-flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10"
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
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="links ml-4 inline-flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10"
            >
              {t("experiences.github")}{" "}
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
        </div >
      ))}
    </>
  );
};

export default Projects;
