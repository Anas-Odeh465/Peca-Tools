import { getLocaleFromPath, localizedPath } from "../../../i18n/locale";
import LoginNavbar from "../../components/navigation/loginNavbar";
import { forgotPasswordSchema } from "../../validators/validateInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, SendIcon, Loader } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Scene from "../../ui/loginScene";
import Logo from "../../ui/logo";

export default function ForgotPassword() {
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const languageDropdownRef = useRef(null);

    const { t } = useTranslation("translation", { keyPrefix: "ForgotPassword" });
    const { t: tValidation } = useTranslation("translation", { keyPrefix: "Validation" });

    const { pathname } = useLocation();
    const locale = getLocaleFromPath(pathname);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
                setShowLanguageDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const { register, handleSubmit, setFocus, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: {
            username: "",
        },
    });

    const onSubmit = () => {
        console.info("Password recovery API is not connected yet.");
    };

    return (
        <div className="relative isolate mx-0 w-full min-h-screen select-none">
            <LoginNavbar showLanguageDropdown={showLanguageDropdown} setShowLanguageDropdown={setShowLanguageDropdown} languageDropdownRef={languageDropdownRef} />
            <div className="flex flex-col justify-center items-center w-full min-h-full p-12">
                <Logo loading="eager" className="lg:w-62.5 w-50 h-auto" width={1448} height={1086} />
                <div className="flex flex-col items-center justify-center w-full max-w-lg">
                    <form noValidate onSubmit={handleSubmit(onSubmit)} className="container border border-gray-100 bg-white rounded-lg drop-shadow-md flex flex-col items-start font-sans p-4 h-auto gap-6">
                        <div className="flex flex-col items-start justify-start w-full gap-1">
                            <h1 className="text-2xl font-semibold text-gray-900">{t("title")}</h1>
                            <p className="text-sm text-gray-500">{t("description")}</p>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full gap-4">
                            <div className="gap-1.5 flex flex-col justify-start items-start w-full">
                                <div className={`group transition-all ease-in-out duration-300 flex items-center justify-start w-full border rounded-md ${errors.username ? "border-red-600" : "border-gray-300 focus-within:border-blue-900"}`}>
                                    <button type="button" onClick={() => setFocus("username")} aria-label={t("username")} className={`p-2 ${locale === "ar" ? "border-l" : "border-r"} ${errors.username ? "border-red-600" : "border-gray-300 group-focus-within:border-blue-900"} flex items-center justify-center`}>
                                        <User className={errors.username ? "text-red-600" : "text-gray-400 group-focus-within:text-blue-900"} />
                                    </button>
                                    <input id="recovery-username" type="text" maxLength={32} autoComplete="username" {...register("username")} placeholder={t("username")} aria-label={t("username")} aria-invalid={!!errors.username} aria-describedby={errors.username ? "recovery-username-error" : undefined} className={`w-full p-2 focus:outline-none ${errors.username ? "placeholder-red-600" : "focus:placeholder-blue-900"}`} />
                                </div>
                                {errors.username && <p id="recovery-username-error" role="alert" className="text-sm text-red-600">{tValidation(errors.username.message)}</p>}
                            </div>
                            <Link to={localizedPath("/login", locale)} className="text-sm font-semibold text-[#192852]/90 hover:underline">
                                {t("backToLogin1")}
                            </Link>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="group/btn transition-colors duration-300 w-full flex items-center justify-center p-2 mt-2 bg-[#192852] text-white rounded-md hover:bg-[#192852]/90 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                            {isSubmitting ? <Loader className="animate-spin" size={16} /> : <span className="flex items-center justify-center gap-1">{t("send")} <SendIcon className="transition-transform duration-300 ease-in-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" size={18} /></span>}
                        </button>
                    </form>
                </div>
            </div>
            <Scene />
        </div>
    );
}
