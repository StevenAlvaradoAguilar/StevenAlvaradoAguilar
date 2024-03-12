import React from 'react';
import LinkedInIcon from "./icons/LinkedIn.svg";
import SocialPill from "./SocialPill";
import GitHubIcon from "./icons/GitHub.svg";
import MailIcon from "./icons/Mail.svg";
import Phone from './icons/Phone.svg';
import { useTranslation } from "react-i18next";

const ContactModal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
        >
            <div
                className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-lg w-full"
                style={{ width: '80%', marginBottom: '220px', borderRadius: '4rem' }}
            >
                <h2
                    className="text-2xl font-semibold mb-4"
                >
                    {t("page.contactInfo")}
                </h2>

                <div className="flex flex-col gap-4">
                    <SocialPill href="https://www.linkedin.com/in/stevenalvaradoa/">
                        <img className="size-4 md:size-6" src={LinkedInIcon} alt="LinkedIn" />
                        LinkedIn
                    </SocialPill>
                    <SocialPill href="https://github.com/StevenAlvaradoAguilar">
                        <img className="size-4 md:size-6" src={GitHubIcon} alt="GitHub" />
                        GitHub
                    </SocialPill>
                    <SocialPill href="https://wa.me/+50683493058">
                        <img className="size-4 md:size-6" src={Phone} alt="Phone" />
                        {t("page.contact")}
                    </SocialPill>
                    <SocialPill href="mailto:alvaradosteven6@gmail.com">
                        <img className="size-4 md:size-6" src={MailIcon} alt="Mail" />
                        {t("page.email")}
                    </SocialPill>
                </div>

                <div className="flex justify-center mt-1">
                    <button
                        onClick={onClose}
                        className={"linksSocial mt-4 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10"}
                    >
                        {t("page.close")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
