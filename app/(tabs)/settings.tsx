import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function Settings() {
  const navigation = useRouter();

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
              onPress={() => navigation.navigate(item.route)}
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
    </ScrollView>
  );
}
