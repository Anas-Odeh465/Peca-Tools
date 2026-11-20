
import { User, FileBox, WrenchIcon, ImageIcon, ChevronDown, HeadsetIcon, Search, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Help({ onContactSupport }) {

    const [openQuickHelp, setOpenQuickHelp] = useState(1);
    const [search, setSearch] = useState("");
    
    const { t } = useTranslation("translation", { keyPrefix: "Help" });

    const navigate = useNavigate();

    const quickLinks = [
        { id: "account", name: t("categories.account.name"), icon: User, details: t("categories.account.details") },
        { id: "projects", name: t("categories.projects.name"), icon: FileBox, details: t("categories.projects.details") },
        { id: "uploads", name: t("categories.uploads.name"), icon: ImageIcon, details: t("categories.uploads.details") },
        { id: "troubleshooting", name: t("categories.troubleshooting.name"), icon: WrenchIcon, details: t("categories.troubleshooting.details") },
    ];

    const quickHelp = [
        { id: 1, question: t("faq.recoverPassword.question"), answer: t("faq.recoverPassword.answer") },
        { id: 2, question: t("faq.loginIssues.question"), answer: t("faq.loginIssues.answer") },
        { id: 3, question: t("faq.technicalIssues.question"), answer: t("faq.technicalIssues.answer") },
    ];

    const query = search.trim().toLocaleLowerCase();

    const filteredHelp = quickHelp.filter(({ question, answer }) =>
        question.toLocaleLowerCase().includes(query) ||
        answer.toLocaleLowerCase().includes(query)
    );

    const toggleFAQ = (id) => {
        setOpenQuickHelp((prev) => prev === id ? null : id);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <main className="flex min-h-dvh w-full items-center justify-center bg-white px-4 py-10">
            <div className="flex w-full max-w-3xl flex-col items-center gap-8">

                <header className="flex w-full flex-col items-center gap-4 text-center">
                    <h1 className="text-3xl font-semibold text-[#192852]">{t("title")}</h1>
                    <div className="relative w-full">
                        <Search size={19} className="absolute inset-s-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <label htmlFor="help-search" className="sr-only">{t("searchLabel")}</label>
                        <input id="help-search" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t("searchPlaceholder")} className="w-full rounded-lg border border-gray-200 py-3 ps-10 pe-4 outline-none transition-colors focus:border-[#192852]" />
                    </div>
                </header>

                <section aria-label={t("categoriesLabel")} className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                    {quickLinks.map(({ id, name, icon: Icon, details }) => (
                        <div key={id} className="flex flex-col items-start gap-2 rounded-lg border border-gray-200 p-5 transition-colors hover:bg-gray-50">
                            <Icon size={24} className="text-[#192852]" />
                            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                            <p className="text-sm text-gray-500">{details}</p>
                        </div>
                    ))}
                </section>

                <section className="w-full space-y-4" aria-labelledby="faq-title">
                    <h2 id="faq-title" className="text-xl font-semibold text-[#192852]">{t("faqTitle")}</h2>

                    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 bg-white">
                        {filteredHelp.map(({ id, question, answer }) => {
                            const isOpen = openQuickHelp === id;

                            return (
                                <div key={id} className="px-4">
                                    <h3>
                                        <button id={`faq-button-${id}`} type="button" aria-expanded={isOpen} aria-controls={`faq-${id}`} onClick={() => toggleFAQ(id)} className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-start font-medium text-gray-800 transition-colors hover:text-[#192852] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#192852]">
                                            <span>{question}</span>
                                            <ChevronDown size={20} className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-180" : "rotate-0"}`} />
                                        </button>
                                    </h3>

                                    <div id={`faq-${id}`} role="region" aria-labelledby={`faq-button-${id}`} aria-hidden={!isOpen} className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                        <div className="min-h-0 overflow-hidden">
                                            <p className={`text-sm leading-7 text-gray-600 transition-opacity duration-300 motion-reduce:transition-none ${isOpen ? "pb-4 opacity-100" : "opacity-0"}`}>{answer}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {filteredHelp.length === 0 && <p role="status" className="w-full py-6 text-center text-sm text-gray-500">{t("noResults")}</p>}
                    </div>
                </section>

                <section className="flex flex-col items-center gap-3 text-center">
                    <h2 className="text-xl font-semibold text-gray-800">{t("supportTitle")}</h2>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <button type="button" onClick={handleGoBack} className="group/back flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-[#192852] transition-colors hover:bg-gray-50 cursor-pointer">
                            <ArrowLeft size={17} className="transition-transform duration-200 group-hover/back:-translate-x-1 rtl:rotate-180 rtl:group-hover/back:translate-x-1" />
                            {t("goBack")}
                        </button>
                        <button type="button" onClick={onContactSupport} disabled={!onContactSupport} className="flex items-center justify-center gap-2 rounded-lg bg-[#192852] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#192852]/90 enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50">
                            <HeadsetIcon size={17} />
                            {t("contactSupport")}
                        </button>
                    </div>
                </section>

            </div>
        </main>
    );
}