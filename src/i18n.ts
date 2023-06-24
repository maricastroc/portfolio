import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Importe os arquivos de tradução adequados
import translationEN from './locales/Home/en'
import translationPT from './locales/Home/pt'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    pt: {
      translation: translationPT,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
