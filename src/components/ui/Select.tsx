import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import type { ImageSourcePropType } from "react-native";
import {
    FlatList,
    Image,
    Modal,
    Pressable,
    Text,
    View,
} from "react-native";

export type SelectOption<T> = {
  value: T;
  label: string;
  image?: ImageSourcePropType;
};

type Position = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type SelectProps<T> = {
  value: T;
  options: SelectOption<T>[];
  onChange: (value: T) => void;

  placeholder?: string;
  disabled?: boolean;

  triggerClassName?: string;
  optionClassName?: string;
  textClassName?: string;

  iconColor?: string;
};

export default function Select<T>({
  value,
  options,
  onChange,
  placeholder = "Select...",
  disabled = false,
  triggerClassName = "",
  optionClassName = "",
  textClassName = "text-sm text-textPrimary",
  iconColor = "#94A3B8",
}: SelectProps<T>) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Position | null>(null);

  const triggerRef = useRef<View>(null);

  const selectedOption = options.find(
    (option) => option.value === value
  );

  const openSelect = () => {
    if (disabled) return;

    triggerRef.current?.measureInWindow(
      (x, y, width, height) => {
        setPosition({
          x,
          y,
          width,
          height,
        });

        setOpen(true);
      }
    );
  };

  const handleSelect = (option: SelectOption<T>) => {
    onChange(option.value);
    setOpen(false);
  };

  return (
    <>
      {/* SELECT TRIGGER */}
      <View
        ref={triggerRef}
        collapsable={false}
      >
        <Pressable
          disabled={disabled}
          onPress={openSelect}
          className={`
            flex-row
            items-center
            self-start
            rounded-lg
            bg-surfaceVariant
            px-3
            py-2
            ${disabled ? "opacity-50" : ""}
            ${triggerClassName}
          `}
        >
          {selectedOption?.image && (
            <Image
              source={selectedOption.image}
              style={{
                width: 24,
                height: 16,
                borderRadius: 2,
              }}
              resizeMode="cover"
            />
          )}

          <Text
            className={`
              text-sm
              text-textPrimary
              ${selectedOption?.image ? "ml-2" : ""}
              ${textClassName}
            `}
            numberOfLines={1}
          >
            {selectedOption?.label ?? placeholder}
          </Text>

          <Ionicons
            name="chevron-down"
            size={14}
            color={iconColor}
            style={{
              marginLeft: 6,
            }}
          />
        </Pressable>
      </View>

      {/* DROPDOWN */}
      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable
          className="flex-1"
          onPress={() => setOpen(false)}
        >
          {position && (
            <View
              style={{
                position: "absolute",
                top: position.y + position.height + 6,
                left: position.x,
                minWidth: Math.max(position.width, 160),
              }}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
              <FlatList
                data={options}
                keyExtractor={(item) => String(item.value)}
                renderItem={({ item }) => {
                  const selected = item.value === value;

                  return (
                    <Pressable
                      onPress={() => handleSelect(item)}
                      className={`
                        flex-row
                        items-center
                        px-3
                        py-3
                        ${selected ? "bg-surfaceVariant" : ""}
                        ${optionClassName}
                      `}
                    >
                      {item.image && (
                        <Image
                          source={item.image}
                          style={{
                            width: 24,
                            height: 16,
                            borderRadius: 2,
                          }}
                          resizeMode="cover"
                        />
                      )}

                      <Text
                        className={`
                          flex-1
                          text-sm
                          text-textPrimary
                          ${item.image ? "ml-2" : ""}
                        `}
                      >
                        {item.label}
                      </Text>

                      {selected && (
                        <Ionicons
                          name="checkmark"
                          size={16}
                          color="#2563EB"
                        />
                      )}
                    </Pressable>
                  );
                }}
              />
            </View>
          )}
        </Pressable>
      </Modal>
    </>
  );
}