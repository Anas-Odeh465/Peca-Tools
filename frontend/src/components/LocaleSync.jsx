import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import i18n from "../../i18n/i18n";
import { getLocaleFromPath } from "../../i18n/locale";

export default function LocaleSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    const locale = getLocaleFromPath(pathname);

    if (i18n.resolvedLanguage !== locale) {
      i18n.changeLanguage(locale);
    }

    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [pathname]);

  return null;
}
