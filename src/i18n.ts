import i18next from "i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import zu from "./locales/zu.json";

i18next
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zu: { translation: zu },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
