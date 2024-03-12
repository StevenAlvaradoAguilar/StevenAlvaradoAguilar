import React, { useEffect } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import Badge from "../src/components/Badge";
import SectionContainer from "../src/components/SectionContainer";
import LinkedInIcon from "../src/components/icons/LinkedIn.svg";
import SocialPill from "../src/components/SocialPill";
import GitHubIcon from "../src/components/icons/GitHub.svg";
import MailIcon from "../src/components/icons/Mail.svg";
import Experience from "../src/components/Experience";
import Briefcase from "../src/components/icons/Briefcase.svg";
import CodeIcon from "../src/components/icons/Code.svg";
import Projects from "../src/components/Projects";
import Phone from "../src/components/icons/Phone.svg";

function App() {
  const { t, i18n  } = useTranslation();

  useEffect(() => {
    document.title = t("start.title");
    document.description = t("start.description");
  }, [i18n.language, t]);

  return (
    <div className="App">
      <Header />
      <main className="px-4">
        <SectionContainer className="py-35 pb-15 mt-4">
          <img
            className="rounded-full size-24 mb-6"
            src="/stevendev.webp"
            alt="Steven Dev"
          />
          <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
            {t("page.name")}
            <a
              href="https://www.linkedin.com/in/stevenalvaradoa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center hover:bg-white/10 rounded-full px-8 transition"
            >
              <Badge>{t("page.about")}</Badge>
            </a>
          </h1>
          <h2 className="text-xl lg:text-2xl text-balance max-w-[700px] text-black dark:text-white">
            <span>{t("page.descriptionw")}</span>
            <span className="text-yellow-800 dark:text-yellow-200">
              {t("page.descriptionw1")}
            </span>
            <span className="text-red-800 dark:text-red-200">
              {t("page.ubication")}
            </span>
            .
            <span className="text-sky-800 dark:text-sky-200">
              {t("page.motivation")}
            </span>
          </h2>

          <nav className="flex gap-4 mt-8 flex-wrap">
            <SocialPill href="https://www.linkedin.com/in/stevenalvaradoa/">
              <img className="size-4 md:size-6" src={LinkedInIcon} alt="LinkedIn" />
              LinkedIn
            </SocialPill>
            <SocialPill href="https://github.com/StevenAlvaradoAguilar">
              <img className="size-4 md:size-6" src={GitHubIcon} alt="GitHub" />
              GitHub
            </SocialPill>
            <SocialPill href="https://wa.me/+50683493058">
              <img className="size-4 md:size-4" src={Phone} alt="Phone" />
              {t("page.contact")}
            </SocialPill>
            <SocialPill href="mailto:alvaradosteven6@gmail.com">
              <img className="size-4 md:size-6" src={MailIcon} alt="Mail" />
              {t("page.email")}
            </SocialPill>
          </nav>
        </SectionContainer>

        <SectionContainer id="experiencia">
          <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
            <img className="size-7" src={Briefcase} alt="Briefcase" />
            {t("page.WorkExperience")}
          </h2>
          <Experience />
        </SectionContainer>

        <SectionContainer id="proyectos">
          <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
            <img className="size-7" src={CodeIcon} alt="Code" />
            {t("page.projects")}
          </h2>
          <Projects />
        </SectionContainer>
      </main>
      {/* </Layout> */}
      <Footer />
    </div>
  );
}

export default App;
