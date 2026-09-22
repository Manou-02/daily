import { vars } from "nativewind";
import React from "react";
import { View } from "react-native";

import { darkColors, lightColors } from "./colors";

type ThemeProviderProps = {
  children: React.ReactNode;
  dark?: boolean;
};

export function ThemeProvider({ children, dark = false }: ThemeProviderProps) {
  const colors = dark ? darkColors : lightColors;

  return (
    <View style={vars(colors)} className="flex-1">
      {children}
    </View>
  );
}
