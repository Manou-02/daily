import Card from "@/components/ui/Card";
import SegmentedSwitch from "@/components/ui/SegmentSwitch";
import { size } from "@/themes/size";
import { useTheme } from "@/themes/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { useUnstableNativeVariable } from "nativewind";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";


export default function Theme() {
  const {t} = useTranslation();
  const { theme, setTheme } = useTheme();


  const textPrimary = useUnstableNativeVariable("--color-textPrimary");

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

    return (
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
  )
}