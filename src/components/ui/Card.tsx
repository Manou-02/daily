import cn from "clsx";
import React from "react";
import { View } from "react-native";

type PropsType = {
  isBorder?: boolean;
  children: React.ReactNode;
};

export default function Card({ isBorder, children }: PropsType) {
  return (
    <View
      className={cn(
        "bg-surface  rounded-2xl p-5",
        isBorder ? "border border-border" : "",
      )}
    >
      {children}
    </View>
  );
}
