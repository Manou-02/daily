import { Pressable, Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-background p-6">
      <View className="bg-surface border border-border rounded-2xl p-5">
        <Text className="text-textPrimary text-2xl font-bold">Hello</Text>

        <Text className="text-textSecondary mt-2">
          Welcome to my application.
        </Text>

        <Pressable className="bg-primary rounded-xl p-4 mt-6">
          <Text className=" text-background text-center font-bold">
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
