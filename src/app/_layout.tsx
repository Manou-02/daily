import "@/i18n";
import { ThemeProvider } from "@/themes/ThemeProvider";
import "./global.css";

import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { initI18n } from "@/i18n";

export default function RootLayout() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initI18n()
      .then(() => {
        setReady(true);
      })
      .catch((error) => {
        console.error("i18n initialization error:", error);
        setReady(true);
      });
  }, []);

  if (!ready) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  )
}