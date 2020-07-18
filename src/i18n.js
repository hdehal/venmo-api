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
                    heading: "Latest Venmo Transactions",
                    intro: "This simple React app uses Venmo API data as a test playground for currency conversion, internationalization (i18n), and accessibility (a11y)."
                }
            },
            de: {
                translations: {
                    heading: "Neueste Venmo-Transaktionen",
                    intro: "Diese einfache React-App verwendet Venmo-API-Daten als Testspielplatz für Währungsumrechnung, Internationalisierung (i18n) und Barrierefreiheit (a11y)."
                }
            },
            fr: {
                translations: {
                    heading: "Dernières transactions Venmo",
                    intro: "Cette application React simple utilise les données de l'API Venmo comme terrain de jeu de test pour la conversion de devises, l'internationalisation (i18n) et l'accessibilité (a11y)."
                }
            },
            jp: {
                translations: {
                    heading: "最新のVenmoトランザクション",
                    intro: "このシンプルなReactアプリは、通貨変換、国際化（i18n）、およびアクセシビリティ（a11y）のテストの遊び場としてVenmo APIデータを使用します。"
                }
            }
        },
        fallbackLng: 'en',
        debug: false,

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