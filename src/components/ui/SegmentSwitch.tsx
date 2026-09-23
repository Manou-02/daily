import { size } from "@/themes/size";
import { Ionicons } from "@expo/vector-icons";
import { useUnstableNativeVariable } from "nativewind";
import { Pressable, Text, View } from "react-native";

export type SegmentedSwitchItem<T> = {
  value: T;
  label: string;
  icon?: React.ComponentProps<
    typeof import("@expo/vector-icons").Ionicons
  >["name"];
};

type SegmentedSwitchProps<T> = {
  items: readonly SegmentedSwitchItem<T>[];
  value: T;
  onChange: (value: T) => void;
};

export default function SegmentedSwitch<T>({
  items,
  value,
  onChange,
}: SegmentedSwitchProps<T>) {
  const textPrimary = useUnstableNativeVariable("--color-textPrimary");
  const surface = useUnstableNativeVariable("--color-surface");
  const primary = useUnstableNativeVariable("--color-primary");

  return (
    <View
      className="flex-row rounded-xl p-1"
      style={{
        backgroundColor: surface,
      }}
    >
      {items.map((item) => {
        const isActive = item.value === value;

        return (
          <Pressable
            key={String(item.value)}
            onPress={() => onChange(item.value)}
            className="flex-1 flex-row items-center justify-center gap-2 rounded-lg py-3"
            style={isActive ? { backgroundColor: primary } : undefined}
          >
            {item.icon && (
              <Ionicons
                name={item.icon}
                size={size.iconSize}
                color={isActive ? "#fff" : textPrimary}
              />
            )}

            <Text
              className="font-medium"
              style={{
                color: isActive ? "#fff" : textPrimary,
              }}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
