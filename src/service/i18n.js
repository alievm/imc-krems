import i18next from "i18next";
import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

const i18nConfig = {
  defaultLocale: 'en',
  lng: 'en',
  fallbackLng: "en",
  returnObjects: true,
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json', // Путь к файлам локализации
  },
};

i18next
    .use(i18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .use(Backend)
    .init(i18nConfig);
