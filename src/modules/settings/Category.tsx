import Card from "@/components/ui/Card";
import Drawer from "@/components/ui/Drawer";
import { size } from "@/themes/size";
import { Ionicons } from "@expo/vector-icons";
import { useUnstableNativeVariable } from "nativewind";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
export default function Category() {
  const { t } = useTranslation();

  const warning = useUnstableNativeVariable("--color-warning");
  const textSecondary = useUnstableNativeVariable("--color-textSecondary");
  const danger = useUnstableNativeVariable("--color-danger");
  const colorBorder = useUnstableNativeVariable("--color-border");

  const [isOpenCategoryForm, setIsOpenCategoryForm] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const handleDelete = (index: number) => {
    // delete your tag here
    console.log("Delete:", tags[index]);

    setDeleteIndex(null);
  };

  const tags = [
    "Nourriture",
    "Transport",
    "Loyer",
    "Factures",
    "Loisirs",
    "Autres",
  ];

  return (
    <Card>
      <View className="mb-4 flex-row gap-2">
        <View className="p-2 bg-border rounded-md ">
          <Ionicons
            name={"shapes-outline"}
            size={size.iconSize}
            color={warning}
          />
        </View>
        <Text className="text-2xl text-textPrimary">
          {" "}
          {t("settings.category.title")}{" "}
        </Text>
      </View>
      <View>
        <Pressable
          onPress={() => {
            if (deleteIndex !== null) {
              setDeleteIndex(null);
            }
          }}
        >
          <View
            className="my-2"
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            {tags?.map((item, index) => (
              <Pressable
                key={index}
                onLongPress={() => setDeleteIndex(index)}
                delayLongPress={500}
                className="relative mr-2 mb-2"
                onPress={() => {
                  if (deleteIndex !== null) {
                    if (deleteIndex === index) {
                      handleDelete(index);
                    } else {
                      setDeleteIndex(null);
                    }
                  }
                }}
              >
                <View
                  className="bg-surfaceVariant rounded-lg border border-border py-2 px-3"
                  style={{
                    borderColor: deleteIndex === index ? danger : colorBorder,
                    transform: [
                      {
                        rotate: deleteIndex === index ? "5deg" : "0deg",
                      },
                    ],
                  }}
                >
                  <Text className="text-textPrimary">{item}</Text>
                </View>

                {deleteIndex === index && (
                  <Pressable
                    // onPress={() => handleDelete(index)}
                    className=" h-5 w-5 items-center justify-center rounded-full bg-red-500"
                    style={{
                      backgroundColor: danger,
                      borderRadius: 100,
                      position: "absolute",
                      right: -2,
                      top: -4,
                    }}
                  >
                    <Ionicons name="close" size={14} color="white" />
                  </Pressable>
                )}
              </Pressable>
            ))}
          </View>
        </Pressable>
      </View>

      <View className="gap-3">
        <Drawer
          isOpen={isOpenCategoryForm}
          setIsOpen={setIsOpenCategoryForm}
          trigger={(onPress) => (
            <TouchableOpacity onPress={() => onPress()}>
              <View className="flex-row rounded-xl p-4 bg-surfaceVariant justify-center gap-2">
                <Ionicons
                  name={"add-circle-outline"}
                  size={size.iconSize}
                  color={textSecondary}
                />
                <Text className="text-textSecondary">
                  {t("settings.category.add")}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        >
          <View className="p-4">
            <Text className="text-textPrimary"> zaza </Text>
            <Text className="text-textPrimary"> zaza </Text>
            <Text className="text-textPrimary"> zaza </Text>
            <Text className="text-textPrimary"> zaza </Text>
            <Text className="text-textPrimary"> zaza </Text>
            <Text className="text-textPrimary"> zaza </Text>
            <Text className="text-textPrimary"> zaza </Text>
            <Text className="text-textPrimary"> zaza </Text>
            <Text className="text-textPrimary"> zaza </Text>
            <Text className="text-textPrimary"> zaza </Text>
            <Text className="text-textPrimary"> zaza </Text>
            <Text className="text-textPrimary"> zaza </Text>
            <Text className="text-textPrimary"> zaza </Text>
          </View>
        </Drawer>
      </View>
    </Card>
  );
}
