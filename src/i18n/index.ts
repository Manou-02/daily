import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import fr from "./locales/fr";

export const LANGUAGE_KEY = "@app_language";

export type Language = "fr" | "en";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

export async function initI18n() {
  const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);

  const language: Language =
    savedLanguage === "en" || savedLanguage === "fr"
      ? savedLanguage
      : "fr";

  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: language,
      fallbackLng: "fr",

      compatibilityJSON: "v4",

      interpolation: {
        escapeValue: false,
      },
    });

  return i18n;
}

export async function changeLanguage(language: Language) {
  await AsyncStorage.setItem(LANGUAGE_KEY, language);

  await i18n.changeLanguage(language);
}

export default i18n;