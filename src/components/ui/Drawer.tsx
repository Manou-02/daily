import type { ModalBottomSheetRef } from "@expo/ui/jetpack-compose";
import {
  Host,
  ModalBottomSheet,
} from "@expo/ui/jetpack-compose";
import { useUnstableNativeVariable } from "nativewind";
import { useRef } from "react";
import {
  View
} from "react-native";

type DrawerProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  trigger: (onPress : () => void) => React.ReactNode;
  children: React.ReactNode;
};

export default function Drawer({
  children,
  isOpen,
  setIsOpen,
  trigger,
}: DrawerProps) {
  const sheetRef = useRef<ModalBottomSheetRef>(null);
  const background = useUnstableNativeVariable("--color-background");

    const open = () => {
        setIsOpen(true)
    };

  return (
    <>
      {/* React Native trigger */}
        {trigger(open)}
      {/* Native Expo UI bottom sheet */}
      {isOpen && (
        <View
          pointerEvents="box-none"
          style={{
            position: "absolute",
            
          }}
        >
        <Host>
          <ModalBottomSheet
            ref={sheetRef}
            onDismissRequest={() => setIsOpen(false)}
            containerColor={background}

          >
            <View className="px-2">
              {children}
            </View>
          </ModalBottomSheet>
        </Host>
        </View>
      )}
    </>
  );
}