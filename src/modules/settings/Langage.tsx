import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import { changeLanguage, LanguageChoice, type Language } from "@/i18n";
import { size } from "@/themes/size";
import { Ionicons } from "@expo/vector-icons";
import { useUnstableNativeVariable } from "nativewind";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

export default function Langage() {
  const {t, i18n} = useTranslation();

  const textSecondary = useUnstableNativeVariable("--color-textSecondary");

  const LANGUAGE_OPTIONS = [
    {
      value: LanguageChoice.fr,
      label: t("settings.langage.fr"),
      image: require("@/assets/icons/fr.png") ,
    },
    {
      value: LanguageChoice.en,
      label: t("settings.langage.en"),
      image: require("@/assets/icons/en.png"),
    },
  ];
  
  return (
        <Card>
        <View className="mb-4 flex-row gap-2 ">
          <View className="p-2 bg-border rounded-md">
             <Ionicons
                name={"globe-outline"}
                size={size.iconSize}
                color={textSecondary}
              />
          </View>
          <Text className="text-2xl text-textPrimary"> {t("settings.langage.title")} </Text>
        </View>
        <View className="flex-row justify-between">
          <View> 
            <Text className="text-textPrimary text-xl"> {t("settings.langage.subtitle")} </Text>
            <Text className="text-textPrimary text-sm"> {t("settings.langage.description")} </Text>
          </View>
          <View className="">
                <Select
                  value={i18n.language as Language}
                  onChange={changeLanguage}
                  options={LANGUAGE_OPTIONS}
                />
          </View>
        </View>
      </Card>
  )
}