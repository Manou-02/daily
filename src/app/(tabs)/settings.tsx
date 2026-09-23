import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { size } from "@/themes/size";
import { useTheme } from "@/themes/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { useUnstableNativeVariable } from "nativewind";
import { Pressable, Text, View } from "react-native";

export default function Settings() {
  const { isDark, setTheme } = useTheme();

  const textPrimary = useUnstableNativeVariable("--color-textPrimary");
  const surface = useUnstableNativeVariable("--color-surface");
  const primary = useUnstableNativeVariable("--color-primary");

  return (
    <Container>
      <Card>
        <View className="gap-3">
          <Text className="text-textPrimary">Thème de l'interface</Text>

          <View
            className="flex-row rounded-xl p-1"
            style={{
              backgroundColor: surface,
            }}
          >
            {/* Clair */}
            <Pressable
              onPress={() => setTheme("light")}
              className="flex-1 flex-row items-center justify-center gap-2 rounded-lg py-3"
              style={!isDark ? { backgroundColor: primary } : undefined}
            >
              <Ionicons
                name="sunny-outline"
                size={size.iconSize}
                color={!isDark ? "#fff" : textPrimary}
              />

              <Text
                className="font-medium"
                style={{
                  color: !isDark ? "#fff" : textPrimary,
                }}
              >
                Clair
              </Text>
            </Pressable>

            {/* Sombre */}
            <Pressable
              onPress={() => setTheme("dark")}
              className="flex-1 flex-row items-center justify-center gap-2 rounded-lg py-3"
              style={isDark ? { backgroundColor: primary } : undefined}
            >
              <Ionicons
                name="moon-outline"
                size={size.iconSize}
                color={isDark ? "#fff" : textPrimary}
              />

              <Text
                className="font-medium"
                style={{
                  color: isDark ? "#fff" : textPrimary,
                }}
              >
                Sombre
              </Text>
            </Pressable>
          </View>
        </View>
      </Card>
    </Container>
  );
}
