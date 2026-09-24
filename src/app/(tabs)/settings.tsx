import Card from "@/components/ui/Card";
import SegmentedSwitch from "@/components/ui/SegmentSwitch";
import { size } from "@/themes/size";
import { useTheme } from "@/themes/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { useUnstableNativeVariable } from "nativewind";
import { Text, View } from "react-native";

export default function Settings() {
  const { theme, setTheme } = useTheme();
    const textPrimary = useUnstableNativeVariable("--color-textPrimary");
    const textSecondary = useUnstableNativeVariable("--color-textSecondary");
  const surface = useUnstableNativeVariable("--color-surfaceVariant");
  

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
      {/* Theme configuration  */}
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
      <Card>
        <View className="mb-4 flex-row gap-2 ">
          <View className="p-2 bg-primaryContainer rounded">
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
          <View className="p-2 bg-border rounded">
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
