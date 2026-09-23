import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import { useUnstableNativeVariable } from "nativewind";
import { Pressable } from "react-native";

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
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          position: "absolute",
          borderTopWidth: 0,
          elevation: 2,
        },
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: textSecondary,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "",
          tabBarButton: () => (
            <Pressable
              onPress={() => {
                router.push("/add");
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: primary,
                alignItems: "center",
                justifyContent: "center",
                marginTop: -15,
              }}
            >
              <Ionicons name="add" size={30} color="white" />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="budgets"
        options={{
          title: "Budgets",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Paramètres",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
