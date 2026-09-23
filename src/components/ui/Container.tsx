import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type PropsType = {
  children: React.ReactNode;
};

export default function Container({ children }: PropsType) {
  return (
    <SafeAreaView className="bg-background flex-1 px-5">
      {children}
    </SafeAreaView>
  );
}
