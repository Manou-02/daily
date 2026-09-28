import { zodResolver } from "@hookform/resolvers/zod";
import { useUnstableNativeVariable } from "nativewind";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import { z } from "zod";

const categorySchema = z.object({
  category: z.string().min(1, "Category is required"),
});

type CategoryFormData = z.infer<typeof categorySchema>;

export default function CategoryForm() {
  const primary = useUnstableNativeVariable("--color-primary");
  const surface = useUnstableNativeVariable("--color-surface");
  const border = useUnstableNativeVariable("--color-border");
  const textPrimary = useUnstableNativeVariable("--color-textPrimary");
  const textSecondary = useUnstableNativeVariable("--color-textSecondary");
  const danger = useUnstableNativeVariable("--color-danger");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      category: "",
    },
  });

  const onSubmit = (data: CategoryFormData) => {
    console.log(data);
  };

  return (
    <View style={{ gap: 8, flex: 1 }} className="">
      {/* Label */}
      <Text
        style={{
          color: textPrimary,
          fontSize: 14,
          fontWeight: "500",
        }}
      >
        Category
      </Text>

      {/* Input */}

      <Controller
        control={control}
        name="category"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="Enter category"
            placeholderTextColor={textSecondary}
            style={{
              flex: 1,
              height: 48,
              paddingHorizontal: 14,
              borderWidth: 1,
              borderRadius: 8,
              borderColor: errors.category ? danger : border,
              backgroundColor: surface,
              color: textPrimary,
              fontSize: 16,
            }}
          />
        )}
      />

      {/* Error */}
      {errors.category && (
        <Text
          style={{
            color: danger,
            fontSize: 13,
          }}
        >
          {errors.category.message}
        </Text>
      )}

      {/* Submit */}
      <Pressable
        onPress={handleSubmit(onSubmit)}
        style={{
          height: 48,
          marginTop: 8,
          borderRadius: 8,
          backgroundColor: primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: textPrimary,
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Save
        </Text>
      </Pressable>
    </View>
  );
}
