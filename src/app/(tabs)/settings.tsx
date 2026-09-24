import Card from "@/components/ui/Card";
import SegmentedSwitch from "@/components/ui/SegmentSwitch";
import { size } from "@/themes/size";
import { useTheme } from "@/themes/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { useUnstableNativeVariable } from "nativewind";
import { Pressable, Text, View } from "react-native";

export default function Settings() {
  const { theme, setTheme } = useTheme();
    const textPrimary = useUnstableNativeVariable("--color-textPrimary");
    const textSecondary = useUnstableNativeVariable("--color-textSecondary");
  const warning = useUnstableNativeVariable("--color-warning");
  

  const themeOptions = [
    {
      value: "system",
      label: "Système",
      icon: "contrast-outline" as const,
    },
    {
      value: "light",
      label: "Clair",
      icon: "sunny-outline" as const,
    },
    {
      value: "dark",
      label: "Sombre",
      icon: "moon-outline" as const,
    },
  ] as const;

  return (
    <View className="gap-4">
      <View className="justify-between flex-row my-2">
        <Text className="text-textPrimary text-2xl"> Paramètres </Text>
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
          <Text className="text-2xl text-textPrimary"> Catègories </Text>
        </View>
        <View className="gap-3">
          <Pressable            
            className="flex-row rounded-xl p-2 bg-surfaceVariant justify-center gap-2"
            onPress={() => {
              console.log("zazazaa")
            }}
          >
                <Ionicons
                name={"add-circle-outline"}
                size={size.iconSize}
                color={textSecondary}
              />
            <Text className="text-textSecondary">Ajouter une catégorie personnalisé</Text>
          </Pressable>
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
          <Text className="text-2xl text-textPrimary"> Apparence </Text>
        </View>
        <View className="gap-3">
          <Text className="text-textPrimary">Thème de l'interface</Text>

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
          <Text className="text-2xl text-textPrimary"> Langue </Text>
        </View>
        <View className="flex-row justify-between">
          <View> 
            <Text className="text-textPrimary text-xl"> Langue de l'app </Text>
            <Text className="text-textPrimary text-sm"> Interface système </Text>
          </View>
          <View>
            <Text className="text-textPrimary">zaza</Text>
          </View>
        </View>
      </Card>
    </View>
  );
}
