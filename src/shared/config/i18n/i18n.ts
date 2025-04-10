import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // плагин для получения асинхронного получения переводов
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru', // язык по умолчанию
    // debug: __IS_DEV__, // глобальная переменная
    debug: false, // no console spam
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    }
  });


export default i18n;
