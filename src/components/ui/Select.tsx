import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
    FlatList,
    Modal,
    Pressable,
    Text,
    View,
} from "react-native";

export type SelectOption<T> = {
  value: T;
  label: string;
  icon?: React.ReactNode;
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

  renderOption?: (
    option: SelectOption<T>,
    selected: boolean
  ) => React.ReactNode;
};

type Position = {
  x: number;
  y: number;
  width: number;
  height: number;
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
  renderOption,
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
      {/* Trigger */}
      <View ref={triggerRef} collapsable={false}>
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
          {selectedOption?.icon}

          <Text
            className={`
              ${selectedOption?.icon ? "ml-2" : ""}
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
            style={{ marginLeft: 6 }}
          />
        </Pressable>
      </View>

      {/* Dropdown */}
      {position && (
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
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item }) => {
                  const selected = item.value === value;

                  if (renderOption) {
                    return (
                      <Pressable
                        onPress={() => handleSelect(item)}
                        className={optionClassName}
                      >
                        {renderOption(item, selected)}
                      </Pressable>
                    );
                  }

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
                      {item.icon}

                      <Text
                        className={`
                          flex-1
                          text-sm
                          text-textPrimary
                          ${item.icon ? "ml-2" : ""}
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
          </Pressable>
        </Modal>
      )}
    </>
  );
}