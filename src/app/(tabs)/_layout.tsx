import { Tabs } from "expo-router";
import { useUnstableNativeVariable } from "nativewind";

export default function TabLayout() {
  const primary = useUnstableNativeVariable("--color-primary");
  const surface = useUnstableNativeVariable("--color-surface");
  const border = useUnstableNativeVariable("--color-border");
  const textSecondary = useUnstableNativeVariable("--color-textSecondary");
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: surface,
          borderTopColor: border,
        },

        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: textSecondary,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Setting",
        }}
      />
    </Tabs>
  );
}
