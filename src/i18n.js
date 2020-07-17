import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translations: {
                    "Latest Venmo Transactions": "Latest Venmo Transactions",
                    "Declarative": "Declarative"
                }
            },
            de: {
                translations: {
                    "Latest Venmo Transactions": "Neueste Venmo-Transaktionen",
                    "Declarative": "Δηλωτικό"
                }
            }
        },
        fallbackLng: 'en',
        debug: true,

        // Common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // Content as keys

        interpolation: {
            escapeValue: false, // Not needed for React
            formatSeparator: ','
        },

        react: {
            wait: true
        }
    });

export default i18n;