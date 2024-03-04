import React, { useEffect } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import Badge from "../src/components/Badge";
import SectionContainer from "../src/components/SectionContainer";
import LinkedInIcon from "../src/components/icons/LinkedIn";
import SocialPill from "../src/components/SocialPill";
import GitHubIcon from "../src/components/icons/GitHub";
import MailIcon from "../src/components/icons/Mail";
import Experience from "../src/components/Experience";
import Briefcase from "../src/components/icons/Briefcase";
import CodeIcon from "../src/components/icons/Code";
import Projects from "../src/components/Projects";
import Phone from "../src/components/icons/Phone";

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
              <LinkedInIcon className="size-4 md:size-6" />
              LinkedIn
            </SocialPill>
            <SocialPill href="https://github.com/StevenAlvaradoAguilar">
              <GitHubIcon className="size-4 md:size-6" />
              GitHub
            </SocialPill>
            <SocialPill href="https://wa.me/+50683493058">
              <Phone className="size-4 md:size-4" />
              {t("page.contact")}
            </SocialPill>
            <SocialPill href="mailto:alvaradosteven6@gmail.com">
              <MailIcon className="size-4 md:size-6" />
              {t("page.email")}
            </SocialPill>
          </nav>
        </SectionContainer>

        <SectionContainer id="experiencia">
          <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
            <Briefcase className="size-7" />
            {t("page.WorkExperience")}
          </h2>
          <Experience />
        </SectionContainer>

        <SectionContainer id="proyectos">
          <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
            <CodeIcon className="size-7" />
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
