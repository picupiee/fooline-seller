import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import { signOut } from "firebase/auth"; // Only import signOut
import { auth } from "@/firebase"; // Import your Firebase config

export default function Settings() {
  const router = useRouter();

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      console.log("User logged out successfully!");
      router.push("/"); // Redirect to the root route (AuthPage)
    } catch (error) {
      console.error("Logout failed:", error);
      Alert.alert(
        "Logout Failed",
        "An error occurred while logging out. Please try again."
      );
    }
  };

  return (
    <ScrollView className="h-full">
      <View className="mt-8 ml-8">
        <Text className=" text-black text-[40px] font-bold mb-10">
          Settings
        </Text>
      </View>
      <View className="p-2 mx-3">
        <FlatList
          data={[
            { key: "Edit Profile", route: "/(settings)/(profile)/[uid]/page" },
            { key: "Account", route: "/(settings)/account" },
            { key: "Preferences", route: "/(settings)/preferences" },
            { key: "Transaction History", route: "/(settings)/trx-history" },
            { key: "Help", route: "/(settings)/help" },
            { key: "About", route: "/(settings)/about" },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(item.route)}
              className="rounded-none p-4 h-[60px] flex-row justify-between items-center border-b-2 border-gray-400"
            >
              <Text className="text-black text-[20px]">{item.key}</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          )}
          scrollEnabled={false}
        />
      </View>
      <Pressable
        onPress={handleLogout} // Use the handleLogout function
        className="flex-1 items-center justify-center mt-10"
      >
        <Text className="font-semibold text-red text-xl py-2 px-4 rounded-md bg-red-500 text-white text-center">
          Logout
        </Text>
      </Pressable>
    </ScrollView>
  );
}
