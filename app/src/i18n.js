import i18n from 'i18next';
import { initReactI18next } from '../node_modules/react-i18next';

import enTranslation from './locales/en/translation.json';
import taTranslation from './locales/ta/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation
            },
            ta: {
                translation: taTranslation
            }
        },
        lng: sessionStorage.getItem('language'),
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;