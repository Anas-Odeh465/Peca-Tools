
import { getLocaleFromPath, localizedPath } from "../../../i18n/locale";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import Logo from "../../ui/logo";

export default function LoginNavbar({ showLanguageDropdown, setShowLanguageDropdown, languageDropdownRef }) {

    const { t } = useTranslation();
    const { pathname, search, hash } = useLocation();
    const navigate = useNavigate();
    const locale = getLocaleFromPath(pathname);

    const changeLanguage = (newLocale) => {
        setShowLanguageDropdown(false);

        if (locale === newLocale) return;

        navigate(`${localizedPath(pathname, newLocale)}${search}${hash}`, {
            replace: true,
        });
    };

    return (
        <nav className="relative w-full h-22 flex items-center justify-between py-8 px-8 bg-white">
            <Link to={localizedPath("/", locale)} className="w-fit">
                <Logo loading="eager" className="w-25 h-auto" width={1448} height={1086} />
            </Link>
            <div className="flex items-center justify-center gap-4">
                <Link to={localizedPath("/help", locale)} className="text-sm font-semibold text-gray-700 hover:underline">
                    {t("Login.help")}
                </Link>
                <div ref={languageDropdownRef} className="relative z-20 rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-semibold text-gray-700">
                    <button type="button" aria-expanded={showLanguageDropdown} aria-haspopup="true" aria-controls="language-menu" onClick={() => setShowLanguageDropdown(prev => !prev)} className="flex items-center gap-2 cursor-pointer">
                        <Languages size={16} />
                        <span>{locale === "ar" ? "العربية" : "English"}</span>
                    </button>
                    <div id="language-menu" className={`absolute top-full inset-e-0 z-50 mt-2 w-32 origin-top rounded-md border border-gray-300 bg-white shadow-lg transition-all duration-200 ease-out ${showLanguageDropdown ? "visible translate-y-0 scale-100 opacity-100 pointer-events-auto" : "invisible translate-y-1 scale-95 opacity-0 pointer-events-none"}`}>
                        <div className="flex flex-col text-xs text-nowrap">
                            <button type="button" onClick={() => changeLanguage("ar")} className="cursor-pointer rounded-t-md px-4 py-2 text-right hover:bg-gray-100">اللغة العربية</button>
                            <button type="button" onClick={() => changeLanguage("en")} className="cursor-pointer rounded-b-md px-4 py-2 text-left hover:bg-gray-100">English</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
