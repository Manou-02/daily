import { Text, View } from "react-native";

import MainAppLayout from "@/components/MainLayout";
import { db } from "@/db/initialize";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { SafeAreaView } from "react-native-safe-area-context";
import migrations from "../drizzle/migrations";

export default function Index() {
  const { success, error } = useMigrations(db, migrations);

  if (error) {
    return (
      <SafeAreaView>
        <Text>Migration Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  if (!success) {
    return (
      <View>
        <Text>Loading database migrations...</Text>
      </View>
    );
  }

  return <MainAppLayout />;
}
