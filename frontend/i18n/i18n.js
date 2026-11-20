import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocaleFromPath } from "./locale";

import en from "./messages/en.json";
import ar from "./messages/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: getLocaleFromPath(window.location.pathname),
  fallbackLng: "en",
  supportedLngs: ["en", "ar"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
