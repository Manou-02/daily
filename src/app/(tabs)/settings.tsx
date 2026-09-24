import Category from "@/modules/settings/Category";
import Langage from "@/modules/settings/Langage";
import Theme from "@/modules/settings/Theme";
import { size } from "@/themes/size";
import { Ionicons } from "@expo/vector-icons";
import { useUnstableNativeVariable } from "nativewind";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";



export default function Settings() {
  const {t} = useTranslation();


  const textSecondary = useUnstableNativeVariable("--color-textSecondary");

  

 


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
      <Category />
      {/* Theme configuration  */}
      <Theme />
      {/* Langage configuration  */}
      <Langage />
    </View>
  );
}
