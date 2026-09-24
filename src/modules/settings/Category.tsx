import Card from "@/components/ui/Card";
import Drawer from "@/components/ui/Drawer";
import { size } from "@/themes/size";
import { Ionicons } from "@expo/vector-icons";
import { useUnstableNativeVariable } from "nativewind";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";


export default function Category() {
  const {t} = useTranslation();

  const warning = useUnstableNativeVariable("--color-warning");
  const textSecondary = useUnstableNativeVariable("--color-textSecondary");

  const [isOpenCategoryForm, setIsOpenCategoryForm] = useState<boolean>(false)

  return (
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
  )
}