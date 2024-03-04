import React from 'react';
import LinkedInIcon from "./icons/LinkedIn";
import SocialPill from "./SocialPill";
import GitHubIcon from "./icons/GitHub";
import MailIcon from "./icons/Mail";
import Phone from './icons/Phone';
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
                style={{ width: '80%', marginBottom: '220px' }}
            >
                <h2
                    className="text-2xl font-semibold mb-4"
                >
                    Contact Information
                </h2>
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
                <button
                    onClick={onClose}
                    className={"mt-4 hover:bg-blue-600 bg-white/5 border dark:border-white/10 border-gray-400 rounded-full flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base text-black/70 dark:text-white/50 transition hover:scale-110 hover:bg-white/10"}
                >
                    {t("page.close")}
                </button>
            </div>
        </div>
    );
};

export default ContactModal;
