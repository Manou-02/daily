import { db } from "@/db/initialize";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { users } from "../db/schema"; // Path to your schema definitions

export default function MainAppLayout() {
  const [name, setName] = useState("");
  const [userList, setUserList] = useState<Array<typeof users.$inferSelect>>(
    [],
  );
  const [loading, setLoading] = useState(true);

  // 1. Fetch all users from the database
  const fetchUsers = async () => {
    try {
      setLoading(true);
      // Run: SELECT * FROM users;
      const data = await db.select().from(users);
      setUserList(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  // Run the fetch on initial load
  useEffect(() => {
    fetchUsers();
  }, []);

  // 2. Insert a new user into the database
  const handleAddUser = async () => {
    if (!name) return;

    try {
      // Run: INSERT INTO users (name, email) VALUES (name, email);
      await db.insert(users).values({ name });

      // Clear inputs and refresh the list
      setName("");
      await fetchUsers();
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drizzle + Expo SQL Database</Text>

      {/* Form Input Section */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          value={name}
          onChangeText={setName}
        />

        <Button title="Add User" onPress={handleAddUser} />
      </View>

      {/* List Display Section */}
      <Text style={styles.subtitle}>Registered Users:</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={userList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.userCard}>
              <Text style={styles.userName}>{item.name}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.empty}>No users found.</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },
  form: {
    marginBottom: 20,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  userCard: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
  empty: {
    textAlign: "center",
    color: "#888",
    marginTop: 20,
  },
});
