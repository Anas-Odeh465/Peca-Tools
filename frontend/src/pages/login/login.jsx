import { EyeClosed, EyeIcon, User, LockKeyholeIcon, LogIn, Loader } from "lucide-react";
import { getLocaleFromPath, localizedPath } from "../../../i18n/locale";
import LoginNavbar from "../../components/navigation/loginNavbar";
import { loginSchema } from "../../validators/validateInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Scene from "../../ui/loginScene";
import Logo from "../../ui/logo";

export default function Login() {
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const languageDropdownRef = useRef(null);

    const { t } = useTranslation("translation", { keyPrefix: "Login" });
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
        resolver: zodResolver(loginSchema),
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Validated username:", data.username);
    };

    return (
        <div className="relative isolate mx-0 w-full min-h-screen select-none">
            <LoginNavbar showLanguageDropdown={showLanguageDropdown} setShowLanguageDropdown={setShowLanguageDropdown} languageDropdownRef={languageDropdownRef} />
            <div className="flex flex-col justify-center items-center w-full min-h-full p-12">
                <Logo loading="eager" className="lg:w-62.5 w-50 h-auto" width={1448} height={1086} />
                <div className="flex flex-col items-center justify-center w-full max-w-lg">
                    <form noValidate onSubmit={handleSubmit(onSubmit)} className="container border border-gray-100 bg-white rounded-lg drop-shadow-md flex flex-col items-start font-sans p-4 h-auto gap-6">
                        <h1 className="text-3xl font-semibold text-[#192852] mb-6">{t("title")}</h1>
                        <div className="flex flex-col items-start justify-start w-full gap-4">
                            <div className="gap-1.5 flex flex-col justify-start items-start w-full">
                                <div className={`group transition-all ease-in-out duration-300 flex items-center justify-start w-full border rounded-md ${errors.username ? "border-red-600" : "border-gray-300 focus-within:border-blue-900"}`}>
                                    <button type="button" onClick={() => setFocus("username")} aria-label={t("username")} className={`p-2 ${locale === "ar" ? "border-l" : "border-r"} ${errors.username ? "border-red-600" : "border-gray-300 group-focus-within:border-blue-900"} flex items-center justify-center`}>
                                        <User className={errors.username ? "text-red-600" : "text-gray-400 group-focus-within:text-blue-900"} />
                                    </button>
                                    <input type="text" maxLength={32} autoComplete="username" {...register("username")} placeholder={t("username")} aria-label={t("username")} aria-invalid={!!errors.username} className={`w-full p-2 focus:outline-none ${errors.username ? "placeholder-red-600" : "focus:placeholder-blue-900"}`} />
                                </div>
                                {errors.username && <p role="alert" className="text-sm text-red-600">{tValidation(errors.username.message)}</p>}
                            </div>
                            <div className="gap-1.5 flex flex-col justify-start items-start w-full">
                                <div className={`group transition-all ease-in-out duration-300 relative flex items-center justify-start w-full border rounded-md ${errors.password ? "border-red-600" : "border-gray-300 focus-within:border-blue-900"}`}>
                                    <button type="button" onClick={() => setFocus("password")} aria-label={t("password")} className={`p-2 ${locale === "ar" ? "border-l" : "border-r"} ${errors.password ? "border-red-600" : "border-gray-300 group-focus-within:border-blue-900"} flex items-center justify-center`}>
                                        <LockKeyholeIcon className={errors.password ? "text-red-600" : "text-gray-400 group-focus-within:text-blue-900"} />
                                    </button>
                                    <input maxLength={128} {...register("password")} placeholder={t("password")} aria-label={t("password")} autoComplete="current-password" aria-invalid={!!errors.password} type={showPassword ? "text" : "password"} className={`w-full p-2 focus:outline-none pe-10 ${errors.password ? "placeholder-red-600" : "focus:placeholder-blue-900"}`} />
                                    <button type="button" onClick={() => { setShowPassword(prev => !prev); setFocus("password"); }} aria-label={showPassword ? "Hide password" : "Show password"} aria-pressed={showPassword} className={`absolute ${locale === "ar" ? "left-2" : "right-2"} top-1/2 -translate-y-1/2 cursor-pointer`}>
                                        {showPassword ? <EyeIcon className={errors.password ? "text-red-600" : "text-gray-400 group-focus-within:text-blue-900"} /> : <EyeClosed className={errors.password ? "text-red-600" : "text-gray-400 group-focus-within:text-blue-900"} />}
                                    </button>
                                </div>
                                {errors.password && <p role="alert" className="text-sm text-red-600">{tValidation(errors.password.message)}</p>}
                            </div>
                            <Link to={localizedPath("/forgot-password", locale)} className="text-sm font-semibold text-[#192852]/90 hover:underline">
                                {t("forgotPassword")}
                            </Link>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="group/btn transition-colors duration-300 w-full flex items-center justify-center p-2 mt-2 bg-[#192852] text-white rounded-md hover:bg-[#192852]/90 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                            {isSubmitting ? <Loader className="animate-spin" size={16} /> : <span className="flex items-center justify-center gap-1">{t("submit")} <LogIn className={`transition-transform duration-300 ease-in-out ${locale === "ar" ? "group-hover/btn:-translate-x-2" : "group-hover/btn:translate-x-2"}`} size={20} /></span>}
                        </button>
                    </form>
                </div>
            </div>
            <Scene />
        </div>
    );
}
