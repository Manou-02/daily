import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SegmentedSwitch from "@/components/ui/SegmentSwitch";
import { useTheme } from "@/themes/ThemeProvider";
import { Text, View } from "react-native";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  const themeOptions = [
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
    <Container>
      <Card>
        <View className="gap-3">
          <Text className="text-textPrimary">Thème de l'interface</Text>

          <SegmentedSwitch
            items={themeOptions}
            value={theme}
            onChange={setTheme}
          />
        </View>
      </Card>
    </Container>
  );
}
