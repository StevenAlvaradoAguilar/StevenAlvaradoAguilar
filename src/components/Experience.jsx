import React from 'react';
import ExperienceItem from "./ExperienceItem";
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  const EXPERIENCE = [
    {
      date: `2024-01-01 ${t("experiences.to")} 2024-01-29`,
      title: t("experiences.title"),
      description: t("experiences.description"),
      link: "https://www.linkedin.com/company/grupoasesorcr/",
    },
    {
      date: `2023-07-01 ${t("experiences.to")} 2024-01-01`,
      title: t("experiences.title1"),
      description: t("experiences.description1"),
      link: "https://www.linkedin.com/company/grupoasesorcr/",
    },
  ];

  return (
    <ol className="relative border-s border-gray-200 ml-3">
      {EXPERIENCE.map((experience, index) => (
        <li key={index} className="mb-10 ms-4 sm:ms-0">
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
};

export default Experience;
