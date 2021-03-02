// https://www.i18next.com/translation-function/interpolation
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import * as RNLocalize from "react-native-localize";
import en from "./locales/en.json";
import vi from "./locales/vi.json";
import pl from "./locales/pl.json";

const locales = RNLocalize.getLocales();

export function getLanguageTag() {
  if (locales && Array.isArray(locales)) {
    return locales[0].languageTag;
  }
  return null;
}

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => { },
  cacheUserLanguage: () => { },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: { translation: en, },
      vi: { translation: vi, },
      pl: { translation: pl, },
    },
  });


export default i18next;