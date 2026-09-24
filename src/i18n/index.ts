import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import fr from "./locales/fr";

export const LANGUAGE_KEY = "@app_language";

export type Language = "fr" | "en";

export async function getStoredLanguage(): Promise<Language> {
  const language = await AsyncStorage.getItem(LANGUAGE_KEY);

  if (language === "en" || language === "fr") {
    return language;
  }

  return "fr";
}

export async function changeLanguage(language: Language) {
  await AsyncStorage.setItem(LANGUAGE_KEY, language);
  await i18n.changeLanguage(language);
}

export async function initI18n() {
  const language = await getStoredLanguage();

  if (!i18n.isInitialized) {
    await i18n
      .use(initReactI18next)
      .init({
        compatibilityJSON: "v4",

        resources: {
          en: {
            translation: en,
          },
          fr: {
            translation: fr,
          },
        },

        lng: language,
        fallbackLng: "fr",

        interpolation: {
          escapeValue: false,
        },
      });
  } else {
    await i18n.changeLanguage(language);
  }
}

export default i18n;