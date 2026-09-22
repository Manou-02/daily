import { Pressable, Text, View } from "react-native";
// import { db } from "@/db/initialize";
// import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
// import { SafeAreaView } from "react-native-safe-area-context";
// import migrations from "../drizzle/migrations";

export default function Index() {
  // const { success, error } = useMigrations(db, migrations);

  // if (error) {
  //   return (
  //     <SafeAreaView>
  //       <Text>Migration Error: {error.message}</Text>
  //     </SafeAreaView>
  //   );
  // }

  // if (!success) {
  //   return (
  //     <View>
  //       <Text>Loading database migrations...</Text>
  //     </View>
  //   );
  // }

  return (
    <View className="flex-1 bg-background p-6">
      <View className="bg-surface border border-border rounded-2xl p-5">
        <Text className="text-textPrimary text-2xl font-bold">Hello</Text>

        <Text className="text-textSecondary mt-2">
          Welcome to my application.
        </Text>

        <Pressable className="bg-primary rounded-xl p-4 mt-6">
          <Text className="text-white text-center font-bold">Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}
