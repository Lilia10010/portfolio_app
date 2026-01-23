import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './translations/pt-BR.json';
import en from './translations/en.json';

// Get saved language from localStorage or default to Portuguese
const savedLanguage = localStorage.getItem('language') || 'pt-BR';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': {
        translation: ptBR
      },
      'en': {
        translation: en
      }
    },
    lng: savedLanguage,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false // React already escapes values
    },
    react: {
      useSuspense: false
    }
  });

// Save language to localStorage whenever it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
