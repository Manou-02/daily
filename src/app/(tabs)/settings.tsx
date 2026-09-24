import Card from "@/components/ui/Card";
import Drawer from "@/components/ui/Drawer";
import SegmentedSwitch from "@/components/ui/SegmentSwitch";
import Select from "@/components/ui/Select";
import { changeLanguage, LanguageChoice, type Language } from "@/i18n";
import { size } from "@/themes/size";
import { useTheme } from "@/themes/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { useUnstableNativeVariable } from "nativewind";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";



export default function Settings() {
  const { theme, setTheme } = useTheme();
  const {t, i18n} = useTranslation();


  const textPrimary = useUnstableNativeVariable("--color-textPrimary");
  const textSecondary = useUnstableNativeVariable("--color-textSecondary");
  const warning = useUnstableNativeVariable("--color-warning");

  const [isOpenCategoryForm, setIsOpenCategoryForm] = useState<boolean>(false)
  

  const themeOptions = [
    {
      value: "system",
      label: t("settings.theme.system"),
      icon: "contrast-outline" as const,
    },
    {
      value: "light",
      label: t("settings.theme.light"),
      icon: "sunny-outline" as const,
    },
    {
      value: "dark",
      label: t("settings.theme.dark"),
      icon: "moon-outline" as const,
    },
  ] as const;

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
    <View className="gap-4">
      <View className="justify-between flex-row my-2">
        <Text className="text-textPrimary text-2xl"> {t("settings.title")} </Text>
        <View>
          <Ionicons
            name={"settings"}
            size={size.iconSize}
            color={textSecondary}
          />
        </View>
      </View>

     

     {/* Catégories configuration  */}
      <Card>
        <View className="mb-4 flex-row gap-2 ">
          <View className="p-2 bg-border rounded-md">
             <Ionicons
                name={"shapes-outline"}
                size={size.iconSize}
                color={warning}
              />
          </View>
          <Text className="text-2xl text-textPrimary"> {t("settings.category.title")} </Text>
        </View>
        <View className="gap-3">

           <Drawer
            isOpen={isOpenCategoryForm}
            setIsOpen={setIsOpenCategoryForm}
            trigger={(onPress) =>
              <TouchableOpacity onPress={() => onPress()}>
                <View           
                className="flex-row rounded-xl p-2 bg-surfaceVariant justify-center gap-2"
              
              >
                    <Ionicons
                    name={"add-circle-outline"}
                    size={size.iconSize}
                    color={textSecondary}
                  />
                <Text className="text-textSecondary">{t("settings.category.add")}</Text>
              </View>
              </TouchableOpacity>
            }
          >
              <View className="p-4">
                <Text className="text-textPrimary"> zaza </Text>
                <Text className="text-textPrimary"> zaza </Text>
                <Text className="text-textPrimary"> zaza </Text>
                <Text className="text-textPrimary"> zaza </Text>
                <Text className="text-textPrimary"> zaza </Text>
                <Text className="text-textPrimary"> zaza </Text>
                <Text className="text-textPrimary"> zaza </Text>
                <Text className="text-textPrimary"> zaza </Text>
                <Text className="text-textPrimary"> zaza </Text>
                <Text className="text-textPrimary"> zaza </Text>
                <Text className="text-textPrimary"> zaza </Text>
                <Text className="text-textPrimary"> zaza </Text>
                <Text className="text-textPrimary"> zaza </Text>
            </View>
          </Drawer>
        
        </View>
      </Card>
      {/* Theme configuration  */}
      <Card>
        <View className="mb-4 flex-row gap-2 ">
          <View className="p-2 bg-primaryContainer rounded-md">
             <Ionicons
                name={"color-palette-outline"}
                size={size.iconSize}
                color={textPrimary}
              />
          </View>
          <Text className="text-2xl text-textPrimary"> {t("settings.theme.title")} </Text>
        </View>
        <View className="gap-3">
          <Text className="text-textPrimary">{t("settings.theme.subtitle")}</Text>

          <SegmentedSwitch
            items={themeOptions}
            value={theme}
            onChange={setTheme}
          />
        </View>
      </Card>

      {/* Langage configuration  */}

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
    </View>
  );
}
